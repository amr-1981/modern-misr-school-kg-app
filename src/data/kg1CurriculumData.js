// Authoritative Curriculum Data from "تواصل - اللغة العربية - رياض الأطفال مستوى أول KG1 - الفصل الدراسي الأول"
// Tailored for Modern Misr School - Tripoli (المدرسة المصرية الحديثة - طرابلس)

export const SCHOOL_INFO = {
  nameAr: "المدرسة المصرية الحديثة - طرابلس",
  nameEn: "Modern Misr School",
  bookTitle: "تواصل - اللغة العربية (رياض الأطفال - مستوى أول KG1)",
  term: "الفصل الدراسي الأول",
  logo: "./school-logo.jpg"
};

export const THEMES = [
  {
    id: "theme-1",
    number: 1,
    title: "المحور الأول: مَنْ أَكُونُ؟",
    color: "emerald",
    topics: [
      { id: "topic-1-1", title: "الموضوع الأول: أَنَا مُمَيَّزٌ", pages: "8 - 32", letters: ["alif", "meem"] },
      { id: "topic-1-2", title: "الموضوع الثاني: أُسْرَتِي", pages: "33 - 49", letters: ["baa", "faa"] }
    ]
  },
  {
    id: "theme-2",
    number: 2,
    title: "المحور الثاني: العَالَمُ مِنْ حَوْلِي",
    color: "sky",
    topics: [
      { id: "topic-2-1", title: "الموضوع الأول: عَالَمِي الصَّغِيرُ", pages: "51 - 72", letters: ["noon", "laam", "haa"] },
      { id: "topic-2-2", title: "الموضوع الثاني: عَالَمِي الكَبِيرُ", pages: "73 - 95", letters: ["raa", "taa", "seen"] }
    ]
  }
];

