import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import { z } from 'zod';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { requireAuth, AuthRequest } from './src/middleware/auth.ts';
import {
  getOrCreateUser,
  updateUserSettings,
  getAllCurriculumData,
  getUserDashboardState,
  createTaskForUser,
  toggleTaskStatus,
  deleteTaskForUser,
  markLessonComplete,
  submitQuizAttemptServerSide,
  toggleBookmarkForUser,
  saveNoteForUser,
  upsertLessonInSyllabus,
  saveTutorConversationMessage,
  getTutorConversationHistory,
} from './src/db/queries.ts';
import { COMPLETE_SYLLABUS_BLUEPRINT } from './src/db/seed-data.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '2mb' }));

// Initialize Server-Side Gemini Client
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

// 1. Health Check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Computer Fundamentals Academy API' });
});

// 2. Public Curriculum & Syllabus Endpoint
app.get('/api/curriculum', async (_req, res) => {
  try {
    const data = await getAllCurriculumData();
    res.json({
      ...data,
      syllabusBlueprint: COMPLETE_SYLLABUS_BLUEPRINT,
    });
  } catch (error: any) {
    console.error('Error in GET /api/curriculum:', error);
    res.status(500).json({ error: error.message || 'Failed to load curriculum' });
  }
});

// 3. Authenticated User Profile & Full Learning State
app.get('/api/auth/me', requireAuth, async (req: AuthRequest, res) => {
  try {
    const uid = req.user!.uid;
    const email = req.user!.email || `${uid}@academy.local`;
    const name = req.user!.name || email.split('@')[0];

    const user = await getOrCreateUser(uid, email, name);
    const dashboardState = await getUserDashboardState(uid);
    const tutorHistory = await getTutorConversationHistory(uid);

    res.json({
      user,
      ...dashboardState,
      tutorHistory,
    });
  } catch (error: any) {
    console.error('Error in GET /api/auth/me:', error);
    res.status(500).json({ error: error.message || 'Failed to load user session' });
  }
});

// 4. Update User Settings
const SettingsSchema = z.object({
  displayName: z.string().min(1).max(80).optional(),
  preferredLanguage: z.enum(['bilingual', 'punjabi', 'english']).optional(),
  dailyGoalMinutes: z.number().min(5).max(300).optional(),
});

app.patch('/api/users/me/settings', requireAuth, async (req: AuthRequest, res) => {
  try {
    const parsed = SettingsSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid settings input', details: parsed.error.issues });
    }
    const updated = await updateUserSettings(req.user!.uid, parsed.data);
    res.json({ user: updated });
  } catch (error: any) {
    console.error('Error in PATCH /api/users/me/settings:', error);
    res.status(500).json({ error: error.message || 'Failed to update settings' });
  }
});

// 5. Study Tasks CRUD (Real-time PostgreSQL Task Management + Push Notification Reminders)
const CreateTaskSchema = z.object({
  title: z.string().min(2).max(160),
  description: z.string().max(500).default(''),
  category: z.string().min(2).max(60).default('Computer Science'),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
  dueDate: z.string().min(4),
  notifyEnabled: z.boolean().default(true),
  linkedLessonSlug: z.string().optional(),
});

app.post('/api/tasks', requireAuth, async (req: AuthRequest, res) => {
  try {
    const parsed = CreateTaskSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid task data', details: parsed.error.issues });
    }
    const task = await createTaskForUser(req.user!.uid, parsed.data);
    res.status(201).json({ task });
  } catch (error: any) {
    console.error('Error in POST /api/tasks:', error);
    res.status(500).json({ error: error.message || 'Failed to create task' });
  }
});

app.patch('/api/tasks/:id', requireAuth, async (req: AuthRequest, res) => {
  try {
    const taskId = Number(req.params.id);
    const completed = Boolean(req.body.completed);
    const updated = await toggleTaskStatus(req.user!.uid, taskId, completed);
    res.json({ task: updated });
  } catch (error: any) {
    console.error('Error in PATCH /api/tasks/:id:', error);
    res.status(500).json({ error: error.message || 'Failed to update task' });
  }
});

app.delete('/api/tasks/:id', requireAuth, async (req: AuthRequest, res) => {
  try {
    const taskId = Number(req.params.id);
    await deleteTaskForUser(req.user!.uid, taskId);
    res.json({ deleted: true, id: taskId });
  } catch (error: any) {
    console.error('Error in DELETE /api/tasks/:id:', error);
    res.status(500).json({ error: error.message || 'Failed to delete task' });
  }
});

// 6. Lesson Progress Completion
app.post('/api/lessons/:id/progress', requireAuth, async (req: AuthRequest, res) => {
  try {
    const lessonId = Number(req.params.id);
    const timeSpent = Number(req.body.timeSpentMinutes) || 12;
    const result = await markLessonComplete(req.user!.uid, lessonId, timeSpent);
    res.json(result);
  } catch (error: any) {
    console.error('Error in POST /api/lessons/:id/progress:', error);
    res.status(500).json({ error: error.message || 'Failed to save lesson progress' });
  }
});

// 7. Deterministic Server-Side Quiz Submission & Scoring
const QuizAttemptSchema = z.object({
  mode: z.enum(['practice', 'timed']).default('practice'),
  answers: z.record(z.string(), z.string()),
});

app.post('/api/quizzes/:id/attempts', requireAuth, async (req: AuthRequest, res) => {
  try {
    const quizId = Number(req.params.id);
    const parsed = QuizAttemptSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid quiz submission payload' });
    }
    const result = await submitQuizAttemptServerSide(
      req.user!.uid,
      quizId,
      parsed.data.mode,
      parsed.data.answers
    );
    res.json(result);
  } catch (error: any) {
    console.error('Error in POST /api/quizzes/:id/attempts:', error);
    res.status(500).json({ error: error.message || 'Failed to score quiz attempt' });
  }
});

