import React, { useState } from 'react';
import { ViewMode } from '../../types';
import { useUser } from '../../context/UserContext';
import { MANTRAS_DATA } from '../../data/seedData';
import {
  Flame,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  BookOpen,
  Landmark,
  Leaf,
  Layers,
  GraduationCap,
  Play,
  RotateCcw,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewMode) => void;
  onSelectMantra?: (mantraId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectMantra }) => {
  const { stats, speakMantra, stopMantraSpeech, isSpeaking, currentSpeakingLine } = useUser();
  const [dailyMantra] = useState(() => MANTRAS_DATA[0]); // Gayatri Mantra
  const [audioSpeed, setAudioSpeed] = useState<number>(0.9);

  // Level progress math
  const getNextLevelXp = (level: string) => {
    switch (level) {
      case 'Shishya':
        return 200;
      case 'Sadhaka':
        return 500;
      case 'Vidwan':
        return 1000;
      default:
        return 2000;
    }
  };

  const nextThreshold = getNextLevelXp(stats.level);
  const progressPercent = Math.min(100, Math.round((stats.xp / nextThreshold) * 100));

  const handlePlayDailyShloka = () => {
    if (isSpeaking) {
      stopMantraSpeech();
    } else {
      speakMantra(dailyMantra.devanagari, audioSpeed);
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* 1. Hero Section with Generated Mandala Backing */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-900/40 bg-slate-950 p-6 md:p-12 shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen pointer-events-none">
          <img
            src="/src/assets/images/veda_hero_mandala_1791912272945.jpg"
            alt="Vedic Sri Yantra Mandala"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Timeless Heritage · Reimagined for Gen Z</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            Ancient wisdom. <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Your generation.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover the cosmic poetry of the Vedas, chant sacred mantras with phonetic cadence, explore thousand-year-old temples, and connect Vedic botanical science with modern biochemistry.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('mantras')}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <span>Explore Mantras</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('guru')}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-amber-900/50 hover:border-amber-500/50 font-medium text-sm flex items-center gap-2 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ask AI Guru</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Gamified Streaks & XP Status Ribbon */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-6 backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {/* Streak Counter */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Flame className="w-6 h-6 fill-amber-500 text-amber-500 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-mono tracking-tight">
                {stats.streakDays} Days
              </div>
              <div className="text-xs text-slate-400">Daily Study Streak</div>
            </div>
          </div>

          {/* Level Status */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <GraduationCap className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>{stats.level}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
                  Stage
                </span>
              </div>
              <div className="text-xs text-slate-400">Vedic Learning Rank</div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Mastery XP</span>
              <span className="text-amber-400 font-mono font-bold">
                {stats.xp} / {nextThreshold} XP
              </span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-teal-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 flex justify-between">
              <span>Next rank: Vidwan</span>
              <span>{100 - progressPercent}% remaining</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Shloka of the Day Card with Chant-Along Speech */}
      <section className="bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-amber-950/20 border border-amber-900/30 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span>Shloka of the Day</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400 font-mono text-[11px]">{dailyMantra.vedaSource}</span>
            </div>
            <h2 className="text-xl font-bold text-white font-serif">{dailyMantra.title}</h2>
          </div>

          {/* Audio Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs">
              <button
                onClick={() => setAudioSpeed(0.75)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  audioSpeed === 0.75 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                0.75x
              </button>
              <button
                onClick={() => setAudioSpeed(0.9)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  audioSpeed === 0.9 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                1.0x
              </button>
              <button
                onClick={() => setAudioSpeed(1.15)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  audioSpeed === 1.15 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                1.2x
              </button>
            </div>

            <button
              onClick={handlePlayDailyShloka}
              className={`min-h-[44px] px-4 rounded-xl flex items-center gap-2 font-bold text-xs transition-all shadow-md active:scale-95 ${
                isSpeaking
                  ? 'bg-rose-500 text-white shadow-rose-500/20'
                  : 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-amber-500/20'
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Stop</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Chant Along</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Shloka Devanagari lines with real-time audio highlight */}
        <div className="space-y-3 my-6">
          {dailyMantra.devanagari.map((line, idx) => {
            const isLineActive = isSpeaking && currentSpeakingLine === idx;
            return (
              <div
                key={idx}
                className={`text-lg sm:text-2xl font-serif tracking-wide py-2 px-3 rounded-xl transition-all duration-300 ${
                  isLineActive
                    ? 'bg-amber-500/20 text-amber-300 font-bold shadow-sm shadow-amber-500/20 scale-[1.01]'
                    : 'text-slate-100 hover:text-amber-200'
                }`}
              >
                {line}
              </div>
            );
          })}
        </div>

        {/* Transliteration */}
        <div className="text-xs sm:text-sm text-amber-200/80 font-mono italic my-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
          {dailyMantra.transliteration.join(' ')}
        </div>

        {/* Translation */}
        <p className="text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
          <strong className="text-amber-300 font-semibold">Meaning: </strong>
          {dailyMantra.meaning}
        </p>

        <div className="mt-4 pt-3 flex justify-between items-center text-xs text-slate-400">
          <span>{dailyMantra.deityOrTheme}</span>
          <button
            onClick={() => {
              if (onSelectMantra) onSelectMantra(dailyMantra.id);
              onNavigate('mantras');
            }}
            className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
          >
            <span>Word-by-word sandhi breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. Quick Access Category Bento Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white font-serif tracking-tight">Explore Vedic Dimensions</h2>
          <span className="text-xs text-slate-400">Choose a path to master</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mantras */}
          <button
            onClick={() => onNavigate('mantras')}
            className="group text-left p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all shadow-md hover:shadow-amber-500/5 flex flex-col justify-between h-48 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Volume2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500">15+ Hymns</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                Mantra Library
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Gayatri, Mahamrityunjaya, Shanti Mantras with chant-along audio & word-by-word sandhi breakdown.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-400">
              <span>Start Chanting</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Scriptures & Manuscripts */}
          <button
            onClick={() => onNavigate('scriptures')}
            className="group text-left p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all shadow-md hover:shadow-amber-500/5 flex flex-col justify-between h-48 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500">Public Domain</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                Scriptures & Manuscripts
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Four Vedas, Principal Upanishads, Gita, and rare birch-bark & palm-leaf manuscript archives.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-blue-400">
              <span>Read Archives</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Temples */}
          <button
            onClick={() => onNavigate('temples')}
            className="group text-left p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all shadow-md hover:shadow-amber-500/5 flex flex-col justify-between h-48 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500">Interactive Map</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                Temple Architecture
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Nagara, Dravida, and Vesara styles, Vastu Purusha Mandala geometry, and iconic heritage sites.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-400">
              <span>Explore Temples</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Vedic Bioscience (Ayurveda) */}
          <button
            onClick={() => onNavigate('bioscience')}
            className="group text-left p-5 rounded-2xl bg-slate-900/90 border border-teal-900/40 hover:border-teal-500/50 hover:bg-slate-850 transition-all shadow-md hover:shadow-teal-500/5 flex flex-col justify-between h-48 focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-teal-400 font-bold">PubChem Sync</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-white group-hover:text-teal-400 transition-colors">
                Ayurveda Bioscience
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Atharvaveda herbs mapped directly to chemical structures, active molecules, and clinical pharmacology.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-teal-400">
              <span>Analyze Botanicals</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Stories & Epics */}
          <button
            onClick={() => onNavigate('stories')}
            className="group text-left p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all shadow-md hover:shadow-amber-500/5 flex flex-col justify-between h-48 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500">Shorts / Reels</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-white group-hover:text-rose-400 transition-colors">
                Story Mode
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                30-second vertical swipe cards covering Nachiketa, Samudra Manthan, Kalidasa, and Panchatantra.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-rose-400">
              <span>Watch Stories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Learning Tools */}
          <button
            onClick={() => onNavigate('learning')}
            className="group text-left p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-850 transition-all shadow-md hover:shadow-purple-500/5 flex flex-col justify-between h-48 focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-purple-400 font-bold">Earn XP</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-white group-hover:text-purple-400 transition-colors">
                Decks, Slides & Quizzes
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Spaced-repetition flashcards, full-screen slide decks, timeline mind maps, and interactive quizzes.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-purple-400">
              <span>Practice Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};
