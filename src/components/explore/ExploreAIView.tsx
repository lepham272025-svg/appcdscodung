import React, { useState } from 'react';
import { BeSaoMascot } from '../common/BeSaoMascot';
import { sound } from '../../utils/storage';
import { 
  Cpu, 
  HelpCircle, 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

export const ExploreAIView: React.FC = () => {
  // Interactive Prompt Builder State
  const [role, setRole] = useState('Gia sư vui tính');
  const [target, setTarget] = useState('học sinh lớp 5');
  const [topic, setTopic] = useState('Chiến thắng Bạch Đằng năm 938');
  const [demand, setDemand] = useState('tóm tắt bằng 3 ý ngắn dễ nhớ');

  // Sorting State
  const [userCategorized, setUserCategorized] = useState<Record<number, 'AI' | 'HUMAN'>>({});

  const sortingItems = [
    { id: 1, text: 'Dịch nhanh 5 từ mới tiếng Anh', correct: 'AI', explanation: 'AI tra cứu kho từ điển khổng lồ trong tích tắc.' },
    { id: 2, text: 'Cảm thấy tự hào và xúc động khi hát Quốc ca', correct: 'HUMAN', explanation: 'Chỉ con người có trái tim và tình yêu quê hương đất nước.' },
    { id: 3, text: 'Gợi ý 3 cách mở bài văn tả con mèo', correct: 'AI', explanation: 'AI hỗ trợ khơi nguồn ý tưởng phong phú cho học sinh.' },
    { id: 4, text: 'Quyết định chọn ai làm lớp trưởng lớp 5/1', correct: 'HUMAN', explanation: 'Cần sự thấu hiểu tính cách, tinh thần trách nhiệm của tập thể học sinh.' },
    { id: 5, text: 'Vẽ gợi ý một chú robot hình ngôi sao', correct: 'AI', explanation: 'AI tạo hình ảnh từ mô tả văn bản rất nhanh chóng.' },
    { id: 6, text: 'Tha thứ cho bạn khi bạn lỡ làm hỏng thước kẻ', correct: 'HUMAN', explanation: 'Lòng vị tha và tình bạn là phẩm chất đạo đức của con người.' },
  ];

  const handleClassify = (id: number, choice: 'AI' | 'HUMAN') => {
    sound.playClick();
    setUserCategorized((prev) => ({ ...prev, [id]: choice }));
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-sky-100">
            <Cpu className="w-3.5 h-3.5" />
            <span>Chuyên đề Giáo Dục Năng Lực Số</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">Khám Phá Trí Tuệ Nhân Tạo (AI)</h1>
          <p className="text-sm text-sky-100 max-w-xl">
            Hiểu rõ bạn AI làm việc ra sao, nhận biết giới hạn và làm chủ công cụ thông minh này trong học tập!
          </p>
        </div>
        <BeSaoMascot mood="happy" size="md" />
      </div>

      {/* 3 Core Conceptual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            🤖
          </div>
          <h3 className="text-base font-bold text-slate-900">1. AI học như thế nào?</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI không sinh ra tự nhiên. Con người đã "dạy" AI bằng cách nạp hàng triệu cuốn sách giáo khoa, bài báo, tranh ảnh và dữ liệu. AI dùng các thuật toán toán học để tìm ra quy luật và đưa ra câu trả lời tương tự.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
            ⚡
          </div>
          <h3 className="text-base font-bold text-slate-900">2. Lợi ích của AI</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI giúp chúng mình: Gợi ý ý tưởng bài học, dịch ngoại ngữ, tìm kiếm tài liệu nhanh gấp ngàn lần tra từ điển giấy, và hỗ trợ các bạn giải thích các hiện tượng khoa học kỳ thú.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
            ⚠️
          </div>
          <h3 className="text-base font-bold text-slate-900">3. Ảo giác AI (Lỗi sai)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI có thể "nói bừa" một cách rất tự tin! Khi thiếu dữ liệu, AI sẽ tự ghép các từ lại thành một sự việc không có thật. Vì vậy, tuyệt đối không chép nguyên văn AI mà luôn đối chiếu sách giáo khoa.
          </p>
        </div>
      </div>

      {/* Interactive Tool: Prompt Builder for 5th Graders */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Phòng Thí Nghiệm: Tạo Câu Lệnh (Prompt) Thông Minh
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Hãy chọn các mảnh ghép để tạo thành một câu lệnh chuẩn giúp AI hiểu rõ nhu cầu và đưa ra câu trả lời bổ ích nhất cho bài học!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Piece 1: Role */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">1. Vai trò của AI:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-sky-500"
            >
              <option value="Gia sư vui tính">Gia sư vui tính</option>
              <option value="Nhà khoa học nhí">Nhà khoa học nhí</option>
              <option value="Nhà văn kể chuyện">Nhà văn kể chuyện</option>
              <option value="Bé Sao AI thông thái">Bé Sao AI thông thái</option>
            </select>
          </div>

          {/* Piece 2: Target Audience */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">2. Đối tượng học sinh:</label>
            <select
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-sky-500"
            >
              <option value="học sinh lớp 5 trường TH Sóc Sơn">Học sinh lớp 5 TH Sóc Sơn</option>
              <option value="học sinh tiểu học 10 tuổi">Học sinh tiểu học 10 tuổi</option>
              <option value="người mới làm quen với công nghệ">Người mới làm quen</option>
            </select>
          </div>

          {/* Piece 3: Topic */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">3. Chủ đề cần hỏi:</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-sky-500"
            >
              <option value="Chiến thắng Bạch Đằng năm 938">Chiến thắng Bạch Đằng 938</option>
              <option value="Vòng tuần hoàn của nước trong tự nhiên">Vòng tuần hoàn của nước</option>
              <option value="Vẻ đẹp sông nước miền Tây An Giang">Sông nước quê hương An Giang</option>
              <option value="Cách giữ an toàn mật khẩu trên mạng">An toàn mật khẩu mạng</option>
            </select>
          </div>

          {/* Piece 4: Demand */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">4. Yêu cầu chi tiết:</label>
            <select
              value={demand}
              onChange={(e) => setDemand(e.target.value)}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-sky-500"
            >
              <option value="tóm tắt bằng 3 ý ngắn dễ nhớ kèm ví dụ">Tóm tắt 3 ý ngắn dễ nhớ</option>
              <option value="đặt 2 câu hỏi gợi mở để em tự suy nghĩ">Đặt 2 câu hỏi gợi mở</option>
              <option value="kể một mẩu chuyện ngắn 100 từ vui nhộn">Kể chuyện ngắn 100 từ</option>
            </select>
          </div>
        </div>

        {/* Generated Prompt Box */}
        <div className="bg-sky-50/80 border border-sky-200 rounded-xl p-4 space-y-2">
          <div className="text-xs font-bold text-sky-800 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Câu lệnh hoàn chỉnh em vừa tạo:</span>
          </div>
          <div className="text-sm font-semibold text-slate-800 bg-white p-3 rounded-lg border border-sky-100 italic">
            "{`Bạn hãy đóng vai là một ${role}, hãy giúp một ${target} tìm hiểu về chủ đề '${topic}', bằng cách ${demand} nhé!`}"
          </div>
        </div>
      </section>

      {/* Interactive Sorting: AI vs Human Decision */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Thử Thách: "AI Hỗ Trợ" Hay "Con Người Quyết Định"?
          </h2>
          <p className="text-xs text-slate-500">
            Bấm chọn phân loại cho từng việc dưới đây và xem lời giải thích chi tiết từ Bé Sao AI nhé!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortingItems.map((item) => {
            const chosen = userCategorized[item.id];
            const isAnswered = chosen !== undefined;
            const isCorrect = chosen === item.correct;

            return (
              <div
                key={item.id}
                className={`p-4 rounded-xl border transition-all ${
                  !isAnswered
                    ? 'border-slate-200 bg-slate-50/50'
                    : isCorrect
                    ? 'border-emerald-300 bg-emerald-50/40'
                    : 'border-rose-300 bg-rose-50/40'
                }`}
              >
                <div className="text-xs font-bold text-slate-800 mb-3">
                  {item.id}. {item.text}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleClassify(item.id, 'AI')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${
                      chosen === 'AI'
                        ? item.correct === 'AI'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    AI Có Thể Hỗ Trợ
                  </button>
                  <button
                    onClick={() => handleClassify(item.id, 'HUMAN')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-colors ${
                      chosen === 'HUMAN'
                        ? item.correct === 'HUMAN'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Con Người Quyết Định
                  </button>
                </div>

                {isAnswered && (
                  <div className="mt-2 text-[11px] leading-relaxed text-slate-600 pt-2 border-t border-slate-200/60">
                    <span className="font-bold text-slate-800">
                      {isCorrect ? '✅ Chính xác! ' : '💡 Gợi ý thêm: '}
                    </span>
                    {item.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Do's and Don'ts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DO's */}
        <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span>NÊN Làm Khi Sử Dụng AI</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside leading-relaxed">
            <li>Hỏi AI gợi ý dàn ý, ý tưởng mới mẻ khi làm bài văn hoặc vẽ tranh.</li>
            <li>Dùng AI tra cứu nhanh từ vựng ngoại ngữ và thuật ngữ khoa học khó hiểu.</li>
            <li>Luôn tự mình viết lại bài làm bằng lời văn và suy nghĩ chân thật của chính em.</li>
            <li>Hỏi ý kiến cô giáo Kim Dung hoặc ba mẹ khi thấy câu trả lời của AI kỳ lạ.</li>
          </ul>
        </div>

        {/* DON'T's */}
        <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
            <XCircle className="w-5 h-5 text-rose-600" />
            <span>KHÔNG NÊN Làm</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside leading-relaxed">
            <li>Không copy nguyên xi bài văn, lời giải toán của AI vào vở để nộp cho cô.</li>
            <li>Tuyệt đối không gõ mật khẩu, số điện thoại, địa chỉ nhà riêng vào ô chat AI.</li>
            <li>Không ỷ lại vào AI làm hộ mọi việc khiến bản thân lười suy nghĩ.</li>
            <li>Không dùng AI để tạo ảnh chế giễu bạn bè hoặc lan truyền thông tin sai lệch.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
