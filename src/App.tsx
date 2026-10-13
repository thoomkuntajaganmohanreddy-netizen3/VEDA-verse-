import React, { useState } from 'react';
import { UserProvider, useUser } from './context/UserContext';
import { ViewMode } from './types';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './components/views/HomeView';
import { MantraLibraryView } from './components/views/MantraLibraryView';
import { ScripturesView } from './components/views/ScripturesView';
import { TemplesView } from './components/views/TemplesView';
import { BioscienceView } from './components/views/BioscienceView';
import { StoriesView } from './components/views/StoriesView';
import { LearningHubView } from './components/views/LearningHubView';
import { AiGuruView } from './components/views/AiGuruView';
import { SanskritCornerView } from './components/views/SanskritCornerView';
import { ProfileModal } from './components/modals/ProfileModal';
import { GlobalSearchModal } from './components/modals/GlobalSearchModal';
import { AboutSourcesModal } from './components/modals/AboutSourcesModal';
import { Sparkles, Heart, ShieldCheck, BookOpen, Volume2, Landmark } from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedMantraId, setSelectedMantraId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isAboutSourcesOpen, setIsAboutSourcesOpen] = useState<boolean>(false);

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMantra = (mantraId: string) => {
    setSelectedMantraId(mantraId);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar adhering to Top Bar Contract */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 pt-6 sm:pt-8 pb-24 lg:pb-12">
        {currentView === 'home' && (
          <HomeView onNavigate={handleNavigate} onSelectMantra={handleSelectMantra} />
        )}
        {currentView === 'mantras' && (
          <MantraLibraryView initialMantraId={selectedMantraId} />
        )}
        {currentView === 'scriptures' && <ScripturesView />}
        {currentView === 'temples' && <TemplesView />}
        {currentView === 'bioscience' && <BioscienceView />}
        {currentView === 'stories' && <StoriesView />}
        {currentView === 'learning' && <LearningHubView />}
        {currentView === 'guru' && <AiGuruView />}
        {currentView === 'sanskrit' && <SanskritCornerView />}
      </main>

      {/* Polished Editorial Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/90 text-slate-400 py-10 px-4 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          {/* Brand & Mission */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold font-serif text-sm">
              ॐ
            </div>
            <div>
              <span className="font-bold text-white font-serif tracking-wider">VEDA VERSE</span>
              <span className="mx-2 text-slate-700">·</span>
              <span className="text-slate-400">Ancient wisdom for the modern generation.</span>
            </div>
          </div>

          {/* Quick Footer Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <button
              onClick={() => handleNavigate('mantras')}
              className="hover:text-amber-400 transition-colors"
            >
              Mantras
            </button>
            <button
              onClick={() => handleNavigate('scriptures')}
              className="hover:text-amber-400 transition-colors"
            >
              Scriptures
            </button>
            <button
              onClick={() => handleNavigate('temples')}
              className="hover:text-amber-400 transition-colors"
            >
              Temples
            </button>
            <button
              onClick={() => handleNavigate('bioscience')}
              className="hover:text-teal-400 transition-colors"
            >
              Ayurveda Science
            </button>
            <button
              onClick={() => handleNavigate('sanskrit')}
              className="hover:text-amber-400 transition-colors"
            >
              Sanskrit Alphabet
            </button>
            <button
              onClick={() => setIsAboutSourcesOpen(true)}
              className="text-amber-400/90 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About & Sources</span>
            </button>
          </div>

          {/* Copyright & Respectful Disclaimer */}
          <div className="text-slate-500 text-[11px] text-center md:text-right">
            Public-domain scholarly sources · Non-sectarian cultural education
          </div>
        </div>
      </footer>

      {/* Thumb-friendly Fixed Bottom Bar for Mobile Viewports */}
      <BottomNav currentView={currentView} onNavigate={handleNavigate} />

      {/* Modals */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onNavigate={handleNavigate}
        onSelectMantra={handleSelectMantra}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onSelectMantra={handleSelectMantra}
      />

      <AboutSourcesModal
        isOpen={isAboutSourcesOpen}
        onClose={() => setIsAboutSourcesOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