export const LETTERS_DATA = [
  {
    id: "alif",
    char: "أ",
    forms: ["أ", "ـأ"],
    name: "حرف الألف",
    themeId: "theme-1",
    topicTitle: "أنا مميز",
    bookPages: "21 - 24",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-300",
    chantAudio: "ألف أرنب يجري يلعب، يأكل جزراً كي لا يتعب! أهلاً بيك يا بطل مع حرف الألف، أول حرف في حروفنا العربية الجميلة.",
    storyAudio: "كان يا ما كان، أرنوب صغير مميز بيحب ياكل الجزر في الحديقة، وكل ما يشوف حرف الألف يقول: أَ أَ أرنب! ولما يشوف الإشارة يقول: إِ إِ إشارة! ولما يشوف الأخطبوط في البحر يقول: أُ أُ أخطبوط!",
    harakat: [
      { symbol: "أَ", name: "فتحة (صوت الصيف)", season: "☀️ الصيف (القبعة)", word: "أَسَدٌ", extraWord: "أَرْنَبٌ", emoji: "🦁", seasonEmoji: "☀️", audio: "أَ، فتحة، أَسَدٌ، أَرْنَبٌ. بنفتح بؤنا لفوق زي القبعة في الصيف: أَ!" },
      { symbol: "إِ", name: "كسرة (صوت الشتاء)", season: "❄️ الشتاء (التزلج)", word: "إِشَارَةٌ", extraWord: "إِصْبَعٌ", emoji: "🚦", seasonEmoji: "❄️", audio: "إِ، كسرة، إِشَارَةٌ، إِصْبَعٌ. بنبتسم لتحت وإحنا بنتزلج في الشتاء: إِ!" },
      { symbol: "أُ", name: "ضمة (صوت الخريف)", season: "🍂 الخريف (الرياح)", word: "أُخْطُبُوطٌ", extraWord: "أُذُنٌ", emoji: "🐙", seasonEmoji: "🍂", audio: "أُ، ضمة، أُخْطُبُوطٌ، أُذُنٌ. بنضم شفايفنا زي صوت الهوا في الخريف: أُ!" },
      { symbol: "أْ", name: "سكون (صوت الربيع)", season: "🌸 الربيع (الهدوء)", word: "رَأْسٌ", extraWord: "فَأْسٌ", emoji: "👦", seasonEmoji: "🌸", audio: "أْ، سكون، رَأْسٌ، فَأْسٌ. بنقف بهدوء عند الحرف في فصل الربيع: رَأْسٌ!" }
    ],
    bookWords: [
      { word: "أَسَدٌ", emoji: "🦁", haraka: "أَ" },
      { word: "أَرْنَبٌ", emoji: "🐰", haraka: "أَ" },
      { word: "أَبٌ", emoji: "👨", haraka: "أَ" },
      { word: "إِشَارَةٌ", emoji: "🚦", haraka: "إِ" },
      { word: "إِصْبَعٌ", emoji: "☝️", haraka: "إِ" },
      { word: "أُخْطُبُوطٌ", emoji: "🐙", haraka: "أُ" },
      { word: "أُرْجُوحَةٌ", emoji: "🎠", haraka: "أُ" }
    ]
  },
  {
    id: "meem",
    char: "م",
    forms: ["مـ", "ـمـ", "م"],
    name: "حرف الميم",
    themeId: "theme-1",
    topicTitle: "أنا مميز",
    bookPages: "25 - 28",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-300",
    chantAudio: "ميم موز طعمه لذيذ، وميم مركب يمشي في النيل! يلا نتعلم حرف الميم يا بطل المدرسة المصرية الحديثة.",
    storyAudio: "حرف الميم حرف جميل ومدور، لما يكون في أول الكلمة بيمد إيده يمسك في الحرف اللي بعده زي كلمة مَوْزٌ ومَرْكَبٌ، ولما يكون في آخر الكلمة بينزل لتحت السطر زي كلمة قَلَمٌ وعَلَمٌ.",
    harakat: [
      { symbol: "مَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "مَوْزٌ", extraWord: "مَرْكَبٌ", emoji: "🍌", seasonEmoji: "☀️", audio: "مَ، فتحة، مَوْزٌ، مَرْكَبٌ." },
      { symbol: "مِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "مِقَصٌّ", extraWord: "مِفْتَاحٌ", emoji: "✂️", seasonEmoji: "❄️", audio: "مِ، كسرة، مِقَصٌّ، مِفْتَاحٌ." },
      { symbol: "مُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "مُهَرِّجٌ", extraWord: "مُعَلِّمٌ", emoji: "🤡", seasonEmoji: "🍂", audio: "مُ، ضمة، مُهَرِّجٌ، مُعَلِّمٌ." },
      { symbol: "مْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "شَمْسٌ", extraWord: "تَمْرٌ", emoji: "☀️", seasonEmoji: "🌸", audio: "مْ، سكون، شَمْسٌ، تَمْرٌ." }
    ],
    bookWords: [
      { word: "مَوْزٌ", emoji: "🍌", haraka: "مَ" },
      { word: "مَرْكَبٌ", emoji: "⛵", haraka: "مَ" },
      { word: "مِقَصٌّ", emoji: "✂️", haraka: "مِ" },
      { word: "مِفْتَاحٌ", emoji: "🔑", haraka: "مِ" },
      { word: "مُهَرِّجٌ", emoji: "🤡", haraka: "مُ" },
      { word: "فَمٌ", emoji: "👄", haraka: "م" }
    ]
  },
  {
    id: "baa",
    char: "ب",
    forms: ["بـ", "ـبـ", "ب"],
    name: "حرف الباء",
    themeId: "theme-1",
    topicTitle: "أسرتي",
    bookPages: "37 - 40",
    color: "from-sky-500 to-blue-600",
    bgLight: "bg-sky-50",
    borderLight: "border-sky-300",
    chantAudio: "باء بطة تعوم في المية، وتحتها نقطة واحدة جميلة وذكية! بَ بطة، بِ بطيخ، بُ برتقال!",
    storyAudio: "البطة الجميلة كانت بتعوم في البحيرة وبتغني لحرف الباء: طبق صغير وتحته نقطة واحدة! ولما نجمع الألف مع الباء نكتب كلمة أَبٌ، يعني بابا الحبيب!",
    harakat: [
      { symbol: "بَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "بَطَّةٌ", extraWord: "بَقَرَةٌ", emoji: "🦆", seasonEmoji: "☀️", audio: "بَ، فتحة، بَطَّةٌ، بَقَرَةٌ، بَيْتٌ." },
      { symbol: "بِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "بِطِّيخٌ", extraWord: "بِئْرٌ", emoji: "🍉", seasonEmoji: "❄️", audio: "بِ، كسرة، بِطِّيخٌ." },
      { symbol: "بُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "بُرْتُقَالٌ", extraWord: "بُرْجٌ", emoji: "🍊", seasonEmoji: "🍂", audio: "بُ، ضمة، بُرْتُقَالٌ، بُرْجٌ." },
      { symbol: "بْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "حَبْلٌ", extraWord: "كَلْبٌ", emoji: "🪢", seasonEmoji: "🌸", audio: "بْ، سكون، حَبْلٌ، كَلْبٌ." }
    ],
    bookWords: [
      { word: "بَطَّةٌ", emoji: "🦆", haraka: "بَ" },
      { word: "بَيْتٌ", emoji: "🏠", haraka: "بَ" },
      { word: "بَقَرَةٌ", emoji: "🐄", haraka: "بَ" },
      { word: "بِطِّيخٌ", emoji: "🍉", haraka: "بِ" },
      { word: "بُرْتُقَالٌ", emoji: "🍊", haraka: "بُ" },
      { word: "كَلْبٌ", emoji: "🐶", haraka: "ب" },
      { word: "لَبَنٌ", emoji: "🥛", haraka: "بَ" }
    ]
  },
  {
    id: "faa",
    char: "ف",
    forms: ["فـ", "ـفـ", "ف"],
    name: "حرف الفاء",
    themeId: "theme-1",
    topicTitle: "أسرتي",
    bookPages: "41 - 44",
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50",
    borderLight: "border-rose-300",
    chantAudio: "فاء فراشة تطير في البستان، وفاء فيل بخرطومه الطويل فرحان! حرف الفاء فوقه نقطة واحدة منورة.",
    storyAudio: "الفيل الصغير كان شايل بالونات مكتوب عليها حرف الفاء، شاف فراشة ملونة قال: فَ فراشة! وشاف فرشاة ألوان قال: فُ فرشاة! ولما شاف الضفدع قال: فْ ضفدع!",
    harakat: [
      { symbol: "فَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "فَرَاشَةٌ", extraWord: "فَمٌ", emoji: "🦋", seasonEmoji: "☀️", audio: "فَ، فتحة، فَرَاشَةٌ، فَمٌ." },
      { symbol: "فِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "فِيلٌ", extraWord: "فِجْلٌ", emoji: "🐘", seasonEmoji: "❄️", audio: "فِ، كسرة، فِيلٌ." },
      { symbol: "فُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "فُرْشَاةٌ", extraWord: "فُسْتَانٌ", emoji: "🖌️", seasonEmoji: "🍂", audio: "فُ، ضمة، فُرْشَاةٌ، فُسْتَانٌ." },
      { symbol: "فْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "ضِفْدَعٌ", extraWord: "مِفْتَاحٌ", emoji: "🐸", seasonEmoji: "🌸", audio: "فْ، سكون، ضِفْدَعٌ، مِفْتَاحٌ." }
    ],
    bookWords: [
      { word: "فَرَاشَةٌ", emoji: "🦋", haraka: "فَ" },
      { word: "فَرَاوْلَةٌ", emoji: "🍓", haraka: "فَ" },
      { word: "فِيلٌ", emoji: "🐘", haraka: "فِ" },
      { word: "فُرْشَاةٌ", emoji: "🖌️", haraka: "فُ" },
      { word: "فَأْرٌ", emoji: "🐭", haraka: "فَ" },
      { word: "هَاتِفٌ", emoji: "☎️", haraka: "ف" }
    ]
  },
  {
    id: "noon",
    char: "ن",
    forms: ["نـ", "ـنـ", "ن"],
    name: "حرف النون",
    themeId: "theme-2",
    topicTitle: "عالمي الصغير",
    bookPages: "55 - 58",
    color: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-300",
    chantAudio: "نون نحلة تصنع عسلاً، ونون نجمة تلمع في السماء ليلاً! طبق غويط وجواه نقطة واحدة من فوق.",
    storyAudio: "النحلة النشيطة والنملة الشاطرة صحاب جداً لأنهم بيبدأوا بحرف النون: نَ نحلة، نَ نمل، نَ نجم! ولما نشرب القهوة بنشوف حبات البُنّ!",
    harakat: [
      { symbol: "نَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "نَجْمَةٌ", extraWord: "نَحْلَةٌ", emoji: "⭐", seasonEmoji: "☀️", audio: "نَ، فتحة، نَجْمَةٌ، نَحْلَةٌ، نَمْلٌ." },
      { symbol: "نِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "نِسْنَاسٌ", extraWord: "نِيلٌ", emoji: "🐒", seasonEmoji: "❄️", audio: "نِ، كسرة، نِسْنَاسٌ." },
      { symbol: "نُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "نُقُودٌ", extraWord: "نُجُومٌ", emoji: "🪙", seasonEmoji: "🍂", audio: "نُ، ضمة، نُقُودٌ، نُجُومٌ." },
      { symbol: "نْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "عِنَبٌ", extraWord: "مِنْبَرٌ", emoji: "🍇", seasonEmoji: "🌸", audio: "نْ، سكون، عِنَبٌ." }
    ],
    bookWords: [
      { word: "نَجْمٌ", emoji: "⭐", haraka: "نَ" },
      { word: "نَحْلَةٌ", emoji: "🐝", haraka: "نَ" },
      { word: "نَمْلٌ", emoji: "🐜", haraka: "نَ" },
      { word: "نِسْنَاسٌ", emoji: "🐒", haraka: "نِ" },
      { word: "نُقُودٌ", emoji: "🪙", haraka: "نُ" },
      { word: "بُنٌّ", emoji: "🫘", haraka: "ن" },
      { word: "أُذُنٌ", emoji: "👂", haraka: "ن" }
    ]
  },
  {
    id: "laam",
    char: "ل",
    forms: ["لـ", "ـلـ", "ل"],
    name: "حرف اللام",
    themeId: "theme-2",
    topicTitle: "عالمي الصغير",
    bookPages: "59 - 62",
    color: "from-teal-500 to-cyan-600",
    bgLight: "bg-teal-50",
    borderLight: "border-teal-300",
    chantAudio: "لام لبن أبيض ومفيد، يخلي عظمنا قوي كالحديد! عصاية طويلة نازلة بطبق جميل تحت السطر.",
    storyAudio: "القطة المشمشية بتحب تشرب اللَبَن كل يوم الصبح، وبتلعب باللُعْبَة الجميلة، وتعرف تدمج الحروف: ن + م + ل تبقى كلمة نَمْلٌ!",
    harakat: [
      { symbol: "لَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "لَبَنٌ", extraWord: "لَحْمٌ", emoji: "🥛", seasonEmoji: "☀️", audio: "لَ، فتحة، لَبَنٌ، لَحْمٌ، لَيْمُونٌ." },
      { symbol: "لِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "لِفْتٌ", extraWord: "لِسَانٌ", emoji: "🥗", seasonEmoji: "❄️", audio: "لِ، كسرة، لِفْتٌ، لِسَانٌ." },
      { symbol: "لُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "لُعْبَةٌ", extraWord: "لُؤْلُؤٌ", emoji: "🧸", seasonEmoji: "🍂", audio: "لُ، ضمة، لُعْبَةٌ." },
      { symbol: "لْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "كَلْبٌ", extraWord: "ثَلْجٌ", emoji: "🐶", seasonEmoji: "🌸", audio: "لْ، سكون، كَلْبٌ، ثَلْجٌ." }
    ],
    bookWords: [
      { word: "لَبَنٌ", emoji: "🥛", haraka: "لَ" },
      { word: "لَحْمٌ", emoji: "🥩", haraka: "لَ" },
      { word: "لِفْتٌ", emoji: "🥗", haraka: "لِ" },
      { word: "لُعْبَةٌ", emoji: "🧸", haraka: "لُ" },
      { word: "عَلَمٌ", emoji: "🚩", haraka: "لَ" },
      { word: "نَمْلٌ", emoji: "🐜", haraka: "ل" }
    ]
  },
  {
    id: "haa",
    char: "ح",
    forms: ["حـ", "ـحـ", "ح"],
    name: "حرف الحاء",
    themeId: "theme-2",
    topicTitle: "عالمي الصغير",
    bookPages: "63 - 66",
    color: "from-cyan-600 to-blue-700",
    bgLight: "bg-cyan-50",
    borderLight: "border-cyan-300",
    chantAudio: "حاء حمامة تطير في السلام، وحاء حوت يعوم في الوئام! حرف الحاء أقرع ماعندوش ولا نقطة!",
    storyAudio: "حرف الحاء حرف نظيف ماعليهوش أي نقطة خالص، بنشوفه في كلمة حَمَلٌ اللي هو الخروف الصغير، وفي كلمة حِصَانٌ سريع، وحُوتٌ كبير في البحر!",
    harakat: [
      { symbol: "حَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "حَمَلٌ", extraWord: "حَمَامَةٌ", emoji: "🐑", seasonEmoji: "☀️", audio: "حَ، فتحة، حَمَلٌ، حَمَامَةٌ." },
      { symbol: "حِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "حِرْبَاءُ", extraWord: "حِصَانٌ", emoji: "🦎", seasonEmoji: "❄️", audio: "حِ، كسرة، حِرْبَاءُ، حِصَانٌ." },
      { symbol: "حُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "حُوتٌ", extraWord: "حُبُوبٌ", emoji: "🐋", seasonEmoji: "🍂", audio: "حُ، ضمة، حُوتٌ، حُبُوبٌ." },
      { symbol: "حْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "بَحْرٌ", extraWord: "نَحْلَةٌ", emoji: "🌊", seasonEmoji: "🌸", audio: "حْ، سكون، بَحْرٌ، نَحْلَةٌ، لَحْمٌ." }
    ],
    bookWords: [
      { word: "حَمَلٌ", emoji: "🐑", haraka: "حَ" },
      { word: "حِرْبَاءُ", emoji: "🦎", haraka: "حِ" },
      { word: "حُوتٌ", emoji: "🐋", haraka: "حُ" },
      { word: "نَحْلَةٌ", emoji: "🐝", haraka: "حْ" },
      { word: "بَحْرٌ", emoji: "🌊", haraka: "حْ" },
      { word: "بَلَحٌ", emoji: "🌴", haraka: "ح" },
      { word: "مِلْحٌ", emoji: "🧂", haraka: "ح" }
    ]
  },
  {
    id: "raa",
    char: "ر",
    forms: ["ر", "ـر"],
    name: "حرف الراء",
    themeId: "theme-2",
    topicTitle: "عالمي الكبير",
    bookPages: "77 - 80",
    color: "from-orange-500 to-red-600",
    bgLight: "bg-orange-50",
    borderLight: "border-orange-300",
    chantAudio: "راء رمان أحمر وجميل، وراء ريشة خفيفة في الهوا تميل! حرف الراء شبه الزحليقة الحلوة.",
    storyAudio: "القرد الصغير كان راكب العربية في رحلة جميلة وبيجمع ثمار الرُّمَّان على الشاطئ فوق الرَّمْل الأصفر قدام البَحْر الأزرق.",
    harakat: [
      { symbol: "رَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "رَجُلٌ", extraWord: "رَمْلٌ", emoji: "👨", seasonEmoji: "☀️", audio: "رَ، فتحة، رَجُلٌ، رَمْلٌ، رَفٌّ." },
      { symbol: "رِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "رِيشَةٌ", extraWord: "رِجْلٌ", emoji: "🪶", seasonEmoji: "❄️", audio: "رِ، كسرة، رِيشَةٌ." },
      { symbol: "رُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "رُمَّانٌ", extraWord: "رُكْبَةٌ", emoji: "🍎", seasonEmoji: "🍂", audio: "رُ، ضمة، رُمَّانٌ." },
      { symbol: "رْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "بُرْجٌ", extraWord: "قِرْدٌ", emoji: "🗼", seasonEmoji: "🌸", audio: "رْ، سكون، بُرْجٌ، قِرْدٌ." }
    ],
    bookWords: [
      { word: "رَجُلٌ", emoji: "👨", haraka: "رَ" },
      { word: "رَمْلٌ", emoji: "🏖️", haraka: "رَ" },
      { word: "رَفٌّ", emoji: "📚", haraka: "رَ" },
      { word: "رِيشَةٌ", emoji: "🪶", haraka: "رِ" },
      { word: "رُمَّانٌ", emoji: "🍎", haraka: "رُ" },
      { word: "بُرْجٌ", emoji: "🗼", haraka: "رْ" },
      { word: "تَمْرٌ", emoji: "🌴", haraka: "ر" }
    ]
  },
  {
    id: "taa",
    char: "ت",
    forms: ["تـ", "ـتـ", "ت"],
    name: "حرف التاء",
    themeId: "theme-2",
    topicTitle: "عالمي الكبير",
    bookPages: "81 - 84",
    color: "from-pink-500 to-rose-600",
    bgLight: "bg-pink-50",
    borderLight: "border-pink-300",
    chantAudio: "تاء تاج فوق الراس، وتاء تفاح أحلى فاكهة لكل الناس! طبق جميل وجواه نقطتين زي العينين.",
    storyAudio: "حرف التاء أخو حرف الباء، بس عنده نقطتين حلوين من فوق جوه الطبق! بنلاقي التاء في تَاج الملك، وتِمْسَاح النهر، وتُفَّاح وتُوت البستان.",
    harakat: [
      { symbol: "تَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "تَاجٌ", extraWord: "تَمْرٌ", emoji: "👑", seasonEmoji: "☀️", audio: "تَ، فتحة، تَاجٌ، تَمْرٌ." },
      { symbol: "تِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "تِمْسَاحٌ", extraWord: "تِينٌ", emoji: "🐊", seasonEmoji: "❄️", audio: "تِ، كسرة، تِمْسَاحٌ، تِينٌ." },
      { symbol: "تُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "تُفَّاحٌ", extraWord: "تُوتٌ", emoji: "🍎", seasonEmoji: "🍂", audio: "تُ، ضمة، تُفَّاحٌ، تُوتٌ." },
      { symbol: "تْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "كَتْكُوتٌ", extraWord: "خَتْمٌ", emoji: "🐥", seasonEmoji: "🌸", audio: "تْ، سكون، كَتْكُوتٌ." }
    ],
    bookWords: [
      { word: "تَاجٌ", emoji: "👑", haraka: "تَ" },
      { word: "تَمْرٌ", emoji: "🌴", haraka: "تَ" },
      { word: "تِمْسَاحٌ", emoji: "🐊", haraka: "تِ" },
      { word: "تُفَّاحٌ", emoji: "🍎", haraka: "تُ" },
      { word: "تُوتٌ", emoji: "🫐", haraka: "تُ" },
      { word: "كِتَابٌ", emoji: "📖", haraka: "تَ" },
      { word: "بَيْتٌ", emoji: "🏠", haraka: "ت" }
    ]
  },
  {
    id: "seen",
    char: "س",
    forms: ["سـ", "ـسـ", "س"],
    name: "حرف السين",
    themeId: "theme-2",
    topicTitle: "عالمي الكبير",
    bookPages: "85 - 88",
    color: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-50",
    borderLight: "border-indigo-300",
    chantAudio: "سين سمكة تعوم في المية، وسين ساعة تدق بهمة ونشاط كل شوية! حرف السين عنده تلات سنون حلوين.",
    storyAudio: "حرف السين عنده تلات سنون صغيرة وطبق كبير، بنسمع صوته في سَرِيرٌ وسَاعَةٌ، وفي سِيرْكٌ وسِتَارَةٌ، وفي سُلَحْفَاةٌ وسُلَّمٌ!",
    harakat: [
      { symbol: "سَ", name: "فتحة (الصيف)", season: "☀️ الصيف", word: "سَمَكَةٌ", extraWord: "سَاعَةٌ", emoji: "🐟", seasonEmoji: "☀️", audio: "سَ، فتحة، سَمَكَةٌ، سَاعَةٌ، سَرِيرٌ." },
      { symbol: "سِ", name: "كسرة (الشتاء)", season: "❄️ الشتاء", word: "سِيرْكٌ", extraWord: "سِتَارَةٌ", emoji: "🎪", seasonEmoji: "❄️", audio: "سِ، كسرة، سِيرْكٌ، سِتَارَةٌ." },
      { symbol: "سُ", name: "ضمة (الخريف)", season: "🍂 الخريف", word: "سُلَحْفَاةٌ", extraWord: "سُلَّمٌ", emoji: "🐢", seasonEmoji: "🍂", audio: "سُ، ضمة، سُلَحْفَاةٌ، سُلَّمٌ، سُحُبٌ." },
      { symbol: "سْ", name: "سكون (الربيع)", season: "🌸 الربيع", word: "جِسْرٌ", extraWord: "كَأْسٌ", emoji: "🌉", seasonEmoji: "🌸", audio: "سْ، سكون، جِسْرٌ، كَأْسٌ." }
    ],
    bookWords: [
      { word: "سَمَكَةٌ", emoji: "🐟", haraka: "سَ" },
      { word: "سَاعَةٌ", emoji: "🕒", haraka: "سَ" },
      { word: "سَرِيرٌ", emoji: "🛏️", haraka: "سَ" },
      { word: "سِيرْكٌ", emoji: "🎪", haraka: "سِ" },
      { word: "سُلَحْفَاةٌ", emoji: "🐢", haraka: "سُ" },
      { word: "سُلَّمٌ", emoji: "🪜", haraka: "سُ" },
      { word: "جِسْرٌ", emoji: "🌉", haraka: "سْ" },
      { word: "فَرَسٌ", emoji: "🐎", haraka: "س" }
    ]
  }
];

export const STORIES_DATA = [
  {
    id: "story-1",
    type: "قصة مشتركة",
    title: "أَرْنَبٌ مُمَيَّزٌ فِعْلاً",
    themeTitle: "المحور الأول: من أكون؟ • أنا مميز",
    bookPages: "12 - 14",
    emoji: "🐰",
    color: "from-emerald-500 to-teal-600",
    commonWords: ["أُمِّي", "أَبِي"],
    scenes: [
      {
        title: "أرنوب الصغير في الغابة",
        emoji: "🌳🐰",
        text: "كان هناك أرنب صغير يعيش مع أَبِي وأُمِّي في الغابة الجميلة. كان ينظر إلى العصفور وهو يطير في السماء، وإلى القرد وهو يتسلق الشجرة، وإلى الغزالة وهي تجري، وإلى السلحفاة الهادئة.",
        audio: "كان يا ما كان يا أبطال، أرنب صغير جميل عايش مع باباه أَبِي ومامته أُمِّي في الغابة. كان بيبص على العصفورة وهي بتطير، والقرد وهو بيتسلق الشجر، والغزالة وهي بتجري."
      },
      {
        title: "لماذا أنا مختلف؟",
        emoji: "🥕🤔",
        text: "سأل الأرنب الصغير: يا أُمِّي ويا أَبِي، العصفور يطير والقرد يتسلق الشجر، فماذا أفعل أنا؟ قال أَبِي وقالت أُمِّي: أنت أرنب مميز فعلاً! أنت تقفز بسرعة كبيرة وأذناك طويلتان تسمع بهما كل الأصوات وتأكل الجزر اللذيذ.",
        audio: "سأل الأرنوب: يا أُمِّي ويا أَبِي، العصفورة بتطير والقرد بيطلع الشجرة، طب أنا مميز في إيه؟ قال أَبِي وقالت أُمِّي: إنت أرنب مميز فعلاً! بتعرف تنط بسرعة كبيرة وبتاكل الجزر الجميل، وكل واحد فينا ربنا خلقه مميز في حاجة حلوة!"
      }
    ],
    question: "ما الكلمات الشائعة التي تعلمناها في قصة أرنب مميز فعلاً؟",
    options: ["أُمِّي و أَبِي", "بحر و مركب", "ساعة و جسر"],
    correctIndex: 0
  },
  {
    id: "story-2",
    type: "قصة مشتركة",
    title: "يَوْمٌ مُخْتَلِفٌ جِدّاً",
    themeTitle: "المحور الأول: من أكون؟ • أسرتي",
    bookPages: "34 - 36",
    emoji: "👨‍👩‍👦",
    color: "from-sky-500 to-blue-600",
    commonWords: ["أَنَا", "قَالَ", "قَالَتْ"],
    scenes: [
      {
        title: "التعاون في الأسرة",
        emoji: "🏠🤝",
        text: "في يوم الإجازة، قَالَ أَبِي: اليوم سنتعاون جميعاً في ترتيب بيتنا الجميل. وقَالَتْ أُمِّي: أَنَا أُعِدُّ الطعام اللذيذ في المطبخ.",
        audio: "في يوم الإجازة الجميل، قَالَ أَبِي: النهاردة كلنا هنساعد بعض ونرتب بيتنا! وقَالَتْ أُمِّي: أَنَا هجهز الأكل الجميل في المطبخ."
      },
      {
        title: "دوري في أسرتي",
        emoji: "🧹🌟",
        text: "قَالَ الصغير بفخر: أَنَا أُحِبُّ أسرتي، أَنَا أُرتب ألعابي وأساعد أَبِي وأُمِّي! كان يوماً مختلفاً وممتعاً جداً.",
        audio: "وقَالَ البطل الصغير: أَنَا بحب أسرتي، أَنَا برتب ألعابي وسريري وبساعد بابا وماما! وكان يوم جميل ومختلف جداً."
      }
    ],
    question: "ماذا نفعل مع أسرتنا في البيت؟",
    options: ["نتعاون ونساعد أبي وأمي", "نرمي الألعاب على الأرض", "لا نرتب الغرفة"],
    correctIndex: 0
  },
  {
    id: "story-3",
    type: "قصة مشتركة",
    title: "النَّظَّارَةُ الصَّفْرَاءُ",
    themeTitle: "المحور الثاني: العالم من حولي • عالمي الصغير",
    bookPages: "52 - 54",
    emoji: "👓",
    color: "from-amber-500 to-yellow-600",
    commonWords: ["هَلْ", "لَا", "وَ"],
    scenes: [
      {
        title: "البحث مع الأصدقاء",
        emoji: "🔍👦",
        text: "ضاعت النظارة الصفراء في الحديقة، فسأل الصغير أصدقاءه: هَلْ رأيتم نظارتي الصفراء؟ قَالَ صديقه: لَا، لم أرها هنا، تعال نبحث عنها معاً تحت الشجرة وَ عند الألعاب!",
        audio: "النظارة الصفراء ضاعت في الجنينة، فسأل البطل صحابه: هَلْ شفتم نظارتي الصفراء؟ قال صاحبه: لَا، مشفتهاش هنا، يلا ندور عليها سوا عند الشجرة وَ الألعاب!"
      },
      {
        title: "الصديق وقت الضيق",
        emoji: "👓😊",
        text: "تعاون الأصدقاء وَوجدوا النظارة الصفراء، فشكرهم وقال: ما أجمل التعاون بين الأصدقاء في المدرسة!",
        audio: "تعاون الصحاب الحلوين وَلقوا النظارة الصفراء، وشكرهم البطل وقال: أحلى حاجة التعاون والمحبة بين الأصحاب في المدرسة!"
      }
    ],
    question: "ما الكلمة التي نسأل بها في القصة؟",
    options: ["هَلْ", "رُمَّان", "قَلَم"],
    correctIndex: 0
  },
  {
    id: "story-4",
    type: "قصة موجهة (اقرأ بنفسك)",
    title: "أَنَا أُحِبُّ 🍎🍊🍇🍓",
    themeTitle: "المحور الثاني: العالم من حولي • عالمي الصغير",
    bookPages: "69 - 72",
    emoji: "🍓",
    color: "from-rose-500 to-red-600",
    commonWords: ["أَنَا", "أُحِبُّ"],
    scenes: [
      {
        title: "الصفحة 1 و 2 من القصة الموجهة",
        emoji: "🍎🍊",
        text: "١- أَنَا أُحِبُّ التُّفَّاحَ 🍎.   ٢- أَنَا أُحِبُّ البُرْتُقَالَ 🍊.",
        audio: "يلا نقرأ سوا جمل القصة الموجهة صفحة تسعة وستين: أَنَا أُحِبُّ التُّفَّاحَ. أَنَا أُحِبُّ البُرْتُقَالَ."
      },
      {
        title: "الصفحة 3 و 4 من القصة الموجهة",
        emoji: "🍇🍓",
        text: "٣- أَنَا أُحِبُّ العِنَبَ 🍇.   ٤- أَنَا أُحِبُّ الفَرَاوْلَةَ 🍓.",
        audio: "أَنَا أُحِبُّ العِنَبَ. أَنَا أُحِبُّ الفَرَاوْلَةَ. برافو يا بطل القراءة!"
      }
    ],
    question: "أي من هذه الفواكه ذُكرت في قصة (أَنَا أُحِبُّ)؟",
    options: ["التفاح والبرتقال والعنب والفراولة", "الجزر والخيار فقط", "الخبز واللبن"],
    correctIndex: 0
  },
  {
    id: "story-5",
    type: "قصة مشتركة",
    title: "أَنَا مُخْتَلِفٌ (أطفال حول العالم)",
    themeTitle: "المحور الثاني: العالم من حولي • عالمي الكبير",
    bookPages: "74 - 76",
    emoji: "🌍",
    color: "from-indigo-500 to-purple-600",
    commonWords: ["فِي", "لِمَاذَا", "أَيْضاً", "شُكْراً", "مَرْحَباً"],
    scenes: [
      {
        title: "سائح في بلدي",
        emoji: "🧳🌍",
        text: "قابلنا سائحاً يزور بلدنا الجميل، فسألت: لِمَاذَا يتحدث بلغة مختلفة؟ تعلمنا أن الأطفال فِي العالم يتحدثون لغات متنوعة، ونقول لهم بالعربية: مَرْحَباً بِكُمْ وَ شُكْراً!",
        audio: "قابلنا سائح بيزور بلدنا الجميل، وعرفنا إن الأطفال فِي كل بلاد العالم ليهم لغات وأشكال متنوعة، وبنرحب بيهم بلغتنا العربية الجميلة ونقول: مَرْحَباً بِكُمْ وَ شُكْراً!"
      }
    ],
    question: "ماذا نقول للضيوف باللغة العربية؟",
    options: ["مَرْحَباً بِكُمْ وَ شُكْراً", "Thank you فقط", "Merci فقط"],
    correctIndex: 0
  },
  {
    id: "story-6",
    type: "قصة موجهة (اقرأ بالحروف التي تعلمتها)",
    title: "مَاذَا رَسَمَ أَبِي؟ 🎨",
    themeTitle: "المحور الثاني: العالم من حولي • عالمي الكبير",
    bookPages: "91 - 94",
    emoji: "🎨",
    color: "from-teal-500 to-emerald-600",
    commonWords: ["رَسَمَ", "أَبِي", "نَمْلٌ", "بَحْرٌ", "رَمْلٌ", "تَمْرٌ", "سُحُبٌ", "فَرَسٌ"],
    scenes: [
      {
        title: "لوحة أبي الأولى (ص 91)",
        emoji: "🐜🌴🐎",
        text: "١- رَسَمَ أَبِي نَمْلاً 🐜.   ٢- رَسَمَ أَبِي تَمْراً 🌴.   ٣- رَسَمَ أَبِي فَرَساً 🐎.",
        audio: "يلا نقرأ بالكلمات اللي اتعلمنا حروفها صفحة واحد وتسعين: رَسَمَ أَبِي نَمْلاً. رَسَمَ أَبِي تَمْراً. رَسَمَ أَبِي فَرَساً."
      },
      {
        title: "لوحة البحر الجميلة (ص 92)",
        emoji: "🏖️🌊☁️",
        text: "٤- رَسَمَ أَبِي رَمْلاً 🏖️.   ٥- رَسَمَ أَبِي بَحْراً 🌊.   ٦- رَسَمَ أَبِي سُحُباً أَيْضاً ☁️.",
        audio: "رَسَمَ أَبِي رَمْلاً. رَسَمَ أَبِي بَحْراً. رَسَمَ أَبِي سُحُباً أَيْضاً! ما شاء الله، قريت القصة كلها لوحدك يا بطل!"
      }
    ],
    question: "ماذا رَسَمَ أَبِي في القصة؟",
    options: ["نَمْلاً، تَمْراً، فَرَساً، رَمْلاً، وَ بَحْراً", "سيارة وطائرة وقطاراً", "تلفازاً وهاتفاً"],
    correctIndex: 0
  }
];

// Word Blending Exercises directly from Textbook pages 45, 62, 66, 80, 84, 88, 95
export const WORD_BLENDING_EXERCISES = [
  { id: "blend-1", letters: ["أ", "ب"], word: "أَبٌ", emoji: "👨", page: "45", audio: "ألف مع باء تبقى كلمة: أَبٌ!" },
  { id: "blend-2", letters: ["أ", "م"], word: "أُمٌّ", emoji: "❤️", page: "45", audio: "ألف ضمة مع ميم تبقى كلمة: أُمٌّ!" },
  { id: "blend-3", letters: ["ف", "م"], word: "فَمٌ", emoji: "👄", page: "45", audio: "فاء مع ميم تبقى كلمة: فَمٌ!" },
  { id: "blend-4", letters: ["ف", "ل"], word: "فُلٌّ", emoji: "🌼", page: "62", audio: "فاء مع لام تبقى كلمة: فُلٌّ!" },
  { id: "blend-5", letters: ["ل", "ب", "ن"], word: "لَبَنٌ", emoji: "🥛", page: "62", audio: "لام مع باء مع نون تبقى كلمة: لَبَنٌ!" },
  { id: "blend-6", letters: ["ن", "م", "ل"], word: "نَمْلٌ", emoji: "🐜", page: "62", audio: "نون مع ميم مع لام تبقى كلمة: نَمْلٌ!" },
  { id: "blend-7", letters: ["ب", "ن"], word: "بُنٌّ", emoji: "🫘", page: "62", audio: "باء مع نون تبقى كلمة: بُنٌّ!" },
  { id: "blend-8", letters: ["ل", "ح", "م"], word: "لَحْمٌ", emoji: "🥩", page: "66", audio: "لام مع حاء مع ميم تبقى كلمة: لَحْمٌ!" },
  { id: "blend-9", letters: ["ب", "ل", "ح"], word: "بَلَحٌ", emoji: "🌴", page: "66", audio: "باء مع لام مع حاء تبقى كلمة: بَلَحٌ!" },
  { id: "blend-10", letters: ["ح", "ب", "ل"], word: "حَبْلٌ", emoji: "🪢", page: "66", audio: "حاء مع باء مع لام تبقى كلمة: حَبْلٌ!" },
  { id: "blend-11", letters: ["م", "ل", "ح"], word: "مِلْحٌ", emoji: "🧂", page: "66", audio: "ميم مع لام مع حاء تبقى كلمة: مِلْحٌ!" },
  { id: "blend-12", letters: ["ر", "م", "ل"], word: "رَمْلٌ", emoji: "🏖️", page: "80", audio: "راء مع ميم مع لام تبقى كلمة: رَمْلٌ!" },
  { id: "blend-13", letters: ["ب", "ح", "ر"], word: "بَحْرٌ", emoji: "🌊", page: "80", audio: "باء مع حاء مع راء تبقى كلمة: بَحْرٌ!" },
  { id: "blend-14", letters: ["ت", "م", "ر"], word: "تَمْرٌ", emoji: "🌴", page: "84", audio: "تاء مع ميم مع راء تبقى كلمة: تَمْرٌ!" },
  { id: "blend-15", letters: ["ب", "ن", "ت"], word: "بِنْتٌ", emoji: "👧", page: "84", audio: "باء مع نون مع تاء تبقى كلمة: بِنْتٌ!" },
  { id: "blend-16", letters: ["س", "ح", "ب"], word: "سُحُبٌ", emoji: "☁️", page: "88", audio: "سين مع حاء مع باء تبقى كلمة: سُحُبٌ!" },
  { id: "blend-17", letters: ["ف", "ر", "س"], word: "فَرَسٌ", emoji: "🐎", page: "88", audio: "فاء مع راء مع سين تبقى كلمة: فَرَسٌ!" },
  { id: "blend-18", letters: ["ر", "أ", "س"], word: "رَأْسٌ", emoji: "👦", page: "88", audio: "راء مع ألف مع سين تبقى كلمة: رَأْسٌ!" }
];

// Interactive Audio Quiz Questions for KG1
export const KG_GAMES_POOL = [
  { id: "g1", questionAudio: "يا بطل، فين الصورة اللي بتبدأ بصوت (أَ) فتحة؟", targetHaraka: "أَ", correctWord: "أَسَدٌ", correctEmoji: "🦁", options: [{ word: "أَسَدٌ", emoji: "🦁" }, { word: "مَوْزٌ", emoji: "🍌" }, { word: "بَطَّةٌ", emoji: "🦆" }], page: "22" },
  { id: "g2", questionAudio: "اسمع كويس: كلمة (إِشَارَةٌ)، بتبدأ بأي حركة لحرف الألف؟", targetHaraka: "إِ", correctWord: "إِ (كسرة)", correctEmoji: "🚦", options: [{ word: "أَ (فتحة)", emoji: "☀️" }, { word: "إِ (كسرة)", emoji: "🚦" }, { word: "أُ (ضمة)", emoji: "🐙" }], page: "23" },
  { id: "g3", questionAudio: "فين الصورة اللي بتبدأ بحرف الميم (مَ)؟", targetHaraka: "مَ", correctWord: "مَوْزٌ", correctEmoji: "🍌", options: [{ word: "تُفَّاحٌ", emoji: "🍎" }, { word: "مَوْزٌ", emoji: "🍌" }, { word: "سَمَكَةٌ", emoji: "🐟" }], page: "26" },
  { id: "g4", questionAudio: "كلمة (مِقَصٌّ) بتبدأ بصوت إيه؟", targetHaraka: "مِ", correctWord: "مِ (ميم كسرة)", correctEmoji: "✂️", options: [{ word: "مِ (ميم كسرة)", emoji: "✂️" }, { word: "مُ (ميم ضمة)", emoji: "🤡" }, { word: "بَ (باء فتحة)", emoji: "🦆" }], page: "27" },
  { id: "g5", questionAudio: "اختر الصورة التي تبدأ بحرف الباء ضمة (بُ)!", targetHaraka: "بُ", correctWord: "بُرْتُقَالٌ", correctEmoji: "🍊", options: [{ word: "بُرْتُقَالٌ", emoji: "🍊" }, { word: "بَيْتٌ", emoji: "🏠" }, { word: "فِيلٌ", emoji: "🐘" }], page: "39" },
  { id: "g6", questionAudio: "مين في دول بيبدأ بحرف الفاء كسرة (فِ)؟", targetHaraka: "فِ", correctWord: "فِيلٌ", correctEmoji: "🐘", options: [{ word: "فِيلٌ", emoji: "🐘" }, { word: "حَمَامَةٌ", emoji: "🕊️" }, { word: "أَرْنَبٌ", emoji: "🐰" }], page: "42" },
  { id: "g7", questionAudio: "فين الصورة اللي بتبدأ بحرف النون فتحة (نَ)؟", targetHaraka: "نَ", correctWord: "نَجْمَةٌ", correctEmoji: "⭐", options: [{ word: "نَجْمَةٌ", emoji: "⭐" }, { word: "لَبَنٌ", emoji: "🥛" }, { word: "حُوتٌ", emoji: "🐋" }], page: "56" },
  { id: "g8", questionAudio: "القطة بتحب تشرب إيه يبدأ بحرف اللام (لَ)؟", targetHaraka: "لَ", correctWord: "لَبَنٌ", correctEmoji: "🥛", options: [{ word: "لَبَنٌ", emoji: "🥛" }, { word: "تَمْرٌ", emoji: "🌴" }, { word: "رُمَّانٌ", emoji: "🍎" }], page: "60" },
  { id: "g9", questionAudio: "مين الكائن البحري الضخم اللي بيبدأ بحرف الحاء ضمة (حُ)؟", targetHaraka: "حُ", correctWord: "حُوتٌ", correctEmoji: "🐋", options: [{ word: "حُوتٌ", emoji: "🐋" }, { word: "سُلَحْفَاةٌ", emoji: "🐢" }, { word: "فَرَاشَةٌ", emoji: "🦋" }], page: "64" },
  { id: "g10", questionAudio: "فين الصورة اللي بتبدأ بحرف الراء كسرة (رِ)؟", targetHaraka: "رِ", correctWord: "رِيشَةٌ", correctEmoji: "🪶", options: [{ word: "رِيشَةٌ", emoji: "🪶" }, { word: "تَاجٌ", emoji: "👑" }, { word: "سَرِيرٌ", emoji: "🛏️" }], page: "78" },
  { id: "g11", questionAudio: "الملك بيلبس إيه فوق راسه يبدأ بحرف التاء فتحة (تَ)؟", targetHaraka: "تَ", correctWord: "تَاجٌ", correctEmoji: "👑", options: [{ word: "تَاجٌ", emoji: "👑" }, { word: "فُسْتَانٌ", emoji: "👗" }, { word: "مِقَصٌّ", emoji: "✂️" }], page: "82" },
  { id: "g12", questionAudio: "مين اللي بتمشي ببطء وبتبدأ بحرف السين ضمة (سُ)؟", targetHaraka: "سُ", correctWord: "سُلَحْفَاةٌ", correctEmoji: "🐢", options: [{ word: "سُلَحْفَاةٌ", emoji: "🐢" }, { word: "أَرْنَبٌ", emoji: "🐰" }, { word: "فَرَسٌ", emoji: "🐎" }], page: "86" }
];
