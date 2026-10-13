import {
  Mantra,
  Scripture,
  Manuscript,
  Temple,
  BotanicalHerb,
  EpicStory,
  FlashcardDeck,
  SlideDeck,
  Quiz,
  TimelineEvent,
} from '../types';

export const MANTRAS_DATA: Mantra[] = [
  {
    id: 'gayatri-mantra',
    title: 'Gayatri Mantra',
    category: 'Gayatri',
    vedaSource: 'Rigveda Mandala 3, Sukta 62, Verse 10',
    devanagari: [
      'ॐ भूर्भुवः स्वः',
      'तत्सवितुर्वरेण्यं',
      'भर्गो देवस्य धीमहि',
      'धियो यो नः प्रचोदयात् ॥',
    ],
    transliteration: [
      'oṃ bhūr bhuvaḥ svaḥ',
      'tat savitur vareṇyaṃ',
      'bhargo devasya dhīmahi',
      'dhiyo yo naḥ pracodayāt ||',
    ],
    wordByWord: [
      { sanskrit: 'ॐ (Om)', iast: 'oṃ', english: 'Primordial cosmic vibration' },
      { sanskrit: 'भूः (Bhūḥ)', iast: 'bhūḥ', english: 'Earth / Physical realm' },
      { sanskrit: 'भुवः (Bhuvaḥ)', iast: 'bhuvaḥ', english: 'Atmosphere / Vital breath' },
      { sanskrit: 'स्वः (Svaḥ)', iast: 'svaḥ', english: 'Heavens / Spiritual realm' },
      { sanskrit: 'तत् (Tat)', iast: 'tat', english: 'That Supreme Reality' },
      { sanskrit: 'सवितुः (Savituḥ)', iast: 'savituḥ', english: 'Of the radiant Sun / Creator' },
      { sanskrit: 'वरेण्यं (Vareṇyaṃ)', iast: 'vareṇyaṃ', english: 'Most adorable and supreme' },
      { sanskrit: 'भर्गः (Bhargaḥ)', iast: 'bhargaḥ', english: 'Divine spiritual luminescence' },
      { sanskrit: 'देवस्य (Devasya)', iast: 'devasya', english: 'Of the Divine Lord' },
      { sanskrit: 'धीमहि (Dhīmahi)', iast: 'dhīmahi', english: 'We meditate upon' },
      { sanskrit: 'धियः (Dhiyaḥ)', iast: 'dhiyaḥ', english: 'Intellect and higher faculties' },
      { sanskrit: 'यः (Yaḥ)', iast: 'yaḥ', english: 'Who / That light which' },
      { sanskrit: 'नः (Naḥ)', iast: 'naḥ', english: 'Our' },
      { sanskrit: 'प्रचोदयात् (Pracodayāt)', iast: 'pracodayāt', english: 'May illuminate and guide forward' },
    ],
    meaning:
      'We meditate upon the auspicious radiant light of Savitr, the divine Sun of consciousness, who manifests the threefold cosmos. May that divine luminescence awaken and guide our intellect towards truth.',
    benefits:
      'Sharpened cognitive clarity, inner stillness, neuroplastic resilience, and deep grounding through primordial solar rhythm.',
    deityOrTheme: 'Savitr / Universal Solar Consciousness',
  },
  {
    id: 'maha-mrityunjaya',
    title: 'Maha Mrityunjaya Mantra',
    category: 'Rigveda',
    vedaSource: 'Rigveda Mandala 7, Sukta 59, Verse 12',
    devanagari: [
      'ॐ त्र्यम्बकं यजामहे',
      'सुगन्धिं पुष्टिवर्धनम् ।',
      'उर्वारुकमिव बन्धनान्',
      'मृत्योर्मुक्षीय मामृतात् ॥',
    ],
    transliteration: [
      'oṃ tryambakaṃ yajāmahe',
      'sugandhiṃ puṣṭivardhanam |',
      'urvārukam iva bandhanān',
      'mṛtyor mukṣīya māmṛtāt ||',
    ],
    wordByWord: [
      { sanskrit: 'त्र्यम्बकं (Tryambakaṃ)', iast: 'tryambakaṃ', english: 'The Three-Eyed Lord (Shiva)' },
      { sanskrit: 'यजामहे (Yajāmahe)', iast: 'yajāmahe', english: 'We worship and revere' },
      { sanskrit: 'सुगन्धिं (Sugandhiṃ)', iast: 'sugandhiṃ', english: 'Fragrant with virtue' },
      { sanskrit: 'पुष्टिवर्धनम् (Puṣṭivardhanam)', iast: 'puṣṭi-vardhanam', english: 'Nourisher of all vitality' },
      { sanskrit: 'उर्वारुकम् (Urvārukam)', iast: 'urvārukam', english: 'Like a ripe melon / cucumber' },
      { sanskrit: 'इव (Iva)', iast: 'iva', english: 'Just as' },
      { sanskrit: 'बन्धनात् (Bandhanāt)', iast: 'bandhanāt', english: 'From its stem / attachment' },
      { sanskrit: 'मृत्योः (Mṛtyoḥ)', iast: 'mṛtyoḥ', english: 'From mortality and ignorance' },
      { sanskrit: 'मुक्षीय (Mukṣīya)', iast: 'mukṣīya', english: 'May we be liberated' },
      { sanskrit: 'मा अमृतात् (Mā Amṛtāt)', iast: 'mā amṛtāt', english: 'Never from the nectar of immortality' },
    ],
    meaning:
      'We worship the Three-Eyed Lord who is fragrant and nourishes all beings. Just as a ripe melon effortlessly detaches from its vine, may we be liberated from mortality, fear, and bondage, resting eternally in the nectar of truth.',
    benefits:
      'Alleviates mortal anxiety, dissolves emotional clinging, fosters physical healing and profound psychological calmness.',
    deityOrTheme: 'Shiva / Rudra as Transcendent Healer',
  },
  {
    id: 'shanti-mantra-sahana',
    title: 'Sahanāvavatu Shanti Mantra',
    category: 'Shanti',
    vedaSource: 'Taittiriya Upanishad 2.1 & Katha Upanishad',
    devanagari: [
      'ॐ सह नाववतु ।',
      'सह नौ भुनक्तु ।',
      'सह वीर्यं करवावहै ।',
      'तेजस्वि नावधीतमस्तु मा विद्विषावहै ।',
      'ॐ शान्तिः शान्तिः शान्तिः ॥',
    ],
    transliteration: [
      'oṃ saha nāv avatu |',
      'saha nau bhunaktu |',
      'saha vīryaṃ karavāvahai |',
      'tejasvi nāv adhītam astu mā vidviṣāvahai |',
      'oṃ śāntiḥ śāntiḥ śāntiḥ ||',
    ],
    wordByWord: [
      { sanskrit: 'सह (Saha)', iast: 'saha', english: 'Together' },
      { sanskrit: 'नौ (Nau)', iast: 'nau', english: 'Both of us (teacher and student)' },
      { sanskrit: 'अवतु (Avatu)', iast: 'avatu', english: 'May the Divine protect' },
      { sanskrit: 'भुनक्तु (Bhunaktu)', iast: 'bhunaktu', english: 'May nourish us' },
      { sanskrit: 'वीर्यं (Vīryaṃ)', iast: 'vīryaṃ', english: 'Spiritual vigor & intellect' },
      { sanskrit: 'करवावहै (Karavāvahai)', iast: 'karavāvahai', english: 'May we generate together' },
      { sanskrit: 'तेजस्वि (Tejasvi)', iast: 'tejasvi', english: 'Full of illumination' },
      { sanskrit: 'अधीतं (Adhītam)', iast: 'adhītam', english: 'Our shared study' },
      { sanskrit: 'मा विद्विषावहै (Mā Vidviṣāvahai)', iast: 'mā vidviṣāvahai', english: 'May we never harbor animosity' },
    ],
    meaning:
      'May the Divine protect us both together; may the Divine nourish us both together. May we work together with great vitality. May our study be brilliant and illuminated. May we never harbor ill-will between us. Om Peace, Peace, Peace.',
    benefits:
      'Cultivates collaborative camaraderie in learning, dissolves ego-conflicts, sets deep harmonic focus before study.',
    deityOrTheme: 'Guru-Shishya Harmony & Universal Peace',
  },
  {
    id: 'asato-ma-sadgamaya',
    title: 'Pavamana Mantra (Asato Mā)',
    category: 'Upanishad',
    vedaSource: 'Brihadaranyaka Upanishad 1.3.28',
    devanagari: [
      'ॐ असतो मा सद्गमय ।',
      'तमसो मा ज्योतिर्गमय ।',
      'मृत्यschemaोर्मा अमृतं गमय ।',
      'ॐ शान्तिः शान्तिः शान्तिः ॥',
    ],
    transliteration: [
      'oṃ asato mā sad gamaya |',
      'tamaso mā jyotir gamaya |',
      'mṛtyor mā amṛtaṃ gamaya |',
      'oṃ śāntiḥ śāntiḥ śāntiḥ ||',
    ],
    wordByWord: [
      { sanskrit: 'असतः (Asataḥ)', iast: 'asataḥ', english: 'From falsehood / unreal' },
      { sanskrit: 'मा (Mā)', iast: 'mā', english: 'Lead me' },
      { sanskrit: 'सत् (Sat)', iast: 'sat', english: 'Unto eternal Truth' },
      { sanskrit: 'तमसः (Tamasaḥ)', iast: 'tamasaḥ', english: 'From darkness / ignorance' },
      { sanskrit: 'ज्योतिः (Jyotiḥ)', iast: 'jyotiḥ', english: 'Unto self-luminous Light' },
      { sanskrit: 'मृत्योः (Mṛtyoḥ)', iast: 'mṛtyoḥ', english: 'From death and limitation' },
      { sanskrit: 'अमृतम् (Amṛtam)', iast: 'amṛtam', english: 'Unto Immortality' },
    ],
    meaning:
      'Lead me from the unreal to the real. Lead me from darkness to spiritual light. Lead me from the fear of death unto immortality. Om Peace, Peace, Peace.',
    benefits:
      'A universal prayer of existential orientation, grounding focus during transitions, eliminating doubt.',
    deityOrTheme: 'Transcendence & Self-Realization',
  },
  {
    id: 'purusha-suktam-verse1',
    title: 'Purusha Suktam Opening',
    category: 'Rigveda',
    vedaSource: 'Rigveda 10.90.1 & Shukla Yajurveda 31.1',
    devanagari: [
      'ॐ सहस्रशीर्षा पुरुषः',
      'सहस्राक्षः सहस्रपात् ।',
      'स भूमिं विश्वतो वृत्वा',
      'अत्यतिष्ठद्दशाङ्गुलम् ॥',
    ],
    transliteration: [
      'oṃ sahasra-śīrṣā puruṣaḥ',
      'sahasrākṣaḥ sahasra-pāt |',
      'sa bhūmiṃ viśvato vṛtvā',
      'atyatiṣṭhad daśāṅgulam ||',
    ],
    wordByWord: [
      { sanskrit: 'सहस्रशीर्षा (Sahasra-śīrṣā)', iast: 'sahasra-śīrṣā', english: 'Having a thousand (infinite) heads' },
      { sanskrit: 'पुरुषः (Puruṣaḥ)', iast: 'puruṣaḥ', english: 'Cosmic Supreme Consciousness' },
      { sanskrit: 'सहस्राक्षः (Sahasrākṣaḥ)', iast: 'sahasrākṣaḥ', english: 'Infinite eyes' },
      { sanskrit: 'सहस्रपात् (Sahasra-pāt)', iast: 'sahasra-pāt', english: 'Infinite feet' },
      { sanskrit: 'स भूमिं (Sa Bhūmiṃ)', iast: 'sa bhūmiṃ', english: 'He, the manifest cosmos' },
      { sanskrit: 'विश्वतः (Viśvataḥ)', iast: 'viśvataḥ', english: 'On all sides' },
      { sanskrit: 'वृत्वा (Vṛtvā)', iast: 'vṛtvā', english: 'Pervading completely' },
      { sanskrit: 'अत्यतिष्ठत् (Atyatiṣṭhat)', iast: 'atyatiṣṭhat', english: 'Extends beyond' },
      { sanskrit: 'दशाङ्गुलम् (Daśāṅgulam)', iast: 'daśāṅgulam', english: 'By ten fingers (infinitely beyond measure)' },
    ],
    meaning:
      'The Cosmic Being has thousands of heads, thousands of eyes, and thousands of feet. Pervading the entire cosmos on every dimension, Consciousness extends infinitely beyond all manifested limits.',
    benefits:
      'Expands perception beyond the ego-personality into holistic unity with nature and the cosmos.',
    deityOrTheme: 'Purusha / Universal Cosmic Consciousness',
  },
  {
    id: 'shiva-tandava-opening',
    title: 'Shiva Tandava Stotram',
    category: 'Stotra',
    vedaSource: 'Composed by Ravana / Classical Shaiva Literature',
    devanagari: [
      'जटाटवीगलज्जलप्रवाहपावितस्थले',
      'गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् ।',
      'डमड्डमड्डमड्डमन्निनादवड्डमर्वयं',
      'चकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥',
    ],
    transliteration: [
      'jaṭāṭavī-galaj-jala-pravāha-pāvita-sthale',
      'gale\'valambya lambitāṃ bhujaṅga-tuṅga-mālikām |',
      'ḍamaḍ-ḍamaḍ-ḍamaḍ-ḍaman-nināda-vad-ḍamarvayaṃ',
      'cakāra caṇḍa-tāṇḍavaṃ tanotu naḥ śivaḥ śivam ||',
    ],
    wordByWord: [
      { sanskrit: 'जटाटवी (Jaṭā-aṭavī)', iast: 'jaṭāṭavī', english: 'Forest of matted hair' },
      { sanskrit: 'गलज्जल (Galaj-jala)', iast: 'galaj-jala', english: 'Flowing Ganga water' },
      { sanskrit: 'पावित (Pāvita)', iast: 'pāvita', english: 'Sanctifying the earth' },
      { sanskrit: 'भुजङ्ग (Bhujaṅga)', iast: 'bhujaṅga', english: 'Garland of mighty serpents' },
      { sanskrit: 'डमड्डमत् (Ḍamaḍ-ḍamat)', iast: 'ḍamaḍ-ḍamat', english: 'Resounding beat of the damaru drum' },
      { sanskrit: 'ताण्डवं (Tāṇḍavam)', iast: 'tāṇḍavam', english: 'Cosmic rhythmic dance' },
    ],
    meaning:
      'With His matted hair vibrating like a dense forest sanctified by the roaring streams of the Ganga, with a garland of serpents coiled gracefully around His neck, to the rhythmic reverberation of His damaru drum, Lord Shiva performs His fierce cosmic dance.',
    benefits:
      'Awakens fierce creative vitality, removes sloth, channels kinetic energy into ecstatic rhythmic mastery.',
    deityOrTheme: 'Nataraja / The Cosmic Dance of Dissolution and Renewal',
  },
  {
    id: 'nasadiya-sukta-verse1',
    title: 'Nasadiya Sukta (Creation Hymn)',
    category: 'Rigveda',
    vedaSource: 'Rigveda Mandala 10, Sukta 129, Verse 1',
    devanagari: [
      'नासदासीन्नो सदासीत्तदानीं',
      'नासीद्रजो नो व्योमा परो यत् ।',
      'किमावरीवः कुह कस्य शर्मन्',
      'अम्भः किमासीद्गहनं गभीरम् ॥',
    ],
    transliteration: [
      'nāsad āsīn no sad āsīt tadānīṃ',
      'nāsīd rajo no vyomā paro yat |',
      'kim āvarīvaḥ kuha kasya śarman',
      'ambhaḥ kim āsīd gahanaṃ gabhīram ||',
    ],
    wordByWord: [
      { sanskrit: 'न असत् (Na Asat)', iast: 'na asat', english: 'Neither non-existence' },
      { sanskrit: 'न सत् (Na Sat)', iast: 'na sat', english: 'Nor existence' },
      { sanskrit: 'तदानीम् (Tadānīm)', iast: 'tadānīm', english: 'At that dawn of being' },
      { sanskrit: 'व्योमा (Vyomā)', iast: 'vyomā', english: 'No space or heavenly dome' },
      { sanskrit: 'गहनं (Gahanaṃ)', iast: 'gahanaṃ', english: 'Profound unfathomed depth' },
    ],
    meaning:
      'Then was not non-existence nor existence; there was no realm of air, no sky beyond it. What covered it, and where? And what gave shelter? Was there water, unfathomed and deep?',
    benefits:
      'The pinnacle of ancient existential inquiry, celebrated by quantum physicists and cosmologists alike.',
    deityOrTheme: 'Cosmic Genesis & Quantum Emptiness',
  },
  {
    id: 'samaveda-om-svaha',
    title: 'Samaveda Udgitha Hymn',
    category: 'Samaveda',
    vedaSource: 'Chandogya Upanishad 1.1.1 (Samavedic Lineage)',
    devanagari: [
      'ॐ इत्येतदक्षरमुद्गीथमुपासीत ।',
      'ओमिति ह्युद्गायति तस्योपव्याख्यानम् ॥',
    ],
    transliteration: [
      'oṃ ity etad akṣaram udgītham upāsīta |',
      'om iti hy udgāyati tasyopavyākhyānam ||',
    ],
    wordByWord: [
      { sanskrit: 'ॐ (Om)', iast: 'oṃ', english: 'The syllable Om' },
      { sanskrit: 'अक्षरम् (Akṣaram)', iast: 'akṣaram', english: 'The imperishable word' },
      { sanskrit: 'उद्गीथम् (Udgītham)', iast: 'udgītham', english: 'The high celestial chant' },
      { sanskrit: 'उपासीत (Upāsīta)', iast: 'upāsīta', english: 'One should meditate upon' },
    ],
    meaning:
      'One should meditate upon the imperishable syllable Om as the high chant (Udgitha). For with Om one begins chanting the sacred song.',
    benefits:
      'Enhances acoustic resonance, voice breath control, and sonic absorption into Nada Brahma (sound as divine).',
    deityOrTheme: 'Sama Melodic Resonance',
  },
  {
    id: 'atharvaveda-prithvi-sukta',
    title: 'Prithvi Sukta (Earth Anthem)',
    category: 'Atharvaveda',
    vedaSource: 'Atharvaveda Kanda 12, Sukta 1, Verse 12',
    devanagari: [
      'माता भूमिः पुत्रो अहं पृथिव्याः ।',
      'पर्जन्यः पिता स उ नः पिपर्तु ॥',
    ],
    transliteration: [
      'mātā bhūmiḥ putro ahaṃ pṛthivyāḥ |',
      'parjanyaḥ pitā sa u naḥ pipartu ||',
    ],
    wordByWord: [
      { sanskrit: 'माता (Mātā)', iast: 'mātā', english: 'Mother' },
      { sanskrit: 'भूमिः (Bhūmiḥ)', iast: 'bhūmiḥ', english: 'The living Earth' },
      { sanskrit: 'पुत्रः (Putraḥ)', iast: 'putraḥ', english: 'Child' },
      { sanskrit: 'अहम् (Aham)', iast: 'aham', english: 'I am' },
      { sanskrit: 'पृथिव्याः (Pṛthivyāḥ)', iast: 'pṛthivyāḥ', english: 'Of Mother Earth' },
      { sanskrit: 'पर्जन्यः (Parjanyaḥ)', iast: 'parjanyaḥ', english: 'The sky and life-giving rain' },
    ],
    meaning:
      'Earth is my Mother, and I am a child of the Earth. The rain-bearing sky is my Father; may they sustain us with nourishment and vitality.',
    benefits:
      'Foundational ecological mantra, builds deep connection with the natural world and planetary stewardship.',
    deityOrTheme: 'Bhumi Devi / Ecocentric Reverence',
  },
  {
    id: 'shanti-shano-mitra',
    title: 'Shanno Mitra Shanti Mantra',
    category: 'Yajurveda',
    vedaSource: 'Taittiriya Upanishad 1.1',
    devanagari: [
      'ॐ शं नो मित्रः शं वरुणः ।',
      'शं नो भवत्वर्यमा ।',
      'शं न इन्द्रो बृहस्पतिः ।',
      'शं नो विष्णुरुरुक्रमः ॥',
    ],
    transliteration: [
      'oṃ śaṃ no mitraḥ śaṃ varuṇaḥ |',
      'śaṃ no bhavatv aryamā |',
      'śaṃ na indro bṛhaspatiḥ |',
      'śaṃ no viṣṇur urukramaḥ ||',
    ],
    wordByWord: [
      { sanskrit: 'शम् (Śam)', iast: 'śam', english: 'Auspicious peace & well-being' },
      { sanskrit: 'नः (Naḥ)', iast: 'naḥ', english: 'To us' },
      { sanskrit: 'मित्रः (Mitraḥ)', iast: 'mitraḥ', english: 'Friendship / deity of light' },
      { sanskrit: 'वरुणः (Varuṇaḥ)', iast: 'varuṇaḥ', english: 'Cosmic law / deity of waters' },
      { sanskrit: 'विष्णुः (Viṣṇuḥ)', iast: 'viṣṇuḥ', english: 'The all-pervading preserver' },
    ],
    meaning:
      'May Mitra be propitious to us; may Varuna be auspicious. May Aryaman bless us. May Indra and Brihaspati grant us prosperity. May Vishnu of wide strides bring us harmony.',
    benefits:
      'Calms social frictions, invites harmony between elements, and removes environmental disharmonies.',
    deityOrTheme: 'Vedic Devas of Natural Order',
  },
  {
    id: 'gita-karmanye-vadhikaraste',
    title: 'Karmanye Vadhikaraste',
    category: 'Upanishad',
    vedaSource: 'Bhagavad Gita Chapter 2, Verse 47',
    devanagari: [
      'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।',
      'मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    ],
    transliteration: [
      'karmaṇy evādhikāras te mā phaleṣu kadācana |',
      'mā karma-phala-hetur bhūr mā te saṅgo\'stv akarmaṇi ||',
    ],
    wordByWord: [
      { sanskrit: 'कर्मणि (Karmaṇi)', iast: 'karmaṇi', english: 'In purposeful action alone' },
      { sanskrit: 'एव (Eva)', iast: 'eva', english: 'Only / truly' },
      { sanskrit: 'अधिकारः (Adhikāraḥ)', iast: 'adhikāraḥ', english: 'Your right and sovereignty' },
      { sanskrit: 'ते (Te)', iast: 'te', english: 'Yours' },
      { sanskrit: 'मा फलेषु (Mā Phaleṣu)', iast: 'mā phaleṣu', english: 'Never in the fruits / outcomes' },
      { sanskrit: 'कदाचन (Kadācana)', iast: 'kadācana', english: 'At any time' },
      { sanskrit: 'अकर्मणि (Akarmaṇi)', iast: 'akarmaṇi', english: 'In inaction / passivity' },
    ],
    meaning:
      'You have a right to your actions alone, never to their fruits. Do not let the fruits of action be your motive, nor let your attachment turn toward inaction.',
    benefits:
      'The foundational core of Karma Yoga. Completely dissolves outcome anxiety, performance stress, and burnout.',
    deityOrTheme: 'Sri Krishna / Nishkama Karma',
  },
  {
    id: 'sarve-bhavantu-sukhinah',
    title: 'Universal Well-being Shloka',
    category: 'Shanti',
    vedaSource: 'Brihadaranyaka Upanishad Tradition & Garuda Purana',
    devanagari: [
      'ॐ सर्वे भवन्तु सुखिनः',
      'सर्वे सन्तु निरामयाः ।',
      'सर्वे भद्राणि पश्यन्तु',
      'मा कश्चिद्दुःखभाग्भवेत् ॥',
    ],
    transliteration: [
      'oṃ sarve bhavantu sukhinaḥ',
      'sarve santu nirāmayāḥ |',
      'sarve bhadrāṇi paśyantu',
      'mā kaścid duḥkha-bhāg bhavet ||',
    ],
    wordByWord: [
      { sanskrit: 'सर्वे (Sarve)', iast: 'sarve', english: 'May all beings' },
      { sanskrit: 'सुखिनः (Sukhinaḥ)', iast: 'sukhinaḥ', english: 'Be filled with happiness' },
      { sanskrit: 'निरामयाः (Nirāmayāḥ)', iast: 'nirāmayāḥ', english: 'Be free from illness and suffering' },
      { sanskrit: 'भद्राणि (Bhadrāṇi)', iast: 'bhadrāṇi', english: 'Noble auspiciousness' },
      { sanskrit: 'पश्यन्तु (Paśyantu)', iast: 'paśyantu', english: 'May see and experience' },
      { sanskrit: 'मा कश्चित् (Mā Kaścit)', iast: 'mā kaścit', english: 'May no one' },
      { sanskrit: 'दुःखभाग् (Duḥkha-bhāg)', iast: 'duḥkha-bhāg', english: 'Partake of sorrow' },
    ],
    meaning:
      'May all beings be happy. May all beings be healthy and free from illness. May all perceive only goodness and nobility. May no one suffer or be touched by grief.',
    benefits:
      'Cultivates boundless empathy (Metta / Maitri), cleanses psychological toxicity, generates selfless goodwill.',
    deityOrTheme: 'Universal Compassion (Loka Samasta)',
  },
  {
    id: 'vak-suktam-rigveda',
    title: 'Devi Suktam (Vak Sukta)',
    category: 'Rigveda',
    vedaSource: 'Rigveda Mandala 10, Sukta 125, Verse 8',
    devanagari: [
      'वाताइव प्रवामि आरभमाणा',
      'विश्वा भुवनानि ।',
      'परो दिवा पर एना पृथिव्यै',
      'एतावती महिना सं बभूव ॥',
    ],
    transliteration: [
      'vātā iva pravāmi ārabhamāṇā',
      'viśvā bhuvanāni |',
      'paro divā para enā pṛthivyai',
      'etāvatī mahinā saṃ babhūva ||',
    ],
    wordByWord: [
      { sanskrit: 'वाता इव (Vātā iva)', iast: 'vātā iva', english: 'Like the tempestuous wind' },
      { sanskrit: 'प्रवामि (Pravāmi)', iast: 'pravāmi', english: 'I blow and breathe forth' },
      { sanskrit: 'विश्वा भुवनानि (Viśvā bhuvanāni)', iast: 'viśvā bhuvanāni', english: 'Holding all created worlds' },
      { sanskrit: 'परो दिवा (Paro divā)', iast: 'paro divā', english: 'Beyond heaven' },
      { sanskrit: 'पर पृथिव्या (Para pṛthivyā)', iast: 'para pṛthivyā', english: 'Beyond this earth' },
    ],
    meaning:
      'I blow forth like the wind while holding all the universes together. Beyond heaven, beyond this earth, in majestic grandeur have I expanded through my own power.',
    benefits:
      'Celebrates the primordial feminine creative energy (Shakti) as the source of speech, intellect, and reality.',
    deityOrTheme: 'Vak / Saraswati / Cosmic Primordial Word',
  },
  {
    id: 'ganesh-maha-mantra',
    title: 'Ganesha Vakratunda Mantra',
    category: 'Stotra',
    vedaSource: 'Ganesha Purana & Mudgala Purana',
    devanagari: [
      'वक्रतुण्ड महाकाय',
      'सूर्यकोटिसमप्रभ ।',
      'निर्विघ्नं कुरु मे देव',
      'सर्वकार्येषु सर्वदा ॥',
    ],
    transliteration: [
      'vakratuṇḍa mahākāya',
      'sūryakoṭi-samaprabha |',
      'nirvighnaṃ kuru me deva',
      'sarvakāryeṣu sarvadā ||',
    ],
    wordByWord: [
      { sanskrit: 'वक्रतुण्ड (Vakratuṇḍa)', iast: 'vakra-tuṇḍa', english: 'O Lord with the curved trunk' },
      { sanskrit: 'महाकाय (Mahākāya)', iast: 'mahākāya', english: 'Of vast colossal form' },
      { sanskrit: 'सूर्यकोटि (Sūryakoṭi)', iast: 'sūryakoṭi', english: 'Equal to ten million suns' },
      { sanskrit: 'निर्विघ्नं (Nirvighnaṃ)', iast: 'nirvighnaṃ', english: 'Free of obstacles' },
      { sanskrit: 'सर्वकार्येषु (Sarvakāryeṣu)', iast: 'sarva-kāryeṣu', english: 'In all undertakings' },
    ],
    meaning:
      'O Lord of curved trunk and colossal body, whose brilliance equals that of ten million suns, make all my endeavors free from obstacles at all times.',
    benefits:
      'Removes cognitive resistance, creative blockages, and anxiety at the beginning of any project.',
    deityOrTheme: 'Ganesha / Master of Beginnings',
  },
  {
    id: 'krishna-madhurashtakam',
    title: 'Madhurashtakam Opening',
    category: 'Stotra',
    vedaSource: 'Vallabhacharya / Shuddhadvaita Tradition',
    devanagari: [
      'अधरं मधुरं वदनं मधुरं',
      'नयनं मधुरं हसितं मधुरम् ।',
      'हृदयं मधुरं गमनं मधुरं',
      'मधुराधिपतेरखिलं मधुरम् ॥',
    ],
    transliteration: [
      'adharaṃ madhuraṃ vadanaṃ madhuraṃ',
      'nayanaṃ madhuraṃ hasitaṃ madhuram |',
      'hṛdayaṃ madhuraṃ gamanaṃ madhuraṃ',
      'madhurādhipater akhilaṃ madhuram ||',
    ],
    wordByWord: [
      { sanskrit: 'अधरं (Adharaṃ)', iast: 'adharaṃ', english: 'Lips' },
      { sanskrit: 'मधुरं (Madhuraṃ)', iast: 'madhuraṃ', english: 'Sweet and lovely' },
      { sanskrit: 'वदनं (Vadanaṃ)', iast: 'vadanaṃ', english: 'Face' },
      { sanskrit: 'नयनं (Nayanaṃ)', iast: 'nayanaṃ', english: 'Eyes' },
      { sanskrit: 'मधुराधिपतेः (Madhurādhipateḥ)', iast: 'madhurādhipateḥ', english: 'Of the Lord of sweetness' },
      { sanskrit: 'अखिलं (Akhilam)', iast: 'akhilam', english: 'Everything is sweet' },
    ],
    meaning:
      'Sweet are His lips, sweet is His countenance, sweet are His eyes, sweet is His gentle smile. Sweet is His heart, sweet is His graceful gait—everything about the Lord of Sweetness is utterly sweet.',
    benefits:
      'Cultivates devotion through aesthetic beauty (Madhurya Bhava), softening rigid mental patterns.',
    deityOrTheme: 'Bhakti & Aesthetic Devotion',
  },
];

export const SCRIPTURES_DATA: Scripture[] = [
  {
    id: 'rigveda',
    title: 'Rigveda Samhita',
    category: 'Veda',
    era: 'c. 1500–1200 BCE',
    tradition: 'Shakala Shakha / Vedic Rshis',
    chaptersCount: '10 Mandalas (1,028 Suktas / 10,600 Mantras)',
    summary:
      'The oldest extant Sanskrit scripture and foundational pillar of Indo-European thought. It encodes poetic hymns of deep philosophical wonder celebrating cosmic order (Rta), dawn (Ushas), solar fire (Agni), and the origin of existence.',
    keyThemes: ['Cosmic Order (Rta)', 'Sacred Speech (Vak)', 'Nature Consciousness', 'Creation Inquiry'],
    keyVerses: [
      {
        devanagari: 'एकं सद्विप्रा बहुधा वदन्ति ।',
        translation: 'Truth is One; the wise speak of It in many ways.',
        citation: 'Rigveda 1.164.46',
      },
      {
        devanagari: 'सङ्गच्छध्वं संवदध्वं सं वो मनांसि जानताम् ।',
        translation: 'Assemble together, speak together, may your minds be united in common understanding.',
        citation: 'Rigveda 10.191.2',
      },
    ],
    publicDomainLinks: [
      { name: 'Rigveda Sanskrit (GRETIL)', url: 'https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/rvs___u.htm', platform: 'GRETIL' },
      { name: 'Rigveda Translation (Sacred-Texts)', url: 'https://www.sacred-texts.com/hin/rigveda/index.htm', platform: 'Sacred-Texts' },
      { name: 'Wikisource Sanskrit Rigveda', url: 'https://sa.wikisource.org/wiki/%E0%A4%8B%E0%A4%97%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A4%83', platform: 'Wikisource' },
    ],
  },
  {
    id: 'samaveda',
    title: 'Samaveda Samhita',
    category: 'Veda',
    era: 'c. 1200–1000 BCE',
    tradition: 'Kauthuma & Jaiminiya Shakhas',
    chaptersCount: '1,875 Verses organized into Archika and Gana',
    summary:
      'The Veda of sacred chants, melody, and musical meter. Nearly all verses are set to intricate melodies (saman) with seven-note scales (Saptaswara), serving as the fountainhead of Indian classical music (Carnatic and Hindustani).',
    keyThemes: ['Sacred Acoustics (Nada)', 'Musical Meter (Chhandas)', 'Ecstatic Chanting', 'Psychic Elevation'],
    keyVerses: [
      {
        devanagari: 'वेदानां सामवेदोऽस्मि ।',
        translation: 'Among the Vedas, I am the Samaveda.',
        citation: 'Bhagavad Gita 10.22',
      },
    ],
    publicDomainLinks: [
      { name: 'Samaveda Archive (Sacred-Texts)', url: 'https://www.sacred-texts.com/hin/sv.htm', platform: 'Sacred-Texts' },
      { name: 'Wikisource Samaveda', url: 'https://sa.wikisource.org/wiki/%E0%A4%B8%E0%A4%BE%E0%A4%AE%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A4%83', platform: 'Wikisource' },
    ],
  },
  {
    id: 'yajurveda',
    title: 'Yajurveda (Shukla & Krishna)',
    category: 'Veda',
    era: 'c. 1100–900 BCE',
    tradition: 'Madhyandina, Kanva, Taittiriya',
    chaptersCount: '40 Adhyayas (Shukla) / Multiple Kandas (Krishna)',
    summary:
      'The liturgical Veda outlining sacred ceremonies, altar geometry (Shulba Sutras), and existential mantras. Contains the renowned Isha Upanishad as its final 40th chapter and the Sri Rudram hymn.',
    keyThemes: ['Sacred Action (Yajna)', 'Geometrical Altars', 'Cosmic Gratitude', 'Universal Sovereignty'],
    keyVerses: [
      {
        devanagari: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।',
        translation: 'All this, whatever moves in this changing world, is pervaded and enveloped by the Divine.',
        citation: 'Isha Upanishad (Yajurveda 40.1)',
      },
    ],
    publicDomainLinks: [
      { name: 'White Yajurveda (Sacred-Texts)', url: 'https://www.sacred-texts.com/hin/wyv/index.htm', platform: 'Sacred-Texts' },
      { name: 'GRETIL Yajurveda Texts', url: 'https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/yvs___u.htm', platform: 'GRETIL' },
    ],
  },
  {
    id: 'atharvaveda',
    title: 'Atharvaveda Samhita',
    category: 'Veda',
    era: 'c. 1000–800 BCE',
    tradition: 'Shaunaka & Paippalada Shakhas',
    chaptersCount: '20 Kandas (730 Suktas / 6,000 Mantras)',
    summary:
      'The Veda of daily living, botanical sciences (Ayurveda roots), statecraft, ecological hymns, psychology, and healing charms. Revered for its Prithvi Sukta—the earliest recorded ecological anthem to Earth.',
    keyThemes: ['Herbal Pharmacopeia (Ayurveda)', 'Environmental Stewardship', 'Domestic Well-being', 'Psychological Resilience'],
    keyVerses: [
      {
        devanagari: 'माता भूमिः पुत्रो अहं पृथिव्याः ।',
        translation: 'Earth is my mother, and I am the child of Earth.',
        citation: 'Atharvaveda 12.1.12',
      },
    ],
    publicDomainLinks: [
      { name: 'Atharvaveda (Sacred-Texts)', url: 'https://www.sacred-texts.com/hin/av/index.htm', platform: 'Sacred-Texts' },
      { name: 'Wikisource Atharvaveda', url: 'https://sa.wikisource.org/wiki/%E0%A4%85%E0%A4%A5%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A4%83', platform: 'Wikisource' },
    ],
  },
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gita',
    category: 'Itihasa',
    era: 'c. 5th–2nd Century BCE',
    tradition: 'Mahabharata Bhishma Parva (Chapters 23–40)',
    chaptersCount: '18 Chapters (700 Verses)',
    summary:
      'The profound philosophical dialogue between Prince Arjuna and Bhagavan Sri Krishna on the battlefield of Kurukshetra. Synthesizes Karma Yoga (selfless action), Bhakti Yoga (devotion), and Jnana Yoga (self-inquiry) into a practical manual for duty and mental freedom.',
    keyThemes: ['Svadharma (Personal Duty)', 'Equanimity (Samatva)', 'Cosmic Vision (Vishwaroopa)', 'Self-Transcendence'],
    keyVerses: [
      {
        devanagari: 'समत्वं योग उच्यते ।',
        translation: 'Equanimity of mind is called Yoga.',
        citation: 'Bhagavad Gita 2.48',
      },
      {
        devanagari: 'यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् । ततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ॥',
        translation: 'From wherever the wandering and flickering mind strays, one should withdraw it and bring it under the control of the Self.',
        citation: 'Bhagavad Gita 6.26',
      },
    ],
    publicDomainLinks: [
      { name: 'GRETIL Sanskrit Gita with Padapatha', url: 'https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/2_epic/mbh/sas/gita_pu.htm', platform: 'GRETIL' },
      { name: 'Sacred-Texts Bhagavad Gita', url: 'https://www.sacred-texts.com/hin/gita/index.htm', platform: 'Sacred-Texts' },
      { name: 'Internet Archive Classical Translations', url: 'https://archive.org/details/BhagavadGitaTranslations', platform: 'Archive.org' },
    ],
  },
  {
    id: 'katha-upanishad',
    title: 'Katha Upanishad',
    category: 'Upanishad',
    era: 'c. 8th–6th Century BCE',
    tradition: 'Krishna Yajurveda (Katha Shakha)',
    chaptersCount: '2 Adhyayas (6 Vallis / 119 Verses)',
    summary:
      'The timeless dialogue between the youthful seeker Nachiketa and Yama (the Lord of Death). Nachiketa turns down limitless worldly wealth and pleasures to ask the ultimate question: What happens beyond death? Yama reveals the secret of the immortal Atman.',
    keyThemes: ['Chariot Metaphor of Mind/Intellect', 'Shreyas vs Preyas (Wise vs Pleasant)', 'Nature of the Self (Atman)'],
    keyVerses: [
      {
        devanagari: 'उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत ।',
        translation: 'Arise, awake, and learn by approaching the great masters.',
        citation: 'Katha Upanishad 1.3.14',
      },
      {
        devanagari: 'आत्मानँ रथिनं विद्धि शरीरँ रथमेव तु । बुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥',
        translation: 'Know the Atman as the master of the chariot, the body as the chariot itself, the intellect as the charioteer, and the mind as the reins.',
        citation: 'Katha Upanishad 1.3.3',
      },
    ],
    publicDomainLinks: [
      { name: 'Katha Upanishad at Wikisource', url: 'https://sa.wikisource.org/wiki/%E0%A4%95%E0%A4%A0%E0%A5%8B%E0%A4%AA%E0%A4%A8%E0%A4%BF%E0%A4%B7%E0%A4%A4%E0%A5%8D', platform: 'Wikisource' },
      { name: 'Sacred-Texts Principal Upanishads', url: 'https://www.sacred-texts.com/hin/sbe15/index.htm', platform: 'Sacred-Texts' },
    ],
  },
  {
    id: 'natya-shastra',
    title: 'Natya Shastra',
    category: 'Shastra',
    era: 'c. 200 BCE–200 CE',
    tradition: 'Bharata Muni',
    chaptersCount: '36 Chapters (6,000 Shlokas)',
    summary:
      'The definitive encyclopedic treatise on performing arts, dramaturgy, aesthetics, music, dance gestures (Mudras), stage architecture, and emotional psychology. Introduces the Rasa theory (the 9 aesthetic states) that underpins classical Indian art and cinema.',
    keyThemes: ['The Nine Rasas (Aesthetic Flavors)', 'Abhinaya (Expression)', 'Sacred Theatre', 'Micro-tonal Acoustics'],
    keyVerses: [
      {
        devanagari: 'विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः ।',
        translation: 'Aesthetic experience (Rasa) arises from the harmonious confluence of causes (Vibhava), external expressions (Anubhava), and fleeting emotions (Vyabhichari).',
        citation: 'Natya Shastra 6.31',
      },
    ],
    publicDomainLinks: [
      { name: 'GRETIL Natya Shastra Sanskrit', url: 'https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/5_poetry/1_treat/bhns_01u.htm', platform: 'GRETIL' },
      { name: 'Archive.org Natya Shastra English Translation', url: 'https://archive.org/details/natyashastra00bhar', platform: 'Archive.org' },
    ],
  },
  {
    id: 'arthashastra',
    title: 'Kautilya Arthashastra',
    category: 'Shastra',
    era: 'c. 4th–3rd Century BCE',
    tradition: 'Chanakya (Kautilya / Vishnugupta)',
    chaptersCount: '15 Adhikaranas (150 Chapters / 6,000 Sutras)',
    summary:
      'The classical Sanskrit masterpiece on statecraft, political economy, judicial administration, diplomacy (Mandala theory of alliances), espionage, and resource management written for the Maurya Empire.',
    keyThemes: ['Saptanga Theory of State', 'Poverty Alleviation & Trade', 'Diplomatic Mandala', 'Ethics of Governance'],
    keyVerses: [
      {
        devanagari: 'प्रजासुखे सुखं राज्ञः प्रजानां च हिते हितम् ।',
        translation: 'In the happiness of his citizens lies the king\'s happiness; in their welfare, his own welfare.',
        citation: 'Arthashastra 1.19.34',
      },
    ],
    publicDomainLinks: [
      { name: 'Arthashastra Text (Sacred-Texts)', url: 'https://www.sacred-texts.com/hin/arth/index.htm', platform: 'Sacred-Texts' },
      { name: 'Wikisource Arthashastra', url: 'https://sa.wikisource.org/wiki/%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%B6%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A5%8D', platform: 'Wikisource' },
    ],
  },
  {
    id: 'ramayana',
    title: 'Valmiki Ramayana',
    category: 'Itihasa',
    era: 'c. 7th–4th Century BCE',
    tradition: 'Adi Kavi Valmiki',
    chaptersCount: '7 Kandas (24,000 Shlokas)',
    summary:
      'The premier epic (Adi Kavya) tracing the life, exile, trials, and reign of Sri Rama. Explores Maryada (ethical boundaries), filial devotion, marital fidelity, and the triumph of righteousness over tyranny across India and Southeast Asia.',
    keyThemes: ['Maryada Purushottama (Ethical Personhood)', 'Fraternal Loyalty', 'Sacrifice for Collective Good'],
    keyVerses: [
      {
        devanagari: 'जननी जन्मभूमिश्च स्वर्गादपि गरीयसी ।',
        translation: 'Mother and motherland are far greater even than heaven.',
        citation: 'Valmiki Ramayana Yuddha Kanda',
      },
    ],
    publicDomainLinks: [
      { name: 'Valmiki Ramayana in Sanskrit with Metrical Scansion', url: 'https://www.valmikiramayan.net/', platform: 'ValmikiRamayan.net' },
      { name: 'Sacred-Texts Ramayana', url: 'https://www.sacred-texts.com/hin/rama/index.htm', platform: 'Sacred-Texts' },
    ],
  },
  {
    id: 'mahabharata',
    title: 'Mahabharata',
    category: 'Itihasa',
    era: 'c. 4th Century BCE–4th Century CE',
    tradition: 'Krishna Dwaipayana Vyasa',
    chaptersCount: '18 Parvas (Over 100,000 Shlokas)',
    summary:
      'The longest epic poem ever composed in world literature. Captures the generational conflict between the Pandavas and Kauravas, encompassing deep treaties on justice, war ethics, cosmic duty, family drama, and moral ambiguity.',
    keyThemes: ['Subtlety of Dharma (Dharmasya Tattvam Nihitam Guhayam)', 'Destiny vs Free Will', 'Cosmic Cycles'],
    keyVerses: [
      {
        devanagari: 'यतो धर्मस्ततो जयः ।',
        translation: 'Where there is Dharma (truth and righteousness), there is victory.',
        citation: 'Mahabharata Udyoga Parva',
      },
    ],
    publicDomainLinks: [
      { name: 'Mahabharata Bhandarkar Critical Edition (GRETIL)', url: 'https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/2_epic/mbh/sas/mbh_01_u.htm', platform: 'GRETIL' },
      { name: 'Ganguli English Translation (Sacred-Texts)', url: 'https://www.sacred-texts.com/hin/maha/index.htm', platform: 'Sacred-Texts' },
    ],
  },
];

