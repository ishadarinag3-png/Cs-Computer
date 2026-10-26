-- Version-controlled PostgreSQL Migration: 0000_initial_schema.sql
-- Computer Fundamentals Academy Complete Relational Schema & Indexes

CREATE TABLE IF NOT EXISTS "users" (
  "id" serial PRIMARY KEY NOT NULL,
  "uid" text NOT NULL UNIQUE,
  "email" text NOT NULL,
  "display_name" text DEFAULT 'Learner' NOT NULL,
  "role" text DEFAULT 'student' NOT NULL,
  "preferred_language" text DEFAULT 'bilingual' NOT NULL,
  "xp" integer DEFAULT 0 NOT NULL,
  "streak_days" integer DEFAULT 1 NOT NULL,
  "daily_goal_minutes" integer DEFAULT 30 NOT NULL,
  "last_active_date" text DEFAULT '' NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "tasks" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "title" text NOT NULL,
  "description" text DEFAULT '' NOT NULL,
  "category" text DEFAULT 'Computer Science' NOT NULL,
  "priority" text DEFAULT 'medium' NOT NULL,
  "due_date" text NOT NULL,
  "completed" boolean DEFAULT false NOT NULL,
  "notify_enabled" boolean DEFAULT true NOT NULL,
  "linked_lesson_slug" text DEFAULT '',
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses" (
  "id" serial PRIMARY KEY NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "level_number" integer NOT NULL,
  "title_en" text NOT NULL,
  "title_pa" text NOT NULL,
  "description_en" text NOT NULL,
  "description_pa" text NOT NULL,
  "category" text DEFAULT 'core-cs' NOT NULL,
  "estimated_hours" integer DEFAULT 6 NOT NULL,
  "published" boolean DEFAULT true NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "modules" (
  "id" serial PRIMARY KEY NOT NULL,
  "course_id" integer NOT NULL REFERENCES "courses"("id") ON DELETE CASCADE,
  "order_index" integer DEFAULT 1 NOT NULL,
  "title_en" text NOT NULL,
  "title_pa" text NOT NULL,
  "summary_en" text DEFAULT '' NOT NULL,
  "summary_pa" text DEFAULT '' NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "course_module_order_unique_idx" ON "modules" USING btree ("course_id", "order_index");

CREATE TABLE IF NOT EXISTS "lessons" (
  "id" serial PRIMARY KEY NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "course_id" integer NOT NULL REFERENCES "courses"("id") ON DELETE CASCADE,
  "module_id" integer NOT NULL REFERENCES "modules"("id") ON DELETE CASCADE,
  "order_index" integer DEFAULT 1 NOT NULL,
  "title_en" text NOT NULL,
  "title_pa" text NOT NULL,
  "objectives_json" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "prerequisites_json" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "child_analogy_en" text NOT NULL,
  "child_analogy_pa" text NOT NULL,
  "technical_explanation_en" text NOT NULL,
  "technical_explanation_pa" text NOT NULL,
  "practical_example_en" text NOT NULL,
  "practical_example_pa" text NOT NULL,
  "code_demo" text DEFAULT '' NOT NULL,
  "misconceptions_json" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "terminology_json" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "interactive_lab_id" text DEFAULT 'hardware-explorer' NOT NULL,
  "exercise_prompt_en" text DEFAULT '' NOT NULL,
  "exercise_prompt_pa" text DEFAULT '' NOT NULL,
  "summary_en" text DEFAULT '' NOT NULL,
  "summary_pa" text DEFAULT '' NOT NULL,
  "further_reading_json" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "published" boolean DEFAULT true NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "enrollments" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "course_id" integer NOT NULL REFERENCES "courses"("id") ON DELETE CASCADE,
  "enrolled_at" timestamp DEFAULT now() NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "user_course_unique_idx" ON "enrollments" USING btree ("user_uid", "course_id");

CREATE TABLE IF NOT EXISTS "lesson_progress" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "lesson_id" integer NOT NULL REFERENCES "lessons"("id") ON DELETE CASCADE,
  "completed" boolean DEFAULT false NOT NULL,
  "time_spent_minutes" integer DEFAULT 5 NOT NULL,
  "completed_at" timestamp DEFAULT now() NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "user_lesson_unique_idx" ON "lesson_progress" USING btree ("user_uid", "lesson_id");

CREATE TABLE IF NOT EXISTS "quizzes" (
  "id" serial PRIMARY KEY NOT NULL,
  "lesson_id" integer NOT NULL REFERENCES "lessons"("id") ON DELETE CASCADE,
  "title_en" text NOT NULL,
  "title_pa" text NOT NULL,
  "time_limit_seconds" integer DEFAULT 300 NOT NULL,
  "passing_score_percent" integer DEFAULT 70 NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "quiz_lesson_unique_idx" ON "quizzes" USING btree ("lesson_id");

CREATE TABLE IF NOT EXISTS "questions" (
  "id" serial PRIMARY KEY NOT NULL,
  "quiz_id" integer NOT NULL REFERENCES "quizzes"("id") ON DELETE CASCADE,
  "question_type" text DEFAULT 'mcq' NOT NULL,
  "topic_tag" text DEFAULT 'Fundamentals' NOT NULL,
  "prompt_en" text NOT NULL,
  "prompt_pa" text NOT NULL,
  "options_json" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "correct_answer" text NOT NULL,
  "explanation_en" text NOT NULL,
  "explanation_pa" text NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "question_quiz_prompt_unique_idx" ON "questions" USING btree ("quiz_id", "prompt_en");

CREATE TABLE IF NOT EXISTS "quiz_sessions" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "quiz_id" integer NOT NULL REFERENCES "quizzes"("id") ON DELETE CASCADE,
  "mode" text DEFAULT 'practice' NOT NULL,
  "started_at" timestamp DEFAULT now() NOT NULL,
  "expires_at" timestamp NOT NULL,
  "submitted_at" timestamp
);

CREATE TABLE IF NOT EXISTS "quiz_attempts" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "quiz_id" integer NOT NULL REFERENCES "quizzes"("id") ON DELETE CASCADE,
  "score_percent" integer NOT NULL,
  "correct_count" integer NOT NULL,
  "total_questions" integer NOT NULL,
  "passed" boolean NOT NULL,
  "mode" text DEFAULT 'practice' NOT NULL,
  "time_taken_seconds" integer DEFAULT 0 NOT NULL,
  "answers_json" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "bookmarks" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "lesson_id" integer NOT NULL REFERENCES "lessons"("id") ON DELETE CASCADE,
  "created_at" timestamp DEFAULT now() NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "user_bookmark_unique_idx" ON "bookmarks" USING btree ("user_uid", "lesson_id");

CREATE TABLE IF NOT EXISTS "notes" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "lesson_id" integer NOT NULL REFERENCES "lessons"("id") ON DELETE CASCADE,
  "content" text NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "user_note_lesson_unique_idx" ON "notes" USING btree ("user_uid", "lesson_id");

CREATE TABLE IF NOT EXISTS "achievements" (
  "id" serial PRIMARY KEY NOT NULL,
  "code" text NOT NULL UNIQUE,
  "title_en" text NOT NULL,
  "title_pa" text NOT NULL,
  "description_en" text NOT NULL,
  "description_pa" text NOT NULL,
  "xp_reward" integer DEFAULT 100 NOT NULL,
  "icon_name" text DEFAULT 'Award' NOT NULL
);

CREATE TABLE IF NOT EXISTS "user_achievements" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "achievement_code" text NOT NULL REFERENCES "achievements"("code") ON DELETE CASCADE,
  "unlocked_at" timestamp DEFAULT now() NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "user_achievement_unique_idx" ON "user_achievements" USING btree ("user_uid", "achievement_code");

CREATE TABLE IF NOT EXISTS "tutor_messages" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_uid" text NOT NULL REFERENCES "users"("uid") ON DELETE CASCADE,
  "lesson_slug" text DEFAULT 'general' NOT NULL,
  "role" text NOT NULL,
  "content" text NOT NULL,
  "mode" text DEFAULT 'child-friendly' NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);
