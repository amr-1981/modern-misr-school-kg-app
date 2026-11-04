import React, { useState } from 'react';
import { Play, ExternalLink, Sparkles, Youtube, BookOpen, Search, Filter, CheckCircle2, X, Volume2 } from 'lucide-react';
import { VIDEO_TOPICS, YOUTUBE_CHANNELS, VIDEO_LESSONS } from '../data/videoLessonsData';
import { speech, sfx } from '../services/speechService';

export default function VideoLessonsView() {
  const [activeTopic, setActiveTopic] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredVideos = VIDEO_LESSONS.filter((vid) => {
    const matchTopic = activeTopic === 'all' || vid.topic === activeTopic;
    const matchSearch = searchQuery.trim() === '' || 
      vid.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vid.channelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vid.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchTopic && matchSearch;
  });

  const handlePlayVideo = (video) => {
    setActiveVideo(video);
    sfx.playPop();
    speech.speak(`تشغيل درس: ${video.title}! مشاهدة ممتعة ومفيدة يا بطل!`);
  };

  return (
    <div className="space-y-8 pb-20">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-700 via-rose-800 to-red-900 rounded-3xl p-4 sm:p-8 text-white shadow-xl border-2 sm:border-4 border-amber-300 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 text-center sm:text-right">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center text-4xl sm:text-5xl shadow-inner border border-white/30 shrink-0 animate-float">
              📺
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black mb-2 shadow">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ركن الدروس الخارجية والفيديوهات التفاعلية</span>
              </div>
              <h1 className="text-xl sm:text-3xl font-black">
                فِيدْيُوهَاتُ وَدُرُوسُ كِتَابِ تَوَاصُل (KG1)
              </h1>
              <p className="text-rose-100 text-xs sm:text-sm mt-1 font-bold">
                قنوات يوتيوب تعليمية مصرية معتمدة لشرح منهج اللغة العربية لرياض الأطفال خطوة بخطوة
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              speech.speak('هنا هتلاقي أفضل القنوات التعليمية وفيديوهات شرح كتاب تواصل من قناة مدرستنا والمعلمات المتخصصات!');
            }}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white text-slate-900 rounded-2xl text-xs sm:text-sm font-black shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <Volume2 className="w-4 h-4 text-red-600 animate-pulse" />
            <span>عن ركن الفيديوهات 🔊</span>
          </button>
        </div>
      </div>

      {/* Recommended YouTube Channels Shelf */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Youtube className="w-5 h-5 text-red-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              قنوات يوتيوب تعليمية موصى بها للمرحلة
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500">
            6 قنوات مصرية معتمدة
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {YOUTUBE_CHANNELS.map((ch) => (
            <div
              key={ch.id}
              className="bg-white rounded-3xl p-5 border-2 border-slate-200 hover:border-red-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-rose-100 border border-red-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-xs">
                    {ch.avatar}
                  </span>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-red-50 text-red-800 border border-red-200">
                    {ch.badge}
                  </span>
                </div>

                <h3 className="font-black text-base text-slate-900 group-hover:text-red-700 transition-colors">
                  {ch.name}
                </h3>
                <p className="text-xs text-slate-500 font-bold leading-relaxed line-clamp-2">
                  {ch.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-slate-400">
                  {ch.subscribers}
                </span>

                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sfx.playPop()}
                  className="px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-600 text-red-700 hover:text-white font-black text-xs flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <span>زيارة القناة</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section & Filter Tools */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border-2 border-amber-200 space-y-4">
        
        {/* Search & Filter Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث عن درس، حرف، أو قصة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-9 py-2 rounded-2xl bg-slate-50 text-slate-800 text-xs font-black border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <span className="text-xs font-bold text-slate-500">
            عدد الفيديوهات المتاحة: {filteredVideos.length} فيديو تعليمي
          </span>
        </div>

        {/* Topic Filter Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
          {VIDEO_TOPICS.map((topic) => {
            const isSelected = activeTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  setActiveTopic(topic.id);
                  sfx.playPop();
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-red-700 text-white shadow-md ring-2 ring-red-300 scale-102'
                    : 'bg-slate-50 hover:bg-amber-50 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{topic.emoji}</span>
                <span>{topic.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredVideos.map((vid) => (
          <div
            key={vid.id}
            className="bg-white rounded-3xl border-2 border-slate-200 hover:border-red-400 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
          >
            {/* Video Thumbnail Header */}
            <div 
              onClick={() => handlePlayVideo(vid)}
              className="relative h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex flex-col items-center justify-center cursor-pointer overflow-hidden group-hover:scale-102 transition-transform"
            >
              <span className="text-6xl mb-2 group-hover:scale-125 transition-transform">{vid.thumbEmoji}</span>
              
              <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors">
                <Play className="w-5 h-5 fill-white mr-0.5" />
              </div>

              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-lg bg-black/70 text-white text-[10px] font-bold">
                ⏱️ {vid.duration}
              </span>

              <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black shadow">
                {vid.level}
              </span>
            </div>

            {/* Video Meta Info */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-black text-red-700 block mb-1">
                  📺 {vid.channelName}
                </span>
                <h3 className="font-black text-base text-slate-900 leading-snug group-hover:text-red-700 transition-colors">
                  {vid.title}
                </h3>
                <p className="text-xs text-slate-500 font-bold mt-1.5 line-clamp-2 leading-relaxed">
                  {vid.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                {vid.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Play & Open Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => handlePlayVideo(vid)}
                  className="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>مشاهدة الفيديو</span>
                </button>

                <a
                  href={vid.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <span>فتح في يوتيوب</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-4 sm:p-6 shadow-2xl border-4 border-amber-300 animate-in zoom-in-95 my-auto space-y-4">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📺</span>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base leading-tight">
                    {activeVideo.title}
                  </h3>
                  <span className="text-xs text-red-700 font-black">{activeVideo.channelName}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black text-sm flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video shadow-inner flex flex-col items-center justify-center text-center p-4">
              <span className="text-6xl mb-3">{activeVideo.thumbEmoji}</span>
              <h4 className="text-white font-black text-base sm:text-lg mb-2 max-w-md px-4">
                {activeVideo.title}
              </h4>
              <p className="text-amber-200 text-xs font-bold mb-4 max-w-sm">
                اضغط على الزر أدناه لتشغيل الفيديو فوراً عبر قناة {activeVideo.channelName} في يوتيوب
              </p>

              <a
                href={activeVideo.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black text-sm flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-transform"
              >
                <Youtube className="w-5 h-5" />
                <span>تشغيل الدرس في يوتيوب الآن ↗️</span>
              </a>
            </div>

            {/* Educational Objectives */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
              <h5 className="font-black text-xs text-amber-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ما سيتعلمه الطفل من هذا الدرس:</span>
              </h5>
              <p className="text-xs text-slate-700 font-bold leading-relaxed">
                {activeVideo.description}
              </p>
            </div>

            {/* Footer Close */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveVideo(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs"
              >
                إغلاق النافذة
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
