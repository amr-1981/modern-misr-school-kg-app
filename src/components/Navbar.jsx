import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen, PenTool, Gamepad2, Award, Volume2, Star, Sliders, X, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../data/kg1CurriculumData';
import { speech, sfx } from '../services/speechService';

export default function Navbar({ activeTab, setActiveTab, childName, stars }) {
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [voiceList, setVoiceList] = useState([]);
  const [currentVoiceName, setCurrentVoiceName] = useState('');
  const [currentRate, setCurrentRate] = useState(0.88);
  const [currentPitch, setCurrentPitch] = useState(1.15);

  useEffect(() => {
    const updateVoiceState = () => {
      setVoiceList(speech.arabicVoices || []);
      if (speech.selectedVoice) {
        setCurrentVoiceName(speech.selectedVoice.name);
      }
    };

    updateVoiceState();
    const unsub = speech.subscribe((event, data) => {
      if (event === 'voicesUpdated' || event === 'voiceChanged') {
        updateVoiceState();
      }
    });

    return unsub;
  }, []);

  const navItems = [
    { id: 'letters', label: 'حديقة الحروف', emoji: '🔤', audio: 'يلا بينا على حديقة الحروف الجميلة!' },
    { id: 'book-activities', label: 'تمارين الكتاب', emoji: '📝', audio: 'يلا نحل تمارين وأنشطة كتاب تواصل الوزاري!' },
    { id: 'stories', label: 'حكايات تواصل', emoji: '📖', audio: 'يلا نسمع حكايات وقصص كتاب تواصل الممتعة!' },
    { id: 'board', label: 'سبورة الكتابة والدمج', emoji: '✏️', audio: 'سبورة الكتابة وتكوين الكلمات السحرية!' },
    { id: 'games', label: 'الألعاب الصوتية', emoji: '🎮', audio: 'يلا نلعب ونتسلى بالألعاب الصوتية وفرقعة البالونات!' },
    { id: 'parents', label: 'ركن الأسرة والشهادة', emoji: '🏆', audio: 'ركن الأسرة وشهادة التقدير للبطل الصغير!' },
  ];

  const handleNavClick = (item) => {
    setActiveTab(item.id);
    speech.speak(item.audio);
  };

  const handleTestVoice = () => {
    speech.speak('أَهْلاً بِيكْ يَا بَطَلْ فِي الْمَدْرَسَةِ الْمَصْرِيَّة');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-sm no-print w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* School Logo & Clean Brand Header */}
          <div 
            onClick={() => {
              setActiveTab('letters');
              speech.speak('أهلاً بيك يا بطل في المدرسة المصرية الحديثة بطرابلس! يلا نلعب ونتعلم سوا!');
            }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white border-2 border-amber-300 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center p-0.5">
              <img 
                src={SCHOOL_INFO.logo} 
                alt={SCHOOL_INFO.nameAr}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-sm sm:text-base md:text-lg text-blue-950 tracking-tight whitespace-nowrap">
                  {SCHOOL_INFO.nameAr}
                </span>

                <span className="inline-flex items-center gap-1 whitespace-nowrap text-[11px] font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-xs">
                  <span>KG1</span>
                  <span>•</span>
                  <span>تواصل</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-bold hidden sm:block">
                {SCHOOL_INFO.nameEn} • روضة الأطفال (المستوى الأول)
              </p>
            </div>
          </div>

          {/* Desktop Giant Kid-Friendly Tabs */}
          <nav className="hidden 2xl:flex items-center gap-1.5 shrink-0">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-900 to-indigo-800 text-white shadow-md scale-105 ring-2 ring-amber-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-amber-100 hover:text-blue-950'
                  }`}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls: Voice Settings, Child Badge, Stars */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Egyptian Voice Tuner Button */}
            <button
              onClick={() => setShowVoiceModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 text-xs font-black shadow-xs transition-colors"
              title="ضبط صوت المعلمة المصرية"
            >
              <span className="text-sm">🎙️</span>
              <span className="hidden md:inline">صوت المعلمة</span>
            </button>

            {childName && (
              <button
                onClick={() => speech.speak(`أهلاً بالبطل الشاطر ${childName}! معاك ${stars} نجمة ذهبية بتلمع!`)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-900 text-xs font-black hover:bg-emerald-100 transition-colors"
              >
                <span>👦 {childName}</span>
                <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
              </button>
            )}

            <div 
              onClick={() => {
                sfx.playMagicChime();
                confetti({ particleCount: 30, spread: 50 });
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-sm shadow-sm cursor-pointer hover:scale-105 transition-transform border border-amber-500/30"
              title="نجوم البطل"
            >
              <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>{stars}</span>
            </div>
          </div>

        </div>

        {/* Mobile, Tablet & Compact Navigation Bar */}
        <div className="flex 2xl:hidden overflow-x-auto py-2.5 border-t border-amber-100 gap-2 items-center no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-blue-900 text-white shadow ring-2 ring-amber-300'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                <span className="text-sm">{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Egyptian Voice Settings Modal */}
      {showVoiceModal && (
        <div 
          onClick={() => setShowVoiceModal(false)}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-4 border-amber-300 animate-in zoom-in-95 space-y-4 my-auto max-h-[90vh] overflow-y-auto"
          >
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎙️</span>
                <div>
                  <h3 className="font-black text-slate-900 text-base">ضبط نطق المعلمة (ar-EG)</h3>
                  <p className="text-[11px] text-slate-500 font-bold">تحسين نطق فصول السنة والتشجيع بالعامية</p>
                </div>
              </div>
              <button
                onClick={() => setShowVoiceModal(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black flex items-center justify-center transition-colors text-lg"
                title="إغلاق"
              >
                ✕
              </button>
            </div>

            {/* Current Active Voice Card */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-3.5 space-y-1">
              <span className="text-xs text-amber-900 font-bold block">الصوت المفعل حالياً على جهازك:</span>
              <div className="font-black text-sm text-blue-950 flex items-center justify-between">
                <span>👩‍🏫 {currentVoiceName || 'صوت المعلمة المصرية'}</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">نشط ✓</span>
              </div>
            </div>

            {/* Voice Dropdown (If device has multiple voices) */}
            {voiceList.length > 1 && (
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-700 block">اختر صوت المعلمة المفضل:</label>
                <select
                  value={currentVoiceName}
                  onChange={(e) => {
                    setCurrentVoiceName(e.target.value);
                    speech.setVoice(e.target.value);
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  {voiceList.map((v, i) => (
                    <option key={i} value={v.name}>
                      {v.name} ({v.lang})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Sliders: Speed and Pitch */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>سرعة الكلام للأطفال:</span>
                  <span className="text-amber-800 font-black">{Math.round(currentRate * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.7"
                  max="1.2"
                  step="0.05"
                  value={currentRate}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setCurrentRate(val);
                    speech.setRate(val);
                  }}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>نبرة الصوت (دفء النطق):</span>
                  <span className="text-amber-800 font-black">{Math.round(currentPitch * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.9"
                  max="1.4"
                  step="0.05"
                  value={currentPitch}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setCurrentPitch(val);
                    speech.setPitch(val);
                  }}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>

            {/* Test Voice Button */}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleTestVoice}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span>جرّب نطق المعلمة بالعامية الآن 🔊</span>
              </button>

              {/* Explicit Big Save & Close Button */}
              <button
                onClick={() => setShowVoiceModal(false)}
                className="w-full py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>حفظ وإغلاق (تم) ✓</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center font-bold">
              يمكنك أيضاً النقر خارج هذا المربع أو زر (✕) للإغلاق في أي وقت.
            </p>
          </div>
        </div>
      )}

    </header>
  );
}
