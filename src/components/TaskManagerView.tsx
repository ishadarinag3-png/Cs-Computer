import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Circle,
  Bell,
  BellRing,
  Plus,
  Trash2,
  Calendar,
  BookOpen,
} from 'lucide-react';

export interface StudyTask {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  completed: boolean;
  notifyEnabled: boolean;
  linkedLessonSlug?: string;
}

interface Props {
  tasks: StudyTask[];
  isAuthenticated: boolean;
  darkMode: boolean;
  onAddTask: (task: Omit<StudyTask, 'id' | 'completed'>) => Promise<void>;
  onToggleTask: (id: number, completed: boolean) => Promise<void>;
  onDeleteTask: (id: number) => Promise<void>;
  onOpenLessonSlug: (slug: string) => void;
}

export const TaskManagerView: React.FC<Props> = ({
  tasks,
  isAuthenticated,
  darkMode,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onOpenLessonSlug,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Computer Science');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState(() => new Date(Date.now() + 3600000 * 6).toISOString().slice(0, 16));
  const [notifyEnabled, setNotifyEnabled] = useState(true);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'completed'>('all');
  const [notificationPermission, setNotificationPermission] = useState<string>(
    typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'default'
  );
  const [pushBannerMessage, setPushBannerMessage] = useState<string>('');

  const requestPushPermission = async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      setPushBannerMessage('In-app reminders enabled for this browser session.');
      return;
    }
    try {
      const perm = await Notification.requestPermission();
      setNotificationPermission(perm);
      if (perm === 'granted') {
        new Notification('Computer Fundamentals Academy', {
          body: 'Push notifications enabled! You will be alerted for upcoming study tasks. (ਪੜ੍ਹਾਈ ਦੇ ਟਾਸਕ ਰੀਮਾਈਂਡਰ ਚਾਲੂ ਹੋ ਗਏ ਹਨ!)',
        });
        setPushBannerMessage('Push notifications are active for upcoming study deadlines.');
      } else {
        setPushBannerMessage('In-app reminder alerts active.');
      }
    } catch {
      setPushBannerMessage('In-app reminder alerts active.');
    }
  };

  const triggerTestReminder = () => {
    const nextPending = tasks.find((t) => !t.completed);
    const msg = nextPending
      ? `Upcoming Study Task: "${nextPending.title}" (${nextPending.category})`
      : 'All caught up! Add a new binary or math study task to stay on your streak.';

    setPushBannerMessage(msg);
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      new Notification('Study Reminder · ਪੜ੍ਹਾਈ ਰੀਮਾਈਂਡਰ', { body: msg });
    }
  };

  useEffect(() => {
    const upcoming = tasks.filter((t) => !t.completed && t.notifyEnabled);
    if (upcoming.length > 0 && !pushBannerMessage) {
      setPushBannerMessage(
        `Reminder: You have ${upcoming.length} upcoming study ${
          upcoming.length === 1 ? 'task' : 'tasks'
        } scheduled.`
      );
    }
  }, [tasks]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onAddTask({
      title: title.trim(),
      description: description.trim(),
      category,
      priority,
      dueDate,
      notifyEnabled,
      linkedLessonSlug: '',
    });
    setTitle('');
    setDescription('');
  };

  const filteredTasks = tasks.filter((t) => {
    if (filterStatus === 'pending') return !t.completed;
    if (filterStatus === 'completed') return t.completed;
    return true;
  });

  const surfaceCard = darkMode
    ? 'bg-slate-900 border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900';

  const subtlePanel = darkMode
    ? 'bg-slate-950/70 border-slate-800 text-slate-200'
    : 'bg-slate-50 border-slate-200 text-slate-800';

  return (
    <div className="space-y-6">
      {/* Header & Push Notification Controls */}
      <div className={`p-6 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${surfaceCard}`}>
        <div>
          <h2 className="text-xl font-bold">
            Study Task Planner & Real-Time Sync · ਸਟੱਡੀ ਟਾਸਕ ਮੈਨੇਜਰ
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {isAuthenticated
              ? 'Synchronized live with your Cloud SQL PostgreSQL account'
              : 'Sign in with Google in the header to persist your tasks across devices'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={requestPushPermission}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-colors"
          >
            <BellRing className="w-3.5 h-3.5" />
            <span>
              {notificationPermission === 'granted'
                ? 'Push Notifications Active'
                : 'Enable Push Notifications'}
            </span>
          </button>
          <button
            onClick={triggerTestReminder}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-semibold ${subtlePanel}`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Test Upcoming Alert</span>
          </button>
        </div>
      </div>

      {pushBannerMessage && (
        <div className="p-3.5 rounded-xl border border-sky-500/40 bg-sky-500/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 font-medium">
            <BellRing className="w-4 h-4 text-sky-500 shrink-0" />
            <span>{pushBannerMessage}</span>
          </div>
          <button
            onClick={() => setPushBannerMessage('')}
            className="text-slate-400 hover:text-slate-200 text-xs font-semibold"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 5 Cols: Create Task Form */}
        <form
          onSubmit={handleSubmit}
          className={`lg:col-span-5 p-6 rounded-xl border space-y-4 ${surfaceCard}`}
        >
          <h3 className="text-base font-bold">Add Study Task · ਨਵਾਂ ਪੜ੍ਹਾਈ ਟਾਸਕ ਜੋੜੋ</h3>

          <div>
            <label className="block text-xs font-semibold mb-1">Task Title</label>
            <input
              type="text"
              required
              placeholder="e.g., Practice 8-bit Binary to Hex conversions"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Notes / Study Goal</label>
            <textarea
              rows={2}
              placeholder="e.g., Complete Level 3 Logic Gate Truth Tables and score 80%+"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border text-sm ${subtlePanel}`}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Subject Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs ${subtlePanel}`}
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Binary & Assembly">Binary & Assembly</option>
                <option value="Algorithms">Algorithms</option>
                <option value="Discrete Math">Discrete Math & Logic</option>
                <option value="Practice Quiz">Practice Quiz</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                className={`w-full px-3 py-2 rounded-lg border text-xs ${subtlePanel}`}
              >
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Upcoming Due Date & Time</label>
            <input
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border text-xs font-mono ${subtlePanel}`}
            />
          </div>

          <label className="flex items-center gap-2 text-xs cursor-pointer">
            <input
              type="checkbox"
              checked={notifyEnabled}
              onChange={(e) => setNotifyEnabled(e.target.checked)}
              className="rounded"
            />
            <span>Notify me when this study task is upcoming</span>
          </label>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-sky-600 text-white text-xs font-bold hover:bg-sky-500 flex items-center justify-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Save Study Task</span>
          </button>
        </form>

        {/* Right 7 Cols: Task List & Filters */}
        <div className={`lg:col-span-7 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-bold">
              Scheduled Tasks ({filteredTasks.length})
            </h3>
            <div className={`flex items-center gap-1 p-1 rounded-lg border ${subtlePanel}`}>
              {(['all', 'pending', 'completed'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-colors ${
                    filterStatus === st ? 'bg-sky-600 text-white' : 'text-slate-500'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {filteredTasks.length === 0 ? (
            <div className={`p-8 rounded-xl border text-center text-sm text-slate-500 ${subtlePanel}`}>
              No study tasks in this view. Create one on the left to stay on track!
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((t) => (
                <div
                  key={t.id}
                  className={`p-4 rounded-xl border flex items-start justify-between gap-3 transition-colors ${subtlePanel}`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => onToggleTask(t.id, !t.completed)}
                      className="mt-0.5 text-sky-500 hover:text-sky-400 shrink-0"
                      aria-label={t.completed ? 'Mark task incomplete' : 'Mark task complete'}
                    >
                      {t.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          t.completed ? 'line-through text-slate-500' : ''
                        }`}
                      >
                        {t.title}
                      </div>
                      {t.description && (
                        <p className="text-xs text-slate-500 mt-0.5">{t.description}</p>
                      )}
                      {/* Clean unboxed metadata per Zero-Pill rule */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-2 font-mono">
                        <span>{t.category}</span>
                        <span aria-hidden="true">·</span>
                        <span
                          className={
                            t.priority === 'high'
                              ? 'text-rose-500 font-semibold'
                              : t.priority === 'medium'
                              ? 'text-amber-500'
                              : 'text-emerald-500'
                          }
                        >
                          Priority: {t.priority.toUpperCase()}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {t.dueDate.replace('T', ' ')}
                        </span>
                      </div>
                      {t.linkedLessonSlug && (
                        <button
                          onClick={() => onOpenLessonSlug(t.linkedLessonSlug!)}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-sky-500 hover:underline"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Open Linked Lesson</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onDeleteTask(t.id)}
                    className="text-slate-400 hover:text-rose-500 p-1"
                    title="Delete Task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
