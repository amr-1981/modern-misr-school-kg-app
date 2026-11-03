import React from 'react';
import { Award, Printer, Trash2, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { LETTERS_DATA, STORIES_DATA, SCHOOL_INFO } from '../data/kg1CurriculumData';
import { speech } from '../services/speechService';

export default function ParentsAndCertificateView({ 
  childName, 
  stars, 
  masteredLetters, 
  completedStories, 
  gameScores,
  onResetAll 
}) {
  const handlePrintCertificate = () => {
    speech.speak(`طباعة شهادة تقدير للبطل ${childName || 'المميز'} من المدرسة المصرية الحديثة بطرابلس!`);
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Parent & Teacher Summary Panel (Hidden on Print) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-6 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-black text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              ركن الأسرة والمعلم • متابعة تقدم الطفل
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">
              تقرير إتقان منهج (تواصل - KG1 الفصل الدراسي الأول)
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintCertificate}
              className="px-4 py-2.5 rounded-2xl bg-blue-950 hover:bg-blue-900 text-white font-black text-xs flex items-center gap-1.5 shadow"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة شهادة التقدير 🖨️</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm('هل تريد مسح سجل النجوم والبدء من جديد؟')) {
                  onResetAll();
                }
              }}
              className="px-3 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1 border border-rose-200"
            >
              <Trash2 className="w-4 h-4" />
              <span>تصفير السجل</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="text-xs font-bold text-amber-900">إجمالي النجوم الذهبية</span>
            <div className="text-3xl font-black text-amber-950 mt-1">{stars} ⭐</div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-xs font-bold text-emerald-900">الحروف المتقنة (من 10 حروف)</span>
            <div className="text-3xl font-black text-emerald-950 mt-1">{masteredLetters.length} / {LETTERS_DATA.length} 🔤</div>
          </div>

          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
            <span className="text-xs font-bold text-sky-900">القصص المستمعة والمحلولة</span>
            <div className="text-3xl font-black text-sky-950 mt-1">{completedStories.length} / {STORIES_DATA.length} 📖</div>
          </div>
        </div>

        {/* Letters Mastery Checklist */}
        <div>
          <h3 className="font-black text-slate-900 text-sm mb-3">حالة إتقان حروف الترم الأول العشرة:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {LETTERS_DATA.map((l) => {
              const done = masteredLetters.includes(l.id);
              return (
                <div
                  key={l.id}
                  className={`p-3 rounded-2xl border flex items-center justify-between ${
                    done ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <span className="font-black text-sm">{l.name} ({l.char})</span>
                  <span>{done ? '✅' : '⏳'}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Printable Official School Certificate (شهادة تقدير المدرسة المصرية الحديثة - طرابلس) */}
      <div className="bg-white rounded-3xl p-4 sm:p-12 border-4 sm:border-8 border-double border-amber-400 shadow-2xl text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
          
          <div className="flex flex-col items-center justify-center">
            <img 
              src={SCHOOL_INFO.logo} 
              alt={SCHOOL_INFO.nameAr}
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain mb-2"
            />
            <h3 className="text-lg sm:text-xl font-black text-blue-950">{SCHOOL_INFO.nameAr}</h3>
            <p className="text-[11px] sm:text-xs font-extrabold text-slate-500 tracking-wide">{SCHOOL_INFO.nameEn}</p>
          </div>

          <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-sm sm:text-base shadow">
            🏆 شَهَادَةُ تَقْدِيرٍ وَتَفَوُّقٍ 🏆
          </div>

          <p className="text-xs sm:text-base font-bold text-slate-700 leading-relaxed">
            تَفْخَرُ إدارةُ <strong className="text-blue-950">المدرسة المصرية الحديثة - طرابلس</strong> بمنح هذه الشهادة للبطل المميز:
          </p>

          <div className="py-2.5 sm:py-3 px-4 sm:px-8 rounded-2xl bg-amber-50 border-2 border-amber-300 inline-block min-w-0 sm:min-w-[260px] max-w-full">
            <span className="text-xl sm:text-3xl font-black text-blue-950 break-words">
              {childName || 'بطل رياض الأطفال المميز'}
            </span>
          </div>

          <p className="text-xs sm:text-base font-bold text-slate-700 leading-relaxed">
            لتفوقه واجتهاده الرائع في تعلم حروف وكلمات وقصص كتاب <strong className="text-emerald-800">(تواصل - اللغة العربية - المستوى الأول KG1)</strong> وحصوله على <strong className="text-amber-700">{stars} نجمة ذهبية ⭐</strong> وإتقان <strong className="text-emerald-700">{masteredLetters.length} من 10 حروف</strong>.
          </p>

          <div className="pt-4 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-black text-slate-600">
            <div>
              <span className="block text-slate-400">معلم فصل رياض الأطفال</span>
              <span className="text-blue-950 mt-0.5 sm:mt-1 block">أسرة اللغة العربية</span>
            </div>
            <div className="text-2xl sm:text-3xl">🌟🇱🇾🇪🇬🌟</div>
            <div>
              <span className="block text-slate-400">إدارة المدرسة</span>
              <span className="text-blue-950 mt-0.5 sm:mt-1 block">{SCHOOL_INFO.nameAr}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
