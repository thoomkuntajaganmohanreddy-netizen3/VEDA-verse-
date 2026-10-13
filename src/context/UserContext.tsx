import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { User as FirebaseUser, onAuthStateChanged } from 'firebase/auth';
import {
  auth,
  db,
  doc,
  getDoc,
  setDoc,
  signInWithGoogle,
  signOutUser,
  testConnection,
  handleFirestoreError,
  OperationType,
} from '../firebase';
import { UserStats } from '../types';

interface UserContextType {
  user: FirebaseUser | null;
  authLoading: boolean;
  stats: UserStats;
  addXp: (amount: number) => void;
  toggleBookmark: (itemId: string, itemType?: string, title?: string) => Promise<void>;
  isBookmarked: (itemId: string) => boolean;
  recordQuizCompletion: (quizId: string, score: number, total: number, xpEarned: number) => Promise<void>;
  recordFlashcardProgress: (deckId: string, known: number, total: number) => void;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  speakMantra: (lines: string[], rate: number, onLineChange?: (lineIdx: number) => void, onComplete?: () => void) => void;
  stopMantraSpeech: () => void;
  isSpeaking: boolean;
  currentSpeakingLine: number;
}

const DEFAULT_STATS: UserStats = {
  xp: 120,
  streakDays: 4,
  lastActiveDate: new Date().toISOString().split('T')[0],
  level: 'Shishya',
  bookmarks: ['gayatri-mantra', 'katha-upanishad', 'tulsi'],
  completedQuizzes: [],
  flashcardProgress: {},
};

const UserContext = createContext<UserContextType | undefined>(undefined);

