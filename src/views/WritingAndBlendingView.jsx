import React, { useState } from 'react';
import { PenTool, Volume2, RotateCcw, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LETTERS_DATA, WORD_BLENDING_EXERCISES } from '../data/kg1CurriculumData';
import { speech, sfx } from '../services/speechService';

export default function WritingAndBlendingView({ onOpenTracing, onAddStars }) {
  const [activeBlend, setActiveBlend] = useState(WORD_BLENDING_EXERCISES[0]);
  const [pickedLetters, setPickedLetters] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const startExercise = (item) => {
    setActiveBlend(item);
    setPickedLetters([]);
    setIsSuccess(false);
    speech.speak(`يلا نركب حروف كلمة: ${item.word}!`);
  };

  // Shuffled letter buttons for current word + 2 distractors
  const getChoiceLetters = () => {
    const base = [...activeBlend.letters];
    const extras = ['أ', 'م', 'ب', 'ف', 'ن', 'ل', 'ح', 'ر', 'ت', 'س'].filter(c => !base.includes(c)).slice(0, 2);
    return [...base, ...extras];
  };

  const handlePickLetter = (char) => {
    if (isSuccess) return;
    sfx.playPop();
    const nextIdx = pickedLetters.length;
    const expectedChar = activeBlend.letters[nextIdx];

    if (char === expectedChar) {
      const updated = [...pickedLetters, char];
      setPickedLetters(updated);
      speech.speak(char);

      if (updated.length === activeBlend.letters.length) {
        setIsSuccess(true);
        speech.stop();
        sfx.playFullCelebration();
        confetti({ particleCount: 80, spread: 70 });
        if (onAddStars) onAddStars(2);
      }
    } else {
      speech.stop();
      sfx.playTryAgain();
    }
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Section 1: Quick Letter Tracing Launcher */}
      <div className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">✏️ سبورة تتبع وكتابة الحروف العشرة</h2>
            <p className="text-xs text-slate-500 font-bold">اختر أي حرف لتفتح سبورة الكتابة الذكية وتتبع النقاط بإصبعك</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
          {LETTERS_DATA.map((l) => (
            <button
              key={l.id}
              onClick={() => onOpenTracing(l)}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border-2 border-slate-200 hover:border-amber-400 flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              <span className="text-3xl font-black text-blue-950">{l.char}</span>
              <span className="text-[11px] font-extrabold text-emerald-700 mt-1 flex items-center gap-1">
                <PenTool className="w-3 h-3" />
                اكتب
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Section 2: Word Blending Factory (مصنع تكوين ودمج الكلمات من الكتاب) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 1 Col: Word List from Textbook */}
        <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm space-y-3">
          <h3 className="font-black text-slate-900 text-base">🧩 تدريبات دمج الحروف (من كتاب تواصل)</h3>
          <p className="text-xs text-slate-500 font-bold">اختر كلمة لتركب حروفها بالترتيب</p>

          <div className="grid grid-cols-2 gap-2 max-h-[420px] overflow-y-auto pr-1">
            {WORD_BLENDING_EXERCISES.map((ex) => {
              const isCurr = activeBlend.id === ex.id;
              return (
                <button
                  key={ex.id}
                  onClick={() => startExercise(ex)}
                  className={`p-3 rounded-2xl border-2 text-right transition-all flex items-center justify-between ${
                    isCurr
                      ? 'bg-blue-900 text-white border-blue-900 shadow'
                      : 'bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <div>
                    <span className="text-xs opacity-75 block font-bold">ص {ex.page}</span>
                    <strong className="font-black text-base">{ex.word}</strong>
                  </div>
                  <span className="text-2xl">{ex.emoji}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right 2 Cols: Interactive Blending Stage */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-sm flex flex-col justify-between space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                نشاط: رَتِّبِ الحُرُوفَ وَكَوِّنْ كَلِمَةً • ص {activeBlend.page}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                كوّن كلمة: <span className="text-emerald-700">{activeBlend.word}</span>
              </h3>
            </div>

            <button
              onClick={() => speech.speak(activeBlend.audio)}
              className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow"
            >
              <Volume2 className="w-4 h-4" />
              <span>اسمع الكلمة 🔊</span>
            </button>
          </div>

          {/* Target Picture & Letter Slots */}
          <div className="flex flex-col items-center justify-center py-4 space-y-6">
            <div 
              onClick={() => speech.speak(activeBlend.word)}
              className="w-28 h-28 rounded-3xl bg-amber-50 border-4 border-amber-300 flex items-center justify-center text-6xl shadow-md cursor-pointer hover:scale-105 transition-transform"
            >
              {activeBlend.emoji}
            </div>

            {/* Slots */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {activeBlend.letters.map((targetChar, idx) => {
                const filledChar = pickedLetters[idx];
                return (
                  <React.Fragment key={idx}>
                    <div
                      className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl border-2 sm:border-4 flex items-center justify-center text-2xl sm:text-4xl font-black transition-all ${
                        filledChar
                          ? 'bg-emerald-500 text-white border-emerald-600 scale-105 shadow-md'
                          : 'bg-slate-50 border-dashed border-slate-300 text-slate-300'
                      }`}
                    >
                      {filledChar || '؟'}
                    </div>
                    {idx < activeBlend.letters.length - 1 && (
                      <span className="text-xl sm:text-2xl font-black text-slate-400">+</span>
                    )}
                  </React.Fragment>
                );
              })}

              <span className="text-xl sm:text-2xl font-black text-slate-400">=</span>

              <div className={`px-4 sm:px-6 h-14 sm:h-20 rounded-2xl border-2 sm:border-4 flex items-center justify-center text-2xl sm:text-3xl font-black transition-all ${
                isSuccess
                  ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-lg scale-105'
                  : 'bg-slate-100 border-slate-200 text-slate-400'
              }`}>
                {isSuccess ? activeBlend.word : '......'}
              </div>
            </div>
          </div>

          {/* Choice Buttons */}
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-extrabold text-slate-500 text-center mb-3">
              اضغط على الحروف بالترتيب من اليمين إلى اليسار لتكوين الكلمة:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {getChoiceLetters().map((ch, i) => (
                <button
                  key={i}
                  onClick={() => handlePickLetter(ch)}
                  className="w-16 h-16 rounded-2xl bg-blue-950 hover:bg-blue-800 text-white font-black text-3xl shadow-md hover:scale-110 active:scale-95 transition-all"
                >
                  {ch}
                </button>
              ))}

              <button
                onClick={() => { setPickedLetters([]); setIsSuccess(false); }}
                className="p-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1"
              >
                <RotateCcw className="w-4 h-4" />
                إعادة
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