export const MANUSCRIPTS_DATA: Manuscript[] = [
  {
    id: 'kashmir-birchbark-rigveda',
    title: 'Kashmir Birch-Bark Rigveda (Sharada Script)',
    material: 'Birch-bark (Bhurjapatra)',
    script: 'Sharada Script',
    estimatedCentury: 'c. 15th–16th Century CE',
    preservationLocation: 'Bhandarkar Oriental Research Institute (BORI), Pune & UNESCO Memory of the World Register',
    significance:
      'Critical manuscript used by Max Müller for his 1849 Oxford editio princeps of the Rigveda. Inscribed on boiled and oiled birch tree inner bark.',
    description:
      'Written in the ancient northern Sharada script on birch sheets that resist mold and humidity naturally due to betulinic acid in the bark.',
  },
  {
    id: 'grantha-palmleaf-samaveda',
    title: 'Tanjore Palm-Leaf Samaveda with Svaras',
    material: 'Palm-leaf',
    script: 'Grantha Script',
    estimatedCentury: 'c. 16th Century CE',
    preservationLocation: 'Saraswathi Mahal Library, Thanjavur, Tamil Nadu',
    significance:
      'Encodes rare musical notations (prathama, dvitiya, tritiya, etc.) for melodic singing using stylized vertical and horizontal incised lines.',
    description:
      'Prepared from Borassus flabellifer (Palmyra palm) leaves, dried, smoked, and etched with an iron stylus (eluthani) before rubbing with lampblack and oil.',
  },
  {
    id: 'nepal-palmleaf-saddharmapundarika',
    title: 'Nepal Palm-Leaf Sanskrit Manuscript',
    material: 'Palm-leaf',
    script: 'Lichchhavi / Newari Script',
    estimatedCentury: 'c. 11th Century CE',
    preservationLocation: 'National Archives of Nepal, Kathmandu',
    significance:
      'One of the oldest surviving intact Sanskrit codices preserved by high-altitude climate, featuring colored miniature deity illuminations.',
    description:
      'Bound by wooden cover boards (patli) with silk cord threaded through center holes, painted with mineral pigments (cinnabar and lapis lazuli).',
  },
  {
    id: 'spiti-tibetan-sanskrit-fragments',
    title: 'Tabo Monastery Sanskrit Prajnaparamita Folios',
    material: 'Handmade paper',
    script: 'Siddhamatrika / Early Devanagari',
    estimatedCentury: 'c. 11th–12th Century CE',
    preservationLocation: 'Tabo Monastery, Spiti Valley, Himachal Pradesh',
    significance:
      'Demonstrates the Himalayan transmission of philosophical texts across northern mountain monasteries during the Golden Era of Nalanda.',
    description:
      'Handmade Daphne bark paper dyed with real indigo and inscribed in brilliant gold and silver inks to preserve against rodent degradation.',
  },
  {
    id: 'orissa-palmleaf-gitagovinda',
    title: 'Odisha Carved Palm-Leaf Gita Govinda',
    material: 'Palm-leaf',
    script: 'Odia Script with Sanskrit Text',
    estimatedCentury: 'c. 17th Century CE',
    preservationLocation: 'Odisha State Museum, Bhubaneswar',
    significance:
      'Exquisite micro-etching showing verse text alongside intricate miniature pictorial panels carved with stylus needles.',
    description:
      'Foliated leaves shaped like narrow ribbons with delicate perforations creating lace-like openwork (Chitra-pothi) illustrations.',
  },
];

