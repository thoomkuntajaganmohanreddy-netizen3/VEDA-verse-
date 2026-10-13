import React, { useState, useEffect } from 'react';
import { EpicStory } from '../../types';
import { STORIES_DATA } from '../../data/seedData';
import { useUser } from '../../context/UserContext';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Award,
  BookOpen,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

export const StoriesView: React.FC = () => {
  const { addXp } = useUser();
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const [activeCardIdx, setActiveCardIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const currentStory: EpicStory = STORIES_DATA[activeStoryIdx] || STORIES_DATA[0];
  const totalCards = currentStory.cards.length;
  const currentCard = currentStory.cards[activeCardIdx];

  // Auto-advance timer (6 seconds per card in story mode)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      if (activeCardIdx < totalCards - 1) {
        setActiveCardIdx((prev) => prev + 1);
      } else {
        // Complete story, give 20 XP
        addXp(20);
        setIsAutoPlaying(false);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [activeCardIdx, isAutoPlaying, totalCards, addXp]);

  const handleNextCard = () => {
    if (activeCardIdx < totalCards - 1) {
      setActiveCardIdx((prev) => prev + 1);
    } else if (activeStoryIdx < STORIES_DATA.length - 1) {
      setActiveStoryIdx((prev) => prev + 1);
      setActiveCardIdx(0);
      setIsAutoPlaying(true);
    }
  };

  const handlePrevCard = () => {
    if (activeCardIdx > 0) {
      setActiveCardIdx((prev) => prev - 1);
    } else if (activeStoryIdx > 0) {
      setActiveStoryIdx((prev) => prev - 1);
      setActiveCardIdx(0);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>30-Second Micro-Narratives</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            Story Mode: Epics & Classics
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Swipeable, bite-sized episodes from the Ramayana, Mahabharata, and classical dramatists.
          </p>
        </div>

        {/* Stories Selector Carousel Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {STORIES_DATA.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => {
                setActiveStoryIdx(idx);
                setActiveCardIdx(0);
                setIsAutoPlaying(true);
              }}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeStoryIdx === idx
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-md shadow-rose-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <span>{story.title.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Modern Stories / Reels Style Player Card */}
      <div className="max-w-xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl min-h-[520px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
          {/* Top Progress Bars (Instagram Stories Style) */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-1.5">
              {currentStory.cards.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 rounded-full bg-slate-800 overflow-hidden"
                >
                  <div
                    className={`h-full bg-rose-400 transition-all duration-300 ${
                      idx < activeCardIdx
                        ? 'w-full'
                        : idx === activeCardIdx
                        ? isAutoPlaying
                          ? 'w-full duration-7000 ease-linear'
                          : 'w-1/2'
                        : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Story Top Info */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-rose-300 font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{currentStory.sourceText}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlaying((prev) => !prev)}
                  className="w-7 h-7 rounded-lg bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors"
                >
                  {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <span className="text-slate-500 font-mono text-[11px]">
                  {activeCardIdx + 1} / {totalCards}
                </span>
              </div>
            </div>
          </div>

          {/* Middle Card Content */}
          <div className="my-8 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-semibold text-xs tracking-wide">
              {currentCard.badge}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif leading-snug">
              {currentCard.headline}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentCard.content}
            </p>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1 mt-4">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Dharmic Insight / Lesson</span>
              </div>
              <p className="text-xs text-slate-200 italic font-serif">"{currentCard.lesson}"</p>
            </div>
          </div>

          {/* Bottom Navigation Tap Zones */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <button
              onClick={handlePrevCard}
              disabled={activeCardIdx === 0 && activeStoryIdx === 0}
              className="min-h-[44px] px-4 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNextCard}
              className="min-h-[44px] px-5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-rose-500/20 active:scale-95"
            >
              <span>{activeCardIdx < totalCards - 1 ? 'Next Step' : 'Next Story'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
