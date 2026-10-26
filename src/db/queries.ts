import { eq, desc, and } from 'drizzle-orm';
import { db, pool } from './index.ts';
import {
  users,
  tasks,
  courses,
  modules,
  lessons,
  enrollments,
  lessonProgress,
  quizzes,
  questions,
  quizSessions,
  quizAttempts,
  bookmarks,
  notes,
  achievements,
  userAchievements,
  tutorMessages,
} from './schema.ts';
import { SEED_COURSES, INITIAL_ACHIEVEMENTS, computeSyllabusCoverageReport } from './seed-data.ts';

export class AppValidationError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'AppValidationError';
    this.statusCode = statusCode;
  }
}

export async function checkDatabaseReadiness(): Promise<{ ok: boolean; latencyMs: number; error?: string }> {
  const start = Date.now();
  try {
    await pool.query('SELECT 1 AS ready');
    return { ok: true, latencyMs: Date.now() - start };
  } catch (err: any) {
    return {
      ok: false,
      latencyMs: Date.now() - start,
      error: 'Database connection check failed',
    };
  }
}

let seedingPromise: Promise<void> | null = null;
let lastSeededLessonCount = 0;

const EXPECTED_SEED_LESSON_COUNT = SEED_COURSES.reduce(
  (sum, c) => sum + c.modules.reduce((mSum, m) => mSum + m.lessons.length, 0),
  0
);