export const TEMPLES_DATA: Temple[] = [
  {
    id: 'brihadeeswara',
    name: 'Brihadeeswara Temple (Peruvudaiyar Kovil)',
    style: 'Dravida',
    dynasty: 'Chola Dynasty (Rajaraja Chola I)',
    era: '1010 CE (Over 1,000 years old)',
    location: 'Thanjavur, Tamil Nadu',
    state: 'Tamil Nadu',
    lat: 10.7828,
    lng: 79.1318,
    architecturalFeatures: [
      'Monolithic granite Kumbam (dome) weighing ~80 tonnes atop the vimana',
      'Towering 216-foot (66m) pyramidal Vimana dominating the complex',
      'Axial alignment along a vast rectangular prakara enclosure',
      'Interlocking dry-stone granite joinery with zero binding mortar',
    ],
    symbolism:
      'The Vimana represents Mount Meru, the cosmic mountain at the center of the universe. The shadow of the pinnacle stone is said to fall within its own perimeter during noon.',
    description:
      'A supreme zenith of pure Dravidian architecture and UNESCO World Heritage site, commissioned by Rajaraja I to express divine cosmic majesty.',
  },
  {
    id: 'kailasa-ellora',
    name: 'Kailasa Temple (Cave 16)',
    style: 'Dravida',
    dynasty: 'Rashtrakuta Dynasty (King Krishna I)',
    era: 'c. 756–773 CE',
    location: 'Ellora Caves, Chhatrapati Sambhaji Nagar, Maharashtra',
    state: 'Maharashtra',
    lat: 20.0238,
    lng: 75.1793,
    architecturalFeatures: [
      'Entire temple carved top-down from a single volcanic basalt cliff',
      'Over 200,000 tonnes of basalt rock excavated with chisels and hammers',
      'Multi-storeyed mandapa, Nandi pavilion, and colossal elephant plinths',
      'Intricate relief of Ravana shaking Mount Kailash on the southern wall',
    ],
    symbolism:
      'Physical embodiment of Mount Kailash, the abode of Shiva. Because it was excavated from top to bottom, architects could make zero structural mistakes.',
    description:
      'The single greatest rock-cut monolithic monument in the world. Modern engineers calculate it would take decades with modern heavy machinery to duplicate.',
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple (Black Pagoda)',
    style: 'Nagara',
    dynasty: 'Eastern Ganga Dynasty (King Narasimhadeva I)',
    era: 'c. 1250 CE',
    location: 'Konark, Puri District, Odisha',
    state: 'Odisha',
    lat: 19.8876,
    lng: 86.0945,
    architecturalFeatures: [
      'Conceived as a colossal chariot of Surya with 24 giant stone wheels',
      'Pulled by seven spirited stone horses facing the morning ocean sunrise',
      'Wheels function as precise astronomical sundials measuring exact time',
      'Iron beams and magnetic alignments holding structural stones',
    ],
    symbolism:
      'The 24 wheels symbolize the 24 hours of the day and 12 lunar months, while the 7 horses represent the seven days of the week and the seven colors of solar light.',
    description:
      'A masterpiece of Kalinga (Nagara sub-style) architecture, praised by Rabindranath Tagore: "Here the language of stone surpasses the language of human beings."',
  },
  {
    id: 'meenakshi-amman',
    name: 'Meenakshi Amman Temple',
    style: 'Dravida',
    dynasty: 'Pandya & Nayaka Dynasties',
    era: 'Rebuilt c. 1623–1655 CE (Ancient roots dating back 2,000+ years)',
    location: 'Madurai, Tamil Nadu',
    state: 'Tamil Nadu',
    lat: 9.9195,
    lng: 78.1193,
    architecturalFeatures: [
      '14 monumental gateway towers (Gopurams), highest reaching 170 feet',
      'Over 33,000 colorful stucco sculptures depicting cosmic pantheon',
      'Hall of Thousand Pillars (Aayiram Kaal Mandapam) with carved monolithic columns',
      'Golden Lotus Pond (Porthamarai Kulam) where ancient Tamil Sangam judged poetry',
    ],
    symbolism:
      'The concentric enclosures mirror the concentric sheaths (koshas) of human consciousness leading inward to the sanctum sanctorum (Garbhagriha).',
    description:
      'The vibrant spiritual heart of Madurai, dedicated to Goddess Meenakshi (Parvati) and Sundareswarar (Shiva), renowned for its sensory richness.',
  },
  {
    id: 'khajuraho-kandariya',
    name: 'Kandariya Mahadeva Temple',
    style: 'Nagara',
    dynasty: 'Chandela Dynasty (King Vidyadhara)',
    era: 'c. 1030 CE',
    location: 'Khajuraho, Chhatarpur District, Madhya Pradesh',
    state: 'Madhya Pradesh',
    lat: 24.8532,
    lng: 79.9197,
    architecturalFeatures: [
      'Soaring Shikhara with 84 miniature replica towers (Urushringas)',
      'Fractal self-similar geometry mirroring natural mountain peaks',
      'Raised plinth (Jagati) accessed via grand stone steps',
      'Over 800 sculptures celebrating all aspects of human existence, sacred and sensual',
    ],
    symbolism:
      'Celebrates Purushartha: Dharma (duty), Artha (wealth), Kama (desire), and Moksha (spiritual freedom). The rising spires symbolize the soul ascending toward unity.',
    description:
      'The pinnacle of North Indian Nagara temple architecture, renowned globally for its mathematical proportions and breathtakingly lyrical stone carving.',
  },
  {
    id: 'hampi-virupaksha',
    name: 'Virupaksha Temple',
    style: 'Dravida',
    dynasty: 'Vijayanagara Empire (King Krishnadevaraya expansion)',
    era: '7th Century roots, expanded 1510 CE',
    location: 'Hampi, Vijayanagara District, Karnataka',
    state: 'Karnataka',
    lat: 15.335,
    lng: 76.46,
    architecturalFeatures: [
      'Massive 160-foot eastern Gopuram rising against boulder-strewn hills',
      'Pinhole camera effect casting an inverted shadow of the gopuram on inner wall',
      'Stepped temple tanks (Pushkaranis) and grand chariot bazaars',
      'Intricate Vijayanagara carved pillar styles with rearing mythical yalis',
    ],
    symbolism:
      'Situated on the banks of the sacred Tungabhadra River at Kishkindha, symbolizing continuity of worship through centuries of empire.',
    description:
      'One of the oldest continuously functioning Hindu temples in India, set amid Hampi’s surreal prehistoric granite boulder terrain.',
  },
  {
    id: 'modhera-sun-temple',
    name: 'Modhera Sun Temple',
    style: 'Nagara',
    dynasty: 'Solanki (Chaulukya) Dynasty (King Bhima I)',
    era: '1026–1027 CE',
    location: 'Modhera, Mehsana District, Gujarat',
    state: 'Gujarat',
    lat: 23.5835,
    lng: 72.1331,
    architecturalFeatures: [
      'Three unified components: Surya Kund (stepped reservoir), Sabha Mandapa, and Guda Mandapa',
      'Surya Kund features 108 miniature shrines along stepped terraces',
      'Designed so the first rays of the equinox sun shone directly onto gold deity idol',
      'Pillars carved with intricate toranas and geometric floral arabesques',
    ],
    symbolism:
      'An astronomical calendar in sandstone. The 108 shrines reflect the 108 sacred names of Surya and astronomical lunar-solar cycles.',
    description:
      'An architectural triumph of the Maru-Gurjara style situated on the Tropic of Cancer, celebrating solar energy and precision stone geometry.',
  },
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    style: 'Vesara',
    dynasty: 'Khmer Empire (King Suryavarman II)',
    era: 'Early 12th Century CE',
    location: 'Siem Reap, Cambodia',
    state: 'Siem Reap (Southeast Asia)',
    lat: 13.4125,
    lng: 103.867,
    architecturalFeatures: [
      'Largest religious monument in the world, spanning over 400 acres',
      'Vast 650-foot moat representing the cosmic primordial ocean',
      'Five central lotus-bud towers replicating Mount Meru',
      'Nearly 1,000 meters of continuous narrative bas-reliefs of the Ramayana and Samudra Manthan',
    ],
    symbolism:
      'Microcosmic representation of the Hindu universe. The outer moat is the cosmic sea, the concentric galleries are mountain ranges, and the central peak is Meru.',
    description:
      'The crown jewel of Classical Khmer architecture combining Indian Vastu principles with indigenous Southeast Asian hydraulic engineering.',
  },
];

