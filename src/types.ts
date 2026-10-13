export type ViewMode =
  | 'home'
  | 'mantras'
  | 'scriptures'
  | 'temples'
  | 'bioscience'
  | 'stories'
  | 'learning'
  | 'guru'
  | 'sanskrit';

export interface Mantra {
  id: string;
  title: string;
  category:
    | 'Rigveda'
    | 'Yajurveda'
    | 'Samaveda'
    | 'Atharvaveda'
    | 'Gayatri'
    | 'Shanti'
    | 'Stotra'
    | 'Upanishad'
    | 'Aarti';
  vedaSource: string;
  devanagari: string[];
  transliteration: string[];
  wordByWord: { sanskrit: string; iast: string; english: string }[];
  meaning: string;
  benefits: string;
  deityOrTheme: string;
}

export interface Scripture {
  id: string;
  title: string;
  category: 'Veda' | 'Upanishad' | 'Itihasa' | 'Purana' | 'Shastra';
  era: string;
  tradition: string;
  chaptersCount: string;
  summary: string;
  keyThemes: string[];
  keyVerses: { devanagari: string; translation: string; citation: string }[];
  publicDomainLinks: { name: string; url: string; platform: string }[];
}

export interface Manuscript {
  id: string;
  title: string;
  material: 'Palm-leaf' | 'Birch-bark (Bhurjapatra)' | 'Copper plate' | 'Handmade paper';
  script: string;
  estimatedCentury: string;
  preservationLocation: string;
  significance: string;
  description: string;
}

export interface Temple {
  id: string;
  name: string;
  style: 'Nagara' | 'Dravida' | 'Vesara';
  dynasty: string;
  era: string;
  location: string;
  state: string;
  lat: number;
  lng: number;
  architecturalFeatures: string[];
  symbolism: string;
  description: string;
}

export interface BotanicalHerb {
  id: string;
  sanskritName: string;
  devanagari: string;
  botanicalName: string;
  vedaSource: string; // e.g., "Atharvaveda 8.7"
  traditionalUse: string;
  activeCompound: string;
  pubchemCid: number;
  chemicalFormula: string;
  canonicalSmiles: string;
  modernPharmacology: string;
  doshaAffinity: 'Vata' | 'Pitta' | 'Kapha' | 'Tridoshic';
}

export interface EpicStory {
  id: string;
  title: string;
  sourceText: string;
  readTime: string;
  characterFocus: string;
  synopsis: string;
  cards: {
    badge: string;
    headline: string;
    content: string;
    lesson: string;
  }[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  devanagari?: string;
  hint?: string;
}

export interface FlashcardDeck {
  id: string;
  title: string;
  category: string;
  cards: Flashcard[];
}

export interface SlideDeck {
  id: string;
  title: string;
  topic: string;
  category: string;
  slides: {
    title: string;
    keyPoints: string[];
    quote?: string;
    visualSymbol?: string;
  }[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xp: number;
}

export interface Quiz {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: QuizQuestion[];
}

export interface TimelineEvent {
  era: string;
  yearRange: string;
  milestone: string;
  canonicalTexts: string[];
  description: string;
}

export interface UserStats {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  level: 'Shishya' | 'Sadhaka' | 'Vidwan' | 'Rishi';
  bookmarks: string[]; // item IDs
  completedQuizzes: string[];
  flashcardProgress: Record<string, { known: number; total: number }>;
}
