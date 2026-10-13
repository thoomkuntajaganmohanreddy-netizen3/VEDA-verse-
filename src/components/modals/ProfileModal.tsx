import React from 'react';
import { useUser } from '../../context/UserContext';
import { ViewMode } from '../../types';
import { MANTRAS_DATA, SCRIPTURES_DATA, TEMPLES_DATA, BOTANICAL_HERBS_DATA } from '../../data/seedData';
import {
  X,
  User,
  Award,
  Flame,
  Bookmark,
  LogOut,
  Sparkles,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewMode) => void;
  onSelectMantra?: (mantraId: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectMantra,
}) => {
  const { user, stats, login, logout } = useUser();

  if (!isOpen) return null;

  // Resolve bookmarks into titles
  const bookmarkedItems = stats.bookmarks.map((id) => {
    const mantra = MANTRAS_DATA.find((m) => m.id === id);
    if (mantra) return { id, type: 'mantra', title: mantra.title, category: mantra.category };

    const scripture = SCRIPTURES_DATA.find((s) => s.id === id);
    if (scripture) return { id, type: 'scripture', title: scripture.title, category: scripture.category };

    const temple = TEMPLES_DATA.find((t) => t.id === id);
    if (temple) return { id, type: 'temple', title: temple.name, category: `${temple.style} Temple` };

    const herb = BOTANICAL_HERBS_DATA.find((h) => h.id === id);
    if (herb) return { id, type: 'botanical', title: herb.sanskritName, category: 'Ayurveda Herb' };

    return { id, type: 'custom', title: id, category: 'Saved' };
  });

  const badges = [
    { name: 'Chanter of Dawn', desc: 'Chanted the Gayatri Mantra', earned: true },
    { name: 'Scripture Explorer', desc: 'Explored the Four Vedas', earned: stats.xp >= 150 },
    { name: 'Temple Pilgrim', desc: 'Investigated sacred temple geometry', earned: true },
    { name: 'Ayurvedic Alchemist', desc: 'Connected Atharvaveda herbs to PubChem', earned: stats.xp >= 200 },
    { name: 'Vidwan Master', desc: 'Reached 500+ XP in Vedic studies', earned: stats.xp >= 500 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* User Auth Profile Card */}
        <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/50 shadow-md"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center text-xl font-bold">
              <User className="w-8 h-8" />
            </div>
          )}

          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">
              {user?.displayName || 'Vedic Seeker'}
            </h2>
            <div className="text-xs text-slate-400">{user?.email || 'Guest Mode (Local Storage)'}</div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold font-mono">
              Stage: {stats.level}
            </div>
          </div>
        </div>

        {/* Auth CTA */}
        <div>
          {user ? (
            <button
              onClick={logout}
              className="w-full min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 text-rose-400 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Account</span>
            </button>
          ) : (
            <button
              onClick={login}
              className="w-full min-h-[44px] rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              <span>Sign in with Google (Sync across devices)</span>
            </button>
          )}
        </div>

        {/* Gamification Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-white font-mono">{stats.streakDays} Days</div>
              <div className="text-[11px] text-slate-400">Current Streak</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-white font-mono">{stats.xp} XP</div>
              <div className="text-[11px] text-slate-400">Total Experience</div>
            </div>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Achievements & Badges</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {badges.map((b, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-xl border text-xs flex items-center gap-2.5 ${
                  b.earned
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-50'
                }`}
              >
                <CheckCircle className={`w-4 h-4 ${b.earned ? 'text-amber-400' : 'text-slate-600'}`} />
                <div>
                  <div className="font-semibold text-white">{b.name}</div>
                  <div className="text-[10px] text-slate-400">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Bookmarks */}
        <div className="space-y-3 border-t border-slate-800 pt-4">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            <span>Saved Bookmarks ({bookmarkedItems.length})</span>
          </h3>

          {bookmarkedItems.length > 0 ? (
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {bookmarkedItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onClose();
                    if (item.type === 'mantra') {
                      if (onSelectMantra) onSelectMantra(item.id);
                      onNavigate('mantras');
                    } else if (item.type === 'scripture') {
                      onNavigate('scriptures');
                    } else if (item.type === 'temple') {
                      onNavigate('temples');
                    } else if (item.type === 'botanical') {
                      onNavigate('bioscience');
                    }
                  }}
                  className="p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/40 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[10px] text-amber-400/80">{item.category}</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-950 text-center text-xs text-slate-500">
              No saved bookmarks yet. Tap the bookmark icon on any mantra, scripture, or temple.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