export const BOTANICAL_HERBS_DATA: BotanicalHerb[] = [
  {
    id: 'tulsi',
    sanskritName: 'Tulasī (Surasā)',
    devanagari: 'तुलसी',
    botanicalName: 'Ocimum sanctum (Holy Basil)',
    vedaSource: 'Atharvaveda & Charaka Samhita Sutrasthana',
    traditionalUse: 'Respiratory wellness, immunity strengthening, mental clarity, and spiritual purification.',
    activeCompound: 'Eugenol (4-Allyl-2-methoxyphenol)',
    pubchemCid: 3314,
    chemicalFormula: 'C10H12O2',
    canonicalSmiles: 'COC1=C(C=CC(=C1)CC=C)O',
    modernPharmacology:
      'Potent adaptogen and COX-2 inhibitor; exerts antioxidant, immunomodulatory, antimicrobial, and cortisol-reducing effects.',
    doshaAffinity: 'Vata',
  },
  {
    id: 'ashwagandha',
    sanskritName: 'Aśvagandhā (Varāhadātrī)',
    devanagari: 'अश्वगन्धा',
    botanicalName: 'Withania somnifera (Indian Ginseng)',
    vedaSource: 'Atharvaveda 8.7 & Charaka Samhita Chikitsasthana',
    traditionalUse: 'Rasayana (rejuvenator), vitality enhancer, neuroprotection, and restorative sleep.',
    activeCompound: 'Withaferin A (Steroidal Lactone)',
    pubchemCid: 265237,
    chemicalFormula: 'C28H38O6',
    canonicalSmiles: 'CC1C2C(C(C3(C2(CCC4C3CC=C5C4(CCC(=O)C=C5)C)C)O)O)OC(=O)C1(C)O',
    modernPharmacology:
      'Modulates HPA axis (lowers serum cortisol by ~30% in clinical trials), binds GABA-A receptors, promotes neurogenesis and synaptic plasticity.',
    doshaAffinity: 'Vata',
  },
  {
    id: 'turmeric',
    sanskritName: 'Haridrā (Niśā)',
    devanagari: 'हरिद्रा',
    botanicalName: 'Curcuma longa (Golden Turmeric)',
    vedaSource: 'Atharvaveda 1.23 & Sushruta Samhita Sutrasthana',
    traditionalUse: 'Wound healing, skin vitality, blood purification, and joint lubrication.',
    activeCompound: 'Curcumin (Diferuloylmethane)',
    pubchemCid: 969516,
    chemicalFormula: 'C21H20O6',
    canonicalSmiles: 'COC1=C(C=CC(=C1)C=CC(=O)CC(=O)C=CC2=CC(=C(C=C2)O)OC)O',
    modernPharmacology:
      'Potent NF-κB inhibitor; blocks inflammatory cytokines (TNF-α, IL-6), scavenges free radicals, and supports endothelial function.',
    doshaAffinity: 'Tridoshic',
  },
  {
    id: 'brahmi',
    sanskritName: 'Brāhmī (Sarasvatī)',
    devanagari: 'ब्राह्मी',
    botanicalName: 'Bacopa monnieri (Water Hyssop)',
    vedaSource: 'Charaka Samhita Sharirasthana & Atharvavedic tradition',
    traditionalUse: 'Medhya Rasayana (cognitive enhancement), memory retention, and calming anxiety.',
    activeCompound: 'Bacoside A (Triterpenoid saponin)',
    pubchemCid: 92043180,
    chemicalFormula: 'C41H68O13',
    canonicalSmiles: 'CC1(C(CCC2(C1C(CC3(C2CC(C4(C3CC(C(C4)O)(C)C)O)C)C)O)C)OC5C(C(C(C(O5)CO)O)O)O)C',
    modernPharmacology:
      'Upregulates choline acetyltransferase and enhances synaptic transmission; proven in multiple double-blind trials to improve cognitive memory and reaction speed.',
    doshaAffinity: 'Pitta',
  },
  {
    id: 'neem',
    sanskritName: 'Nimba (Ariṣṭa)',
    devanagari: 'निम्ब',
    botanicalName: 'Azadirachta indica (Indian Lilac)',
    vedaSource: 'Atharvaveda 8.2 & 19.39',
    traditionalUse: 'Blood detoxifier, skin clear-complexion, dental hygiene (Datun), and antifungal protection.',
    activeCompound: 'Azadirachtin (Tetranortriterpenoid)',
    pubchemCid: 5281303,
    chemicalFormula: 'C35H44O16',
    canonicalSmiles: 'CC(=O)OC1C2C(C(=O)OC1C3(C2(C4(C(CC3)C5(C(O4)(C6C(=CC(=O)O6)O5)C)C)O)C)C)O',
    modernPharmacology:
      'Broad-spectrum antimicrobial, disrupts cell membrane of pathogens, regulates epidermal inflammatory markers.',
    doshaAffinity: 'Pitta',
  },
  {
    id: 'shankhpushpi',
    sanskritName: 'Śaṅkhapuṣpī',
    devanagari: 'शङ्खपुष्पी',
    botanicalName: 'Convolvulus pluricaulis',
    vedaSource: 'Charaka Samhita Chikitsasthana 1.3',
    traditionalUse: 'Supreme Medhya (intellect booster), insomnia alleviation, and nervous system stabilizer.',
    activeCompound: 'Scopoletin (7-Hydroxy-6-methoxycoumarin)',
    pubchemCid: 5280460,
    chemicalFormula: 'C10H8O4',
    canonicalSmiles: 'COC1=C(C=C2C(=C1)C=CC(=O)O2)O',
    modernPharmacology:
      'Acetylcholinesterase inhibitor; exhibits anxiolytic, anticonvulsant, and nootropic activity.',
    doshaAffinity: 'Tridoshic',
  },
  {
    id: 'guggulu',
    sanskritName: 'Guggulu (Kauśika)',
    devanagari: 'गुग्गुलु',
    botanicalName: 'Commiphora mukul (Indian Bdellium)',
    vedaSource: 'Atharvaveda 19.38',
    traditionalUse: 'Joint mobility, metabolic fire (Agni), and clearing ama (metabolic toxins).',
    activeCompound: 'E-Guggulsterone & Z-Guggulsterone',
    pubchemCid: 6450201,
    chemicalFormula: 'C21H28O2',
    canonicalSmiles: 'CC=C1C(=O)C2(CCC3C(C2(CC1)C)CCC4(C3CC=C5C4(CCC(=O)C=C5)C)C)C',
    modernPharmacology:
      'Antagonist of the farnesoid X receptor (FXR); stimulates thyroid function and optimizes lipid metabolism.',
    doshaAffinity: 'Kapha',
  },
  {
    id: 'shatavari',
    sanskritName: 'Śatāvarī (Bahuputrī)',
    devanagari: 'शतावरी',
    botanicalName: 'Asparagus racemosus',
    vedaSource: 'Atharvaveda 19.36 & Sushruta Samhita',
    traditionalUse: 'Female hormonal balance, digestive lubrication, vitality, and cellular rejuvenation.',
    activeCompound: 'Shatavarin I',
    pubchemCid: 11132628,
    chemicalFormula: 'C45H72O17',
    canonicalSmiles: 'CC1C(C(C(C(O1)OCC2C(C(C(C(O2)OC3CCC4(C(C3)CCC5C4CCC6(C5CC(C7C6(CCC(O7)C)C)O)C)C)O)O)O)O)O)O',
    modernPharmacology:
      'Natural phytoestrogen modulator, enhances immune cell phagocytosis, protects gastric mucosa against stress ulcers.',
    doshaAffinity: 'Pitta',
  },
];

