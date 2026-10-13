import React, { useState } from 'react';
import { BotanicalHerb } from '../../types';
import { BOTANICAL_HERBS_DATA } from '../../data/seedData';
import { useUser } from '../../context/UserContext';
import {
  Leaf,
  FlaskConical,
  ExternalLink,
  Sparkles,
  Bookmark,
  Search,
  Dna,
  Layers,
  Activity,
  CheckCircle2,
} from 'lucide-react';

export const BioscienceView: React.FC = () => {
  const { isBookmarked, toggleBookmark } = useUser();
  const [activeHerb, setActiveHerb] = useState<BotanicalHerb>(BOTANICAL_HERBS_DATA[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [liveLookupCid, setLiveLookupCid] = useState<string>('');
  const [liveLookupResult, setLiveLookupResult] = useState<any>(null);
  const [loadingPubChem, setLoadingPubChem] = useState<boolean>(false);

  const filteredHerbs = BOTANICAL_HERBS_DATA.filter((h) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      !q ||
      h.sanskritName.toLowerCase().includes(q) ||
      h.botanicalName.toLowerCase().includes(q) ||
      h.activeCompound.toLowerCase().includes(q) ||
      h.traditionalUse.toLowerCase().includes(q)
    );
  });

  const handlePubChemQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!liveLookupCid.trim()) return;

    setLoadingPubChem(true);
    try {
      const isNum = !isNaN(Number(liveLookupCid));
      const param = isNum ? `cid=${liveLookupCid.trim()}` : `name=${encodeURIComponent(liveLookupCid.trim())}`;
      const res = await fetch(`/api/science/pubchem?${param}`);
      if (res.ok) {
        const data = await res.json();
        setLiveLookupResult(data);
      } else {
        setLiveLookupResult({ error: 'Compound not found in PubChem database' });
      }
    } catch (err: any) {
      setLiveLookupResult({ error: err.message || 'Lookup failed' });
    } finally {
      setLoadingPubChem(false);
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-widest mb-1">
            <FlaskConical className="w-4 h-4 text-teal-400" />
            <span>Atharvaveda & Ayurvedic Botanical Sciences</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            Vedic Bioscience & Phytochemistry
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Explore millennial botanical medicine bridged with modern PubChem molecular structures and clinical pharmacology.
          </p>
        </div>

        {/* Live Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search herb, compound..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-teal-500 text-sm text-slate-100 placeholder:text-slate-500 outline-none"
          />
        </div>
      </div>

      {/* Hero Banner with Generated Ayurvedic Botanicals Art */}
      <div className="relative overflow-hidden rounded-3xl border border-teal-900/40 bg-slate-900 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-slate-800 shadow-md shrink-0">
          <img
            src="/src/assets/images/ayurveda_botanicals_1791912274772.jpg"
            alt="Ayurvedic Botanical Science with Holy Basil and Ashwagandha"
            referrerPolicy="no-referrer"
            className="w-full h-64 md:h-72 object-cover object-center"
          />
        </div>
        <div className="space-y-4">
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>The Science of Longevity (Ayus + Veda)</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-serif">
            From Atharvaveda Hymns to Molecular Receptors
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The Atharvaveda contains the earliest systematic catalog of medicinal flora in the Vedic corpus, detailing botanical adaptogens, detoxifiers, and nervines. Today, molecular pharmacology validates these ancient empirical insights through isolated bioactive lactones, triterpenoid saponins, and polyphenols.
          </p>
          <div className="text-xs text-slate-400 space-y-1 font-mono">
            <div>· Atharvaveda Kanda 8 & 19 (Earliest Recorded Pharmacopeia)</div>
            <div>· Charaka Samhita (Internal Medicine) · Sushruta Samhita (Surgery)</div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Herb Selector on Left, Deep Phytochemical Canvas on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Herb Cards List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs text-slate-400 font-medium px-1 flex justify-between">
            <span>{filteredHerbs.length} Botanical Profiles</span>
            <span>Click to analyze molecular structure</span>
          </div>

          <div className="space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
            {filteredHerbs.map((herb) => {
              const isSelected = activeHerb.id === herb.id;
              const isFav = isBookmarked(herb.id);

              return (
                <div
                  key={herb.id}
                  onClick={() => setActiveHerb(herb)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 border-teal-500 shadow-lg shadow-teal-500/10'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-teal-400 font-medium">
                        <span className="font-serif font-bold text-sm text-amber-300">
                          {herb.devanagari}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span>{herb.sanskritName}</span>
                      </div>
                      <div className="text-xs text-slate-300 italic mt-0.5">{herb.botanicalName}</div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(herb.id, 'botanical', herb.sanskritName);
                      }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isFav ? 'text-amber-400 bg-amber-500/15' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/80">
                    <span className="text-slate-400">
                      Compound: <strong className="text-slate-200">{herb.activeCompound.split(' (')[0]}</strong>
                    </span>
                    <span className="text-[11px] font-mono text-teal-400 font-semibold">
                      CID: {herb.pubchemCid}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep Phytochemical & PubChem Inspector */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-teal-400 font-medium">
                <span>Vedic Source: {activeHerb.vedaSource}</span>
                <span className="text-slate-600">·</span>
                <span>Dosha: {activeHerb.doshaAffinity}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif mt-1">
                {activeHerb.sanskritName}{' '}
                <span className="text-amber-400 font-normal">({activeHerb.devanagari})</span>
              </h3>
              <div className="text-xs text-slate-300 italic">{activeHerb.botanicalName}</div>
            </div>

            <a
              href={`https://pubchem.ncbi.nlm.nih.gov/compound/${activeHerb.pubchemCid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] px-3.5 rounded-xl bg-teal-500/15 border border-teal-500/30 hover:bg-teal-500/25 text-teal-300 text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>PubChem CID {activeHerb.pubchemCid}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 2D Molecular Structure & Chemical Specs Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* 2D Molecule Diagram from PubChem REST PUG */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center">
              <div className="text-[11px] text-slate-400 font-mono mb-2 uppercase tracking-wider">
                2D Structure Diagram
              </div>
              <div className="w-48 h-48 bg-white rounded-xl p-2 flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${activeHerb.pubchemCid}/PNG?image_size=300x300`}
                  alt={`${activeHerb.activeCompound} 2D Structure`}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="text-[10px] text-slate-500 mt-2 font-mono">
                NCBI PubChem PUG REST
              </div>
            </div>

            {/* Chemical & Pharmacological Metrics */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                <div className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider">
                  Key Phytochemical
                </div>
                <div className="text-sm font-bold text-white">{activeHerb.activeCompound}</div>
                <div className="text-xs text-slate-400 font-mono">
                  Formula: {activeHerb.chemicalFormula}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Canonical SMILES
                </div>
                <div className="text-[10px] text-amber-200/90 font-mono break-all bg-slate-900 p-2 rounded-lg border border-slate-850">
                  {activeHerb.canonicalSmiles}
                </div>
              </div>
            </div>
          </div>

          {/* Traditional Ayurvedic Indication */}
          <div className="space-y-1.5 border-t border-slate-800 pt-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-teal-400" />
              <span>Traditional Vedic & Ayurvedic Indications</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeHerb.traditionalUse}
            </p>
          </div>

          {/* Modern Clinical & Pharmacological Evidence */}
          <div className="p-4 rounded-2xl bg-teal-950/20 border border-teal-900/40 space-y-1.5">
            <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Modern Clinical & Biochemical Evidence</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeHerb.modernPharmacology}
            </p>
          </div>

          {/* Live PubChem Query Tool */}
          <div className="border-t border-slate-800 pt-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5 text-amber-400" />
                <span>Live PubChem Compound Scout</span>
              </h4>
              <span className="text-[11px] text-slate-500">Query any compound or CID</span>
            </div>

            <form onSubmit={handlePubChemQuery} className="flex gap-2">
              <input
                type="text"
                value={liveLookupCid}
                onChange={(e) => setLiveLookupCid(e.target.value)}
                placeholder="Enter compound (e.g. curcumin, withaferin, or 969516)..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-xs text-slate-200 placeholder:text-slate-500 outline-none"
              />
              <button
                type="submit"
                disabled={loadingPubChem}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shrink-0 disabled:opacity-50"
              >
                {loadingPubChem ? 'Querying...' : 'Look up'}
              </button>
            </form>

            {liveLookupResult && (
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 max-h-36 overflow-y-auto">
                {liveLookupResult.error ? (
                  <span className="text-rose-400">{liveLookupResult.error}</span>
                ) : (
                  <pre className="text-[11px] whitespace-pre-wrap">
                    {JSON.stringify(liveLookupResult, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
