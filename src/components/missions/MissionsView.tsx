import React, { useState } from 'react';
import { MISSIONS_DATA } from '../../data/missionsData';
import { QUESTION_BANK } from '../../data/questionBank';
import { StudentProfile } from '../../types';
import { BeSaoMascot } from '../common/BeSaoMascot';
import { sound } from '../../utils/storage';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  ShieldAlert, 
  Sparkles,
  BookOpen,
  Check,
  ChevronRight
} from 'lucide-react';

interface MissionsViewProps {
  student: StudentProfile;
  initialMissionId?: number;
  onUpdateStudent: (updated: StudentProfile) => void;
}

export const MissionsView: React.FC<MissionsViewProps> = ({
  student,
  initialMissionId = 1,
  onUpdateStudent,
}) => {
  const [activeMissionId, setActiveMissionId] = useState<number>(initialMissionId);
  const [activeTab, setActiveTab] = useState<'theory' | 'scenario' | 'sorting' | 'quiz'>('theory');

  // Scenario decision state
  const [scenarioAnswered, setScenarioAnswered] = useState<number | null>(null);

  // Sorting activity state
  const [sortingAnswers, setSortingAnswers] = useState<Record<number, 'A' | 'B'>>({});

  // Quiz state
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isOptionSubmitted, setIsOptionSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const mission = MISSIONS_DATA.find((m) => m.id === activeMissionId) || MISSIONS_DATA[0];
  const missionQuestions = QUESTION_BANK.filter((q) => q.missionId === activeMissionId);

  const handleSelectMission = (id: number) => {
    sound.playClick();
    setActiveMissionId(id);
    setActiveTab('theory');
    setScenarioAnswered(null);
    setSortingAnswers({});
    resetQuiz();
  };

  const resetQuiz = () => {
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setIsOptionSubmitted(false);
    setQuizScore(0);
    setIsQuizFinished(false);
  };

  const handleScenarioChoice = (idx: number) => {
    setScenarioAnswered(idx);
    const choice = mission.scenario.choices[idx];
    if (choice.isSafe) {
      sound.playSuccess();
    } else {
      sound.playWarning();
    }
  };

  const handleSortItem = (idx: number, category: 'A' | 'B') => {
    sound.playClick();
    setSortingAnswers((prev) => ({ ...prev, [idx]: category }));
  };

  const handleQuizAnswer = () => {
    if (selectedOption === null) return;
    setIsOptionSubmitted(true);
    const currentQ = missionQuestions[currentQuizIdx];
    if (selectedOption === currentQ.correctIndex) {
      sound.playSuccess();
      setQuizScore((prev) => prev + 1);
    } else {
      sound.playWarning();
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIdx < missionQuestions.length - 1) {
      setCurrentQuizIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsOptionSubmitted(false);
    } else {
      // Quiz finished
      setIsQuizFinished(true);
      const finalScore = selectedOption === missionQuestions[currentQuizIdx].correctIndex ? quizScore + 1 : quizScore;
      
      // If score >= 7/10, award mission badge
      if (finalScore >= 7 && !student.completedMissions.includes(activeMissionId)) {
        sound.playCheer();
        const updatedMissions = [...student.completedMissions, activeMissionId];
        const updatedBadges = [...student.badgesEarned];
        if (!updatedBadges.includes(mission.badgeName)) {
          updatedBadges.push(mission.badgeName);
        }
        onUpdateStudent({
          ...student,
          completedMissions: updatedMissions,
          badgesEarned: updatedBadges,
          quizScores: {
            ...student.quizScores,
            [`m${activeMissionId}`]: Math.round((finalScore / missionQuestions.length) * 100),
          },
        });
      }
    }
  };

  const isCompleted = student.completedMissions.includes(activeMissionId);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* 6 Mission Selector Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {MISSIONS_DATA.map((m) => {
            const isDone = student.completedMissions.includes(m.id);
            const isCurrent = m.id === activeMissionId;

            return (
              <button
                key={m.id}
                onClick={() => handleSelectMission(m.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isCurrent
                    ? 'bg-sky-500 text-white shadow-md'
                    : isDone
                    ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>Nhiệm vụ {m.id}</span>
                {isDone && <CheckCircle2 className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-emerald-600'}`} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Mission Header */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-200">
              <span className="px-2.5 py-0.5 rounded-md bg-white/20">Thời lượng: {mission.estimatedMinutes} phút</span>
              <span>·</span>
              <span className="text-amber-300 font-bold">Huy hiệu: {mission.badgeName}</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black">{mission.title}</h1>
            <p className="text-xs sm:text-sm text-sky-100 italic">{mission.slogan}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {isCompleted ? (
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/30 border border-emerald-400/50 rounded-xl text-emerald-200 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Đã Hoàn Thành</span>
              </div>
            ) : (
              <div className="text-xs font-semibold px-3 py-1.5 bg-amber-400/20 text-amber-200 rounded-xl">
                Cần đạt $\ge 7/10$ câu hỏi để nhận huy hiệu
              </div>
            )}
            <BeSaoMascot mood={isCompleted ? 'cheering' : 'happy'} size="sm" />
          </div>
        </div>

        {/* Learning Goals Pills */}
        <div className="mt-6 pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-sky-100">
          {mission.learningGoals.map((goal, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation Inside Active Mission */}
      <div className="flex border-b border-slate-200 gap-2">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('theory');
          }}
          className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'theory'
              ? 'border-sky-600 text-sky-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          1. Bài Học Trực Quan
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('scenario');
          }}
          className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'scenario'
              ? 'border-sky-600 text-sky-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          2. Xử Lý Tình Huống
        </button>
        {mission.sortingActivity && (
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('sorting');
            }}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'sorting'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            3. Phân Loại Tương Tác
          </button>
        )}
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('quiz');
          }}
          className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'quiz'
              ? 'border-sky-600 text-sky-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          {mission.sortingActivity ? '4.' : '3.'} Thử Thách 10 Câu Hỏi
        </button>
      </div>

      {/* TAB 1: THEORY */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {mission.sections.map((sec, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900">{sec.title}</h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {sec.tips && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-medium">
                  {sec.tips}
                </div>
              )}

              {sec.warning && (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-900 font-medium">
                  {sec.warning}
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-end">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('scenario');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              <span>Tiếp Theo: Xử Lý Tình Huống</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: SCENARIO */}
      {activeTab === 'scenario' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{mission.scenario.title}</span>
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {mission.scenario.situation}
            </p>
            <p className="text-xs text-slate-600 font-medium italic">
              {mission.scenario.context}
            </p>
          </div>

          <div className="space-y-3">
            {mission.scenario.choices.map((choice, cIdx) => {
              const isSelected = scenarioAnswered === cIdx;
              return (
                <div key={cIdx} className="space-y-2">
                  <button
                    onClick={() => handleScenarioChoice(cIdx)}
                    className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                      isSelected
                        ? choice.isSafe
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold'
                          : 'border-rose-500 bg-rose-50 text-rose-900 font-bold'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {String.fromCharCode(65 + cIdx)}
                      </span>
                      <span>{choice.text}</span>
                    </div>
                  </button>

                  {isSelected && (
                    <div
                      className={`p-3 rounded-xl text-xs leading-relaxed ${
                        choice.isSafe
                          ? 'bg-emerald-100/70 text-emerald-900'
                          : 'bg-rose-100/70 text-rose-900'
                      }`}
                    >
                      <span className="font-bold">
                        {choice.isSafe ? '✅ Lựa chọn an toàn! ' : '⚠️ Cảnh báo nguy cơ: '}
                      </span>
                      {choice.feedback}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {scenarioAnswered !== null && (
            <div className="bg-sky-50 border border-sky-200 p-4 rounded-xl text-xs font-semibold text-sky-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
              <span>{mission.scenario.safeActionGuide}</span>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveTab('theory')}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              ← Xem lại lý thuyết
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab(mission.sortingActivity ? 'sorting' : 'quiz');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              <span>{mission.sortingActivity ? 'Tiếp Theo: Phân Loại' : 'Tiếp Theo: Thử Thách 10 Câu'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: SORTING ACTIVITY (if available) */}
      {activeTab === 'sorting' && mission.sortingActivity && (() => {
        const sortingAct = mission.sortingActivity;
        return (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Trò Chơi Phân Loại Nhanh</h3>
              <p className="text-xs text-slate-500 mt-1">{sortingAct.instruction}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortingAct.items.map((item, idx) => {
                const userChoice = sortingAnswers[idx];
                const isAnswered = userChoice !== undefined;
                const isCorrect = userChoice === item.category;

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      !isAnswered
                        ? 'border-slate-200 bg-slate-50/50'
                        : isCorrect
                        ? 'border-emerald-300 bg-emerald-50/40'
                        : 'border-rose-300 bg-rose-50/40'
                    }`}
                  >
                    <p className="text-xs font-bold text-slate-800 mb-3">{item.text}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSortItem(idx, 'A')}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-colors ${
                          userChoice === 'A'
                            ? isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                            : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {sortingAct.categoryA}
                      </button>
                      <button
                        onClick={() => handleSortItem(idx, 'B')}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-colors ${
                          userChoice === 'B'
                            ? isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                            : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {sortingAct.categoryB}
                      </button>
                    </div>
                  {isAnswered && (
                    <div className="mt-2 text-[11px] text-slate-600 pt-1.5 border-t border-slate-200/50">
                      <span className="font-bold">{isCorrect ? '✅ Đúng: ' : '💡 Giải thích: '}</span>
                      {item.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveTab('scenario')}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              ← Xem lại tình huống
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('quiz');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              <span>Vào Làm Bài Thử Thách 10 Câu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      );
    })()}

      {/* TAB 4: 10-QUESTION MINI QUIZ */}
      {activeTab === 'quiz' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          {!isQuizFinished ? (
            <>
              {/* Question Header */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-sky-600">
                  Câu hỏi {currentQuizIdx + 1} / {missionQuestions.length}
                </span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-semibold">
                  Mức độ: {missionQuestions[currentQuizIdx]?.level}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-sky-500 h-full transition-all"
                  style={{ width: `${((currentQuizIdx + 1) / missionQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                {missionQuestions[currentQuizIdx]?.question}
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {missionQuestions[currentQuizIdx]?.options.map((opt, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = optIdx === missionQuestions[currentQuizIdx].correctIndex;

                  let optClass = 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50';
                  if (isOptionSubmitted) {
                    if (isCorrect) {
                      optClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                    } else if (isSelected) {
                      optClass = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                    } else {
                      optClass = 'border-slate-100 bg-slate-50/50 text-slate-400';
                    }
                  } else if (isSelected) {
                    optClass = 'border-sky-500 bg-sky-50 text-sky-900 font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isOptionSubmitted}
                      onClick={() => {
                        sound.playClick();
                        setSelectedOption(optIdx);
                      }}
                      className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm border transition-all ${optClass}`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation on submit */}
              {isOptionSubmitted && (
                <div
                  className={`p-4 rounded-xl text-xs leading-relaxed ${
                    selectedOption === missionQuestions[currentQuizIdx].correctIndex
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border border-amber-200 text-amber-900'
                  }`}
                >
                  <div className="font-bold mb-1">
                    {selectedOption === missionQuestions[currentQuizIdx].correctIndex
                      ? '🎉 Hoan hô! Em đã trả lời đúng.'
                      : '💡 Bài học cần nhớ:'}
                  </div>
                  <div>{missionQuestions[currentQuizIdx].explanation}</div>
                </div>
              )}

              {/* Quiz Footer Button */}
              <div className="flex justify-end pt-2">
                {!isOptionSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleQuizAnswer}
                    className="px-6 py-2.5 bg-sky-600 disabled:opacity-50 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Kiểm Tra Đáp Án
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuizQuestion}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-extrabold rounded-xl transition-colors"
                  >
                    <span>
                      {currentQuizIdx < missionQuestions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả Thử Thách'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl shadow-sm">
                🏆
              </div>

              <h3 className="text-xl font-black text-slate-900">
                {quizScore >= 7 ? 'Xuất Sắc! Em Đã Vượt Qua Nhiệm Vụ!' : 'Cố Lên Nào! Em Có Thể Làm Tốt Hơn!'}
              </h3>

              <div className="text-2xl font-black text-sky-600 tabular-nums">
                {quizScore} / {missionQuestions.length} Điểm
              </div>

              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {quizScore >= 7
                  ? `Chúc mừng em đã nhận được Huy hiệu "${mission.badgeName}". Kiến thức số của em rất vững vàng!`
                  : 'Em chưa đạt mức 7 điểm để nhận huy hiệu. Đừng buồn nhé, hãy bấm làm lại để ôn tập kiến thức cùng Bé Sao AI!'}
              </p>

              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Làm Lại Thử Thách</span>
                </button>

                {quizScore >= 7 && activeMissionId < 6 && (
                  <button
                    onClick={() => handleSelectMission(activeMissionId + 1)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    <span>Sang Nhiệm Vụ Tiếp Theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
