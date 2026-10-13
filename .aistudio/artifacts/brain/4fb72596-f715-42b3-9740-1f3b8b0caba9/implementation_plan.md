# VEDA VERSE: Modern Vedic & Heritage Discovery Platform

VEDA VERSE is an AI-powered, mobile-first web application designed for Gen Z (ages 16–30) to discover, learn, and fall in love with Vedic and Hindu cultural heritage—spanning mantras, philosophical scriptures, ancient manuscripts, temple architecture, classical epics, and Vedic botanical science (Ayurveda)—reimagined through modern interactive learning mechanics, streak gamification, and intelligent Gemini AI guidance.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural and UX choices have been synthesized from your clarifying responses and requirements:

- **Confirmed: Botanical Bioscience Explorer**: Implemented as a dedicated Atharvaveda & Ayurveda science module pairing traditional botanical heritage (Tulsi, Ashwagandha, Turmeric, Brahmi, Neem, Shankhpushpi, Guggulu, Shatavari) with real PubChem compound lookups (CIDs, canonical SMILES, 2D molecular structures, pharmacological bioactivity targets, and scientific literature).
- **Confirmed: Audio & Chant-Along Engine**: Sanskrit speech synthesis with user-controlled playback speed (0.75x to 1.25x), real-time verse/syllable line highlighting, and dual Devanagari + IAST romanization.
- **Confirmed: Dynamic Home Discovery Feed**: Mobile-first dashboard spotlighting the "Shloka of the Day", XP streak progress tracker, quick-access category tiles, and recent learning milestones.
- **AI Guru Multi-Tier Architecture**:
  - `gemini-3.5-flash`: General inquiries, explain-like-I'm-15 mode, storytelling, and rapid contextual Q&A.
  - `gemini-3.1-pro-preview` with `thinkingLevel: ThinkingLevel.HIGH`: Deep philosophical, philological, and comparative scriptural queries requiring rigorous reasoning and verse citations.
  - `gemini-3.1-flash-lite`: Instant generative creation for flashcards, interactive slide decks, and quiz generation.
- **Firebase Auth & Firestore Persistence**: Google Sign-in with Firebase Auth for profile synchronization, pairing with cloud Firestore and offline-first localStorage syncing for streaks, bookmarks, quiz scores, and XP.

---

### 1. Overview & Core Concept

- **What It Does**: Bridges millennia of ancient Indian philosophical, literary, scientific, and architectural heritage with modern UX standards: interactive chant-along mantras with phonetic guidance, deep scripture explorer with public-domain source links, manuscript preservation explorer, interactive 3D/stylized temple architecture explorer with an interactive map, vertical swipeable story shorts, spaced-repetition flashcards, full-screen slide presentations, interactive quizzes with XP, and an AI Guru conversational mentor.
- **Target Audience / Persona**: Gen Z learners, seekers, cultural enthusiasts, students, and practitioners looking for authentic, nuanced, non-sectarian, and aesthetically vibrant access to Vedic heritage without dusty PDFs or preachy gatekeeping.
- **Key Value**: Makes sacred texts and cultural history accessible, phonetically graspable, scientifically contextualized, and engagingly gamified.

---

### 2. User Experience & Visual Design

#### Visual Identity & Theme
- **Color Palette**:
  - Dominant Canvas (60%): Deep Midnight Indigo (`#0B0F19` dark / `#F8FAFC` light toggle).
  - Structural Surfaces (30%): Deep Slate Glassmorphism (`#131B2E` / `rgba(19, 27, 46, 0.75)` with hairline gold/indigo borders).
  - High-Intent Accents (10%): Sacred Saffron (`#F59E0B`), Temple Gold (`#EAB308`), Peacock Teal (`#14B8A6`), and Lotus Crimson (`#F43F5E`).
- **Typography**:
  - Display & Headlines: `Cinzel` / `Plus Jakarta Sans` for regal architectural presence.
  - Sanskrit & Mantras: `Noto Sans Devanagari` & `Tiro Devanagari Sanskrit` with crisp diacritic IAST transliteration.
  - Body & UI: `Plus Jakarta Sans` with balanced measure and unboxed metadata discipline.
- **Mobile Ergonomics**:
  - Thumb-friendly bottom navigation bar with 5 primary anchors: *Home*, *Mantras*, *Scriptures*, *Temples & Bioscience*, *AI Guru*.
  - Secondary drawer for Flashcards, Slide Decks, Quizzes, Stories, Sanskrit Alphabet, and Profile.
  - All touch targets strictly $\ge 44 \times 44\text{px}$, adhering to the 15% sticky surface budget.

