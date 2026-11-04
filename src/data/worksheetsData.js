// Complete Print-Ready Worksheets Data for Modern Misr School KG1
// 29 Comprehensive Worksheets based on Egyptian Ministry Curriculum (كتاب تواصل - لغة عربية)

export const WORKSHEET_CATEGORIES = [
  { id: 'all', label: 'جميع الشيتات (29)', emoji: '📑' },
  { id: 'tracing', label: 'شيتات تتبع وكتابة الحروف (10)', emoji: '✏️' },
  { id: 'coloring', label: 'صفحات التلوين والأنشطة (10)', emoji: '🎨' },
  { id: 'seasons', label: 'حركات الفصول الأربعة (4)', emoji: '☀️' },
  { id: 'blending', label: 'دمج وتكوين الكلمات (3)', emoji: '🧩' },
  { id: 'tests', label: 'شيتات تقييم وقياس مستوى (2)', emoji: '📝' }
];

export const WORKSHEETS_DATA = [
  // ================= 1. TRACING WORKSHEETS (10) =================
  {
    id: 'trace-alif',
    category: 'tracing',
    letterChar: 'أ',
    letterName: 'حرف الألف',
    title: 'شيت تتبع وكتابة حرف الألف (أ)',
    description: 'تتبع خط الألف والهمزة من أعلى إلى أسفل، وكتابة الحرف بحركاته الثلاث مع تلوين صورة الأسد.',
    bookPage: 21,
    difficulty: 'مبتدئ',
    pagesCount: 1,
    wordExample: 'أَسَد',
    wordEmoji: '🦁',
    forms: ['أَ', 'أُ', 'إِ', 'ـأ'],
    tracingLines: [
      { text: 'أ', guide: 'أ     أ     أ     أ     أ' },
      { text: 'أَ', guide: 'أَ    أَ    أَ    أَ    أَ' },
      { text: 'أُ', guide: 'أُ    أُ    أُ    أُ    أُ' },
      { text: 'إِ', guide: 'إِ    إِ    إِ    إِ    إِ' }
    ],
    huntCharacters: ['أ', 'ب', 'أ', 'ت', 'م', 'أ', 'ف', 'أ', 'ن'],
    instruction: 'امسك القلم بطريقة صحيحة يا بطل، وتتبع النقاط من أعلى إلى أسفل، ثم لون الأسد الجميل!'
  },
  {
    id: 'trace-meem',
    category: 'tracing',
    letterChar: 'م',
    letterName: 'حرف الميم',
    title: 'شيت تتبع وكتابة حرف الميم (م)',
    description: 'تتبع دائرة الميم وذيلها النازل تحت السطر، وتلوين صورة الموز اللذيذ.',
    bookPage: 25,
    difficulty: 'مبتدئ',
    pagesCount: 1,
    wordExample: 'مَوْز',
    wordEmoji: '🍌',
    forms: ['مـ', 'ـمـ', 'ـم', 'م'],
    tracingLines: [
      { text: 'م', guide: 'م     م     م     م     م' },
      { text: 'مَ', guide: 'مَ    مَ    مَ    مَ    مَ' },
      { text: 'مُ', guide: 'مُ    مُ    مُ    مُ    مُ' },
      { text: 'مِ', guide: 'مِ    مِ    مِ    مِ    مِ' }
    ],
    huntCharacters: ['م', 'ل', 'م', 'س', 'ب', 'م', 'ر', 'م', 'أ'],
    instruction: 'ارسم دائرة الميم الصغيرة فوق السطر ثم انزل بذيلها تحت السطر بخط جميل.'
  },
  {
    id: 'trace-baa',
    category: 'tracing',
    letterChar: 'ب',
    letterName: 'حرف الباء',
    title: 'شيت تتبع وكتابة حرف الباء (ب)',
    description: 'تتبع صحن الباء الواسع والنقطة السحرية تحت الصحن، وتلوين البطة السابحة.',
    bookPage: 29,
    difficulty: 'مبتدئ',
    pagesCount: 1,
    wordExample: 'بَطَّة',
    wordEmoji: '🦆',
    forms: ['بـ', 'ـبـ', 'ـب', 'ب'],
    tracingLines: [
      { text: 'ب', guide: 'ب     ب     ب     ب     ب' },
      { text: 'بَ', guide: 'بَ    بَ    بَ    بَ    بَ' },
      { text: 'بُ', guide: 'بُ    بُ    بُ    بُ    بُ' },
      { text: 'بِ', guide: 'بِ    بِ    بِ    بِ    بِ' }
    ],
    huntCharacters: ['ب', 'ت', 'ب', 'ث', 'ن', 'ب', 'ف', 'ب', 'م'],
    instruction: 'ارسم طبق الباء على السطر وضع النقطة تحته، وتأكد أن الطبق مستقر على الخط.'
  },
  {
    id: 'trace-faa',
    category: 'tracing',
    letterChar: 'ف',
    letterName: 'حرف الفاء',
    title: 'شيت تتبع وكتابة حرف الفاء (ف)',
    description: 'تتبع رأس الفاء الدائرية والرقبة القصيرة وطبقها الواسع مع النقطة العلوية، وتلوين الفيل الضخم.',
    bookPage: 33,
    difficulty: 'مبتدئ',
    pagesCount: 1,
    wordExample: 'فِيل',
    wordEmoji: '🐘',
    forms: ['فـ', 'ـفـ', 'ـف', 'ف'],
    tracingLines: [
      { text: 'ف', guide: 'ف     ف     ف     ف     ف' },
      { text: 'فَ', guide: 'فَ    فَ    فَ    فَ    فَ' },
      { text: 'فُ', guide: 'فُ    فُ    فُ    فُ    فُ' },
      { text: 'فِ', guide: 'فِ    فِ    فِ    فِ    فِ' }
    ],
    huntCharacters: ['ف', 'ق', 'ف', 'ب', 'م', 'ف', 'ن', 'ف', 'ر'],
    instruction: 'دوّر رأس الفاء وانزل برقبة صغيرة ثم امشِ على السطر وضع نقطة واحدة فوق الرأس.'
  },
  {
    id: 'trace-noon',
    category: 'tracing',
    letterChar: 'ن',
    letterName: 'حرف النون',
    title: 'شيت تتبع وكتابة حرف النون (ن)',
    description: 'تتبع صحن النون العميق النازل تحت السطر مع النقطة في وسطه، وتلوين النحلة النشيطة.',
    bookPage: 43,
    difficulty: 'متوسط',
    pagesCount: 1,
    wordExample: 'نَحْلَة',
    wordEmoji: '🐝',
    forms: ['نـ', 'ـنـ', 'ـن', 'ن'],
    tracingLines: [
      { text: 'ن', guide: 'ن     ن     ن     ن     ن' },
      { text: 'نَ', guide: 'نَ    نَ    نَ    نَ    نَ' },
      { text: 'نُ', guide: 'نُ    نُ    نُ    نُ    نُ' },
      { text: 'نِ', guide: 'نِ    نِ    نِ    نِ    نِ' }
    ],
    huntCharacters: ['ن', 'ب', 'ن', 'ت', 'ث', 'ن', 'ل', 'ن', 'س'],
    instruction: 'صحن النون عميق وينزل تحت السطر، والنقطة تلمع في قلبه كالنجمة!'
  },
  {
    id: 'trace-laam',
    category: 'tracing',
    letterChar: 'ل',
    letterName: 'حرف اللام',
    title: 'شيت تتبع وكتابة حرف اللام (ل)',
    description: 'تتبع يد المظلة الطويلة وقوسها النازل تحت السطر، وتلوين الليمون الأصفر.',
    bookPage: 47,
    difficulty: 'متوسط',
    pagesCount: 1,
    wordExample: 'لَيْمُون',
    wordEmoji: '🍋',
    forms: ['لـ', 'ـلـ', 'ـل', 'ل'],
    tracingLines: [
      { text: 'ل', guide: 'ل     ل     ل     ل     ل' },
      { text: 'لَ', guide: 'لَ    لَ    لَ    لَ    لَ' },
      { text: 'لُ', guide: 'لُ    لُ    لُ    لُ    لُ' },
      { text: 'لِ', guide: 'لِ    لِ    لِ    لِ    لِ' }
    ],
    huntCharacters: ['ل', 'أ', 'ل', 'ك', 'م', 'ل', 'ن', 'ل', 'ح'],
    instruction: 'انزل بعصا مستقيمة طويلة من فوق، ولف القوس تحت السطر واصعد به قليلاً.'
  },
  {
    id: 'trace-haa',
    category: 'tracing',
    letterChar: 'ح',
    letterName: 'حرف الحاء',
    title: 'شيت تتبع وكتابة حرف الحاء (ح)',
    description: 'تتبع حاجب الحاء المائل وبطنها النصف دائري الكبير بدون أي نقاط، وتلوين الحوت الأزرق.',
    bookPage: 51,
    difficulty: 'متوسط',
    pagesCount: 1,
    wordExample: 'حُوت',
    wordEmoji: '🐋',
    forms: ['حـ', 'ـحـ', 'ـح', 'ح'],
    tracingLines: [
      { text: 'ح', guide: 'ح     ح     ح     ح     ح' },
      { text: 'حَ', guide: 'حَ    حَ    حَ    حَ    حَ' },
      { text: 'حُ', guide: 'حُ    حُ    حُ    حُ    حُ' },
      { text: 'حِ', guide: 'حِ    حِ    حِ    حِ    حِ' }
    ],
    huntCharacters: ['ح', 'ج', 'ح', 'خ', 'ح', 'ع', 'ح', 'م', 'ح'],
    instruction: 'ارسم موجة الحاجب فوق السطر ثم ارجع واصنع بطناً كبيرة تلف تحت السطر بدون نقط.'
  },
  {
    id: 'trace-raa',
    category: 'tracing',
    letterChar: 'ر',
    letterName: 'حرف الراء',
    title: 'شيت تتبع وكتابة حرف الراء (ر)',
    description: 'تتبع زحليقة الراء الرشيقة النازلة بميل تحت السطر، وتلوين الريشة الناعمة.',
    bookPage: 55,
    difficulty: 'مبتدئ',
    pagesCount: 1,
    wordExample: 'رِيشَة',
    wordEmoji: '🪶',
    forms: ['ر', 'ـر', 'ر', 'ـر'],
    tracingLines: [
      { text: 'ر', guide: 'ر     ر     ر     ر     ر' },
      { text: 'رَ', guide: 'رَ    رَ    رَ    رَ    رَ' },
      { text: 'رُ', guide: 'رُ    رُ    رُ    رُ    رُ' },
      { text: 'رِ', guide: 'رِ    رِ    رِ    رِ    رِ' }
    ],
    huntCharacters: ['ر', 'ز', 'ر', 'د', 'و', 'ر', 'ل', 'ر', 'ح'],
    instruction: 'سنة صغيرة فوق السطر ثم تزحلق بالقلم بميل جميل تحت السطر كالزحليقة!'
  },
  {
    id: 'trace-taa',
    category: 'tracing',
    letterChar: 'ت',
    letterName: 'حرف التاء',
    title: 'شيت تتبع وكتابة حرف التاء (ت)',
    description: 'تتبع طبق التاء الباسم ونقطتي العينين الجميلتين فوقه، وتلوين التفاحة الحمراء.',
    bookPage: 63,
    difficulty: 'مبتدئ',
    pagesCount: 1,
    wordExample: 'تُفَّاح',
    wordEmoji: '🍎',
    forms: ['تـ', 'ـتـ', 'ـت', 'ت'],
    tracingLines: [
      { text: 'ت', guide: 'ت     ت     ت     ت     ت' },
      { text: 'تَ', guide: 'تَ    تَ    تَ    تَ    تَ' },
      { text: 'تُ', guide: 'تُ    تُ    تُ    تُ    تُ' },
      { text: 'تِ', guide: 'تِ    تِ    تِ    تِ    تِ' }
    ],
    huntCharacters: ['ت', 'ب', 'ت', 'ث', 'ن', 'ت', 'ف', 'ت', 'س'],
    instruction: 'ارسم طبقاً مبتسماً وضع فيه نقطتين متجاورتين كعينين سعيـدتين.'
  },
  {
    id: 'trace-seen',
    category: 'tracing',
    letterChar: 'س',
    letterName: 'حرف السين',
    title: 'شيت تتبع وكتابة حرف السين (س)',
    description: 'تتبع الأسنان الثلاثة الصغيرة وصحن السين الكبير النازل تحت السطر، وتلوين السمكة الملونة.',
    bookPage: 67,
    difficulty: 'متقدم',
    pagesCount: 1,
    wordExample: 'سَمَكَة',
    wordEmoji: '🐟',
    forms: ['سـ', 'ـسـ', 'ـس', 'س'],
    tracingLines: [
      { text: 'س', guide: 'س     س     س     س     س' },
      { text: 'سَ', guide: 'سَ    سَ    سَ    سَ    سَ' },
      { text: 'سُ', guide: 'سُ    سُ    سُ    سُ    سُ' },
      { text: 'سِ', guide: 'سِ    سِ    سِ    سِ    سِ' }
    ],
    huntCharacters: ['س', 'ش', 'س', 'ص', 'س', 'ن', 'س', 'ب', 'س'],
    instruction: 'ثلاث سنّات صغيرة متقاربة فوق السطر ثم انزل بصحن واسع تحت السطر واصعد به.'
  },

  // ================= 2. COLORING WORKSHEETS (10) =================
  {
    id: 'color-alif',
    category: 'coloring',
    letterChar: 'أ',
    letterName: 'تلوين حرف الألف والأسد والأرنب',
    title: 'صفحة تلوين: أ - أَسَد ملك الغابة 🦁',
    description: 'لوّن الحرف المجوف الكبير ولوّن صورة الأسد والأرنب والأناناس، وزيّن الإطار بألوانك المفضلة.',
    bookPage: 22,
    wordExample: 'أَسَد، أَرْنَب، أَنَانَاس',
    wordEmoji: '🦁 🐰 🍍',
    colorTarget: 'الأصفر والبرتقالي والبني',
    instruction: 'استخدم ألوانك الجميلة داخل الخطوط ولا تخرج خارج الحدود لتصبح لوحتك رائعة!'
  },
  {
    id: 'color-meem',
    category: 'coloring',
    letterChar: 'م',
    letterName: 'تلوين حرف الميم والموز والمركب',
    title: 'صفحة تلوين: م - مَوْز لذيذ ومَرْكَب 🍌⛵',
    description: 'لوّن حرف الميم الضخم وأطباق الموز والمانجو والمركب الشراعي في البحر.',
    bookPage: 26,
    wordExample: 'مَوْز، مَرْكَب، مِقَصّ',
    wordEmoji: '🍌 ⛵ ✂️',
    colorTarget: 'الأصفر والأزرق والأحمر',
    instruction: 'لوّن الموز بالأصفر الجميل ولون شراع المركب بلونك المفضل!'
  },
  {
    id: 'color-baa',
    category: 'coloring',
    letterChar: 'ب',
    letterName: 'تلوين حرف الباء والبطة والبرتقال',
    title: 'صفحة تلوين: ب - بَطَّة جميلة وبُرْتُقَال 🦆🍊',
    description: 'تلوين الحرف مع البطة السابحة في البحيرة وحبات البرتقال والبالونات الطائرة.',
    bookPage: 30,
    wordExample: 'بَطَّة، بُرْتُقَال، بَيْت',
    wordEmoji: '🦆 🍊 🏠',
    colorTarget: 'الأصفر والبرتقالي والأخضر',
    instruction: 'لوّن ماء البحيرة بالأزرق السماوي والبطة بالأصفر والمنقار بالبرتقالي.'
  },
  {
    id: 'color-faa',
    category: 'coloring',
    letterChar: 'ف',
    letterName: 'تلوين حرف الفاء والفيل والفراشة',
    title: 'صفحة تلوين: ف - فِيل ضخم وفَرَاشَة 🐘🦋',
    description: 'لوّن الفيل الطيب وخرطومه الطويل، والفراشة الجميلة بين الأزهار الملونة.',
    bookPage: 34,
    wordExample: 'فِيل، فَرَاشَة، فَم',
    wordEmoji: '🐘 🦋 👄',
    colorTarget: 'الرمادي والوردي والبنفسجي',
    instruction: 'زيّن أجنحة الفراشة بألوان زاهية كقوس قزح!'
  },
  {
    id: 'color-noon',
    category: 'coloring',
    letterChar: 'ن',
    letterName: 'تلوين حرف النون والنحلة والنجوم',
    title: 'صفحة تلوين: ن - نَحْلَة ونُجُوم الليل 🐝⭐',
    description: 'لوّن النحلة وهي تطير فوق الزهرة وخلايا العسل والنجوم اللامعة في السماء.',
    bookPage: 44,
    wordExample: 'نَحْلَة، نَجْمَة، نِسْر',
    wordEmoji: '🐝 ⭐ 🦅',
    colorTarget: 'الأصفر والأسود والذهبي',
    instruction: 'لوّن النجمة بلون ذهبي لامع وخلفية السماء بأزرق داكن.'
  },
  {
    id: 'color-laam',
    category: 'coloring',
    letterChar: 'ل',
    letterName: 'تلوين حرف اللام والليمون واللحم',
    title: 'صفحة تلوين: ل - لَيْمُون ولِحَاف دافئ 🍋🛌',
    description: 'لوّن حبات الليمون وأوراق الشجر الخضراء واللحاف الملون بأشكال هندسية.',
    bookPage: 48,
    wordExample: 'لَيْمُون، لَحْم، لِسَان',
    wordEmoji: '🍋 🥩 👅',
    colorTarget: 'الأصفر والأخضر والأحمر',
    instruction: 'أطلق العنان لخيالك في تلوين حبات الليمون وأوراق شجر الحديقة!'
  },
  {
    id: 'color-haa',
    category: 'coloring',
    letterChar: 'ح',
    letterName: 'تلوين حرف الحاء والحوت والحبل',
    title: 'صفحة تلوين: ح - حُوت في أعماق البحار 🐋🌊',
    description: 'لوّن الحوت الضخم وهو ينفث الماء، والأسماك الصغيرة والشعب المرجانية.',
    bookPage: 52,
    wordExample: 'حُوت، حَبْل، حِصَان',
    wordEmoji: '🐋 🪢 🐎',
    colorTarget: 'الأزرق البحري والتركواز',
    instruction: 'لوّن فقاعات الماء ونافورة الحوت بدرجات الأزرق المختلفة.'
  },
  {
    id: 'color-raa',
    category: 'coloring',
    letterChar: 'ر',
    letterName: 'تلوين حرف الراء والرمل والريشة',
    title: 'صفحة تلوين: ر - رَمْل الشاطئ ورِيشَة 🏖️🪶',
    description: 'تلوين قصر الرمل على الشاطئ ومظلة البحر والريشة الطائرة في الهواء.',
    bookPage: 56,
    wordExample: 'رَمْل، رِيشَة، رُمَّان',
    wordEmoji: '🏖️ 🪶 🍎',
    colorTarget: 'البيج الرملي والأحمر والأزرق',
    instruction: 'لوّن رمان الحديقة بالأحمر القرمزي وقصر الرمل باللون الذهبي.'
  },
  {
    id: 'color-taa',
    category: 'coloring',
    letterChar: 'ت',
    letterName: 'تلوين حرف التاء والتفاح والتمساح',
    title: 'صفحة تلوين: ت - تُفَّاح لذيذ وتِمْسَاح 🍎🐊',
    description: 'لوّن شجرة التفاح الممتلئة بالثمار والتفاحة المقضومة والتمساح الصغير.',
    bookPage: 64,
    wordExample: 'تُفَّاح، تِمْسَاح، تَاج',
    wordEmoji: '🍎 🐊 👑',
    colorTarget: 'الأحمر والأخضر والذهبي',
    instruction: 'لوّن التاج الذهبي المرصع بالجواهر والتفاحات الحمراء الشهية!'
  },
  {
    id: 'color-seen',
    category: 'coloring',
    letterChar: 'س',
    letterName: 'تلوين حرف السين والسمك والسيارة',
    title: 'صفحة تلوين: س - سَمَكَة وسَيَّارَة 🐟🚗',
    description: 'تلوين السمكة الذهبية وحراشفها الدائرية والسيارة الرياضية المسرعة.',
    bookPage: 68,
    wordExample: 'سَمَكَة، سَيَّارَة، سُلْحَفَاة',
    wordEmoji: '🐟 🚗 🐢',
    colorTarget: 'البرتقالي والأزرق والأخضر',
    instruction: 'لوّن قوقعة السلحفاة بدرجات الأخضر والسمكة بالبرتقالي الزاهي.'
  },

  // ================= 3. FOUR SEASONS HARAKAT WORKSHEETS (4) =================
  {
    id: 'season-summer',
    category: 'seasons',
    letterChar: 'َ',
    seasonName: 'فصل الصيف (حركة الفتحة)',
    title: 'شيت تدريبات فصل الصيف: صَوْتُ الفَتْحَةِ (َ)',
    description: 'الشمس مشرقة والولد يلبس قبعته ويفتح فمه للأعلى قائلاً: (أَ، بَ، مَ، فَ، سَ). نشاط وصل الحرف المفتوح بالصورة المناسبة.',
    bookPage: 23,
    activities: [
      { q: 'صِلِ الحَرْفَ المَفْتُوحَ بِالصُّورَةِ الَّتِي تَبْدَأُ بِهِ:', pairs: [
        { char: 'أَ', word: 'أَسَد', emoji: '🦁' },
        { char: 'بَ', word: 'بَطَّة', emoji: '🦆' },
        { char: 'مَ', word: 'مَوْز', emoji: '🍌' },
        { char: 'فَ', word: 'فَرَاشَة', emoji: '🦋' }
      ]},
      { q: 'ضَعْ دَائِرَةً حَوْلَ الحَرْفِ الَّذِي عَلَيْهِ فَتْحَة ( َ ):', pool: ['أَ', 'إِ', 'بَ', 'بُ', 'مَ', 'مِ', 'فَ', 'فُ', 'سَ'] }
    ]
  },
  {
    id: 'season-autumn',
    category: 'seasons',
    letterChar: 'ُ',
    seasonName: 'فصل الخريف (حركة الضمة)',
    title: 'شيت تدريبات فصل الخريف: صَوْتُ الضَّمَّةِ (ُ)',
    description: 'الرياح تهب والطفل يضم شفتيه ويطلق طائرته الورقية قائلاً: (أُ، بُ، مُ، فُ، سُ). نشاط التلوين والوصل.',
    bookPage: 24,
    activities: [
      { q: 'صِلِ الحَرْفَ المَضْمُومَ بِالصُّورَةِ المُنَاسِبَةِ:', pairs: [
        { char: 'أُ', word: 'أُذُن', emoji: '👂' },
        { char: 'بُ', word: 'بُرْتُقَال', emoji: '🍊' },
        { char: 'مُ', word: 'مُعَلِّمَة', emoji: '👩‍🏫' },
        { char: 'حُ', word: 'حُوت', emoji: '🐋' }
      ]},
      { q: 'لَوِّنِ الطَّائِرَاتِ الوَرَقِيَّةَ الَّتِي تَحْمِلُ ضَمَّة ( ُ ):', pool: ['أُ', 'أَ', 'بُ', 'تِ', 'حُ', 'سُ', 'رَ', 'لُ'] }
    ]
  },
  {
    id: 'season-winter',
    category: 'seasons',
    letterChar: 'ِ',
    seasonName: 'فصل الشتاء (حركة الكسرة)',
    title: 'شيت تدريبات فصل الشتاء: صَوْتُ الكَسْرَةِ (ِ)',
    description: 'الجليد يتساقط والطفل يتزلج بزلاجته إلى الأسفل كاسراً فمه: (إِ، بِ، مِ، فِ، رِ). شيت استماع وتحديد الكسرة.',
    bookPage: 31,
    activities: [
      { q: 'صِلِ الحَرْفَ المَكْسُورَ بِالصُّورَةِ الصَّحِيحَةِ:', pairs: [
        { char: 'إِ', word: 'إِبْرِيق', emoji: '🫖' },
        { char: 'فِ', word: 'فِيل', emoji: '🐘' },
        { char: 'حِ', word: 'حِصَان', emoji: '🐎' },
        { char: 'رِ', word: 'رِيشَة', emoji: '🪶' }
      ]},
      { q: 'لَوِّنْ كُرَاتِ الثَّلْجِ الَّتِي تَحْتَوِي عَلَى حَرْفٍ مَكْسُور ( ِ ):', pool: ['إِ', 'أَ', 'بِ', 'بُ', 'فِ', 'فَ', 'رِ', 'رُ'] }
    ]
  },
  {
    id: 'season-spring',
    category: 'seasons',
    letterChar: 'ْ',
    seasonName: 'فصل الربيع (حركة السكون)',
    title: 'شيت تدريبات فصل الربيع: صَوْتُ السُّكُونِ (ْ)',
    description: 'الأزهار تتفتح والشمس دائرية هادئة كالسكون والطفل يقف مستريحاً: (أْ، بْ، مْ، فْ). تدريب قراءة الحرف الساكن.',
    bookPage: 32,
    activities: [
      { q: 'اسْتَمِعْ وَضَعْ دَائِرَةً حَوْلَ الكَلِمَةِ الَّتِي فِي وَسَطِهَا سُكُون:', pairs: [
        { char: 'أْ', word: 'رَأْس', emoji: '🗣️' },
        { char: 'بْ', word: 'حَبْل', emoji: '🪢' },
        { char: 'مْ', word: 'شَمْس', emoji: '☀️' },
        { char: 'نْ', word: 'بِنْت', emoji: '👧' }
      ]},
      { q: 'حَوِّطِ الحَرْفَ السَّاكِنَ فَقَطْ فِي الكَلِمَاتِ الآتِيَةِ:', words: ['أَبْ', 'أُمّ', 'فَمْ', 'حَبْل', 'رَأْس'] }
    ]
  },

  // ================= 4. WORD BLENDING WORKSHEETS (3) =================
  {
    id: 'blend-umm',
    category: 'blending',
    title: 'شيت دمج الحروف وقراءة كلمة: أُمّ 👩‍👧',
    description: 'تدريب الطفل على دمج صوت (أُ) + (مّ) لتكوين وقراءة كلمة (أُمّ) وكتابتها مرتين وتلوين صورة الأم.',
    bookPage: 35,
    equation: 'أُ + مّ = أُمّ',
    word: 'أُمّ',
    emoji: '👩‍👧',
    lines: ['أُ + مّ = أُمّ', 'أُ + مّ = أُمّ', 'أُمّ     أُمّ     أُمّ'],
    huntBoxes: ['أُ', 'مّ', 'ب', 'أُ', 'س', 'مّ', 'ف', 'أُ', 'مّ'],
    instruction: 'اقرأ صوت الألف بالضمة، ثم صِلها بالميم لتنطق أحلى كلمة في الدنيا: أُمّ!'
  },
  {
    id: 'blend-abb',
    category: 'blending',
    title: 'شيت دمج الحروف وقراءة كلمة: أَبْ 👨‍👧',
    description: 'تدريب الطفل على دمج صوت (أَ) + (بْ) لتكوين وقراءة كلمة (أَبْ) وكتابتها بخط جميل وتلوين صورة الأب.',
    bookPage: 36,
    equation: 'أَ + بْ = أَبْ',
    word: 'أَبْ',
    emoji: '👨‍👧',
    lines: ['أَ + بْ = أَبْ', 'أَ + بْ = أَبْ', 'أَبْ     أَبْ     أَبْ'],
    huntBoxes: ['أَ', 'بْ', 'م', 'أَ', 'ت', 'بْ', 'ل', 'أَ', 'بْ'],
    instruction: 'انطق (أَ) ثم المس (بْ) واجمعهما معاً لتكون كلمة: أَبْ!'
  },
  {
    id: 'blend-famm',
    category: 'blending',
    title: 'شيت دمج الحروف وقراءة كلمة: فَمْ 👄',
    description: 'تدريب الطفل على دمج صوت (فَ) + (مْ) لتكوين كلمة (فَمْ) وتحديد أعضاء الوجه وتلوين الفم المبتسم.',
    bookPage: 37,
    equation: 'فَ + مْ = فَمْ',
    word: 'فَمْ',
    emoji: '👄',
    lines: ['فَ + مْ = فَمْ', 'فَ + مْ = فَمْ', 'فَمْ     فَمْ     فَمْ'],
    huntBoxes: ['فَ', 'مْ', 'أ', 'فَ', 'ن', 'مْ', 'ر', 'فَ', 'مْ'],
    instruction: 'فَـ مفتوحة مع مْ ساكنة تكونان كلمة (فَمْ)، اكتبها وتتبع النقاط.'
  },

  // ================= 5. ASSESSMENT TESTS (2) =================
  {
    id: 'assessment-midterm',
    category: 'tests',
    title: 'شيت تقييم منتصف الفصل الأول (المحور الأول: مَنْ أَكُونُ؟)',
    description: 'نموذج اختبار وقياس مهارات الوعي الصوتي والبصري لحروف (أ، م، ب، ف) وتكوين كلمتي (أب، أم).',
    bookPage: 39,
    duration: '20 دقيقة',
    totalScore: 10,
    sections: [
      {
        title: 'السؤال الأول (3 درجات): صِلْ كُلَّ صُورَةٍ بِصَوْتِ الحَرْفِ الأَوَّلِ:',
        items: [
          { sound: 'أَ', word: 'أَسَد 🦁' },
          { sound: 'مَ', word: 'مَوْز 🍌' },
          { sound: 'بَ', word: 'بَطَّة 🦆' },
          { sound: 'فِ', word: 'فِيل 🐘' }
        ]
      },
      {
        title: 'السؤال الثاني (3 درجات): ضَعْ دَائِرَةً حَوْلَ الحَرْفِ المُطَابِق:',
        items: [
          { target: 'أ', choices: ['ب', 'أ', 'ت', 'م'] },
          { target: 'م', choices: ['ل', 'ح', 'م', 'ف'] },
          { target: 'ب', choices: ['ن', 'ب', 'ف', 'ث'] }
        ]
      },
      {
        title: 'السؤال الثالث (4 درجات): دَمْجُ الحُرُوفِ وَكِتَابَةُ الكَلِمَة:',
        items: [
          { formula: 'أُ + مّ = ...........', ans: 'أُمّ' },
          { formula: 'أَ + بْ = ...........', ans: 'أَبْ' }
        ]
      }
    ]
  },
  {
    id: 'assessment-final',
    category: 'tests',
    title: 'شيت التقييم الشامل للترم الأول (الحروف العشرة وكتاب تواصل كامل)',
    description: 'اختبار شامل لقياس إتقان الحروف العشرة (أ، م، ب، ف، ن، ل، ح، ر، ت، س) والحركات والكلمات الثلاث.',
    bookPage: 71,
    duration: '30 دقيقة',
    totalScore: 20,
    sections: [
      {
        title: 'أولاً: الوعي الصوتي بالحركات القصيرة (5 درجات):',
        text: 'انطق اسم الصورة ثم حوّط الحركة الصحيحة للحرف الأول (فتحة / ضمة / كسرة)'
      },
      {
        title: 'ثانياً: كتابة الحروف العشرة بالترتيب (5 درجات):',
        text: 'اكتب الحروف الناقصة على خط السطر: أ - ... - ب - ... - ن - ... - ح - ... - ت - س'
      },
      {
        title: 'ثالثاً: تركيب وقراءة الكلمات (5 درجات):',
        text: 'رتب الحروف التالية لتكوين كلمة مفيدة: (م / أُ) - (بْ / أَ) - (مْ / فَ)'
      },
      {
        title: 'رابعاً: التمييز البصري ورسم الدوائر (5 درجات):',
        text: 'ابحث عن حرف (س) وحرف (ر) ولونهما باللون الأخضر.'
      }
    ]
  }
];
