import React, { useState } from 'react';
import { 
  DEMO_STUDENTS, 
  CLASS_SUMMARY_STATS, 
  LESSON_PLANS, 
  POSTER_RUBRIC, 
  COMPETITION_DOSSIER,
  DemoStudent
} from '../../data/teacherData';
import { loadTeacherDataSource, saveTeacherDataSource, sound } from '../../utils/storage';
import { 
  School, 
  Users, 
  TrendingUp, 
  Award, 
  Download, 
  Printer, 
  Search, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  FileSpreadsheet, 
  BookOpen, 
  Sparkles,
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';

export const TeacherPortalView: React.FC = () => {
  const [dataSource, setDataSource] = useState<'demo' | 'real'>(loadTeacherDataSource());
  const [activeSubTab, setActiveSubTab] = useState<'dashboard' | 'students' | 'lessons' | 'rubric' | 'dossier'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [studentsList, setStudentsList] = useState<DemoStudent[]>(DEMO_STUDENTS);

  // Selected lesson plan modal
  const [selectedLessonIdx, setSelectedLessonIdx] = useState<number>(0);

  const handleToggleDataSource = (source: 'demo' | 'real') => {
    sound.playClick();
    setDataSource(source);
    saveTeacherDataSource(source);
  };

  const filteredStudents = studentsList.filter((s) => {
    const matchesSearch = s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.anonymousName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || s.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const exportCSV = () => {
    sound.playSuccess();
    const headers = ['Mã Học Sinh', 'Tên Ẩn Danh', 'Giới Tính', 'Số Nhiệm Vụ Đạt (trên 6)', 'Điểm Trắc Nghiệm TB (%)', 'Khảo Sát Trước (trên 15)', 'Khảo Sát Sau (trên 15)', 'Nộp Poster', 'Ký Cam Kết', 'Xếp Loại', 'Chủ Đề Cần Rèn', 'Nhận Xét Giáo Viên'];
    
    const rows = studentsList.map((s) => [
      s.code,
      `"${s.anonymousName}"`,
      s.gender,
      s.completedMissionsCount,
      s.averageQuizScore,
      s.preTestScore,
      s.postTestScore,
      s.posterSubmitted ? 'Đã nộp' : 'Chưa nộp',
      s.pledgeSigned ? 'Đã ký' : 'Chưa ký',
      `"${s.status}"`,
      `"${s.weakTopic || 'Không có'}"`,
      `"${s.teacherNote || 'Đạt chuẩn yêu cầu'}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Bao_Cao_Cong_Dan_So_Nhi_Lop_5_1_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Teacher Portal Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-sky-300">
              <School className="w-3.5 h-3.5" />
              <span>Hệ Thống Quản Lý Sư Phạm</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight">
              TRUNG TÂM QUẢN LÝ CÔNG DÂN SỐ NHÍ – LỚP 5/1
            </h1>
            <div className="text-xs sm:text-sm text-slate-300 space-x-2">
              <span>Giáo viên: <strong className="text-white">Trần Thị Kim Dung</strong></span>
              <span>·</span>
              <span>Trường: <strong className="text-white">Tiểu học Sóc Sơn</strong></span>
              <span>·</span>
              <span>Địa phương: <strong className="text-white">Huyện Tri Tôn, Tỉnh An Giang</strong></span>
            </div>
          </div>

          {/* Data Mode Switcher */}
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/15 flex flex-col gap-1.5 shrink-0 no-print">
            <div className="text-[10px] font-bold text-slate-300 uppercase px-1">Chế độ hiển thị:</div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleToggleDataSource('demo')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  dataSource === 'demo'
                    ? 'bg-amber-400 text-slate-900 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                DỮ LIỆU MINH HỌA (40 HS)
              </button>
              <button
                onClick={() => handleToggleDataSource('real')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  dataSource === 'real'
                    ? 'bg-emerald-400 text-slate-900 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                DỮ LIỆU THỰC TẾ
              </button>
            </div>
          </div>
        </div>

        {dataSource === 'demo' && (
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-amber-200/90 italic">
            ⚠️ Ghi chú sư phạm: Đang hiển thị bộ dữ liệu minh họa cho 40 học sinh (HS01 - HS40) để phục vụ trình diễn và đánh giá sáng kiến. Không phản ánh sĩ số hoặc hồ sơ riêng tư ngoài đời thật.
          </div>
        )}
      </div>

      {/* Sub Tabs Navigation (No print) */}
      <div className="flex border-b border-slate-200 gap-2 overflow-x-auto no-print">
        <button
          onClick={() => {
            sound.playClick();
            setActiveSubTab('dashboard');
          }}
          className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeSubTab === 'dashboard'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          1. Thống Kê Lớp Học
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setActiveSubTab('students');
          }}
          className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeSubTab === 'students'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          2. Danh Sách 40 Học Sinh
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setActiveSubTab('lessons');
          }}
          className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeSubTab === 'lessons'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          3. Kế Hoạch 6 Tiết Học (35p) & Phiếu Bài Tập
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setActiveSubTab('rubric');
          }}
          className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeSubTab === 'rubric'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          4. Tiêu Chí Đánh Giá (Rubric)
        </button>
        <button
          onClick={() => {
            sound.playClick();
            setActiveSubTab('dossier');
          }}
          className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeSubTab === 'dossier'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          5. Hồ Sơ Sáng Kiến Dự Thi & Video 5 Phút
        </button>
      </div>

      {/* SUB TAB 1: DASHBOARD ANALYTICS */}
      {activeSubTab === 'dashboard' && (
        <div className="space-y-8">
          {/* 4 Summary Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
              <div className="text-xs font-semibold text-slate-500">Tỷ lệ hoàn thành</div>
              <div className="text-2xl font-black text-sky-600 tabular-nums">
                {CLASS_SUMMARY_STATS.averageCompletionRate}%
              </div>
              <div className="text-[11px] text-slate-400">Đạt 6/6 nhiệm vụ</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
              <div className="text-xs font-semibold text-slate-500">Khảo sát Pre-test</div>
              <div className="text-2xl font-black text-slate-700 tabular-nums">
                {CLASS_SUMMARY_STATS.averagePreScore} / 15
              </div>
              <div className="text-[11px] text-slate-400">Trước khi triển khai</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
              <div className="text-xs font-semibold text-slate-500">Khảo sát Post-test</div>
              <div className="text-2xl font-black text-emerald-600 tabular-nums">
                {CLASS_SUMMARY_STATS.averagePostScore} / 15
              </div>
              <div className="text-[11px] text-emerald-600 font-bold">
                Tăng trưởng: {CLASS_SUMMARY_STATS.improvementRate}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
              <div className="text-xs font-semibold text-slate-500">Sản phẩm sáng tạo</div>
              <div className="text-2xl font-black text-purple-600 tabular-nums">
                {CLASS_SUMMARY_STATS.postersCreated} / 40
              </div>
              <div className="text-[11px] text-slate-400">Poster & cam kết số</div>
            </div>
          </div>

          {/* Pre vs Post Comparison Charts by Domain */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                So Sánh Kết Quả 6 Nhóm Năng Lực Trước & Sau Khi Triển Khai
              </h3>
              <p className="text-xs text-slate-500">
                Đo lường mức độ đạt chuẩn (%) trên 40 học sinh lớp 5/1 qua bộ câu hỏi tương đương:
              </p>
            </div>

            <div className="space-y-4">
              {CLASS_SUMMARY_STATS.topicMastery.map((tm, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>{tm.topic}</span>
                    <span className="text-emerald-700 tabular-nums">
                      {tm.prePercent}% → <span className="text-emerald-600 font-black">{tm.postPercent}%</span> (+{tm.postPercent - tm.prePercent}%)
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                    <div
                      className="bg-slate-300 h-full transition-all"
                      style={{ width: `${tm.prePercent}%` }}
                      title="Trước can thiệp"
                    />
                    <div
                      className="bg-emerald-500 h-full transition-all"
                      style={{ width: `${tm.postPercent - tm.prePercent}%` }}
                      title="Sau can thiệp"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-slate-300" />
                <span>Trước can thiệp (Pre-test)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-500" />
                <span>Mức tăng trưởng sau 6 buổi học (Post-test)</span>
              </div>
            </div>
          </div>

          {/* Common Errors & Corrective Pedagogical Interventions */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Phân Tích Những Câu Hỏi Học Sinh Thường Mắc Lỗi & Biện Pháp Đã Khắc Phục
            </h3>

            <div className="space-y-3">
              {CLASS_SUMMARY_STATS.commonMistakes.map((err, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 text-xs">
                  <div className="font-bold text-slate-900">{err.question}</div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <span>Tỷ lệ sai ban đầu: <strong className="text-rose-600">{err.mistakeRatePre}%</strong></span>
                    <span>→ Sau can thiệp: <strong className="text-emerald-600">{err.mistakeRatePost}%</strong></span>
                  </div>
                  <div className="text-sky-800 font-semibold pt-1">
                    Biện pháp sư phạm: {err.fixAction}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB TAB 2: 40 STUDENTS LIST */}
      {activeSubTab === 'students' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Danh Sách Quản Lý 40 Học Sinh (Mã Ẩn Danh)
              </h3>
              <p className="text-xs text-slate-500">
                Tuân thủ nghiêm ngặt nguyên tắc bảo mật: không công khai họ tên đầy đủ, ngày sinh hay thông tin riêng tư.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Xuất Báo Cáo CSV</span>
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>In Báo Cáo</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 no-print">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm theo mã học sinh (VD: HS01, HS16)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="text-xs border border-slate-300 rounded-xl px-3 py-2 bg-slate-50 font-semibold"
            >
              <option value="all">Tất cả xếp loại ({studentsList.length})</option>
              <option value="Đạt xuất sắc">Đạt xuất sắc ({CLASS_SUMMARY_STATS.excellenceCount})</option>
              <option value="Đạt chuẩn">Đạt chuẩn ({CLASS_SUMMARY_STATS.standardCount})</option>
              <option value="Cần rèn luyện thêm">Cần rèn luyện thêm ({CLASS_SUMMARY_STATS.reinforceCount})</option>
            </select>
          </div>

          {/* Student Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                <tr>
                  <th className="p-3">Mã HS</th>
                  <th className="p-3">Định danh</th>
                  <th className="p-3">Giới tính</th>
                  <th className="p-3 text-center">Nhiệm vụ (trên 6)</th>
                  <th className="p-3 text-center">Điểm TB</th>
                  <th className="p-3 text-center">Pre-test</th>
                  <th className="p-3 text-center">Post-test</th>
                  <th className="p-3 text-center">Poster</th>
                  <th className="p-3">Xếp loại</th>
                  <th className="p-3">Nhận xét của giáo viên</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.map((st) => (
                  <tr key={st.code} className="hover:bg-slate-50/70">
                    <td className="p-3 font-bold text-slate-900">{st.code}</td>
                    <td className="p-3 text-slate-600">{st.anonymousName}</td>
                    <td className="p-3 text-slate-500">{st.gender}</td>
                    <td className="p-3 text-center font-bold text-sky-700 tabular-nums">
                      {st.completedMissionsCount}/6
                    </td>
                    <td className="p-3 text-center font-bold tabular-nums">
                      {st.averageQuizScore}%
                    </td>
                    <td className="p-3 text-center text-slate-500 tabular-nums">
                      {st.preTestScore}/15
                    </td>
                    <td className="p-3 text-center font-bold text-emerald-600 tabular-nums">
                      {st.postTestScore}/15
                    </td>
                    <td className="p-3 text-center">
                      {st.posterSubmitted ? (
                        <span className="text-emerald-600 font-bold">Đã nộp</span>
                      ) : (
                        <span className="text-slate-400">Chưa</span>
                      )}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          st.status === 'Đạt xuất sắc'
                            ? 'bg-amber-100 text-amber-900'
                            : st.status === 'Đạt chuẩn'
                            ? 'bg-sky-100 text-sky-900'
                            : 'bg-rose-100 text-rose-900'
                        }`}
                      >
                        {st.status}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600 text-[11px] max-w-xs">
                      {st.teacherNote || (st.weakTopic ? `Cần củng cố: ${st.weakTopic}` : 'Tiếp thu tốt, có trách nhiệm')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUB TAB 3: 6 DETAILED LESSON PLANS & WORKSHEETS */}
      {activeSubTab === 'lessons' && (
        <div className="space-y-6">
          <div className="flex border-b border-slate-200 gap-2 overflow-x-auto no-print">
            {LESSON_PLANS.map((lp, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLessonIdx(idx)}
                className={`py-2 px-3 text-xs font-bold rounded-t-xl transition-colors ${
                  selectedLessonIdx === idx
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tiết {lp.sessionNumber} ({lp.durationMinutes}p)
              </button>
            ))}
          </div>

          {/* Active Lesson Plan Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Kế hoạch bài dạy chi tiết · Thời lượng: {LESSON_PLANS[selectedLessonIdx].durationMinutes} phút
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {LESSON_PLANS[selectedLessonIdx].title}
              </h2>
            </div>

            {/* Target Competencies */}
            <div className="bg-sky-50 border border-sky-100 p-4 rounded-2xl space-y-1.5 text-xs">
              <div className="font-bold text-sky-900 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Yêu cầu cần đạt (Năng lực & Phẩm chất):</span>
              </div>
              <ul className="list-disc list-inside text-slate-700 space-y-1 pl-1">
                {LESSON_PLANS[selectedLessonIdx].targetCompetencies.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Teaching Stages Table */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Tiến trình hoạt động dạy học:
              </h3>
              <div className="overflow-x-auto border border-slate-200 rounded-xl text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                    <tr>
                      <th className="p-3 w-36">Giai đoạn</th>
                      <th className="p-3">Hoạt động của giáo viên</th>
                      <th className="p-3">Hoạt động của học sinh</th>
                      <th className="p-3 w-40">Đánh giá</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {LESSON_PLANS[selectedLessonIdx].mainActivities.map((act, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="p-3 font-bold text-indigo-700">{act.phase}</td>
                        <td className="p-3 text-slate-800">{act.teacherActivity}</td>
                        <td className="p-3 text-slate-700">{act.studentActivity}</td>
                        <td className="p-3 text-slate-600 italic text-[11px]">{act.assessment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Printable Worksheet Frame */}
            <div className="bg-slate-50 border-2 border-dashed border-indigo-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-indigo-900 uppercase">
                  {LESSON_PLANS[selectedLessonIdx].printableWorksheet.title}
                </span>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:underline no-print"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>In phiếu này</span>
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {LESSON_PLANS[selectedLessonIdx].printableWorksheet.sections.map((sec, i) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-800">{sec.heading}</div>
                    <div className="text-slate-600 italic">{sec.prompt}</div>
                    <div className="h-10 border-b border-dotted border-slate-300 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB TAB 4: RUBRIC */}
      {activeSubTab === 'rubric' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Bảng Tiêu Chí Đánh Giá Sản Phẩm Poster & Bản Cam Kết Số (Rubric)
            </h2>
            <p className="text-xs text-slate-500">
              Dùng để chấm điểm sản phẩm sáng tạo của học sinh lớp 5 theo thang điểm 10:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                <tr>
                  <th className="p-3 w-48">Tiêu chí</th>
                  <th className="p-3 bg-emerald-50/50 text-emerald-900">Mức Tốt (Đạt tối đa)</th>
                  <th className="p-3 bg-amber-50/50 text-amber-900">Mức Đạt</th>
                  <th className="p-3 bg-rose-50/50 text-rose-900">Cần Rèn Thêm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {POSTER_RUBRIC.map((r, i) => (
                  <tr key={i}>
                    <td className="p-3 font-bold text-slate-900">{r.criteria}</td>
                    <td className="p-3 text-slate-700">{r.standardGood}</td>
                    <td className="p-3 text-slate-600">{r.standardFair}</td>
                    <td className="p-3 text-slate-500">{r.standardNeedsWork}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUB TAB 5: COMPETITION DOSSIER */}
      {activeSubTab === 'dossier' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hồ Sơ Sáng Kiến Kinh Nghiệm / Dự Thi Giáo Viên Giỏi</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Minh Chứng Khoa Học & Cấu Trúc Báo Cáo Giải Pháp
            </h2>
            <p className="text-xs text-slate-500">
              Tổng hợp đầy đủ luận cứ, số liệu thực chứng để đưa vào báo cáo sáng kiến, bài thuyết trình PowerPoint và video giới thiệu 5 phút.
            </p>
          </div>

          {/* Section 1: Context & Problem */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-indigo-900 uppercase">1. Bối cảnh & Vấn đề thực tiễn</h3>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700 leading-relaxed">
              {COMPETITION_DOSSIER.contextAndProblem.map((p, i) => (
                <p key={i}>• {p}</p>
              ))}
            </div>
          </div>

          {/* Section 2: Objectives */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-indigo-900 uppercase">2. Mục tiêu của giải pháp</h3>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700 leading-relaxed">
              {COMPETITION_DOSSIER.objectives.map((p, i) => (
                <p key={i}>• {p}</p>
              ))}
            </div>
          </div>

          {/* Section 3: Innovations */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-indigo-900 uppercase">3. Điểm mới và tính sáng tạo trong ứng dụng AI</h3>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700 leading-relaxed">
              {COMPETITION_DOSSIER.innovations.map((p, i) => (
                <p key={i}>• {p}</p>
              ))}
            </div>
          </div>

          {/* Section 4: 5-Minute Video Presentation Script */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-indigo-900 uppercase">
              4. Khung Kịch Bản Bài Thuyết Trình / Video Giới Thiệu (Tối Đa 5 Phút)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {COMPETITION_DOSSIER.presentationScript5Mins.map((sc, i) => (
                <div key={i} className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5 text-xs">
                  <div className="font-extrabold text-indigo-900 text-xs">{sc.minute}</div>
                  <div className="font-bold text-slate-800 text-[11px]">{sc.title}</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed italic">
                    "{sc.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Scalability & Sustainability */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-indigo-900 uppercase">5. Khả năng duy trì và nhân rộng</h3>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700 leading-relaxed">
              {COMPETITION_DOSSIER.sustainabilityAndScale.map((p, i) => (
                <p key={i}>• {p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
