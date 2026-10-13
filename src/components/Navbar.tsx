import React from 'react';
import { ViewMode } from '../types';
import { useUser } from '../context/UserContext';
import { Search, Sparkles, Moon, Sun, User, Award, Flame } from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  onOpenSearch: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenProfile,
}) => {
  const { user, stats, isDarkMode, toggleDarkMode } = useUser();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-amber-900/20 text-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 md:px-8 h-16">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
            <span className="font-serif text-lg leading-none">ॐ</span>
          </div>
          <span className="font-serif font-bold text-lg md:text-xl tracking-wider bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent whitespace-nowrap shrink-0">
            VEDA VERSE
          </span>
        </button>

        {/* Zone 2: 4-5 Concise Single-line Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigate('mantras')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 ${
              currentView === 'mantras' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Mantras
          </button>
          <button
            onClick={() => onNavigate('scriptures')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 ${
              currentView === 'scriptures' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Scriptures
          </button>
          <button
            onClick={() => onNavigate('temples')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 ${
              currentView === 'temples' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Temples
          </button>
          <button
            onClick={() => onNavigate('bioscience')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-teal-400 ${
              currentView === 'bioscience' ? 'text-teal-400 font-semibold' : ''
            }`}
          >
            Ayurveda Science
          </button>
          <button
            onClick={() => onNavigate('stories')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 ${
              currentView === 'stories' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => onNavigate('learning')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 ${
              currentView === 'learning' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Study Tools
          </button>
          <button
            onClick={() => onNavigate('guru')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-colors ${
              currentView === 'guru'
                ? 'text-amber-400 font-semibold'
                : 'text-amber-300/90 hover:text-amber-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            AI Guru
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action Lockup & Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Global Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search Veda Verse"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark/light mode"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User Profile / Auth CTA */}
          <button
            onClick={onOpenProfile}
            aria-label="User Profile"
            className="min-h-[40px] px-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-amber-900/40 hover:border-amber-500/60 flex items-center gap-2.5 transition-all text-xs font-medium text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{stats.streakDays}d</span>
            </div>
            <div className="h-3 w-px bg-slate-800" />
            <div className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{stats.xp} XP</span>
            </div>
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'Profile'}
                className="w-5 h-5 rounded-full object-cover ml-0.5 border border-amber-500/40"
              />
            ) : (
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px] font-bold">
                <User className="w-3 h-3" />
              </div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
