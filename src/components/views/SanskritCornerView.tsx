import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import {
  Volume2,
  Sparkles,
  BookA,
  ArrowRight,
  RotateCcw,
  Check,
  Copy,
  Info,
} from 'lucide-react';

interface LetterItem {
  devanagari: string;
  iast: string;
  type: 'swara' | 'vyanjana';
  pronunciation: string;
}

const SWARAS: LetterItem[] = [
  { devanagari: 'अ', iast: 'a', type: 'swara', pronunciation: 'short a as in cup' },
  { devanagari: 'आ', iast: 'ā', type: 'swara', pronunciation: 'long a as in father' },
  { devanagari: 'इ', iast: 'i', type: 'swara', pronunciation: 'short i as in pin' },
  { devanagari: 'ई', iast: 'ī', type: 'swara', pronunciation: 'long i as in feel' },
  { devanagari: 'उ', iast: 'u', type: 'swara', pronunciation: 'short u as in put' },
  { devanagari: 'ऊ', iast: 'ū', type: 'swara', pronunciation: 'long u as in rule' },
  { devanagari: 'ऋ', iast: 'ṛ', type: 'swara', pronunciation: 'vocalic r as in rhythm' },
  { devanagari: 'ए', iast: 'e', type: 'swara', pronunciation: 'long e as in grey' },
  { devanagari: 'ऐ', iast: 'ai', type: 'swara', pronunciation: 'diphthong as in aisle' },
  { devanagari: 'ओ', iast: 'o', type: 'swara', pronunciation: 'long o as in over' },
  { devanagari: 'औ', iast: 'au', type: 'swara', pronunciation: 'diphthong as in owl' },
  { devanagari: 'अं', iast: 'aṃ', type: 'swara', pronunciation: 'anusvara nasalization' },
  { devanagari: 'अः', iast: 'aḥ', type: 'swara', pronunciation: 'visarga aspiration' },
];

const VYANJANAS: LetterItem[] = [
  { devanagari: 'क', iast: 'ka', type: 'vyanjana', pronunciation: 'guttural unaspirated' },
  { devanagari: 'ख', iast: 'kha', type: 'vyanjana', pronunciation: 'guttural aspirated' },
  { devanagari: 'ग', iast: 'ga', type: 'vyanjana', pronunciation: 'guttural voiced' },
  { devanagari: 'घ', iast: 'gha', type: 'vyanjana', pronunciation: 'guttural voiced aspirated' },
  { devanagari: 'ङ', iast: 'ṅa', type: 'vyanjana', pronunciation: 'guttural nasal' },
  { devanagari: 'च', iast: 'ca', type: 'vyanjana', pronunciation: 'palatal as in chair' },
  { devanagari: 'छ', iast: 'cha', type: 'vyanjana', pronunciation: 'palatal aspirated' },
  { devanagari: 'ज', iast: 'ja', type: 'vyanjana', pronunciation: 'palatal voiced' },
  { devanagari: 'झ', iast: 'jha', type: 'vyanjana', pronunciation: 'palatal voiced aspirated' },
  { devanagari: 'ञ', iast: 'ña', type: 'vyanjana', pronunciation: 'palatal nasal' },
  { devanagari: 'त', iast: 'ta', type: 'vyanjana', pronunciation: 'dental pure soft t' },
  { devanagari: 'थ', iast: 'tha', type: 'vyanjana', pronunciation: 'dental aspirated' },
  { devanagari: 'द', iast: 'da', type: 'vyanjana', pronunciation: 'dental voiced soft d' },
  { devanagari: 'ध', iast: 'dha', type: 'vyanjana', pronunciation: 'dental voiced aspirated' },
  { devanagari: 'न', iast: 'na', type: 'vyanjana', pronunciation: 'dental nasal' },
  { devanagari: 'प', iast: 'pa', type: 'vyanjana', pronunciation: 'labial as in spin' },
  { devanagari: 'फ', iast: 'pha', type: 'vyanjana', pronunciation: 'labial aspirated' },
  { devanagari: 'ब', iast: 'ba', type: 'vyanjana', pronunciation: 'labial voiced' },
  { devanagari: 'भ', iast: 'bha', type: 'vyanjana', pronunciation: 'labial voiced aspirated' },
  { devanagari: 'म', iast: 'ma', type: 'vyanjana', pronunciation: 'labial nasal' },
  { devanagari: 'य', iast: 'ya', type: 'vyanjana', pronunciation: 'semi-vowel y' },
  { devanagari: 'र', iast: 'ra', type: 'vyanjana', pronunciation: 'semi-vowel tapped r' },
  { devanagari: 'ल', iast: 'la', type: 'vyanjana', pronunciation: 'semi-vowel l' },
  { devanagari: 'व', iast: 'va', type: 'vyanjana', pronunciation: 'semi-vowel between v and w' },
  { devanagari: 'श', iast: 'śa', type: 'vyanjana', pronunciation: 'palatal sibilant sh' },
  { devanagari: 'ष', iast: 'ṣa', type: 'vyanjana', pronunciation: 'retroflex sibilant sh' },
  { devanagari: 'स', iast: 'sa', type: 'vyanjana', pronunciation: 'dental sibilant as in sun' },
  { devanagari: 'ह', iast: 'ha', type: 'vyanjana', pronunciation: 'voiced glottal h' },
];

