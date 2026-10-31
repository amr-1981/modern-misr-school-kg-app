import React from 'react';
import { Sparkles, BookOpen, PenTool, Gamepad2, Award, Volume2, Star, CheckSquare } from 'lucide-react';
import { SCHOOL_INFO } from '../data/kg1CurriculumData';
import { speech } from '../services/speechService';

export default function Navbar({ activeTab, setActiveTab, childName, stars }) {
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

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* School Logo & Clean Non-Overlapping Brand Header */}
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

                {/* Fixed Non-Overlapping Badge */}
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
          <nav className="hidden xl:flex items-center gap-1.5 shrink-0">
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

          {/* Child Stars & Greeting Badge */}
          <div className="flex items-center gap-2 shrink-0">
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
              onClick={() => speech.speak(`ما شاء الله عليك يا بطل! جمعت ${stars} نجمة ذهبية شاطر جداً!`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-sm shadow-sm cursor-pointer hover:scale-105 transition-transform border border-amber-500/30"
              title="نجوم البطل"
            >
              <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>{stars}</span>
            </div>
          </div>

        </div>

        {/* Mobile & Tablet Kid Navigation Bar (Always reachable & scrollable) */}
        <div className="flex xl:hidden overflow-x-auto py-2.5 border-t border-amber-100 gap-2 items-center no-scrollbar">
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
    </header>
  );
}