export async function ensureCurriculumSeeded(force = false): Promise<void> {
  if (!force && lastSeededLessonCount >= EXPECTED_SEED_LESSON_COUNT) {
    return;
  }
  if (seedingPromise) {
    return seedingPromise;
  }

  seedingPromise = (async () => {
    try {
      if (!force) {
        const existingCourses = await db.select().from(courses);
        const existingLessons = await db.select().from(lessons);
        const existingQuizzes = await db.select().from(quizzes);
        if (
          existingCourses.length >= SEED_COURSES.length &&
          existingLessons.length >= EXPECTED_SEED_LESSON_COUNT &&
          existingQuizzes.length >= EXPECTED_SEED_LESSON_COUNT
        ) {
          lastSeededLessonCount = existingLessons.length;
          return;
        }
      }

      await db.transaction(async (tx) => {
        // 1. Idempotently upsert Achievements Catalog
        for (const ach of INITIAL_ACHIEVEMENTS) {
          await tx
            .insert(achievements)
            .values(ach)
            .onConflictDoUpdate({
              target: achievements.code,
              set: {
                titleEn: ach.titleEn,
                titlePa: ach.titlePa,
                descriptionEn: ach.descriptionEn,
                descriptionPa: ach.descriptionPa,
                xpReward: ach.xpReward,
                iconName: ach.iconName,
              },
            });
        }

        // 2. Idempotently upsert Courses, Modules, Lessons, Quizzes, and Questions
        for (const courseData of SEED_COURSES) {
          const [insertedCourse] = await tx
            .insert(courses)
            .values({
              slug: courseData.slug,
              levelNumber: courseData.levelNumber,
              titleEn: courseData.titleEn,
              titlePa: courseData.titlePa,
              descriptionEn: courseData.descriptionEn,
              descriptionPa: courseData.descriptionPa,
              category: courseData.category,
              estimatedHours: courseData.estimatedHours,
              published: true,
            })
            .onConflictDoUpdate({
              target: courses.slug,
              set: {
                levelNumber: courseData.levelNumber,
                titleEn: courseData.titleEn,
                titlePa: courseData.titlePa,
                descriptionEn: courseData.descriptionEn,
                descriptionPa: courseData.descriptionPa,
                category: courseData.category,
                estimatedHours: courseData.estimatedHours,
                published: true,
              },
            })
            .returning();

          for (const modData of courseData.modules) {
            const [insertedModule] = await tx
              .insert(modules)
              .values({
                courseId: insertedCourse.id,
                orderIndex: modData.orderIndex,
                titleEn: modData.titleEn,
                titlePa: modData.titlePa,
                summaryEn: modData.summaryEn,
                summaryPa: modData.summaryPa,
              })
              .onConflictDoUpdate({
                target: [modules.courseId, modules.orderIndex],
                set: {
                  titleEn: modData.titleEn,
                  titlePa: modData.titlePa,
                  summaryEn: modData.summaryEn,
                  summaryPa: modData.summaryPa,
                },
              })
              .returning();

            for (const lessonData of modData.lessons) {
              const [insertedLesson] = await tx
                .insert(lessons)
                .values({
                  slug: lessonData.slug,
                  courseId: insertedCourse.id,
                  moduleId: insertedModule.id,
                  orderIndex: lessonData.orderIndex,
                  titleEn: lessonData.titleEn,
                  titlePa: lessonData.titlePa,
                  objectivesJson: lessonData.objectivesJson,
                  prerequisitesJson: lessonData.prerequisitesJson,
                  childAnalogyEn: lessonData.childAnalogyEn,
                  childAnalogyPa: lessonData.childAnalogyPa,
                  technicalExplanationEn: lessonData.technicalExplanationEn,
                  technicalExplanationPa: lessonData.technicalExplanationPa,
                  practicalExampleEn: lessonData.practicalExampleEn,
                  practicalExamplePa: lessonData.practicalExamplePa,
                  codeDemo: lessonData.codeDemo,
                  misconceptionsJson: lessonData.misconceptionsJson,
                  terminologyJson: lessonData.terminologyJson,
                  interactiveLabId: lessonData.interactiveLabId,
                  exercisePromptEn: lessonData.exercisePromptEn,
                  exercisePromptPa: lessonData.exercisePromptPa,
                  summaryEn: lessonData.summaryEn,
                  summaryPa: lessonData.summaryPa,
                  furtherReadingJson: lessonData.furtherReadingJson,
                  published: true,
                })
                .onConflictDoUpdate({
                  target: lessons.slug,
                  set: {
                    courseId: insertedCourse.id,
                    moduleId: insertedModule.id,
                    orderIndex: lessonData.orderIndex,
                    titleEn: lessonData.titleEn,
                    titlePa: lessonData.titlePa,
                    objectivesJson: lessonData.objectivesJson,
                    prerequisitesJson: lessonData.prerequisitesJson,
                    childAnalogyEn: lessonData.childAnalogyEn,
                    childAnalogyPa: lessonData.childAnalogyPa,
                    technicalExplanationEn: lessonData.technicalExplanationEn,
                    technicalExplanationPa: lessonData.technicalExplanationPa,
                    practicalExampleEn: lessonData.practicalExampleEn,
                    practicalExamplePa: lessonData.practicalExamplePa,
                    codeDemo: lessonData.codeDemo,
                    misconceptionsJson: lessonData.misconceptionsJson,
                    terminologyJson: lessonData.terminologyJson,
                    interactiveLabId: lessonData.interactiveLabId,
                    exercisePromptEn: lessonData.exercisePromptEn,
                    exercisePromptPa: lessonData.exercisePromptPa,
                    summaryEn: lessonData.summaryEn,
                    summaryPa: lessonData.summaryPa,
                    furtherReadingJson: lessonData.furtherReadingJson,
                    published: true,
                    updatedAt: new Date(),
                  },
                })
                .returning();

              if (lessonData.quiz) {
                const [insertedQuiz] = await tx
                  .insert(quizzes)
                  .values({
                    lessonId: insertedLesson.id,
                    titleEn: lessonData.quiz.titleEn,
                    titlePa: lessonData.quiz.titlePa,
                    timeLimitSeconds: lessonData.quiz.timeLimitSeconds,
                    passingScorePercent: lessonData.quiz.passingScorePercent,
                  })
                  .onConflictDoUpdate({
                    target: quizzes.lessonId,
                    set: {
                      titleEn: lessonData.quiz.titleEn,
                      titlePa: lessonData.quiz.titlePa,
                      timeLimitSeconds: lessonData.quiz.timeLimitSeconds,
                      passingScorePercent: lessonData.quiz.passingScorePercent,
                    },
                  })
                  .returning();

                for (const qData of lessonData.quiz.questions) {
                  await tx
                    .insert(questions)
                    .values({
                      quizId: insertedQuiz.id,
                      questionType: qData.questionType,
                      topicTag: qData.topicTag,
                      promptEn: qData.promptEn,
                      promptPa: qData.promptPa,
                      optionsJson: qData.optionsJson,
                      correctAnswer: qData.correctAnswer,
                      explanationEn: qData.explanationEn,
                      explanationPa: qData.explanationPa,
                    })
                    .onConflictDoUpdate({
                      target: [questions.quizId, questions.promptEn],
                      set: {
                        questionType: qData.questionType,
                        topicTag: qData.topicTag,
                        promptPa: qData.promptPa,
                        optionsJson: qData.optionsJson,
                        correctAnswer: qData.correctAnswer,
                        explanationEn: qData.explanationEn,
                        explanationPa: qData.explanationPa,
                      },
                    });
                }
              }
            }
          }
        }
      });

      const finalLessons = await db.select().from(lessons);
      lastSeededLessonCount = finalLessons.length;
    } catch (error) {
      console.error('Failed to seed curriculum:', error);
      throw new Error('Failed to initialize curriculum database.', { cause: error });
    } finally {
      seedingPromise = null;
    }
  })();

  return seedingPromise;
}