// Simple mapping helper for transliteration
const TRANSLIT_MAP: Record<string, string> = {
  om: 'ॐ',
  shanti: 'शान्तिः',
  santi: 'शान्तिः',
  dharma: 'धर्म',
  karma: 'कर्म',
  satya: 'सत्य',
  yoga: 'योग',
  veda: 'वेद',
  atman: 'आत्मन्',
  brahman: 'ब्रह्मन्',
  moksha: 'मोक्ष',
  ahimsa: 'अहिंसा',
  shiva: 'शिव',
  krishna: 'कृष्ण',
  rama: 'राम',
  devi: 'देवी',
  agni: 'अग्नि',
  savitr: 'सवितृ',
  guru: 'गुरु',
  ananda: 'आनन्द',
  tejas: 'तेजस्',
};

export const SanskritCornerView: React.FC = () => {
  const { speakMantra, addXp } = useUser();
  const [activeLetter, setActiveLetter] = useState<LetterItem>(SWARAS[0]);
  const [translitInput, setTranslitInput] = useState<string>('shanti');
  const [copiedTranslit, setCopiedTranslit] = useState<boolean>(false);

  const wordOfTheDay = {
    devanagari: 'आनन्द',
    iast: 'Ānanda',
    root: 'आ + नन्द् (ā + nand) — to rejoice, to radiate boundless bliss',
    meaning: 'Uncaused, unconditioned joy and existential bliss arising from realization of the True Self (Atman).',
    citation: 'आनन्दो ब्रह्मेति व्यजानात् — Taittiriya Upanishad 3.6',
  };

  const handlePronounce = (item: LetterItem) => {
    setActiveLetter(item);
    speakMantra([item.devanagari], 0.7);
  };

  // Convert input word to devanagari mapping or fallback
  const getTransliteration = (text: string) => {
    const clean = text.toLowerCase().trim();
    if (TRANSLIT_MAP[clean]) {
      return TRANSLIT_MAP[clean];
    }
    // Simple heuristic
    let out = clean
      .replace(/sh/g, 'श्')
      .replace(/th/g, 'थ्')
      .replace(/dh/g, 'ध्')
      .replace(/kh/g, 'ख्')
      .replace(/gh/g, 'घ्')
      .replace(/ch/g, 'छ्')
      .replace(/a/g, 'अ')
      .replace(/i/g, 'इ')
      .replace(/u/g, 'उ')
      .replace(/k/g, 'क')
      .replace(/g/g, 'ग')
      .replace(/m/g, 'म')
      .replace(/r/g, 'र')
      .replace(/t/g, 'त')
      .replace(/p/g, 'प')
      .replace(/n/g, 'न')
      .replace(/s/g, 'स');
    return out || clean;
  };

  const handleCopyTranslit = () => {
    navigator.clipboard.writeText(getTransliteration(translitInput));
    setCopiedTranslit(true);
    addXp(5);
    setTimeout(() => setCopiedTranslit(false), 2000);
  };

  return (
    <div className="space-y-10 pb-16 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
          <BookA className="w-4 h-4 text-amber-400" />
          <span>The Sacred Linguistic Code</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
          Sanskrit Corner
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Master the Devanagari alphabet with spoken acoustics, etymological roots, and transliteration tools.
        </p>
      </div>

      {/* Word of the Day Card */}
      <section className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-900/40 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Word of the Day</span>
          </div>
          <button
            onClick={() => speakMantra([wordOfTheDay.devanagari], 0.8)}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 font-bold transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Listen</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
          <h2 className="text-4xl font-extrabold text-white font-serif tracking-wide">
            {wordOfTheDay.devanagari}
          </h2>
          <span className="text-xl font-mono text-amber-300 font-bold">
            ({wordOfTheDay.iast})
          </span>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          <strong>Etymological Root: </strong>
          {wordOfTheDay.root}
        </div>

        <p className="text-sm text-slate-200 leading-relaxed">{wordOfTheDay.meaning}</p>

        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-amber-200/90 font-serif italic">
          "{wordOfTheDay.citation}"
        </div>
      </section>

      {/* Alphabet Learner: Swaras (Vowels) & Vyanjanas (Consonants) */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white font-serif">Devanagari Varna Soundboard</h3>
            <p className="text-xs text-slate-400">Click any letter to trigger speech synthesis pronunciation</p>
          </div>
          <div className="text-xs text-amber-400 font-medium">
            Active: <strong className="text-white font-serif text-lg ml-1">{activeLetter.devanagari}</strong> ({activeLetter.iast})
          </div>
        </div>

        {/* Swaras (Vowels) */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Swaras (Vowels - Primary Resonances)
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-13 gap-2">
            {SWARAS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handlePronounce(item)}
                className={`min-h-[52px] p-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                  activeLetter.devanagari === item.devanagari
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 scale-105 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-amber-500/50 hover:bg-slate-850'
                }`}
              >
                <span className="font-serif text-lg leading-tight">{item.devanagari}</span>
                <span className="font-mono text-[10px] opacity-75">{item.iast}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Vyanjanas (Consonants) */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Vyanjanas (Consonants - Structured Articulations)
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 gap-2">
            {VYANJANAS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handlePronounce(item)}
                className={`min-h-[52px] p-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                  activeLetter.devanagari === item.devanagari
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 scale-105 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-amber-500/50 hover:bg-slate-850'
                }`}
              >
                <span className="font-serif text-lg leading-tight">{item.devanagari}</span>
                <span className="font-mono text-[10px] opacity-75">{item.iast}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Letter Phonetic Guidance */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between">
          <div>
            <span className="text-slate-400">Phonetic Articulation: </span>
            <strong className="text-amber-300">{activeLetter.pronunciation}</strong>
          </div>
          <button
            onClick={() => handlePronounce(activeLetter)}
            className="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Replay Sound</span>
          </button>
        </div>
      </section>

      {/* Mini Transliteration Tool */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <BookA className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-bold text-white font-serif">English to Devanagari Converter</h3>
        </div>
        <p className="text-xs text-slate-400">
          Type standard Vedic terms (e.g. "shanti", "dharma", "karma", "satya", "ananda", "om", "atman") to convert into sacred script:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Latin / English Input:
            </label>
            <input
              type="text"
              value={translitInput}
              onChange={(e) => setTranslitInput(e.target.value)}
              placeholder="e.g. shanti, dharma..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500 text-sm text-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Devanagari Result:
            </label>
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 border border-amber-900/40 min-h-[46px]">
              <span className="font-serif text-2xl text-amber-400 font-bold">
                {getTransliteration(translitInput)}
              </span>
              <button
                onClick={handleCopyTranslit}
                className="hover:text-amber-300 text-slate-400 p-1 transition-colors"
              >
                {copiedTranslit ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