#### Key Pages & User Flows
1. **Home**: Animated mandala hero ("Ancient wisdom. Your generation."), Shloka of the Day with immediate audio chant-along, daily streak progress ring, XP level badge (*Shishya* $\rightarrow$ *Sadhaka* $\rightarrow$ *Vidwan*), and quick discovery tiles.
2. **Vedic Mantra Library**: Filter across Rigveda, Yajurveda, Samaveda, Atharvaveda, Gayatri, Shanti Mantras, Stotras, and Upanishads. Full page with Devanagari, IAST, word-by-word sandhi breakdown, full translation, spiritual context, speed-controlled audio, and chanting mode with line highlights.
3. **Scriptures & Manuscripts Explorer**: Four Vedas, 10 Principal Upanishads, Bhagavad Gita, Ramayana, Mahabharata, Natya Shastra, and Arthashastra. Overview, lineage, public-domain reader links (GRETIL, Wikisource, Sacred-Texts, Archive.org). Manuscript explorer showcasing birch-bark and palm-leaf manuscripts in Sharada, Grantha, Devanagari, and Grantha scripts.
4. **Vedic Bioscience & Ayurveda Explorer**: Atharvaveda botanical sciences linked directly to PubChem chemistry (Curcumin, Withaferin A, Eugenol, Bacosides) with chemical formulas, molecular 2D structures, target receptors, and traditional Vedic formulations.
5. **Temple Architecture Explorer**: Nagara, Dravida, and Vesara architectural styles, Vastu Purusha Mandala principles, 8+ iconic temples (Brihadeeswara, Konark Sun Temple, Kailasa at Ellora, Meenakshi Amman, Khajuraho, Hampi, Modhera, Angkor Wat) with era, dynasty, architectural breakdowns, and an interactive India map with temple pins.
6. **Stories & Epics (Story Mode)**: 30-second vertical swipe cards (Instagram Stories / Reels format) covering episodes from Ramayana, Mahabharata, Panchatantra, and Kalidasa's Shakuntala.
7. **Interactive Learning Formats**:
   - *Flashcards*: 3D flip card decks with spaced repetition ("Know" / "Review Again"), tracking mastery.
   - *Book Slides*: Swipeable, keyboard-driven presentation slide decks with full-screen mode for scriptural themes.
   - *Quizzes*: Instant interactive feedback, explanation reveals, and XP rewards.
   - *Timeline & Mind Maps*: Chronological Vedic timeline from 1500 BCE to Classical era, plus Mahabharata genealogy tree.
8. **AI Guru (Gemini Multimodal Chat)**:
   - Three conversation personas: *"Explain Like I'm 15"*, *"Deep Scholarly & Philosophical"*, and *"Tell Me a Story"*.
   - Thinking mode toggle using `gemini-3.1-pro-preview` with `ThinkingLevel.HIGH` for complex scriptural debates and sandhi analyses.
   - "Generate for Me" quick actions: auto-generate custom flashcard decks, slide decks, or quizzes on any Vedic topic.
9. **Sanskrit Corner**: Devanagari alphabet learner with audio pronunciation for varna/swaras, Sanskrit Word of the Day, and interactive IAST transliteration tool.
10. **Profile & Global Search**: Real-time Firebase Auth / Google Sign-in status, XP breakdown, streak counter, unlocked achievement badges, saved bookmarks, and instantaneous global search with tag filters.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Dual-Storage Strategy (Firestore + LocalStorage Cache)**
  - *Chosen Approach*: Maintain local state in `localStorage` for zero-latency instant interaction and offline responsiveness, paired with asynchronous synchronization to Firestore when the user signs in with Google.
  - *Why*: Ensures first-time users can immediately chant, flip flashcards, and earn streaks without mandatory signup friction, while granting authenticated users multi-device persistence.
- **Decision 2: Multimodal Gemini Model Hierarchy**
  - *Chosen Approach*: Route fast generator tasks (flashcards, slide decks, quizzes) to `gemini-3.1-flash-lite`, interactive general Q&A to `gemini-3.5-flash`, and high-thinking scholarly inquiries to `gemini-3.1-pro-preview` with `ThinkingLevel.HIGH`.
  - *Why*: Optimizes latency, reasoning depth, and cost efficiency while adhering strictly to project guidelines.
- **Decision 3: Zero-Dependency High-Quality Sanskrit Speech Synthesis**
  - *Chosen Approach*: Utilize the browser's native `window.speechSynthesis` with Indian Sanskrit/Hindi locale prioritization (`hi-IN`, `sa-IN`, `en-IN`), fallback pitch/rate modulation, and synchronized line highlighting timers.
  - *Why*: Unlocks instant offline audio without external API latency or streaming audio budget restrictions.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        VEDA VERSE CLIENT (React 19)                    │
