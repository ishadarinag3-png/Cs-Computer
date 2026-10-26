import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { onAuthStateChanged, signInWithPopup, signOut, User as FirebaseUser } from 'firebase/auth';
import { auth, googleAuthProvider } from './lib/firebase.ts';
import { ComputerLaboratory, LabId, resolveValidLabId } from './components/ComputerLaboratory.tsx';
import { TaskManagerView, StudyTask } from './components/TaskManagerView.tsx';
import {
  MathMessageRenderer,
  MATH_STEP_REFERENCE_FORMULAS,
  renderLatexToHtml,
  getLessonFormulas,
} from './components/MathMessageRenderer.tsx';
import { LessonTemplateEditor } from './components/LessonTemplateEditor.tsx';
import { enrichGlossaryTermMetadata } from './db/curriculum/blueprint.ts';
import {
  BookOpen,
  Cpu,
  CheckCircle2,
  Award,
  Sparkles,
  Bookmark,
  Sun,
  Moon,
  Flame,
  Trophy,
  Plus,
  Send,
  Clock,
  ChevronRight,
  Edit3,
  Search,
  CheckSquare,
  Compass,
  Smartphone,
  Maximize2,
  Minimize2,
  Lock,
  Share,
  ExternalLink,
  Copy,
  Check,
  X,
  AlertTriangle,
  Globe,
  Layers,
} from 'lucide-react';

const DEFAULT_APP_URL = 'https://ais-dev-kk7j6asjt23xaclt3gbpty-734066621115.asia-east1.run.app';

type ActiveSection =
  | 'dashboard'
  | 'curriculum'
  | 'laboratory'
  | 'tasks'
  | 'quizzes'
  | 'tutor'
  | 'glossary'
  | 'bookmarks'
  | 'achievements'
  | 'admin'
  | 'iphone-settings';

const GUEST_PROFILE = {
  uid: 'guest',
  email: 'guest@academy.local',
  displayName: 'Guest Learner (Preview Mode)',
  role: 'student',
  preferredLanguage: 'bilingual' as const,
  xp: 0,
  streakDays: 0,
  dailyGoalMinutes: 30,
};

const GUEST_DEMO_TASKS: StudyTask[] = [
  {
    id: -101,
    title: '[Demo Sample] Master Binary (0 & 1), Karnaugh Maps, and Logic Gates in Lab D & E',
    description: 'Sample preview task — Sign in with Google to save your own study tasks in Cloud SQL.',
    category: 'Binary & Digital Logic',
    priority: 'high',
    dueDate: new Date(Date.now() + 86400000).toISOString().slice(0, 16),
    completed: false,
    notifyEnabled: false,
    linkedLessonSlug: 'digital-logic-binary-karnaugh-combinational',
  },
  {
    id: -102,
    title: '[Demo Sample] Practice SI Units, Logarithmic Decibels (-3.0103 dB) & Trigonometry',
    description: 'Sample preview task — Review SI engineering prefixes, decibels, and AC waveforms in Level 0.',
    category: 'Engineering Math',
    priority: 'medium',
    dueDate: new Date(Date.now() + 172800000).toISOString().slice(0, 16),
    completed: false,
    notifyEnabled: false,
    linkedLessonSlug: 'math-foundations-si-algebra-trig',
  },
];

const INITIAL_TUTOR_WELCOME = [
  {
    role: 'assistant' as const,
    content:
      'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! (Welcome to Computer Fundamentals Academy!) 🎓\nਮੈਂ ਤੁਹਾਡਾ Bilingual AI Tutor ਹਾਂ। ਤੁਸੀਂ ਮੈਨੂੰ ਕੰਪਿਊਟਰ ਹਾਰਡਵੇਅਰ (CPU, RAM), ਬਾਈਨਰੀ ਭਾਸ਼ਾ ($0$ ਅਤੇ $1$), Assembly Language, Algorithms ਜਾਂ ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਦੇ ਗਣਿਤ (Logic, Discrete Math, Statistics) ਬਾਰੇ ਕੋਈ ਵੀ ਸਵਾਲ ਪੁੱਛ ਸਕਦੇ ਹੋ — ਮੈਂ ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀਆਂ ਉਦਾਹਰਣਾਂ ਦੇ ਕੇ ਸਮਝਾਵਾਂਗਾ!',
    mode: 'child-friendly',
  },
  {
    role: 'assistant' as const,
    content:
      '**Step-by-Step Math & Binary Preview (KaTeX LaTeX Mode):**\nਡੈਸੀਮਲ $75_{10}$ ਨੂੰ 8-bit ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲਣ ਦਾ ਕਦਮ-ਦਰ-ਕਦਮ ਫਾਰਮੂਲਾ:\n$$N_{10} = \\sum_{i=0}^{7} b_i \\cdot 2^i = 64 + 8 + 2 + 1$$\n$$75_{10} = 0\\cdot 2^7 + 1\\cdot 2^6 + 0\\cdot 2^5 + 0\\cdot 2^4 + 1\\cdot 2^3 + 0\\cdot 2^2 + 1\\cdot 2^1 + 1\\cdot 2^0 = 01001011_2$$\nਅਤੇ **De Morgan’s Law** (ਬੂਲੀਅਨ ਅਲਜਬਰਾ):\n$$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}, \\quad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}$$',
    mode: 'math-step',
  },
];