export async function getOrCreateUser(
  uid: string,
  email: string,
  displayName?: string,
  isTrustedAdmin = false
) {
  try {
    const todayStr = new Date().toISOString().slice(0, 10);
    const assignedRole = isTrustedAdmin ? 'admin' : 'student';

    const result = await db
      .insert(users)
      .values({
        uid,
        email,
        displayName: displayName || email.split('@')[0] || 'Scholar',
        role: assignedRole,
        lastActiveDate: todayStr,
      })
      .onConflictDoUpdate({
        target: users.uid,
        set: {
          email,
          role: assignedRole,
          lastActiveDate: todayStr,
        },
      })
      .returning();

    const user = result[0];

    // Seed initial helpful study tasks if user has zero tasks
    const existingTasks = await db.select().from(tasks).where(eq(tasks.userUid, uid));
    if (existingTasks.length === 0) {
      const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 16);
      const twoDays = new Date(Date.now() + 172800000).toISOString().slice(0, 16);
      await db.insert(tasks).values([
        {
          userUid: uid,
          title: 'Master Binary (0 & 1) and Logic Gates in Lab D & E',
          description: 'Toggle 8-bit switches and test XOR / AND truth tables with Punjabi explanations.',
          category: 'Binary & Assembly',
          priority: 'high',
          dueDate: tomorrow,
          completed: false,
          notifyEnabled: true,
          linkedLessonSlug: 'how-binary-and-logic-gates-work',
        },
        {
          userUid: uid,
          title: 'Complete CPU Instruction Cycle (Fetch-Decode-Execute) Simulation',
          description: 'Step through the assembly program in Lab B and take the Level 2 Quiz.',
          category: 'Computer Science',
          priority: 'medium',
          dueDate: twoDays,
          completed: false,
          notifyEnabled: true,
          linkedLessonSlug: 'cpu-alu-registers-memory-hierarchy',
        },
        {
          userUid: uid,
          title: 'Practice Discrete Math Sets & Propositional Logic',
          description: 'Review De Morgan’s Laws, Set Intersections, and Median vs Mean in Level 9.',
          category: 'Discrete Math',
          priority: 'high',
          dueDate: twoDays,
          completed: false,
          notifyEnabled: true,
          linkedLessonSlug: 'cs-math-logic-discrete-statistics',
        },
      ]);
    }

    return user;
  } catch (error) {
    console.error('Database query failed in getOrCreateUser:', error);
    throw new Error('Failed to load or create user profile.', { cause: error });
  }
}

export async function getUserByUid(uid: string) {
  const [user] = await db.select().from(users).where(eq(users.uid, uid));
  return user || null;
}

export async function updateUserSettings(
  uid: string,
  updates: { displayName?: string; preferredLanguage?: string; dailyGoalMinutes?: number }
) {
  try {
    const [updated] = await db
      .update(users)
      .set(updates)
      .where(eq(users.uid, uid))
      .returning();
    return updated;
  } catch (error) {
    console.error('Database query failed in updateUserSettings:', error);
    throw new Error('Failed to update user settings.', { cause: error });
  }
}

export async function getAllCurriculumData() {
  try {
    await ensureCurriculumSeeded();
    const allCourses = await db.select().from(courses).where(eq(courses.published, true));
    const allModules = await db.select().from(modules);
    const allLessons = await db.select().from(lessons).where(eq(lessons.published, true));
    const allQuizzes = await db.select().from(quizzes);
    const allQuestions = await db.select().from(questions);
    const allAchievements = await db.select().from(achievements);

    // SECURITY (Phase 1.5): Strip correctAnswer, explanationEn, and explanationPa from public quiz payloads!
    const sanitizedQuestions = allQuestions.map((q) => ({
      id: q.id,
      quizId: q.quizId,
      questionType: q.questionType,
      topicTag: q.topicTag,
      promptEn: q.promptEn,
      promptPa: q.promptPa,
      optionsJson: q.optionsJson,
    }));

    const sortedCourses = allCourses.sort((a, b) => a.levelNumber - b.levelNumber);
    const courseLevelMap = new Map(sortedCourses.map((c) => [c.id, c.levelNumber]));
    const sortedLessons = allLessons.sort((a, b) => {
      const lvlA = courseLevelMap.get(a.courseId) ?? 99;
      const lvlB = courseLevelMap.get(b.courseId) ?? 99;
      if (lvlA !== lvlB) return lvlA - lvlB;
      return a.orderIndex - b.orderIndex;
    });

    const coverageReport = computeSyllabusCoverageReport(sortedLessons.map((l) => l.slug));

    return {
      courses: sortedCourses,
      modules: allModules.sort((a, b) => a.orderIndex - b.orderIndex),
      lessons: sortedLessons,
      quizzes: allQuizzes,
      questions: sanitizedQuestions,
      achievements: allAchievements,
      coverageReport,
      syllabusCoverage: coverageReport,
    };
  } catch (error) {
    console.error('Database query failed in getAllCurriculumData:', error);
    throw new Error('Failed to fetch curriculum data.', { cause: error });
  }
}