│                                                                        │
│  ┌──────────────────┐  ┌──────────────────┐  ┌───────────────────────┐ │
│  │ Navigation Bar   │  │ Dynamic Home     │  │ Global Search & Filter│ │
│  └────────┬─────────┘  └────────┬─────────┘  └───────────┬───────────┘ │
│           │                     │                        │             │
│  ┌────────▼─────────────────────▼────────────────────────▼───────────┐ │
│  │                        App Router / Active Views                  │ │
│  │  • Mantras (Chant-Along, Devanagari, IAST, Audio Speed)           │ │
│  │  • Scriptures & Public Domain Archive (Vedas, Upanishads, Gita)   │ │
│  │  • Vedic Bioscience & Ayurveda (PubChem API, Atharvaveda herbs)   │ │
│  │  • Temple Architecture (Interactive Map, Nagara/Dravida/Vesara)   │ │
│  │  • Epics & Stories (Vertical Swipe Cards)                         │ │
│  │  • Learning Tools (Flashcards, Slide Decks, Quizzes, Timelines)   │ │
│  │  • Sanskrit Corner (Alphabet, Pronunciation, Word of Day)         │ │
│  │  • AI Guru Chat (Modes: Simple, Scholarly, Story + Gen Tools)     │ │
│  └──────────────────────────────┬────────────────────────────────────┘ │
│                                 │                                      │
│  ┌──────────────────────────────▼────────────────────────────────────┐ │
│  │ User State & Gamification Engine (XP, Streaks, Bookmarks, Level)  │ │
│  │ (Syncs localStorage <---> Firebase Auth & Firestore /users doc)   │ │
│  └──────────────────────────────┬────────────────────────────────────┘ │
└─────────────────────────────────┼──────────────────────────────────────┘
                                  │
                 ┌────────────────┴────────────────┐
                 ▼                                 ▼
   ┌───────────────────────────┐     ┌───────────────────────────┐
   │ Express Server (server.ts)│     │  Firebase Services        │
   │                           │     │                           │
   │ • POST /api/guru/chat     │     │ • Firebase Auth (Google)  │
   │   (gemini-3.5-flash &     │     │ • Firestore Database      │
   │    gemini-3.1-pro-preview │     │   - /users/{userId}       │
   │    ThinkingLevel.HIGH)    │     │   - /bookmarks/{id}       │
   │                           │     │   - /quiz_attempts/{id}   │
   │ • POST /api/guru/generate │     │                           │
   │   (gemini-3.1-flash-lite) │     │ • firestore.rules (ABAC)  │
   │                           │     └───────────────────────────┘
   │ • GET /api/science/pubchem│
   │   (PubChem compound proxy)│
   └───────────────────────────┘
```

#### Core Data Entities & Schema
1. **User Profile**: `{ uid, displayName, email, xp, streakDays, lastActiveDate, level, bookmarks: string[], completedQuizzes: string[] }`
2. **Mantra**: `{ id, title, devanagari, transliteration, sandhiMeaning, translation, category, vedaSource, audioSpeed, tags }`
3. **Scripture**: `{ id, title, category, era, tradition, chaptersCount, summary, keyVerses, publicDomainLinks: { name, url }[] }`
4. **Vedic Botanical / Bioscience**: `{ id, sanskritName, botanicalName, vedaSource, traditionalUse, activeCompound, pubchemCid, chemicalFormula, canonicalSmiles, modernEvidence }`
5. **Temple**: `{ id, name, location, style: 'Nagara'|'Dravida'|'Vesara', dynasty, era, lat, lng, architecturalFeatures, symbolism }`
6. **Flashcard Deck**: `{ id, title, category, cards: { front, back, devanagari, hint }[] }`
7. **Slide Deck**: `{ id, topic, slides: { title, keyPoints, quote, visualSymbol }[] }`
8. **Quiz**: `{ id, title, difficulty, questions: { question, options, correctIndex, explanation, xp }[] }`

---

### Verification & Testing Plan
1. **Compilation Verification**: Full TypeScript build check via `compile_applet` and lint check via `lint_applet`.
2. **Interactive Event Handlers**: Validate all interactive components (mantra audio play/pause/speed, chant line highlighting, flashcard flipping & rating, story card swiping, slide deck navigation, quiz grading, AI Guru message dispatch, topic generation, and Google sign-in).
3. **Firebase & Security Rules**: Verify `firebase-blueprint.json` and strict `firestore.rules` validating ownership and user integrity.
4. **Responsive Layout Check**: Verify mobile bottom tab bar navigation, touch target hitboxes ($\ge 44\text{px}$), and desktop expansion on wide screens without horizontal overflow.
