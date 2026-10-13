import React, { useState } from 'react';
import { ViewMode } from '../../types';
import {
  MANTRAS_DATA,
  SCRIPTURES_DATA,
  TEMPLES_DATA,
  BOTANICAL_HERBS_DATA,
  STORIES_DATA,
} from '../../data/seedData';
import { Search, X, Volume2, BookOpen, Landmark, Leaf, Sparkles } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewMode) => void;
  onSelectMantra?: (mantraId: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectMantra,
}) => {
  const [query, setQuery] = useState<string>('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingMantras = MANTRAS_DATA.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.meaning.toLowerCase().includes(q) ||
      m.deityOrTheme.toLowerCase().includes(q)
  );

  const matchingScriptures = SCRIPTURES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q) ||
      s.keyThemes.some((t) => t.toLowerCase().includes(q))
  );

  const matchingTemples = TEMPLES_DATA.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.location.toLowerCase().includes(q) ||
      t.style.toLowerCase().includes(q)
  );

  const matchingHerbs = BOTANICAL_HERBS_DATA.filter(
    (h) =>
      h.sanskritName.toLowerCase().includes(q) ||
      h.botanicalName.toLowerCase().includes(q) ||
      h.activeCompound.toLowerCase().includes(q)
  );

  const matchingStories = STORIES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.characterFocus.toLowerCase().includes(q) ||
      s.synopsis.toLowerCase().includes(q)
  );

  const totalResults =
    matchingMantras.length +
    matchingScriptures.length +
    matchingTemples.length +
    matchingHerbs.length +
    matchingStories.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across mantras, scriptures, temples, Ayurveda..."
            className="w-full bg-transparent text-base text-white placeholder:text-slate-500 outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {q.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-500/40 mx-auto" />
              <p>Type keywords like "Gayatri", "Nagara", "Gita", "Tulsi", "Nachiketa", or "Shiva"...</p>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500">
              No results found for "{query}".
            </div>
          ) : (
            <>
              {/* Mantras */}
              {matchingMantras.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Mantras ({matchingMantras.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingMantras.slice(0, 4).map((m) => (
                      <div
                        key={m.id}
                        onClick={() => {
                          if (onSelectMantra) onSelectMantra(m.id);
                          onNavigate('mantras');
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-850 hover:border-amber-500/40 cursor-pointer transition-colors"
                      >
                        <div className="text-xs font-bold text-white">{m.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{m.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scriptures */}
              {matchingScriptures.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Scriptures ({matchingScriptures.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingScriptures.slice(0, 3).map((s) => (
                      <div
                        key={s.id}
                        onClick={() => {
                          onNavigate('scriptures');
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-850 hover:border-blue-500/40 cursor-pointer transition-colors"
                      >
                        <div className="text-xs font-bold text-white">{s.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{s.summary}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Temples */}
              {matchingTemples.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>Temples ({matchingTemples.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingTemples.slice(0, 3).map((t) => (
                      <div
                        key={t.id}
                        onClick={() => {
                          onNavigate('temples');
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-850 hover:border-amber-500/40 cursor-pointer transition-colors"
                      >
                        <div className="text-xs font-bold text-white">{t.name}</div>
                        <div className="text-[11px] text-slate-400">{t.location} · {t.style} Style</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Herbs */}
              {matchingHerbs.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5" />
                    <span>Ayurveda Herbs ({matchingHerbs.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingHerbs.slice(0, 3).map((h) => (
                      <div
                        key={h.id}
                        onClick={() => {
                          onNavigate('bioscience');
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-850 hover:border-teal-500/40 cursor-pointer transition-colors"
                      >
                        <div className="text-xs font-bold text-white">{h.sanskritName} ({h.botanicalName})</div>
                        <div className="text-[11px] text-slate-400">Active Compound: {h.activeCompound}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
