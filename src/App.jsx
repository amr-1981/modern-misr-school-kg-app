import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TracingCanvasModal from './components/TracingCanvasModal';
import LettersGardenView from './views/LettersGardenView';
import BookActivitiesView from './views/BookActivitiesView';
import StoriesTheaterView from './views/StoriesTheaterView';
import WritingAndBlendingView from './views/WritingAndBlendingView';
import GamesArenaView from './views/GamesArenaView';
import ParentsAndCertificateView from './views/ParentsAndCertificateView';

import { SCHOOL_INFO } from './data/kg1CurriculumData';
import { storageService } from './services/storageService';
import { speech } from './services/speechService';

export default function App() {
  const [activeTab, setActiveTab] = useState('letters');
  const [childName, setChildName] = useState(storageService.getChildName());
  const [stars, setStars] = useState(storageService.getStars());
  const [masteredLetters, setMasteredLetters] = useState(storageService.getMasteredLetters());
  const [completedStories, setCompletedStories] = useState(storageService.getCompletedStories());
  const [gameScores, setGameScores] = useState(storageService.getGameScores());
  const [tracingLetter, setTracingLetter] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const refreshData = () => {
    setChildName(storageService.getChildName());
    setStars(storageService.getStars());
    setMasteredLetters(storageService.getMasteredLetters());
    setCompletedStories(storageService.getCompletedStories());
    setGameScores(storageService.getGameScores());
  };

  useEffect(() => {
    refreshData();

    const unsub = speech.subscribe((event) => {
      if (event === 'start') {
        setIsSpeaking(true);
      } else if (event === 'end' || event === 'stop') {
        setIsSpeaking(false);
      }
    });

    const interval = setInterval(() => {
      setIsSpeaking(speech.isSpeaking());
    }, 400);

    return () => {
      unsub();
      clearInterval(interval);
    };
  }, []);

  const handleSaveChildName = (name) => {
    storageService.setChildName(name);
    storageService.addStars(2);
    refreshData();
  };

  const handleMarkLetterMastered = (letterId) => {
    storageService.markLetterMastered(letterId);
    refreshData();
  };

  const handleCompleteStory = (storyId) => {
    storageService.markStoryCompleted(storyId);
    refreshData();
  };

  const handleAddStars = (amount) => {
    storageService.addStars(amount);
    refreshData();
  };

  const handleRecordGame = (record) => {
    storageService.recordGameScore(record);
    refreshData();
  };

  const handleResetAll = () => {
    storageService.clearAllData();
    refreshData();
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800 w-full max-w-full overflow-x-hidden">
      
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        childName={childName}
        stars={stars}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-6">
        {activeTab === 'letters' && (
          <LettersGardenView
            childName={childName}
            onSaveChildName={handleSaveChildName}
            masteredLetters={masteredLetters}
            onOpenTracing={(l) => setTracingLetter(l)}
            onMarkMastered={handleMarkLetterMastered}
          />
        )}

        {activeTab === 'book-activities' && (
          <BookActivitiesView
            onAddStars={handleAddStars}
          />
        )}

        {activeTab === 'stories' && (
          <StoriesTheaterView
            completedStories={completedStories}
            onCompleteStory={handleCompleteStory}
          />
        )}

        {activeTab === 'board' && (
          <WritingAndBlendingView
            onOpenTracing={(l) => setTracingLetter(l)}
            onAddStars={handleAddStars}
          />
        )}

        {activeTab === 'games' && (
          <GamesArenaView
            onRecordGame={handleRecordGame}
          />
        )}

        {activeTab === 'parents' && (
          <ParentsAndCertificateView
            childName={childName}
            stars={stars}
            masteredLetters={masteredLetters}
            completedStories={completedStories}
            gameScores={gameScores}
            onResetAll={handleResetAll}
          />
        )}
      </main>

      {/* Floating Audio Controller Bar (يظهر عندما يكون الشرح الصوتي شغالاً) */}
      {isSpeaking && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] sm:w-auto bg-slate-950/90 text-white backdrop-blur-md px-4 py-2.5 rounded-full shadow-2xl border-2 border-amber-300 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5">
          <div className="flex items-center gap-2.5">
            <div className="flex items-end gap-1 h-5">
              <span className="w-1 bg-amber-400 rounded-full animate-wave-1"></span>
              <span className="w-1 bg-amber-300 rounded-full animate-wave-2"></span>
              <span className="w-1 bg-amber-500 rounded-full animate-wave-3"></span>
            </div>
            <span className="text-xs font-black text-amber-200 whitespace-nowrap">
              جاري الشرح الصوتي الآن...
            </span>
          </div>

          <button
            onClick={() => speech.setMuted(true)}
            className="px-3.5 py-1.5 rounded-full bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-black text-xs flex items-center gap-1.5 shadow-md transition-all shrink-0"
            title="إيقاف الشرح الصوتي حتى تحريره (المؤثرات الصوتية تعمل)"
          >
            <span>🔇</span>
            <span>إيقاف الشرح</span>
          </button>
        </div>
      )}

      {/* Interactive Tracing Canvas Modal */}
      {tracingLetter && (
        <TracingCanvasModal
          letterObj={tracingLetter}
          onClose={() => setTracingLetter(null)}
          onComplete={handleMarkLetterMastered}
        />
      )}

      <footer className="bg-white border-t border-amber-200 py-5 mt-auto no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-bold">
          <div className="flex items-center gap-2">
            <img src={SCHOOL_INFO.logo} alt="Logo" className="w-7 h-7 rounded-lg object-contain" />
            <span className="text-blue-950 font-black">{SCHOOL_INFO.nameAr} ({SCHOOL_INFO.nameEn})</span>
          </div>
          <div>
            <span>منصة تواصل التفاعلية للغة العربية • رياض الأطفال مستوى أول (KG1 - الفصل الدراسي الأول)</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