// 8. Bookmarks & Personal Notes
app.post('/api/users/me/bookmarks', requireAuth, async (req: AuthRequest, res) => {
  try {
    const lessonId = Number(req.body.lessonId);
    const result = await toggleBookmarkForUser(req.user!.uid, lessonId);
    res.json(result);
  } catch (error: any) {
    console.error('Error in POST /api/users/me/bookmarks:', error);
    res.status(500).json({ error: error.message || 'Failed to update bookmark' });
  }
});

app.post('/api/users/me/notes', requireAuth, async (req: AuthRequest, res) => {
  try {
    const lessonId = Number(req.body.lessonId);
    const content = String(req.body.content || '').trim();
    if (!content) {
      return res.status(400).json({ error: 'Note content cannot be empty' });
    }
    const saved = await saveNoteForUser(req.user!.uid, lessonId, content);
    res.json({ note: saved });
  } catch (error: any) {
    console.error('Error in POST /api/users/me/notes:', error);
    res.status(500).json({ error: error.message || 'Failed to save note' });
  }
});

// 9. Editable Syllabus & Admin Content Management
const UpsertLessonSchema = z.object({
  id: z.number().optional(),
  courseId: z.number(),
  slug: z.string().min(3),
  titleEn: z.string().min(3),
  titlePa: z.string().min(3),
  childAnalogyEn: z.string().min(10),
  childAnalogyPa: z.string().min(10),
  technicalExplanationEn: z.string().min(10),
  technicalExplanationPa: z.string().min(10),
  practicalExampleEn: z.string().min(5),
  practicalExamplePa: z.string().min(5),
  codeDemo: z.string().default(''),
  interactiveLabId: z.string().default('hardware-explorer'),
  objectivesJson: z.array(z.string()).default([]),
});

app.post('/api/admin/lessons', requireAuth, async (req: AuthRequest, res) => {
  try {
    const parsed = UpsertLessonSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid lesson fields', details: parsed.error.issues });
    }
    const saved = await upsertLessonInSyllabus(parsed.data);
    res.json({ lesson: saved });
  } catch (error: any) {
    console.error('Error in POST /api/admin/lessons:', error);
    res.status(500).json({ error: error.message || 'Failed to save syllabus lesson' });
  }
});

// 10. AI Tutor Integration (gemini-4-argon with ThinkingLevel.HIGH)
const TutorRequestSchema = z.object({
  prompt: z.string().min(2).max(2000),
  lessonTitle: z.string().optional(),
  lessonContext: z.string().optional(),
  mode: z.enum(['child-friendly', 'deep-technical', 'math-step', 'quiz-me']).default('child-friendly'),
  uid: z.string().optional(),
});

app.post('/api/ai/tutor', async (req, res) => {
  try {
    const parsed = TutorRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Please enter a valid question for the AI Tutor.' });
    }

    const { prompt, lessonTitle, lessonContext, mode, uid } = parsed.data;
    const ai = getGeminiClient();

    const modeInstructions: Record<string, string> = {
      'child-friendly':
        'Explain like the learner is a curious 10-year-old child! Use vivid everyday Punjabi household/village analogies (e.g., kitchen, post office, torch switches, sugarcane machine) alongside clear English technical terms.',
      'deep-technical':
        'Provide a rigorous computer engineering explanation covering hardware registers, binary opcodes, memory latency, and algorithmic complexity, in both Punjabi (Gurmukhi) and English.',
      'math-step':
        'Break down the binary, hexadecimal, Boolean algebra, discrete math, or probability calculation step-by-step showing every intermediate number and formula.',
      'quiz-me':
        'Explain the concept briefly in Punjabi and English, then ask 2 thought-provoking practice questions to test the learner’s conceptual understanding.',
    };

    const systemInstruction = `You are the Bilingual Professor at Computer Fundamentals Academy.
Your mission is to teach Computer Science (Hardware, Binary, Assembly, OS, Networking, Algorithms) and Mathematics for Computer Science (Propositional Logic, Discrete Math, Sets, Graph Theory, Probability & Statistics).
Rules:
1. Always teach in warm, clear Punjabi written in Gurmukhi script AND English, keeping standard English technical terms (like CPU, ALU, Register, Binary, Logic Gate, Process, Thread, Big-O, Intersection, Median).
2. Always include a "ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀ ਉਦਾਹਰਣ (Child-Friendly Analogy)" with a practical real-world illustration.
3. Mode instruction: ${modeInstructions[mode] || modeInstructions['child-friendly']}
4. Current Lesson Context: ${lessonTitle || 'General Computer Science & Math'} — ${lessonContext || ''}`;

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

    const replyText = response.text || 'ਮੁਆਫ਼ ਕਰਨਾ, ਉੱਤਰ ਤਿਆਰ ਨਹੀਂ ਹੋ ਸਕਿਆ। (Unable to generate response.)';

    if (uid) {
      await saveTutorConversationMessage(uid, lessonTitle || 'general', 'user', prompt, mode);
      await saveTutorConversationMessage(uid, lessonTitle || 'general', 'assistant', replyText, mode);
    }

    res.json({
      reply: replyText,
      model: activeModel,
      thinkingLevel: 'HIGH',
    });
  } catch (error: any) {
    console.error('Error in POST /api/ai/tutor:', error);
    res.status(500).json({
      error: error.message || 'AI Tutor service encountered an error. Please try again.',
    });
  }
});

async function startServer() {
  const PORT = 3000;

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
}

startServer();
