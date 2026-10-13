import React from 'react';
import { ViewMode } from '../types';
import { Home, Flame, BookOpen, Landmark, Bot, Layers } from 'lucide-react';

interface BottomNavProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate }) => {
  const tabs = [
    { id: 'home' as ViewMode, label: 'Home', icon: Home },
    { id: 'mantras' as ViewMode, label: 'Mantras', icon: Flame },
    { id: 'scriptures' as ViewMode, label: 'Scriptures', icon: BookOpen },
    { id: 'temples' as ViewMode, label: 'Heritage', icon: Landmark },
    { id: 'learning' as ViewMode, label: 'Study', icon: Layers },
    { id: 'guru' as ViewMode, label: 'AI Guru', icon: Bot },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1.5 shadow-2xl shadow-black/80">
      <div className="grid grid-cols-6 items-center max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`min-h-[48px] flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
                isActive
                  ? 'text-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform ${
                  isActive ? 'bg-amber-500/15 scale-110' : ''
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
