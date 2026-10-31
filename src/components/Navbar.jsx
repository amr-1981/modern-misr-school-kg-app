import React from 'react';
import { Sparkles, BookOpen, PenTool, Gamepad2, Award, Volume2, Star } from 'lucide-react';
import { SCHOOL_INFO } from '../data/kg1CurriculumData';
import { speech } from '../services/speechService';

export default function Navbar({ activeTab, setActiveTab, childName, stars }) {
  const navItems = [
    { id: 'letters', label: 'حديقة الحروف', emoji: '🔤', icon: Sparkles, audio: 'حديقة الحروف' },
    { id: 'stories', label: 'حكايات تواصل', emoji: '📖', icon: BookOpen, audio: 'حكايات وقصص الكتاب' },
    { id: 'board', label: 'سبورة الكتابة والدمج', emoji: '✏️', icon: PenTool, audio: 'سبورة الكتابة وتكوين الكلمات' },
    { id: 'games', label: 'الألعاب الصوتية', emoji: '🎮', icon: Gamepad2, audio: 'الألعاب والمسابقات الصوتية' },
    { id: 'parents', label: 'ركن الأسرة والشهادة', emoji: '🏆', icon: Award, audio: 'ركن الأسرة وشهادة التقدير' },
  ];

  const handleNavClick = (item) => {
    setActiveTab(item.id);
    speech.speak(item.audio);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* School Logo & Name */}
          <div 
            onClick={() => {
              setActiveTab('letters');
              speech.speak('أهلاً بك في المدرسة المصرية الحديثة بطرابلس، منصة تواصل لرياض الأطفال');
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src={SCHOOL_INFO.logo} 
              alt={SCHOOL_INFO.nameAr}
              className="w-14 h-14 rounded-2xl object-contain bg-white border-2 border-blue-900/20 p-0.5 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg text-blue-950 tracking-tight">
                  {SCHOOL_INFO.nameAr}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  KG1 • تواصل
                </span>
              </div>
              <p className="text-xs text-slate-500 font-bold">{SCHOOL_INFO.nameEn} • رياض الأطفال مستوى أول</p>
            </div>
          </div>

          {/* Desktop Giant Kid-Friendly Tabs */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-black transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-900 to-indigo-800 text-white shadow-md scale-105'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-amber-100/70 hover:text-blue-950'
                  }`}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Child Stars & Greeting Badge */}
          <div className="flex items-center gap-2">
            {childName && (
              <button
                onClick={() => speech.speak(`أهلاً بالبطل المميز ${childName}! معاك ${stars} نجمة ذهبية!`)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-900 text-xs font-black hover:bg-emerald-100 transition-colors"
              >
                <span>👦 {childName}</span>
                <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
              </button>
            )}

            <div 
              onClick={() => speech.speak(`ما شاء الله! جمعت ${stars} نجمة ذهبية!`)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-sm shadow-sm cursor-pointer hover:scale-105 transition-transform border border-amber-500/30"
              title="نجوم البطل"
            >
              <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>{stars}</span>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Kid Navigation Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 border-t border-amber-100 gap-2 items-center">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-black whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-blue-900 text-white shadow'
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
