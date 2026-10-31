import React, { useState } from 'react';
import { Volume2, Award, RotateCcw, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KG_GAMES_POOL } from '../data/kg1CurriculumData';
import { speech, sfx } from '../services/speechService';

export default function GamesArenaView({ onRecordGame }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = KG_GAMES_POOL[currentIdx];

  const handlePlayQuestion = () => {
    speech.speak(currentQ.questionAudio);
  };

  const handleChoose = (opt, idx) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);

    const isCorrect = opt.word === currentQ.correctWord;
    if (isCorrect) {
      setScore(prev => prev + 1);
      speech.playRewardCelebration('برافو عليك!');
      confetti({ particleCount: 50, spread: 60 });
    } else {
      sfx.playTryAgain();
      speech.speak(`معلش يا بطل فكّر تاني! الإجابة الصح هي: ${currentQ.correctWord}!`);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < KG_GAMES_POOL.length) {
      const nextQ = KG_GAMES_POOL[currentIdx + 1];
      setCurrentIdx(currentIdx + 1);
      setSelectedOpt(null);
      speech.speak(nextQ.questionAudio);
    } else {
      setIsFinished(true);
      onRecordGame({ score, total: KG_GAMES_POOL.length, starsEarned: score });
      sfx.playFullCelebration();
      confetti({ particleCount: 100, spread: 80 });
      speech.speak(`يا سلام على الشطارة يا بطل المدرسة المصرية الحديثة بطرابلس! جبت ${score} من ${KG_GAMES_POOL.length}!`);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setIsFinished(false);
    speech.speak(KG_GAMES_POOL[0].questionAudio);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      
      {/* Top Game Header */}
      <div className="bg-gradient-to-r from-blue-950 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-black bg-amber-400 text-slate-950 px-3 py-1 rounded-full">
            🎮 مسابقة (لَاحِظْ وَتَعَلَّمْ) الصوتية التفاعلية
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-2">اسمع الصوت واختار الصورة الصحيحة!</h1>
          <p className="text-xs text-amber-200 font-bold mt-1">
            أسئلة مستخرجة مباشرة من أنشطة كتاب (تواصل KG1) بدون حاجة الطفل للقراءة
          </p>
        </div>

        <div className="bg-white/10 px-5 py-3 rounded-2xl border border-white/20 text-center shrink-0">
          <span className="text-xs text-amber-200 block font-bold">نتيجة البطل</span>
          <strong className="text-2xl font-black text-amber-400">{score} / {KG_GAMES_POOL.length} ⭐</strong>
        </div>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-md space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <span className="text-xs font-black text-blue-950 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200">
              السؤال {currentIdx + 1} من {KG_GAMES_POOL.length} • مرجع الكتاب ص {currentQ.page}
            </span>

            <button
              onClick={handlePlayQuestion}
              className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
            >
              <Volume2 className="w-4 h-4" />
              <span>اضغط لسماع السؤال بصوت عالٍ 🔊</span>
            </button>
          </div>

          {/* Question Box */}
          <div className="text-center py-2">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-100 border-2 border-amber-400 text-3xl font-black text-blue-950 mb-3 shadow-sm">
              {currentQ.targetHaraka}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {currentQ.questionAudio}
            </h2>
          </div>

          {/* Giant Illustrated Option Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              const isCorrect = opt.word === currentQ.correctWord;

              let cardStyle = 'bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-900';
              if (selectedOpt !== null) {
                if (isCorrect) cardStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 scale-105 shadow-lg';
                else if (isSelected) cardStyle = 'bg-rose-100 border-rose-500 text-rose-950';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleChoose(opt, idx)}
                  className={`p-6 rounded-3xl border-4 flex flex-col items-center justify-center gap-3 transition-all ${cardStyle}`}
                >
                  <span className="text-6xl">{opt.emoji}</span>
                  <span className="text-xl font-black">{opt.word}</span>
                  {selectedOpt !== null && isCorrect && (
                    <span className="text-xs font-black text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> إجابة صحيحة!
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {selectedOpt !== null && (
            <div className="pt-4 border-t border-slate-100 text-center">
              <button
                onClick={handleNext}
                className="px-8 py-3 rounded-2xl bg-blue-950 hover:bg-blue-900 text-white font-black text-sm shadow-lg hover:scale-105 transition-transform"
              >
                {currentIdx + 1 < KG_GAMES_POOL.length ? 'السؤال التالي ⬅️' : 'عرض النتيجة النهائية 🏆'}
              </button>
            </div>
          )}

        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 border-4 border-amber-400 shadow-xl text-center space-y-4">
          <span className="text-6xl block">🎉🏆🎉</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            أحسنت يا بطل المدرسة المصرية الحديثة!
          </h2>
          <p className="text-base font-bold text-slate-600">
            حصلت على <strong className="text-emerald-700 font-black">{score}</strong> من <strong className="font-black">{KG_GAMES_POOL.length}</strong> وأضفت نجوماً جديدة لرصيدك!
          </p>
          <button
            onClick={handleRestart}
            className="px-8 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>العب مرة أخرى</span>
          </button>
        </div>
      )}

    </div>
  );
}
