import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './index.ts';
import { checkDatabaseReadiness } from './queries.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EXPECTED_TABLES = [
  'users',
  'courses',
  'modules',
  'lessons',
  'enrollments',
  'quizzes',
  'questions',
  'quiz_sessions',
  'quiz_attempts',
  'lesson_progress',
  'tasks',
  'bookmarks',
  'notes',
  'achievements',
  'user_achievements',
  'tutor_messages',
];

export async function runMigrations() {
  const migrationPath = path.resolve(__dirname, '../../drizzle/0000_initial_schema.sql');
  if (!fs.existsSync(migrationPath)) {
    throw new Error(`Migration file not found at ${migrationPath}`);
  }

  const sqlContent = fs.readFileSync(migrationPath, 'utf-8');
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
    const missingTables = EXPECTED_TABLES.filter((t) => !existingTables.has(t));

    if (missingTables.length > 0) {
      await client.query('BEGIN');
      for (const stmt of statements) {
        await client.query(stmt);
      }
      await client.query('COMMIT');
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
    verifiedTables: EXPECTED_TABLES.length,
    migrationBlocks: statements.length,
    health,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  runMigrations()
    .then((res) => {
      console.log(
        `Migrations verified (${res.verifiedTables} tables active, ${res.migrationBlocks} DDL blocks tracked). Database ready (${res.health.latencyMs}ms).`
      );
      process.exit(0);
    })
    .catch((err) => {
      console.error('Migration failed:', err);
      process.exit(1);
    });
}
