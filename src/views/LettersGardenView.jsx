import React, { useState } from 'react';
import { Volume2, PenTool, CheckCircle2, Sparkles, Star, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LETTERS_DATA, THEMES, SCHOOL_INFO } from '../data/kg1CurriculumData';
import { speech, sfx } from '../services/speechService';

export default function LettersGardenView({ 
  childName, 
  onSaveChildName, 
  masteredLetters, 
  onOpenTracing,
  onMarkMastered 
}) {
  const [selectedLetter, setSelectedLetter] = useState(LETTERS_DATA[0]);
  const [tempName, setTempName] = useState(childName || '');
  const [editingName, setEditingName] = useState(!childName);

  const handleSaveName = (e) => {
    e.preventDefault();
    if (tempName.trim()) {
      onSaveChildName(tempName.trim());
      setEditingName(false);
      speech.speak(`أهلاً بك يا ${tempName.trim()} في المدرسة المصرية الحديثة بطرابلس! أنت بطل مميز فعلاً!`);
    }
  };

  const handleSelectLetter = (letter) => {
    setSelectedLetter(letter);
    speech.speak(`${letter.name}. ${letter.chantAudio}`);
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Hero Banner with School Identity */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-4 sm:p-8 text-white shadow-xl border-2 border-amber-300/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 text-center sm:text-right">
            <img 
              src={SCHOOL_INFO.logo} 
              alt={SCHOOL_INFO.nameAr}
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-white p-1.5 shadow-lg border-2 border-amber-400 shrink-0 animate-float"
            />
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] sm:text-xs font-black mb-1.5 sm:mb-2 shadow">
                <Sparkles className="w-3.5 h-3.5" />
                {SCHOOL_INFO.nameAr} • {SCHOOL_INFO.nameEn}
              </span>
              <h1 className="text-xl sm:text-3xl font-black text-white leading-tight">
                {childName ? `أهلاً بالبطل المميز: ${childName} 🌟` : 'مرحباً بأبطال رياض الأطفال (KG1) 🌟'}
              </h1>
              <p className="text-amber-100 text-xs sm:text-sm mt-1 font-bold">
                كتاب تواصل للغة العربية • المستوى الأول (الفصل الدراسي الأول)
              </p>
            </div>
          </div>

          {/* Child Name Input Box */}
          <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20 w-full md:w-auto min-w-0 md:min-w-[260px]">
            {editingName ? (
              <form onSubmit={handleSaveName} className="space-y-2">
                <label className="block text-xs font-extrabold text-amber-300">نَشَاط (مَنْ أَكُونُ؟) - اكتب اسم البطل:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="اكتب اسم الطفل هنا..."
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white text-slate-900 text-xs font-black focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-3 sm:px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shrink-0 shadow"
                  >
                    حفظ 🔊
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-amber-200 block font-bold">بطاقة (أَنَا مُمَيَّزٌ):</span>
                  <strong className="text-sm sm:text-base text-white font-black">اسْمِي: {childName}</strong>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => speech.speak(`أنا مميز، اسمي ${childName}، وأنا في المدرسة المصرية الحديثة!`)}
                    className="p-2 rounded-xl bg-amber-400 text-slate-950 hover:scale-105 transition-transform"
                    title="انطق اسمي"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setEditingName(true)}
                    className="text-xs text-amber-300 hover:underline font-bold px-2"
                  >
                    تعديل
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 10 Textbook Letters Grid (Organized by Textbook Order: أ م ب ف ن ل ح ر ت س) */}
      <div className="bg-white rounded-3xl p-3 sm:p-6 border-2 border-amber-200 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
          <div>
            <h2 className="text-base sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span>🔤 حديقة الحروف العشرة في الكتاب</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 font-bold">اضغط على أي حرف لتسمع أنشودته وحركاته الأربعة وتلعب معه</p>
          </div>
          <span className="text-[11px] sm:text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-300">
            أتقنت {masteredLetters.length} من {LETTERS_DATA.length} حروف ⭐
          </span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-1.5 sm:gap-2.5 w-full">
          {LETTERS_DATA.map((item) => {
            const isSelected = selectedLetter.id === item.id;
            const isMastered = masteredLetters.includes(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleSelectLetter(item)}
                className={`relative p-1.5 sm:p-3 rounded-2xl border-2 flex flex-col items-center justify-center transition-all min-w-0 w-full ${
                  isSelected
                    ? `bg-gradient-to-br ${item.color} text-white border-transparent shadow-lg scale-105 ring-2 ring-amber-300`
                    : `${item.bgLight} ${item.borderLight} text-slate-800 hover:scale-105`
                }`}
              >
                {isMastered && (
                  <span className="absolute -top-1.5 -left-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[9px] sm:text-[10px] font-black shadow">
                    ⭐
                  </span>
                )}
                <span className="text-xl sm:text-3xl font-black mb-0.5">{item.char}</span>
                <span className={`text-[9px] sm:text-[11px] font-extrabold truncate w-full text-center ${isSelected ? 'text-white/90' : 'text-slate-600'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Letter Interactive Theater */}
      {selectedLetter && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Left 2 Columns: Harakat Seasons & Words */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            
            {/* Main Letter Stage */}
            <div className={`bg-gradient-to-br ${selectedLetter.color} rounded-3xl p-4 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6`}>
              <div className="space-y-2.5 sm:space-y-3 text-center sm:text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-[11px] sm:text-xs font-black">
                  <span>الموضوع: {selectedLetter.topicTitle}</span>
                  <span>•</span>
                  <span>صفحات الكتاب: {selectedLetter.bookPages}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black">{selectedLetter.name} ({selectedLetter.char})</h3>
                <p className="text-xs sm:text-base text-white/95 leading-relaxed font-bold max-w-xl">
                  {selectedLetter.chantAudio}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5 pt-1 sm:pt-2">
                  <button
                    onClick={() => speech.speak(selectedLetter.chantAudio)}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white text-slate-900 font-black text-[11px] sm:text-xs shadow-md hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                    <span>اسمع أنشودة الحرف</span>
                  </button>

                  <button
                    onClick={() => speech.speak(selectedLetter.storyAudio)}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-amber-300 text-slate-950 font-black text-[11px] sm:text-xs shadow-md hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>اسمع حدوتة الحرف</span>
                  </button>

                  <button
                    onClick={() => onOpenTracing(selectedLetter)}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-slate-950/80 hover:bg-slate-950 text-white font-black text-[11px] sm:text-xs shadow-md hover:scale-105 transition-transform flex items-center gap-1.5 border border-white/20"
                  >
                    <PenTool className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                    <span>تتبع واكتب الحرف ✏️</span>
                  </button>
                </div>
              </div>

              {/* Giant Character Display */}
              <div 
                onClick={() => speech.speak(selectedLetter.name)}
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-3xl bg-white text-slate-900 flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform shrink-0 border-4 border-amber-300"
              >
                <span className="text-5xl sm:text-7xl font-black leading-none">{selectedLetter.char}</span>
                <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-xs sm:text-sm font-black text-emerald-700 bg-emerald-50 px-2 sm:px-3 py-0.5 rounded-full">
                  {selectedLetter.forms.map((f, i) => (
                    <span key={i}>{f}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* The 4 Seasons of Harakat (رحلة الفصول الأربعة للحرف) */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-black text-slate-900 text-lg">☀️❄️🍂🌸 أصوات الحرف في الفصول الأربعة (الحركات القصيرة)</h4>
                  <p className="text-xs text-slate-500 font-bold">اضغط على أي بطاقة لتسمع صوت الحركة مع كلمة الكتاب</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedLetter.harakat.map((h, i) => (
                  <button
                    key={i}
                    onClick={() => speech.speak(h.audio)}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border-2 border-slate-200 hover:border-amber-400 transition-all flex items-center justify-between text-right group shadow-sm"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-16 h-16 rounded-2xl bg-white border-2 border-amber-300 flex items-center justify-center text-3xl font-black text-blue-950 shadow-sm group-hover:scale-110 transition-transform">
                        {h.symbol}
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                          {h.season}
                        </span>
                        <h5 className="text-xl font-black text-slate-900 mt-1">
                          {h.word} <span className="text-sm text-slate-500 font-bold">({h.extraWord})</span>
                        </h5>
                        <span className="text-xs text-emerald-700 font-extrabold flex items-center gap-1 mt-0.5">
                          <Volume2 className="w-3.5 h-3.5" />
                          اضغط للنطق الصوتي
                        </span>
                      </div>
                    </div>
                    <span className="text-4xl">{h.emoji}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Illustrated Textbook Words & Mastery Action */}
          <div className="space-y-6">
            
            {/* Textbook Words Flashcards */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
              <h4 className="font-black text-slate-900 text-base mb-1">📸 كلمات وصور الكتاب لحرف ({selectedLetter.char})</h4>
              <p className="text-xs text-slate-500 font-bold mb-4">المس أي صورة لتسمع نطق الكلمة وتعرف موضع الحرف</p>

              <div className="grid grid-cols-2 gap-2.5">
                {selectedLetter.bookWords.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => speech.speak(`${item.word}، تبدأ بصوت ${item.haraka}`)}
                    className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 transition-all flex flex-col items-center text-center group"
                  >
                    <span className="text-3xl mb-1 group-hover:scale-125 transition-transform">{item.emoji}</span>
                    <span className="font-black text-base text-slate-900">{item.word}</span>
                    <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full mt-1">
                      {item.haraka}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mark Letter Mastered Card */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl p-6 text-slate-950 shadow-md text-center">
              <span className="text-4xl block mb-2">🏆</span>
              <h4 className="font-black text-lg">هل حفظت {selectedLetter.name} يا بطل؟</h4>
              <p className="text-xs font-bold text-slate-900/80 mt-1 mb-4">
                اضغط على الزر لتسجيل إتقانك للحرف والحصول على 3 نجوم ذهبية!
              </p>
              <button
                onClick={() => {
                  onMarkMastered(selectedLetter.id);
                  speech.stop();
                  sfx.playFullCelebration();
                  confetti({ particleCount: 60, spread: 60 });
                }}
                className="w-full py-3 rounded-2xl bg-blue-950 hover:bg-blue-900 text-white font-black text-xs shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{masteredLetters.includes(selectedLetter.id) ? 'تم إتقان هذا الحرف بنجاح ⭐' : 'نعم! أتقنت هذا الحرف (+3 ⭐)'}</span>
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
