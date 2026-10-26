import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import { z } from 'zod';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import {
  requireAuth,
  requireAdmin,
  isTrustedAdminUser,
  AuthRequest,
} from './src/middleware/auth.ts';
import { createRateLimiter } from './src/middleware/rate-limit.ts';
import {
  AppValidationError,
  checkDatabaseReadiness,
  getOrCreateUser,
  updateUserSettings,
  getAllCurriculumData,
  getUserDashboardState,
  createTaskForUser,
  toggleTaskStatus,
  deleteTaskForUser,
  markLessonComplete,
  startQuizSessionServerSide,
  submitQuizAttemptServerSide,
  toggleBookmarkForUser,
  saveNoteForUser,
  upsertLessonInSyllabus,
  saveTutorConversationMessage,
  getTutorConversationHistory,
  countRecentUserTutorMessages,
} from './src/db/queries.ts';
import { COMPLETE_SYLLABUS_BLUEPRINT } from './src/db/seed-data.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
app.use(express.json({ limit: '100kb' }));

const PositiveIntSchema = z.coerce.number().int().positive();

const ValidTimestampOrDateString = z.string().min(4).max(64).refine(
  (val) => !Number.isNaN(Date.parse(val)),
  { message: 'Invalid date or ISO timestamp format' }
);

const apiRateLimiter = createRateLimiter({
  windowMs: 60_000,
  maxPerIp: 180,
  maxPerUser: 120,
  keyPrefix: 'api',
});

const aiTutorRateLimiter = createRateLimiter({
  windowMs: 60_000,
  maxPerIp: 12,
  maxPerUser: 8,
  keyPrefix: 'ai-tutor',
});

const AI_DAILY_USER_QUOTA = 50;

app.use('/api', apiRateLimiter);

const getGeminiClient = () => {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

function handleRouteError(res: express.Response, error: unknown, fallbackMessage: string) {
  if (error instanceof AppValidationError) {
    return res.status(error.statusCode).json({ error: error.message });
  }
  console.error(fallbackMessage, error);
  return res.status(500).json({ error: fallbackMessage });
}

// 1. Health & Database Readiness Check
app.get('/api/health', async (_req, res) => {
  const dbHealth = await checkDatabaseReadiness();
  if (!dbHealth.ok) {
    return res.status(503).json({
      status: 'degraded',
      service: 'Computer Fundamentals Academy API',
      database: dbHealth,
    });
  }
  res.json({
    status: 'ok',
    service: 'Computer Fundamentals Academy API',
    database: dbHealth,
  });
});

app.get('/api/app-info', (_req, res) => {
  res.json({
    appUrl:
      process.env.APP_URL ||
      'https://ais-dev-kk7j6asjt23xaclt3gbpty-734066621115.asia-east1.run.app',
    environment: process.env.NODE_ENV || 'development',
  });
});

// 2. Public Curriculum & Syllabus Endpoint (answers & explanations stripped)
app.get('/api/curriculum', async (_req, res) => {
  try {
    const data = await getAllCurriculumData();
    res.json({
      ...data,
      syllabusBlueprint: COMPLETE_SYLLABUS_BLUEPRINT,
    });
  } catch (error) {
    return handleRouteError(res, error, 'Failed to load curriculum');
  }
});

// 3. Authenticated User Profile & Full Learning State
app.get('/api/auth/me', requireAuth, async (req: AuthRequest, res) => {
  try {
    const uid = req.user!.uid;
    const email = req.user!.email || `${uid}@academy.local`;
    const name = req.user!.name || email.split('@')[0];
    const isAdmin = isTrustedAdminUser(req.user);

    const user = await getOrCreateUser(uid, email, name, isAdmin);
    const dashboardState = await getUserDashboardState(uid);
    const tutorHistory = await getTutorConversationHistory(uid);

    res.json({
      user,
      ...dashboardState,
      tutorHistory,
    });
  } catch (error) {
    return handleRouteError(res, error, 'Failed to load user session');
  }
});

// 4. Update User Settings
const SettingsSchema = z
  .object({
    displayName: z.string().trim().min(1).max(80).optional(),
    preferredLanguage: z.enum(['bilingual', 'punjabi', 'english']).optional(),
    dailyGoalMinutes: z.number().int().min(5).max(300).optional(),
  })
  .strict();

app.patch('/api/users/me/settings', requireAuth, async (req: AuthRequest, res) => {
  try {
    const parsed = SettingsSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid settings input', details: parsed.error.issues });
    }
    const updated = await updateUserSettings(req.user!.uid, parsed.data);
    res.json({ user: updated });
  } catch (error) {
    return handleRouteError(res, error, 'Failed to update settings');
  }
});

