import React from 'react';
import { X, ExternalLink, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface AboutSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutSourcesModal: React.FC<AboutSourcesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sources = [
    {
      name: 'GRETIL (Göttingen Register of Electronic Texts in Indian Languages)',
      role: 'Canonical Sanskrit digital texts with full metrical analysis',
      url: 'https://gretil.sub.uni-goettingen.de/gretil/',
    },
    {
      name: 'Bhandarkar Oriental Research Institute (BORI), Pune',
      role: 'Critical editions of Mahabharata and Rigveda manuscript heritage',
      url: 'https://bori.ac.in/',
    },
    {
      name: 'Internet Sacred Text Archive (Sacred-Texts)',
      role: 'Public-domain translations of the Vedas, Upanishads, and Epics',
      url: 'https://www.sacred-texts.com/hin/',
    },
    {
      name: 'Wikisource Sanskrit (संस्कृत विकिस्रोतः)',
      role: 'Community-verified public-domain Devanagari corpus',
      url: 'https://sa.wikisource.org/',
    },
    {
      name: 'National Center for Biotechnology Information (NCBI PubChem)',
      role: 'Open-access chemical structures and bioactivity data for Ayurvedic botanicals',
      url: 'https://pubchem.ncbi.nlm.nih.gov/',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Editorial Integrity & Sources</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-serif">About VEDA VERSE</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            VEDA VERSE is a non-sectarian, culturally respectful digital platform built for Gen Z to experience Vedic and Hindu wisdom as living, vibrant heritage rather than rigid dogma or static museum artifacts.
          </p>
        </div>

        {/* Content Principles */}
        <div className="space-y-2 bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
          <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
            Our Content Principles
          </h3>
          <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
            <li>We treat all traditions with deep respect, philological accuracy, and humility.</li>
            <li>We present plural philosophical interpretations (Advaita, Samkhya, Nyaya, Vishishtadvaita) without sectarian bias.</li>
            <li>We use only public-domain, open-access, and properly credited scholar translations.</li>
            <li>Our AI Guru cites verified verse numbers and never hallucinates sacred verses.</li>
          </ul>
        </div>

        {/* Primary Source Credit List */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Public Domain Libraries & Scientific Registries
          </h3>

          <div className="space-y-2">
            {sources.map((src, idx) => (
              <a
                key={idx}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/50 flex items-center justify-between transition-colors group"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {src.name}
                  </div>
                  <div className="text-[11px] text-slate-400">{src.role}</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          <span>for Vedic heritage & truth seekers everywhere.</span>
        </div>
      </div>
    </div>
  );
};
