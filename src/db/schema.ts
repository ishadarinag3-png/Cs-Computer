import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

// 1. Users Table (keyed by Firebase UID and surrogate id)
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  displayName: text('display_name').notNull().default('Learner'),
  role: text('role').notNull().default('student'), // 'student' | 'instructor' | 'admin'
  preferredLanguage: text('preferred_language').notNull().default('bilingual'), // 'bilingual' | 'punjabi' | 'english'
  xp: integer('xp').notNull().default(0),
  streakDays: integer('streak_days').notNull().default(1),
  dailyGoalMinutes: integer('daily_goal_minutes').notNull().default(30),
  lastActiveDate: text('last_active_date').notNull().default(''),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 2. Study Tasks Table (Real-time PostgreSQL Task Manager + Push Notification Reminders)
export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  userUid: text('user_uid')
    .references(() => users.uid, { onDelete: 'cascade' })
    .notNull(),
  title: text('title').notNull(),
  description: text('description').notNull().default(''),
  category: text('category').notNull().default('Computer Science'), // 'Computer Science' | 'Binary & Assembly' | 'Algorithms' | 'Discrete Math' | 'Practice Quiz'
  priority: text('priority').notNull().default('medium'), // 'low' | 'medium' | 'high'
  dueDate: text('due_date').notNull(), // ISO date or YYYY-MM-DDTHH:mm
  completed: boolean('completed').notNull().default(false),
  notifyEnabled: boolean('notify_enabled').notNull().default(true),
  linkedLessonSlug: text('linked_lesson_slug').default(''),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 3. Courses / Levels Table (8 CS Levels + CS Math Track, Editable Syllabus)
export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  levelNumber: integer('level_number').notNull(),
  titleEn: text('title_en').notNull(),
  titlePa: text('title_pa').notNull(),
  descriptionEn: text('description_en').notNull(),
  descriptionPa: text('description_pa').notNull(),
  category: text('category').notNull().default('core-cs'), // 'core-cs' | 'cs-math' | 'algorithms'
  estimatedHours: integer('estimated_hours').notNull().default(6),
  published: boolean('published').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 4. Modules Table
export const modules = pgTable('modules', {
  id: serial('id').primaryKey(),
  courseId: integer('course_id')
    .references(() => courses.id, { onDelete: 'cascade' })
    .notNull(),
  orderIndex: integer('order_index').notNull().default(1),
  titleEn: text('title_en').notNull(),
  titlePa: text('title_pa').notNull(),
  summaryEn: text('summary_en').notNull().default(''),
  summaryPa: text('summary_pa').notNull().default(''),
});

