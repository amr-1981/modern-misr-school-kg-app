import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, RotateCcw, ArrowRight, ArrowLeft, Award, HelpCircle, Star } from 'lucide-react';
import { LETTERS_DATA, THEMES } from '../data/kg1CurriculumData';
import { speech, sfx } from '../services/speechService';
import confetti from 'canvas-confetti';

// Real exercises mapped directly from the official Egyptian Ministry textbook (كتاب تواصل)
const BOOK_EXERCISES_DATA = {
  alif: {
    letterChar: 'أ',
    letterName: 'حرف الألف',
    bookPages: 'ص 21 - ص 24',
    topic: 'الموضوع الأول: أنا مميز',
    theme: 'المحور الأول: من أكون؟',
    color: 'from-amber-500 to-orange-500',
    // النشاط 1: انطق ولون الصور التي تبدأ بحرف الألف
    activity1: {
      title: 'نشاط 1: اسمع وانطق ولون الصور اللي بتبدأ بحرف الألف',
      egyptianPrompt: 'يلا يا بطل.. اسمع مني كويس ودوس على كل صورة بتبدأ بحرف الألف عشان تتلون!',
      items: [
        { id: 'a1', word: 'أَسَد', emoji: '🦁', startsWith: true, hint: 'أَ.. أَ.. أسد شجاع!' },
        { id: 'a2', word: 'أَرْنَب', emoji: '🐰', startsWith: true, hint: 'أَ.. أَ.. أرنب بياكل جزر!' },
        { id: 'a3', word: 'بَطَّة', emoji: '🦆', startsWith: false, hint: 'لا دي بَ.. بَطّة، مش بتبدأ بالألف!' },
        { id: 'a4', word: 'أُخْطُبُوط', emoji: '🐙', startsWith: true, hint: 'أُ.. أُ.. أخطبوط في البحر!' },
        { id: 'a5', word: 'سَمَكَة', emoji: '🐟', startsWith: false, hint: 'دي سَ.. سَمكة، مش ألف!' },
        { id: 'a6', word: 'إِبْرِيق', emoji: '🫖', startsWith: true, hint: 'إِ.. إِ.. إبريق الشاي الجميل!' }
      ]
    },
    // النشاط 2: ارسم دائرة حول حرف الألف
    activity2: {
      title: 'نشاط 2: دوّر على حرف الألف في البالونات وحط عليه دايرة',
      egyptianPrompt: 'حرف الألف مستخبي في البالونات.. طلّعه ودوس عليه بسرعة يا شاطر!',
      bubbles: [
        { id: 'b1', char: 'أ', isTarget: true },
        { id: 'b2', char: 'ب', isTarget: false },
        { id: 'b3', char: 'م', isTarget: false },
        { id: 'b4', char: 'أ', isTarget: true },
        { id: 'b5', char: 'ل', isTarget: false },
        { id: 'b6', char: 'أ', isTarget: true },
        { id: 'b7', char: 'ن', isTarget: false },
        { id: 'b8', char: 'أ', isTarget: true }
      ]
    },
    // النشاط 3: صل الصوت بالصورة المناسبة (الحركات الأربع)
    activity3: {
      title: 'نشاط 3: وصّل صوت الحرف بالحركة المناسبة مع الصورة الصح',
      egyptianPrompt: 'يلا نوصل كل حركة بالصورة بتاعتها.. يا ترى صوت الفتحة ولا الضمة ولا الكسرة؟',
      pairs: [
        { sound: 'أَ', season: 'الصيف (الفتحة)', word: 'أَسَدٌ', emoji: '🦁', soundAudio: 'أَ.. فتحة.. أَسَد!' },
        { sound: 'أُ', season: 'الخريف (الضمة)', word: 'أُذُنٌ', emoji: '👂', soundAudio: 'أُ.. ضمة.. أُذُن!' },
        { sound: 'إِ', season: 'الشتاء (الكسرة)', word: 'إِبْرَةٌ', emoji: '🪡', soundAudio: 'إِ.. كسرة.. إِبْرَة!' },
        { sound: 'أْ', season: 'الربيع (السكون)', word: 'رَأْسٌ', emoji: '👦', soundAudio: 'أْ.. سكون.. رَأْس!' }
      ]
    },
    // النشاط 4: أين تسمع صوت الألف؟ (أول أو وسط الكلمة)
    activity4: {
      title: 'نشاط 4: فين مكان صوت حرف الألف في الكلمة؟',
      egyptianPrompt: 'اسمع الكلمة كويس يا قمر.. وقولي سمعت حرف الألف في الأول ولا في النص؟',
      questions: [
        {
          word: 'أَسَد',
          emoji: '🦁',
          options: ['أول الكلمة', 'وسط الكلمة', 'آخر الكلمة'],
          correctIndex: 0,
          explanation: 'برافو عليك! أَسد بيبدأ بحرف الألف في أول الكلمة.'
        },
        {
          word: 'فَأْر',
          emoji: '🐭',
          options: ['أول الكلمة', 'وسط الكلمة', 'آخر الكلمة'],
          correctIndex: 1,
          explanation: 'شاطر أوي! فَأْر.. الألف جاية في وسط الكلمة.'
        }
      ]
    }
  },
  meem: {
    letterChar: 'م',
    letterName: 'حرف الميم',
    bookPages: 'ص 25 - ص 28',
    topic: 'الموضوع الأول: أنا مميز',
    theme: 'المحور الأول: من أكون؟',
    color: 'from-emerald-500 to-teal-600',
    activity1: {
      title: 'نشاط 1: اسمع وانطق ولون الصور اللي بتبدأ بحرف الميم',
      egyptianPrompt: 'يلا يا بطل.. اسمع ودوس على كل صورة بتبدأ بحرف الميم عشان تتلون!',
      items: [
        { id: 'm1', word: 'مَوْز', emoji: '🍌', startsWith: true, hint: 'مَ.. مَ.. موز أصفر ولذيذ!' },
        { id: 'm2', word: 'مِقَصّ', emoji: '✂️', startsWith: true, hint: 'مِ.. مِ.. مقص الورق!' },
        { id: 'm3', word: 'فِيل', emoji: '🐘', startsWith: false, hint: 'لا ده فِ.. فيل، مش ميم خالص!' },
        { id: 'm4', word: 'مُهَنْدِس', emoji: '👷', startsWith: true, hint: 'مُ.. مُ.. مهندس شاطر بيبني البيوت!' },
        { id: 'm5', word: 'عَصِير', emoji: '🧃', startsWith: false, hint: 'ده عصير مش ميم!' },
        { id: 'm6', word: 'مَرْكَب', emoji: '⛵', startsWith: true, hint: 'مَ.. مَ.. مركب بيمشي في النيل!' }
      ]
    },
    activity2: {
      title: 'نشاط 2: طلّع حرف الميم بأشكاله المختلفة (مـ، ـمـ، م)',
      egyptianPrompt: 'دوّر على حرف الميم في كل أشكاله ودوس عليه يا عبقري!',
      bubbles: [
        { id: 'mb1', char: 'مـ', isTarget: true },
        { id: 'mb2', char: 'ت', isTarget: false },
        { id: 'mb3', char: 'ـمـ', isTarget: true },
        { id: 'mb4', char: 'ب', isTarget: false },
        { id: 'mb5', char: 'م', isTarget: true },
        { id: 'mb6', char: 'أ', isTarget: false },
        { id: 'mb7', char: 'مـ', isTarget: true }
      ]
    },
    activity3: {
      title: 'نشاط 3: وصّل صوت حركة الميم بالصورة الصح',
      egyptianPrompt: 'يلا نسمع أصوات حركات الميم ونوصلها بالصورة المظبوطة!',
      pairs: [
        { sound: 'مَ', season: 'الصيف (الفتحة)', word: 'مَوْزٌ', emoji: '🍌', soundAudio: 'مَ.. فتحة.. مَوْز!' },
        { sound: 'مُ', season: 'الخريف (الضمة)', word: 'مُعَلِّمٌ', emoji: '👨‍🏫', soundAudio: 'مُ.. ضمة.. مُعَلِّم!' },
        { sound: 'مِ', season: 'الشتاء (الكسرة)', word: 'مِقَصٌّ', emoji: '✂️', soundAudio: 'مِ.. كسرة.. مِقَص!' },
        { sound: 'مْ', season: 'الربيع (السكون)', word: 'شَمْسٌ', emoji: '🌞', soundAudio: 'مْ.. سكون.. شَمْس!' }
      ]
    },
    activity4: {
      title: 'نشاط 4 الوزاري: دمج الحروف (أُ + م = أُمّ)',
      egyptianPrompt: 'نشاط كتاب الوزارة المهم جداً: يلا نجمع صوت (أُ) مع صوت (مْ) ونشوف هتطلع كلمة إيه!',
      isBlending: true,
      letters: ['أُ', 'مْ'],
      wordResult: 'أُمٌّ',
      resultEmoji: '👩',
      meaning: 'ماما حبيبتي! أُمي الحنونة'
    }
  },
  baa: {
    letterChar: 'ب',
    letterName: 'حرف الباء',
    bookPages: 'ص 37 - ص 40',
    topic: 'الموضوع الثاني: أسرتي',
    theme: 'المحور الأول: من أكون؟',
    color: 'from-sky-500 to-blue-600',
    activity1: {
      title: 'نشاط 1: اسمع وانطق ولون الصور اللي بتبدأ بحرف الباء',
      egyptianPrompt: 'دوس على كل صورة بتبدأ بحرف الباء يا شاطر عشان نلونها سوا!',
      items: [
        { id: 'b1', word: 'بَطَّة', emoji: '🦆', startsWith: true, hint: 'بَ.. بَ.. بطة بتعوم في المية!' },
        { id: 'b2', word: 'بُرْتُقَال', emoji: '🍊', startsWith: true, hint: 'بُ.. بُ.. برتقال مليان فيتامين سي!' },
        { id: 'b3', word: 'نَجْمَة', emoji: '⭐', startsWith: false, hint: 'دي نَ.. نجمة مش باء!' },
        { id: 'b4', word: 'بِطِّيخ', emoji: '🍉', startsWith: true, hint: 'بِ.. بِ.. بطيخ ساقع ولذيذ!' },
        { id: 'b5', word: 'بَيْت', emoji: '🏠', startsWith: true, hint: 'بَ.. بَ.. بيت جميل دافي!' }
      ]
    },
    activity2: {
      title: 'نشاط 2: طبق الباء وتحته نقطة واحدة!',
      egyptianPrompt: 'الباء طبق جميل وتحته نقطة واحدة.. دوّر عليه ودوس عليه!',
      bubbles: [
        { id: 'bb1', char: 'ب', isTarget: true },
        { id: 'bb2', char: 'ت', isTarget: false },
        { id: 'bb3', char: 'ن', isTarget: false },
        { id: 'bb4', char: 'بـ', isTarget: true },
        { id: 'bb5', char: 'ث', isTarget: false },
        { id: 'bb6', char: 'ب', isTarget: true }
      ]
    },
    activity3: {
      title: 'نشاط 3: أصوات حركات الباء في فصول السنة',
      egyptianPrompt: 'يلا نوصل أصوات حركات حرف الباء بالصورة بتاعتها!',
      pairs: [
        { sound: 'بَ', season: 'الصيف (الفتحة)', word: 'بَطَّةٌ', emoji: '🦆', soundAudio: 'بَ.. فتحة.. بَطَّة!' },
        { sound: 'بُ', season: 'الخريف (الضمة)', word: 'بُرْتُقَالٌ', emoji: '🍊', soundAudio: 'بُ.. ضمة.. بُرْتُقال!' },
        { sound: 'بِ', season: 'الشتاء (الكسرة)', word: 'بِطِّيخٌ', emoji: '🍉', soundAudio: 'بِ.. كسرة.. بِطِّيخ!' },
        { sound: 'بْ', season: 'الربيع (السكون)', word: 'حَبْلٌ', emoji: '🪢', soundAudio: 'بْ.. سكون.. حَبْل!' }
      ]
    },
    activity4: {
      title: 'نشاط 4 الوزاري: دمج الحروف (أَ + ب = أَبْ)',
      egyptianPrompt: 'يلا يا بطل ندمج صوت (أَ) مع صوت (بْ) ونشوف هتطلع كلمة إيه!',
      isBlending: true,
      letters: ['أَ', 'بْ'],
      wordResult: 'أَبٌ',
      resultEmoji: '👨',
      meaning: 'بابا الحبيب! أَب طيب وعظيم'
    }
  },
  faa: {
    letterChar: 'ف',
    letterName: 'حرف الفاء',
    bookPages: 'ص 41 - ص 44',
    topic: 'الموضوع الثاني: أسرتي',
    theme: 'المحور الأول: من أكون؟',
    color: 'from-rose-500 to-pink-600',
    activity1: {
      title: 'نشاط 1: اسمع وانطق ولون الصور اللي بتبدأ بحرف الفاء',
      egyptianPrompt: 'يلا ندوس على الصور اللي بتبدأ بحرف الفاء يا عسل!',
      items: [
        { id: 'f1', word: 'فَرَاشَة', emoji: '🦋', startsWith: true, hint: 'فَ.. فَ.. فراشة بتطير بين الورد!' },
        { id: 'f2', word: 'فِيل', emoji: '🐘', startsWith: true, hint: 'فِ.. فِ.. فيل ضخم وطيب!' },
        { id: 'f3', word: 'أَسَد', emoji: '🦁', startsWith: false, hint: 'ده أسد بحرف الألف مش فاء!' },
        { id: 'f4', word: 'فَم', emoji: '👄', startsWith: true, hint: 'فَ.. فَ.. فم بنبتسم بيه!' },
        { id: 'f5', word: 'فُلّ', emoji: '🌼', startsWith: true, hint: 'فُ.. فُ.. فل أبيض ريحته تجنن!' }
      ]
    },
    activity2: {
      title: 'نشاط 2: دوّر على حرف الفاء اللي فوق راسه نقطة واحدة',
      egyptianPrompt: 'الفاء دايرة فوق السطر وفوق راسها نقطة.. طلّعها ودوس عليها!',
      bubbles: [
        { id: 'fb1', char: 'فـ', isTarget: true },
        { id: 'fb2', char: 'ق', isTarget: false },
        { id: 'fb3', char: 'ف', isTarget: true },
        { id: 'fb4', char: 'م', isTarget: false },
        { id: 'fb5', char: 'ـفـ', isTarget: true }
      ]
    },
    activity3: {
      title: 'نشاط 3: حركات الفاء مع فصول السنة',
      egyptianPrompt: 'يلا نوصل صوت الفاء بالصورة المناسبة!',
      pairs: [
        { sound: 'فَ', season: 'الصيف (الفتحة)', word: 'فَرَاشَةٌ', emoji: '🦋', soundAudio: 'فَ.. فتحة.. فَراشة!' },
        { sound: 'فُ', season: 'الخريف (الضمة)', word: 'فُلٌّ', emoji: '🌼', soundAudio: 'فُ.. ضمة.. فُل!' },
        { sound: 'فِ', season: 'الشتاء (الكسرة)', word: 'فِيلٌ', emoji: '🐘', soundAudio: 'فِ.. كسرة.. فِيل!' },
        { sound: 'فْ', season: 'الربيع (السكون)', word: 'طِفْلٌ', emoji: '👶', soundAudio: 'فْ.. سكون.. طِفْل!' }
      ]
    },
    activity4: {
      title: 'نشاط 4 الوزاري: دمج الحروف (فَ + م = فَمْ)',
      egyptianPrompt: 'يلا ندمج صوت (فَ) مع صوت (مْ) ونكون كلمة فم!',
      isBlending: true,
      letters: ['فَ', 'مْ'],
      wordResult: 'فَمٌ',
      resultEmoji: '👄',
      meaning: 'فم جميل بنبتسم ونتكلم بيه!'
    }
  }
};