// 5. Study Tasks CRUD with strict Zod validation
const CreateTaskSchema = z
  .object({
    title: z.string().trim().min(2).max(160),
    description: z.string().trim().max(500).default(''),
    category: z.string().trim().min(2).max(60).default('Computer Science'),
    priority: z.enum(['low', 'medium', 'high']).default('medium'),
    dueDate: ValidTimestampOrDateString,
    notifyEnabled: z.boolean().default(true),
    linkedLessonSlug: z.string().trim().max(120).optional(),
  })
  .strict();

const PatchTaskSchema = z
  .object({
    completed: z.boolean(),
  })
  .strict();

app.post('/api/tasks', requireAuth, async (req: AuthRequest, res) => {
  try {
    const parsed = CreateTaskSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid task data', details: parsed.error.issues });
    }
    const task = await createTaskForUser(req.user!.uid, parsed.data);
    res.status(201).json({ task });
  } catch (error) {
    return handleRouteError(res, error, 'Failed to create task');
  }
});

app.patch('/api/tasks/:id', requireAuth, async (req: AuthRequest, res) => {
  try {
    const idParsed = PositiveIntSchema.safeParse(req.params.id);
    if (!idParsed.success) {
      return res.status(400).json({ error: 'Invalid task ID parameter' });
    }
    const bodyParsed = PatchTaskSchema.safeParse(req.body);
    if (!bodyParsed.success) {
      return res.status(400).json({ error: 'Invalid task update payload', details: bodyParsed.error.issues });
    }
    const updated = await toggleTaskStatus(req.user!.uid, idParsed.data, bodyParsed.data.completed);
    res.json(updated);
  } catch (error) {
    return handleRouteError(res, error, 'Failed to update task');
  }
});

app.delete('/api/tasks/:id', requireAuth, async (req: AuthRequest, res) => {
  try {
    const idParsed = PositiveIntSchema.safeParse(req.params.id);
    if (!idParsed.success) {
      return res.status(400).json({ error: 'Invalid task ID parameter' });
    }
    await deleteTaskForUser(req.user!.uid, idParsed.data);
    res.json({ deleted: true, id: idParsed.data });
  } catch (error) {
    return handleRouteError(res, error, 'Failed to delete task');
  }
});

// 6. Lesson Progress Completion (validates lesson existence, published status, and prevents duplicate XP)
const LessonProgressSchema = z
  .object({
    timeSpentMinutes: z.number().int().min(1).max(240).default(12),
  })
  .strict();

app.post('/api/lessons/:id/progress', requireAuth, async (req: AuthRequest, res) => {
  try {
    const idParsed = PositiveIntSchema.safeParse(req.params.id);
    if (!idParsed.success) {
      return res.status(400).json({ error: 'Invalid lesson ID parameter' });
    }
    const bodyParsed = LessonProgressSchema.safeParse(req.body ?? {});
    if (!bodyParsed.success) {
      return res.status(400).json({ error: 'Invalid lesson progress payload', details: bodyParsed.error.issues });
    }
    const result = await markLessonComplete(
      req.user!.uid,
      idParsed.data,
      bodyParsed.data.timeSpentMinutes
    );
    res.json(result);
  } catch (error) {
    return handleRouteError(res, error, 'Failed to save lesson progress');
  }
});

// 7. Server-Enforced Quiz Session Start & Authoritative Grading
const QuizSessionStartSchema = z
  .object({
    mode: z.enum(['practice', 'timed']).default('practice'),
  })
  .strict();

app.post('/api/quizzes/:id/start', requireAuth, async (req: AuthRequest, res) => {
  try {
    const idParsed = PositiveIntSchema.safeParse(req.params.id);
    if (!idParsed.success) {
      return res.status(400).json({ error: 'Invalid quiz ID parameter' });
    }
    const bodyParsed = QuizSessionStartSchema.safeParse(req.body ?? {});
    if (!bodyParsed.success) {
      return res.status(400).json({ error: 'Invalid quiz session request', details: bodyParsed.error.issues });
    }
    const session = await startQuizSessionServerSide(
      req.user!.uid,
      idParsed.data,
      bodyParsed.data.mode
    );
    res.status(201).json(session);
  } catch (error) {
    return handleRouteError(res, error, 'Failed to start quiz session');
  }
});

const QuizAttemptSchema = z
  .object({
    mode: z.enum(['practice', 'timed']).default('practice'),
    answers: z.record(z.string().min(1).max(32), z.string().min(1).max(500)),
    sessionId: z.number().int().positive().optional(),
  })
  .strict();

