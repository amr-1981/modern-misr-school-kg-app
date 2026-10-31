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

export default function App() {
  const [activeTab, setActiveTab] = useState('letters');
  const [childName, setChildName] = useState(storageService.getChildName());
  const [stars, setStars] = useState(storageService.getStars());
  const [masteredLetters, setMasteredLetters] = useState(storageService.getMasteredLetters());
  const [completedStories, setCompletedStories] = useState(storageService.getCompletedStories());
  const [gameScores, setGameScores] = useState(storageService.getGameScores());
  const [tracingLetter, setTracingLetter] = useState(null);

  const refreshData = () => {
    setChildName(storageService.getChildName());
    setStars(storageService.getStars());
    setMasteredLetters(storageService.getMasteredLetters());
    setCompletedStories(storageService.getCompletedStories());
    setGameScores(storageService.getGameScores());
  };

  useEffect(() => {
    refreshData();
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
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800">
      
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        childName={childName}
        stars={stars}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
