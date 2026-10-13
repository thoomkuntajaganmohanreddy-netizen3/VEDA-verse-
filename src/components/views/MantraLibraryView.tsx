import React, { useState } from 'react';
import { Mantra } from '../../types';
import { MANTRAS_DATA } from '../../data/seedData';
import { useUser } from '../../context/UserContext';
import {
  Volume2,
  VolumeX,
  Play,
  Bookmark,
  Search,
  Sparkles,
  ArrowLeft,
  Check,
  Copy,
  Sliders,
} from 'lucide-react';

interface MantraLibraryViewProps {
  initialMantraId?: string | null;
}

export const MantraLibraryView: React.FC<MantraLibraryViewProps> = ({ initialMantraId }) => {
  const {
    isBookmarked,
    toggleBookmark,
    speakMantra,
    stopMantraSpeech,
    isSpeaking,
    currentSpeakingLine,
    addXp,
  } = useUser();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMantra, setActiveMantra] = useState<Mantra>(() => {
    if (initialMantraId) {
      const found = MANTRAS_DATA.find((m) => m.id === initialMantraId);
      if (found) return found;
    }
    return MANTRAS_DATA[0];
  });
  const [audioSpeed, setAudioSpeed] = useState<number>(0.9);
  const [copied, setCopied] = useState<boolean>(false);

  const categories = [
    'All',
    'Gayatri',
    'Rigveda',
    'Yajurveda',
    'Samaveda',
    'Atharvaveda',
    'Shanti',
    'Stotra',
    'Upanishad',
  ];

  const filteredMantras = MANTRAS_DATA.filter((m) => {
    const matchesCategory =
      selectedCategory === 'All' || m.category.toLowerCase() === selectedCategory.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      m.title.toLowerCase().includes(query) ||
      m.meaning.toLowerCase().includes(query) ||
      m.deityOrTheme.toLowerCase().includes(query) ||
      m.devanagari.some((line) => line.includes(query)) ||
      m.transliteration.some((line) => line.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const handlePlayChant = (mantra: Mantra) => {
    if (isSpeaking) {
      stopMantraSpeech();
    } else {
      speakMantra(mantra.devanagari, audioSpeed, undefined, () => {
        // Reward 15 XP for completing a chant!
        addXp(15);
      });
    }
  };

  const handleCopy = () => {
    const textToCopy = `${activeMantra.title}\n\n${activeMantra.devanagari.join(
      '\n'
    )}\n\n${activeMantra.transliteration.join('\n')}\n\nMeaning:\n${activeMantra.meaning}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Sacred Sonic Architecture</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            Vedic Mantra Library
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Chant along with precision phonetics, sandhi analysis, and neuro-acoustic stillness.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mantras, deity..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all"
          />
        </div>
      </div>

      {/* Category Filter Pills (Functional Buttons) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`min-h-[36px] px-4 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid: Mantra List on Left, Deep Explorer on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Mantra List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs text-slate-400 font-medium px-1 flex justify-between">
            <span>{filteredMantras.length} Hymns Found</span>
            <span>Click to select</span>
          </div>

          <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
            {filteredMantras.map((mantra) => {
              const isSelected = activeMantra.id === mantra.id;
              const isFav = isBookmarked(mantra.id);

              return (
                <div
                  key={mantra.id}
                  onClick={() => {
                    if (isSpeaking) stopMantraSpeech();
                    setActiveMantra(mantra);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] text-amber-400 font-medium">
                        <span>{mantra.category}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400 truncate max-w-[180px]">{mantra.vedaSource}</span>
                      </div>
                      <h3 className="font-bold text-white text-base font-serif">{mantra.title}</h3>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(mantra.id, 'mantra', mantra.title);
                      }}
                      aria-label="Bookmark mantra"
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isFav
                          ? 'text-amber-400 bg-amber-500/15'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {mantra.meaning}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-800/60">
                    <span className="font-serif text-slate-300">{mantra.devanagari[0]}...</span>
                    <span className="text-amber-400/90 font-medium">View Sandhi</span>
                  </div>
                </div>
              );
            })}

            {filteredMantras.length === 0 && (
              <div className="p-8 text-center bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 text-sm">
                No mantras found matching your criteria.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Detailed Chant-Along Studio */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                <span>{activeMantra.category}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{activeMantra.vedaSource}</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif mt-1">{activeMantra.title}</h2>
              <div className="text-xs text-slate-400 mt-0.5">{activeMantra.deityOrTheme}</div>
            </div>

            {/* Chanting Action Bar */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Audio Speed Selector */}
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs">
                <button
                  onClick={() => setAudioSpeed(0.75)}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    audioSpeed === 0.75 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                  }`}
                >
                  0.75x
                </button>
                <button
                  onClick={() => setAudioSpeed(0.9)}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    audioSpeed === 0.9 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                  }`}
                >
                  1.0x
                </button>
                <button
                  onClick={() => setAudioSpeed(1.15)}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    audioSpeed === 1.15 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                  }`}
                >
                  1.2x
                </button>
              </div>

              {/* Chant-Along Button */}
              <button
                onClick={() => handlePlayChant(activeMantra)}
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

              {/* Copy */}
              <button
                onClick={handleCopy}
                aria-label="Copy Mantra"
                className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>

              {/* Bookmark */}
              <button
                onClick={() => toggleBookmark(activeMantra.id, 'mantra', activeMantra.title)}
                aria-label="Bookmark"
                className={`w-11 h-11 rounded-xl bg-slate-950 border flex items-center justify-center transition-colors ${
                  isBookmarked(activeMantra.id)
                    ? 'border-amber-500/60 text-amber-400 bg-amber-500/10'
                    : 'border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked(activeMantra.id) ? 'fill-amber-400' : ''}`} />
              </button>
            </div>
          </div>

          {/* Sanskrit Devanagari Verses (Highlighting dynamically during Chant-Along) */}
          <div className="space-y-3 bg-slate-950/70 p-6 rounded-2xl border border-slate-800/80">
            <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Sanskrit Devanagari (Chant Studio)
            </div>
            {activeMantra.devanagari.map((line, idx) => {
              const isLineActive = isSpeaking && currentSpeakingLine === idx;
              return (
                <div
                  key={idx}
                  className={`text-xl sm:text-2xl font-serif py-2 px-3 rounded-xl transition-all duration-300 ${
                    isLineActive
                      ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 scale-[1.01]'
                      : 'text-slate-100 hover:text-amber-200'
                  }`}
                >
                  {line}
                </div>
              );
            })}
          </div>

          {/* IAST Romanized Transliteration */}
          <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              IAST Transliteration
            </div>
            <div className="text-sm text-amber-200/90 font-mono italic leading-relaxed">
              {activeMantra.transliteration.map((t, idx) => (
                <div key={idx}>{t}</div>
              ))}
            </div>
          </div>

          {/* Word-by-Word Sandhi Meaning Breakdown */}
          {activeMantra.wordByWord && activeMantra.wordByWord.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span>Word-by-Word Sandhi Analysis</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeMantra.wordByWord.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-serif font-bold text-amber-300">{item.sanskrit}</span>
                      <span className="font-mono text-[11px] text-slate-400">{item.iast}</span>
                    </div>
                    <div className="text-slate-300 mt-1">{item.english}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Translation & Meaning */}
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Complete Meaning</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{activeMantra.meaning}</p>
          </div>

          {/* Neuro-Spiritual Benefits & Context */}
          <div className="bg-gradient-to-r from-amber-950/30 to-slate-950 p-4 rounded-xl border border-amber-900/30 space-y-1">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Context & Cognitive Resonance
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">{activeMantra.benefits}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
