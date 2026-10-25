import { eq, desc, and } from 'drizzle-orm';
import { db } from './index.ts';
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
  quizAttempts,
  bookmarks,
  notes,
  achievements,
  userAchievements,
  tutorMessages,
} from './schema.ts';
import { SEED_COURSES, INITIAL_ACHIEVEMENTS } from './seed-data.ts';

let isSeeding = false;
let hasSeeded = false;

export async function ensureCurriculumSeeded() {
  if (hasSeeded || isSeeding) return;
  isSeeding = true;
  try {
    const existingCourses = await db.select().from(courses);
    if (existingCourses.length > 0) {
      hasSeeded = true;
      isSeeding = false;
      return;
    }

    // Seed Achievements Catalog
    for (const ach of INITIAL_ACHIEVEMENTS) {
      await db
        .insert(achievements)
        .values(ach)
        .onConflictDoNothing({ target: achievements.code });
    }

    // Seed Courses, Modules, Lessons, Quizzes, and Questions
    for (const courseData of SEED_COURSES) {
      const [insertedCourse] = await db
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
          set: { titleEn: courseData.titleEn },
        })
        .returning();

      for (const modData of courseData.modules) {
        const [insertedModule] = await db
          .insert(modules)
          .values({
            courseId: insertedCourse.id,
            orderIndex: modData.orderIndex,
            titleEn: modData.titleEn,
            titlePa: modData.titlePa,
            summaryEn: modData.summaryEn,
            summaryPa: modData.summaryPa,
          })
          .returning();

        for (const lessonData of modData.lessons) {
          const [insertedLesson] = await db
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
              set: { titleEn: lessonData.titleEn },
            })
            .returning();

          if (lessonData.quiz) {
            const [insertedQuiz] = await db
              .insert(quizzes)
              .values({
                lessonId: insertedLesson.id,
                titleEn: lessonData.quiz.titleEn,
                titlePa: lessonData.quiz.titlePa,
                timeLimitSeconds: lessonData.quiz.timeLimitSeconds,
                passingScorePercent: lessonData.quiz.passingScorePercent,
              })
              .returning();

            for (const qData of lessonData.quiz.questions) {
              await db.insert(questions).values({
                quizId: insertedQuiz.id,
                questionType: qData.questionType,
                topicTag: qData.topicTag,
                promptEn: qData.promptEn,
                promptPa: qData.promptPa,
                optionsJson: qData.optionsJson,
                correctAnswer: qData.correctAnswer,
                explanationEn: qData.explanationEn,
                explanationPa: qData.explanationPa,
              });
            }
          }
        }
      }
    }

    hasSeeded = true;
  } catch (error) {
    console.error('Failed to seed curriculum:', error);
    throw new Error('Failed to initialize curriculum database.', { cause: error });
  } finally {
    isSeeding = false;
  }
}