export const STORIES_DATA: EpicStory[] = [
  {
    id: 'samudra-manthan',
    title: 'The Churning of the Cosmic Ocean',
    sourceText: 'Mahabharata Adi Parva & Srimad Bhagavatam',
    readTime: '30s story',
    characterFocus: 'Devas, Asuras, Shiva & Dhanvantari',
    synopsis: 'Cosmic balance disrupted, gods and titans unite to churn the sea of milk for immortality.',
    cards: [
      {
        badge: 'Chapter 1: The Crisis',
        headline: 'When the Gods Lost Their Radiance',
        content: 'Deprived of their fortune by an ancient curse, the Devas faced defeat. Vishnu advised an impossible truce: ally with their fierce rivals, the Asuras, to churn the infinite Ocean of Milk (Kshira Sagara) using Mount Mandara as a rod and serpent Vasuki as the rope.',
        lesson: 'Even opponents must unite when facing existential crossroads.',
      },
      {
        badge: 'Chapter 2: The Poison',
        headline: 'Halahala: The Price of Creation',
        content: 'Before nectar arose, the ocean disgorged Halahala—a lethal blue venom so toxic it threatened all creation. When no one could bear it, Lord Shiva inhaled and held the venom in His throat, turning it sapphire blue (Neelakantha).',
        lesson: 'True leadership absorbs the poison so others may flourish.',
      },
      {
        badge: 'Chapter 3: The Treasures',
        headline: 'Gems of the Deep',
        content: 'Fourteen cosmic treasures surfaced: Kamadhenu (cow of abundance), Airavata (white elephant), Parijata tree, Lakshmi Devi (divine grace), and finally Dhanvantari carrying the golden urn of Amrita (nectar) and the science of healing (Ayurveda).',
        lesson: 'Patience through turbulence yields timeless wisdom.',
      },
    ],
  },
  {
    id: 'nachiketa-yama',
    title: 'Nachiketa: The Boy Who Questioned Death',
    sourceText: 'Katha Upanishad',
    readTime: '30s story',
    characterFocus: 'Nachiketa & Yama',
    synopsis: 'Offered endless wealth, power, and kingdoms, a youth asks the only question that matters.',
    cards: [
      {
        badge: 'The Encounter',
        headline: 'Standing at the Gates of the Underworld',
        content: 'Young Nachiketa waited three nights outside Yama’s gates without food. Pleased by his perseverance, Yama granted him three boons. For his third boon, Nachiketa asked: "When a person dies, some say they continue, some say nothing remains. Teach me the truth of the Self."',
        lesson: 'Courage begins with asking uncompromising questions.',
      },
      {
        badge: 'The Temptation',
        headline: 'Gold, Chariots, and Kingdoms Offered',
        content: 'Yama tested him: "Choose long-lived sons, golden chariots, kingdoms of earth, beautiful maidens! Even gods doubt this secret; do not press me!" Nachiketa smiled gently: "All these transient pleasures wear out the senses of mortals. Keep your horses and dancing. Give me truth."',
        lesson: 'Distinguish the pleasant (Preyas) from the wise (Shreyas).',
      },
      {
        badge: 'The Secret',
        headline: 'The Sun Inside the Lotus Heart',
        content: 'Yama revealed the Upanishadic jewel: "The knowing Self is never born; nor does It die. It sprang from nothing; nothing sprang from It. Unborn, eternal, everlasting, ancient, It is not slain when the body is slain."',
        lesson: 'You are not the mortal cage; you are the eternal witness.',
      },
    ],
  },
  {
    id: 'vishwaroopa-darshan',
    title: 'Vishwaroopa: The Cosmic Revelation',
    sourceText: 'Bhagavad Gita Chapter 11',
    readTime: '30s story',
    characterFocus: 'Arjuna & Sri Krishna',
    synopsis: 'Prince Arjuna is granted divine eyes to perceive the infinite terrifying beauty of the cosmos.',
    cards: [
      {
        badge: 'The Request',
        headline: 'Grant Me the Vision of the Whole',
        content: 'Arjuna, paralyzed by moral grief on the eve of battle, asked Krishna to reveal His unmanifest cosmic sovereignty. Krishna replied: "You cannot see Me with mortal eyes. I grant you the divine eye (Divya Chakshu); behold My cosmic majesty!"',
        lesson: 'Limited human perception cannot contain infinite reality.',
      },
      {
        badge: 'The Vision',
        headline: 'Brilliance of a Thousand Suns',
        content: 'Suddenly, Arjuna saw all galaxies, stars, gods, warriors, and dimensions whirling within Krishna’s form. Mouths of blazing fire consumed whole worlds. The past, present, and future moved simultaneously in an ocean of blinding radiance.',
        lesson: 'Time is the great transformer of all living forms.',
      },
      {
        badge: 'The Awakening',
        headline: 'Become the Conscious Instrument',
        content: 'Terrified yet awestruck, Arjuna bowed down, trembling. Krishna reassumed His gentle two-armed form and smiled: "Be an instrument of destiny (Nimitta-matra). Act with clarity, without clinging."',
        lesson: 'Action born from surrender replaces crippling anxiety with grace.',
      },
    ],
  },
  {
    id: 'panchatantra-golden-swan',
    title: 'The Golden Swan & The River of Greed',
    sourceText: 'Panchatantra Mitra-Bheda',
    readTime: '30s story',
    characterFocus: 'Brahmani & The Swan',
    synopsis: 'A classic tale from Vishnu Sharma on how uncontrolled greed destroys abundant blessings.',
    cards: [
      {
        badge: 'The Gift',
        headline: 'A Golden Feather for Survival',
        content: 'A poor widow and her daughters struggled for daily bread. A golden-feathered swan, moved by their plight, visited every week and shed a single pure gold feather, allowing them to live in comfort and dignity.',
        lesson: 'Generosity arrives when hearts remain pure.',
      },
      {
        badge: 'The Trap',
        headline: 'The Poison of Impatience',
        content: 'The mother grew suspicious: "What if the swan flies away forever? Tomorrow, we will capture it and pluck all its feathers at once!" Her daughters pleaded against it, but greed deafened her judgment.',
        lesson: 'Scarcity mindset breeds destructive betrayal.',
      },
      {
        badge: 'The Loss',
        headline: 'Ordinary Feathers in the Wind',
        content: 'As she seized the bird and tore its plumage, the magical golden quills instantly turned into ordinary gray crane feathers. The swan flew away wounded, never to return, leaving the family in remorse.',
        lesson: 'Greed strangles the golden goose of continuous blessings.',
      },
    ],
  },
  {
    id: 'shakuntala-kalidasa',
    title: 'Shakuntala & The Signet Ring',
    sourceText: 'Abhijnanasakuntalam by Kalidasa',
    readTime: '30s story',
    characterFocus: 'Shakuntala, Dushyanta & Sage Durvasa',
    synopsis: 'A hermitage romance, a tragic curse of forgetfulness, and the enduring power of unconditional love.',
    cards: [
      {
        badge: 'The Forest',
        headline: 'Love in Sage Kanva’s Grove',
        content: 'King Dushyanta met Shakuntala in a sacred forest sanctuary among gentle deer and flowering jasmine. They married by Gandharva rites, and Dushyanta gave her his royal signet ring before riding back to his capital.',
        lesson: 'Sacred spaces nurture purest affinities.',
      },
      {
        badge: 'The Curse',
        headline: 'Lost in Reverie',
        content: 'Lost in daydreams of her beloved, Shakuntala failed to hear fiery Sage Durvasa calling at her door. Enraged by the slight, he cursed: "He whom you ponder so deeply shall forget you completely until you present a token!"',
        lesson: 'Mindfulness protects sacred relationships from neglect.',
      },
      {
        badge: 'The Ring',
        headline: 'Reunion Through Truth',
        content: 'Crossing the river, the ring slipped from her finger into a fish’s belly. Dushyanta denied knowing her. Months later, a fisherman found the royal seal inside the fish. The veil lifted, and the King wept in reunion.',
        lesson: 'Truth may be eclipsed by time, but it cannot be extinguished.',
      },
    ],
  },
  {
    id: 'ekalavya-devotion',
    title: 'Ekalavya: The Clay Guru and Supreme Skill',
    sourceText: 'Mahabharata Adi Parva',
    readTime: '30s story',
    characterFocus: 'Ekalavya & Dronacharya',
    synopsis: 'Turned away from the royal academy, a forest youth achieves impossible archery through sheer self-belief.',
    cards: [
      {
        badge: 'Rejection',
        headline: 'Cast Out from the Royal Academy',
        content: 'Ekalavya, a Nishadha prince from the forest, wished to learn the art of archery from Guru Dronacharya. Bound by royal oaths to tutor only Kuru princes, Drona gently refused to accept him.',
        lesson: 'External gates closing is often the beginning of inner genius.',
      },
      {
        badge: 'Dedication',
        headline: 'The Clay Guru in the Forest',
        content: 'Undeterred, Ekalavya sculpted a statue of Dronacharya out of clay. Every morning, he bowed to it with reverence and practiced with relentless discipline, soon surpassing even Prince Arjuna.',
        lesson: 'Your dedication is the true teacher, not the physical classroom.',
      },
      {
        badge: 'The Test',
        headline: 'The Ultimate Sacrifice',
        content: 'When Drona discovered his unmatched skill, he requested Ekalavya’s right thumb as Guru Dakshina to protect his promise to Arjuna. Without hesitation, Ekalavya severed his thumb with a smile.',
        lesson: 'His name outlives empires as the supreme symbol of Shraddha (faith).',
      },
    ],
  },
];

