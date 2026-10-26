import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { pool } from './index.ts';
import { checkDatabaseReadiness, EXPECTED_SCHEMA_TABLES, REQUIRED_TABLE_COLUMNS } from './queries.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function runMigrations() {
  const migrationFilename = '0000_initial_schema.sql';
  const migrationPath = path.resolve(__dirname, `../../drizzle/${migrationFilename}`);
  if (!fs.existsSync(migrationPath)) {
    throw new Error(`Migration file not found at ${migrationPath}`);
  }

  const sqlContent = fs.readFileSync(migrationPath, 'utf-8');
  const checksum = crypto.createHash('sha256').update(sqlContent).digest('hex');
  const statements = sqlContent
    .split('--> statement-breakpoint')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const client = await pool.connect();
  try {
    // Check existing tables in public schema
    const existingRes = await client.query<{ table_name: string }>(
      `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`
    );
    const existingTables = new Set(existingRes.rows.map((r) => r.table_name));
    const missingTables = EXPECTED_SCHEMA_TABLES.filter((t) => !existingTables.has(t));

    // Check existing columns in public schema
    const columnsRes = await client.query<{ table_name: string; column_name: string }>(
      `SELECT table_name, column_name FROM information_schema.columns WHERE table_schema = 'public'`
    );
    const existingCols = new Set(columnsRes.rows.map((r) => `${r.table_name}.${r.column_name}`));
    const missingColumns = REQUIRED_TABLE_COLUMNS.filter((col) => !existingCols.has(col));

    // Attempt to record migration ledger if user has DDL privileges
    let canWriteMigrationsTable = false;
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS "schema_migrations" (
          "id" serial PRIMARY KEY NOT NULL,
          "filename" text NOT NULL UNIQUE,
          "checksum" text NOT NULL,
          "applied_at" timestamp DEFAULT now() NOT NULL
        );
      `);
      canWriteMigrationsTable = true;
    } catch (ddlErr: any) {
      if (ddlErr?.code !== '42501') {
        throw ddlErr;
      }
    }

    if (missingTables.length > 0) {
      await client.query('BEGIN');
      for (const stmt of statements) {
        await client.query(stmt);
      }
      if (canWriteMigrationsTable) {
        await client.query(
          `INSERT INTO "schema_migrations" ("filename", "checksum")
           VALUES ($1, $2)
           ON CONFLICT ("filename") DO UPDATE SET "checksum" = EXCLUDED."checksum", "applied_at" = now()`,
          [migrationFilename, checksum]
        );
      }
      await client.query('COMMIT');
    } else if (canWriteMigrationsTable) {
      await client.query(
        `INSERT INTO "schema_migrations" ("filename", "checksum")
         VALUES ($1, $2)
         ON CONFLICT ("filename") DO NOTHING`,
        [migrationFilename, checksum]
      );
    }

    if (missingColumns.length > 0) {
      const recheckCols = await client.query<{ table_name: string; column_name: string }>(
        `SELECT table_name, column_name FROM information_schema.columns WHERE table_schema = 'public'`
      );
      const afterCols = new Set(recheckCols.rows.map((r) => `${r.table_name}.${r.column_name}`));
      const stillMissing = REQUIRED_TABLE_COLUMNS.filter((col) => !afterCols.has(col));
      if (stillMissing.length > 0) {
        throw new Error(`Database schema missing required columns: ${stillMissing.join(', ')}`);
      }
    }
  } catch (err: any) {
    try {
      await client.query('ROLLBACK');
    } catch {
      // ignore rollback error
    }
    throw err;
  } finally {
    client.release();
  }

  const health = await checkDatabaseReadiness();
  if (!health.ok) {
    throw new Error(`Database readiness check failed after migration: ${health.error}`);
  }
  return {
    verifiedTables: EXPECTED_SCHEMA_TABLES.length,
    verifiedColumns: REQUIRED_TABLE_COLUMNS.length,
    migrationBlocks: statements.length,
    checksum,
    health,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  runMigrations()
    .then((res) => {
      console.log(
        `Migrations verified (${res.verifiedTables} tables, ${res.verifiedColumns} columns active, ${res.migrationBlocks} DDL blocks tracked, sha256=${res.checksum.slice(0, 12)}). Database ready (${res.health.latencyMs}ms).`
      );
      process.exit(0);
    })
    .catch((err) => {
      console.error('Migration failed:', err);
      process.exit(1);
    });
}
