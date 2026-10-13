import React, { useState } from 'react';
import { Scripture, Manuscript } from '../../types';
import { SCRIPTURES_DATA, MANUSCRIPTS_DATA } from '../../data/seedData';
import { useUser } from '../../context/UserContext';
import {
  BookOpen,
  ExternalLink,
  Scroll,
  Sparkles,
  Bookmark,
  Search,
  Layers,
  Archive,
  Info,
} from 'lucide-react';

export const ScripturesView: React.FC = () => {
  const { isBookmarked, toggleBookmark } = useUser();
  const [activeTab, setActiveTab] = useState<'scriptures' | 'manuscripts'>('scriptures');
  const [selectedScriptureCategory, setSelectedScriptureCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const scriptureCategories = ['All', 'Veda', 'Upanishad', 'Itihasa', 'Shastra'];

  const filteredScriptures = SCRIPTURES_DATA.filter((s) => {
    const matchesCat =
      selectedScriptureCategory === 'All' ||
      s.category.toLowerCase() === selectedScriptureCategory.toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q) ||
      s.tradition.toLowerCase().includes(q) ||
      s.keyThemes.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Preserved Classical Heritage</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            Scriptures & Manuscripts
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Explore primary source texts with public-domain links and historical manuscript traditions.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 shrink-0">
          <button
            onClick={() => setActiveTab('scriptures')}
            className={`min-h-[38px] px-4 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'scriptures'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Canonical Texts ({SCRIPTURES_DATA.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('manuscripts')}
            className={`min-h-[38px] px-4 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'manuscripts'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Scroll className="w-3.5 h-3.5" />
            <span>Manuscript Explorer ({MANUSCRIPTS_DATA.length})</span>
          </button>
        </div>
      </div>

      {activeTab === 'scriptures' && (
        <div className="space-y-6">
          {/* Controls: Search and Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {scriptureCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedScriptureCategory(cat)}
                  className={`min-h-[36px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    selectedScriptureCategory === cat
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search text, author..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 text-xs text-slate-100 placeholder:text-slate-500 outline-none"
              />
            </div>
          </div>

          {/* Scripture Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredScriptures.map((scripture) => {
              const isFav = isBookmarked(scripture.id);

              return (
                <div
                  key={scripture.id}
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 space-y-5 transition-all shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top Metadata */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                          <span>{scripture.category}</span>
                          <span className="text-slate-600">·</span>
                          <span>{scripture.era}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white font-serif mt-1">
                          {scripture.title}
                        </h3>
                        <div className="text-xs text-slate-400 mt-0.5">{scripture.tradition}</div>
                      </div>

                      <button
                        onClick={() =>
                          toggleBookmark(scripture.id, 'scripture', scripture.title)
                        }
                        aria-label="Bookmark scripture"
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isFav
                            ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                            : 'text-slate-500 hover:text-slate-300 bg-slate-950 border border-slate-800'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
                      </button>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {scripture.summary}
                    </p>

                    {/* Key Themes Unboxed Text (Zero-Pill Rule) */}
                    <div className="space-y-1 text-xs">
                      <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                        Core Themes:
                      </span>
                      <div className="text-slate-400">
                        {scripture.keyThemes.map((theme, i) => (
                          <span key={i}>
                            {theme}
                            {i < scripture.keyThemes.length - 1 && (
                              <span className="mx-1.5 text-slate-600">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Verse Box */}
                    {scripture.keyVerses && scripture.keyVerses.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                        <div className="font-serif text-sm text-amber-300 font-semibold">
                          {scripture.keyVerses[0].devanagari}
                        </div>
                        <div className="text-xs text-slate-300 italic">
                          "{scripture.keyVerses[0].translation}"
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono text-right">
                          — {scripture.keyVerses[0].citation}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Public Domain Attribution & Reading Links */}
                  <div className="border-t border-slate-800/80 pt-4 space-y-2">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Archive className="w-3.5 h-3.5 text-amber-400" />
                      <span>Verified Public Domain Primary Archives:</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {scripture.publicDomainLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-500/60 hover:text-amber-300 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <span>{link.platform}</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Manuscript Explorer Tab */}
      {activeTab === 'manuscripts' && (
        <div className="space-y-8">
          {/* Banner Spotlight */}
          <div className="relative overflow-hidden rounded-3xl border border-amber-900/30 bg-slate-900 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-slate-800 shadow-md shrink-0">
              <img
                src="/src/assets/images/manuscript_palmleaf_1791912275641.jpg"
                alt="Ancient Sanskrit Palm-Leaf Manuscript"
                referrerPolicy="no-referrer"
                className="w-full h-64 md:h-72 object-cover object-center"
              />
            </div>
            <div className="space-y-4">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Scroll className="w-4 h-4 text-amber-400" />
                <span>Epigraphy & Manuscriptology</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">
                How Sacred Texts Survived Centuries
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Before print culture, India preserved over 10 million historical manuscripts using natural materials. Himalayan monasteries protected birch-bark (Bhurjapatra) through sub-zero dry climates, while southern temples developed intricate stylus incisions on smoked Palmyra palm leaves (Tala-patra).
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <div><strong>Materials:</strong> Palmyra palm leaf, Himalayan birch bark, handmade hemp paper.</div>
                <div><strong>Inks:</strong> Lampblack soot, sesame oil, cinnabar, gold leaf suspension.</div>
              </div>
            </div>
          </div>

          {/* Catalog of Manuscripts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANUSCRIPTS_DATA.map((ms) => (
              <div
                key={ms.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
                    <span>{ms.script}</span>
                    <span className="text-slate-400">{ms.estimatedCentury}</span>
                  </div>

                  <h3 className="font-bold text-white text-base font-serif">{ms.title}</h3>

                  <div className="text-xs text-slate-300 leading-relaxed">{ms.description}</div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1">
                    <div className="text-amber-300 font-semibold">Historical Value:</div>
                    <div className="text-slate-300">{ms.significance}</div>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-3 text-[11px] text-slate-400 flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Preserved at: {ms.preservationLocation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