export async function getUserDashboardState(uid: string) {
  try {
    const userTasks = await db
      .select()
      .from(tasks)
      .where(eq(tasks.userUid, uid))
      .orderBy(desc(tasks.createdAt));
    const userProgress = await db
      .select()
      .from(lessonProgress)
      .where(eq(lessonProgress.userUid, uid));
    const userAttempts = await db
      .select()
      .from(quizAttempts)
      .where(eq(quizAttempts.userUid, uid))
      .orderBy(desc(quizAttempts.createdAt));
    const userBms = await db
      .select()
      .from(bookmarks)
      .where(eq(bookmarks.userUid, uid));
    const userNts = await db
      .select()
      .from(notes)
      .where(eq(notes.userUid, uid))
      .orderBy(desc(notes.updatedAt));
    const unlockedAch = await db
      .select()
      .from(userAchievements)
      .where(eq(userAchievements.userUid, uid));
    const userEnrollments = await db
      .select()
      .from(enrollments)
      .where(eq(enrollments.userUid, uid));

    return {
      tasks: userTasks,
      lessonProgress: userProgress,
      quizAttempts: userAttempts,
      bookmarks: userBms,
      notes: userNts,
      unlockedAchievements: unlockedAch,
      enrollments: userEnrollments,
    };
  } catch (error) {
    console.error('Database query failed in getUserDashboardState:', error);
    throw new Error('Failed to load user learning state.', { cause: error });
  }
}

export async function evaluateAndUnlockAchievements(uid: string) {
  try {
    const progressRows = await db
      .select()
      .from(lessonProgress)
      .where(and(eq(lessonProgress.userUid, uid), eq(lessonProgress.completed, true)));
    const attemptsRows = await db
      .select()
      .from(quizAttempts)
      .where(eq(quizAttempts.userUid, uid));
    const completedTasks = await db
      .select()
      .from(tasks)
      .where(and(eq(tasks.userUid, uid), eq(tasks.completed, true)));

    const newlyUnlocked: string[] = [];

    const award = async (code: string, xpBonus: number) => {
      const existing = await db
        .select()
        .from(userAchievements)
        .where(and(eq(userAchievements.userUid, uid), eq(userAchievements.achievementCode, code)));
      if (existing.length === 0) {
        const inserted = await db
          .insert(userAchievements)
          .values({ userUid: uid, achievementCode: code })
          .onConflictDoNothing()
          .returning();
        if (inserted.length > 0) {
          const [u] = await db.select().from(users).where(eq(users.uid, uid));
          if (u) {
            await db
              .update(users)
              .set({ xp: u.xp + xpBonus })
              .where(eq(users.uid, uid));
          }
          newlyUnlocked.push(code);
        }
      }
    };

    if (progressRows.length >= 1) {
      await award('FIRST_STEP', 100);
    }
    if (progressRows.length >= 3) {
      await award('CURRICULUM_EXPLORER', 350);
    }
    if (attemptsRows.some((a) => a.scorePercent >= 80)) {
      await award('QUIZ_ACE', 200);
    }
    if (completedTasks.length >= 1) {
      await award('TASK_DISCIPLINE', 150);
    }

    // Check binary lesson completion
    const allLessons = await db.select().from(lessons);
    const binaryLesson = allLessons.find((l) => l.slug === 'how-binary-and-logic-gates-work');
    if (binaryLesson && progressRows.some((p) => p.lessonId === binaryLesson.id)) {
      await award('BINARY_MASTER', 250);
    }

    return newlyUnlocked;
  } catch (error) {
    console.error('Error evaluating achievements:', error);
    return [];
  }
}

export async function createTaskForUser(
  uid: string,
  payload: {
    title: string;
    description: string;
    category: string;
    priority: string;
    dueDate: string;
    notifyEnabled: boolean;
    linkedLessonSlug?: string;
  }
) {
  try {
    const [created] = await db
      .insert(tasks)
      .values({
        userUid: uid,
        title: payload.title,
        description: payload.description,
        category: payload.category,
        priority: payload.priority,
        dueDate: payload.dueDate,
        notifyEnabled: payload.notifyEnabled,
        linkedLessonSlug: payload.linkedLessonSlug || '',
        completed: false,
      })
      .returning();
    return created;
  } catch (error) {
    console.error('Database query failed in createTaskForUser:', error);
    throw new Error('Failed to create task.', { cause: error });
  }
}

