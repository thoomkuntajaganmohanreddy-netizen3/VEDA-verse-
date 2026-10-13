import React, { useState } from 'react';
import { Temple } from '../../types';
import { TEMPLES_DATA } from '../../data/seedData';
import { useUser } from '../../context/UserContext';
import {
  Landmark,
  MapPin,
  Sparkles,
  Compass,
  Bookmark,
  CheckCircle2,
  Info,
} from 'lucide-react';

export const TemplesView: React.FC = () => {
  const { isBookmarked, toggleBookmark } = useUser();
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [activeTemple, setActiveTemple] = useState<Temple>(TEMPLES_DATA[0]);

  const styles = ['All', 'Nagara', 'Dravida', 'Vesara'];

  const filteredTemples = TEMPLES_DATA.filter(
    (t) => selectedStyle === 'All' || t.style === selectedStyle
  );

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Fractal Stone Microcosms</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            Temple Architecture & Geometry
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Explore the sacred geometry of Nagara, Dravida, and Vesara styles from the Vastu Purusha Mandala.
          </p>
        </div>

        {/* Style Filter */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl p-1 shrink-0">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`min-h-[36px] px-3.5 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedStyle === style
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Style Architecture DNA Overview Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-serif font-bold text-amber-400 text-base">Nagara Style</span>
            <span className="text-[10px] text-slate-400 font-mono">Northern Tradition</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Curvilinear beehive-shaped towers (Shikhara) with crowned Amalaka and Kalasha. Characterized by square plans with graduated cruciform projections (Rathas).
          </p>
          <div className="text-[11px] text-slate-500 font-mono">
            Examples: Khajuraho, Konark, Modhera Sun Temple
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-serif font-bold text-amber-400 text-base">Dravida Style</span>
            <span className="text-[10px] text-slate-400 font-mono">Southern Tradition</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Tiered pyramidal towers (Vimana) rising in diminishing storeys, massive gateway portals (Gopurams), pillared mandapas, and sacred water tanks (Pushkaranis).
          </p>
          <div className="text-[11px] text-slate-500 font-mono">
            Examples: Brihadeeswara, Meenakshi Amman, Kailasa Ellora
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-serif font-bold text-amber-400 text-base">Vesara Style</span>
            <span className="text-[10px] text-slate-400 font-mono">Hybrid Deccan</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Blends the curved vertical lines of Nagara with the stepped tiering of Dravida. Often features stellate (star-shaped) platforms with intricate soapstone filigree.
          </p>
          <div className="text-[11px] text-slate-500 font-mono">
            Examples: Hoysala Belur/Halebidu, Badami Chalukya, Angkor Wat
          </div>
        </div>
      </div>

      {/* Interactive India Map & Temple Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Stylized India Map Canvas */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <h3 className="font-bold text-sm text-white">Geographic Heritage Map</h3>
            </div>
            <span className="text-xs text-slate-400">Click a pin to inspect</span>
          </div>

          {/* SVG Map of India with pins */}
          <div className="relative w-full h-[400px] bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
            {/* SVG Outline representation of India subcontinent */}
            <svg
              viewBox="0 0 500 550"
              className="w-full h-full max-h-[380px] text-slate-850 stroke-slate-800 stroke-[1.5] fill-slate-900/60"
            >
              {/* Generalized contour of Indian peninsula */}
              <path d="M 210 30 Q 230 20 260 40 Q 280 60 270 80 Q 260 100 280 120 Q 320 130 350 140 Q 380 150 410 170 Q 420 190 400 200 Q 360 210 330 220 Q 300 230 310 270 Q 310 320 290 360 Q 260 420 230 490 Q 210 520 200 480 Q 180 430 150 370 Q 130 310 110 260 Q 80 230 90 200 Q 110 170 140 160 Q 170 150 190 120 Z" />
              {/* Sri Lanka hint */}
              <circle cx="230" cy="510" r="10" className="fill-slate-900 stroke-slate-800" />
            </svg>

            {/* Temple Interactive Pins Positioned According to Lat/Lng */}
            {TEMPLES_DATA.map((temple) => {
              // Normalized projection to coordinate box
              // India: Lat ~8 to ~34, Lng ~68 to ~90
              const normalizedX = ((temple.lng - 68) / (90 - 68)) * 320 + 70;
              const normalizedY = ((34 - temple.lat) / (34 - 8)) * 400 + 40;

              const isSelected = activeTemple.id === temple.id;

              return (
                <button
                  key={temple.id}
                  onClick={() => setActiveTemple(temple)}
                  style={{
                    left: `${Math.max(10, Math.min(normalizedX, 390))}px`,
                    top: `${Math.max(10, Math.min(normalizedY, 370))}px`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 focus-visible:outline-none`}
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-amber-400 opacity-60" />
                    )}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-transform ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 scale-125 ring-4 ring-amber-500/20'
                          : 'bg-slate-900 border border-amber-500/60 text-amber-400 hover:scale-110 hover:bg-amber-500/20'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>

                  {/* Pin Tooltip */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-all shadow-md ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 font-bold block'
                        : 'bg-slate-950 text-slate-200 border border-slate-800 hidden group-hover:block'
                    }`}
                  >
                    {temple.name.split(' (')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between px-1">
            <span>Pins represent canonical stone monuments</span>
            <span className="text-amber-400">{activeTemple.location}</span>
          </div>
        </div>

        {/* Selected Temple Deep Inspection Card */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          {/* Spotlight Header Image with fallback container */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-56">
            <img
              src="/src/assets/images/temple_architecture_1791912273907.jpg"
              alt={activeTemple.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
                {activeTemple.style} Style
              </span>
              <button
                onClick={() => toggleBookmark(activeTemple.id, 'temple', activeTemple.name)}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all bg-slate-950/80 backdrop-blur-md border ${
                  isBookmarked(activeTemple.id)
                    ? 'border-amber-400 text-amber-400'
                    : 'border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked(activeTemple.id) ? 'fill-amber-400' : ''}`} />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                <span>{activeTemple.dynasty}</span>
                <span className="text-slate-600">·</span>
                <span>{activeTemple.era}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif mt-1">{activeTemple.name}</h3>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{activeTemple.location}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeTemple.description}
            </p>

            {/* Architectural Features */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Engineering & Architectural Feats
              </div>
              <div className="space-y-1.5">
                {activeTemple.architecturalFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Symbolism */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Metaphysical Symbolism
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{activeTemple.symbolism}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