app.post('/api/quizzes/:id/attempts', requireAuth, async (req: AuthRequest, res) => {
  try {
    const idParsed = PositiveIntSchema.safeParse(req.params.id);
    if (!idParsed.success) {
      return res.status(400).json({ error: 'Invalid quiz ID parameter' });
    }
    const parsed = QuizAttemptSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid quiz submission payload', details: parsed.error.issues });
    }
    const result = await submitQuizAttemptServerSide(
      req.user!.uid,
      idParsed.data,
      parsed.data.mode,
      parsed.data.answers,
      parsed.data.sessionId
    );
    res.json(result);
  } catch (error) {
    return handleRouteError(res, error, 'Failed to score quiz attempt');
  }
});

// 8. Bookmarks & Personal Notes
const BookmarkBodySchema = z
  .object({
    lessonId: PositiveIntSchema,
  })
  .strict();

app.post('/api/users/me/bookmarks', requireAuth, async (req: AuthRequest, res) => {
  try {
    const parsed = BookmarkBodySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid lessonId for bookmark', details: parsed.error.issues });
    }
    const result = await toggleBookmarkForUser(req.user!.uid, parsed.data.lessonId);
    res.json(result);
  } catch (error) {
    return handleRouteError(res, error, 'Failed to update bookmark');
  }
});

const NoteBodySchema = z
  .object({
    lessonId: PositiveIntSchema,
    content: z.string().trim().min(1).max(8000),
  })
  .strict();

app.post('/api/users/me/notes', requireAuth, async (req: AuthRequest, res) => {
  try {
    const parsed = NoteBodySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid note payload', details: parsed.error.issues });
    }
    const saved = await saveNoteForUser(req.user!.uid, parsed.data.lessonId, parsed.data.content);
    res.json({ note: saved });
  } catch (error) {
    return handleRouteError(res, error, 'Failed to save note');
  }
});

// 9. Protected Admin Syllabus Management (requireAuth + requireAdmin)
const UpsertLessonSchema = z
  .object({
    id: PositiveIntSchema.optional(),
    courseId: PositiveIntSchema,
    slug: z
      .string()
      .trim()
      .min(3)
      .max(120)
      .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    titleEn: z.string().trim().min(3).max(200),
    titlePa: z.string().trim().min(3).max(200),
    childAnalogyEn: z.string().trim().min(10).max(4000),
    childAnalogyPa: z.string().trim().min(10).max(4000),
    technicalExplanationEn: z.string().trim().min(10).max(8000),
    technicalExplanationPa: z.string().trim().min(10).max(8000),
    practicalExampleEn: z.string().trim().min(5).max(4000),
    practicalExamplePa: z.string().trim().min(5).max(4000),
    codeDemo: z.string().max(8000).default(''),
    interactiveLabId: z.string().trim().min(2).max(80).default('hardware-explorer'),
    objectivesJson: z.array(z.string().trim().min(2).max(300)).max(20).default([]),
  })
  .strict();

app.post('/api/admin/lessons', requireAuth, requireAdmin, async (req: AuthRequest, res) => {
  try {
    const parsed = UpsertLessonSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid lesson fields', details: parsed.error.issues });
    }
    const saved = await upsertLessonInSyllabus(parsed.data);
    res.json({ lesson: saved });
  } catch (error) {
    return handleRouteError(res, error, 'Failed to save syllabus lesson');
  }
});

// 10. Authenticated AI Tutor Integration (UID derived exclusively from verified token)
const TutorRequestSchema = z
  .object({
    prompt: z.string().trim().min(2).max(1500),
    lessonTitle: z.string().trim().max(200).optional(),
    lessonContext: z.string().trim().max(1500).optional(),
    mode: z
      .enum(['child-friendly', 'deep-technical', 'math-step', 'quiz-me'])
      .default('child-friendly'),
  })
  .strict();