export const FLASHCARDS_DECKS: FlashcardDeck[] = [
  {
    id: 'sanskrit-foundations',
    title: 'Sanskrit Philosophical Roots',
    category: 'Sanskrit',
    cards: [
      {
        id: 'f1',
        front: 'Dharma (धर्म)',
        back: 'From root "dhṛ" (to sustain/uphold). Cosmic order, personal righteousness, ethics, and nature’s innate law.',
        devanagari: 'धारणाद्धर्म इत्याहुर्धर्मो धारयति प्रजाः',
        hint: 'That which sustains society and the cosmos.',
      },
      {
        id: 'f2',
        front: 'Satya (सत्य)',
        back: 'From root "as" (to be, existence). Uncompromising truthfulness; aligning thought, word, and deed with reality.',
        devanagari: 'सत्यमेव जयते नानृतम्',
        hint: 'Truth alone triumphs.',
      },
      {
        id: 'f3',
        front: 'Ahimsa (अहिंसा)',
        back: 'Non-harming, active compassion, and absence of malice toward any living sentient creature.',
        devanagari: 'अहिंसा परमो धर्मः',
        hint: 'The supreme foundation of Yoga.',
      },
      {
        id: 'f4',
        front: 'Moksha (मोक्ष)',
        back: 'Liberation from the wheel of birth and death (Samsara); realization of infinite consciousness.',
        devanagari: 'मुच्यते ज्ञानान्न संशयः',
        hint: 'The ultimate human pursuit (Parama Purushartha).',
      },
      {
        id: 'f5',
        front: 'Prakriti & Purusha (प्रकृति-पुरुष)',
        back: 'Samkhya philosophy: Prakriti is dynamic manifest nature/energy; Purusha is unattached pure observing consciousness.',
        devanagari: 'प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि',
        hint: 'Matter vs. Spirit dualism.',
      },
    ],
  },
  {
    id: 'temple-architecture-terms',
    title: 'Vedic Temple Architecture',
    category: 'Architecture',
    cards: [
      {
        id: 't1',
        front: 'Garbhagriha (गर्भगृह)',
        back: 'The "Womb Chamber" — the dark, unadorned inner sanctum where the main deity is consecrated.',
        devanagari: 'गर्भगृह',
        hint: 'Center of spiritual focus and silence.',
      },
      {
        id: 't2',
        front: 'Shikhara vs. Vimana',
        back: 'Shikhara is the curvilinear mountain-like tower in Nagara (North). Vimana is the stepped pyramidal tower directly over the sanctum in Dravida (South).',
        devanagari: 'शिखर / विमान',
        hint: 'North Indian curve vs. South Indian pyramid.',
      },
      {
        id: 't3',
        front: 'Mandapa (मण्डप)',
        back: 'Pillared assembly hall preceding the sanctum, used for chanting, classical dance, and congregational meditation.',
        devanagari: 'मण्डप',
        hint: 'Columned transition chamber.',
      },
      {
        id: 't4',
        front: 'Vastu Purusha Mandala',
        back: 'The sacred metaphysical diagram (usually 8x8 or 9x9 grid) anchoring temple ground plans to cosmic geometry.',
        devanagari: 'वास्तुपुरुषमण्डल',
        hint: 'Cosmic grid governing spatial layout.',
      },
      {
        id: 't5',
        front: 'Gopuram (गोपुरम्)',
        back: 'Monumental ornate entrance gateway tower characteristic of Dravidian temple complexes in South India.',
        devanagari: 'गोपुरम्',
        hint: 'Towering gate welcoming pilgrims from afar.',
      },
    ],
  },
  {
    id: 'ayurveda-botanicals-deck',
    title: 'Ayurveda & Atharvaveda Pharmacopeia',
    category: 'Bioscience',
    cards: [
      {
        id: 'b1',
        front: 'Tulsi (Holy Basil)',
        back: 'Ocimum sanctum. Key compound: Eugenol (CID 3314). Powerful adaptogen, respiratory tonic, and COX-2 anti-inflammatory.',
        devanagari: 'तुलसी',
        hint: 'Queen of Vedic herbs.',
      },
      {
        id: 'b2',
        front: 'Ashwagandha',
        back: 'Withania somnifera. Key compound: Withaferin A (CID 265237). Lowers cortisol, enhances stamina, promotes deep sleep.',
        devanagari: 'अश्वगन्धा',
        hint: 'Smell of the horse / youthful vitality.',
      },
      {
        id: 'b3',
        front: 'Haridra (Turmeric)',
        back: 'Curcuma longa. Key compound: Curcumin (CID 969516). Broad-spectrum antioxidant and NF-κB inflammatory inhibitor.',
        devanagari: 'हरिद्रा',
        hint: 'Golden root revered in Atharvaveda.',
      },
      {
        id: 'b4',
        front: 'Brahmi',
        back: 'Bacopa monnieri. Key compound: Bacosides. Enhances synaptic transmission, improves memory retention and cognitive focus.',
        devanagari: 'ब्राह्मी',
        hint: 'Named after Saraswati / Brahma.',
      },
      {
        id: 'b5',
        front: 'The Three Doshas (त्रिदोष)',
        back: 'Vata (Air + Ether: movement), Pitta (Fire + Water: transformation), Kapha (Earth + Water: structure). Health is balance.',
        devanagari: 'वात पित्त कफ',
        hint: 'Dynamic physiological archetypes.',
      },
    ],
  },
  {
    id: 'gita-concepts',
    title: 'Core Bhagavad Gita Concepts',
    category: 'Philosophy',
    cards: [
      {
        id: 'g1',
        front: 'Nishkama Karma (निष्काम कर्म)',
        back: 'Action performed without craving for personal fruits or rewards. Pure focus on process over outcome.',
        devanagari: 'कर्मण्येवाधिकारस्ते',
        hint: 'Selfless action in Bhagavad Gita 2.47.',
      },
      {
        id: 'g2',
        front: 'Sthitaprajna (स्थितप्रज्ञ)',
        back: 'One whose intellect is steady and tranquil, unmoved by either extreme sorrow or dizzying praise.',
        devanagari: 'प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्',
        hint: 'The grounded sage of equanimity.',
      },
      {
        id: 'g3',
        front: 'The Three Gunas (त्रिगुण)',
        back: 'Sattva (purity, illumination, peace), Rajas (passion, agitation, action), Tamas (inertia, lethargy, darkness).',
        devanagari: 'सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः',
        hint: 'Qualities weaving all nature.',
      },
    ],
  },
  {
    id: 'vedic-gods-nature',
    title: 'Vedic Devas & Natural Archetypes',
    category: 'Veda',
    cards: [
      {
        id: 'vd1',
        front: 'Agni (अग्नि)',
        back: 'Cosmic Fire and consciousness in all forms: digestive fire (Jatharagni), lightning, and the inner flame of aspiration.',
        devanagari: 'अग्निमीळे पुरोहितम्',
        hint: 'First word of the Rigveda.',
      },
      {
        id: 'vd2',
        front: 'Varuna (वरुण)',
        back: 'Guardian of the cosmic waters, the starry night sky, and moral justice (Rta).',
        devanagari: 'वरुण',
        hint: 'Master of natural and ethical law.',
      },
      {
        id: 'vd3',
        front: 'Ushas (उषस्)',
        back: 'The radiant goddess of Dawn, celebrated in the Rigveda for awakening mortal beings to purposeful creative activity.',
        devanagari: 'उषस्',
        hint: 'Goddess of early morning twilight.',
      },
    ],
  },
];