export async function toggleTaskStatus(uid: string, taskId: number, completed: boolean) {
  try {
    const [updated] = await db
      .update(tasks)
      .set({ completed })
      .where(and(eq(tasks.id, taskId), eq(tasks.userUid, uid)))
      .returning();
    if (!updated) {
      throw new AppValidationError('Task not found for this user.', 404);
    }
    let newlyUnlocked: string[] = [];
    if (completed) {
      newlyUnlocked = await evaluateAndUnlockAchievements(uid);
    }
    return { task: updated, newlyUnlocked };
  } catch (error) {
    if (error instanceof AppValidationError) throw error;
    console.error('Database query failed in toggleTaskStatus:', error);
    throw new Error('Failed to update task.', { cause: error });
  }
}

export async function deleteTaskForUser(uid: string, taskId: number) {
  try {
    const deletedRows = await db
      .delete(tasks)
      .where(and(eq(tasks.id, taskId), eq(tasks.userUid, uid)))
      .returning();
    if (deletedRows.length === 0) {
      throw new AppValidationError('Task not found for this user.', 404);
    }
    return { deleted: true };
  } catch (error) {
    if (error instanceof AppValidationError) throw error;
    console.error('Database query failed in deleteTaskForUser:', error);
    throw new Error('Failed to delete task.', { cause: error });
  }
}

export async function markLessonComplete(uid: string, lessonId: number, timeSpentMinutes = 10) {
  try {
    // Phase 3.5: Validate lesson existence and publication status before recording progress
    const [targetLesson] = await db.select().from(lessons).where(eq(lessons.id, lessonId));
    if (!targetLesson) {
      throw new AppValidationError('Lesson not found.', 404);
    }
    if (!targetLesson.published) {
      throw new AppValidationError('Cannot record progress on an unpublished lesson.', 400);
    }

    // Phase 3.4: Check if lesson was already completed by this user to prevent duplicate XP farming
    const [existingProgress] = await db
      .select()
      .from(lessonProgress)
      .where(and(eq(lessonProgress.userUid, uid), eq(lessonProgress.lessonId, lessonId)));

    const alreadyCompleted = Boolean(existingProgress?.completed);

    const [progress] = await db
      .insert(lessonProgress)
      .values({
        userUid: uid,
        lessonId,
        completed: true,
        timeSpentMinutes,
      })
      .onConflictDoUpdate({
        target: [lessonProgress.userUid, lessonProgress.lessonId],
        set: {
          completed: true,
          timeSpentMinutes: existingProgress
            ? Math.max(existingProgress.timeSpentMinutes, timeSpentMinutes)
            : timeSpentMinutes,
          completedAt: existingProgress?.completedAt || new Date(),
        },
      })
      .returning();

    let xpAwarded = 0;
    if (!alreadyCompleted) {
      xpAwarded = 50;
      const [u] = await db.select().from(users).where(eq(users.uid, uid));
      if (u) {
        await db
          .update(users)
          .set({ xp: u.xp + xpAwarded })
          .where(eq(users.uid, uid));
      }
    }

    const newlyUnlocked = await evaluateAndUnlockAchievements(uid);
    const [updatedUser] = await db.select().from(users).where(eq(users.uid, uid));

    return {
      progress,
      xpAwarded,
      xpEarned: xpAwarded,
      alreadyCompleted,
      userXp: updatedUser?.xp ?? 0,
      newlyUnlocked,
    };
  } catch (error) {
    if (error instanceof AppValidationError) throw error;
    console.error('Database query failed in markLessonComplete:', error);
    throw new Error('Failed to record lesson completion.', { cause: error });
  }
}