export async function getOrCreateUser(uid: string, email: string, displayName?: string) {
  try {
    const todayStr = new Date().toISOString().slice(0, 10);
    const defaultRole =
      email.toLowerCase().includes('babbushergill') || email.toLowerCase().includes('admin')
        ? 'admin'
        : 'student';

    const result = await db
      .insert(users)
      .values({
        uid,
        email,
        displayName: displayName || email.split('@')[0] || 'Scholar',
        role: defaultRole,
        lastActiveDate: todayStr,
      })
      .onConflictDoUpdate({
        target: users.uid,
        set: {
          email,
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
    const allCourses = await db.select().from(courses);
    const allModules = await db.select().from(modules);
    const allLessons = await db.select().from(lessons);
    const allQuizzes = await db.select().from(quizzes);
    const allQuestions = await db.select().from(questions);
    const allAchievements = await db.select().from(achievements);

    return {
      courses: allCourses.sort((a, b) => a.levelNumber - b.levelNumber),
      modules: allModules.sort((a, b) => a.orderIndex - b.orderIndex),
      lessons: allLessons.sort((a, b) => a.orderIndex - b.orderIndex),
      quizzes: allQuizzes,
      questions: allQuestions,
      achievements: allAchievements,
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
        await db
          .insert(userAchievements)
          .values({ userUid: uid, achievementCode: code })
          .onConflictDoNothing();
        const [u] = await db.select().from(users).where(eq(users.uid, uid));
        if (u) {
          await db
            .update(users)
            .set({ xp: u.xp + xpBonus })
            .where(eq(users.uid, uid));
        }
        newlyUnlocked.push(code);
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
    if (completed) {
      await evaluateAndUnlockAchievements(uid);
    }
    return updated;
  } catch (error) {
    console.error('Database query failed in toggleTaskStatus:', error);
    throw new Error('Failed to update task.', { cause: error });
  }
}

export async function deleteTaskForUser(uid: string, taskId: number) {
  try {
    await db.delete(tasks).where(and(eq(tasks.id, taskId), eq(tasks.userUid, uid)));
    return { deleted: true };
  } catch (error) {
    console.error('Database query failed in deleteTaskForUser:', error);
    throw new Error('Failed to delete task.', { cause: error });
  }
}

export async function markLessonComplete(uid: string, lessonId: number, timeSpentMinutes = 10) {
  try {
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
          timeSpentMinutes,
          completedAt: new Date(),
        },
      })
      .returning();

    // Award XP to user
    const [u] = await db.select().from(users).where(eq(users.uid, uid));
    if (u) {
      await db
        .update(users)
        .set({ xp: u.xp + 50 })
        .where(eq(users.uid, uid));
    }

    const newlyUnlocked = await evaluateAndUnlockAchievements(uid);
    return { progress, newlyUnlocked };
  } catch (error) {
    console.error('Database query failed in markLessonComplete:', error);
    throw new Error('Failed to record lesson completion.', { cause: error });
  }
}

export async function submitQuizAttemptServerSide(
  uid: string,
  quizId: number,
  mode: string,
  submittedAnswers: Record<string, string>
) {
  try {
    const quizQuestions = await db
      .select()
      .from(questions)
      .where(eq(questions.quizId, quizId));

    if (quizQuestions.length === 0) {
      throw new Error('Quiz has no questions.');
    }

    let correctCount = 0;
    const gradedAnswers: Array<{
      questionId: number;
      submitted: string;
      isCorrect: boolean;
      topicTag: string;
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
      });
    }

    const totalQuestions = quizQuestions.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    const passed = scorePercent >= 70;

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
        answersJson: gradedAnswers,
      })
      .returning();

    const [u] = await db.select().from(users).where(eq(users.uid, uid));
    if (u) {
      await db
        .update(users)
        .set({ xp: u.xp + (passed ? 100 : 25) })
        .where(eq(users.uid, uid));
    }

    const newlyUnlocked = await evaluateAndUnlockAchievements(uid);
    return { attempt, newlyUnlocked };
  } catch (error) {
    console.error('Database query failed in submitQuizAttemptServerSide:', error);
    throw new Error('Failed to grade quiz submission.', { cause: error });
  }
}

export async function toggleBookmarkForUser(uid: string, lessonId: number) {
  try {
    const existing = await db
      .select()
      .from(bookmarks)
      .where(and(eq(bookmarks.userUid, uid), eq(bookmarks.lessonId, lessonId)));

    if (existing.length > 0) {
      await db
        .delete(bookmarks)
        .where(and(eq(bookmarks.userUid, uid), eq(bookmarks.lessonId, lessonId)));
      return { bookmarked: false };
    } else {
      await db.insert(bookmarks).values({ userUid: uid, lessonId });
      return { bookmarked: true };
    }
  } catch (error) {
    console.error('Database query failed in toggleBookmarkForUser:', error);
    throw new Error('Failed to toggle bookmark.', { cause: error });
  }
}

export async function saveNoteForUser(uid: string, lessonId: number, content: string) {
  try {
    const existing = await db
      .select()
      .from(notes)
      .where(and(eq(notes.userUid, uid), eq(notes.lessonId, lessonId)));

    if (existing.length > 0) {
      const [updated] = await db
        .update(notes)
        .set({ content, updatedAt: new Date() })
        .where(eq(notes.id, existing[0].id))
        .returning();
      return updated;
    } else {
      const [created] = await db
        .insert(notes)
        .values({ userUid: uid, lessonId, content })
        .returning();
      return created;
    }
  } catch (error) {
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
    // Find or create module for course
    let courseModules = await db
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
        })
        .returning();
      return inserted;
    }
  } catch (error) {
    console.error('Database query failed in upsertLessonInSyllabus:', error);
    throw new Error('Failed to save lesson in syllabus.', { cause: error });
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
