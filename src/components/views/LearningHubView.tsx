import React, { useState, useEffect } from 'react';
import {
  FLASHCARDS_DECKS,
  SLIDE_DECKS,
  QUIZZES_DATA,
  VEDIC_TIMELINE,
} from '../../data/seedData';
import { FlashcardDeck, SlideDeck, Quiz } from '../../types';
import { useUser } from '../../context/UserContext';
import {
  Layers,
  Presentation,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCw,
  Maximize2,
  Minimize2,
  Award,
  HelpCircle,
  Check,
  X,
  Compass,
} from 'lucide-react';

export const LearningHubView: React.FC = () => {
  const { addXp, recordQuizCompletion } = useUser();
  const [activeTab, setActiveTab] = useState<'flashcards' | 'slides' | 'quizzes' | 'timeline'>(
    'flashcards'
  );

  // 1. Flashcard States
  const [activeDeck, setActiveDeck] = useState<FlashcardDeck>(FLASHCARDS_DECKS[0]);
  const [currentCardIdx, setCurrentCardIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCount, setKnownCount] = useState<number>(0);
  const [deckCompleted, setDeckCompleted] = useState<boolean>(false);

  // 2. Slide Deck States
  const [activeSlideDeck, setActiveSlideDeck] = useState<SlideDeck>(SLIDE_DECKS[0]);
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  // 3. Quiz States
  const [activeQuiz, setActiveQuiz] = useState<Quiz>(QUIZZES_DATA[0]);
  const [currentQuizQIdx, setCurrentQuizQIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Keyboard controls for slides
  useEffect(() => {
    if (activeTab !== 'slides') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlideIdx((prev) => Math.min(prev + 1, activeSlideDeck.slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIdx((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, activeSlideDeck, isFullScreen]);

  // Flashcard Handlers
  const handleMarkCard = (known: boolean) => {
    if (known) setKnownCount((prev) => prev + 1);

    if (currentCardIdx < activeDeck.cards.length - 1) {
      setIsFlipped(false);
      setCurrentCardIdx((prev) => prev + 1);
    } else {
      setDeckCompleted(true);
      addXp(30); // 30 XP for completing a deck
    }
  };

  const handleResetDeck = () => {
    setCurrentCardIdx(0);
    setIsFlipped(false);
    setKnownCount(0);
    setDeckCompleted(false);
  };

  // Quiz Handlers
  const handleSelectOption = (index: number) => {
    if (showExplanation) return;
    setSelectedOption(index);
    setShowExplanation(true);

    const isCorrect = index === activeQuiz.questions[currentQuizQIdx].correctIndex;
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizQIdx < activeQuiz.questions.length - 1) {
      setCurrentQuizQIdx((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
      const earnedXp = (quizScore + (selectedOption === activeQuiz.questions[currentQuizQIdx].correctIndex ? 1 : 0)) * 25;
      recordQuizCompletion(activeQuiz.id, quizScore, activeQuiz.questions.length, earnedXp);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuizQIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Interactive Mastery Engine</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            Learning Formats
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Spaced repetition flashcards, full-screen slide presentations, quizzes, and historical mind maps.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`min-h-[38px] px-3.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'flashcards'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Flashcards</span>
          </button>
          <button
            onClick={() => setActiveTab('slides')}
            className={`min-h-[38px] px-3.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'slides'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Slide Decks</span>
          </button>
          <button
            onClick={() => setActiveTab('quizzes')}
            className={`min-h-[38px] px-3.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'quizzes'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Quizzes</span>
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`min-h-[38px] px-3.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'timeline'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Timeline</span>
          </button>
        </div>
      </div>

      {/* 1. FLASHCARDS TAB */}
      {activeTab === 'flashcards' && (
        <div className="space-y-6">
          {/* Deck Selector Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FLASHCARDS_DECKS.map((deck) => (
              <button
                key={deck.id}
                onClick={() => {
                  setActiveDeck(deck);
                  handleResetDeck();
                }}
                className={`min-h-[38px] px-4 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  activeDeck.id === deck.id
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span>{deck.title}</span>
                <span className="ml-1.5 opacity-60">({deck.cards.length})</span>
              </button>
            ))}
          </div>

          <div className="max-w-xl mx-auto">
            {!deckCompleted ? (
              <div className="space-y-6">
                {/* Deck Progress Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Card {currentCardIdx + 1} of {activeDeck.cards.length}</span>
                  <span className="font-mono text-purple-400 font-bold">{knownCount} Mastered</span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full transition-all"
                    style={{
                      width: `${((currentCardIdx + 1) / activeDeck.cards.length) * 100}%`,
                    }}
                  />
                </div>

                {/* 3D Flip Card */}
                <div
                  onClick={() => setIsFlipped((prev) => !prev)}
                  className="cursor-pointer perspective-1000 min-h-[320px] rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 p-8 flex flex-col justify-between items-center text-center shadow-2xl transition-all relative overflow-hidden group"
                >
                  <div className="text-[11px] font-semibold text-purple-400 uppercase tracking-widest">
                    {isFlipped ? 'Answer & Meaning' : 'Concept / Question (Tap to flip)'}
                  </div>

                  <div className="my-auto space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                      {isFlipped
                        ? activeDeck.cards[currentCardIdx].back
                        : activeDeck.cards[currentCardIdx].front}
                    </h3>

                    {activeDeck.cards[currentCardIdx].devanagari && !isFlipped && (
                      <div className="text-xl font-serif text-amber-300">
                        {activeDeck.cards[currentCardIdx].devanagari}
                      </div>
                    )}

                    {activeDeck.cards[currentCardIdx].hint && !isFlipped && (
                      <div className="text-xs text-slate-400 italic">
                        Hint: {activeDeck.cards[currentCardIdx].hint}
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                    <span>Tap card to reveal reverse side</span>
                  </div>
                </div>

                {/* Spaced-Repetition Feedback Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleMarkCard(false)}
                    className="min-h-[48px] rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/40 text-slate-300 hover:text-rose-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors active:scale-98"
                  >
                    <X className="w-4 h-4 text-rose-400" />
                    <span>Review Again</span>
                  </button>
                  <button
                    onClick={() => handleMarkCard(true)}
                    className="min-h-[48px] rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-600/20 active:scale-98"
                  >
                    <Check className="w-4 h-4" />
                    <span>I Know This</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Deck Completed State */
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 shadow-xl">
                <div className="w-16 h-16 rounded-3xl bg-purple-500/20 text-purple-400 mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">Deck Completed!</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  You reviewed all {activeDeck.cards.length} cards and earned{' '}
                  <strong className="text-amber-400">+30 Mastery XP</strong>.
                </p>
                <button
                  onClick={handleResetDeck}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md transition-all hover:bg-purple-500 active:scale-95"
                >
                  Practice Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. SLIDE DECKS TAB */}
      {activeTab === 'slides' && (
        <div className="space-y-6">
          {/* Deck Selectors */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SLIDE_DECKS.map((deck) => (
              <button
                key={deck.id}
                onClick={() => {
                  setActiveSlideDeck(deck);
                  setCurrentSlideIdx(0);
                }}
                className={`min-h-[38px] px-4 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  activeSlideDeck.id === deck.id
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span>{deck.title}</span>
              </button>
            ))}
          </div>

          {/* Swipeable Slide Canvas */}
          <div
            className={`transition-all duration-300 ${
              isFullScreen
                ? 'fixed inset-0 z-50 bg-slate-950 p-8 flex flex-col justify-between'
                : 'max-w-3xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 shadow-2xl space-y-8 min-h-[420px] flex flex-col justify-between'
            }`}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
                  {activeSlideDeck.topic}
                </span>
                <span className="text-slate-500 mx-2">·</span>
                <span className="text-xs text-slate-400">
                  Slide {currentSlideIdx + 1} of {activeSlideDeck.slides.length}
                </span>
              </div>

              <button
                onClick={() => setIsFullScreen((prev) => !prev)}
                className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
              >
                {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Slide Body */}
            <div className="space-y-6 my-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif leading-snug">
                {activeSlideDeck.slides[currentSlideIdx].title}
              </h2>

              <ul className="space-y-3">
                {activeSlideDeck.slides[currentSlideIdx].keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {activeSlideDeck.slides[currentSlideIdx].quote && (
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-amber-300 font-serif italic">
                  "{activeSlideDeck.slides[currentSlideIdx].quote}"
                </div>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentSlideIdx((prev) => Math.max(0, prev - 1))}
                disabled={currentSlideIdx === 0}
                className="min-h-[44px] px-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev Slide</span>
              </button>

              <div className="text-xs text-slate-500 hidden sm:block">
                Use Left / Right arrow keys to navigate
              </div>

              <button
                onClick={() =>
                  setCurrentSlideIdx((prev) =>
                    Math.min(activeSlideDeck.slides.length - 1, prev + 1)
                  )
                }
                disabled={currentSlideIdx === activeSlideDeck.slides.length - 1}
                className="min-h-[44px] px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                <span>Next Slide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. QUIZZES TAB */}
      {activeTab === 'quizzes' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {QUIZZES_DATA.map((quiz) => (
              <button
                key={quiz.id}
                onClick={() => {
                  setActiveQuiz(quiz);
                  handleResetQuiz();
                }}
                className={`min-h-[38px] px-4 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  activeQuiz.id === quiz.id
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span>{quiz.title}</span>
              </button>
            ))}
          </div>

          <div className="max-w-xl mx-auto">
            {!quizFinished ? (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-4">
                  <span className="text-purple-400 font-semibold">{activeQuiz.title}</span>
                  <span className="text-slate-400">
                    Question {currentQuizQIdx + 1} of {activeQuiz.questions.length}
                  </span>
                </div>

                {/* Question */}
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif leading-snug">
                  {activeQuiz.questions[currentQuizQIdx].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {activeQuiz.questions[currentQuizQIdx].options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === activeQuiz.questions[currentQuizQIdx].correctIndex;
                    let style = 'bg-slate-950 border-slate-800 text-slate-200 hover:border-purple-500/50';

                    if (showExplanation) {
                      if (isCorrect) {
                        style = 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-semibold';
                      } else if (isSelected) {
                        style = 'bg-rose-950/40 border-rose-500 text-rose-300';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={showExplanation}
                        className={`w-full min-h-[48px] p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${style}`}
                      >
                        <span>{option}</span>
                        {showExplanation && isCorrect && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                        {showExplanation && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {showExplanation && (
                  <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-900/40 space-y-1.5">
                    <div className="text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                      Explanation & Citation
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {activeQuiz.questions[currentQuizQIdx].explanation}
                    </p>
                  </div>
                )}

                {/* Next Button */}
                {showExplanation && (
                  <button
                    onClick={handleNextQuizQuestion}
                    className="w-full min-h-[44px] rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <span>
                      {currentQuizQIdx < activeQuiz.questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              /* Quiz Finished Summary */
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 shadow-xl">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">Quiz Completed!</h3>
                <div className="text-4xl font-extrabold text-amber-400 font-mono">
                  {quizScore} / {activeQuiz.questions.length}
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Great devotion to knowledge! You earned{' '}
                  <strong className="text-amber-400">+{quizScore * 25} XP</strong>.
                </p>
                <button
                  onClick={handleResetQuiz}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md transition-all hover:bg-purple-500 active:scale-95"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. TIMELINE TAB */}
      {activeTab === 'timeline' && (
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-1 mb-8">
            <h3 className="text-xl font-bold text-white font-serif">Chronology of Vedic Thought</h3>
            <p className="text-xs text-slate-400">From the early river hymns to the classical commentators</p>
          </div>

          <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-8 pb-4">
            {VEDIC_TIMELINE.map((event, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Timeline node */}
                <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-purple-500 group-hover:scale-125 transition-transform" />

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-purple-500/50 transition-all space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                    <span className="font-bold text-purple-400">{event.era}</span>
                    <span className="font-mono text-slate-500">{event.yearRange}</span>
                  </div>

                  <h4 className="text-base font-bold text-white font-serif">{event.milestone}</h4>

                  <p className="text-xs text-slate-300 leading-relaxed">{event.description}</p>

                  <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                    <strong>Canonical Works: </strong>
                    {event.canonicalTexts.join(' · ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