// 5. Lessons Table (Full Bilingual Content, Child Analogy, Technical Breakdown, Code/Assembly Demo, Quiz)
export const lessons = pgTable('lessons', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  courseId: integer('course_id')
    .references(() => courses.id, { onDelete: 'cascade' })
    .notNull(),
  moduleId: integer('module_id')
    .references(() => modules.id, { onDelete: 'cascade' })
    .notNull(),
  orderIndex: integer('order_index').notNull().default(1),
  titleEn: text('title_en').notNull(),
  titlePa: text('title_pa').notNull(),
  objectivesJson: jsonb('objectives_json').$type<string[]>().notNull().default([]),
  prerequisitesJson: jsonb('prerequisites_json').$type<string[]>().notNull().default([]),
  childAnalogyEn: text('child_analogy_en').notNull(),
  childAnalogyPa: text('child_analogy_pa').notNull(),
  technicalExplanationEn: text('technical_explanation_en').notNull(),
  technicalExplanationPa: text('technical_explanation_pa').notNull(),
  practicalExampleEn: text('practical_example_en').notNull(),
  practicalExamplePa: text('practical_example_pa').notNull(),
  codeDemo: text('code_demo').notNull().default(''),
  misconceptionsJson: jsonb('misconceptions_json')
    .$type<Array<{ myth: string; truthEn: string; truthPa: string }>>()
    .notNull()
    .default([]),
  terminologyJson: jsonb('terminology_json')
    .$type<Array<{ term: string; punjabi: string; meaningEn: string; meaningPa: string }>>()
    .notNull()
    .default([]),
  interactiveLabId: text('interactive_lab_id').notNull().default('hardware-explorer'),
  exercisePromptEn: text('exercise_prompt_en').notNull().default(''),
  exercisePromptPa: text('exercise_prompt_pa').notNull().default(''),
  summaryEn: text('summary_en').notNull().default(''),
  summaryPa: text('summary_pa').notNull().default(''),
  furtherReadingJson: jsonb('further_reading_json').$type<string[]>().notNull().default([]),
  published: boolean('published').notNull().default(true),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// 6. Course Enrollments Table
export const enrollments = pgTable(
  'enrollments',
  {
    id: serial('id').primaryKey(),
    userUid: text('user_uid')
      .references(() => users.uid, { onDelete: 'cascade' })
      .notNull(),
    courseId: integer('course_id')
      .references(() => courses.id, { onDelete: 'cascade' })
      .notNull(),
    enrolledAt: timestamp('enrolled_at').defaultNow().notNull(),
  },
  (table) => [uniqueIndex('user_course_unique_idx').on(table.userUid, table.courseId)]
);

// 7. Lesson Progress Table
export const lessonProgress = pgTable(
  'lesson_progress',
  {
    id: serial('id').primaryKey(),
    userUid: text('user_uid')
      .references(() => users.uid, { onDelete: 'cascade' })
      .notNull(),
    lessonId: integer('lesson_id')
      .references(() => lessons.id, { onDelete: 'cascade' })
      .notNull(),
    completed: boolean('completed').notNull().default(false),
    timeSpentMinutes: integer('time_spent_minutes').notNull().default(5),
    completedAt: timestamp('completed_at').defaultNow().notNull(),
  },
  (table) => [uniqueIndex('user_lesson_unique_idx').on(table.userUid, table.lessonId)]
);

// 8. Quizzes Table
export const quizzes = pgTable('quizzes', {
  id: serial('id').primaryKey(),
  lessonId: integer('lesson_id')
    .references(() => lessons.id, { onDelete: 'cascade' })
    .notNull(),
  titleEn: text('title_en').notNull(),
  titlePa: text('title_pa').notNull(),
  timeLimitSeconds: integer('time_limit_seconds').notNull().default(300),
  passingScorePercent: integer('passing_score_percent').notNull().default(70),
});

// 9. Quiz Questions Table (Supports Multiple Choice, True/False, Fill in the Blank)
export const questions = pgTable('questions', {
  id: serial('id').primaryKey(),
  quizId: integer('quiz_id')
    .references(() => quizzes.id, { onDelete: 'cascade' })
    .notNull(),
  questionType: text('question_type').notNull().default('mcq'), // 'mcq' | 'true_false' | 'fill_blank'
  topicTag: text('topic_tag').notNull().default('Fundamentals'),
  promptEn: text('prompt_en').notNull(),
  promptPa: text('prompt_pa').notNull(),
  optionsJson: jsonb('options_json').$type<string[]>().notNull().default([]),
  correctAnswer: text('correct_answer').notNull(),
  explanationEn: text('explanation_en').notNull(),
  explanationPa: text('explanation_pa').notNull(),
});

// 10. Quiz Attempts Table
export const quizAttempts = pgTable('quiz_attempts', {
  id: serial('id').primaryKey(),
  userUid: text('user_uid')
    .references(() => users.uid, { onDelete: 'cascade' })
    .notNull(),
  quizId: integer('quiz_id')
    .references(() => quizzes.id, { onDelete: 'cascade' })
    .notNull(),
  scorePercent: integer('score_percent').notNull(),
  correctCount: integer('correct_count').notNull(),
  totalQuestions: integer('total_questions').notNull(),
  passed: boolean('passed').notNull(),
  mode: text('mode').notNull().default('practice'), // 'practice' | 'timed'
  answersJson: jsonb('answers_json')
    .$type<Array<{ questionId: number; submitted: string; isCorrect: boolean; topicTag: string }>>()
    .notNull()
    .default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 11. Bookmarks Table
export const bookmarks = pgTable(
  'bookmarks',
  {
    id: serial('id').primaryKey(),
    userUid: text('user_uid')
      .references(() => users.uid, { onDelete: 'cascade' })
      .notNull(),
    lessonId: integer('lesson_id')
      .references(() => lessons.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => [uniqueIndex('user_bookmark_unique_idx').on(table.userUid, table.lessonId)]
);

// 12. Personal Notes Table
export const notes = pgTable('notes', {
  id: serial('id').primaryKey(),
  userUid: text('user_uid')
    .references(() => users.uid, { onDelete: 'cascade' })
    .notNull(),
  lessonId: integer('lesson_id')
    .references(() => lessons.id, { onDelete: 'cascade' })
    .notNull(),
  content: text('content').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// 13. Achievements Catalog Table
export const achievements = pgTable('achievements', {
  id: serial('id').primaryKey(),
  code: text('code').notNull().unique(),
  titleEn: text('title_en').notNull(),
  titlePa: text('title_pa').notNull(),
  descriptionEn: text('description_en').notNull(),
  descriptionPa: text('description_pa').notNull(),
  xpReward: integer('xp_reward').notNull().default(100),
  iconName: text('icon_name').notNull().default('Award'),
});

// 14. User Achievements Table
export const userAchievements = pgTable(
  'user_achievements',
  {
    id: serial('id').primaryKey(),
    userUid: text('user_uid')
      .references(() => users.uid, { onDelete: 'cascade' })
      .notNull(),
    achievementCode: text('achievement_code')
      .references(() => achievements.code, { onDelete: 'cascade' })
      .notNull(),
    unlockedAt: timestamp('unlocked_at').defaultNow().notNull(),
  },
  (table) => [uniqueIndex('user_achievement_unique_idx').on(table.userUid, table.achievementCode)]
);

// 15. AI Tutor Messages Table
export const tutorMessages = pgTable('tutor_messages', {
  id: serial('id').primaryKey(),
  userUid: text('user_uid')
    .references(() => users.uid, { onDelete: 'cascade' })
    .notNull(),
  lessonSlug: text('lesson_slug').notNull().default('general'),
  role: text('role').notNull(), // 'user' | 'assistant'
  content: text('content').notNull(),
  mode: text('mode').notNull().default('child-friendly'), // 'child-friendly' | 'deep-technical' | 'math-step'
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const coursesRelations = relations(courses, ({ many }) => ({
  modules: many(modules),
  lessons: many(lessons),
}));

export const modulesRelations = relations(modules, ({ one, many }) => ({
  course: one(courses, {
    fields: [modules.courseId],
    references: [courses.id],
  }),
  lessons: many(lessons),
}));

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  course: one(courses, {
    fields: [lessons.courseId],
    references: [courses.id],
  }),
  module: one(modules, {
    fields: [lessons.moduleId],
    references: [modules.id],
  }),
  quizzes: many(quizzes),
}));