export async function startQuizSessionServerSide(
  uid: string,
  quizId: number,
  mode: 'practice' | 'timed' = 'practice'
) {
  try {
    const [quiz] = await db.select().from(quizzes).where(eq(quizzes.id, quizId));
    if (!quiz) {
      throw new AppValidationError('Quiz not found.', 404);
    }

    const existingSessions = await db
      .select()
      .from(quizSessions)
      .where(and(eq(quizSessions.userUid, uid), eq(quizSessions.quizId, quizId)));

    const oneHourAgo = Date.now() - 3600 * 1000;
    const recentTimedSessions = existingSessions.filter(
      (s) => s.mode === 'timed' && new Date(s.startedAt).getTime() > oneHourAgo
    );
    if (mode === 'timed' && recentTimedSessions.length >= 15) {
      throw new AppValidationError(
        'Too many timed quiz attempts started recently. Please wait before starting another timed session.',
        429
      );
    }

    const startedAt = new Date();
    // Add 15s grace buffer for network latency on timed quizzes
    const durationSeconds = mode === 'timed' ? quiz.timeLimitSeconds + 15 : 7200;
    const expiresAt = new Date(startedAt.getTime() + durationSeconds * 1000);

    const [session] = await db
      .insert(quizSessions)
      .values({
        userUid: uid,
        quizId,
        mode,
        startedAt,
        expiresAt,
      })
      .returning();

    return {
      session: {
        id: session.id,
        quizId: session.quizId,
        mode: session.mode,
        timeLimitSeconds: quiz.timeLimitSeconds,
        passingScorePercent: quiz.passingScorePercent,
        startedAt: session.startedAt,
        expiresAt: session.expiresAt,
      },
    };
  } catch (error) {
    if (error instanceof AppValidationError) throw error;
    console.error('Database query failed in startQuizSessionServerSide:', error);
    throw new Error('Failed to start quiz session.', { cause: error });
  }
}

export async function submitQuizAttemptServerSide(
  uid: string,
  quizId: number,
  mode: 'practice' | 'timed',
  submittedAnswers: Record<string, string>,
  sessionId?: number
) {
  try {
    const [quiz] = await db.select().from(quizzes).where(eq(quizzes.id, quizId));
    if (!quiz) {
      throw new AppValidationError('Quiz not found.', 404);
    }

    const quizQuestions = await db
      .select()
      .from(questions)
      .where(eq(questions.quizId, quizId));

    if (quizQuestions.length === 0) {
      throw new AppValidationError('Quiz has no questions.', 400);
    }

    // Phase 3.1: Enforce server-side quiz deadlines & single-submission session rules
    let timeTakenSeconds = 0;
    const now = new Date();

    if (sessionId !== undefined) {
      const [session] = await db
        .select()
        .from(quizSessions)
        .where(
          and(
            eq(quizSessions.id, sessionId),
            eq(quizSessions.userUid, uid),
            eq(quizSessions.quizId, quizId)
          )
        );
      if (!session) {
        throw new AppValidationError('Invalid or unauthorized quiz session.', 400);
      }
      if (session.submittedAt !== null) {
        throw new AppValidationError('This quiz session has already been submitted.', 400);
      }
      timeTakenSeconds = Math.max(
        1,
        Math.round((now.getTime() - new Date(session.startedAt).getTime()) / 1000)
      );
      if (mode === 'timed' && now.getTime() > new Date(session.expiresAt).getTime()) {
        throw new AppValidationError(
          `Quiz deadline exceeded (${quiz.timeLimitSeconds} seconds time limit).`,
          400
        );
      }
      await db
        .update(quizSessions)
        .set({ submittedAt: now })
        .where(eq(quizSessions.id, session.id));
    } else if (mode === 'timed') {
      // Find latest unsubmitted timed session for this user & quiz
      const activeSessions = await db
        .select()
        .from(quizSessions)
        .where(
          and(
            eq(quizSessions.userUid, uid),
            eq(quizSessions.quizId, quizId),
            eq(quizSessions.mode, 'timed')
          )
        )
        .orderBy(desc(quizSessions.startedAt));

      const latestOpen = activeSessions.find((s) => s.submittedAt === null);
      if (!latestOpen) {
        throw new AppValidationError(
          'Timed quiz requires an active server-started session. Please start the timed quiz first.',
          400
        );
      }
      timeTakenSeconds = Math.max(
        1,
        Math.round((now.getTime() - new Date(latestOpen.startedAt).getTime()) / 1000)
      );
      if (now.getTime() > new Date(latestOpen.expiresAt).getTime()) {
        throw new AppValidationError(
          `Quiz deadline exceeded (${quiz.timeLimitSeconds} seconds time limit).`,
          400
        );
      }
      await db
        .update(quizSessions)
        .set({ submittedAt: now })
        .where(eq(quizSessions.id, latestOpen.id));
    }

    // Phase 3.3: Authoritative server-side grading (returns explanations ONLY after submission)
    let correctCount = 0;
    const gradedAnswers: Array<{
      questionId: number;
      submitted: string;
      isCorrect: boolean;
      topicTag: string;
      correctAnswer: string;
      explanationEn: string;
      explanationPa: string;
    }> = [];

    for (const q of quizQuestions) {
      const rawSubmitted = (submittedAnswers[String(q.id)] || '').trim();
      const isCorrect = rawSubmitted.toLowerCase() === q.correctAnswer.trim().toLowerCase();
      if (isCorrect) correctCount++;
      gradedAnswers.push({
        questionId: q.id,
        submitted: rawSubmitted,
        isCorrect,
        topicTag: q.topicTag,
        correctAnswer: q.correctAnswer,
        explanationEn: q.explanationEn,
        explanationPa: q.explanationPa,
      });
    }

    const totalQuestions = quizQuestions.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    // Phase 3.2: Use configured passingScorePercent for the quiz
    const passed = scorePercent >= quiz.passingScorePercent;

    // Phase 3.4: Prevent unintended quiz XP farming by checking prior attempts
    const priorAttempts = await db
      .select()
      .from(quizAttempts)
      .where(and(eq(quizAttempts.userUid, uid), eq(quizAttempts.quizId, quizId)));

    const hadPassedBefore = priorAttempts.some((a) => a.passed);
    const hadAttemptedBefore = priorAttempts.length > 0;

    let xpAwarded = 0;
    if (!hadPassedBefore) {
      if (passed && !hadAttemptedBefore) {
        xpAwarded = 100;
      } else if (passed && hadAttemptedBefore) {
        xpAwarded = 75; // Awarded 25 on first try, now awards remaining 75 upon passing
      } else if (!passed && !hadAttemptedBefore) {
        xpAwarded = 25;
      }
    }

    const [attempt] = await db
      .insert(quizAttempts)
      .values({
        userUid: uid,
        quizId,
        scorePercent,
        correctCount,
        totalQuestions,
        passed,
        mode,
        timeTakenSeconds,
        answersJson: gradedAnswers,
      })
      .returning();

    if (xpAwarded > 0) {
      const [u] = await db.select().from(users).where(eq(users.uid, uid));
      if (u) {
        await db
          .update(users)
          .set({ xp: u.xp + xpAwarded })
          .where(eq(users.uid, uid));
      }
    }

    const newlyUnlocked = await evaluateAndUnlockAchievements(uid);
    const [updatedUser] = await db.select().from(users).where(eq(users.uid, uid));

    return {
      attempt,
      xpAwarded,
      xpEarned: xpAwarded,
      passingScorePercent: quiz.passingScorePercent,
      userXp: updatedUser?.xp ?? 0,
      newlyUnlocked,
    };
  } catch (error) {
    if (error instanceof AppValidationError) throw error;
    console.error('Database query failed in submitQuizAttemptServerSide:', error);
    throw new Error('Failed to grade quiz submission.', { cause: error });
  }
}

