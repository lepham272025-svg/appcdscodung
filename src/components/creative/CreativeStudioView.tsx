import React, { useState } from 'react';
import { StudentProfile } from '../../types';
import { sound } from '../../utils/storage';
import { 
  Palette, 
  Printer, 
  Save, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  Download
} from 'lucide-react';

interface CreativeStudioViewProps {
  student: StudentProfile;
  onUpdateStudent: (updated: StudentProfile) => void;
}

export const CreativeStudioView: React.FC<CreativeStudioViewProps> = ({
  student,
  onUpdateStudent,
}) => {
  const existing = student.creativePoster;

  const [bgTheme, setBgTheme] = useState(existing?.bgTheme || 'sky');
  const [posterTitle, setPosterTitle] = useState(
    existing?.title || '5 ĐIỀU EM NHỚ KHI SỬ DỤNG AI'
  );
  const [slogan, setSlogan] = useState(
    'Thông minh khi sử dụng AI – An toàn trong thế giới số – Trách nhiệm với cộng đồng'
  );
  const [rule1, setRule1] = useState(
    existing?.rules[0] || '1. Không chia sẻ mật khẩu, địa chỉ và thông tin riêng tư.'
  );
  const [rule2, setRule2] = useState(
    existing?.rules[1] || '2. Luôn kiểm chứng thông tin từ AI với sách giáo khoa và cô giáo.'
  );
  const [rule3, setRule3] = useState(
    existing?.rules[2] || '3. Tự mình suy nghĩ và viết bài, không sao chép nguyên văn AI.'
  );
  const [rule4, setRule4] = useState(
    existing?.rules[3] || '4. Luôn giao tiếp lịch sự, nói lời tử tế và tôn trọng bản quyền.'
  );
  const [rule5, setRule5] = useState(
    existing?.rules[4] || '5. Khi gặp nguy hiểm hoặc link lạ, kể ngay cho cô giáo hoặc gọi 111.'
  );
  const [pledgeText, setPledgeText] = useState(
    existing?.pledgeText ||
      `Em là học sinh mã số ${student.id}, Lớp 5/1, Trường Tiểu học Sóc Sơn xin cam kết sử dụng công nghệ và trí tuệ nhân tạo một cách an toàn, trung thực và có trách nhiệm để trở thành công dân số ưu tú.`
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  const themeStyles: Record<string, { bg: string; text: string; border: string; accent: string }> = {
    sky: {
      bg: 'bg-gradient-to-br from-sky-50 via-white to-blue-100',
      text: 'text-sky-950',
      border: 'border-sky-300',
      accent: 'bg-sky-600 text-white',
    },
    amber: {
      bg: 'bg-gradient-to-br from-amber-50 via-white to-yellow-100',
      text: 'text-amber-950',
      border: 'border-amber-300',
      accent: 'bg-amber-500 text-slate-900',
    },
    emerald: {
      bg: 'bg-gradient-to-br from-emerald-50 via-white to-teal-100',
      text: 'text-emerald-950',
      border: 'border-emerald-300',
      accent: 'bg-emerald-600 text-white',
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50 via-white to-indigo-100',
      text: 'text-purple-950',
      border: 'border-purple-300',
      accent: 'bg-purple-600 text-white',
    },
  };

  const currentTheme = themeStyles[bgTheme] || themeStyles.sky;

  const handleSavePoster = () => {
    sound.playSuccess();
    const updatedPoster = {
      title: posterTitle,
      rules: [rule1, rule2, rule3, rule4, rule5],
      pledgeText,
      bgTheme,
      icon: 'star',
      createdDate: new Date().toLocaleDateString('vi-VN'),
    };

    onUpdateStudent({
      ...student,
      creativePoster: updatedPoster,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md no-print">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-purple-100">
            <Palette className="w-3.5 h-3.5" />
            <span>Xưởng Sáng Tạo Công Dân Số Lớp 5/1</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">Thiết Kế Poster & Bản Cam Kết</h1>
          <p className="text-xs sm:text-sm text-purple-100 max-w-xl">
            Tự tay sáng tạo áp phích tuyên truyền 5 nguyên tắc vàng sử dụng AI an toàn, ký lời cam kết và nộp vào phòng trưng bày lớp học!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-slate-800 font-bold text-xs rounded-xl shadow-md hover:bg-slate-100 transition-colors"
          >
            <Printer className="w-4 h-4 text-sky-600" />
            <span>In Bản Đẹp</span>
          </button>
          <button
            onClick={handleSavePoster}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-400 text-slate-900 font-extrabold text-xs rounded-xl shadow-md hover:bg-amber-300 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Lưu & Nộp Bài</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-2xl flex items-center gap-2 text-xs font-bold text-emerald-900 shadow-sm no-print">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Đã lưu poster và nộp thành công vào danh sách bài nộp lớp 5/1 cho cô Kim Dung!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Controls (Hidden in Print) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4 no-print">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Tùy Chỉnh Nội Dung</span>
          </h3>

          {/* Theme Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600">Chọn tông màu nền:</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'sky', label: 'Xanh Trời', color: 'bg-sky-400' },
                { id: 'amber', label: 'Vàng Nắng', color: 'bg-amber-400' },
                { id: 'emerald', label: 'Xanh Lá', color: 'bg-emerald-400' },
                { id: 'purple', label: 'Tím Sao', color: 'bg-purple-400' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    sound.playClick();
                    setBgTheme(t.id);
                  }}
                  className={`py-2 px-1 text-[11px] font-bold rounded-lg border transition-all flex flex-col items-center gap-1 ${
                    bgTheme === t.id ? 'border-slate-800 ring-2 ring-slate-800' : 'border-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full ${t.color}`} />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">Tiêu đề poster:</label>
            <input
              type="text"
              value={posterTitle}
              onChange={(e) => setPosterTitle(e.target.value)}
              className="w-full text-xs font-bold border border-slate-300 rounded-lg p-2 bg-slate-50"
            />
          </div>

          {/* Slogan */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">Khẩu hiệu:</label>
            <input
              type="text"
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2 bg-slate-50"
            />
          </div>

          {/* 5 Rules */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600">5 Nguyên tắc vàng:</label>
            <input
              type="text"
              value={rule1}
              onChange={(e) => setRule1(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-slate-50"
            />
            <input
              type="text"
              value={rule2}
              onChange={(e) => setRule2(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-slate-50"
            />
            <input
              type="text"
              value={rule3}
              onChange={(e) => setRule3(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-slate-50"
            />
            <input
              type="text"
              value={rule4}
              onChange={(e) => setRule4(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-slate-50"
            />
            <input
              type="text"
              value={rule5}
              onChange={(e) => setRule5(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-slate-50"
            />
          </div>

          {/* Pledge */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">Lời cam kết cá nhân:</label>
            <textarea
              rows={3}
              value={pledgeText}
              onChange={(e) => setPledgeText(e.target.value)}
              className="w-full text-xs border border-slate-300 rounded-lg p-2 bg-slate-50"
            />
          </div>
        </div>

        {/* Right Preview: Live Printable Poster Canvas */}
        <div className="lg:col-span-7">
          <div
            id="printable-poster"
            className={`w-full rounded-3xl border-2 p-8 shadow-lg space-y-6 transition-all ${currentTheme.bg} ${currentTheme.border} ${currentTheme.text}`}
          >
            {/* Poster Header */}
            <div className="text-center space-y-2 border-b-2 border-slate-900/10 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white/70 shadow-sm">
                ⭐ TRƯỜNG TIỂU HỌC SÓC SƠN · LỚP 5/1 ⭐
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase">
                {posterTitle}
              </h2>
              <p className="text-xs font-semibold italic text-slate-700">
                “{slogan}”
              </p>
            </div>

            {/* 5 Rules Section */}
            <div className="space-y-3">
              {[rule1, rule2, rule3, rule4, rule5].map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-900/5 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-xs">
                    {i + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {r.replace(/^\d+\.\s*/, '')}
                  </span>
                </div>
              ))}
            </div>

            {/* Pledge Certificate Section */}
            <div className="bg-white/90 p-4 rounded-2xl border-2 border-dashed border-slate-900/15 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span>BẢN CAM KẾT DANH DỰ</span>
                </span>
                <span>Mã số: {student.id}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "{pledgeText}"
              </p>
              <div className="flex justify-between items-end pt-3 text-[11px] text-slate-500 border-t border-slate-100">
                <div>
                  <span>An Giang, ngày </span>
                  <span className="font-semibold underline">
                    {existing?.createdDate || new Date().toLocaleDateString('vi-VN')}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-800">Công Dân Số Nhí Lớp 5/1</div>
                  <div className="text-[10px] text-slate-400">(Ký và ghi mã số)</div>
                </div>
              </div>
            </div>

            {/* Poster Footer */}
            <div className="text-center text-[10px] text-slate-500 pt-2 border-t border-slate-900/10 flex items-center justify-between">
              <span>Giáo viên hướng dẫn: Cô Trần Thị Kim Dung</span>
              <span>Dự án Công Dân Số Nhí 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
