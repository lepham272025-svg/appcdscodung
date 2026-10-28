import React, { useState } from 'react';
import { NavTab, StudentProfile } from '../../types';
import { sound, loadSoundSetting, saveSoundSetting } from '../../utils/storage';
import { 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Sparkles,
  UserCheck
} from 'lucide-react';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  student: StudentProfile;
  onChangeStudentId: (id: string) => void;
  onOpenSurvey: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  student,
  onChangeStudentId,
  onOpenSurvey,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(loadSoundSetting());
  const [isSwitchingStudent, setIsSwitchingStudent] = useState(false);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    saveSoundSetting(next);
    if (next) sound.playClick();
  };

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'explore', label: 'Khám phá AI' },
    { id: 'missions', label: 'Sáu nhiệm vụ' },
    { id: 'games', label: 'Đấu trường' },
    { id: 'assistant', label: 'Bé Sao AI' },
    { id: 'creative', label: 'Góc sáng tạo' },
    { id: 'achievements', label: 'Thành tích' },
    { id: 'teacher', label: 'Góc giáo viên' },
  ];

  const handleTabClick = (tab: NavTab) => {
    sound.playClick();
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-2 text-left group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              ⭐
            </div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
              Công Dân Số Nhí <span className="text-sky-600 font-semibold text-sm hidden sm:inline">| Lớp 5/1</span>
            </span>
          </button>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Student Badge & Primary Quick Action */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundOn ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng'}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-sky-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Student ID Badge & Selector */}
            <div className="relative">
              <button
                onClick={() => setIsSwitchingStudent(!isSwitchingStudent)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 whitespace-nowrap transition-colors"
                title="Bấm để đổi mã học sinh"
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{student.id}</span>
              </button>

              {/* Student Switcher Dropdown */}
              {isSwitchingStudent && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50">
                  <div className="text-xs font-bold text-slate-400 px-2 py-1 uppercase tracking-wider">
                    Chọn mã học sinh Lớp 5/1
                  </div>
                  <div className="max-h-48 overflow-y-auto space-y-0.5">
                    {Array.from({ length: 40 }).map((_, i) => {
                      const idStr = `HS${String(i + 1).padStart(2, '0')}`;
                      return (
                        <button
                          key={idStr}
                          onClick={() => {
                            onChangeStudentId(idStr);
                            setIsSwitchingStudent(false);
                            sound.playSuccess();
                          }}
                          className={`w-full text-left px-2 py-1 text-xs rounded-md ${
                            student.id === idStr
                              ? 'bg-sky-500 text-white font-bold'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {idStr} {student.id === idStr ? '✓' : ''}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Survey Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenSurvey();
              }}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg shadow-sm whitespace-nowrap transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Khảo sát</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
                currentTab === item.id
                  ? 'bg-sky-50 text-sky-700 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenSurvey();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2 bg-amber-500 text-white font-bold text-sm rounded-lg"
            >
              Khảo sát kỹ năng số
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
