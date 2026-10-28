import React, { useState } from 'react';
import { PRE_POST_SURVEY_QUESTIONS } from '../../data/questionBank';
import { StudentProfile } from '../../types';
import { sound } from '../../utils/storage';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Compass,
  Award
} from 'lucide-react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentProfile;
  onUpdateStudent: (updated: StudentProfile) => void;
  onNavigateToMission: (missionId: number) => void;
}

export const SurveyModal: React.FC<SurveyModalProps> = ({
  isOpen,
  onClose,
  student,
  onUpdateStudent,
  onNavigateToMission,
}) => {
  const [surveyType, setSurveyType] = useState<'pre' | 'post'>(
    student.preTestScore === undefined ? 'pre' : 'post'
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const questions = PRE_POST_SURVEY_QUESTIONS;
  const currentQ = questions[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    sound.playClick();
    setSelectedAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      // Calculate score
      let correct = 0;
      questions.forEach((q, i) => {
        if (selectedAnswers[i] === q.correctIndex) {
          correct += 1;
        }
      });

      setIsFinished(true);
      sound.playCheer();

      if (surveyType === 'pre') {
        onUpdateStudent({
          ...student,
          preTestScore: correct,
        });
      } else {
        onUpdateStudent({
          ...student,
          postTestScore: correct,
        });
      }
    }
  };

  // Analyze weaknesses
  const getWeaknessRecommendations = () => {
    const wrongDomainCounts: Record<string, number> = {};
    questions.forEach((q, i) => {
      if (selectedAnswers[i] !== q.correctIndex) {
        wrongDomainCounts[q.skillDomain] = (wrongDomainCounts[q.skillDomain] || 0) + 1;
      }
    });

    const domainToMission: Record<string, { missionId: number; name: string }> = {
      'Hiểu biết AI': { missionId: 1, name: 'Nhiệm Vụ 1: AI Là Người Bạn Thông Minh' },
      'An toàn thông tin': { missionId: 2, name: 'Nhiệm Vụ 2: Lá Chắn Thông Tin Cá Nhân' },
      'Nhận diện tin giả': { missionId: 3, name: 'Nhiệm Vụ 3: Thám Tử Tin Giả' },
      'Phòng chống lừa đảo': { missionId: 4, name: 'Nhiệm Vụ 4: Dũng Sĩ Chống Lừa Đảo' },
      'Ứng xử văn minh': { missionId: 5, name: 'Nhiệm Vụ 5: Ứng Xử Văn Minh Trên Mạng' },
      'Trách nhiệm số': { missionId: 6, name: 'Nhiệm Vụ 6: Em Là Công Dân Số Có Trách Nhiệm' },
    };

    const recommendedMissions: { missionId: number; name: string; domain: string }[] = [];
    Object.keys(wrongDomainCounts).forEach((domain) => {
      if (domainToMission[domain]) {
        recommendedMissions.push({
          ...domainToMission[domain],
          domain,
        });
      }
    });

    return recommendedMissions.length > 0
      ? recommendedMissions.slice(0, 2)
      : [{ missionId: 1, name: 'Nhiệm Vụ 1: AI Là Người Bạn Thông Minh', domain: 'Tổng quan' }];
  };

  const currentScore = Object.keys(selectedAnswers).reduce((acc, idxStr) => {
    const i = Number(idxStr);
    return selectedAnswers[i] === questions[i].correctIndex ? acc + 1 : acc;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <div>
              <h2 className="text-sm sm:text-base font-bold">
                Khảo Sát Năng Lực Số (15 Câu Hỏi Tiêu Chuẩn)
              </h2>
              <div className="text-[11px] text-sky-200">
                Học sinh: {student.id} · Lớp 5/1 TH Sóc Sơn
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Survey Mode Toggle */}
        {!isFinished && (
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSurveyType('pre');
                  setCurrentIdx(0);
                  setSelectedAnswers({});
                  setIsFinished(false);
                }}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  surveyType === 'pre'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white border border-slate-300 text-slate-700'
                }`}
              >
                Khảo sát đầu vào (Pre-Test)
              </button>
              <button
                onClick={() => {
                  setSurveyType('post');
                  setCurrentIdx(0);
                  setSelectedAnswers({});
                  setIsFinished(false);
                }}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  surveyType === 'post'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white border border-slate-300 text-slate-700'
                }`}
              >
                Khảo sát đầu ra (Post-Test)
              </button>
            </div>

            <span className="font-semibold text-slate-500">
              Câu {currentIdx + 1} / {questions.length}
            </span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!isFinished ? (
            <>
              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-sky-500 h-full transition-all"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Skill Domain Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 text-sky-700 rounded-md text-[11px] font-bold">
                <Compass className="w-3.5 h-3.5" />
                <span>Nhóm kỹ năng: {currentQ.skillDomain}</span>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                {currentQ.question}
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[currentIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm border transition-all ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50 text-sky-900 font-bold'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-bold mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            /* Finished Summary & AI Recommendations */
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl shadow-sm">
                🎯
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Hoàn Thành {surveyType === 'pre' ? 'Khảo Sát Đầu Vào' : 'Khảo Sát Sau Triển Khai'}!
                </h3>
                <div className="text-3xl font-black text-emerald-600 mt-2 tabular-nums">
                  {currentScore} / {questions.length} Điểm
                </div>
              </div>

              {/* Pre vs Post Comparison if both exist */}
              {student.preTestScore !== undefined && surveyType === 'post' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 font-medium">
                  📈 <strong>Tiến bộ vượt bậc:</strong> Điểm số của em đã tăng từ{' '}
                  <span className="font-bold">{student.preTestScore}/15</span> lên{' '}
                  <span className="font-bold text-emerald-700">{currentScore}/15</span>! Chúc mừng em!
                </div>
              )}

              {/* AI Recommendations */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-left space-y-3">
                <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Bé Sao AI đề xuất lộ trình luyện tập cho em:</span>
                </div>
                <div className="space-y-2">
                  {getWeaknessRecommendations().map((rec, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 text-xs"
                    >
                      <div>
                        <div className="font-bold text-slate-800">{rec.name}</div>
                        <div className="text-[11px] text-slate-500">Củng cố: {rec.domain}</div>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onNavigateToMission(rec.missionId);
                        }}
                        className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-[11px] rounded-lg"
                      >
                        Vào Học Ngay →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          {!isFinished ? (
            <>
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((i) => i - 1)}
                className="text-xs font-semibold text-slate-500 disabled:opacity-30 hover:text-slate-800"
              >
                ← Câu trước
              </button>

              <button
                disabled={selectedAnswers[currentIdx] === undefined}
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-sky-600 disabled:opacity-40 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
              >
                <span>{currentIdx < questions.length - 1 ? 'Câu Tiếp Theo' : 'Nộp Bài Khảo Sát'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <div className="w-full flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl hover:bg-slate-900 transition-colors"
              >
                Đóng Cửa Sổ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
