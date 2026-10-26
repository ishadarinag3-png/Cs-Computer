import { describe, it, expect, beforeAll, beforeEach, vi } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';

// Mock firebase-admin token verification for deterministic security & integration testing
vi.mock('../lib/firebase-admin.ts', () => {
  return {
    adminAuth: {
      verifyIdToken: vi.fn(async (token: string) => {
        if (token === 'valid-student-token') {
          return {
            uid: 'test-student-uid-1',
            email: 'learner1@example.com',
            name: 'Learner One',
            email_verified: true,
          };
        }
        if (token === 'valid-student-2-token') {
          return {
            uid: 'test-student-uid-2',
            email: 'learner2@example.com',
            name: 'Learner Two',
            email_verified: true,
          };
        }
        if (token === 'spoofed-substring-admin-token') {
          return {
            uid: 'test-spoof-admin-uid',
            email: 'myadminhelper@example.com',
            name: 'Spoofed Admin',
            email_verified: true,
          };
        }
        if (token === 'valid-custom-claim-admin-token') {
          return {
            uid: 'test-claim-admin-uid',
            email: 'professor@academy.edu',
            name: 'Trusted Claim Admin',
            email_verified: true,
            admin: true,
          };
        }
        if (token === 'valid-allowlist-admin-token') {
          return {
            uid: 'test-allowlist-admin-uid',
            email: 'babbshergill73@gmail.com',
            name: 'Allowlist Admin',
            email_verified: true,
          };
        }
        throw new Error('Invalid Firebase ID token');
      }),
    },
  };
});

import { app } from '../../server.ts';
import { isTrustedAdminUser } from '../middleware/auth.ts';
import { resetRateLimitBuckets } from '../middleware/rate-limit.ts';
import {
  ensureCurriculumSeeded,
  checkDatabaseReadiness,
} from '../db/queries.ts';
import { db } from '../db/index.ts';
import {
  users,
  quizSessions,
  questions,
} from '../db/schema.ts';

