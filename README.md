# Computer Fundamentals Academy

A full-stack bilingual (**Punjabi in Gurmukhi + English terminology**) Computer Science & Mathematics learning platform with interactive hardware simulations, step-by-step algorithm visualizers, a PostgreSQL-backed study task planner with push notifications, deterministic assessment quizzes, and a high-reasoning AI Tutor (`gemini-4-argon` with `ThinkingLevel.HIGH`).

---

## Architecture & Technology Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Lucide Icons, Interactive SVG Laboratories, Mobile-First responsive layout (iPhone & Desktop) with Dark/Light modes.
- **Backend**: Node.js, Express (`server.ts`), Zod input validation, REST API (`/api/*`).
- **Database**: Managed Cloud SQL for PostgreSQL, Drizzle ORM (`src/db/schema.ts`, `src/db/index.ts`, `src/db/queries.ts`), Drizzle Kit (`src/db/drizzle.config.ts`).
- **Authentication**: Firebase Authentication (Google Sign-In via OAuth) verified on the server with `firebase-admin` (`src/middleware/auth.ts`).
- **AI Tutor**: Server-side `@google/genai` SDK calling `gemini-4-argon` with `ThinkingLevel.HIGH`.

---

## Environment Variables (`.env`)

- `GEMINI_API_KEY`: Server-side Gemini API key.
- `SQL_HOST`, `SQL_DB_NAME`, `SQL_USER`, `SQL_PASSWORD`: Runtime Cloud SQL connection pool variables.
- `SQL_ADMIN_USER`, `SQL_ADMIN_PASSWORD`: Drizzle Kit schema migration variables.

---

## Commands

- `npm run dev` — Starts the full-stack Express + Vite server on port `3000`.
- `npm run build` — Builds the production frontend bundle (`dist/`).
- `npm run lint` — Runs TypeScript type-checking (`tsc --noEmit`).
- `npm start` — Starts the production server (`node server.ts`).
