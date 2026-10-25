import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, User as FirebaseUser } from 'firebase/auth';
import { auth, googleAuthProvider } from './lib/firebase.ts';
import { ComputerLaboratory, LabId } from './components/ComputerLaboratory.tsx';
import { TaskManagerView, StudyTask } from './components/TaskManagerView.tsx';
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
} from 'lucide-react';

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
  }>({
    uid: 'guest',
    email: 'guest@academy.edu',
    displayName: 'Scholar',
    role: 'student',
    preferredLanguage: 'bilingual',
    xp: 150,
    streakDays: 3,
    dailyGoalMinutes: 30,
  });

  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [oledBlackMode, setOledBlackMode] = useState<boolean>(true); // Optimized for iPhone 15 Pro Super Retina XDR
  const [dynamicIslandSafePadding, setDynamicIslandSafePadding] = useState<boolean>(true);
  const [screenTouchLocked, setScreenTouchLocked] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isStandalonePWA, setIsStandalonePWA] = useState<boolean>(false);

  const [langMode, setLangMode] = useState<'bilingual' | 'punjabi' | 'english'>('bilingual');
  const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');
  const [selectedLabId, setSelectedLabId] = useState<LabId>('hardware-explorer');

  // Curriculum Data from Cloud SQL API
  const [courses, setCourses] = useState<any[]>([]);
  const [lessons, setLessons] = useState<any[]>([]);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);
  const [achievementsCatalog, setAchievementsCatalog] = useState<any[]>([]);
  const [syllabusBlueprint, setSyllabusBlueprint] = useState<any[]>([]);
  const [selectedLessonSlug, setSelectedLessonSlug] = useState<string>('what-is-a-computer-ipos');

  // User Learning State
  const [tasks, setTasks] = useState<StudyTask[]>([
    {
      id: 1,
      title: 'Master Binary (0 & 1) and Logic Gates in Lab D & E',
      description: 'Toggle 8-bit switches and test XOR / AND truth tables with Punjabi explanations.',
      category: 'Binary & Assembly',
      priority: 'high',
      dueDate: new Date(Date.now() + 86400000).toISOString().slice(0, 16),
      completed: false,
      notifyEnabled: true,
      linkedLessonSlug: 'how-binary-and-logic-gates-work',
    },
    {
      id: 2,
      title: 'Practice Discrete Math Sets & Propositional Logic',
      description: 'Review De Morgan’s Laws, Set Intersections, and Median vs Mean in Level 9.',
      category: 'Discrete Math',
      priority: 'high',
      dueDate: new Date(Date.now() + 172800000).toISOString().slice(0, 16),
      completed: false,
      notifyEnabled: true,
      linkedLessonSlug: 'cs-math-logic-discrete-statistics',
    },
  ]);
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>([]);
  const [quizAttempts, setQuizAttempts] = useState<any[]>([]);
  const [bookmarkedLessonIds, setBookmarkedLessonIds] = useState<number[]>([]);
  const [lessonNotes, setLessonNotes] = useState<Record<number, string>>({});
  const [unlockedCodes, setUnlockedCodes] = useState<string[]>(['FIRST_STEP']);
  const [celebrationBadge, setCelebrationBadge] = useState<string | null>(null);

  // Quiz Active State
  const [selectedQuizId, setSelectedQuizId] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState<'practice' | 'timed'>('practice');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [lastQuizResult, setLastQuizResult] = useState<any | null>(null);
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
  >([
    {
      role: 'assistant',
      content:
        'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! (Welcome to Computer Fundamentals Academy!) 🎓\nਮੈਂ ਤੁਹਾਡਾ Bilingual AI Tutor ਹਾਂ। ਤੁਸੀਂ ਮੈਨੂੰ ਕੰਪਿਊਟਰ ਹਾਰਡਵੇਅਰ (CPU, RAM), ਬਾਈਨਰੀ ਭਾਸ਼ਾ (0 ਅਤੇ 1), Assembly Language, Algorithms ਜਾਂ ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਦੇ ਗਣਿਤ (Logic, Discrete Math, Statistics) ਬਾਰੇ ਕੋਈ ਵੀ ਸਵਾਲ ਪੁੱਛ ਸਕਦੇ ਹੋ — ਮੈਂ ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀਆਂ ਉਦਾਹਰਣਾਂ ਦੇ ਕੇ ਸਮਝਾਵਾਂਗਾ!',
      mode: 'child-friendly',
    },
  ]);

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

  // Prevent multi-touch pinch zoom & horizontal finger drag on iOS Safari
  useEffect(() => {
    const checkStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    setIsStandalonePWA(checkStandalone);

    const preventPinchZoom = (e: TouchEvent) => {
      if (screenTouchLocked && e.touches.length > 1) {
        e.preventDefault();
      }
    };
    const preventGesture = (e: Event) => {
      if (screenTouchLocked) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventPinchZoom, { passive: false });
    document.addEventListener('gesturestart', preventGesture);
    document.addEventListener('gesturechange', preventGesture);

    return () => {
      document.removeEventListener('touchmove', preventPinchZoom);
      document.removeEventListener('gesturestart', preventGesture);
      document.removeEventListener('gesturechange', preventGesture);
    };
  }, [screenTouchLocked]);

  const toggleFullScreenMode = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          setIsFullscreen(true);
        } else {
          // On iOS Safari where Fullscreen API requires Add to Home Screen, open iPhone 15 Pro settings guide
          setActiveSection('iphone-settings');
        }
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      setActiveSection('iphone-settings');
    }
  };

  // Fetch Curriculum from Backend
  const fetchCurriculum = async () => {
    try {
      const res = await fetch('/api/curriculum');
      if (!res.ok) throw new Error('Failed to load curriculum');
      const data = await res.json();
      setCourses(data.courses || []);
      setLessons(data.lessons || []);
      setQuizzes(data.quizzes || []);
      setQuestions(data.questions || []);
      setAchievementsCatalog(data.achievements || []);
      setSyllabusBlueprint(data.syllabusBlueprint || []);
      if (data.lessons?.length > 0 && !selectedLessonSlug) {
        setSelectedLessonSlug(data.lessons[0].slug);
      }
      if (data.quizzes?.length > 0 && !selectedQuizId) {
        setSelectedQuizId(data.quizzes[0].id);
      }
      if (data.courses?.length > 0) {
        setEditCourseId(data.courses[0].id);
      }
    } catch (err) {
      console.error('Error loading curriculum:', err);
    }
  };

  useEffect(() => {
    fetchCurriculum();
  }, []);

  // Listen to Firebase Auth State & Synchronize with Cloud SQL
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
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
            if (data.tasks) setTasks(data.tasks);
            if (data.lessonProgress) {
              setCompletedLessonIds(
                data.lessonProgress.filter((p: any) => p.completed).map((p: any) => p.lessonId)
              );
            }
            if (data.quizAttempts) setQuizAttempts(data.quizAttempts);
            if (data.bookmarks) {
              setBookmarkedLessonIds(data.bookmarks.map((b: any) => b.lessonId));
            }
            if (data.notes) {
              const map: Record<number, string> = {};
              data.notes.forEach((n: any) => {
                map[n.lessonId] = n.content;
              });
              setLessonNotes(map);
            }
            if (data.unlockedAchievements) {
              setUnlockedCodes(data.unlockedAchievements.map((u: any) => u.achievementCode));
            }
            if (data.tutorHistory && data.tutorHistory.length > 0) {
              setTutorMessages(
                data.tutorHistory.map((m: any) => ({
                  role: m.role,
                  content: m.content,
                  mode: m.mode,
                }))
              );
            }
          }
        } catch (err) {
          console.error('Failed to sync authenticated user with backend:', err);
        }
      } else {
        setIdToken('');
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
    }
  }, [currentLesson?.id, lessonNotes]);

  const handleGoogleAuth = async () => {
    if (firebaseUser) {
      await signOut(auth);
    } else {
      try {
        await signInWithPopup(auth, googleAuthProvider);
      } catch (err) {
        console.error('Google Sign-In error:', err);
      }
    }
  };

  // Task Handlers
  const handleAddTask = async (newTask: Omit<StudyTask, 'id' | 'completed'>) => {
    if (idToken) {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(newTask),
      });
      if (res.ok) {
        const data = await res.json();
        setTasks((prev) => [data.task, ...prev]);
        return;
      }
    }
    setTasks((prev) => [
      { ...newTask, id: Date.now(), completed: false },
      ...prev,
    ]);
  };

  const handleToggleTask = async (id: number, completed: boolean) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed } : t)));
    if (completed && !unlockedCodes.includes('TASK_DISCIPLINE')) {
      setUnlockedCodes((prev) => [...prev, 'TASK_DISCIPLINE']);
      setCelebrationBadge('TASK_DISCIPLINE');
    }
    if (idToken) {
      await fetch(`/api/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ completed }),
      });
    }
  };

  const handleDeleteTask = async (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    if (idToken) {
      await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${idToken}` },
      });
    }
  };

  // Mark Lesson Complete
  const handleCompleteLesson = async (lessonId: number) => {
    if (!completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds((prev) => [...prev, lessonId]);
      setUserProfile((p) => ({ ...p, xp: p.xp + 50 }));
    }
    if (idToken) {
      const res = await fetch(`/api/lessons/${lessonId}/progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ timeSpentMinutes: 15 }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.newlyUnlocked?.length > 0) {
          setUnlockedCodes((prev) => [...new Set([...prev, ...data.newlyUnlocked])]);
          setCelebrationBadge(data.newlyUnlocked[0]);
        }
      }
    } else if (!unlockedCodes.includes('FIRST_STEP')) {
      setUnlockedCodes((prev) => [...prev, 'FIRST_STEP']);
      setCelebrationBadge('FIRST_STEP');
    }
  };

  // Bookmark & Note Handlers
  const handleToggleBookmark = async (lessonId: number) => {
    const exists = bookmarkedLessonIds.includes(lessonId);
    setBookmarkedLessonIds((prev) =>
      exists ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
    if (idToken) {
      await fetch('/api/users/me/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ lessonId }),
      });
    }
  };

  const handleSaveNote = async (lessonId: number) => {
    if (!noteDraft.trim()) return;
    setLessonNotes((prev) => ({ ...prev, [lessonId]: noteDraft }));
    if (idToken) {
      await fetch('/api/users/me/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ lessonId, content: noteDraft }),
      });
    }
  };

  // Quiz Submission
  const handleSubmitQuiz = async (quizId: number) => {
    const quizQuestions = questions.filter((q) => q.quizId === quizId);
    if (idToken) {
      const res = await fetch(`/api/quizzes/${quizId}/attempts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ mode: quizMode, answers: quizAnswers }),
      });
      if (res.ok) {
        const data = await res.json();
        setLastQuizResult(data.attempt);
        setQuizAttempts((prev) => [data.attempt, ...prev]);
        if (data.newlyUnlocked?.length > 0) {
          setUnlockedCodes((prev) => [...new Set([...prev, ...data.newlyUnlocked])]);
          setCelebrationBadge(data.newlyUnlocked[0]);
        }
        return;
      }
    }

    let correctCount = 0;
    const graded = quizQuestions.map((q) => {
      const sub = (quizAnswers[String(q.id)] || '').trim();
      const isCorrect = sub.toLowerCase() === q.correctAnswer.trim().toLowerCase();
      if (isCorrect) correctCount++;
      return { questionId: q.id, submitted: sub, isCorrect, topicTag: q.topicTag };
    });
    const scorePercent = Math.round((correctCount / Math.max(1, quizQuestions.length)) * 100);
    const localAttempt = {
      id: Date.now(),
      quizId,
      scorePercent,
      correctCount,
      totalQuestions: quizQuestions.length,
      passed: scorePercent >= 70,
      mode: quizMode,
      answersJson: graded,
      createdAt: new Date().toISOString(),
    };
    setLastQuizResult(localAttempt);
    setQuizAttempts((prev) => [localAttempt, ...prev]);
    if (scorePercent >= 80 && !unlockedCodes.includes('QUIZ_ACE')) {
      setUnlockedCodes((prev) => [...prev, 'QUIZ_ACE']);
      setCelebrationBadge('QUIZ_ACE');
    }
  };

  // AI Tutor Submission
  const handleSendTutorPrompt = async (customPrompt?: string) => {
    const queryText = (customPrompt ?? tutorInput).trim();
    if (!queryText || tutorLoading) return;
    setTutorInput('');
    setTutorMessages((prev) => [...prev, { role: 'user', content: queryText, mode: tutorMode }]);
    setTutorLoading(true);

    try {
      const res = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: queryText,
          lessonTitle: currentLesson?.titleEn || 'Computer Science & Mathematics',
          lessonContext: currentLesson?.technicalExplanationEn || '',
          mode: tutorMode,
          uid: firebaseUser?.uid,
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

  // Load lesson into Syllabus Editor
  const populateEditorWithLesson = (lesson: any) => {
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
    const payload = {
      id: editLessonId,
      courseId: Number(editCourseId),
      slug: editSlug || `custom-lesson-${Date.now()}`,
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

    if (idToken) {
      const res = await fetch('/api/admin/lessons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setAdminStatusMsg('Lesson saved to Cloud SQL PostgreSQL and published to the curriculum!');
        await fetchCurriculum();
        return;
      }
    }

    if (editLessonId) {
      setLessons((prev) => prev.map((l) => (l.id === editLessonId ? { ...l, ...payload } : l)));
    } else {
      const newLesson = { ...payload, id: Date.now(), terminologyJson: [], misconceptionsJson: [] };
      setLessons((prev) => [...prev, newLesson]);
    }
    setAdminStatusMsg('Lesson updated in your active syllabus!');
  };

  const allGlossaryTerms = lessons.flatMap((l) =>
    (l.terminologyJson || []).map((t: any) => ({ ...t, lessonTitle: l.titleEn }))
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
              { id: 'iphone-settings', label: 'iPhone 15 Pro' },
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
                  <h2 className="text-base font-bold">Courses & Levels (1–9)</h2>
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
                </div>

                <div className="space-y-2.5">
                  {courses.map((course) => {
                    const courseLessons = lessons.filter((l) => l.courseId === course.id);
                    return (
                      <div key={course.id} className={`p-3 rounded-xl border space-y-2 ${subtlePanel}`}>
                        <div className="text-xs font-bold text-sky-500">{course.titleEn}</div>
                        <div className="text-xs text-amber-500 font-medium">{course.titlePa}</div>
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

                        <button
                          onClick={() => populateEditorWithLesson(currentLesson)}
                          className={`px-3 py-2 min-h-[40px] rounded-lg border text-xs font-semibold flex items-center gap-1.5 ${subtlePanel}`}
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </div>

                    {/* Child-Friendly Practical Analogy */}
                    <div className="p-4 sm:p-5 rounded-xl border border-amber-500/40 bg-amber-500/10 space-y-3">
                      <div className="text-xs sm:text-sm font-bold text-amber-400">
                        🧒 ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀ ਉਦਾਹਰਣ (Explain Like I’m a Child — Practical Illustration)
                      </div>
                      {langMode !== 'english' && (
                        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium select-text">
                          {currentLesson.childAnalogyPa}
                        </p>
                      )}
                      {langMode !== 'punjabi' && (
                        <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line opacity-90 select-text">
                          {currentLesson.childAnalogyEn}
                        </p>
                      )}
                    </div>

                    {/* Technical Explanation */}
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold">
                        Technical Architecture & Principles · ਤਕਨੀਕੀ ਵਿਆਖਿਆ
                      </h3>
                      {langMode !== 'english' && (
                        <div
                          className={`p-4 sm:p-5 rounded-xl border leading-relaxed text-sm sm:text-base whitespace-pre-line select-text ${subtlePanel}`}
                        >
                          {currentLesson.technicalExplanationPa}
                        </div>
                      )}
                      {langMode !== 'punjabi' && (
                        <div
                          className={`p-4 sm:p-5 rounded-xl border leading-relaxed text-xs sm:text-sm whitespace-pre-line select-text ${subtlePanel}`}
                        >
                          {currentLesson.technicalExplanationEn}
                        </div>
                      )}
                    </div>

                    {/* Practical Real-World Example */}
                    <div className={`p-4 sm:p-5 rounded-xl border space-y-2 ${subtlePanel}`}>
                      <div className="text-xs font-bold text-emerald-500">
                        Practical Real-World Example · ਅਸਲ ਜ਼ਿੰਦਗੀ ਦੀ ਉਦਾਹਰਣ
                      </div>
                      {langMode !== 'english' && (
                        <p className="text-sm leading-relaxed">{currentLesson.practicalExamplePa}</p>
                      )}
                      {langMode !== 'punjabi' && (
                        <p className="text-xs leading-relaxed text-slate-400">
                          {currentLesson.practicalExampleEn}
                        </p>
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
                            setSelectedLabId(
                              (currentLesson.interactiveLabId as LabId) || 'hardware-explorer'
                            );
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
                        setTimeLeftSeconds(qz.timeLimitSeconds || 300);
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

                  return (
                    <>
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-500/20 pb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold">{activeQuiz.titleEn}</h3>
                          <p className="text-sm text-amber-500 font-semibold">{activeQuiz.titlePa}</p>
                        </div>
                        <button
                          onClick={() => setQuizMode(quizMode === 'practice' ? 'timed' : 'practice')}
                          className={`px-3 py-2 min-h-[40px] rounded-lg border text-xs font-semibold flex items-center gap-1.5 ${subtlePanel}`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>
                            {quizMode === 'timed'
                              ? `Timed (${Math.floor(timeLeftSeconds / 60)}:${String(
                                  timeLeftSeconds % 60
                                ).padStart(2, '0')})`
                              : 'Practice Mode'}
                          </span>
                        </button>
                      </div>

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
                                  value={chosen}
                                  onChange={(e) =>
                                    setQuizAnswers((prev) => ({
                                      ...prev,
                                      [String(q.id)]: e.target.value,
                                    }))
                                  }
                                  className={`w-full px-3 py-2.5 rounded-lg border text-sm font-mono ${surfaceCard}`}
                                />
                              ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                  {(q.optionsJson || []).map((opt: string) => (
                                    <button
                                      key={opt}
                                      onClick={() =>
                                        setQuizAnswers((prev) => ({
                                          ...prev,
                                          [String(q.id)]: opt,
                                        }))
                                      }
                                      className={`p-3 min-h-[44px] rounded-lg border text-left text-xs font-medium transition-colors ${
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
                                      : `❌ Correct Answer: ${q.correctAnswer}`}
                                  </div>
                                  <p className="mt-1">{q.explanationPa}</p>
                                  <p className="text-slate-400 mt-0.5">{q.explanationEn}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <button
                          onClick={() => handleSubmitQuiz(activeQuiz.id)}
                          className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-sky-600 text-white text-sm font-bold"
                        >
                          Submit Answers for Grading
                        </button>

                        {lastQuizResult && (
                          <div className="text-sm font-bold font-mono">
                            Score: {lastQuizResult.scorePercent}% ({lastQuizResult.correctCount}/
                            {lastQuizResult.totalQuestions})
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
                  <span>High-Reasoning Bilingual Tutor</span>
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
                      { id: 'math-step', label: '🧮 Step-by-Step Math & Binary' },
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

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold">Tap a Question:</div>
                  {[
                    'ਬਾਈਨਰੀ ਭਾਸ਼ਾ (0 ਅਤੇ 1) ਅਤੇ Assembly Language ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ? ਬੱਚਿਆਂ ਵਾਂਗ ਸਮਝਾਓ।',
                    'Explain Propositional Logic and De Morgan’s Laws in Punjabi with an example.',
                    'Show step-by-step how to convert Decimal 75 into 8-bit Binary.',
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
                <div className="space-y-3 overflow-y-auto max-h-[360px] pr-1">
                  {tutorMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed whitespace-pre-line select-text ${
                        msg.role === 'user'
                          ? 'bg-sky-600/15 border-sky-500/40 ml-4'
                          : `${subtlePanel} mr-2`
                      }`}
                    >
                      <div className="text-[10px] font-mono opacity-60 mb-1">
                        {msg.role === 'user' ? 'You' : 'Academy Professor (Punjabi + English)'}
                      </div>
                      <div>{msg.content}</div>
                    </div>
                  ))}
                  {tutorLoading && (
                    <div className={`p-3.5 rounded-xl border text-xs font-mono ${subtlePanel}`}>
                      Reasoning deeply in Punjabi & English...
                    </div>
                  )}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendTutorPrompt();
                  }}
                  className="pt-3 mt-3 border-t border-slate-500/20 flex items-center gap-2"
                >
                  <input
                    type="text"
                    placeholder="Ask in Punjabi or English..."
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
                  <div key={idx} className={`p-4 rounded-xl border space-y-1 ${subtlePanel}`}>
                    <div className="text-sm font-bold text-sky-500">{item.term}</div>
                    <div className="text-xs font-semibold text-amber-500">{item.punjabi}</div>
                    <p className="text-xs leading-relaxed">{item.meaningPa}</p>
                    <p className="text-xs text-slate-400">{item.meaningEn}</p>
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

          {/* 10. EDITABLE SYLLABUS STUDIO */}
          {activeSection === 'admin' && (
            <div className={`p-5 sm:p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">
                  Editable Syllabus Studio · ਪਾਠਕ੍ਰਮ ਸੰਪਾਦਕ
                </h2>
                <p className="text-xs text-slate-400">
                  Add or customize bilingual lessons, child analogies, and interactive labs
                </p>
              </div>

              {adminStatusMsg && (
                <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-xs font-semibold text-emerald-400">
                  {adminStatusMsg}
                </div>
              )}

              <form onSubmit={handleSaveSyllabusLesson} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">Course / Level</label>
                  <select
                    value={editCourseId}
                    onChange={(e) => setEditCourseId(Number(e.target.value))}
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm ${subtlePanel}`}
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Linked Simulation Lab</label>
                  <select
                    value={editLabId}
                    onChange={(e) => setEditLabId(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm ${subtlePanel}`}
                  >
                    <option value="hardware-explorer">Lab A: Computer Hardware Explorer</option>
                    <option value="cpu-cycle">Lab B: CPU Instruction Cycle</option>
                    <option value="ram-storage">Lab C: RAM vs Storage Hierarchy</option>
                    <option value="binary-converter">Lab D: Binary Converter</option>
                    <option value="logic-gates">Lab E: Logic Gate Laboratory</option>
                    <option value="network-sim">Lab F: Network Packet Simulator</option>
                    <option value="algorithm-math-lab">Lab G: Algorithms & CS Math</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Lesson Title (English)</label>
                  <input
                    type="text"
                    required
                    value={editTitleEn}
                    onChange={(e) => setEditTitleEn(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Lesson Title (Punjabi)</label>
                  <input
                    type="text"
                    required
                    value={editTitlePa}
                    onChange={(e) => setEditTitlePa(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Child Analogy (Punjabi)</label>
                  <textarea
                    rows={3}
                    required
                    value={editAnalogyPa}
                    onChange={(e) => setEditAnalogyPa(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Child Analogy (English)</label>
                  <textarea
                    rows={3}
                    required
                    value={editAnalogyEn}
                    onChange={(e) => setEditAnalogyEn(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Technical Explanation (Punjabi)</label>
                  <textarea
                    rows={3}
                    required
                    value={editTechPa}
                    onChange={(e) => setEditTechPa(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Technical Explanation (English)</label>
                  <textarea
                    rows={3}
                    required
                    value={editTechEn}
                    onChange={(e) => setEditTechEn(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Practical Example (Punjabi)</label>
                  <textarea
                    rows={2}
                    required
                    value={editExamplePa}
                    onChange={(e) => setEditExamplePa(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Practical Example (English)</label>
                  <textarea
                    rows={2}
                    required
                    value={editExampleEn}
                    onChange={(e) => setEditExampleEn(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-sky-600 text-white text-xs font-bold"
                  >
                    {editLessonId ? 'Save Lesson Updates' : 'Publish New Lesson'}
                  </button>
                </div>
              </form>
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
                    iPhone 15 Pro Full-Screen & Touch Stability Settings
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Configured to prevent horizontal finger movement, rubber-band shifting, and input auto-zoom while running edge-to-edge around the Dynamic Island.
                  </p>
                </div>
                <Smartphone className="w-8 h-8 text-sky-500 shrink-0" />
              </div>

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
                    <div className="text-sm font-bold"> Full-Screen Viewport Mode</div>
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

              {/* iOS Safari Full-Screen Standalone Guide for iPhone 15 Pro */}
              <div className="p-5 rounded-xl border border-sky-500/40 bg-sky-500/10 space-y-2">
                <div className="text-sm font-bold flex items-center gap-2 text-sky-400">
                  <Share className="w-4 h-4" />
                  <span>How to Run 100% Edge-to-Edge Full Screen on iPhone 15 Pro (No Safari Bar):</span>
                </div>
                <ol className="text-xs space-y-1.5 list-decimal list-inside text-slate-200">
                  <li>
                    Open this app URL in <strong>Safari</strong> on your iPhone 15 Pro.
                  </li>
                  <li>
                    Tap the <strong>Share</strong> button at the bottom of Safari.
                  </li>
                  <li>
                    Tap <strong>Add to Home Screen (ਹੋਮ ਸਕ੍ਰੀਨ ਤੇ ਜੋੜੋ)</strong> and tap <strong>Add</strong>.
                  </li>
                  <li>
                    Launch <strong>CS Academy</strong> from your Home Screen — it runs in 100% locked native Full-Screen mode with zero browser bars!
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </main>

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