export const SLIDE_DECKS: SlideDeck[] = [
  {
    id: 'four-vedas-explained',
    title: 'The Four Vedas Decoded',
    topic: 'Vedas',
    category: 'Scripture',
    slides: [
      {
        title: 'The Blueprint of Ancient Indian Thought',
        keyPoints: [
          'Veda stems from root "vid" (to know / direct experiential wisdom).',
          'Composed over millennia by enlightened seers (Rishis) in oral Sanskrit.',
          'Not authored by a single person; classified as Apaurusheya (unauthored by human ego).',
        ],
        quote: 'एकं सद्विप्रा बहुधा वदन्ति — Rigveda 1.164.46',
        visualSymbol: 'book',
      },
      {
        title: 'The Fourfold Classification',
        keyPoints: [
          'Rigveda: The Veda of hymns, cosmic wonder, and philosophical inquiry.',
          'Samaveda: The Veda of musical chants, melody, and acoustic resonance.',
          'Yajurveda: The Veda of sacred rituals, altar geometry, and liturgy.',
          'Atharvaveda: The Veda of daily sciences, botany, statecraft, and ecology.',
        ],
        quote: 'Four streams flowing from one ocean of cosmic consciousness.',
        visualSymbol: 'sun',
      },
      {
        title: 'Structure of Each Veda',
        keyPoints: [
          'Samhitas: Core poetic mantras and chants.',
          'Brahmanas: Prose commentaries explaining ceremonial context.',
          'Aranyakas: "Forest texts" bridging outer ritual to inner meditation.',
          'Upanishads: Vedanta (the climax) exploring non-dual Self-realization.',
        ],
        quote: 'From ritual action to the pinnacle of Self-realization.',
        visualSymbol: 'lotus',
      },
      {
        title: 'Why It Resonates Today',
        keyPoints: [
          'Pioneered radical pluralism ("Truth is One; ways are many").',
          'Profound ecological harmony (Earth as sacred Mother).',
          'Frees human spirituality from dogma through open inquiry.',
        ],
        quote: 'Ancient wisdom. Your generation.',
        visualSymbol: 'fire',
      },
    ],
  },
  {
    id: 'temple-sacred-geometry',
    title: 'Sacred Geometry of Hindu Temples',
    topic: 'Architecture',
    category: 'Art & Design',
    slides: [
      {
        title: 'The Temple as a Living Microcosm',
        keyPoints: [
          'A Hindu temple is not merely a hall for congregation; it is a three-dimensional fractal mandala.',
          'Every proportion mirrors the human body (Purusha) and the cosmic spheres.',
          'The ground plan is laid on the mathematical Vastu Purusha Mandala grid.',
        ],
        quote: 'Deho Devalaya Prokto — The body itself is the sacred temple.',
        visualSymbol: 'temple',
      },
      {
        title: 'Three Major Architectural Styles',
        keyPoints: [
          'Nagara (North India): Curvilinear beehive towers (Shikhara), multiple projections, built on high plinths.',
          'Dravida (South India): Pyramidal tiered towers (Vimana), giant entry gateways (Gopurams), water tanks.',
          'Vesara (Deccan & Central): Hybrid style blending Nagara curves with Dravidian stepped tiers.',
        ],
        quote: 'Geographical diversity unified by geometric precision.',
        visualSymbol: 'tree',
      },
      {
        title: 'The Journey Inward',
        keyPoints: [
          'The pilgrim enters through bright, grand, bustling gates into courtyard halls.',
          'Light dims progressively through each successive pillared Mandapa.',
          'Reaches the dark, intimate, single-flame Garbhagriha (sanctum sanctorum).',
        ],
        quote: 'A spatial metaphor for meditation: from outer chaos to inner stillness.',
        visualSymbol: 'lotus',
      },
    ],
  },
  {
    id: 'ayurveda-botanical-science',
    title: 'Ayurveda: Vedic Botanical Science',
    topic: 'Science',
    category: 'Bioscience',
    slides: [
      {
        title: 'Roots in the Atharvaveda',
        keyPoints: [
          'Ayurveda literally means "The Science of Life and Longevity" (Ayus + Veda).',
          'Earliest herbal formulations documented in Atharvaveda Kanda 8 and 19.',
          'Systematized by Charaka (Internal Medicine) and Sushruta (Surgery).',
        ],
        quote: 'Swasthyasya Swasthya Rakshanam — Preserving the health of the healthy.',
        visualSymbol: 'tree',
      },
      {
        title: 'Ancient Herbs Meet Modern Phytochemistry',
        keyPoints: [
          'Tulsi (Holy Basil): Rich in Eugenol, now clinically proven to reduce stress and combat inflammation.',
          'Ashwagandha: Withaferin A modulates GABA receptors and reduces cortisol.',
          'Curcumin (Turmeric): Modern gold-standard anti-inflammatory NF-κB inhibitor.',
        ],
        quote: 'Where millennial empirical wisdom aligns with contemporary molecular pharmacology.',
        visualSymbol: 'sun',
      },
      {
        title: 'Preventative & Holistic Living',
        keyPoints: [
          'Dinacharya (daily circadian rhythms) synchronizes human biology with nature.',
          'Diet tailored to unique metabolic dosha constitution rather than generic calorie counts.',
          'Focuses on root resilience rather than merely suppressing symptoms.',
        ],
        quote: 'Health is a harmonious dance between body, mind, and the Earth.',
        visualSymbol: 'fire',
      },
    ],
  },
];