app.post(
  '/api/ai/tutor',
  requireAuth,
  aiTutorRateLimiter,
  async (req: AuthRequest, res) => {
    try {
      const parsed = TutorRequestSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          error: 'Invalid AI Tutor request payload.',
          details: parsed.error.issues,
        });
      }

      const verifiedUid = req.user!.uid;
      const usedToday = await countRecentUserTutorMessages(verifiedUid, 24);
      if (usedToday >= AI_DAILY_USER_QUOTA) {
        return res.status(429).json({
          error: `Daily AI Tutor quota reached (${AI_DAILY_USER_QUOTA} questions per 24 hours). Please continue tomorrow.`,
        });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(503).json({
          error: 'AI Tutor service is currently unavailable.',
        });
      }

      const { prompt, lessonTitle, lessonContext, mode } = parsed.data;
      const ai = getGeminiClient();

      const modeInstructions: Record<string, string> = {
        'child-friendly':
          'Explain like the learner is a curious 10-year-old child! Use vivid everyday Punjabi household/village analogies (e.g., kitchen, post office, torch switches, sugarcane machine) alongside clear English technical terms. Use inline LaTeX ($...$) when showing simple numbers or powers.',
        'deep-technical':
          'Provide a rigorous computer engineering explanation covering hardware registers, binary opcodes, memory latency, and algorithmic complexity, in both Punjabi (Gurmukhi) and English. Format equations, complexity bounds, and electrical formulas in LaTeX ($...$ or $$...$$).',
        'math-step':
          'Break down the binary, hexadecimal, Boolean algebra, electronics, discrete math, or probability calculation step-by-step showing every intermediate number and formula. CRITICAL: Write all mathematical formulas, positional expansions, truth-table identities, and step-by-step derivations using standard LaTeX delimiters: use $$...$$ for block step equations and $...$ for inline variables/expressions so KaTeX renders them clearly.',
        'quiz-me':
          'Explain the concept briefly in Punjabi and English (using $...$ or $$...$$ for any math formulas), then ask 2 thought-provoking practice questions to test the learner’s conceptual understanding.',
      };

      const systemInstruction = `You are the Bilingual Professor at Computer Fundamentals Academy.
Your mission is to teach Computer Science (Hardware, Binary, Assembly, OS, Networking, Algorithms), Electronics, and Mathematics for Computer Science (Propositional Logic, Discrete Math, Sets, Graph Theory, Probability & Statistics).
Rules:
1. Always teach in warm, clear Punjabi written in Gurmukhi script AND English, keeping standard English technical terms (like CPU, ALU, Register, Binary, Logic Gate, Process, Thread, Big-O, Intersection, Median).
2. Always include a "ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀ ਉਦਾਹਰਣ (Child-Friendly Analogy)" with a practical real-world illustration.
3. Format all mathematical formulas, equations, binary powers, Boolean expressions, and complexity notations using LaTeX ($...$ for inline math and $$...$$ for block equations).
4. Mode instruction: ${modeInstructions[mode] || modeInstructions['child-friendly']}
5. Current Lesson Context: ${lessonTitle || 'General Computer Science & Math'} — ${lessonContext || ''}`;

      let response;
      let activeModel = 'gemini-4-argon';
      try {
        response = await ai.models.generateContent({
          model: 'gemini-4-argon',
          contents: prompt,
          config: {
            systemInstruction,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.HIGH,
            },
          },
        });
      } catch (primaryError) {
        console.warn('Falling back to gemini-3.8-flash with ThinkingLevel.HIGH:', primaryError);
        activeModel = 'gemini-3.8-flash';
        response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            systemInstruction,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.HIGH,
            },
          },
        });
      }

      const replyText =
        response.text || 'ਮੁਆਫ਼ ਕਰਨਾ, ਉੱਤਰ ਤਿਆਰ ਨਹੀਂ ਹੋ ਸਕਿਆ। (Unable to generate response.)';

      await saveTutorConversationMessage(
        verifiedUid,
        lessonTitle || 'general',
        'user',
        prompt,
        mode
      );
      await saveTutorConversationMessage(
        verifiedUid,
        lessonTitle || 'general',
        'assistant',
        replyText,
        mode
      );

      res.json({
        reply: replyText,
        model: activeModel,
        thinkingLevel: 'HIGH',
        remainingDailyQuota: Math.max(0, AI_DAILY_USER_QUOTA - (usedToday + 1)),
      });
    } catch (error) {
      console.error('Error in POST /api/ai/tutor:', error);
      res.status(502).json({
        error: 'AI Tutor service encountered a temporary upstream error. Please try again shortly.',
      });
    }
  }
);

export async function startServer() {
  const PORT = Number(process.env.PORT) || 3000;

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Computer Fundamentals Academy running on http://0.0.0.0:${PORT}`);
  });

  server.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${PORT} is currently in use, retrying in 1s...`);
      setTimeout(() => {
        server.close();
        server.listen(PORT, '0.0.0.0');
      }, 1000);
    } else {
      console.error('Server error:', err);
    }
  });

  const shutdown = () => {
    server.close(() => process.exit(0));
  };
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
  return server;
}

if (process.env.NODE_ENV !== 'test' && !process.env.VITEST) {
  startServer();
}
