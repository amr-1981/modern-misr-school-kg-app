import React, { useState } from 'react';
import { Printer, Eye, CheckCircle2, Sparkles, Filter, Download, ArrowRight, X, Star } from 'lucide-react';
import { WORKSHEET_CATEGORIES, WORKSHEETS_DATA } from '../data/worksheetsData';
import { SCHOOL_INFO } from '../data/kg1CurriculumData';
import { speech, sfx } from '../services/speechService';

export default function WorksheetsView({ childName }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');
  const [previewSheet, setPreviewSheet] = useState(null);

  const lettersFilter = ['أ', 'م', 'ب', 'ف', 'ن', 'ل', 'ح', 'ر', 'ت', 'س'];

  const filteredSheets = WORKSHEETS_DATA.filter((sheet) => {
    const matchCategory = activeCategory === 'all' || sheet.category === activeCategory;
    const matchLetter = selectedLetter === 'all' || sheet.letterChar === selectedLetter;
    return matchCategory && matchLetter;
  });

  const handlePrintSheet = (sheet) => {
    setPreviewSheet(sheet);
    sfx.playMagicChime();
    speech.speak(`جاهز لطباعة: ${sheet.title} بمقاس A4!`);
    setTimeout(() => {
      window.print();
    }, 600);
  };

  const handleOpenPreview = (sheet) => {
    setPreviewSheet(sheet);
    sfx.playPop();
  };

  return (
    <div className="space-y-6 pb-20">
      
      {/* Top Banner (Hidden on Print) */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-900 rounded-3xl p-4 sm:p-8 text-white shadow-xl border-2 sm:border-4 border-amber-300 relative overflow-hidden no-print">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 text-center sm:text-right">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center text-4xl sm:text-5xl shadow-inner border border-white/30 shrink-0 animate-float">
              🖨️
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black mb-2 shadow">
                <Sparkles className="w-3.5 h-3.5" />
                <span>مكتبة الشيتات الرسمية • المدرسة المصرية الحديثة بطرابلس</span>
              </div>
              <h1 className="text-xl sm:text-3xl font-black">
                شِيتَاتُ العَمَلِ وَصَفَحَاتُ التَّلْوِينِ لِلطِّبَاعَةِ (A4)
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1 font-bold">
                29 ورقة عمل جاهزة للحل الخارجي والتلوين مطابقة لكتاب (تواصل - KG1 الفصل الدراسي الأول)
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              speech.speak('اضغط على أي شيت لمعاينته وطباعته فوراً على طابعتك المنزلية أو المدرسية بمقاس A4!');
            }}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white text-slate-900 rounded-2xl text-xs sm:text-sm font-black shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <span>تعليمات الطباعة 🔊</span>
          </button>
        </div>
      </div>

      {/* Filter Categories Bar (Hidden on Print) */}
      <div className="bg-white rounded-3xl p-3 sm:p-5 shadow-sm border-2 border-amber-200 space-y-3 no-print">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-slate-700 flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-emerald-600" />
            <span>تصنيف أوراق العمل:</span>
          </span>
          <span className="text-xs font-bold text-slate-500">
            المعروض: {filteredSheets.length} من {WORKSHEETS_DATA.length} شيت
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
          {WORKSHEET_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  sfx.playPop();
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-md ring-2 ring-emerald-300 scale-102'
                    : 'bg-slate-50 hover:bg-amber-50 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Letters Filter Row */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-black text-slate-500 whitespace-nowrap ml-2">الحرف:</span>
          <button
            onClick={() => setSelectedLetter('all')}
            className={`px-2.5 py-1 rounded-xl text-xs font-black transition-all ${
              selectedLetter === 'all'
                ? 'bg-blue-950 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            الكل
          </button>
          {lettersFilter.map((char) => (
            <button
              key={char}
              onClick={() => {
                setSelectedLetter(char);
                sfx.playPop();
              }}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-black text-sm transition-all flex items-center justify-center shrink-0 ${
                selectedLetter === char
                  ? 'bg-amber-400 text-slate-950 shadow ring-2 ring-amber-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-amber-100'
              }`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      {/* Worksheets Grid (Hidden on Print) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 no-print">
        {filteredSheets.map((sheet) => {
          return (
            <div
              key={sheet.id}
              className="bg-white rounded-3xl p-5 border-2 border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
            >
              {/* Sheet Mini Preview Thumbnail Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {sheet.category === 'tracing' ? '✏️ شيت تتبع' :
                     sheet.category === 'coloring' ? '🎨 تلوين' :
                     sheet.category === 'seasons' ? '☀️ فصول أربعة' :
                     sheet.category === 'blending' ? '🧩 دمج كلمات' : '📝 اختبار'}
                    {sheet.bookPage ? ` • ص ${sheet.bookPage}` : ''}
                  </span>

                  {sheet.letterChar && (
                    <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-950 font-black text-lg flex items-center justify-center border border-amber-300">
                      {sheet.letterChar}
                    </span>
                  )}
                </div>

                <h3 className="font-black text-base text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {sheet.title}
                </h3>
                <p className="text-xs text-slate-500 font-bold line-clamp-2 leading-relaxed">
                  {sheet.description}
                </p>
              </div>

              {/* Sheet Paper Micro-Preview Mockup */}
              <div 
                onClick={() => handleOpenPreview(sheet)}
                className="bg-slate-50 hover:bg-amber-50/50 p-4 rounded-2xl border-2 border-dashed border-slate-200 cursor-pointer text-center space-y-2 transition-colors relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold border-b border-slate-200 pb-1">
                  <span>{SCHOOL_INFO.nameAr}</span>
                  <span>A4 • ورقة عمل</span>
                </div>

                {sheet.category === 'tracing' && (
                  <div className="py-2">
                    <div className="text-3xl font-black text-slate-800 mb-1">{sheet.letterChar}</div>
                    <div className="text-xs font-mono tracking-widest text-slate-400">
                      {sheet.tracingLines[0].guide}
                    </div>
                  </div>
                )}

                {sheet.category === 'coloring' && (
                  <div className="py-2 flex items-center justify-center gap-2">
                    <span className="text-4xl">{sheet.wordEmoji}</span>
                    <span className="text-2xl font-black text-slate-700">{sheet.letterChar}</span>
                  </div>
                )}

                {sheet.category === 'seasons' && (
                  <div className="py-2 text-center">
                    <span className="text-xs font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full block mb-1">
                      {sheet.seasonName}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">أنشطة وصل وتلوين الحركات</span>
                  </div>
                )}

                {sheet.category === 'blending' && (
                  <div className="py-2">
                    <div className="text-base font-black text-emerald-700 bg-emerald-50 py-1 rounded-xl">
                      {sheet.equation}
                    </div>
                  </div>
                )}

                {sheet.category === 'tests' && (
                  <div className="py-2 text-center text-xs font-black text-blue-900">
                    <div>درجة الامتحان: {sheet.totalScore} درجة</div>
                    <div className="text-[10px] text-slate-400 mt-1">الزمن: {sheet.duration}</div>
                  </div>
                )}

                <span className="text-[11px] font-bold text-emerald-700 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  اضغط للمعاينة الكاملة
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => handleOpenPreview(sheet)}
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>معاينة</span>
                </button>

                <button
                  onClick={() => handlePrintSheet(sheet)}
                  className="px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs flex items-center justify-center gap-1 shadow-sm transition-all hover:scale-102"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>طباعة 🖨️</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* FULLSCREEN PREVIEW & DEDICATED PRINT CONTAINER */}
      {previewSheet && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-4 sm:p-8 shadow-2xl border-4 border-amber-300 animate-in zoom-in-95 my-auto max-h-[95vh] overflow-y-auto space-y-4">
            
            {/* Modal Controls Bar (Hidden on actual physical print) */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 no-print">
              <div className="flex items-center gap-2">
                <span className="text-xl">🖨️</span>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">معاينة الشيت للطباعة (A4)</h3>
                  <p className="text-[11px] text-slate-500 font-bold">{previewSheet.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs flex items-center gap-1.5 shadow"
                >
                  <Printer className="w-4 h-4" />
                  <span>اطبع الآن 🖨️</span>
                </button>
                <button
                  onClick={() => setPreviewSheet(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black text-sm flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* THE ACTUAL PRINTABLE SHEET CONTAINER (Styled for real A4 print) */}
            <div className="printable-sheet bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-900 text-slate-900 space-y-4 font-arabic">
              
              {/* Official School Header */}
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <div className="flex items-center gap-3">
                  <img src={SCHOOL_INFO.logo} alt="Logo" className="w-14 h-14 object-contain" />
                  <div>
                    <h2 className="font-black text-base text-blue-950">{SCHOOL_INFO.nameAr}</h2>
                    <p className="text-[10px] font-bold text-slate-600">{SCHOOL_INFO.nameEn}</p>
                    <span className="text-[11px] font-black text-emerald-800">
                      مادة اللغة العربية • روضة الأطفال (KG1) • كتاب تواصل
                    </span>
                  </div>
                </div>

                <div className="text-left text-xs font-bold space-y-1">
                  <div>اسم البطل: <span className="border-b-2 border-dotted border-slate-500 inline-block w-28 text-center font-black">{childName || '..................'}</span></div>
                  <div>التاريخ: <span className="border-b-2 border-dotted border-slate-500 inline-block w-24 text-center">..... / ..... / 2026م</span></div>
                  <div>الفصل: <span className="font-black">روضة (مستوى أول)</span></div>
                </div>
              </div>

              {/* Title & Instruction */}
              <div className="text-center py-1 bg-amber-50 rounded-xl border border-amber-300">
                <h3 className="font-black text-lg text-slate-900">{previewSheet.title}</h3>
                <p className="text-xs font-extrabold text-amber-900">
                  {previewSheet.instruction || previewSheet.description}
                </p>
              </div>

              {/* Content by Category: 1. Tracing Sheet */}
              {previewSheet.category === 'tracing' && (
                <div className="space-y-4">
                  {/* Big Target Letter & Guide Box */}
                  <div className="flex items-center justify-around p-3 bg-slate-50 rounded-2xl border border-slate-300 text-center">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 block">الحرف المستهدف</span>
                      <span className="text-6xl font-black text-blue-950">{previewSheet.letterChar}</span>
                    </div>
                    <div>
                      <span className="text-5xl">{previewSheet.wordEmoji}</span>
                      <strong className="block text-base font-black mt-1">{previewSheet.wordExample}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black text-slate-600 block mb-1">أشكال الحرف:</span>
                      <div className="flex gap-2">
                        {previewSheet.forms.map((f, i) => (
                          <span key={i} className="px-2 py-1 bg-white border border-slate-300 rounded-lg font-black text-base">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tracing Rows */}
                  <div className="space-y-2.5">
                    <h4 className="font-black text-xs text-slate-700">✏️ تتبع النقاط واكتب الحرف على السطر بدقة:</h4>
                    {previewSheet.tracingLines.map((line, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-300">
                        <span className="w-8 h-8 rounded-lg bg-amber-100 text-slate-900 font-black text-base flex items-center justify-center shrink-0">
                          {line.text}
                        </span>
                        <div className="flex-1 font-mono text-xl sm:text-2xl tracking-widest text-slate-400 font-bold border-b border-dashed border-slate-400 pb-1">
                          {line.guide}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Letter Hunt Activity */}
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-300">
                    <h4 className="font-black text-xs text-slate-700 mb-2">⭕ ارسم دائرة حول حرف ({previewSheet.letterChar}) أينما وجدته:</h4>
                    <div className="flex justify-around items-center">
                      {previewSheet.huntCharacters.map((c, i) => (
                        <span key={i} className="w-10 h-10 rounded-full border-2 border-slate-400 flex items-center justify-center font-black text-xl hover:bg-amber-100">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Content: 2. Coloring Sheet */}
              {previewSheet.category === 'coloring' && (
                <div className="space-y-4 text-center">
                  <div className="p-8 border-4 border-dashed border-slate-400 rounded-3xl bg-white flex flex-col items-center justify-center space-y-4 min-h-[300px]">
                    <span className="text-8xl">{previewSheet.wordEmoji}</span>
                    <div className="text-7xl font-black tracking-widest text-slate-800 py-2 border-2 border-slate-300 px-8 rounded-2xl">
                      {previewSheet.letterChar}
                    </div>
                    <span className="text-2xl font-black text-slate-700">
                      {previewSheet.wordExample}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-slate-600 border-t border-slate-200 pt-3">
                    <span>🎨 الألوان المقترحة: {previewSheet.colorTarget}</span>
                    <span>⭐ تقييم التلوين: [ ممتاز • جيد جداً • رائع ]</span>
                  </div>
                </div>
              )}

              {/* Content: 3. Seasons Harakat */}
              {previewSheet.category === 'seasons' && (
                <div className="space-y-4">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 text-center">
                    <span className="text-base font-black text-amber-900">{previewSheet.seasonName}</span>
                  </div>

                  {previewSheet.activities.map((act, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-300 space-y-3">
                      <h4 className="font-black text-xs text-slate-800">{act.q}</h4>

                      {act.pairs && (
                        <div className="grid grid-cols-2 gap-3">
                          {act.pairs.map((p, i) => (
                            <div key={i} className="p-2.5 bg-white rounded-xl border border-slate-300 flex items-center justify-between">
                              <span className="text-xl font-black text-blue-950">{p.char}</span>
                              <span className="text-2xl">{p.emoji}</span>
                              <span className="text-xs font-bold text-slate-700">{p.word}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {act.pool && (
                        <div className="flex justify-around items-center pt-2">
                          {act.pool.map((c, i) => (
                            <span key={i} className="w-10 h-10 rounded-full border-2 border-slate-400 flex items-center justify-center font-black text-xl">
                              {c}
                            </span>
                          ))}
                        </div>
                      )}

                      {act.words && (
                        <div className="flex justify-around items-center pt-2">
                          {act.words.map((w, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-xl border border-slate-400 font-black text-base">
                              {w}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Content: 4. Word Blending */}
              {previewSheet.category === 'blending' && (
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-300 text-center">
                    <span className="text-4xl block mb-1">{previewSheet.emoji}</span>
                    <span className="text-3xl font-black text-emerald-950">{previewSheet.equation}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-black text-xs text-slate-800">✏️ اكتب الكلمة وتتبع النقاط بخط جميل:</h4>
                    {previewSheet.lines.map((l, i) => (
                      <div key={i} className="p-3 bg-white border border-slate-300 rounded-xl font-mono text-xl text-center text-slate-600 font-bold border-b-2 border-slate-400">
                        {l}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-300">
                    <h4 className="font-black text-xs text-slate-700 mb-2">⭕ لوّن الحروف المكونة لكلمة ({previewSheet.word}):</h4>
                    <div className="flex justify-around items-center">
                      {previewSheet.huntBoxes.map((c, i) => (
                        <span key={i} className="w-9 h-9 rounded-xl border border-slate-400 flex items-center justify-center font-black text-lg">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Content: 5. Tests & Assessments */}
              {previewSheet.category === 'tests' && (
                <div className="space-y-4">
                  {previewSheet.sections.map((sec, i) => (
                    <div key={i} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-300 space-y-2">
                      <h4 className="font-black text-xs text-slate-900">{sec.title}</h4>
                      {sec.text && <p className="text-xs text-slate-600 font-bold">{sec.text}</p>}

                      {sec.items && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {sec.items.map((it, j) => (
                            <div key={j} className="p-2 bg-white rounded-xl border border-slate-200 text-xs font-bold flex items-center justify-between">
                              {it.sound && <span>صوت: {it.sound}</span>}
                              {it.word && <span>{it.word}</span>}
                              {it.target && <span>الحرف: {it.target} ➔ ({it.choices.join(' - ')})</span>}
                              {it.formula && <span>{it.formula}</span>}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Printable Sheet Footer: Teacher Grade & Signature */}
              <div className="pt-3 border-t-2 border-slate-900 flex items-center justify-between text-xs font-black text-slate-700">
                <div>
                  <span>تقييم المعلمة: </span>
                  <span className="text-amber-600">⭐⭐⭐⭐⭐</span>
                </div>
                <div>
                  <span>ملاحظات المعلمة: .......................................</span>
                </div>
                <div>
                  <span>توقيع ولي الأمر: ...................</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
