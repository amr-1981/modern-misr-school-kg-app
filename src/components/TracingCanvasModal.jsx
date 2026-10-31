import React, { useRef, useState, useEffect } from 'react';
import { Eraser, CheckCircle2, Volume2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speech, sfx } from '../services/speechService';

export default function TracingCanvasModal({ letterObj, onClose, onComplete }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState('#1e3a8a');
  const [hasDrawn, setHasDrawn] = useState(false);

  const colors = [
    { hex: '#1e3a8a', name: 'أزرق' },
    { hex: '#059669', name: 'أخضر' },
    { hex: '#dc2626', name: 'أحمر' },
    { hex: '#d97706', name: 'برتقالي' },
    { hex: '#7c3aed', name: 'بنفسجي' }
  ];

  const drawGuideLetter = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizontal baseline
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(30, canvas.height * 0.68);
    ctx.lineTo(canvas.width - 30, canvas.height * 0.68);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw large guide letter in light dashed gray
    ctx.font = 'bold 170px Cairo, Tajawal, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#f1f5f9';
    ctx.fillText(letterObj.char, canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 6]);
    ctx.strokeText(letterObj.char, canvas.width / 2, canvas.height / 2);
    ctx.setLineDash([]);
  };

  useEffect(() => {
    if (letterObj) {
      drawGuideLetter();
      speech.speak(`يلا يا بطل، امسك القلم أو بصباعك واكتب ${letterObj.name} على النقط!`);
    }
  }, [letterObj]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    setHasDrawn(false);
    drawGuideLetter();
    speech.speak('مسحنا السبورة، يلا نكتب مرة كمان بخط جميل!');
  };

  const handleFinish = () => {
    confetti({ particleCount: 90, spread: 70 });
    sfx.playFullCelebration();
    speech.speak(`تسلم إيدك يا بطل! خطك جميل وممتاز في كتابة ${letterObj.name}!`);
    if (onComplete) onComplete(letterObj.id);
    setTimeout(onClose, 800);
  };

  if (!letterObj) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-4 border-amber-300 animate-in zoom-in-95">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✏️</span>
            <div>
              <h3 className="font-black text-slate-900 text-lg">تتبع واكتب {letterObj.name} ({letterObj.char})</h3>
              <p className="text-xs text-slate-500">اكتب بإصبعك أو بالماوس فوق الحرف المنقط</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black text-sm flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Color Palette */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600">لون القلم:</span>
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => setStrokeColor(c.hex)}
                className={`w-7 h-7 rounded-full border-2 transition-transform ${
                  strokeColor === c.hex ? 'scale-125 border-slate-900 shadow' : 'border-white'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          <button
            onClick={handleClear}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1"
          >
            <Eraser className="w-3.5 h-3.5" />
            مسح وإعادة
          </button>
        </div>

        {/* Canvas Box */}
        <div className="bg-amber-50/40 rounded-2xl border-2 border-dashed border-amber-300 overflow-hidden touch-none">
          <canvas
            ref={canvasRef}
            width={460}
            height={280}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-[240px] cursor-crosshair"
          />
        </div>

        {/* Forms of the letter in word */}
        <div className="mt-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-around text-center">
          <span className="text-xs font-bold text-slate-500">أشكال الحرف في الكتاب:</span>
          {letterObj.forms.map((form, idx) => (
            <button
              key={idx}
              onClick={() => speech.speak(`${letterObj.name}`)}
              className="px-4 py-1.5 rounded-xl bg-white border-2 border-emerald-200 font-black text-xl text-emerald-900 shadow-sm"
            >
              {form}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            onClick={handleFinish}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>كتبت الحرف يا معلمي! (احصل على 3 نجوم ⭐)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