function calculateLevel(xp: number): 'Shishya' | 'Sadhaka' | 'Vidwan' | 'Rishi' {
  if (xp >= 1000) return 'Rishi';
  if (xp >= 500) return 'Vidwan';
  if (xp >= 200) return 'Sadhaka';
  return 'Shishya';
}

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem('veda_verse_stats');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading stats from localStorage', e);
    }
    return DEFAULT_STATS;
  });

  // Audio speech synthesis states
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentSpeakingLine, setCurrentSpeakingLine] = useState(-1);

  // Apply dark mode class to html document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Persist stats to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem('veda_verse_stats', JSON.stringify(stats));
    } catch (e) {
      console.error('Error saving stats to localStorage', e);
    }
  }, [stats]);

  // Check and increment daily streak on new day
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastActiveDate !== today) {
      setStats((prev) => {
        const lastDate = new Date(prev.lastActiveDate);
        const currentDate = new Date(today);
        const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
        let newStreak = prev.streakDays;
        if (diffDays === 1) {
          newStreak += 1;
        } else if (diffDays > 1) {
          newStreak = 1;
        }
        return {
          ...prev,
          streakDays: newStreak,
          lastActiveDate: today,
        };
      });
    }
  }, [stats.lastActiveDate]);

  // Listen to Firebase Auth state
  useEffect(() => {
    testConnection();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);

      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setStats((prev) => ({
              ...prev,
              xp: Math.max(prev.xp, data.xp || 0),
              streakDays: Math.max(prev.streakDays, data.streakDays || 1),
              level: calculateLevel(Math.max(prev.xp, data.xp || 0)),
            }));
          } else {
            // First time login - seed initial user doc
            await setDoc(userDocRef, {
              uid: currentUser.uid,
              displayName: currentUser.displayName || 'Vedic Seeker',
              email: currentUser.email || '',
              xp: stats.xp,
              streakDays: stats.streakDays,
              lastActiveDate: stats.lastActiveDate,
              level: stats.level,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            });
          }
        } catch (error) {
          console.warn('Note: Firestore user sync note:', error);
        }
      }
    });

    return () => unsubscribe();
  }, [stats.xp, stats.streakDays, stats.lastActiveDate, stats.level]);

  const addXp = useCallback((amount: number) => {
    setStats((prev) => {
      const newXp = prev.xp + amount;
      const newLevel = calculateLevel(newXp);
      const updated = {
        ...prev,
        xp: newXp,
        level: newLevel,
      };

      // Asynchronously update Firestore if logged in
      if (user) {
        setDoc(
          doc(db, 'users', user.uid),
          {
            xp: newXp,
            level: newLevel,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        ).catch((err) => {
          console.warn('Firestore sync error:', err);
        });
      }

      return updated;
    });
  }, [user]);

  const toggleBookmark = useCallback(
    async (itemId: string, itemType: string = 'mantra', title: string = 'Item') => {
      setStats((prev) => {
        const exists = prev.bookmarks.includes(itemId);
        const nextBookmarks = exists
          ? prev.bookmarks.filter((id) => id !== itemId)
          : [...prev.bookmarks, itemId];
        return {
          ...prev,
          bookmarks: nextBookmarks,
        };
      });

      if (user) {
        try {
          const bookmarkDocRef = doc(db, 'users', user.uid, 'bookmarks', itemId);
          if (stats.bookmarks.includes(itemId)) {
            // Delete
            await setDoc(bookmarkDocRef, { deleted: true }, { merge: true });
          } else {
            // Add
            await setDoc(bookmarkDocRef, {
              userId: user.uid,
              itemId,
              itemType,
              title,
              createdAt: new Date().toISOString(),
            });
          }
        } catch (e) {
          console.warn('Bookmark sync note:', e);
        }
      }
    },
    [user, stats.bookmarks]
  );

  const isBookmarked = useCallback(
    (itemId: string) => {
      return stats.bookmarks.includes(itemId);
    },
    [stats.bookmarks]
  );

  const recordQuizCompletion = useCallback(
    async (quizId: string, score: number, total: number, xpEarned: number) => {
      addXp(xpEarned);
      setStats((prev) => ({
        ...prev,
        completedQuizzes: prev.completedQuizzes.includes(quizId)
          ? prev.completedQuizzes
          : [...prev.completedQuizzes, quizId],
      }));

      if (user) {
        try {
          const attemptId = `quiz_${Date.now()}`;
          const attemptRef = doc(db, 'users', user.uid, 'quiz_attempts', attemptId);
          await setDoc(attemptRef, {
            userId: user.uid,
            quizId,
            score,
            total,
            xpEarned,
            completedAt: new Date().toISOString(),
          });
        } catch (e) {
          console.warn('Quiz attempt sync note:', e);
        }
      }
    },
    [addXp, user]
  );

  const recordFlashcardProgress = useCallback((deckId: string, known: number, total: number) => {
    setStats((prev) => ({
      ...prev,
      flashcardProgress: {
        ...prev.flashcardProgress,
        [deckId]: { known, total },
      },
    }));
  }, []);

  const login = async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      console.error('Login error', e);
    }
  };

  const logout = async () => {
    try {
      await signOutUser();
    } catch (e) {
      console.error('Logout error', e);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // High-fidelity Speech Synthesis for Sanskrit Mantras
  const stopMantraSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setCurrentSpeakingLine(-1);
  }, []);

  const speakMantra = useCallback(
    (
      lines: string[],
      rate: number = 0.9,
      onLineChange?: (lineIdx: number) => void,
      onComplete?: () => void
    ) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        console.warn('SpeechSynthesis not available in this browser');
        return;
      }

      window.speechSynthesis.cancel();

      if (!lines || lines.length === 0) return;

      setIsSpeaking(true);
      setCurrentSpeakingLine(0);
      if (onLineChange) onLineChange(0);

      const voices = window.speechSynthesis.getVoices();
      // Try to find Hindi or Indian English voice for authentic phonetics
      const indianVoice =
        voices.find((v) => v.lang.startsWith('hi') || v.lang.startsWith('sa')) ||
        voices.find((v) => v.lang.includes('IN')) ||
        voices[0];

      let currentIndex = 0;

      function speakNext() {
        if (currentIndex >= lines.length) {
          setIsSpeaking(false);
          setCurrentSpeakingLine(-1);
          if (onComplete) onComplete();
          return;
        }

        const lineText = lines[currentIndex];
        setCurrentSpeakingLine(currentIndex);
        if (onLineChange) onLineChange(currentIndex);

        const utterance = new SpeechSynthesisUtterance(lineText);
        if (indianVoice) {
          utterance.voice = indianVoice;
        }
        utterance.rate = Math.max(0.6, Math.min(rate, 1.4));
        utterance.pitch = 0.95; // Deeper resonant chanting tone

        utterance.onend = () => {
          currentIndex++;
          // Small paused breath between lines
          setTimeout(speakNext, 350);
        };

        utterance.onerror = (e) => {
          console.warn('Speech synthesis utterance error:', e);
          setIsSpeaking(false);
          setCurrentSpeakingLine(-1);
        };

        window.speechSynthesis.speak(utterance);
      }

      speakNext();
    },
    []
  );

  return (
    <UserContext.Provider
      value={{
        user,
        authLoading,
        stats,
        addXp,
        toggleBookmark,
        isBookmarked,
        recordQuizCompletion,
        recordFlashcardProgress,
        login,
        logout,
        isDarkMode,
        toggleDarkMode,
        speakMantra,
        stopMantraSpeech,
        isSpeaking,
        currentSpeakingLine,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