export const QUIZZES_DATA: Quiz[] = [
  {
    id: 'vedic-heritage-master',
    title: 'Vedic Heritage Master Challenge',
    category: 'Heritage & History',
    difficulty: 'Intermediate',
    questions: [
      {
        question: 'Which of the four Vedas is primarily set to melodic musical notation and gave birth to Indian classical music?',
        options: ['Rigveda', 'Samaveda', 'Yajurveda', 'Atharvaveda'],
        correctIndex: 1,
        explanation: 'The Samaveda consists of verses set to intricate melodies (Saman) with a seven-note musical scale, revered as the origin of Indian music.',
        xp: 25,
      },
      {
        question: 'In the Katha Upanishad, what ultimate secret does young Nachiketa request from Yama?',
        options: ['Immortal wealth and land', 'The secret of celestial warfare', 'The truth of what happens to the Self beyond death', 'A golden chariot pulled by lions'],
        correctIndex: 2,
        explanation: 'Nachiketa refuses all worldly temptations (sons, gold, empires) and insists upon knowing the secret of the immortal Atman beyond death.',
        xp: 25,
      },
      {
        question: 'Which architectural style features towering gateway entrance towers called Gopurams and a pyramidal Vimana?',
        options: ['Nagara style', 'Dravida style', 'Vesara style', 'Greco-Buddhist style'],
        correctIndex: 1,
        explanation: 'Dravidian architecture (developed by Cholas, Pandyas, Pallavas) is famous for its soaring gateway Gopurams and tiered Vimanas.',
        xp: 25,
      },
      {
        question: 'What is the primary active phytochemical compound found in sacred Holy Basil (Tulsi)?',
        options: ['Curcumin', 'Eugenol', 'Withaferin A', 'Azadirachtin'],
        correctIndex: 1,
        explanation: 'Tulsi contains high concentrations of Eugenol (PubChem CID 3314), giving it its characteristic aroma, adaptogenic, and anti-inflammatory properties.',
        xp: 25,
      },
    ],
  },
  {
    id: 'gita-and-mantras-quiz',
    title: 'Gita & Mantra Wisdom Quest',
    category: 'Philosophy & Mantras',
    difficulty: 'Beginner',
    questions: [
      {
        question: 'The famous verse "Karmanye vadhikaraste ma phaleshu kadachana" advises the seeker to:',
        options: ['Never perform any action', 'Focus entirely on winning and results', 'Focus on sincere action without anxiety over the fruits', 'Rely solely on luck'],
        correctIndex: 2,
        explanation: 'Bhagavad Gita 2.47 teaches Nishkama Karma: devotion to purposeful action while letting go of outcome anxiety.',
        xp: 25,
      },
      {
        question: 'The Gayatri Mantra is traditionally addressed to Savitr, who represents:',
        options: ['The God of Wealth', 'The Divine Solar Light that illuminates our intellect', 'The Spirit of the Ocean', 'The Spirit of Thunder'],
        correctIndex: 1,
        explanation: 'Savitr is the solar deity representing cosmic illumination, meditated upon to awaken the higher buddhi (intellect).',
        xp: 25,
      },
      {
        question: 'What is the famous declaration from the Rigveda (1.164.46) emphasizing religious pluralism?',
        options: ['Ahimsa Paramo Dharmah', 'Ekam Sat Vipra Bahudha Vadanti', 'Satyameva Jayate', 'Vasudhaiva Kutumbakam'],
        correctIndex: 1,
        explanation: '"Ekam Sat Vipra Bahudha Vadanti" translates to "Truth is One, but the wise speak of it in many ways."',
        xp: 25,
      },
      {
        question: 'The Kailasa Temple at Ellora is celebrated as an engineering marvel primarily because it was:',
        options: ['Built using prefabricated sandstone bricks', 'Assembled with marble shipped from Rome', 'Carved top-down from a single massive basalt mountain cliff', 'Built entirely floating on a lake'],
        correctIndex: 2,
        explanation: 'Kailasa Temple (Cave 16) was excavated top-to-bottom from a single solid volcanic basalt cliff with zero room for error.',
        xp: 25,
      },
    ],
  },
];

export const VEDIC_TIMELINE: TimelineEvent[] = [
  {
    era: 'Early Vedic Period',
    yearRange: 'c. 1500–1200 BCE',
    milestone: 'Composition of Rigveda Samhita',
    canonicalTexts: ['Rigveda Mandalas', 'Nasadiya Sukta', 'Purusha Sukta'],
    description: 'Pastoral settlements along the Saraswati and Sapta Sindhu rivers. Emergence of profound hymns of natural wonder, cosmic order (Rta), and sacred speech.',
  },
  {
    era: 'Middle & Late Vedic Period',
    yearRange: 'c. 1200–800 BCE',
    milestone: 'Samaveda, Yajurveda, Atharvaveda & Brahmanas',
    canonicalTexts: ['Taittiriya Samhita', 'Shatapatha Brahmana', 'Prithvi Sukta'],
    description: 'Development of intricate liturgical sciences, sacred geometry of fire altars (Shulba Sutras), and early botanical/Ayurvedic healing traditions.',
  },
  {
    era: 'Upanishadic & Axial Age',
    yearRange: 'c. 800–500 BCE',
    milestone: 'Principal Upanishads & Philosophical Awakening',
    canonicalTexts: ['Brihadaranyaka', 'Chandogya', 'Katha', 'Isha', 'Mandukya'],
    description: 'Shift from outer ritualism to radical inner inquiry into Atman (Self) and Brahman (Ultimate Reality). Birth of non-dual philosophy.',
  },
  {
    era: 'Classical Epics & Darshana Era',
    yearRange: 'c. 500 BCE–200 CE',
    milestone: 'Itihasa, Bhagavad Gita, Grammar & Statecraft',
    canonicalTexts: ['Mahabharata', 'Valmiki Ramayana', 'Panini Ashtadhyayi', 'Arthashastra', 'Natya Shastra'],
    description: 'Golden age of Sanskrit literature, codified grammar by Panini, composition of the Bhagavad Gita, and systematic development of the Six Darshanas.',
  },
  {
    era: 'Classical Golden Age & Temple Building',
    yearRange: 'c. 4th–12th Century CE',
    milestone: 'Monumental Temple Architecture & Commentarial Tradition',
    canonicalTexts: ['Adi Shankara Bhashyas', 'Kalidasa Plays', 'Charaka & Sushruta Samhitas', 'Vastu Shastras'],
    description: 'Construction of stone masterworks (Ellora, Thanjavur, Khajuraho, Konark). Brilliant commentaries on the Brahma Sutras and Upanishads by Adi Shankara, Ramanuja, and Madhva.',
  },
];