export async function toggleBookmarkForUser(uid: string, lessonId: number) {
  try {
    const [targetLesson] = await db.select().from(lessons).where(eq(lessons.id, lessonId));
    if (!targetLesson) {
      throw new AppValidationError('Lesson not found.', 404);
    }

    const existing = await db
      .select()
      .from(bookmarks)
      .where(and(eq(bookmarks.userUid, uid), eq(bookmarks.lessonId, lessonId)));

    if (existing.length > 0) {
      await db
        .delete(bookmarks)
        .where(and(eq(bookmarks.userUid, uid), eq(bookmarks.lessonId, lessonId)));
      return { bookmarked: false, lessonId };
    } else {
      await db.insert(bookmarks).values({ userUid: uid, lessonId });
      return { bookmarked: true, lessonId };
    }
  } catch (error) {
    if (error instanceof AppValidationError) throw error;
    console.error('Database query failed in toggleBookmarkForUser:', error);
    throw new Error('Failed to toggle bookmark.', { cause: error });
  }
}

export async function saveNoteForUser(uid: string, lessonId: number, content: string) {
  try {
    const [targetLesson] = await db.select().from(lessons).where(eq(lessons.id, lessonId));
    if (!targetLesson) {
      throw new AppValidationError('Lesson not found.', 404);
    }

    const [saved] = await db
      .insert(notes)
      .values({ userUid: uid, lessonId, content })
      .onConflictDoUpdate({
        target: [notes.userUid, notes.lessonId],
        set: { content, updatedAt: new Date() },
      })
      .returning();

    return saved;
  } catch (error) {
    if (error instanceof AppValidationError) throw error;
    console.error('Database query failed in saveNoteForUser:', error);
    throw new Error('Failed to save note.', { cause: error });
  }
}

