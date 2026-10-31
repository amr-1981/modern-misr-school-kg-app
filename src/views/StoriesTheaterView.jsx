import React, { useState } from 'react';
import { Volume2, BookOpen, CheckCircle2, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORIES_DATA } from '../data/kg1CurriculumData';
import { speech, sfx } from '../services/speechService';

export default function StoriesTheaterView({ completedStories, onCompleteStory }) {
  const [activeStory, setActiveStory] = useState(STORIES_DATA[0]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectStory = (story) => {
    setActiveStory(story);
    setSelectedAnswer(null);
    speech.speak(`${story.type}: ${story.title}. ${story.scenes[0].audio}`);
  };

  const handleAnswer = (idx) => {
    setSelectedAnswer(idx);
    if (idx === activeStory.correctIndex) {
      sfx.playFullCelebration();
      confetti({ particleCount: 70, spread: 60 });
      speech.speak('إجابة صح يا بطل! كسبت خمس نجوم ذهبية!');
      onCompleteStory(activeStory.id);
    } else {
      sfx.playTryAgain();
      speech.speak('اسمع الحكاية كويس وجرّب تاني يا شاطر!');
    }
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Stories Selector Bar */}
      <div className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-sm">
        <h2 className="text-xl font-black text-slate-900 mb-1">📖 مسرح حكايات وقصص كتاب (تواصل KG1)</h2>
        <p className="text-xs text-slate-500 font-bold mb-4">
          القصص المشتركة والقصص الموجهة الكاملة مع الكلمات الشائعة المنطوقة
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {STORIES_DATA.map((st) => {
            const isSelected = activeStory.id === st.id;
            const isDone = completedStories.includes(st.id);
            return (
              <button
                key={st.id}
                onClick={() => handleSelectStory(st)}
                className={`p-4 rounded-2xl border-2 text-right transition-all flex items-center justify-between ${
                  isSelected
                    ? `bg-gradient-to-r ${st.color} text-white border-transparent shadow-md scale-[1.02]`
                    : 'bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{st.emoji}</span>
                  <div>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-black/20 text-white' : 'bg-amber-100 text-amber-900'
                    }`}>
                      {st.type} • ص {st.bookPages}
                    </span>
                    <h3 className="font-black text-sm mt-1">{st.title}</h3>
                  </div>
                </div>
                {isDone && <span className="text-lg">⭐</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Story Content */}
      {activeStory && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Story Scenes */}
          <div className="lg:col-span-2 space-y-4">
            {activeStory.scenes.map((scene, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{scene.emoji}</span>
                    <h3 className="font-black text-lg text-blue-950">{scene.title}</h3>
                  </div>
                  <button
                    onClick={() => speech.speak(scene.audio)}
                    className="px-4 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-1.5 shadow-sm hover:scale-105 transition-transform"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>احكِ لي بالصوت 🔊</span>
                  </button>
                </div>

                <p 
                  onClick={() => speech.speak(scene.text)}
                  className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-slate-900 text-lg sm:text-xl font-black leading-loose cursor-pointer hover:bg-amber-100/60 transition-colors"
                >
                  {scene.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Common Words & Story Quiz */}
          <div className="space-y-6">
            
            {/* Common Words (الكلمات الشائعة) */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
              <h4 className="font-black text-slate-900 text-base mb-1">🌟 الكلمات الشائعة في القصة</h4>
              <p className="text-xs text-slate-500 font-bold mb-3">اضغط على الكلمة لتسمع نطقها وترددها</p>
              <div className="flex flex-wrap gap-2">
                {activeStory.commonWords.map((cw, i) => (
                  <button
                    key={i}
                    onClick={() => speech.speak(cw)}
                    className="px-4 py-2 rounded-2xl bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 text-blue-950 font-black text-lg flex items-center gap-1.5 transition-transform hover:scale-105"
                  >
                    <span>{cw}</span>
                    <Volume2 className="w-4 h-4 text-blue-600" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Story Question */}
            <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                  سؤال البطل الذكي (+5 ⭐)
                </span>
                <button
                  onClick={() => speech.speak(activeStory.question)}
                  className="p-1.5 rounded-xl bg-emerald-50 text-emerald-700"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <h4 className="font-black text-slate-900 text-sm">{activeStory.question}</h4>

              <div className="space-y-2">
                {activeStory.options.map((opt, i) => {
                  const isChosen = selectedAnswer === i;
                  const isCorrect = i === activeStory.correctIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={`w-full p-3 rounded-2xl border-2 text-right font-black text-xs transition-all flex items-center justify-between ${
                        isChosen
                          ? isCorrect
                            ? 'bg-emerald-100 border-emerald-500 text-emerald-950'
                            : 'bg-rose-100 border-rose-500 text-rose-950'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      <span>{opt}</span>
                      {isChosen && (isCorrect ? <span>✅</span> : <span>❌</span>)}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
