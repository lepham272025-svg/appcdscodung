import React from 'react';
import { StudentProfile } from '../../types';
import { MISSIONS_DATA } from '../../data/missionsData';
import { sound } from '../../utils/storage';
import { 
  Award, 
  CheckCircle2, 
  Printer, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  School,
  Lock
} from 'lucide-react';

interface AchievementsViewProps {
  student: StudentProfile;
  onOpenSurvey: () => void;
}

export const AchievementsView: React.FC<AchievementsViewProps> = ({
  student,
  onOpenSurvey,
}) => {
  const isEligibleForCert = student.completedMissions.length >= 6;

  const handlePrintCertificate = () => {
    sound.playClick();
    window.print();
  };

  const skillBars = [
    { label: 'Hiểu biết & Giới hạn AI', percent: student.completedMissions.includes(1) ? 95 : 40 },
    { label: 'Lá chắn Bảo mật Thông tin', percent: student.completedMissions.includes(2) ? 98 : 45 },
    { label: 'Thám tử Nhận diện Tin giả', percent: student.completedMissions.includes(3) ? 92 : 35 },
    { label: 'Dũng sĩ Phòng chống Lừa đảo', percent: student.completedMissions.includes(4) ? 96 : 38 },
    { label: 'Ứng xử văn minh (Anti-Bullying)', percent: student.completedMissions.includes(5) ? 94 : 50 },
    { label: 'Trách nhiệm & Cân bằng số', percent: student.completedMissions.includes(6) ? 98 : 40 },
  ];

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Header (No print) */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md no-print">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-amber-100">
            <Award className="w-3.5 h-3.5" />
            <span>Hồ Sơ Năng Lực Số Học Sinh</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">Thành Tích Của Em</h1>
          <p className="text-xs sm:text-sm text-amber-100 max-w-xl">
            Theo dõi huy hiệu thu thập được, kỹ năng làm chủ công nghệ và nhận Chứng nhận Công dân số nhí!
          </p>
        </div>

        <div className="text-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shrink-0">
          <div className="text-xs font-semibold text-amber-100">Mã định danh</div>
          <div className="text-2xl font-black text-white">{student.id}</div>
          <div className="text-[11px] text-amber-200 mt-0.5">Lớp 5/1 · Sóc Sơn</div>
        </div>
      </div>

      {/* 6 Badges Showcase (No print) */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 no-print">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Bộ Sưu Tập Huy Hiệu Công Dân Số</h2>
          <p className="text-xs text-slate-500">
            Hoàn thành mỗi nhiệm vụ để mở khóa huy hiệu danh dự tương ứng!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {MISSIONS_DATA.map((m) => {
            const hasBadge = student.badgesEarned.includes(m.badgeName);

            return (
              <div
                key={m.id}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between ${
                  hasBadge
                    ? 'border-amber-300 bg-amber-50/50 shadow-sm'
                    : 'border-slate-200 bg-slate-50/50 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-2 shadow-xs ${
                    hasBadge ? 'bg-amber-400 text-slate-900' : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {hasBadge ? '⭐' : <Lock className="w-5 h-5 text-slate-400" />}
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">
                    Nhiệm vụ {m.id}
                  </div>
                  <div className="text-xs font-bold text-slate-800 line-clamp-2 mt-0.5">
                    {m.badgeName}
                  </div>
                </div>

                <div className="mt-2 text-[10px] font-bold">
                  {hasBadge ? (
                    <span className="text-emerald-600 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Đã đạt</span>
                    </span>
                  ) : (
                    <span className="text-slate-400">Chưa mở khóa</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills Mastery Breakdown (No print) */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 no-print">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Bảng Đo Lường Kỹ Năng Số</h2>
          <p className="text-xs text-slate-500">
            Mức độ thuần thục 6 nhóm kỹ năng dựa trên kết quả nhiệm vụ và trò chơi:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillBars.map((sk, idx) => (
            <div key={idx} className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>{sk.label}</span>
                <span className="text-sky-600 tabular-nums">{sk.percent}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-sky-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${sk.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High Scores Summary (No print) */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 no-print">
        <h2 className="text-lg font-bold text-slate-900">Kỷ Lục Tại Đấu Trường Trò Chơi</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          {[
            { label: 'Ai Nhanh Hơn', key: 'speed' },
            { label: 'Đúng Hay Sai', key: 'true_false' },
            { label: 'Thám Tử Mạng', key: 'detective' },
            { label: 'Kéo Thả An Toàn', key: 'safe_sort' },
            { label: 'Vượt Chướng Ngại', key: 'obstacle' },
            { label: 'Giải Cứu Bé Sao', key: 'rescue_besao' },
          ].map((g, idx) => (
            <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <div className="text-[11px] font-semibold text-slate-500">{g.label}</div>
              <div className="text-base font-black text-amber-600 mt-1 tabular-nums">
                {student.gameHighScores[g.key] || 0}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Certificate Section (Printable!) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between no-print">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Chứng Nhận Vinh Dự</h2>
            <p className="text-xs text-slate-500">
              {isEligibleForCert
                ? 'Em đã hoàn thành xuất sắc toàn bộ 6 nhiệm vụ! Bấm in chứng nhận để lưu giữ.'
                : 'Hoàn thành đủ 6 nhiệm vụ để mở khóa và in Chứng nhận chính thức!'}
            </p>
          </div>
          {isEligibleForCert && (
            <button
              onClick={handlePrintCertificate}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-xs rounded-xl shadow-md transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>In Bản Chứng Nhận</span>
            </button>
          )}
        </div>

        {/* Certificate Frame */}
        <div
          id="printable-certificate"
          className="relative bg-gradient-to-br from-amber-50/70 via-white to-sky-50/70 border-8 border-double border-amber-500 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 overflow-hidden"
        >
          {/* Watermark Laurel Motif */}
          <div className="text-center space-y-1">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
              TRƯỜNG TIỂU HỌC SÓC SƠN · XÃ MỸ THUẬN, TỈNH AN GIANG
            </div>
            <div className="text-sm font-extrabold uppercase tracking-wide text-slate-800">
              LỚP 5/1 · NĂM HỌC 2025 - 2026
            </div>
          </div>

          <div className="w-20 h-0.5 bg-amber-400 mx-auto" />

          {/* Certificate Title */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-4xl font-black text-amber-800 tracking-tight uppercase">
              CHỨNG NHẬN CÔNG DÂN SỐ NHÍ
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 italic">
              Đạt chuẩn năng lực: Sử dụng Trí tuệ nhân tạo (AI) An toàn và Có trách nhiệm
            </p>
          </div>

          {/* Recipient */}
          <div className="py-2 space-y-1">
            <div className="text-xs text-slate-500 font-medium">Chứng nhận trao tặng học sinh:</div>
            <div className="text-xl sm:text-2xl font-black text-sky-700 underline decoration-amber-400 decoration-2 underline-offset-4">
              Mã định danh: {student.id} (Lớp 5/1)
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
            Đã hoàn thành xuất sắc 6 nhiệm vụ rèn luyện kỹ năng số, bảo vệ thông tin cá nhân, nhận diện tin giả, phòng chống lừa đảo trực tuyến và thực hiện tốt 5 nguyên tắc sử dụng AI văn minh.
          </p>

          {/* Golden Seal & Signatures */}
          <div className="pt-6 grid grid-cols-2 items-end text-xs text-slate-600">
            <div className="text-left space-y-1">
              <div className="w-16 h-16 rounded-full border-4 border-amber-400 bg-amber-100 flex items-center justify-center font-black text-2xl text-amber-700 shadow-sm">
                ⭐
              </div>
              <div className="text-[11px] font-bold text-amber-800">DẤU CHỨNG THỰC LỚP 5/1</div>
              <div className="text-[10px] text-slate-400">Đã kiểm tra hồ sơ đạt chuẩn</div>
            </div>

            <div className="text-right space-y-1">
              <div className="text-[11px] text-slate-500">
                Mỹ Thuận, ngày {new Date().toLocaleDateString('vi-VN')}
              </div>
              <div className="font-bold text-slate-800 text-sm">GIÁO VIÊN HƯỚNG DẪN</div>
              <div className="h-10 flex items-center justify-end">
                <span className="font-serif italic text-base font-bold text-sky-800">
                  Trần Thị Kim Dung
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-700">Cô Trần Thị Kim Dung</div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-900/10 text-[10px] text-slate-400 italic">
            “Thông minh khi sử dụng AI – An toàn trong thế giới số – Trách nhiệm với cộng đồng”
          </div>
        </div>
      </section>
    </div>
  );
};