export async function upsertLessonInSyllabus(payload: {
  id?: number;
  courseId: number;
  slug: string;
  titleEn: string;
  titlePa: string;
  childAnalogyEn: string;
  childAnalogyPa: string;
  technicalExplanationEn: string;
  technicalExplanationPa: string;
  practicalExampleEn: string;
  practicalExamplePa: string;
  codeDemo: string;
  interactiveLabId: string;
  objectivesJson: string[];
}) {
  try {
    const [targetCourse] = await db.select().from(courses).where(eq(courses.id, payload.courseId));
    if (!targetCourse) {
      throw new AppValidationError('Target course not found.', 404);
    }

    // Find or create module for course
    const courseModules = await db
      .select()
      .from(modules)
      .where(eq(modules.courseId, payload.courseId));

    let targetModuleId: number;
    if (courseModules.length === 0) {
      const [newMod] = await db
        .insert(modules)
        .values({
          courseId: payload.courseId,
          orderIndex: 1,
          titleEn: 'Core Curriculum Module',
          titlePa: 'ਮੁੱਖ ਪਾਠਕ੍ਰਮ ਮੋਡੀਊਲ',
        })
        .returning();
      targetModuleId = newMod.id;
    } else {
      targetModuleId = courseModules[0].id;
    }

    if (payload.id) {
      const [updated] = await db
        .update(lessons)
        .set({
          courseId: payload.courseId,
          titleEn: payload.titleEn,
          titlePa: payload.titlePa,
          childAnalogyEn: payload.childAnalogyEn,
          childAnalogyPa: payload.childAnalogyPa,
          technicalExplanationEn: payload.technicalExplanationEn,
          technicalExplanationPa: payload.technicalExplanationPa,
          practicalExampleEn: payload.practicalExampleEn,
          practicalExamplePa: payload.practicalExamplePa,
          codeDemo: payload.codeDemo,
          interactiveLabId: payload.interactiveLabId,
          objectivesJson: payload.objectivesJson,
          updatedAt: new Date(),
        })
        .where(eq(lessons.id, payload.id))
        .returning();
      if (!updated) {
        throw new AppValidationError('Lesson to update was not found.', 404);
      }
      return updated;
    } else {
      const [inserted] = await db
        .insert(lessons)
        .values({
          slug: payload.slug,
          courseId: payload.courseId,
          moduleId: targetModuleId,
          orderIndex: 10,
          titleEn: payload.titleEn,
          titlePa: payload.titlePa,
          childAnalogyEn: payload.childAnalogyEn,
          childAnalogyPa: payload.childAnalogyPa,
          technicalExplanationEn: payload.technicalExplanationEn,
          technicalExplanationPa: payload.technicalExplanationPa,
          practicalExampleEn: payload.practicalExampleEn,
          practicalExamplePa: payload.practicalExamplePa,
          codeDemo: payload.codeDemo,
          interactiveLabId: payload.interactiveLabId,
          objectivesJson: payload.objectivesJson,
          summaryEn: payload.titleEn,
          summaryPa: payload.titlePa,
          published: true,
        })
        .onConflictDoUpdate({
          target: lessons.slug,
          set: {
            courseId: payload.courseId,
            titleEn: payload.titleEn,
            titlePa: payload.titlePa,
            childAnalogyEn: payload.childAnalogyEn,
            childAnalogyPa: payload.childAnalogyPa,
            technicalExplanationEn: payload.technicalExplanationEn,
            technicalExplanationPa: payload.technicalExplanationPa,
            practicalExampleEn: payload.practicalExampleEn,
            practicalExamplePa: payload.practicalExamplePa,
            codeDemo: payload.codeDemo,
            interactiveLabId: payload.interactiveLabId,
            objectivesJson: payload.objectivesJson,
            updatedAt: new Date(),
          },
        })
        .returning();
      return inserted;
    }
  } catch (error) {
    if (error instanceof AppValidationError) throw error;
    console.error('Database query failed in upsertLessonInSyllabus:', error);
    throw new Error('Failed to save lesson in syllabus.', { cause: error });
  }
}

export async function countRecentUserTutorMessages(uid: string, sinceMs = 24 * 3600 * 1000): Promise<number> {
  try {
    const history = await db
      .select()
      .from(tutorMessages)
      .where(and(eq(tutorMessages.userUid, uid), eq(tutorMessages.role, 'user')));
    const cutoff = Date.now() - sinceMs;
    return history.filter((m) => new Date(m.createdAt).getTime() >= cutoff).length;
  } catch {
    return 0;
  }
}

export async function saveTutorConversationMessage(
  uid: string,
  lessonSlug: string,
  role: 'user' | 'assistant',
  content: string,
  mode: string
) {
  try {
    const [saved] = await db
      .insert(tutorMessages)
      .values({ userUid: uid, lessonSlug, role, content, mode })
      .returning();
    return saved;
  } catch (error) {
    console.error('Database query failed in saveTutorConversationMessage:', error);
    return null;
  }
}

export async function getTutorConversationHistory(uid: string) {
  try {
    return await db
      .select()
      .from(tutorMessages)
      .where(eq(tutorMessages.userUid, uid))
      .orderBy(tutorMessages.createdAt);
  } catch (error) {
    console.error('Database query failed in getTutorConversationHistory:', error);
    return [];
  }
}
