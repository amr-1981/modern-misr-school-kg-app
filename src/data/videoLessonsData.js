// Curated YouTube Educational Channels & Video Lessons for Modern Misr School KG1
// Focused on Egyptian Curriculum (كتاب تواصل - لغة عربية - المستوى الأول)

export const VIDEO_TOPICS = [
  { id: 'all', label: 'جميع الفيديوهات والدروس', emoji: '🌟' },
  { id: 'ministry', label: 'شروحات كتاب تواصل الوزاري', emoji: '📚' },
  { id: 'letters', label: 'أناشيد وأصوات الحروف العشرة', emoji: '🔤' },
  { id: 'seasons', label: 'رحلة الحركات والفصول الأربعة', emoji: '☀️' },
  { id: 'phonics', label: 'الوعي الصوتي ودمج الكلمات', emoji: '🧩' },
  { id: 'stories', label: 'حكايات وقصص الاستماع المصورة', emoji: '📖' }
];

export const YOUTUBE_CHANNELS = [
  {
    id: 'madrasetna',
    name: 'قناة مدرستنا (وزارة التربية والتعليم المصرية)',
    badge: 'القناة الرسمية للوزارة 🇪🇬',
    description: 'القناة التعليمية الرسمية لوزارة التربية والتعليم في مصر، تقدم شرحاً معتمداً لمناهج 2.0 المطورة ورياض الأطفال.',
    subscribers: '+4.5 مليون مشترك',
    url: 'https://www.youtube.com/@Madrasetna',
    searchQuery: 'قناة مدرستنا رياض أطفال لغة عربية تواصل kg1',
    avatar: '🏛️',
    color: 'from-blue-700 to-indigo-900',
    featured: true
  },
  {
    id: 'altaleem-aljadeed',
    name: 'التعليم الجديد - مس ريهام إمبابي',
    badge: 'دليل المعلم صفحة بصفحة 📖',
    description: 'أفضل قناة متخصصة في شرح كتاب تواصل وكتب رياض الأطفال المصرية خطوة بخطوة من دليل المعلم الرسمي.',
    subscribers: '+1.2 مليون مشترك',
    url: 'https://www.youtube.com/@AltaleemAljadeed',
    searchQuery: 'التعليم الجديد ريهام إمبابي تواصل kg1 عربي',
    avatar: '👩‍🏫',
    color: 'from-amber-600 to-orange-700',
    featured: true
  },
  {
    id: 'elschoola',
    name: 'قناة الإسكوله (El Schoola)',
    badge: 'تأسيس شامل ومسابقات 🎓',
    description: 'من كبرى المنصات التعليمية المصرية، تقدم حصصاً تفاعلية ومراجعات لمنهج اللغة العربية لرياض الأطفال.',
    subscribers: '+2.8 مليون مشترك',
    url: 'https://www.youtube.com/@ElSchoola',
    searchQuery: 'الاسكوله لغة عربية كي جي 1 تواصل ترم اول',
    avatar: '🎒',
    color: 'from-emerald-700 to-teal-900',
    featured: true
  },
  {
    id: 'mama-loulou',
    name: 'قناة ماما لولو التعليمية',
    badge: 'كرتون وتدريبات أطفال 🎈',
    description: 'شرح مبسط ومحبب للطفل لأنشطة كتاب تواصل وقصص الاستماع مثل قصة (أنا مميز) و(الأرنب والسلحفاة).',
    subscribers: '+650 ألف مشترك',
    url: 'https://www.youtube.com/@mamaloulou',
    searchQuery: 'ماما لولو تواصل كي جي 1 عربي',
    avatar: '🧸',
    color: 'from-rose-600 to-pink-800',
    featured: false
  },
  {
    id: 'zakaria',
    name: 'تعلم مع زكريا (Learn with Zakaria)',
    badge: 'رسوم ثلاثية الأبعاد وأصوات الحروف 🌟',
    description: 'فيديوهات كرتونية مبهجة لتعليم مخارج الحروف العربية بالحركات القصيرة (الفتحة والضمة والكسرة والسكون).',
    subscribers: '+5.1 مليون مشترك',
    url: 'https://www.youtube.com/@Zakaria',
    searchQuery: 'تعلم مع زكريا أصوات الحروف والحركات القصيرة',
    avatar: '👦',
    color: 'from-sky-600 to-blue-800',
    featured: true
  },
  {
    id: 'osratouna',
    name: 'قناة أسرتنا التعليمية (Osratouna TV)',
    badge: 'أناشيد كرتونية وإيقاعات هادئة 🎶',
    description: 'أناشيد تعليمية لتهجئة الحروف العربية وقصص الطفولة الهادفة بأسلوب شيق وجذاب لرياض الأطفال.',
    subscribers: '+3.9 مليون مشترك',
    url: 'https://www.youtube.com/@Osratouna',
    searchQuery: 'أناشيد الحروف العربية قناة اسرتنا كرتون',
    avatar: '🎵',
    color: 'from-purple-700 to-violet-900',
    featured: false
  }
];