export default function BookActivitiesView({ onAddStars }) {
  const [currentLetterKey, setCurrentLetterKey] = useState('alif');
  const [currentActivityIndex, setCurrentActivityIndex] = useState(1); // 1, 2, 3, 4
  const [selectedItems, setSelectedItems] = useState({});
  const [foundBubbles, setFoundBubbles] = useState({});
  const [matchedPairs, setMatchedPairs] = useState({});
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [blendedLetters, setBlendedLetters] = useState([]);

  const currentExercise = BOOK_EXERCISES_DATA[currentLetterKey] || BOOK_EXERCISES_DATA.alif;

  // Switch Letter
  const handleSelectLetter = (key) => {
    setCurrentLetterKey(key);
    setCurrentActivityIndex(1);
    setSelectedItems({});
    setFoundBubbles({});
    setMatchedPairs({});
    setSelectedPosition(null);
    setBlendedLetters([]);
    sfx.playPop();
    const ex = BOOK_EXERCISES_DATA[key];
    speech.speak(`يلا نحل تمارين كتاب تواصل لـ ${ex.letterName}! ${ex.bookPages}`);
  };

  // Activity 1 Click
  const handleItemClick = (item) => {
    sfx.playPop();
    if (item.startsWith) {
      setSelectedItems(prev => ({ ...prev, [item.id]: true }));
      speech.speakEgyptianPraise();
      confetti({ particleCount: 40, spread: 50 });
      if (onAddStars) onAddStars(1);
    } else {
      speech.speak(item.hint);
    }
  };

  // Activity 2 Bubble Click
  const handleBubbleClick = (b) => {
    sfx.playPop();
    if (b.isTarget) {
      setFoundBubbles(prev => ({ ...prev, [b.id]: true }));
      speech.speakEgyptianPraise();
      confetti({ particleCount: 30, spread: 40 });
      if (onAddStars) onAddStars(1);
    } else {
      speech.speakEgyptianTryAgain();
    }
  };

  // Activity 3 Pair Click
  const handlePairClick = (pair) => {
    sfx.playPop();
    speech.speak(pair.soundAudio);
    setMatchedPairs(prev => ({ ...prev, [pair.sound]: true }));
    confetti({ particleCount: 35, spread: 50 });
    if (onAddStars) onAddStars(1);
  };

  // Activity 4 Blending Click
  const handleBlendLetter = (char, targetWord) => {
    sfx.playPop();
    speech.speak(char);
    const next = [...blendedLetters, char];
    setBlendedLetters(next);

    if (next.length === currentExercise.activity4.letters.length) {
      setTimeout(() => {
        confetti({ particleCount: 80, spread: 70 });
        sfx.playCorrect();
        speech.speak(`يا سلام على الشطارة! كونت كلمة: ${currentExercise.activity4.wordResult}! ${currentExercise.activity4.meaning}`);
        if (onAddStars) onAddStars(3);
      }, 300);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Top Banner with Book Identity */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-4 border-amber-300 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-right">
            <div className="w-18 h-18 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center text-4xl sm:text-5xl shadow-inner border border-white/30">
              📝
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/25 px-3 py-1 rounded-full text-xs font-black mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>الأنشطة والتدريبات المعتمدة في كتاب الوزارة (تواصل)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black">
                تَمَارِينُ وَأَنْشِطَةُ كِتَابِ تَوَاصُل
              </h1>
              <p className="text-amber-100 text-xs sm:text-sm mt-1 font-bold">
                تفاعلية خطوة بخطوة بالعامية المصرية الدارجة السلسة لمرحلة KG1
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              speech.speak('يلا يا بطل.. اختر الحرف اللي عايز تحل تمارينه من الكتاب الوزاري، واسمع مني كل نشاط عشان تجيب الدرجة النهائية!');
            }}
            className="flex items-center gap-2 px-5 py-3 bg-white text-slate-900 rounded-2xl text-xs sm:text-sm font-black shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Volume2 className="w-5 h-5 text-amber-600 animate-pulse" />
            <span>شرح الأنشطة بالصوت 🔊</span>
          </button>
        </div>
      </div>

      {/* Letters Selection Bar */}
      <div className="bg-white rounded-3xl p-4 shadow-md border border-amber-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <h3 className="font-black text-slate-800 text-sm sm:text-base">
              اختر الحرف لحل أنشطة الكتاب الخاصة به:
            </h3>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            {currentExercise.bookPages}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.keys(BOOK_EXERCISES_DATA).map((key) => {
            const ex = BOOK_EXERCISES_DATA[key];
            const isSelected = currentLetterKey === key;
            return (
              <button
                key={key}
                onClick={() => handleSelectLetter(key)}
                className={`p-3.5 rounded-2xl border-2 flex items-center justify-between transition-all transform hover:-translate-y-0.5 active:scale-95 ${
                  isSelected
                    ? 'bg-amber-500 text-white border-amber-600 shadow-lg scale-102 ring-2 ring-amber-300'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black">{ex.letterChar}</span>
                  <div className="text-right">
                    <div className="font-black text-xs sm:text-sm">{ex.letterName}</div>
                    <div className={`text-[10px] ${isSelected ? 'text-amber-100' : 'text-slate-400'}`}>{ex.bookPages}</div>
                  </div>
                </div>
                <span className="text-lg">✏️</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Activities Tabs: نشاط 1، 2، 3، 4 */}
      <div className="flex items-center bg-white p-2 rounded-2xl shadow-sm border border-slate-200 gap-2 overflow-x-auto">
        {[
          { idx: 1, label: 'نشاط 1: اسمع ولون', emoji: '🎨' },
          { idx: 2, label: 'نشاط 2: ارسم دائرة', emoji: '⭕' },
          { idx: 3, label: 'نشاط 3: صل الصوت', emoji: '🔗' },
          { idx: 4, label: currentExercise.activity4.isBlending ? 'نشاط 4: دمج الكلمة' : 'نشاط 4: موضع الحرف', emoji: '🧩' },
        ].map((tab) => {
          const isActive = currentActivityIndex === tab.idx;
          return (
            <button
              key={tab.idx}
              onClick={() => {
                setCurrentActivityIndex(tab.idx);
                sfx.playPop();
                const act = currentExercise[`activity${tab.idx}`];
                if (act && act.egyptianPrompt) {
                  speech.speak(act.egyptianPrompt);
                }
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-blue-900 text-white shadow-md scale-102 ring-2 ring-amber-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-amber-100'
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Activity Play Area */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-amber-200">
        
        {/* ACTIVITY 1: انطق ولون الصور التي تبدأ بالحرف */}
        {currentActivityIndex === 1 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {currentExercise.activity1.title}
                </h3>
                <p className="text-xs text-amber-800 font-bold mt-1">
                  💡 {currentExercise.activity1.egyptianPrompt}
                </p>
              </div>

              <button
                onClick={() => speech.speak(currentExercise.activity1.egyptianPrompt)}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-100 text-amber-900 rounded-xl text-xs font-black hover:bg-amber-200"
              >
                <Volume2 className="w-4 h-4 text-amber-600" />
                <span>اسمع التعليمات</span>
              </button>
            </div>

            {/* Grid of Interactive Picture Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {currentExercise.activity1.items.map((item) => {
                const isFound = selectedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`rounded-3xl p-5 border-4 flex flex-col items-center text-center cursor-pointer transition-all transform hover:-translate-y-1 active:scale-95 ${
                      isFound
                        ? 'bg-gradient-to-b from-amber-50 to-orange-100 border-amber-500 shadow-xl scale-105 ring-4 ring-amber-300'
                        : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-amber-300 shadow-sm'
                    }`}
                  >
                    <span className="text-5xl sm:text-6xl mb-3 drop-shadow-sm transition-transform group-hover:scale-110">
                      {item.emoji}
                    </span>
                    <span className="font-black text-base sm:text-lg text-slate-800">
                      {item.word}
                    </span>
                    
                    {isFound ? (
                      <span className="mt-2 text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>شاطر! ملونة ✓</span>
                      </span>
                    ) : (
                      <span className="mt-2 text-[10px] text-slate-400 font-bold">
                        اضغط للتلوين 🎨
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ACTIVITY 2: ارسم دائرة حول الحرف */}
        {currentActivityIndex === 2 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {currentExercise.activity2.title}
                </h3>
                <p className="text-xs text-amber-800 font-bold mt-1">
                  💡 {currentExercise.activity2.egyptianPrompt}
                </p>
              </div>

              <button
                onClick={() => speech.speak(currentExercise.activity2.egyptianPrompt)}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-100 text-amber-900 rounded-xl text-xs font-black hover:bg-amber-200"
              >
                <Volume2 className="w-4 h-4 text-amber-600" />
                <span>اسمع التعليمات</span>
              </button>
            </div>

            {/* Bubble Letter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto my-6">
              {currentExercise.activity2.bubbles.map((b) => {
                const isSelected = foundBubbles[b.id];
                return (
                  <button
                    key={b.id}
                    onClick={() => handleBubbleClick(b)}
                    className={`h-24 sm:h-28 rounded-3xl border-4 flex items-center justify-center text-4xl sm:text-5xl font-black transition-all transform hover:scale-105 active:scale-95 shadow-md ${
                      isSelected
                        ? 'bg-gradient-to-tr from-emerald-400 to-green-500 border-emerald-600 text-white ring-4 ring-emerald-300 scale-105'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-amber-50 hover:border-amber-400'
                    }`}
                  >
                    {b.char}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ACTIVITY 3: صل الصوت بالصورة المناسبة */}
        {currentActivityIndex === 3 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {currentExercise.activity3.title}
                </h3>
                <p className="text-xs text-amber-800 font-bold mt-1">
                  💡 {currentExercise.activity3.egyptianPrompt}
                </p>
              </div>

              <button
                onClick={() => speech.speak(currentExercise.activity3.egyptianPrompt)}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-100 text-amber-900 rounded-xl text-xs font-black hover:bg-amber-200"
              >
                <Volume2 className="w-4 h-4 text-amber-600" />
                <span>اسمع التعليمات</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              {currentExercise.activity3.pairs.map((pair, idx) => {
                const isMatched = matchedPairs[pair.sound];
                return (
                  <div
                    key={idx}
                    onClick={() => handlePairClick(pair)}
                    className={`rounded-3xl p-5 border-4 flex flex-col items-center justify-between text-center cursor-pointer transition-all transform hover:-translate-y-1 active:scale-95 ${
                      isMatched
                        ? 'bg-gradient-to-b from-blue-50 to-indigo-100 border-blue-500 shadow-xl ring-4 ring-blue-300 scale-105'
                        : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-amber-300'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-950 text-3xl font-black flex items-center justify-center mb-2 shadow-inner">
                      {pair.sound}
                    </div>
                    <span className="text-xs text-slate-500 font-bold">{pair.season}</span>
                    <span className="text-5xl my-3">{pair.emoji}</span>
                    <span className="font-black text-lg text-slate-800">{pair.word}</span>
                    <button className="mt-3 text-xs bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>اسمع الصوت</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ACTIVITY 4: دمج الحروف أو موضع الحرف */}
        {currentActivityIndex === 4 && currentExercise.activity4.isBlending && (
          <div className="space-y-6 text-center max-w-xl mx-auto">
            <div className="pb-4 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900">
                {currentExercise.activity4.title}
              </h3>
              <p className="text-xs text-amber-800 font-bold mt-1">
                💡 {currentExercise.activity4.egyptianPrompt}
              </p>
            </div>

            {/* Target Card */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 flex items-center justify-around">
              <span className="text-6xl animate-bounce-soft">{currentExercise.activity4.resultEmoji}</span>
              <div>
                <span className="text-xs text-amber-900 font-bold block">الكلمة المستهدفة:</span>
                <span className="text-4xl font-black text-slate-900">{currentExercise.activity4.wordResult}</span>
                <span className="text-xs text-slate-500 block mt-1">{currentExercise.activity4.meaning}</span>
              </div>
            </div>

            {/* Assembly Slots */}
            <div className="flex items-center justify-center gap-4 my-6">
              {currentExercise.activity4.letters.map((char, i) => {
                const filled = blendedLetters[i];
                return (
                  <div
                    key={i}
                    className={`w-20 h-20 rounded-3xl border-4 flex items-center justify-center text-3xl font-black shadow-inner transition-all ${
                      filled
                        ? 'bg-emerald-100 border-emerald-500 text-emerald-950 scale-105'
                        : 'bg-slate-50 border-dashed border-slate-300 text-slate-300'
                    }`}
                  >
                    {filled || '?'}
                  </div>
                );
              })}
            </div>

            {/* Clickable Letters Pool */}
            <div className="flex items-center justify-center gap-4">
              {currentExercise.activity4.letters.map((char, i) => (
                <button
                  key={i}
                  onClick={() => handleBlendLetter(char)}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-2xl text-3xl font-black shadow-lg hover:scale-110 active:scale-95 transition-all"
                >
                  {char}
                </button>
              ))}

              <button
                onClick={() => {
                  setBlendedLetters([]);
                  sfx.playPop();
                }}
                className="p-3 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-2xl"
                title="إعادة المحاولة"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