export default function App() {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [idToken, setIdToken] = useState<string>('');
  const [userProfile, setUserProfile] = useState<{
    uid: string;
    email: string;
    displayName: string;
    role: string;
    preferredLanguage: 'bilingual' | 'punjabi' | 'english';
    xp: number;
    streakDays: number;
    dailyGoalMinutes: number;
  }>(GUEST_PROFILE);

  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [oledBlackMode, setOledBlackMode] = useState<boolean>(true);
  const [dynamicIslandSafePadding, setDynamicIslandSafePadding] = useState<boolean>(true);
  const [screenTouchLocked, setScreenTouchLocked] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isStandalonePWA, setIsStandalonePWA] = useState<boolean>(false);
  const [isInIframe, setIsInIframe] = useState<boolean>(false);
  const [showDirectNotice, setShowDirectNotice] = useState<boolean>(true);
  const [showIphoneModal, setShowIphoneModal] = useState<boolean>(false);
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);
  const [isIOSDevice, setIsIOSDevice] = useState<boolean>(false);
  const [directAppUrl, setDirectAppUrl] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.origin && window.location.origin !== 'null') {
      return window.location.origin;
    }
    return DEFAULT_APP_URL;
  });

  const [langMode, setLangMode] = useState<'bilingual' | 'punjabi' | 'english'>('bilingual');
  const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');
  const [selectedLabId, setSelectedLabId] = useState<LabId>('hardware-explorer');

  // Curriculum Data & Async Loading/Error State
  const [curriculumLoading, setCurriculumLoading] = useState<boolean>(true);
  const [curriculumError, setCurriculumError] = useState<string | null>(null);
  const [actionErrorMsg, setActionErrorMsg] = useState<string | null>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [lessons, setLessons] = useState<any[]>([]);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);
  const [achievementsCatalog, setAchievementsCatalog] = useState<any[]>([]);
  const [syllabusBlueprint, setSyllabusBlueprint] = useState<any[]>([]);
  const [syllabusCoverage, setSyllabusCoverage] = useState<any | null>(null);
  const [selectedLessonSlug, setSelectedLessonSlug] = useState<string>('math-foundations-si-algebra-trig');

  // User Learning State (Separated from Guest Demo Samples)
  const [tasks, setTasks] = useState<StudyTask[]>(GUEST_DEMO_TASKS);
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<number[]>([]);
  const [lessonOpenedAtMs, setLessonOpenedAtMs] = useState<number>(() => Date.now());
  const [quizAttempts, setQuizAttempts] = useState<any[]>([]);
  const [bookmarkedLessonIds, setBookmarkedLessonIds] = useState<number[]>([]);
  const [lessonNotes, setLessonNotes] = useState<Record<number, string>>({});
  const [unlockedCodes, setUnlockedCodes] = useState<string[]>([]);
  const [celebrationBadge, setCelebrationBadge] = useState<string | null>(null);

  // Quiz Active State
  const [selectedQuizId, setSelectedQuizId] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState<'practice' | 'timed'>('practice');
  const [activeQuizSessionId, setActiveQuizSessionId] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [lastQuizResult, setLastQuizResult] = useState<any | null>(null);
  const [quizSubmitError, setQuizSubmitError] = useState<string | null>(null);
  const [quizSubmitting, setQuizSubmitting] = useState<boolean>(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(300);

  // Note Input & Search State
  const [noteDraft, setNoteDraft] = useState<string>('');
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  // AI Tutor State
  const [tutorMode, setTutorMode] = useState<'child-friendly' | 'deep-technical' | 'math-step' | 'quiz-me'>('child-friendly');
  const [tutorInput, setTutorInput] = useState<string>('');
  const [tutorLoading, setTutorLoading] = useState<boolean>(false);
  const [tutorMessages, setTutorMessages] = useState<
    Array<{ role: 'user' | 'assistant'; content: string; mode?: string }>
  >(INITIAL_TUTOR_WELCOME);

  // Syllabus Editor State
  const [editCourseId, setEditCourseId] = useState<number>(1);
  const [editLessonId, setEditLessonId] = useState<number | undefined>(undefined);
  const [editSlug, setEditSlug] = useState<string>('');
  const [editTitleEn, setEditTitleEn] = useState<string>('');
  const [editTitlePa, setEditTitlePa] = useState<string>('');
  const [editAnalogyEn, setEditAnalogyEn] = useState<string>('');
  const [editAnalogyPa, setEditAnalogyPa] = useState<string>('');
  const [editTechEn, setEditTechEn] = useState<string>('');
  const [editTechPa, setEditTechPa] = useState<string>('');
  const [editExampleEn, setEditExampleEn] = useState<string>('');
  const [editExamplePa, setEditExamplePa] = useState<string>('');
  const [editCodeDemo, setEditCodeDemo] = useState<string>('');
  const [editLabId, setEditLabId] = useState<string>('hardware-explorer');
  const [adminStatusMsg, setAdminStatusMsg] = useState<string>('');

  const isAdmin = Boolean(firebaseUser && userProfile.role === 'admin');

  // Reset all user-specific state on sign-out or account change
  const resetUserSpecificState = () => {
    setIdToken('');
    setUserProfile(GUEST_PROFILE);
    setTasks(GUEST_DEMO_TASKS);
    setCompletedLessonIds([]);
    setQuizAttempts([]);
    setBookmarkedLessonIds([]);
    setLessonNotes({});
    setUnlockedCodes([]);
    setCelebrationBadge(null);
    setActiveQuizSessionId(null);
    setQuizAnswers({});
    setLastQuizResult(null);
    setQuizSubmitError(null);
    setNoteDraft('');
    setAdminStatusMsg('');
    setActionErrorMsg(null);
    setTutorMessages(INITIAL_TUTOR_WELCOME);
  };

  // Authenticated fetch helper with automatic Firebase token refresh and 401 retry
  const authenticatedFetch = async (url: string, init: RequestInit = {}): Promise<Response> => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('Please sign in with Google to save or access account data.');
    }

    let token = await currentUser.getIdToken(false);
    setIdToken(token);

    const makeRequest = (bearer: string) =>
      fetch(url, {
        ...init,
        headers: {
          ...(init.headers || {}),
          Authorization: `Bearer ${bearer}`,
        },
      });

    let response = await makeRequest(token);
    if (response.status === 401) {
      // Force token refresh once on 401
      token = await currentUser.getIdToken(true);
      setIdToken(token);
      response = await makeRequest(token);
      if (response.status === 401) {
        resetUserSpecificState();
        throw new Error('Your session expired. Please sign in again.');
      }
    }
    return response;
  };

  // Detect standalone PWA & iOS environment (without blocking pinch-to-zoom accessibility)
  useEffect(() => {
    const checkStandalone =
      (typeof window !== 'undefined' &&
        window.matchMedia('(display-mode: standalone)').matches) ||
      (typeof window !== 'undefined' && (window.navigator as any).standalone === true);
    setIsStandalonePWA(Boolean(checkStandalone));

    const checkIframe = typeof window !== 'undefined' && window.self !== window.top;
    setIsInIframe(checkIframe);

    const isIOS =
      typeof window !== 'undefined' &&
      /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    setIsIOSDevice(isIOS);

    fetch('/api/app-info')
      .then((res) => res.json())
      .then((data) => {
        if (data.appUrl) {
          setDirectAppUrl(data.appUrl);
        }
      })
      .catch(() => {});
  }, []);

  const handleOpenDirectApp = () => {
    if (typeof window !== 'undefined') {
      window.open(directAppUrl, '_blank');
    }
  };

  const handleCopyDirectUrl = async () => {
    try {
      await navigator.clipboard.writeText(directAppUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      const input = document.createElement('input');
      input.value = directAppUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    }
  };

  const toggleFullScreenMode = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          setIsFullscreen(true);
        } else {
          // On iOS Safari where Fullscreen API requires Add to Home Screen, open iPhone 15 Pro settings guide
          setShowIphoneModal(true);
        }
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      setShowIphoneModal(true);
    }
  };

  // Fetch Curriculum from Backend with loading, error, and retry support
  const fetchCurriculum = async () => {
    setCurriculumLoading(true);
    setCurriculumError(null);
    try {
      const res = await fetch('/api/curriculum');
      if (!res.ok) throw new Error(`Failed to load curriculum (HTTP ${res.status})`);
      const data = await res.json();
      setCourses(data.courses || []);
      setLessons(data.lessons || []);
      setQuizzes(data.quizzes || []);
      setQuestions(data.questions || []);
      setAchievementsCatalog(data.achievements || []);
      setSyllabusBlueprint(data.syllabusBlueprint || []);
      setSyllabusCoverage(data.syllabusCoverage || null);
      if (data.lessons?.length > 0 && !selectedLessonSlug) {
        setSelectedLessonSlug(data.lessons[0].slug);
      }
      if (data.quizzes?.length > 0 && !selectedQuizId) {
        setSelectedQuizId(data.quizzes[0].id);
      }
      if (data.courses?.length > 0) {
        setEditCourseId(data.courses[0].id);
      }
    } catch (err: any) {
      console.error('Error loading curriculum:', err);
      setCurriculumError(err.message || 'Unable to load curriculum from server.');
    } finally {
      setCurriculumLoading(false);
    }
  };

  useEffect(() => {
    fetchCurriculum();
  }, []);

  // Listen to Firebase Auth State & Synchronize with Cloud SQL (Resets state on sign-out or account change)
  useEffect(() => {
    let previousUid: string | null = null;
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user || (previousUid && previousUid !== user.uid)) {
        resetUserSpecificState();
      }
      previousUid = user ? user.uid : null;
      setFirebaseUser(user);

      if (user) {
        try {
          const token = await user.getIdToken();
          setIdToken(token);
          const res = await fetch('/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) {
            const data = await res.json();
            if (data.user) {
              setUserProfile(data.user);
              if (data.user.preferredLanguage) {
                setLangMode(data.user.preferredLanguage);
              }
            }
            setTasks(data.tasks || []);
            setCompletedLessonIds(
              (data.lessonProgress || [])
                .filter((p: any) => p.completed)
                .map((p: any) => p.lessonId)
            );
            setEnrolledCourseIds(
              (data.enrollments || []).map((e: any) => e.courseId)
            );
            setQuizAttempts(data.quizAttempts || []);
            setBookmarkedLessonIds((data.bookmarks || []).map((b: any) => b.lessonId));
            const map: Record<number, string> = {};
            (data.notes || []).forEach((n: any) => {
              map[n.lessonId] = n.content;
            });
            setLessonNotes(map);
            setUnlockedCodes(
              (data.unlockedAchievements || []).map((u: any) => u.achievementCode)
            );
            if (data.tutorHistory && data.tutorHistory.length > 0) {
              setTutorMessages(
                data.tutorHistory.map((m: any) => ({
                  role: m.role,
                  content: m.content,
                  mode: m.mode,
                }))
              );
            } else {
              setTutorMessages(INITIAL_TUTOR_WELCOME);
            }
          }
        } catch (err) {
          console.error('Failed to sync authenticated user with backend:', err);
          setActionErrorMsg('Unable to synchronize account profile. Please retry.');
        }
      }
    });
    return () => unsub();
  }, []);

  // Timed Quiz Countdown
  useEffect(() => {
    if (activeSection !== 'quizzes' || quizMode !== 'timed' || lastQuizResult) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeSection, quizMode, lastQuizResult]);

  const currentLesson =
    lessons.find((l) => l.slug === selectedLessonSlug) || lessons[0] || null;

  useEffect(() => {
    if (currentLesson) {
      setNoteDraft(lessonNotes[currentLesson.id] || '');
      setLessonOpenedAtMs(Date.now());
    }
  }, [currentLesson?.id, lessonNotes]);

  const handleGoogleAuth = async () => {
    setActionErrorMsg(null);
    if (firebaseUser) {
      await signOut(auth);
      resetUserSpecificState();
    } else {
      try {
        await signInWithPopup(auth, googleAuthProvider);
      } catch (err: any) {
        console.error('Google Sign-In error:', err);
        setActionErrorMsg(err.message || 'Google Sign-In could not be completed.');
      }
    }
  };

  // Task Handlers
  const handleAddTask = async (newTask: Omit<StudyTask, 'id' | 'completed'>) => {
    setActionErrorMsg(null);
    if (firebaseUser) {
      try {
        const res = await authenticatedFetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTask),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Failed to create task');
        }
        setTasks((prev) => [data.task, ...prev]);
      } catch (err: any) {
        setActionErrorMsg(err.message || 'Could not save task.');
      }
      return;
    }
    setTasks((prev) => [
      { ...newTask, title: `[Guest Demo] ${newTask.title}`, id: -Date.now(), completed: false },
      ...prev,
    ]);
  };

  const handleToggleTask = async (id: number, completed: boolean) => {
    setActionErrorMsg(null);
    if (firebaseUser && id > 0) {
      try {
        const res = await authenticatedFetch(`/api/tasks/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completed }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Failed to update task');
        }
        setTasks((prev) => prev.map((t) => (t.id === id ? data.task : t)));
      } catch (err: any) {
        setActionErrorMsg(err.message || 'Could not update task status.');
      }
      return;
    }
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed } : t)));
  };

  const handleDeleteTask = async (id: number) => {
    setActionErrorMsg(null);
    if (firebaseUser && id > 0) {
      try {
        const res = await authenticatedFetch(`/api/tasks/${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to delete task');
        }
        setTasks((prev) => prev.filter((t) => t.id !== id));
      } catch (err: any) {
        setActionErrorMsg(err.message || 'Could not delete task.');
      }
      return;
    }
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEnrollCourse = async (courseId: number) => {
    setActionErrorMsg(null);
    if (!firebaseUser) {
      setActionErrorMsg('Sign in with Google to enroll in courses and track structured progression.');
      return;
    }
    try {
      const res = await authenticatedFetch(`/api/courses/${courseId}/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to enroll in course');
      }
      if (!enrolledCourseIds.includes(courseId)) {
        setEnrolledCourseIds((prev) => [...prev, courseId]);
      }
    } catch (err: any) {
      setActionErrorMsg(err.message || 'Could not enroll in course.');
    }
  };

  // Mark Lesson Complete (Authoritative Server Persistence with Elapsed Time Tracking)
  const handleCompleteLesson = async (lessonId: number) => {
    setActionErrorMsg(null);
    if (!firebaseUser) {
      setActionErrorMsg('Sign in with Google to save lesson completion and earn verified XP.');
      return;
    }
    try {
      const elapsedSeconds = Math.max(
        60,
        Math.min(14400, Math.round((Date.now() - lessonOpenedAtMs) / 1000))
      );
      const elapsedMinutes = Math.max(1, Math.min(240, Math.round(elapsedSeconds / 60)));
      const res = await authenticatedFetch(`/api/lessons/${lessonId}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timeSpentMinutes: elapsedMinutes,
          timeSpentSeconds: elapsedSeconds,
          activeInteractionSeconds: elapsedSeconds,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to record lesson completion');
      }
      if (!completedLessonIds.includes(lessonId)) {
        setCompletedLessonIds((prev) => [...prev, lessonId]);
      }
      if (typeof data.xpEarned === 'number' && data.xpEarned > 0) {
        setUserProfile((p) => ({
          ...p,
          xp: p.xp + data.xpEarned,
          streakDays: typeof data.streakDays === 'number' ? data.streakDays : p.streakDays,
        }));
      }
      if (data.newlyUnlocked?.length > 0) {
        setUnlockedCodes((prev) => [...new Set([...prev, ...data.newlyUnlocked])]);
        setCelebrationBadge(data.newlyUnlocked[0]);
      }
    } catch (err: any) {
      setActionErrorMsg(err.message || 'Could not save lesson progress.');
    }
  };

  // Bookmark & Note Handlers
  const handleToggleBookmark = async (lessonId: number) => {
    setActionErrorMsg(null);
    if (!firebaseUser) {
      setActionErrorMsg('Sign in with Google to save lesson bookmarks to your account.');
      return;
    }
    try {
      const res = await authenticatedFetch('/api/users/me/bookmarks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update bookmark');
      setBookmarkedLessonIds((prev) =>
        data.bookmarked ? [...new Set([...prev, lessonId])] : prev.filter((id) => id !== lessonId)
      );
    } catch (err: any) {
      setActionErrorMsg(err.message || 'Could not update bookmark.');
    }
  };

  const handleSaveNote = async (lessonId: number) => {
    setActionErrorMsg(null);
    if (!noteDraft.trim()) return;
    if (!firebaseUser) {
      setActionErrorMsg('Sign in with Google to save personal study notes to Cloud SQL.');
      return;
    }
    try {
      const res = await authenticatedFetch('/api/users/me/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId, content: noteDraft }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save note');
      setLessonNotes((prev) => ({ ...prev, [lessonId]: noteDraft }));
    } catch (err: any) {
      setActionErrorMsg(err.message || 'Could not save study note.');
    }
  };

  // Start Server-Enforced Quiz Session (for Timed Mode or Explicit Session Tracking)
  const startServerQuizSession = async (quizId: number, mode: 'practice' | 'timed') => {
    setQuizSubmitError(null);
    setLastQuizResult(null);
    setQuizAnswers({});
    const targetQuiz = quizzes.find((q) => q.id === quizId);
    setTimeLeftSeconds(targetQuiz?.timeLimitSeconds || 300);

    if (!firebaseUser) {
      setActiveQuizSessionId(null);
      return;
    }

    try {
      const res = await authenticatedFetch(`/api/quizzes/${quizId}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode }),
      });
      const data = await res.json();
      if (res.ok && data.session) {
        setActiveQuizSessionId(data.session.id);
        const serverLimit = data.session.timeLimitSeconds ?? data.timeLimitSeconds;
        if (typeof serverLimit === 'number') {
          setTimeLeftSeconds(serverLimit);
        }
      }
    } catch (err: any) {
      console.error('Could not initialize quiz session:', err);
    }
  };

  // Quiz Submission (Strictly Server-Authoritative — Never displays unsaved results as saved)
  const handleSubmitQuiz = async (quizId: number) => {
    setQuizSubmitError(null);
    if (!firebaseUser) {
      setQuizSubmitError(
        'Sign in with Google is required to grade and save official quiz attempts on the server.'
      );
      return;
    }

    if (Object.keys(quizAnswers).length === 0) {
      setQuizSubmitError('Please select or enter at least one answer before submitting.');
      return;
    }

    setQuizSubmitting(true);
    try {
      const res = await authenticatedFetch(`/api/quizzes/${quizId}/attempts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: quizMode,
          answers: quizAnswers,
          ...(activeQuizSessionId ? { sessionId: activeQuizSessionId } : {}),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to grade and save quiz attempt');
      }

      setLastQuizResult(data.attempt);
      setQuizAttempts((prev) => [data.attempt, ...prev]);
      setActiveQuizSessionId(null);
      if (typeof data.xpEarned === 'number' && data.xpEarned > 0) {
        setUserProfile((p) => ({ ...p, xp: p.xp + data.xpEarned }));
      }
      if (data.newlyUnlocked?.length > 0) {
        setUnlockedCodes((prev) => [...new Set([...prev, ...data.newlyUnlocked])]);
        setCelebrationBadge(data.newlyUnlocked[0]);
      }
    } catch (err: any) {
      // Never display an unsaved or rejected quiz submission as a saved result
      setLastQuizResult(null);
      setQuizSubmitError(err.message || 'Quiz submission could not be saved.');
    } finally {
      setQuizSubmitting(false);
    }
  };

  // AI Tutor Submission (Authenticated via verified token, never body UID)
  const handleSendTutorPrompt = async (customPrompt?: string) => {
    const queryText = (customPrompt ?? tutorInput).trim();
    if (!queryText || tutorLoading) return;

    if (!firebaseUser) {
      setTutorMessages((prev) => [
        ...prev,
        { role: 'user', content: queryText, mode: tutorMode },
        {
          role: 'assistant',
          content:
            'ਕਿਰਪਾ ਕਰਕੇ AI Tutor ਵਰਤਣ ਲਈ ਉੱਪਰ "Sign In" ਬਟਨ ਦਬਾ ਕੇ Google ਨਾਲ ਲੌਗਇਨ ਕਰੋ। (Please sign in with Google in the top bar to use the authenticated Bilingual AI Tutor.)',
          mode: tutorMode,
        },
      ]);
      setTutorInput('');
      return;
    }

    setTutorInput('');
    setTutorMessages((prev) => [...prev, { role: 'user', content: queryText, mode: tutorMode }]);
    setTutorLoading(true);

    try {
      const res = await authenticatedFetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: queryText,
          lessonTitle: currentLesson?.titleEn || 'Computer Science & Mathematics',
          lessonContext: currentLesson?.technicalExplanationEn || '',
          mode: tutorMode,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Tutor request failed');
      }
      setTutorMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply, mode: tutorMode },
      ]);
    } catch (err: any) {
      setTutorMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Notice: ${err.message || 'Unable to reach AI Tutor.'}`,
          mode: tutorMode,
        },
      ]);
    } finally {
      setTutorLoading(false);
    }
  };

  // Load lesson into Syllabus Editor (Admin Only)
  const populateEditorWithLesson = (lesson: any) => {
    if (!isAdmin) {
      setActionErrorMsg('Administrator privileges are required to edit syllabus lessons.');
      return;
    }
    setEditLessonId(lesson.id);
    setEditCourseId(lesson.courseId);
    setEditSlug(lesson.slug);
    setEditTitleEn(lesson.titleEn);
    setEditTitlePa(lesson.titlePa);
    setEditAnalogyEn(lesson.childAnalogyEn);
    setEditAnalogyPa(lesson.childAnalogyPa);
    setEditTechEn(lesson.technicalExplanationEn);
    setEditTechPa(lesson.technicalExplanationPa);
    setEditExampleEn(lesson.practicalExampleEn);
    setEditExamplePa(lesson.practicalExamplePa);
    setEditCodeDemo(lesson.codeDemo || '');
    setEditLabId(lesson.interactiveLabId || 'hardware-explorer');
    setActiveSection('admin');
  };

  const handleSaveSyllabusLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminStatusMsg('');
    if (!isAdmin) {
      setAdminStatusMsg('Forbidden: Administrator privileges are required to modify the syllabus.');
      return;
    }

    const payload = {
      id: editLessonId,
      courseId: Number(editCourseId),
      slug:
        editSlug ||
        editTitleEn
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') ||
        `custom-lesson-${Date.now()}`,
      titleEn: editTitleEn,
      titlePa: editTitlePa,
      childAnalogyEn: editAnalogyEn,
      childAnalogyPa: editAnalogyPa,
      technicalExplanationEn: editTechEn,
      technicalExplanationPa: editTechPa,
      practicalExampleEn: editExampleEn,
      practicalExamplePa: editExamplePa,
      codeDemo: editCodeDemo,
      interactiveLabId: editLabId,
      objectivesJson: [editTitleEn],
    };

    try {
      const res = await authenticatedFetch('/api/admin/lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to save syllabus lesson');
      }
      setAdminStatusMsg('Lesson saved to Cloud SQL PostgreSQL and published to the curriculum!');
      await fetchCurriculum();
    } catch (err: any) {
      setAdminStatusMsg(`Error: ${err.message || 'Failed to save syllabus lesson'}`);
    }
  };

  const handleSave28SectionLesson = async (compiledPayload: any) => {
    setAdminStatusMsg('');
    if (!isAdmin) {
      setAdminStatusMsg(
        'Forbidden: Verified Administrator privileges are required to publish or modify syllabus lessons.'
      );
      return;
    }

    try {
      const res = await authenticatedFetch('/api/admin/lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(compiledPayload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to save 28-section syllabus lesson');
      }
      setAdminStatusMsg(
        `28-Section Lesson "${compiledPayload.titleEn}" validated, saved to PostgreSQL, and published!`
      );
      await fetchCurriculum();
    } catch (err: any) {
      setAdminStatusMsg(`Error: ${err.message || 'Failed to save 28-section syllabus lesson'}`);
    }
  };

  const allGlossaryTerms = lessons.flatMap((l) =>
    (l.terminologyJson || []).map((t: any) => ({
      ...t,
      lessonTitle: l.titleEn,
      lessonSlug: l.slug,
      meta: enrichGlossaryTermMetadata(t.term, t.meaningEn),
    }))
  );

  const filteredGlossary = allGlossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.punjabi.includes(glossarySearch) ||
      item.meaningEn.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  const overallProgressPercent =
    lessons.length > 0 ? Math.round((completedLessonIds.length / lessons.length) * 100) : 0;

  const canvasBg = darkMode
    ? oledBlackMode
      ? 'bg-black text-slate-100'
      : 'bg-slate-950 text-slate-100'
    : 'bg-slate-50 text-slate-900';

  const surfaceCard = darkMode
    ? oledBlackMode
      ? 'bg-slate-950 border-slate-800/90 text-slate-100'
      : 'bg-slate-900 border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900';

  const subtlePanel = darkMode
    ? 'bg-slate-900/80 border-slate-800 text-slate-200'
    : 'bg-slate-50 border-slate-200 text-slate-800';

  return (
    <div
      className={`h-[100dvh] w-full max-w-[100vw] overflow-hidden flex flex-col select-none ${canvasBg} ${
        screenTouchLocked ? 'touch-pan-y' : ''
      }`}
    >
      {/* DIRECT LAUNCH NOTICE BANNER FOR IPHONE STANDALONE MODE */}
      {showDirectNotice && !isStandalonePWA && (
        <aside
          aria-label="Direct iPhone Launcher"
          className={`shrink-0 px-3 sm:px-6 py-2 border-b text-xs flex flex-wrap items-center justify-between gap-2 z-50 ${
            darkMode
              ? 'bg-amber-950/90 border-amber-800/80 text-amber-200'
              : 'bg-amber-50 border-amber-300 text-amber-950'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <Smartphone className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="font-bold shrink-0">iPhone Full-Screen Mode:</span>
            <span className="hidden md:inline opacity-90 truncate">
              To open app without browser borders or AI Studio UI, launch via Direct Safari link before tapping "Add to Home Screen".
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <a
              href={directAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 min-h-[30px] rounded bg-sky-600 hover:bg-sky-500 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm shrink-0"
            >
              <span>Open Direct App in Safari ↗</span>
            </a>
            <button
              onClick={handleCopyDirectUrl}
              className={`px-2.5 py-1 min-h-[30px] rounded border font-semibold text-[11px] flex items-center gap-1 shrink-0 ${
                copiedUrl
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : darkMode
                  ? 'bg-slate-900 border-slate-700 text-slate-200'
                  : 'bg-white border-amber-400 text-amber-900'
              }`}
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3 h-3 text-white" />
                  <span>Copied ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy URL</span>
                </>
              )}
            </button>
            <button
              onClick={() => setShowIphoneModal(true)}
              className="px-2 py-1 min-h-[30px] rounded underline font-medium text-[11px] opacity-80 hover:opacity-100 shrink-0"
            >
              How-To Guide
            </button>
            <button
              onClick={() => setShowDirectNotice(false)}
              className="p-1 rounded opacity-60 hover:opacity-100 text-xs font-bold shrink-0 ml-1"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* STRICT 3-ZONE TOP BAR CONTRACT (Locked at top, respects iPhone 15 Pro Dynamic Island safe area) */}
      <header
        className={`shrink-0 flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 sm:py-3.5 border-b ${
          dynamicIslandSafePadding ? 'pt-safe' : ''
        } ${darkMode ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}
      >
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('dashboard');
          }}
          className="text-base sm:text-lg font-bold tracking-tight whitespace-nowrap shrink-0 font-display truncate max-w-[200px] sm:max-w-none"
        >
          CS Fundamentals Academy
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`hover:underline transition-colors whitespace-nowrap shrink-0 ${
              activeSection === 'dashboard' ? 'text-sky-500 font-semibold' : 'opacity-80'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveSection('curriculum')}
            className={`hover:underline transition-colors whitespace-nowrap shrink-0 ${
              activeSection === 'curriculum' ? 'text-sky-500 font-semibold' : 'opacity-80'
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setActiveSection('laboratory')}
            className={`hover:underline transition-colors whitespace-nowrap shrink-0 ${
              activeSection === 'laboratory' ? 'text-sky-500 font-semibold' : 'opacity-80'
            }`}
          >
            Computer Lab
          </button>
          <button
            onClick={() => setActiveSection('tasks')}
            className={`hover:underline transition-colors whitespace-nowrap shrink-0 ${
              activeSection === 'tasks' ? 'text-sky-500 font-semibold' : 'opacity-80'
            }`}
          >
            Study Tasks
          </button>
          <button
            onClick={() => setActiveSection('tutor')}
            className={`hover:underline transition-colors whitespace-nowrap shrink-0 ${
              activeSection === 'tutor' ? 'text-sky-500 font-semibold' : 'opacity-80'
            }`}
          >
            AI Tutor
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleGoogleAuth}
            className="px-3.5 py-2 min-h-[38px] text-xs font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors whitespace-nowrap shrink-0"
          >
            {firebaseUser ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </header>

      {/* SECONDARY WORKSPACE TOOLBAR (Compact single-row scroller, locked width) */}
      <div
        className={`shrink-0 border-b px-3 sm:px-6 py-1.5 flex items-center justify-between gap-2 w-full max-w-full overflow-x-auto no-scrollbar ${
          darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-100/90 border-slate-200'
        }`}
      >
        <div className="flex items-center gap-1.5 shrink-0">
          {(
            [
              { id: 'quizzes', label: 'Quizzes' },
              { id: 'glossary', label: 'Glossary' },
              { id: 'bookmarks', label: 'Notes' },
              { id: 'achievements', label: 'Badges' },
              { id: 'admin', label: 'Syllabus' },
              { id: 'iphone-settings', label: '📱 iPhone 15 Pro' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-2.5 py-1.5 min-h-[34px] rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                activeSection === item.id
                  ? 'bg-sky-600 text-white'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setShowIphoneModal(true)}
            className={`px-2 py-1 min-h-[34px] rounded-lg border text-xs font-semibold flex items-center gap-1 shrink-0 ${
              isStandalonePWA
                ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10'
                : 'border-sky-500/40 text-sky-400 bg-sky-500/10 hover:bg-sky-500/20'
            }`}
            title="iPhone 15 Pro Standalone Mode"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isStandalonePWA ? 'Standalone Active ✓' : 'Full-Screen Setup'}
            </span>
            <span className="sm:hidden">{isStandalonePWA ? 'PWA ✓' : 'Full Screen'}</span>
          </button>

          <div className={`flex items-center gap-0.5 p-0.5 rounded-lg border ${subtlePanel}`}>
            {(
              [
                { id: 'bilingual', label: 'ਪੰਜਾਬੀ+EN' },
                { id: 'punjabi', label: 'ਪੰਜਾਬੀ' },
                { id: 'english', label: 'EN' },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                onClick={() => setLangMode(m.id)}
                className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  langMode === m.id ? 'bg-sky-600 text-white' : 'opacity-75'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleFullScreenMode}
            className={`p-1.5 min-h-[34px] min-w-[34px] flex items-center justify-center rounded-lg border ${subtlePanel}`}
            title="Full-Screen Mode"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 min-h-[34px] min-w-[34px] flex items-center justify-center rounded-lg border ${subtlePanel}`}
            aria-label="Toggle Light/Dark Mode"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* SCROLLABLE VERTICAL CONTENT AREA (Strictly locked horizontally so finger never shifts screen) */}
      <main className="flex-1 w-full max-w-[100vw] overflow-y-auto overflow-x-hidden overscroll-y-contain touch-pan-y">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-4 sm:py-6 space-y-6">
          {/* GLOBAL LOADING / ERROR / RETRY BANNERS */}
          {curriculumLoading && (
            <div className={`p-4 rounded-xl border text-xs font-mono flex items-center justify-between ${subtlePanel}`}>
              <span>Loading 9-Level Bilingual Curriculum & Interactive Labs from Cloud SQL...</span>
            </div>
          )}

          {curriculumError && (
            <div className="p-4 rounded-xl border border-rose-500/50 bg-rose-500/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="font-semibold text-rose-300">
                Error loading curriculum: {curriculumError}
              </div>
              <button
                onClick={fetchCurriculum}
                className="px-3 py-1.5 rounded-lg bg-rose-600 text-white font-bold"
              >
                Retry Loading Curriculum
              </button>
            </div>
          )}

          {actionErrorMsg && (
            <div className="p-3.5 rounded-xl border border-rose-500/50 bg-rose-500/15 flex items-center justify-between gap-3 text-xs">
              <div className="font-semibold text-rose-200">{actionErrorMsg}</div>
              <button
                onClick={() => setActionErrorMsg(null)}
                className="px-2.5 py-1 rounded bg-rose-600 text-white font-bold shrink-0"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* MILESTONE CELEBRATION BANNER */}
          {celebrationBadge && (
            <div className="p-3.5 rounded-xl border border-amber-500/50 bg-amber-500/15 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
                <div className="text-xs font-bold truncate">
                  🎉 Milestone Unlocked: {celebrationBadge}
                </div>
              </div>
              <button
                onClick={() => setCelebrationBadge(null)}
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold shrink-0"
              >
                OK
              </button>
            </div>
          )}

          {/* 1. DASHBOARD VIEW */}
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              {/* Hero Split Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
                <div
                  className={`lg:col-span-7 p-5 sm:p-7 rounded-2xl border flex flex-col justify-between ${surfaceCard}`}
                >
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-sky-500">
                      Bilingual CS & Math Academy · iPhone 15 Pro Full-Screen Ready
                    </div>
                    <h1 className="text-xl sm:text-3xl font-bold tracking-tight leading-snug">
                      Master Binary, Assembly, Hardware, Algorithms & CS Math — Explained Simply.
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      ਕੰਪਿਊਟਰ ਦੇ ਅੰਦਰ 0 ਅਤੇ 1 (Binary) ਕਿਵੇਂ ਚੱਲਦੇ ਹਨ, CPU ਅਤੇ RAM ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ, ਅਤੇ ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਦਾ ਗਣਿਤ (Logic, Discrete Math, Statistics) — ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀਆਂ ਉਦਾਹਰਣਾਂ ਨਾਲ ਸਿੱਖੋ।
                    </p>
                  </div>

                  <div className="pt-5 grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => setActiveSection('curriculum')}
                      className="w-full sm:w-auto px-5 py-3 min-h-[44px] rounded-xl bg-sky-600 text-white text-xs sm:text-sm font-bold hover:bg-sky-500 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Continue Learning</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveSection('laboratory')}
                      className={`w-full sm:w-auto px-4 py-3 min-h-[44px] rounded-xl border text-xs sm:text-sm font-semibold ${subtlePanel}`}
                    >
                      Interactive Computer Lab
                    </button>
                    <button
                      onClick={() => setActiveSection('iphone-settings')}
                      className={`w-full sm:w-auto px-4 py-3 min-h-[44px] rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 ${subtlePanel}`}
                    >
                      <Smartphone className="w-4 h-4 text-sky-400" />
                      <span>iPhone 15 Pro Display</span>
                    </button>
                  </div>
                </div>

                {/* Right 5 Cols: Gamified Streak, XP & Progress Card */}
                <div
                  className={`lg:col-span-5 p-5 sm:p-6 rounded-2xl border flex flex-col justify-between space-y-4 ${surfaceCard}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500">Learner Profile</div>
                      <h2 className="text-base sm:text-lg font-bold truncate">
                        {userProfile.displayName}
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 font-mono tabular-nums shrink-0">
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Streak</div>
                        <div className="text-sm sm:text-base font-bold text-amber-500 flex items-center gap-1">
                          <Flame className="w-4 h-4" />
                          <span>{userProfile.streakDays}d</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">XP</div>
                        <div className="text-sm sm:text-base font-bold text-sky-500">
                          {userProfile.xp}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className={`p-3.5 rounded-xl border space-y-2 ${subtlePanel}`}>
                    <div className="flex items-center justify-between text-xs font-semibold tabular-nums">
                      <span>Curriculum Mastery</span>
                      <span>
                        {completedLessonIds.length}/{lessons.length} ({overallProgressPercent}%)
                      </span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-700/30 overflow-hidden">
                      <div
                        className="h-full bg-sky-500 transition-all"
                        style={{ width: `${Math.max(8, overallProgressPercent)}%` }}
                      />
                    </div>
                  </div>

                  {/* Digital Badges Row */}
                  <div>
                    <div className="text-xs font-semibold text-slate-500 mb-2">
                      Earned Digital Badges ({unlockedCodes.length}/{achievementsCatalog.length || 5})
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {achievementsCatalog.slice(0, 4).map((ach) => {
                        const isUnlocked = unlockedCodes.includes(ach.code);
                        return (
                          <div
                            key={ach.code}
                            className={`p-2.5 rounded-lg border text-xs flex items-center gap-2 min-w-0 ${
                              isUnlocked
                                ? 'border-amber-500/40 bg-amber-500/10'
                                : 'opacity-45 border-slate-700/40'
                            }`}
                          >
                            <Award
                              className={`w-4 h-4 shrink-0 ${
                                isUnlocked ? 'text-amber-500' : 'text-slate-500'
                              }`}
                            />
                            <div className="truncate">
                              <div className="font-bold truncate">{ach.titleEn}</div>
                              <div className="text-[11px] opacity-75">{ach.xpReward} XP</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4-Column KPI Strip */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-mono tabular-nums">
                <div className={`p-4 rounded-xl border ${surfaceCard}`}>
                  <div className="text-xs text-slate-500 font-sans">Completed Lessons</div>
                  <div className="text-xl sm:text-2xl font-bold mt-1">
                    {completedLessonIds.length}
                  </div>
                  <div className="text-[11px] text-emerald-500 mt-1">9 Levels Active</div>
                </div>
                <div className={`p-4 rounded-xl border ${surfaceCard}`}>
                  <div className="text-xs text-slate-500 font-sans">Interactive Labs</div>
                  <div className="text-xl sm:text-2xl font-bold mt-1">7 Labs</div>
                  <div className="text-[11px] text-sky-500 mt-1">Touch Optimized</div>
                </div>
                <div className={`p-4 rounded-xl border ${surfaceCard}`}>
                  <div className="text-xs text-slate-500 font-sans">Study Tasks</div>
                  <div className="text-xl sm:text-2xl font-bold mt-1">
                    {tasks.filter((t) => !t.completed).length}
                  </div>
                  <div className="text-[11px] text-amber-500 mt-1">Push Alerts Ready</div>
                </div>
                <div className={`p-4 rounded-xl border ${surfaceCard}`}>
                  <div className="text-xs text-slate-500 font-sans">Screen Stability</div>
                  <div className="text-xl sm:text-2xl font-bold mt-1">Locked</div>
                  <div className="text-[11px] text-purple-400 mt-1">iPhone 15 Pro 393px</div>
                </div>
              </div>

              {/* Quick Curriculum Levels + Upcoming Study Tasks */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className={`lg:col-span-7 p-5 sm:p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold">
                      Structured Learning Path (Punjabi + English)
                    </h3>
                    <button
                      onClick={() => setActiveSection('curriculum')}
                      className="text-xs font-semibold text-sky-500 hover:underline shrink-0"
                    >
                      Full Syllabus →
                    </button>
                  </div>

                  <div className="space-y-3">
                    {lessons.map((lesson) => {
                      const isDone = completedLessonIds.includes(lesson.id);
                      return (
                        <div
                          key={lesson.id}
                          className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${subtlePanel}`}
                        >
                          <div className="min-w-0">
                            <div className="text-sm font-bold">{lesson.titleEn}</div>
                            <div className="text-xs font-semibold text-amber-500 mt-0.5">
                              {lesson.titlePa}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              Lab: {lesson.interactiveLabId} · {isDone ? 'Completed ✓' : 'Ready'}
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedLessonSlug(lesson.slug);
                              setActiveSection('curriculum');
                            }}
                            className="w-full sm:w-auto px-4 py-2.5 min-h-[42px] rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 shrink-0"
                          >
                            {isDone ? 'Review Lesson' : 'Start Lesson'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Upcoming Tasks & Quick Lab Launch */}
                <div className={`lg:col-span-5 p-5 sm:p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold">Upcoming Study Tasks</h3>
                    <button
                      onClick={() => setActiveSection('tasks')}
                      className="text-xs font-semibold text-sky-500 hover:underline"
                    >
                      Manage Tasks →
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {tasks.slice(0, 3).map((t) => (
                      <div
                        key={t.id}
                        onClick={() => handleToggleTask(t.id, !t.completed)}
                        className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer ${subtlePanel}`}
                      >
                        <input
                          type="checkbox"
                          checked={t.completed}
                          onChange={() => {}}
                          className="mt-1 w-4 h-4 rounded shrink-0"
                        />
                        <div className="min-w-0">
                          <div
                            className={`text-xs font-bold ${
                              t.completed ? 'line-through text-slate-500' : ''
                            }`}
                          >
                            {t.title}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono mt-1">
                            {t.category} · {t.dueDate.replace('T', ' ')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`p-4 rounded-xl border space-y-2.5 ${subtlePanel}`}>
                    <div className="text-xs font-bold">Quick Touch Labs</div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setSelectedLabId('binary-converter');
                          setActiveSection('laboratory');
                        }}
                        className="p-3 min-h-[48px] rounded-lg border border-sky-500/30 bg-sky-500/10 text-xs font-semibold text-left"
                      >
                        🔢 Binary Switchboard
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLabId('cpu-cycle');
                          setActiveSection('laboratory');
                        }}
                        className="p-3 min-h-[48px] rounded-lg border border-amber-500/30 bg-amber-500/10 text-xs font-semibold text-left"
                      >
                        ⚙️ CPU Cycle Lab
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLabId('logic-gates');
                          setActiveSection('laboratory');
                        }}
                        className="p-3 min-h-[48px] rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-left"
                      >
                        🔌 Logic Gates Lab
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLabId('algorithm-math-lab');
                          setActiveSection('laboratory');
                        }}
                        className="p-3 min-h-[48px] rounded-lg border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-left"
                      >
                        📐 CS Math & Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. CURRICULUM & INTERACTIVE LESSON READER */}
          {activeSection === 'curriculum' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className={`lg:col-span-4 p-4 sm:p-5 rounded-xl border space-y-4 ${surfaceCard}`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold">Courses & Levels (0–12)</h2>
                  {isAdmin && (
                    <button
                      onClick={() => {
                        setEditLessonId(undefined);
                        setEditTitleEn('');
                        setEditTitlePa('');
                        setActiveSection('admin');
                      }}
                      className="text-xs text-sky-500 font-semibold flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Lesson</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2.5">
                  {courses.map((course) => {
                    const courseLessons = lessons.filter((l) => l.courseId === course.id);
                    const isEnrolled = enrolledCourseIds.includes(course.id);
                    return (
                      <div key={course.id} className={`p-3 rounded-xl border space-y-2 ${subtlePanel}`}>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-xs font-bold text-sky-500">{course.titleEn}</div>
                            <div className="text-xs text-amber-500 font-medium">{course.titlePa}</div>
                          </div>
                          <button
                            onClick={() => handleEnrollCourse(course.id)}
                            className={`px-2 py-1 rounded text-[11px] font-bold shrink-0 ${
                              isEnrolled
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                : 'bg-sky-600/20 text-sky-400 border border-sky-500/30 hover:bg-sky-600 hover:text-white'
                            }`}
                          >
                            {isEnrolled ? 'Enrolled ✓' : 'Enroll'}
                          </button>
                        </div>
                        <div className="space-y-1.5 pt-1">
                          {courseLessons.map((l) => {
                            const active = currentLesson?.id === l.id;
                            const done = completedLessonIds.includes(l.id);
                            return (
                              <button
                                key={l.id}
                                onClick={() => setSelectedLessonSlug(l.slug)}
                                className={`w-full text-left px-3 py-2.5 min-h-[42px] rounded-lg text-xs font-medium flex items-center justify-between gap-2 transition-colors ${
                                  active
                                    ? 'bg-sky-600 text-white font-semibold'
                                    : 'hover:bg-slate-500/10'
                                }`}
                              >
                                <span className="truncate">{l.titleEn}</span>
                                {done && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Master Syllabus Map */}
                <div className="pt-3 border-t border-slate-500/20 space-y-2">
                  <h3 className="text-xs font-bold text-slate-500">
                    Complete 9-Level Academy Syllabus Map
                  </h3>
                  <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {syllabusBlueprint.map((lvl) => (
                      <details key={lvl.level} className={`p-3 rounded-lg border text-xs ${subtlePanel}`}>
                        <summary className="font-bold cursor-pointer">
                          {lvl.titleEn} · {lvl.titlePa}
                        </summary>
                        <ul className="mt-2 space-y-1 text-slate-400 pl-2">
                          {lvl.topics.map((t: string) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Lesson Reader */}
              <div className={`lg:col-span-8 p-5 sm:p-7 rounded-xl border space-y-5 min-w-0 ${surfaceCard}`}>
                {currentLesson ? (
                  <>
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-500/20 pb-4">
                      <div className="min-w-0">
                        <div className="text-xs text-slate-500 mb-1">
                          Bilingual Lesson · Prerequisites:{' '}
                          {(currentLesson.prerequisitesJson || []).join(', ')}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold">{currentLesson.titleEn}</h2>
                        <p className="text-base sm:text-lg font-semibold text-amber-500 mt-1">
                          {currentLesson.titlePa}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleBookmark(currentLesson.id)}
                          className={`px-3 py-2 min-h-[40px] rounded-lg border text-xs font-semibold flex items-center gap-1.5 ${
                            bookmarkedLessonIds.includes(currentLesson.id)
                              ? 'bg-amber-500 text-slate-950 border-amber-400'
                              : subtlePanel
                          }`}
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                          <span>
                            {bookmarkedLessonIds.includes(currentLesson.id) ? 'Saved' : 'Bookmark'}
                          </span>
                        </button>

                        {isAdmin && (
                          <button
                            onClick={() => populateEditorWithLesson(currentLesson)}
                            className={`px-3 py-2 min-h-[40px] rounded-lg border text-xs font-semibold flex items-center gap-1.5 ${subtlePanel}`}
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Child-Friendly Practical Analogy */}
                    <div className="p-4 sm:p-5 rounded-xl border border-amber-500/40 bg-amber-500/10 space-y-3">
                      <div className="text-xs sm:text-sm font-bold text-amber-400">
                        🧒 ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀ ਉਦਾਹਰਣ (Explain Like I’m a Child — Practical Illustration)
                      </div>
                      {langMode !== 'english' && (
                        <div className="text-sm sm:text-base leading-relaxed font-medium select-text">
                          <MathMessageRenderer
                            content={currentLesson.childAnalogyPa}
                            mode="child-friendly"
                            darkMode={darkMode}
                          />
                        </div>
                      )}
                      {langMode !== 'punjabi' && (
                        <div className="text-xs sm:text-sm leading-relaxed opacity-90 select-text">
                          <MathMessageRenderer
                            content={currentLesson.childAnalogyEn}
                            mode="child-friendly"
                            darkMode={darkMode}
                          />
                        </div>
                      )}
                    </div>

                    {/* Technical Explanation */}
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold">
                        Technical Architecture & Principles · ਤਕਨੀਕੀ ਵਿਆਖਿਆ
                      </h3>
                      {langMode !== 'english' && (
                        <div
                          className={`p-4 sm:p-5 rounded-xl border leading-relaxed text-sm sm:text-base select-text ${subtlePanel}`}
                        >
                          <MathMessageRenderer
                            content={currentLesson.technicalExplanationPa}
                            mode="deep-technical"
                            darkMode={darkMode}
                          />
                        </div>
                      )}
                      {langMode !== 'punjabi' && (
                        <div
                          className={`p-4 sm:p-5 rounded-xl border leading-relaxed text-xs sm:text-sm select-text ${subtlePanel}`}
                        >
                          <MathMessageRenderer
                            content={currentLesson.technicalExplanationEn}
                            mode="deep-technical"
                            darkMode={darkMode}
                          />
                        </div>
                      )}
                    </div>

                    {/* KaTeX Rendered Lesson Formulas */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-sky-400">
                          Key Mathematical & Engineering Formulas (KaTeX LaTeX) · ਗਣਿਤਿਕ ਫਾਰਮੂਲੇ
                        </h4>
                        <button
                          type="button"
                          onClick={() => {
                            setTutorMode('math-step');
                            setActiveSection('tutor');
                          }}
                          className="text-xs font-mono text-sky-400 hover:underline"
                        >
                          Open AI Tutor (math-step mode) →
                        </button>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {getLessonFormulas(currentLesson.slug, currentLesson.courseId).map(
                          (f, fIdx) => (
                            <div
                              key={fIdx}
                              className={`p-4 rounded-xl border space-y-2 ${subtlePanel}`}
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <div>
                                  <div className="text-xs font-bold text-sky-400">{f.labelEn}</div>
                                  <div className="text-xs text-amber-400 font-medium">
                                    {f.labelPa}
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setTutorMode('math-step');
                                    setActiveSection('tutor');
                                    handleSendTutorPrompt(
                                      `In math-step mode, explain this formula step-by-step with a worked example in Punjabi and English: $$${f.latex}$$`
                                    );
                                  }}
                                  className="px-2.5 py-1 rounded-lg bg-sky-600/20 border border-sky-500/40 text-sky-300 hover:bg-sky-600 hover:text-white text-[11px] font-semibold transition-colors"
                                >
                                  Solve Step-by-Step in AI Tutor
                                </button>
                              </div>
                              <MathMessageRenderer
                                content={`$$${f.latex}$$`}
                                mode="math-step"
                                darkMode={darkMode}
                              />
                              <p className="text-[11px] text-slate-400">{f.noteEn}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Practical Real-World Example */}
                    <div className={`p-4 sm:p-5 rounded-xl border space-y-2 ${subtlePanel}`}>
                      <div className="text-xs font-bold text-emerald-500">
                        Practical Real-World Example · ਅਸਲ ਜ਼ਿੰਦਗੀ ਦੀ ਉਦਾਹਰਣ
                      </div>
                      {langMode !== 'english' && (
                        <div className="text-sm leading-relaxed">
                          <MathMessageRenderer
                            content={currentLesson.practicalExamplePa}
                            mode="math-step"
                            darkMode={darkMode}
                          />
                        </div>
                      )}
                      {langMode !== 'punjabi' && (
                        <div className="text-xs leading-relaxed text-slate-400">
                          <MathMessageRenderer
                            content={currentLesson.practicalExampleEn}
                            mode="math-step"
                            darkMode={darkMode}
                          />
                        </div>
                      )}
                    </div>

                    {/* Code Demo */}
                    {currentLesson.codeDemo && (
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-sky-500">
                          Step-by-Step Code & Assembly Demonstration
                        </div>
                        <pre className="p-4 rounded-xl bg-slate-950 text-slate-100 border border-slate-800 text-xs font-mono overflow-x-auto leading-relaxed">
                          <code>{currentLesson.codeDemo}</code>
                        </pre>
                      </div>
                    )}

                    {/* Terminology */}
                    {(currentLesson.terminologyJson || []).length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold">
                          Important Terminology · ਮੁੱਖ ਸ਼ਬਦਾਵਲੀ
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {currentLesson.terminologyJson.map((t: any, i: number) => (
                            <div key={i} className={`p-3.5 rounded-xl border space-y-1 ${subtlePanel}`}>
                              <div className="text-xs font-bold text-sky-500">{t.term}</div>
                              <div className="text-xs font-semibold text-amber-500">{t.punjabi}</div>
                              <p className="text-xs leading-relaxed">{t.meaningPa}</p>
                              <p className="text-[11px] text-slate-400">{t.meaningEn}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Interactive Lab & Complete Actions */}
                    <div
                      className={`p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${subtlePanel}`}
                    >
                      <div>
                        <div className="text-sm font-bold">Hands-On Practice & Assessment</div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {currentLesson.exercisePromptPa || currentLesson.exercisePromptEn}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedLabId(resolveValidLabId(currentLesson.interactiveLabId));
                            setActiveSection('laboratory');
                          }}
                          className="px-4 py-2.5 min-h-[44px] rounded-lg bg-sky-600 text-white text-xs font-bold"
                        >
                          Open Interactive Lab →
                        </button>

                        <button
                          onClick={() => handleCompleteLesson(currentLesson.id)}
                          className={`px-4 py-2.5 min-h-[44px] rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 ${
                            completedLessonIds.includes(currentLesson.id)
                              ? 'bg-emerald-600 text-white'
                              : 'bg-amber-500 text-slate-950'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>
                            {completedLessonIds.includes(currentLesson.id)
                              ? 'Completed (+50 XP)'
                              : 'Complete Lesson (+50 XP)'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Personal Notes */}
                    <div className={`p-4 rounded-xl border space-y-2 ${subtlePanel}`}>
                      <div className="text-xs font-bold">Personal Study Notes</div>
                      <textarea
                        rows={2}
                        placeholder="Write your Punjabi/English study notes here..."
                        value={noteDraft}
                        onChange={(e) => setNoteDraft(e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm ${surfaceCard}`}
                      />
                      <button
                        onClick={() => handleSaveNote(currentLesson.id)}
                        className="px-4 py-2 min-h-[40px] rounded-lg bg-sky-600 text-white text-xs font-semibold"
                      >
                        Save Note
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-sm text-slate-500">Loading lesson...</div>
                )}
              </div>
            </div>
          )}

          {/* 3. INTERACTIVE COMPUTER LABORATORY VIEW */}
          {activeSection === 'laboratory' && (
            <ComputerLaboratory
              initialLab={selectedLabId}
              langMode={langMode}
              darkMode={darkMode}
            />
          )}

          {/* 4. STUDY TASKS & PUSH NOTIFICATION PLANNER */}
          {activeSection === 'tasks' && (
            <TaskManagerView
              tasks={tasks}
              isAuthenticated={Boolean(firebaseUser)}
              darkMode={darkMode}
              onAddTask={handleAddTask}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              onOpenLessonSlug={(slug) => {
                setSelectedLessonSlug(slug);
                setActiveSection('curriculum');
              }}
            />
          )}

          {/* 5. QUIZZES & EXAMINATIONS SYSTEM */}
          {activeSection === 'quizzes' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className={`lg:col-span-4 p-5 rounded-xl border space-y-4 ${surfaceCard}`}>
                <h2 className="text-base font-bold">Quizzes & Examinations · ਇਮਤਿਹਾਨ</h2>
                <div className="space-y-2">
                  {quizzes.map((qz) => (
                    <button
                      key={qz.id}
                      onClick={() => {
                        setSelectedQuizId(qz.id);
                        setQuizAnswers({});
                        setLastQuizResult(null);
                        setQuizSubmitError(null);
                        setTimeLeftSeconds(qz.timeLimitSeconds || 300);
                        if (quizMode === 'timed') {
                          startServerQuizSession(qz.id, 'timed');
                        } else {
                          setActiveQuizSessionId(null);
                        }
                      }}
                      className={`w-full text-left p-3.5 min-h-[48px] rounded-xl border text-xs transition-colors ${
                        selectedQuizId === qz.id
                          ? 'bg-sky-600 text-white border-sky-500 font-bold'
                          : subtlePanel
                      }`}
                    >
                      <div>{qz.titleEn}</div>
                      <div className="opacity-80 mt-0.5">{qz.titlePa}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className={`lg:col-span-8 p-5 sm:p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
                {(() => {
                  const activeQuiz = quizzes.find((q) => q.id === selectedQuizId) || quizzes[0];
                  if (!activeQuiz) return <div>Select a quiz to begin.</div>;
                  const activeQuestions = questions.filter((q) => q.quizId === activeQuiz.id);
                  const isTimedExpired =
                    quizMode === 'timed' && timeLeftSeconds <= 0 && !lastQuizResult;

                  return (
                    <>
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-500/20 pb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold">{activeQuiz.titleEn}</h3>
                          <p className="text-sm text-amber-500 font-semibold">{activeQuiz.titlePa}</p>
                        </div>
                        <button
                          onClick={() => {
                            const nextMode = quizMode === 'practice' ? 'timed' : 'practice';
                            setQuizMode(nextMode);
                            setLastQuizResult(null);
                            setQuizSubmitError(null);
                            startServerQuizSession(activeQuiz.id, nextMode);
                          }}
                          className={`px-3 py-2 min-h-[40px] rounded-lg border text-xs font-semibold flex items-center gap-1.5 ${subtlePanel}`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>
                            {quizMode === 'timed'
                              ? `Timed (${Math.floor(timeLeftSeconds / 60)}:${String(
                                  timeLeftSeconds % 60
                                ).padStart(2, '0')})`
                              : 'Practice Mode (Switch to Timed)'}
                          </span>
                        </button>
                      </div>

                      <div className="text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
                        <span>
                          Passing Threshold: <strong>{activeQuiz.passingScorePercent || 70}%</strong> · Time Limit: {Math.round((activeQuiz.timeLimitSeconds || 300) / 60)} min
                        </span>
                        <span>
                          {firebaseUser
                            ? 'Server-Authoritative Grading Active ✓'
                            : 'Sign in with Google to submit & save official quiz attempts'}
                        </span>
                      </div>

                      {isTimedExpired && (
                        <div className="p-3.5 rounded-xl border border-amber-500/50 bg-amber-500/15 text-xs font-semibold text-amber-200 flex items-center justify-between gap-2">
                          <span>
                            Timed session has expired (0:00). Answer inputs are locked; start a fresh timed session or switch to Practice Mode.
                          </span>
                          <button
                            onClick={() => startServerQuizSession(activeQuiz.id, 'timed')}
                            className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold shrink-0"
                          >
                            Restart Timed Session
                          </button>
                        </div>
                      )}

                      {quizSubmitError && (
                        <div className="p-3.5 rounded-xl border border-rose-500/50 bg-rose-500/15 text-xs font-semibold text-rose-200">
                          {quizSubmitError}
                        </div>
                      )}

                      <div className="space-y-4">
                        {activeQuestions.map((q, idx) => {
                          const chosen = quizAnswers[String(q.id)] || '';
                          const gradedItem = lastQuizResult?.answersJson?.find(
                            (a: any) => a.questionId === q.id
                          );
                          return (
                            <div key={q.id} className={`p-4 sm:p-5 rounded-xl border space-y-3 ${subtlePanel}`}>
                              <div className="text-xs font-mono text-sky-500">
                                Q{idx + 1} · {q.topicTag}
                              </div>
                              <div className="text-sm font-bold">{q.promptEn}</div>
                              <div className="text-sm text-amber-500 font-medium">{q.promptPa}</div>

                              {q.questionType === 'fill_blank' ? (
                                <input
                                  type="text"
                                  placeholder="Type answer..."
                                  disabled={isTimedExpired || quizSubmitting}
                                  value={chosen}
                                  onChange={(e) =>
                                    setQuizAnswers((prev) => ({
                                      ...prev,
                                      [String(q.id)]: e.target.value,
                                    }))
                                  }
                                  className={`w-full px-3 py-2.5 rounded-lg border text-sm font-mono disabled:opacity-50 ${surfaceCard}`}
                                />
                              ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                  {(q.optionsJson || []).map((opt: string) => (
                                    <button
                                      key={opt}
                                      disabled={isTimedExpired || quizSubmitting}
                                      onClick={() =>
                                        setQuizAnswers((prev) => ({
                                          ...prev,
                                          [String(q.id)]: opt,
                                        }))
                                      }
                                      className={`p-3 min-h-[44px] rounded-lg border text-left text-xs font-medium transition-colors disabled:opacity-50 ${
                                        chosen === opt
                                          ? 'bg-sky-600 text-white border-sky-400 font-bold'
                                          : surfaceCard
                                      }`}
                                    >
                                      {opt}
                                    </button>
                                  ))}
                                </div>
                              )}

                              {gradedItem && (
                                <div
                                  className={`p-3 rounded-lg border text-xs mt-2 ${
                                    gradedItem.isCorrect
                                      ? 'border-emerald-500/40 bg-emerald-500/10'
                                      : 'border-rose-500/40 bg-rose-500/10'
                                  }`}
                                >
                                  <div className="font-bold">
                                    {gradedItem.isCorrect
                                      ? '✅ Correct! (ਸਹੀ ਜਵਾਬ)'
                                      : `❌ Correct Answer: ${gradedItem.correctAnswer}`}
                                  </div>
                                  {gradedItem.explanationPa && (
                                    <p className="mt-1">{gradedItem.explanationPa}</p>
                                  )}
                                  {gradedItem.explanationEn && (
                                    <p className="text-slate-400 mt-0.5">{gradedItem.explanationEn}</p>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <button
                          onClick={() => handleSubmitQuiz(activeQuiz.id)}
                          disabled={quizSubmitting || isTimedExpired}
                          className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-sky-600 text-white text-sm font-bold disabled:opacity-50"
                        >
                          {quizSubmitting
                            ? 'Grading on Server...'
                            : isTimedExpired
                              ? 'Timed Session Expired'
                              : 'Submit Answers for Server Grading'}
                        </button>

                        {lastQuizResult && (
                          <div className="text-sm font-bold font-mono">
                            Saved Score: {lastQuizResult.scorePercent}% ({lastQuizResult.correctCount}/
                            {lastQuizResult.totalQuestions}) ·{' '}
                            {lastQuizResult.passed ? 'PASSED ✓' : 'BELOW PASSING THRESHOLD'}
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          {/* 6. BILINGUAL AI TUTOR */}
          {activeSection === 'tutor' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className={`lg:col-span-4 p-5 rounded-xl border space-y-4 ${surfaceCard}`}>
                <div className="flex items-center gap-2 text-sky-500 text-xs font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>High-Reasoning Bilingual Tutor · KaTeX Math Ready</span>
                </div>
                <h2 className="text-lg font-bold">
                  Punjabi + English CS & Math Tutor · ਏ.ਆਈ ਅਧਿਆਪਕ
                </h2>

                <div className="space-y-2">
                  <label className="block text-xs font-bold">Teaching Mode:</label>
                  {(
                    [
                      { id: 'child-friendly', label: '🧒 Explain Like I’m a Child (ਬੱਚਿਆਂ ਵਾਂਗ)' },
                      { id: 'deep-technical', label: '⚙️ Deep Hardware & Assembly' },
                      { id: 'math-step', label: '🧮 Step-by-Step Math & Binary (LaTeX)' },
                      { id: 'quiz-me', label: '🎯 Test My Understanding' },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setTutorMode(m.id)}
                      className={`w-full text-left px-3.5 py-2.5 min-h-[42px] rounded-xl border text-xs font-semibold transition-colors ${
                        tutorMode === m.id ? 'bg-sky-600 text-white border-sky-500' : subtlePanel
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                {tutorMode === 'math-step' && (
                  <div className="space-y-2 pt-1 border-t border-slate-500/20">
                    <div className="text-xs font-bold text-sky-400">
                      KaTeX Step-by-Step Formula Library (Tap to Solve):
                    </div>
                    <div className="space-y-2 max-h-[240px] overflow-y-auto pr-1">
                      {MATH_STEP_REFERENCE_FORMULAS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setTutorMode('math-step');
                            handleSendTutorPrompt(item.prompt);
                          }}
                          className={`w-full text-left p-2.5 rounded-lg border text-xs hover:border-sky-500 transition-colors space-y-1.5 ${subtlePanel}`}
                        >
                          <div className="font-bold text-sky-400">{item.titleEn}</div>
                          <div className="text-[11px] text-amber-400">{item.titlePa}</div>
                          <div
                            className="overflow-x-auto py-1 text-xs"
                            dangerouslySetInnerHTML={{
                              __html: renderLatexToHtml(item.latex, false),
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold">Tap a Question:</div>
                  {[
                    'ਬਾਈਨਰੀ ਭਾਸ਼ਾ (0 ਅਤੇ 1) ਅਤੇ Assembly Language ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ? ਬੱਚਿਆਂ ਵਾਂਗ ਸਮਝਾਓ।',
                    'Explain Propositional Logic and De Morgan’s Laws in Punjabi with LaTeX truth-table formulas.',
                    'Show step-by-step with LaTeX how to convert Decimal 75 into 8-bit Binary and Hexadecimal.',
                  ].map((promptText) => (
                    <button
                      key={promptText}
                      onClick={() => handleSendTutorPrompt(promptText)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs hover:border-sky-500 transition-colors ${subtlePanel}`}
                    >
                      “{promptText}”
                    </button>
                  ))}
                </div>
              </div>

              <div
                className={`lg:col-span-8 p-5 rounded-xl border flex flex-col justify-between min-h-[440px] ${surfaceCard}`}
              >
                <div className="space-y-3 overflow-y-auto max-h-[420px] pr-1">
                  {tutorMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed select-text ${
                        msg.role === 'user'
                          ? 'bg-sky-600/15 border-sky-500/40 ml-4'
                          : `${subtlePanel} mr-2`
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-[10px] font-mono opacity-70 mb-1.5">
                        <span>
                          {msg.role === 'user' ? 'You' : 'Academy Professor (Punjabi + English)'}
                        </span>
                        {msg.mode && (
                          <span className="text-sky-400">
                            Mode: {msg.mode === 'math-step' ? 'math-step · KaTeX' : msg.mode}
                          </span>
                        )}
                      </div>
                      <MathMessageRenderer
                        content={msg.content}
                        mode={msg.mode || tutorMode}
                        darkMode={darkMode}
                      />
                    </div>
                  ))}
                  {tutorLoading && (
                    <div className={`p-3.5 rounded-xl border text-xs font-mono ${subtlePanel}`}>
                      Reasoning deeply in Punjabi & English (rendering LaTeX formulas)...
                    </div>
                  )}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendTutorPrompt();
                  }}
                  className="pt-3 mt-3 border-t border-slate-500/20 space-y-2"
                >
                  {tutorMode === 'math-step' && (
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                      <span className="text-slate-400 mr-1">Insert LaTeX:</span>
                      {[
                        { label: '∑ Sum', snippet: '$\\sum_{i=0}^{n-1} b_i 2^i$' },
                        { label: '2ⁿ Power', snippet: '$2^n$' },
                        { label: '¬(A·B)', snippet: '$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$' },
                        { label: 'Big-O', snippet: '$\\mathcal{O}(n \\log_2 n)$' },
                        { label: 'RC τ', snippet: '$V_C(t) = V_0(1 - e^{-t/RC})$' },
                      ].map((chip) => (
                        <button
                          key={chip.label}
                          type="button"
                          onClick={() =>
                            setTutorInput((prev) => `${prev}${prev ? ' ' : ''}${chip.snippet}`)
                          }
                          className={`px-2 py-0.5 rounded border hover:border-sky-500 transition-colors ${subtlePanel}`}
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder={
                        tutorMode === 'math-step'
                          ? 'Ask a math/binary problem or enter LaTeX ($...$)...'
                          : 'Ask in Punjabi or English...'
                      }
                      value={tutorInput}
                      onChange={(e) => setTutorInput(e.target.value)}
                      className={`flex-1 px-3.5 py-2.5 rounded-xl border text-sm ${subtlePanel}`}
                    />
                    <button
                      type="submit"
                      disabled={tutorLoading}
                      className="px-4 py-2.5 min-h-[44px] rounded-xl bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 shrink-0"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Ask</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* 7. BILINGUAL GLOSSARY */}
          {activeSection === 'glossary' && (
            <div className={`p-5 sm:p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">
                    Bilingual CS & Math Glossary · ਤਕਨੀਕੀ ਸ਼ਬਦਾਵਲੀ
                  </h2>
                </div>
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search term..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className={`w-full pl-9 pr-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredGlossary.map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border space-y-2 ${subtlePanel}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-sm font-bold text-sky-500">{item.term}</div>
                        <div className="text-xs font-semibold text-amber-500">{item.punjabi}</div>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {item.meta?.symbol} · {item.meta?.siUnit}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed">{item.meaningPa}</p>
                    <p className="text-xs text-slate-400">{item.meaningEn}</p>
                    {item.meta?.formula && (
                      <div className="text-[11px] font-mono text-emerald-400 pt-1">
                        Formula: {item.meta.formula}
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-500/15 text-[11px] text-slate-400">
                      <span className="truncate">{item.lessonTitle}</span>
                      {item.lessonSlug && (
                        <button
                          onClick={() => {
                            setSelectedLessonSlug(item.lessonSlug);
                            setActiveSection('curriculum');
                          }}
                          className="text-sky-400 font-semibold hover:underline shrink-0"
                        >
                          Lesson →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. BOOKMARKS & PERSONAL NOTES */}
          {activeSection === 'bookmarks' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-5 rounded-xl border space-y-4 ${surfaceCard}`}>
                <h2 className="text-lg font-bold">Saved Lesson Bookmarks</h2>
                {bookmarkedLessonIds.length === 0 ? (
                  <p className="text-xs text-slate-500">
                    No lessons bookmarked yet. Tap “Bookmark” inside any lesson.
                  </p>
                ) : (
                  lessons
                    .filter((l) => bookmarkedLessonIds.includes(l.id))
                    .map((l) => (
                      <div
                        key={l.id}
                        className={`p-4 rounded-xl border flex items-center justify-between gap-2 ${subtlePanel}`}
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-bold truncate">{l.titleEn}</div>
                          <div className="text-xs text-amber-500 truncate">{l.titlePa}</div>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedLessonSlug(l.slug);
                            setActiveSection('curriculum');
                          }}
                          className="px-3 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold shrink-0"
                        >
                          Open
                        </button>
                      </div>
                    ))
                )}
              </div>

              <div className={`p-5 rounded-xl border space-y-4 ${surfaceCard}`}>
                <h2 className="text-lg font-bold">Personal Study Notes</h2>
                {Object.keys(lessonNotes).length === 0 ? (
                  <p className="text-xs text-slate-500">No personal notes saved yet.</p>
                ) : (
                  Object.entries(lessonNotes).map(([lessonIdStr, content]) => {
                    const l = lessons.find((item) => item.id === Number(lessonIdStr));
                    return (
                      <div key={lessonIdStr} className={`p-4 rounded-xl border space-y-1 ${subtlePanel}`}>
                        <div className="text-xs font-bold text-sky-500">
                          {l?.titleEn || `Lesson #${lessonIdStr}`}
                        </div>
                        <p className="text-xs whitespace-pre-line">{content}</p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* 9. ACHIEVEMENTS & GAMIFIED MILESTONES */}
          {activeSection === 'achievements' && (
            <div className={`p-5 sm:p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
              <h2 className="text-lg sm:text-xl font-bold">
                Digital Badges, Streaks & Rewards · ਪ੍ਰਾਪਤੀਆਂ ਅਤੇ ਇਨਾਮ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievementsCatalog.map((ach) => {
                  const unlocked = unlockedCodes.includes(ach.code);
                  return (
                    <div
                      key={ach.code}
                      className={`p-5 rounded-xl border space-y-2 ${
                        unlocked
                          ? 'border-amber-500/50 bg-amber-500/10'
                          : `${subtlePanel} opacity-60`
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Award
                          className={`w-6 h-6 ${unlocked ? 'text-amber-500' : 'text-slate-500'}`}
                        />
                        <span className="text-xs font-mono font-bold text-sky-500">
                          +{ach.xpReward} XP
                        </span>
                      </div>
                      <div className="text-base font-bold">{ach.titleEn}</div>
                      <div className="text-xs font-semibold text-amber-500">{ach.titlePa}</div>
                      <p className="text-xs text-slate-400">{ach.descriptionEn}</p>
                      <p className="text-xs">{ach.descriptionPa}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 10. SYLLABUS COVERAGE & PROTECTED 28-SECTION LESSON TEMPLATE EDITOR */}
          {activeSection === 'admin' && (
            <div className={`p-5 sm:p-6 rounded-xl border space-y-6 ${surfaceCard}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">
                    28-Section Lesson Template Editor & Syllabus Studio · ਪਾਠਕ੍ਰਮ ਸੰਪਾਦਕ
                  </h2>
                  <p className="text-xs text-slate-400">
                    {isAdmin
                      ? 'Administrator Access Verified — Author or update standardized 28-section bilingual lessons in Cloud SQL'
                      : 'Read-Only 28-Section Structure Inspector — Verified Administrator role required to publish modifications'}
                  </p>
                </div>
                {syllabusCoverage && (
                  <div className="text-xs font-mono px-3 py-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                    Coverage: {syllabusCoverage.completeTopics}/{syllabusCoverage.totalBlueprintTopics} Topics ({syllabusCoverage.coveragePercent}%)
                  </div>
                )}
              </div>

              {adminStatusMsg && (
                <div className="p-3.5 rounded-xl border border-sky-500/40 bg-sky-500/10 text-xs font-semibold text-sky-300">
                  {adminStatusMsg}
                </div>
              )}

              {!isAdmin && (
                <div className="p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 text-xs space-y-1">
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Lock className="w-4 h-4" />
                    <span>Administrator Role Required for Publishing Syllabus Changes</span>
                  </div>
                  <p className="text-slate-300">
                    Syllabus publishing is restricted to verified administrator accounts on both the frontend and backend (`requireAdmin`). You can inspect the 28-section structure and live KaTeX preview of any lesson below.
                  </p>
                </div>
              )}

              <LessonTemplateEditor
                courses={courses}
                lessons={lessons}
                initialLesson={
                  editLessonId
                    ? lessons.find((l) => l.id === editLessonId) || currentLesson
                    : currentLesson
                }
                isAdmin={isAdmin}
                darkMode={darkMode}
                subtlePanel={subtlePanel}
                surfaceCard={surfaceCard}
                onSaveLesson={handleSave28SectionLesson}
              />

              {syllabusCoverage?.levels && (
                <div className="pt-4 border-t border-slate-500/20 space-y-3">
                  <h3 className="text-sm font-bold">
                    Live Syllabus Blueprint Coverage Audit ({syllabusCoverage.completeTopics}/
                    {syllabusCoverage.totalBlueprintTopics} Topics)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {syllabusCoverage.levels.map((lvl: any) => (
                      <div key={lvl.level} className={`p-4 rounded-xl border space-y-1.5 ${subtlePanel}`}>
                        <div className="text-xs font-bold text-sky-400">{lvl.titleEn}</div>
                        <div className="text-xs text-amber-400 font-medium">{lvl.titlePa}</div>
                        <div className="text-xs font-mono text-emerald-400">
                          Status: {lvl.status.toUpperCase()} ({lvl.coveredTopicsCount}/{lvl.totalTopics} topics · {lvl.authoredLessonCount} lessons)
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 11. IPHONE 15 PRO DISPLAY & FULL-SCREEN SETTINGS */}
          {activeSection === 'iphone-settings' && (
            <div className={`p-5 sm:p-6 rounded-2xl border space-y-6 ${surfaceCard}`}>
              <div className="flex items-start justify-between gap-4 border-b border-slate-500/20 pb-4">
                <div>
                  <div className="text-xs font-mono text-sky-400">
                    DEVICE PROFILE: iPHONE 15 PRO (393 × 852 pt · Super Retina XDR 120Hz)
                  </div>
                  <h2 className="text-xl font-bold mt-1">
                    iPhone 15 Pro Full-Screen & Standalone App Setup
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Open CS Academy directly without Safari navigation bars or AI Studio playgrounds wrapper.
                  </p>
                </div>
                <Smartphone className="w-8 h-8 text-sky-500 shrink-0" />
              </div>

              {/* LIVE ENVIRONMENT STATUS INDICATOR */}
              <div
                className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isStandalonePWA
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    : isInIframe
                    ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
                    : 'border-sky-500/40 bg-sky-500/10 text-sky-200'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {isStandalonePWA ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider">
                      {isStandalonePWA
                        ? 'Standalone Full-Screen Mode Active (No Browser Borders)'
                        : isInIframe
                        ? 'Notice: Viewing inside AI Studio Preview Frame'
                        : 'Viewing in Standard Safari Browser'}
                    </div>
                    <div className="text-xs mt-0.5 opacity-90">
                      {isStandalonePWA
                        ? 'App is running edge-to-edge around the Dynamic Island with zero Safari borders!'
                        : isInIframe
                        ? 'Do not tap Add to Home Screen inside this preview. Click "Open Direct App in Safari" below first!'
                        : 'Tap the Safari Share button below and select "Add to Home Screen" to install.'}
                    </div>
                  </div>
                </div>

                {!isStandalonePWA && (
                  <a
                    href={directAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2 min-h-[40px] rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shrink-0 flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Direct App in Safari ↗</span>
                  </a>
                )}
              </div>

              {/* CRITICAL EXPLANATION: WHY AI STUDIO PLAYGROUND OPENED */}
              <div className="p-5 rounded-xl border border-amber-500/40 bg-amber-500/10 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>
                    ਸਮੱਸਿਆ ਦਾ ਹੱਲ: ਕਿਉਂ AI Studio Playground ਖੁੱਲ੍ਹਿਆ ਸੀ? (Why AI Studio Opened Instead of App)
                  </span>
                </div>
                <div className="text-xs text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    <strong>English:</strong> When viewing an app inside Google AI Studio Build, the URL in Safari is <code className="text-amber-300 font-mono">aistudio.google.com</code>. If you tap <em>"Add to Home Screen"</em> on that page, iOS saves the AI Studio editor website.
                  </p>
                  <p>
                    <strong>ਪੰਜਾਬੀ:</strong> ਜਦੋਂ ਤੁਸੀਂ AI Studio Build ਵਿੱਚੋਂ 'Add to Home Screen' ਕਰਦੇ ਹੋ, ਤਾਂ iPhone ਸਾਰੀ AI Studio ਵੈੱਬਸਾਈਟ ਨੂੰ ਸੇਵ ਕਰਦਾ ਹੈ। ਅਸਲ CS Academy ਐਪ ਨੂੰ <strong>100% Full Screen ਬਿਨਾਂ ਕਿਸੇ ਬ੍ਰਾਊਜ਼ਰ ਬਾਰ ਦੇ</strong> ਚਲਾਉਣ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਬਟਨ ਰਾਹੀਂ ਐਪ ਦਾ <strong>Direct Link</strong> ਸਫਾਰੀ ਵਿੱਚ ਖੋਲ੍ਹੋ।
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <a
                    href={directAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 min-h-[44px] rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-2 shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Direct App in Safari ↗</span>
                  </a>
                  <button
                    onClick={handleCopyDirectUrl}
                    className={`px-4 py-2.5 min-h-[44px] rounded-xl border text-xs font-bold flex items-center gap-2 ${
                      copiedUrl
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : 'border-slate-600 bg-slate-800 text-slate-200'
                    }`}
                  >
                    {copiedUrl ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Copied Direct URL ✓</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Direct URL</span>
                      </>
                    )}
                  </button>
                  <span className="text-[11px] text-sky-400 font-mono select-all truncate max-w-xs bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700">
                    {directAppUrl}
                  </span>
                </div>
              </div>

              {/* STEP-BY-STEP INSTALLATION GUIDE */}
              <div className="p-5 rounded-xl border border-sky-500/30 bg-sky-500/10 space-y-3">
                <div className="text-sm font-bold flex items-center gap-2 text-sky-400">
                  <Share className="w-4 h-4" />
                  <span>
                    How to Run 100% Edge-to-Edge Full Screen (No Safari Bar, No AI Studio UI):
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                  <div className={`p-3.5 rounded-xl border space-y-1.5 ${subtlePanel}`}>
                    <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
                      1
                    </div>
                    <div className="font-bold">Open Direct Link</div>
                    <p className="text-slate-400 text-[11px]">
                      Open the Direct App URL in <strong>Safari</strong> on your iPhone 15 Pro.
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border space-y-1.5 ${subtlePanel}`}>
                    <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
                      2
                    </div>
                    <div className="font-bold flex items-center gap-1">
                      <span>Tap Share (📤)</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      At the bottom of Safari, tap the <strong>Share</strong> button (box with arrow up).
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl border space-y-1.5 ${subtlePanel}`}>
                    <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
                      3
                    </div>
                    <div className="font-bold">Add to Home Screen</div>
                    <p className="text-slate-400 text-[11px]">
                      Tap <strong>"Add to Home Screen" (ਹੋਮ ਸਕ੍ਰੀਨ ਤੇ ਜੋੜੋ)</strong> and tap <strong>Add</strong>.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 space-y-1.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <div className="font-bold text-white">Full Screen Ready</div>
                    <p className="text-[11px] text-emerald-200/90">
                      Tap the icon on your iPhone home screen! It opens 100% full screen with zero borders!
                    </p>
                  </div>
                </div>
              </div>

              {/* HARDWARE STABILITY & TOUCH CONTROLS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Touch & Horizontal Movement Lock */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${subtlePanel}`}>
                  <div>
                    <div className="text-sm font-bold flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span>Lock Screen Against Finger Movement</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Locks viewport (`100dvh`, `touch-action: pan-y`, `overscroll-behavior: none`) so dragging with your finger never shifts the screen sideways.
                    </p>
                  </div>
                  <button
                    onClick={() => setScreenTouchLocked(!screenTouchLocked)}
                    className={`px-4 py-2 min-h-[42px] rounded-lg text-xs font-bold shrink-0 ${
                      screenTouchLocked ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {screenTouchLocked ? 'LOCKED ✓' : 'UNLOCKED'}
                  </button>
                </div>

                {/* 2. Dynamic Island & Home Bar Safe Area */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${subtlePanel}`}>
                  <div>
                    <div className="text-sm font-bold">
                      iPhone 15 Pro Dynamic Island Safe Insets
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Applies `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` so controls never collide with the Dynamic Island or Home Indicator bar.
                    </p>
                  </div>
                  <button
                    onClick={() => setDynamicIslandSafePadding(!dynamicIslandSafePadding)}
                    className={`px-4 py-2 min-h-[42px] rounded-lg text-xs font-bold shrink-0 ${
                      dynamicIslandSafePadding ? 'bg-sky-600 text-white' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {dynamicIslandSafePadding ? 'ACTIVE ✓' : 'OFF'}
                  </button>
                </div>

                {/* 3. Super Retina XDR Pure OLED Black Mode */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${subtlePanel}`}>
                  <div>
                    <div className="text-sm font-bold">
                      Super Retina XDR True OLED Black (#000000)
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Blends seamlessly into the iPhone 15 Pro Dynamic Island bezel and saves battery on OLED pixels.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setDarkMode(true);
                      setOledBlackMode(!oledBlackMode);
                    }}
                    className={`px-4 py-2 min-h-[42px] rounded-lg text-xs font-bold shrink-0 ${
                      oledBlackMode && darkMode ? 'bg-sky-600 text-white' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {oledBlackMode && darkMode ? 'OLED ON ✓' : 'SLATE'}
                  </button>
                </div>

                {/* 4. Native Fullscreen Toggle */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${subtlePanel}`}>
                  <div>
                    <div className="text-sm font-bold">Full-Screen Viewport Mode</div>
                    <p className="text-xs text-slate-400 mt-1">
                      {isStandalonePWA
                        ? 'Running in native iOS Standalone Full-Screen mode!'
                        : 'Expand viewport or add to iPhone Home Screen for 100% edge-to-edge full screen.'}
                    </p>
                  </div>
                  <button
                    onClick={toggleFullScreenMode}
                    className="px-4 py-2 min-h-[42px] rounded-lg bg-amber-500 text-slate-950 text-xs font-bold shrink-0"
                  >
                    {isFullscreen ? 'Exit Full Screen' : 'Enter Full Screen'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* IPHONE FULL-SCREEN SETUP MODAL */}
      {showIphoneModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <div
            className={`w-full max-w-lg rounded-2xl border p-5 sm:p-6 space-y-4 shadow-2xl max-h-[90dvh] overflow-y-auto ${surfaceCard}`}
          >
            <div className="flex items-start justify-between gap-3 border-b border-slate-500/20 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">
                    iPhone 15 Pro Standalone Full-Screen Setup
                  </h3>
                  <p className="text-xs text-slate-400">
                    Run 100% borderless with zero Safari bars & zero AI Studio wrappers
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowIphoneModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Why AI Studio opened explanation */}
            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 space-y-1.5 text-xs">
              <div className="font-bold flex items-center gap-1.5 text-amber-400">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>ਕਿਉਂ AI Studio Playground ਖੁੱਲ੍ਹਿਆ ਸੀ? (Why AI Studio Opened)</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                When you tap "Add to Home Screen" inside AI Studio Build, Safari bookmarks the Google AI Studio playground website instead of the standalone CS Academy application.
              </p>
              <p className="text-amber-200/90 font-medium leading-relaxed">
                ਬਿਨਾਂ ਬ੍ਰਾਊਜ਼ਰ ਬਾਰ ਅਤੇ ਬਿਨਾਂ AI Studio ਦੇ Full Screen ਚਲਾਉਣ ਲਈ, ਤੁਹਾਨੂੰ ਹੇਠਾਂ ਦਿੱਤਾ <strong>Direct App URL</strong> ਸਫਾਰੀ ਵਿੱਚ ਖੋਲ੍ਹਣਾ ਪਵੇਗਾ।
              </p>
            </div>

            {/* 1-Tap Action Buttons */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400">Direct Standalone App Link:</div>
              <div className="flex items-center gap-2">
                <a
                  href={directAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 min-h-[46px] rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>1. Open Direct App in Safari ↗</span>
                </a>
                <button
                  onClick={handleCopyDirectUrl}
                  className={`py-3 px-4 min-h-[46px] rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 ${
                    copiedUrl
                      ? 'bg-emerald-600 border-emerald-500 text-white'
                      : 'border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-700 bg-slate-900/90 flex items-center justify-between gap-2 text-xs font-mono text-sky-400">
                <span className="truncate select-all">{directAppUrl}</span>
                <span className="text-[10px] text-emerald-400 font-sans font-semibold shrink-0">
                  Verified Live URL
                </span>
              </div>
            </div>

            {/* Visual Step-by-Step Instructions */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Simple 3-Step Setup (ਹੋਮ ਸਕ੍ਰੀਨ 'ਤੇ ਜੋੜਨ ਦੇ ਆਸਾਨ ਕਦਮ):
              </div>
              <div className="space-y-2 text-xs">
                <div className={`p-3 rounded-xl border flex items-start gap-3 ${subtlePanel}`}>
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold">Open Direct App in Safari</div>
                    <p className="text-slate-400 mt-0.5">
                      Tap the blue button above to open the deployed app URL directly in Safari (or paste it into Safari's address bar).
                    </p>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border flex items-start gap-3 ${subtlePanel}`}>
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      <span>Tap Safari Share Button</span>
                      <Share className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      At the bottom bar of Safari, tap the Share icon (square with an arrow pointing up 📤).
                    </p>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border flex items-start gap-3 ${subtlePanel}`}>
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold">
                      Tap "Add to Home Screen" · ਹੋਮ ਸਕ੍ਰੀਨ ਤੇ ਜੋੜੋ
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      Scroll down in the Share sheet, tap <strong>Add to Home Screen</strong>, and tap <strong>Add</strong> at the top right.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 flex items-start gap-3 text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Done! Pure Full Screen Native Experience</div>
                    <p className="text-xs text-emerald-200/90 mt-0.5">
                      Now tap the <strong>CS Academy</strong> icon on your iPhone home screen! It opens 100% full screen with zero browser address bars, zero bottom borders, and NO AI Studio playgrounds!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIphoneModal(false)}
              className="w-full py-2.5 min-h-[42px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MOBILE-FIRST IPHONE 15 PRO THUMB NAVIGATION BAR (Anchored at bottom of flex shell, respects Home Indicator) */}
      <nav
        className={`md:hidden shrink-0 border-t px-2 pt-1.5 pb-safe grid grid-cols-5 gap-1 z-40 ${
          darkMode ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}
      >
        <button
          onClick={() => setActiveSection('dashboard')}
          className={`flex flex-col items-center justify-center min-h-[46px] rounded-lg text-[10px] font-medium ${
            activeSection === 'dashboard' ? 'text-sky-400 font-bold' : 'opacity-70'
          }`}
        >
          <Compass className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setActiveSection('curriculum')}
          className={`flex flex-col items-center justify-center min-h-[46px] rounded-lg text-[10px] font-medium ${
            activeSection === 'curriculum' ? 'text-sky-400 font-bold' : 'opacity-70'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span>Lessons</span>
        </button>
        <button
          onClick={() => setActiveSection('laboratory')}
          className={`flex flex-col items-center justify-center min-h-[46px] rounded-lg text-[10px] font-medium ${
            activeSection === 'laboratory' ? 'text-sky-400 font-bold' : 'opacity-70'
          }`}
        >
          <Cpu className="w-4 h-4 mb-0.5" />
          <span>Labs</span>
        </button>
        <button
          onClick={() => setActiveSection('tasks')}
          className={`flex flex-col items-center justify-center min-h-[46px] rounded-lg text-[10px] font-medium ${
            activeSection === 'tasks' ? 'text-sky-400 font-bold' : 'opacity-70'
          }`}
        >
          <CheckSquare className="w-4 h-4 mb-0.5" />
          <span>Tasks</span>
        </button>
        <button
          onClick={() => setActiveSection('tutor')}
          className={`flex flex-col items-center justify-center min-h-[46px] rounded-lg text-[10px] font-medium ${
            activeSection === 'tutor' ? 'text-sky-400 font-bold' : 'opacity-70'
          }`}
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span>AI Tutor</span>
        </button>
      </nav>
    </div>
  );
}
