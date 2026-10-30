import React from 'react';
import { NavTab, StudentProfile } from '../../types';
import { BeSaoMascot } from '../common/BeSaoMascot';
import { MISSIONS_DATA } from '../../data/missionsData';
import { 
  ShieldCheck, 
  Bot, 
  Gamepad2, 
  MessageSquare, 
  Palette, 
  Award, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  BookOpen,
  School
} from 'lucide-react';
import { sound } from '../../utils/storage';

interface HomeViewProps {
  onNavigate: (tab: NavTab) => void;
  onSelectMission: (missionId: number) => void;
  student: StudentProfile;
  onOpenSurvey: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectMission,
  student,
  onOpenSurvey,
}) => {
  const completedCount = student.completedMissions.length;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-700 text-white p-6 sm:p-10 lg:p-12 shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            {/* School & Class Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide text-sky-100">
              <School className="w-3.5 h-3.5 text-amber-300" />
              <span>Trường Tiểu học Sóc Sơn · Lớp 5/1 · Xã Mỹ Thuận, Tỉnh An Giang</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-balance">
              CÔNG DÂN SỐ NHÍ
            </h1>
            
            <p className="text-base sm:text-xl font-medium text-sky-100 italic">
              “Thông minh khi sử dụng AI – An toàn trong thế giới số – Trách nhiệm với cộng đồng.”
            </p>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
              Chào mừng bạn đến với thế giới học tập số dành riêng cho học sinh lớp 5! Hãy cùng bạn robot <span className="font-bold text-amber-300">Bé Sao AI</span> vượt qua 6 nhiệm vụ kỳ thú, rèn luyện tư duy phản biện, làm chủ công nghệ và trở thành công dân số gương mẫu.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('missions');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Bắt Đầu Hành Trình</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('games');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold text-sm transition-all"
              >
                <Gamepad2 className="w-4 h-4 text-emerald-300" />
                <span>Đấu Trường Trò Chơi</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenSurvey();
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-purple-500/30 hover:bg-purple-500/40 text-purple-100 font-semibold text-xs transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Làm Khảo Sát Kỹ Năng</span>
              </button>
            </div>
          </div>

          {/* Hero Mascot Zone */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-inner max-w-xs">
              <BeSaoMascot
                mood="cheering"
                size="lg"
                bubbleText="Xin chào bạn nhỏ lớp 5/1! Mình là Bé Sao AI, sẵn sàng cùng bạn khám phá thế giới số nhé!"
              />
              <div className="mt-4 pt-3 border-t border-white/15 text-xs text-sky-100 font-semibold">
                Giáo viên hướng dẫn: Cô Trần Thị Kim Dung
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Progress Overview Strip */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold text-lg">
              {student.id}
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">Tiến độ công dân số</div>
              <div className="text-base font-bold text-slate-800">
                Đã hoàn thành: <span className="text-emerald-600 tabular-nums">{completedCount}</span> / 6 nhiệm vụ
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full sm:w-64 bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-500 rounded-full"
              style={{ width: `${(completedCount / 6) * 100}%` }}
            />
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('achievements');
            }}
            className="text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline shrink-0"
          >
            Xem chứng nhận & huy hiệu →
          </button>
        </div>
      </section>

      {/* 6 Missions Journey Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Lộ Trình Học Tập</div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Sáu Nhiệm Vụ Công Dân Số Nhí
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Mỗi nhiệm vụ gồm lý thuyết trực quan, tình huống đạo đức số, trò chơi tương tác và thử thách câu hỏi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MISSIONS_DATA.map((mission) => {
            const isCompleted = student.completedMissions.includes(mission.id);

            return (
              <div
                key={mission.id}
                onClick={() => {
                  sound.playClick();
                  onSelectMission(mission.id);
                  onNavigate('missions');
                }}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-sky-300 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                {isCompleted && (
                  <div className="absolute top-4 right-4 text-emerald-500 flex items-center gap-1 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Đã đạt</span>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-sky-100 text-slate-700 group-hover:text-sky-600 flex items-center justify-center font-bold transition-colors">
                    {mission.id === 1 && <Bot className="w-5 h-5" />}
                    {mission.id === 2 && <ShieldCheck className="w-5 h-5" />}
                    {mission.id === 3 && <BookOpen className="w-5 h-5" />}
                    {mission.id === 4 && <ShieldCheck className="w-5 h-5" />}
                    {mission.id === 5 && <Sparkles className="w-5 h-5" />}
                    {mission.id === 6 && <Award className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Nhiệm vụ {mission.id} · {mission.estimatedMinutes} phút
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mt-0.5 line-clamp-1">
                      {mission.title.replace(`Nhiệm Vụ ${mission.id}: `, '')}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {mission.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-amber-700">
                    Huy hiệu: {mission.badgeName}
                  </span>
                  <span className="text-sky-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Khám phá →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Navigation Cards: 4 Pillars */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Explore */}
        <div
          onClick={() => {
            sound.playClick();
            onNavigate('explore');
          }}
          className="bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-2xl p-5 cursor-pointer transition-colors space-y-2"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center font-bold">
            💡
          </div>
          <h4 className="text-sm font-bold text-slate-900">Khám Phá AI</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI học như thế nào? Ảo giác AI là gì? Cách dùng AI làm bài tập không phụ thuộc.
          </p>
        </div>

        {/* Card 2: Games */}
        <div
          onClick={() => {
            sound.playClick();
            onNavigate('games');
          }}
          className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-2xl p-5 cursor-pointer transition-colors space-y-2"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-400 text-slate-900 flex items-center justify-center font-bold">
            🎮
          </div>
          <h4 className="text-sm font-bold text-slate-900">Đấu Trường Kiến Thức</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            6 trò chơi: Ai nhanh hơn, Đúng hay Sai, Thám tử mạng, Giải cứu Bé Sao AI...
          </p>
        </div>

        {/* Card 3: Assistant */}
        <div
          onClick={() => {
            sound.playClick();
            onNavigate('assistant');
          }}
          className="bg-sky-50 hover:bg-sky-100 border border-sky-200/80 rounded-2xl p-5 cursor-pointer transition-colors space-y-2"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-400 text-white flex items-center justify-center font-bold">
            🤖
          </div>
          <h4 className="text-sm font-bold text-slate-900">Trợ Lý Bé Sao AI</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Hỏi đáp an toàn, giải đáp thắc mắc về công dân số bằng ngôn ngữ lớp 5.
          </p>
        </div>

        {/* Card 4: Creative */}
        <div
          onClick={() => {
            sound.playClick();
            onNavigate('creative');
          }}
          className="bg-purple-50 hover:bg-purple-100 border border-purple-200/80 rounded-2xl p-5 cursor-pointer transition-colors space-y-2"
        >
          <div className="w-8 h-8 rounded-lg bg-purple-400 text-white flex items-center justify-center font-bold">
            🎨
          </div>
          <h4 className="text-sm font-bold text-slate-900">Góc Sáng Tạo & Poster</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tự thiết kế poster 5 điều em nhớ khi dùng AI, viết bản cam kết và in chứng nhận.
          </p>
        </div>
      </section>
    </div>
  );
};
