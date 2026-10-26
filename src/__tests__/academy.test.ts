import { describe, it, expect, beforeAll, beforeEach, vi } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';

process.env.ADMIN_ALLOWLIST_EMAILS = 'babbshergill73@gmail.com';

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
        if (token === 'valid-student-3-token') {
          return {
            uid: 'test-student-uid-3',
            email: 'learner3@example.com',
            name: 'Learner Three',
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
        if (token === 'unverified-allowlist-admin-token') {
          return {
            uid: 'test-unverified-allowlist-uid',
            email: 'babbshergill73@gmail.com',
            name: 'Unverified Allowlist User',
            email_verified: false,
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
  reserveTutorQuotaSlot,
} from '../db/queries.ts';
import { db } from '../db/index.ts';
import {
  users,
  quizSessions,
  questions,
  tutorMessages,
  lessonProgress,
} from '../db/schema.ts';
import {
  tokenizeMathAndText,
  renderLatexToHtml,
} from '../components/MathMessageRenderer.tsx';
import {
  hydrateLessonTo28Sections,
  evaluate28SectionCompliance,
  compile28SectionPayload,
  createBlank28SectionState,
} from '../components/LessonTemplateEditor.tsx';
import {
  VALID_LAB_IDS,
  resolveValidLabId,
} from '../components/ComputerLaboratory.tsx';
import { enrichGlossaryTermMetadata } from '../db/curriculum/blueprint.ts';

describe('Computer Fundamentals Academy — Security, Database, Assessment & Curriculum Audit Suite', () => {
  let sampleLessonId = 1;
  let secondLessonId = 2;
  let sampleCourseId = 1;
  let sampleQuizId = 1;
  let secondQuizId = 2;

  beforeAll(async () => {
    process.env.ADMIN_ALLOWLIST_EMAILS = 'babbshergill73@gmail.com';
    await ensureCurriculumSeeded(true);
    const allQuestions = await db.select().from(questions);
    if (allQuestions.length > 0) {
      sampleQuizId = allQuestions[0].quizId;
      const distinctQuiz = allQuestions.find((q) => q.quizId !== sampleQuizId);
      if (distinctQuiz) {
        secondQuizId = distinctQuiz.quizId;
      }
    }
  }, 60_000);

  beforeEach(() => {
    process.env.ADMIN_ALLOWLIST_EMAILS = 'babbshergill73@gmail.com';
    resetRateLimitBuckets();
  });

  describe('Phase 1 & 2: Security, RBAC, Rate Limiting, Quota & Input Validation', () => {
    it('rejects email-substring admin assignment and enforces strict email_verified === true for allowlist', () => {
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
          uid: 'u2b',
          email: 'babbshergill73@gmail.com',
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

    it('blocks unverified allowlist email and spoofed substring email from /api/admin/lessons with 403', async () => {
      const meRes = await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer spoofed-substring-admin-token');
      expect(meRes.status).toBe(200);
      expect(meRes.body.user.role).toBe('student');

      const unverifiedRes = await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer unverified-allowlist-admin-token');
      expect(unverifiedRes.status).toBe(200);
      expect(unverifiedRes.body.user.role).toBe('student');

      const adminRes = await request(app)
        .post('/api/admin/lessons')
        .set('Authorization', 'Bearer unverified-allowlist-admin-token')
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
      secondLessonId = curr.body.lessons[1]?.id || targetLesson.id;
      sampleCourseId = curr.body.courses[0].id;

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
      expect(res.body.questions.length).toBeGreaterThanOrEqual(260);

      for (const q of res.body.questions) {
        expect(q.correctAnswer).toBeUndefined();
        expect(q.explanationEn).toBeUndefined();
        expect(q.explanationPa).toBeUndefined();
        expect(q.promptEn).toBeTruthy();
        expect(q.promptPa).toBeTruthy();
      }
    });

    it('requires authentication on /api/ai/tutor, rejects body-supplied uid, and enforces 24-hour quota & concurrency reservation', async () => {
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

      // Verify reserveTutorQuotaSlot enforces rolling 24h window + concurrent in-flight slots
      await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer valid-student-3-token');

      await db
        .delete(tutorMessages)
        .where(eq(tutorMessages.userUid, 'test-student-uid-3'));

      const slot1 = await reserveTutorQuotaSlot('test-student-uid-3', 2);
      const slot2 = await reserveTutorQuotaSlot('test-student-uid-3', 2);
      expect(slot1.usedToday).toBe(0);
      expect(slot2.usedToday).toBe(1);

      await expect(reserveTutorQuotaSlot('test-student-uid-3', 2)).rejects.toThrow(/quota/i);

      slot1.release();
      slot2.release();
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

  describe('Phase 3, 4 & 5: Database Readiness, Idempotent Seeding, Enrollment & Multi-Criteria Coverage', () => {
    it('passes database readiness check and GET /api/health with schema verification', async () => {
      const health = await checkDatabaseReadiness();
      expect(health.ok).toBe(true);
      expect(health.schemaReady).toBe(true);
      expect((health.missingTables || []).length).toBe(0);

      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('ok');
      expect(res.body.database.ok).toBe(true);
    });

    it('maintains 13 courses, 26 bilingual lessons, 260 questions, accurate decibel derivations, and 100% FULLY_VERIFIED coverage', async () => {
      await ensureCurriculumSeeded(true);
      const res = await request(app).get('/api/curriculum');
      expect(res.status).toBe(200);
      expect(res.body.courses.length).toBe(13);
      expect(res.body.lessons.length).toBeGreaterThanOrEqual(26);
      expect(res.body.quizzes.length).toBeGreaterThanOrEqual(26);
      expect(res.body.questions.length).toBeGreaterThanOrEqual(260);
      expect(res.body.syllabusCoverage.coveragePercent).toBe(100);
      expect(res.body.syllabusCoverage.completeTopics).toBe(129);
      expect(res.body.syllabusCoverage.uncoveredTopics).toBe(0);
      expect(
        res.body.syllabusCoverage.levels.every((lvl: any) =>
          lvl.topics.every((t: any) => t.auditStatus === 'FULLY_VERIFIED')
        )
      ).toBe(true);

      // Verify engineering decibel math accuracy (-3.0103 dB for half power, -6.0206 dB for half voltage)
      const mathLesson = res.body.lessons.find(
        (l: any) => l.slug === 'math-foundations-si-algebra-trig'
      );
      expect(mathLesson).toBeTruthy();
      expect(mathLesson.technicalExplanationEn).toContain('-3.0103');
      expect(mathLesson.technicalExplanationEn).toContain('-6.0206');

      // Verify every lesson interactiveLabId resolves to a valid implemented lab
      for (const lesson of res.body.lessons) {
        expect(VALID_LAB_IDS.has(lesson.interactiveLabId)).toBe(true);
        expect(VALID_LAB_IDS.has(resolveValidLabId(lesson.interactiveLabId))).toBe(true);
      }
    }, 45_000);

    it('persists course enrollments idempotently and verifies lesson prerequisites', async () => {
      await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer valid-student-token');

      const enrollRes1 = await request(app)
        .post(`/api/courses/${sampleCourseId}/enroll`)
        .set('Authorization', 'Bearer valid-student-token');
      expect(enrollRes1.status).toBe(200);
      expect(enrollRes1.body.enrolledCourseIds).toContain(sampleCourseId);

      const enrollRes2 = await request(app)
        .post(`/api/courses/${sampleCourseId}/enroll`)
        .set('Authorization', 'Bearer valid-student-token');
      expect(enrollRes2.status).toBe(200);
      expect(
        enrollRes2.body.enrolledCourseIds.filter((id: number) => id === sampleCourseId).length
      ).toBe(1);

      const prereqRes = await request(app)
        .get(`/api/lessons/${sampleLessonId}/prerequisites`)
        .set('Authorization', 'Bearer valid-student-token');
      expect(prereqRes.status).toBe(200);
      expect(typeof prereqRes.body.met).toBe('boolean');
    });

    it('enforces user-level data isolation on study tasks', async () => {
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

      const crossPatch = await request(app)
        .patch(`/api/tasks/${taskId}`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({ completed: true });
      expect(crossPatch.status).toBe(404);

      const crossDelete = await request(app)
        .delete(`/api/tasks/${taskId}`)
        .set('Authorization', 'Bearer valid-student-2-token');
      expect(crossDelete.status).toBe(404);

      const ownDelete = await request(app)
        .delete(`/api/tasks/${taskId}`)
        .set('Authorization', 'Bearer valid-student-token');
      expect(ownDelete.status).toBe(200);
    });
  });

  describe('Phase 6: Assessments, Concurrency Row Locking, Mode Verification & Anti-XP-Farming', () => {
    it('prevents duplicate XP even under concurrent lesson completion requests', async () => {
      await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer valid-student-3-token');

      await db
        .delete(lessonProgress)
        .where(eq(lessonProgress.userUid, 'test-student-uid-3'));

      const [beforeUser] = await db
        .select()
        .from(users)
        .where(eq(users.uid, 'test-student-uid-3'));

      const [resA, resB] = await Promise.all([
        request(app)
          .post(`/api/lessons/${secondLessonId}/progress`)
          .set('Authorization', 'Bearer valid-student-3-token')
          .send({ timeSpentMinutes: 12 }),
        request(app)
          .post(`/api/lessons/${secondLessonId}/progress`)
          .set('Authorization', 'Bearer valid-student-3-token')
          .send({ timeSpentMinutes: 12 }),
      ]);

      expect(resA.status).toBe(200);
      expect(resB.status).toBe(200);
      const totalXpEarned = (resA.body.xpEarned || 0) + (resB.body.xpEarned || 0);
      expect(totalXpEarned).toBe(50);

      const [afterUser] = await db
        .select()
        .from(users)
        .where(eq(users.uid, 'test-student-uid-3'));
      // 50 XP for the lesson + 100 XP for FIRST_STEP achievement, each awarded only once
      const unlockedFirstStep = [
        ...(resA.body.newlyUnlocked || []),
        ...(resB.body.newlyUnlocked || []),
      ].filter((code) => code === 'FIRST_STEP');
      expect(unlockedFirstStep.length).toBeLessThanOrEqual(1);
      const expectedTotalDelta = 50 + (unlockedFirstStep.length === 1 ? 100 : 0);
      expect((afterUser.xp || 0) - (beforeUser.xp || 0)).toBe(expectedTotalDelta);
    }, 20_000);

    it('enforces server-side timed quiz deadlines, mode consistency, and prevents quiz XP farming', async () => {
      await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer valid-student-2-token');

      const startRes = await request(app)
        .post(`/api/quizzes/${sampleQuizId}/start`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({ mode: 'timed' });
      expect(startRes.status).toBe(201);
      expect(startRes.body.session.timeLimitSeconds).toBeGreaterThan(0);
      const sessionId = startRes.body.session.id;

      const quizQuestions = await db
        .select()
        .from(questions)
        .where(eq(questions.quizId, sampleQuizId));
      const answersPayload: Record<string, string> = {};
      for (const q of quizQuestions) {
        answersPayload[String(q.id)] = q.correctAnswer;
      }

      // Submitting a 'timed' session while claiming mode: 'practice' must be rejected
      const mismatchModeRes = await request(app)
        .post(`/api/quizzes/${sampleQuizId}/attempts`)
        .set('Authorization', 'Bearer valid-student-2-token')
        .send({
          mode: 'practice',
          sessionId,
          answers: answersPayload,
        });
      expect(mismatchModeRes.status).toBe(400);
      expect(mismatchModeRes.body.error).toMatch(/mode mismatch/i);

      // Submit valid timed attempt within deadline
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
    }, 25_000);
  });

  describe('Phase 7 & 8: KaTeX Rendering, Glossary Metadata & 28-Section Lesson Template Editor', () => {
    it('tokenizes mixed Punjabi/English text, inline math ($...$), and block math ($$...$$) and renders KaTeX HTML', () => {
      const sampleTutorOutput =
        'ਡੈਸੀਮਲ $75_{10}$ ਨੂੰ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲਣ ਲਈ:\n$$N_{10} = \\sum_{i=0}^{7} b_i \\cdot 2^i$$\nਇਸ ਲਈ ਉੱਤਰ $01001011_2$ ਹੈ।';
      const tokens = tokenizeMathAndText(sampleTutorOutput);

      expect(tokens.some((t) => t.type === 'inline-math' && t.content === '75_{10}')).toBe(true);
      expect(
        tokens.some(
          (t) => t.type === 'block-math' && t.content === 'N_{10} = \\sum_{i=0}^{7} b_i \\cdot 2^i'
        )
      ).toBe(true);

      const renderedBlock = renderLatexToHtml('N_{10} = \\sum_{i=0}^{7} b_i \\cdot 2^i', true);
      expect(renderedBlock).toContain('katex-display');
      expect(renderedBlock).toContain('katex-mathml');
    });

    it('enriches glossary terms with SI units, symbols, formulas, and related components', () => {
      const meta = enrichGlossaryTermMetadata('Voltage (ਵੋਲਟੇਜ)', 'Electric potential difference');
      expect(meta.symbol).toBe('V');
      expect(meta.siUnit).toContain('Volt');
      expect(meta.formula).toContain('V_rms');
      expect(meta.relatedComponents.length).toBeGreaterThan(0);
    });

    it('enforces the standardized 28-section lesson structure for new and existing lessons', () => {
      const blank = createBlank28SectionState(1);
      const blankAudit = evaluate28SectionCompliance(blank);
      expect(blankAudit.length).toBe(28);
      expect(blankAudit.filter((s) => s.valid).length).toBeLessThan(28);

      const hydrated = hydrateLessonTo28Sections(
        {
          id: 1,
          courseId: 1,
          slug: 'binary-logic-foundations',
          titleEn: 'Binary Logic & Gates Foundations',
          titlePa: 'ਬਾਈਨਰੀ ਲੌਜਿਕ ਅਤੇ ਗੇਟਸ ਦੇ ਮੂਲ ਸਿਧਾਂਤ',
          interactiveLabId: 'logic-gates',
          childAnalogyEn: 'Think of two switches in series controlling a room lamp.',
          childAnalogyPa: 'ਇੱਕ ਬੱਲਬ ਨੂੰ ਚਲਾਉਣ ਵਾਲੇ ਦੋ ਲੜੀਵਾਰ ਸਵਿੱਚਾਂ ਬਾਰੇ ਸੋਚੋ।',
          technicalExplanationEn: 'Digital logic gates operate on binary voltage levels 0 and 1.',
          technicalExplanationPa: 'ਡਿਜੀਟਲ ਲੌਜਿਕ ਗੇਟ 0 ਅਤੇ 1 ਵੋਲਟੇਜ ਪੱਧਰਾਂ ਤੇ ਕੰਮ ਕਰਦੇ ਹਨ।',
          practicalExampleEn: 'Used in every CPU Arithmetic Logic Unit (ALU) adder circuit.',
          practicalExamplePa: 'ਹਰ CPU ਦੇ ALU ਐਡਰ ਸਰਕਟ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
        },
        1
      );
      const hydratedAudit = evaluate28SectionCompliance(hydrated);
      expect(hydratedAudit.length).toBe(28);
      expect(hydratedAudit.every((s) => s.valid)).toBe(true);

      const compiled = compile28SectionPayload(hydrated);
      expect(compiled.technicalExplanationEn).toContain('14. Mathematical Derivations (LaTeX)');
      expect(compiled.technicalExplanationEn).toContain('16. Worked Numerical Examples');
      expect(compiled.technicalExplanationEn).toContain('25. Formative Self-Check Assessment');
    });
  });
});