export const VIDEO_LESSONS = [
  // 1. Ministry Curriculum Lessons
  {
    id: 'vid-curriculum-intro',
    topic: 'ministry',
    title: 'مقدمة منهج تواصل لرياض الأطفال KG1 - المحور الأول (من أكون؟)',
    channelId: 'madrasetna',
    channelName: 'قناة مدرستنا الرسمية',
    duration: '14:20',
    level: 'المحور الأول',
    youtubeId: 'GgAUzW5QnSVK',
    searchUrl: 'https://www.youtube.com/results?search_query=قناة+مدرستنا+رياض+أطفال+لغة+عربية+تواصل+kg1+من+أكون',
    description: 'شرح فكرة المحور الأول من كتاب الوزارة (تواصل)، والتهيئة لمسك القلم والتمييز السمعي والبصري.',
    thumbEmoji: '🏫',
    tags: ['كتاب تواصل', 'من أكون', 'دليل المعلم']
  },
  {
    id: 'vid-alif-lesson',
    topic: 'ministry',
    title: 'شرح درس حرف الألف (أ) وأنشطة كتاب تواصل صفحة 21 إلى 24',
    channelId: 'altaleem-aljadeed',
    channelName: 'التعليم الجديد - مس ريهام إمبابي',
    duration: '16:45',
    level: 'كتاب الوزارة ص 21',
    youtubeId: 'EMZ4TTzVqbfk',
    searchUrl: 'https://www.youtube.com/results?search_query=التعليم+الجديد+ريهام+إمبابي+حرف+الألف+تواصل+kg1',
    description: 'حل تمارين كتاب المدرسة لحرف الألف خطوة بخطوة مع قصة الحرف والفصول الأربعة وتجريد أصوات (أَ، أُ، إِ).',
    thumbEmoji: '🦁',
    tags: ['حرف الألف', 'حل أنشطة الكتاب', 'صفحة 21']
  },
  {
    id: 'vid-meem-lesson',
    topic: 'ministry',
    title: 'شرح درس حرف الميم (م) وتدريبات كتاب تواصل ص 25 إلى 28',
    channelId: 'altaleem-aljadeed',
    channelName: 'التعليم الجديد - مس ريهام إمبابي',
    duration: '15:10',
    level: 'كتاب الوزارة ص 25',
    youtubeId: 'GGNS09rIpZLk',
    searchUrl: 'https://www.youtube.com/results?search_query=التعليم+الجديد+ريهام+إمبابي+حرف+الميم+تواصل+kg1',
    description: 'استخراج صوت الميم وكتابته فوق وتحت السطر وتلوين الموز والمركب وحل أنشطة الفصول الأربعة.',
    thumbEmoji: '🍌',
    tags: ['حرف الميم', 'تواصل kg1', 'دليل المعلم']
  },
  {
    id: 'vid-baa-lesson',
    topic: 'ministry',
    title: 'شرح درس حرف الباء (ب) وتدريبات كتاب تواصل ص 29 إلى 32',
    channelId: 'altaleem-aljadeed',
    channelName: 'التعليم الجديد - مس ريهام إمبابي',
    duration: '17:30',
    level: 'كتاب الوزارة ص 29',
    youtubeId: 'GeZeVImLI7xo',
    searchUrl: 'https://www.youtube.com/results?search_query=التعليم+الجديد+ريهام+إمبابي+حرف+الباء+تواصل+kg1',
    description: 'نطق الباء بالحركات الأربعة، وتدريب البطة والبرتقال وتتبع طبق الباء على السطر بدقة.',
    thumbEmoji: '🦆',
    tags: ['حرف الباء', 'حل أنشطة الكتاب', 'صفحة 29']
  },
  {
    id: 'vid-faa-lesson',
    topic: 'ministry',
    title: 'شرح درس حرف الفاء (ف) وتدريبات كتاب تواصل ص 33 إلى 36',
    channelId: 'altaleem-aljadeed',
    channelName: 'التعليم الجديد - مس ريهام إمبابي',
    duration: '14:50',
    level: 'كتاب الوزارة ص 33',
    youtubeId: 'EJPM8H4wMxaa',
    searchUrl: 'https://www.youtube.com/results?search_query=التعليم+الجديد+ريهام+إمبابي+حرف+الفاء+تواصل+kg1',
    description: 'رأس الفاء الدائرية والرقبة القصيرة، وأصوات الفيل والفراشة والفم، مع تدريبات الوعي الصوتي.',
    thumbEmoji: '🐘',
    tags: ['حرف الفاء', 'تواصل kg1', 'دليل المعلم']
  },

  // 2. Letters Songs and Phonetics
  {
    id: 'vid-letters-song-zakaria',
    topic: 'letters',
    title: 'أنشودة الحروف العربية الهجائية للأطفال مع زكريا (3D كرتون مبهج)',
    channelId: 'zakaria',
    channelName: 'تعلم مع زكريا',
    duration: '06:12',
    level: 'جميع الحروف',
    youtubeId: 'm40C1Z2G4u4',
    searchUrl: 'https://www.youtube.com/results?search_query=تعلم+مع+زكريا+انشودة+الحروف+العربية',
    description: 'كليب كرتوني بديع ينطق الحروف العشرة وجميع حروف الهجاء بنطق فصيح وموسيقى هادئة محفزة للطفل.',
    thumbEmoji: '🔤',
    tags: ['أناشيد حروف', 'رسوم 3D', 'كرتون للأطفال']
  },
  {
    id: 'vid-letters-shapes-osratouna',
    topic: 'letters',
    title: 'أشكال الحروف العربية (أول الكلمة ووسطها وآخرها) كرتون للأطفال',
    channelId: 'osratouna',
    channelName: 'قناة أسرتنا التعليمية',
    duration: '08:45',
    level: 'أشكال الحروف',
    youtubeId: 'tZ5Q9aP2L8k',
    searchUrl: 'https://www.youtube.com/results?search_query=اشكال+الحروف+العربية+قناة+اسرتنا',
    description: 'كيف يمد الحرف يده ليمسك بأصدقائه الحروف في أول ووسط وآخر الكلمة.',
    thumbEmoji: '✏️',
    tags: ['مواضع الحروف', 'أسرة اللغة العربية', 'تأسيس']
  },

  // 3. Four Seasons Harakat
  {
    id: 'vid-seasons-harakat',
    topic: 'seasons',
    title: 'حكاية الحركات القصيرة ورحلة الفصول الأربعة (الفتحة، الضمة، الكسرة، السكون)',
    channelId: 'mama-loulou',
    channelName: 'قناة ماما لولو التعليمية',
    duration: '11:20',
    level: 'الفصول الأربعة',
    youtubeId: 'p3k2L7m9Q1w',
    searchUrl: 'https://www.youtube.com/results?search_query=حكاية+الحركات+القصيرة+رحلة+الفصول+الاربعة+للاطفال',
    description: 'تمثيل كرتوني لرحلة الطفل في الصيف مع الفتحة، والخريف مع طائرة الضمة، والجليد مع زلاجة الكسرة.',
    thumbEmoji: '☀️',
    tags: ['الحركات القصيرة', 'الفصول الأربعة', 'تواصل kg1']
  },
  {
    id: 'vid-harakat-zakaria',
    topic: 'seasons',
    title: 'تعليم أصوات الحركات القصيرة (أَ، أُ، إِ) بنطق سليم مع زكريا',
    channelId: 'zakaria',
    channelName: 'تعلم مع زكريا',
    duration: '07:35',
    level: 'مخارج الأصوات',
    youtubeId: 'x7R2b5k8P4m',
    searchUrl: 'https://www.youtube.com/results?search_query=تعلم+مع+زكريا+الحركات+القصيرة+فتحة+ضمة+كسرة',
    description: 'مخارج حركة الشفتين عند نطق الفتحة والضمة والكسرة مع أمثلة مصورة لكل حركة.',
    thumbEmoji: '🗣️',
    tags: ['مخارج الحروف', 'الوعي الصوتي', 'زكريا']
  },

  // 4. Blending & Word Making
  {
    id: 'vid-blending-words',
    topic: 'phonics',
    title: 'دمج الحروف وقراءة الكلمات الأولى (أَبْ - أُمّ - فَمْ) كتاب تواصل',
    channelId: 'elschoola',
    channelName: 'قناة الإسكوله (El Schoola)',
    duration: '13:50',
    level: 'دمج الكلمات ص 35-37',
    youtubeId: 'w2N8k5m4L1q',
    searchUrl: 'https://www.youtube.com/results?search_query=الاسكوله+دمج+الحروف+وقراءة+الكلمات+تواصل+kg1',
    description: 'طريقة مساعدة طفل الروضة على تهجئة ودمج الأصوات لتكوين كلمة (أب، أم، فم) بثقة وبساطة.',
    thumbEmoji: '🧩',
    tags: ['دمج الحروف', 'تكوين الكلمات', 'أب وأم وفم']
  },

  // 5. Stories & Shared Reading
  {
    id: 'vid-story-ana-momayaz',
    topic: 'stories',
    title: 'قصة الاستماع الأولى: (أَنَا مُمَيَّزٌ) كتاب تواصل كاملة بالصور والصوت',
    channelId: 'altaleem-aljadeed',
    channelName: 'التعليم الجديد - مس ريهام إمبابي',
    duration: '10:15',
    level: 'قصة الاستماع ص 13',
    youtubeId: 'k9M4x7p2L1w',
    searchUrl: 'https://www.youtube.com/results?search_query=قصة+الاستماع+انا+مميز+كتاب+تواصل+kg1',
    description: 'قراءة وتمثيل قصة (أنا مميز) من كتاب الوزارة واستخراج الكلمات الشائعة (أنا، أبي، أمي).',
    thumbEmoji: '🌟',
    tags: ['أنا مميز', 'قصص الاستماع', 'الكلمات الشائعة']
  },
  {
    id: 'vid-story-rabbit-turtle',
    topic: 'stories',
    title: 'القصة الموجهة: (الأَرْنَبُ وَالسُّلَحْفَاةُ) كتاب تواصل للغة العربية',
    channelId: 'mama-loulou',
    channelName: 'قناة ماما لولو التعليمية',
    duration: '09:30',
    level: 'قصة موجهة ص 41',
    youtubeId: 'v5T2n8k4M7q',
    searchUrl: 'https://www.youtube.com/results?search_query=قصة+الارنب+والسلحفاة+كتاب+تواصل+kg1+عربي',
    description: 'حكاية الأرنب والسلحفاة وقراءة الكلمات المتكررة (قال، قالت، نعم، لا) بأسلوب مسرحي ممتع.',
    thumbEmoji: '🐰',
    tags: ['قصة موجهة', 'تواصل kg1', 'الأرنب والسلحفاة']
  }
];
