import React, { useState, useEffect } from 'react';
import { NavTab, StudentProfile } from './types';
import { loadCurrentStudent, saveCurrentStudent, sound } from './utils/storage';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomeView } from './components/home/HomeView';
import { ExploreAIView } from './components/explore/ExploreAIView';
import { MissionsView } from './components/missions/MissionsView';
import { GamesArenaView } from './components/games/GamesArenaView';
import { AssistantView } from './components/assistant/AssistantView';
import { CreativeStudioView } from './components/creative/CreativeStudioView';
import { AchievementsView } from './components/achievements/AchievementsView';
import { TeacherPortalView } from './components/teacher/TeacherPortalView';
import { SurveyModal } from './components/survey/SurveyModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [student, setStudent] = useState<StudentProfile>(loadCurrentStudent);
  const [selectedMissionId, setSelectedMissionId] = useState<number>(1);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleUpdateStudent = (updated: StudentProfile) => {
    setStudent(updated);
    saveCurrentStudent(updated);
  };

  const handleChangeStudentId = (newId: string) => {
    const updated: StudentProfile = {
      ...student,
      id: newId,
      name: `Học sinh ${newId.replace('HS', '')} (Lớp 5/1)`,
    };
    handleUpdateStudent(updated);
  };

  const handleSelectMissionFromHome = (missionId: number) => {
    setSelectedMissionId(missionId);
    setCurrentTab('missions');
  };

  const handleUpdateGameScore = (gameKey: string, score: number) => {
    const currentHigh = student.gameHighScores[gameKey] || 0;
    if (score > currentHigh) {
      const updated: StudentProfile = {
        ...student,
        gameHighScores: {
          ...student.gameHighScores,
          [gameKey]: score,
        },
      };
      handleUpdateStudent(updated);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        student={student}
        onChangeStudentId={handleChangeStudentId}
        onOpenSurvey={() => setIsSurveyOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={setCurrentTab}
            onSelectMission={handleSelectMissionFromHome}
            student={student}
            onOpenSurvey={() => setIsSurveyOpen(true)}
          />
        )}

        {currentTab === 'explore' && <ExploreAIView />}

        {currentTab === 'missions' && (
          <MissionsView
            student={student}
            initialMissionId={selectedMissionId}
            onUpdateStudent={handleUpdateStudent}
          />
        )}

        {currentTab === 'games' && (
          <GamesArenaView
            student={student}
            onUpdateScore={handleUpdateGameScore}
          />
        )}

        {currentTab === 'assistant' && <AssistantView />}

        {currentTab === 'creative' && (
          <CreativeStudioView
            student={student}
            onUpdateStudent={handleUpdateStudent}
          />
        )}

        {currentTab === 'achievements' && (
          <AchievementsView
            student={student}
            onOpenSurvey={() => setIsSurveyOpen(true)}
          />
        )}

        {currentTab === 'teacher' && <TeacherPortalView />}
      </main>

      {/* Footer */}
      <Footer />

      {/* 15 Questions Pre & Post Survey Modal */}
      <SurveyModal
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
        student={student}
        onUpdateStudent={handleUpdateStudent}
        onNavigateToMission={(mId) => {
          setSelectedMissionId(mId);
          setCurrentTab('missions');
        }}
      />
    </div>
  );
}