describe('Computer Fundamentals Academy — Security, Database, Assessment & Curriculum Audit Suite', () => {
  let sampleLessonId = 1;
  let sampleQuizId = 1;
  let sampleQuizQuestionId = 1;
  let sampleCorrectAnswer = '';

  beforeAll(async () => {
    await ensureCurriculumSeeded(true);
    const allQuestions = await db.select().from(questions);
    if (allQuestions.length > 0) {
      sampleQuizId = allQuestions[0].quizId;
      sampleQuizQuestionId = allQuestions[0].id;
      sampleCorrectAnswer = allQuestions[0].correctAnswer;
    }
  }, 60_000);

  beforeEach(() => {
    resetRateLimitBuckets();
  });

  describe('Phase 1: Security, RBAC, Sanitization & Validation', () => {
    it('rejects email-substring admin assignment and only trusts custom claims or verified allowlist', () => {
      expect(
        isTrustedAdminUser({
          uid: 'u1',
          email: 'fakeadmin123@gmail.com',
          email_verified: true,
        } as any)
      ).toBe(false);

      expect(
        isTrustedAdminUser({
          uid: 'u2',
          email: 'babbshergill73@gmail.com',
          email_verified: false,
        } as any)
      ).toBe(false);

      expect(
        isTrustedAdminUser({
          uid: 'u3',
          email: 'babbshergill73@gmail.com',
          email_verified: true,
        } as any)
      ).toBe(true);

      expect(
        isTrustedAdminUser({
          uid: 'u4',
          email: 'instructor@example.org',
          admin: true,
        } as any)
      ).toBe(true);
    });

    it('assigns student role in DB even when email contains "admin" substring and blocks /api/admin/lessons with 403', async () => {
      const meRes = await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer spoofed-substring-admin-token');
      expect(meRes.status).toBe(200);
      expect(meRes.body.user.role).toBe('student');

      const adminRes = await request(app)
        .post('/api/admin/lessons')
        .set('Authorization', 'Bearer spoofed-substring-admin-token')
        .send({
          courseId: 1,
          slug: 'unauthorized-lesson',
          titleEn: 'Unauthorized Lesson',
          titlePa: 'ਅਣਅਧਿਕਾਰਤ ਪਾਠ',
          childAnalogyEn: 'Valid length analogy text here',
          childAnalogyPa: 'ਬੱਚਿਆਂ ਲਈ ਉਦਾਹਰਣ ਇੱਥੇ ਹੈ',
          technicalExplanationEn: 'Technical explanation text here',
          technicalExplanationPa: 'ਤਕਨੀਕੀ ਵਿਆਖਿਆ ਇੱਥੇ ਹੈ',
          practicalExampleEn: 'Practical example text',
          practicalExamplePa: 'ਅਸਲ ਉਦਾਹਰਣ',
        });
      expect(adminRes.status).toBe(403);
    });

    it('allows verified custom-claim admin to save syllabus lessons', async () => {
      const curr = await request(app).get('/api/curriculum');
      const targetLesson = curr.body.lessons[0];
      sampleLessonId = targetLesson.id;

      const adminRes = await request(app)
        .post('/api/admin/lessons')
        .set('Authorization', 'Bearer valid-custom-claim-admin-token')
        .send({
          id: targetLesson.id,
          courseId: targetLesson.courseId,
          slug: targetLesson.slug,
          titleEn: targetLesson.titleEn,
          titlePa: targetLesson.titlePa,
          childAnalogyEn: targetLesson.childAnalogyEn,
          childAnalogyPa: targetLesson.childAnalogyPa,
          technicalExplanationEn: targetLesson.technicalExplanationEn,
          technicalExplanationPa: targetLesson.technicalExplanationPa,
          practicalExampleEn: targetLesson.practicalExampleEn,
          practicalExamplePa: targetLesson.practicalExamplePa,
          codeDemo: targetLesson.codeDemo || '',
          interactiveLabId: targetLesson.interactiveLabId || 'hardware-explorer',
          objectivesJson: targetLesson.objectivesJson || ['Master IPOS'],
        });
      expect(adminRes.status).toBe(200);
      expect(adminRes.body.lesson.slug).toBe(targetLesson.slug);
    });

    it('strips correctAnswer, explanationEn, and explanationPa from public /api/curriculum questions payload', async () => {
      const res = await request(app).get('/api/curriculum');
      expect(res.status).toBe(200);
      expect(res.body.questions.length).toBeGreaterThanOrEqual(36);

      for (const q of res.body.questions) {
        expect(q.correctAnswer).toBeUndefined();
        expect(q.explanationEn).toBeUndefined();
        expect(q.explanationPa).toBeUndefined();
        expect(q.promptEn).toBeTruthy();
        expect(q.promptPa).toBeTruthy();
      }
    });

    it('requires authentication on /api/ai/tutor and rejects body-supplied uid field', async () => {
      const unauthRes = await request(app)
        .post('/api/ai/tutor')
        .send({ prompt: 'What is binary?' });
      expect(unauthRes.status).toBe(401);

      const spoofUidRes = await request(app)
        .post('/api/ai/tutor')
        .set('Authorization', 'Bearer valid-student-token')
        .send({
          prompt: 'What is binary?',
          uid: 'victim-uid-spoof',
        });
      expect(spoofUidRes.status).toBe(400);
    });

    it('validates numeric route IDs and task date formats with Zod', async () => {
      const badTaskId = await request(app)
        .patch('/api/tasks/not-a-number')
        .set('Authorization', 'Bearer valid-student-token')
        .send({ completed: true });
      expect(badTaskId.status).toBe(400);

      const badDateTask = await request(app)
        .post('/api/tasks')
        .set('Authorization', 'Bearer valid-student-token')
        .send({
          title: 'Study Assembly Registers',
          dueDate: 'not-a-valid-date',
        });
      expect(badDateTask.status).toBe(400);
    });
  });

  describe('Phase 2 & 4: Database Readiness, Idempotent Seeding & 100% Syllabus Coverage', () => {
    it('passes database readiness check and GET /api/health', async () => {
      const health = await checkDatabaseReadiness();
      expect(health.ok).toBe(true);

      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('ok');
      expect(res.body.database.ok).toBe(true);
    });

    it('maintains 9 courses, 18 bilingual lessons, and 100% syllabus coverage across repeated idempotent seeds', async () => {
      await ensureCurriculumSeeded(true);
      const res = await request(app).get('/api/curriculum');
      expect(res.status).toBe(200);
      expect(res.body.courses.length).toBe(9);
      expect(res.body.lessons.length).toBeGreaterThanOrEqual(18);
      expect(res.body.quizzes.length).toBeGreaterThanOrEqual(18);
      expect(res.body.syllabusCoverage.coveragePercent).toBe(100);
      expect(res.body.syllabusCoverage.completeTopics).toBe(
        res.body.syllabusCoverage.totalBlueprintTopics
      );
      expect(res.body.syllabusCoverage.uncoveredTopics).toBe(0);
    }, 30_000);

    it('enforces user-level data isolation on study tasks', async () => {
      // Ensure both users exist
      await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer valid-student-token');
      await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer valid-student-2-token');

      const createRes = await request(app)
        .post('/api/tasks')
        .set('Authorization', 'Bearer valid-student-token')
        .send({
          title: 'Private Task for Learner 1',
          description: 'Review Level 3 Boolean Algebra',
          category: 'Discrete Math',
          priority: 'high',
          dueDate: new Date(Date.now() + 3600_000).toISOString(),
          notifyEnabled: true,
        });
      expect(createRes.status).toBe(201);
      const taskId = createRes.body.task.id;

      // Learner 2 attempts to modify or delete Learner 1's task -> 404
      const crossPatch = await request(app)
        .patch(`/api/tasks/${taskId}`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({ completed: true });
      expect(crossPatch.status).toBe(404);

      const crossDelete = await request(app)
        .delete(`/api/tasks/${taskId}`)
        .set('Authorization', 'Bearer valid-student-2-token');
      expect(crossDelete.status).toBe(404);

      // Learner 1 deletes their own task -> 200
      const ownDelete = await request(app)
        .delete(`/api/tasks/${taskId}`)
        .set('Authorization', 'Bearer valid-student-token');
      expect(ownDelete.status).toBe(200);
    });
  });

  describe('Phase 3: Assessments, Deadlines & Anti-XP-Farming', () => {
    it('rejects progress for non-existent lessons and prevents duplicate XP on repeated lesson completion', async () => {
      await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer valid-student-token');

      const missingRes = await request(app)
        .post('/api/lessons/999999/progress')
        .set('Authorization', 'Bearer valid-student-token')
        .send({ timeSpentMinutes: 10 });
      expect(missingRes.status).toBe(404);

      // Complete valid lesson twice
      const firstComplete = await request(app)
        .post(`/api/lessons/${sampleLessonId}/progress`)
        .set('Authorization', 'Bearer valid-student-token')
        .send({ timeSpentMinutes: 15 });
      expect(firstComplete.status).toBe(200);

      const secondComplete = await request(app)
        .post(`/api/lessons/${sampleLessonId}/progress`)
        .set('Authorization', 'Bearer valid-student-token')
        .send({ timeSpentMinutes: 15 });
      expect(secondComplete.status).toBe(200);
      expect(secondComplete.body.alreadyCompleted).toBe(true);
      expect(secondComplete.body.xpEarned).toBe(0);
    });

    it('enforces server-side timed quiz deadlines and prevents quiz XP farming', async () => {
      await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer valid-student-2-token');

      // Start a timed quiz session
      const startRes = await request(app)
        .post(`/api/quizzes/${sampleQuizId}/start`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({ mode: 'timed' });
      expect(startRes.status).toBe(201);
      const sessionId = startRes.body.session.id;

      // Submit valid attempt within deadline
      const quizQuestions = await db
        .select()
        .from(questions)
        .where(eq(questions.quizId, sampleQuizId));
      const answersPayload: Record<string, string> = {};
      for (const q of quizQuestions) {
        answersPayload[String(q.id)] = q.correctAnswer;
      }

      const attempt1 = await request(app)
        .post(`/api/quizzes/${sampleQuizId}/attempts`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({
          mode: 'timed',
          sessionId,
          answers: answersPayload,
        });
      expect(attempt1.status).toBe(200);
      expect(attempt1.body.attempt.passed).toBe(true);
      expect(attempt1.body.attempt.scorePercent).toBe(100);
      // Explanations are returned after server grading
      expect(attempt1.body.attempt.answersJson[0].explanationEn).toBeTruthy();

      // Re-using the same sessionId must be rejected (400)
      const replayAttempt = await request(app)
        .post(`/api/quizzes/${sampleQuizId}/attempts`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({
          mode: 'timed',
          sessionId,
          answers: answersPayload,
        });
      expect(replayAttempt.status).toBe(400);

      // Subsequent pass on the same quiz must award 0 XP (anti-XP farming)
      const attempt2 = await request(app)
        .post(`/api/quizzes/${sampleQuizId}/attempts`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({
          mode: 'practice',
          answers: answersPayload,
        });
      expect(attempt2.status).toBe(200);
      expect(attempt2.body.xpEarned).toBe(0);

      // Expired timed session must be rejected by server
      const expiredSessionRes = await request(app)
        .post(`/api/quizzes/${sampleQuizId}/start`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({ mode: 'timed' });
      const expiredSessionId = expiredSessionRes.body.session.id;

      await db
        .update(quizSessions)
        .set({ expiresAt: new Date(Date.now() - 60_000) })
        .where(eq(quizSessions.id, expiredSessionId));

      const lateSubmit = await request(app)
        .post(`/api/quizzes/${sampleQuizId}/attempts`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({
          mode: 'timed',
          sessionId: expiredSessionId,
          answers: answersPayload,
        });
      expect(lateSubmit.status).toBe(400);
      expect(lateSubmit.body.error).toMatch(/deadline/i);
    });
  });
});
