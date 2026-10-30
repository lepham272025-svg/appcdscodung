import React, { useState, useEffect } from 'react';
import { StudentProfile } from '../../types';
import { QUESTION_BANK } from '../../data/questionBank';
import { sound } from '../../utils/storage';
import { BeSaoMascot } from '../common/BeSaoMascot';
import { 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Sliders, 
  Flag, 
  KeyRound, 
  RotateCcw, 
  Trophy, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

interface GamesArenaViewProps {
  student: StudentProfile;
  onUpdateScore: (gameKey: string, score: number) => void;
}

export const GamesArenaView: React.FC<GamesArenaViewProps> = ({
  student,
  onUpdateScore,
}) => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  // ========================================================
  // GAME 1: AI NHANH HƠN? (Speed Quiz)
  // ========================================================
  const [speedQuestions, setSpeedQuestions] = useState<typeof QUESTION_BANK>([]);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [speedScore, setSpeedScore] = useState(0);
  const [speedTimeLeft, setSpeedTimeLeft] = useState(15);
  const [speedGameOver, setSpeedGameOver] = useState(false);
  const [speedFeedback, setSpeedFeedback] = useState<string | null>(null);

  const startSpeedGame = () => {
    sound.playClick();
    const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random()).slice(0, 8);
    setSpeedQuestions(shuffled);
    setSpeedIdx(0);
    setSpeedScore(0);
    setSpeedTimeLeft(15);
    setSpeedGameOver(false);
    setSpeedFeedback(null);
    setSelectedGame('speed');
  };

  useEffect(() => {
    if (selectedGame !== 'speed' || speedGameOver) return;
    if (speedTimeLeft <= 0) {
      sound.playWarning();
      handleSpeedNext(false, 'Hết giờ rồi bạn ơi!');
      return;
    }
    const timer = setInterval(() => {
      setSpeedTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedGame, speedTimeLeft, speedGameOver]);

  const handleSpeedAnswer = (chosenOpt: number) => {
    if (speedFeedback !== null) return;
    const currentQ = speedQuestions[speedIdx];
    const isCorrect = chosenOpt === currentQ.correctIndex;
    if (isCorrect) {
      sound.playSuccess();
      const points = 10 + speedTimeLeft; // time bonus
      setSpeedScore((s) => s + points);
      setSpeedFeedback(`Chính xác! +${points} điểm!`);
    } else {
      sound.playWarning();
      setSpeedFeedback(`Chưa đúng! ${currentQ.explanation}`);
    }

    setTimeout(() => {
      handleSpeedNext(isCorrect);
    }, 1500);
  };

  const handleSpeedNext = (wasCorrect: boolean, timeoutMsg?: string) => {
    if (timeoutMsg) {
      setSpeedFeedback(timeoutMsg);
      setTimeout(() => {
        proceedSpeed();
      }, 1200);
    } else {
      proceedSpeed();
    }
  };

  const proceedSpeed = () => {
    if (speedIdx < speedQuestions.length - 1) {
      setSpeedIdx((i) => i + 1);
      setSpeedTimeLeft(15);
      setSpeedFeedback(null);
    } else {
      setSpeedGameOver(true);
      sound.playCheer();
      onUpdateScore('speed', speedScore);
    }
  };

  // ========================================================
  // GAME 2: ĐÚNG HAY SAI? (True or False Rapid)
  // ========================================================
  const tfStatements = [
    { text: 'Đặt mật khẩu là "123456" cho tài khoản học tập là an toàn vì dễ nhớ.', isTrue: false, explanation: 'Mật khẩu "123456" cực kỳ yếu, bị bẻ khóa trong 1 giây.' },
    { text: 'AI có thể tự có cảm xúc vui buồn như con người.', isTrue: false, explanation: 'AI chỉ là máy tính mô phỏng, hoàn toàn không có cảm xúc thật.' },
    { text: 'Tổng đài Quốc gia Bảo vệ Trẻ em miễn phí cước là số 111.', isTrue: true, explanation: 'Chính xác! 111 luôn sẵn sàng hỗ trợ các bạn nhỏ 24/7.' },
    { text: 'Không nên chia sẻ hình ảnh vé máy bay hay địa chỉ nhà lên mạng xã hội.', isTrue: true, explanation: 'Chính xác! Cần bảo vệ dữ liệu vị trí và lịch trình gia đình.' },
    { text: 'Có thể chép nguyên văn bài làm của AI nộp cho cô giáo vì AI thông minh.', isTrue: false, explanation: 'Việc chép nguyên văn là gian lận học tập và làm mất tư duy phản biện.' },
    { text: 'Người quản trị trang web thật sự không bao giờ hỏi mật khẩu của em.', isTrue: true, explanation: 'Đúng vậy! Bất kỳ ai hỏi xin mật khẩu đều có ý đồ xấu.' },
    { text: 'Quy tắc T.H.I.N.K khuyên em chỉ bình luận khi lời nói Thật và Tử tế.', isTrue: true, explanation: 'Đúng! T.H.I.N.K giúp xây dựng môi trường mạng văn minh.' },
  ];
  const [tfIdx, setTfIdx] = useState(0);
  const [tfScore, setTfScore] = useState(0);
  const [tfGameOver, setTfGameOver] = useState(false);
  const [tfFeedback, setTfFeedback] = useState<string | null>(null);

  const startTfGame = () => {
    sound.playClick();
    setTfIdx(0);
    setTfScore(0);
    setTfGameOver(false);
    setTfFeedback(null);
    setSelectedGame('true_false');
  };

  const handleTfChoice = (userChoice: boolean) => {
    if (tfFeedback !== null) return;
    const current = tfStatements[tfIdx];
    const isCorrect = userChoice === current.isTrue;
    if (isCorrect) {
      sound.playSuccess();
      setTfScore((s) => s + 10);
      setTfFeedback(`✅ Đúng! ${current.explanation}`);
    } else {
      sound.playWarning();
      setTfFeedback(`❌ Sai rồi! ${current.explanation}`);
    }

    setTimeout(() => {
      if (tfIdx < tfStatements.length - 1) {
        setTfIdx((i) => i + 1);
        setTfFeedback(null);
      } else {
        setTfGameOver(true);
        sound.playCheer();
        onUpdateScore('true_false', tfScore + (isCorrect ? 10 : 0));
      }
    }, 1800);
  };

  // ========================================================
  // GAME 3: THÁM TỬ MẠNG (Detective Case Files)
  // ========================================================
  const detectiveCases = [
    {
      id: 1,
      title: 'Vụ án: Bài đăng con cá voi bay trên đỉnh núi Sam',
      author: 'Tài khoản ẩn danh "Tin Hot Miền Tây"',
      content: 'CHẤN ĐỘNG! Vừa phát hiện đàn cá voi khổng lồ bơi lượn trên trời núi Sam An Giang! Ai không chia sẻ trong 5 phút sẽ gặp xui xẻo cả năm!',
      clues: [
        'Không có tên nhà báo hay cơ quan báo chí nào đăng tải.',
        'Hình ảnh mờ nhạt, ánh sáng bóng đổ con cá voi ngược hướng với rặng cây.',
        'Có câu đe dọa ép buộc người đọc phải chia sẻ gấp.'
      ],
      question: 'Thám tử nhí kết luận mẩu tin này là gì?',
      options: ['Tin thật 100%', 'Tin giả giật gân câu view', 'Chưa rõ cần chia sẻ thử'],
      correctIdx: 1,
      debrief: 'Cá voi sống dưới đại dương, không thể bay trên núi. Đây là ảnh ghép dùng để câu tương tác trục lợi!'
    },
    {
      id: 2,
      title: 'Vụ án: Tin nhắn mượn tiền từ nick bạn thân',
      author: 'Nick Facebook của bạn cùng lớp',
      content: 'Cậu ơi mẹ tớ đang nằm viện cấp cứu, mượn tạm 200k nạp thẻ cào gấp mai tớ trả.',
      clues: [
        'Văn phong cộc lốc khác hẳn cách bạn nói chuyện hằng ngày.',
        'Đòi gửi thẻ cào hoặc chuyển vào một số tài khoản mang tên người lạ.',
        'Bạn không gọi điện mà chỉ nhắn tin hối thúc.'
      ],
      question: 'Hành động điều tra đúng đắn nhất là gì?',
      options: ['Chuyển tiền ngay', 'Gọi điện thoại trực tiếp kiểm tra xem bạn có bị hack nick', 'Chửi bạn nói dối'],
      correctIdx: 1,
      debrief: 'Kẻ xấu cướp nick rồi nhắn tin mượn tiền hàng loạt. Xác minh qua kênh khác là kỹ năng phòng thủ thiết yếu!'
    }
  ];
  const [detIdx, setDetIdx] = useState(0);
  const [detScore, setDetScore] = useState(0);
  const [detGameOver, setDetGameOver] = useState(false);
  const [detFeedback, setDetFeedback] = useState<string | null>(null);

  const startDetectiveGame = () => {
    sound.playClick();
    setDetIdx(0);
    setDetScore(0);
    setDetGameOver(false);
    setDetFeedback(null);
    setSelectedGame('detective');
  };

  const handleDetectiveChoice = (optIdx: number) => {
    const current = detectiveCases[detIdx];
    if (optIdx === current.correctIdx) {
      sound.playSuccess();
      setDetScore((s) => s + 20);
      setDetFeedback(`🔍 Phá án thành công! ${current.debrief}`);
    } else {
      sound.playWarning();
      setDetFeedback(`⚠️ Chưa chính xác. Gợi ý: Hãy quan sát các manh mối đáng ngờ!`);
    }

    setTimeout(() => {
      if (detIdx < detectiveCases.length - 1) {
        setDetIdx((i) => i + 1);
        setDetFeedback(null);
      } else {
        setDetGameOver(true);
        sound.playCheer();
        onUpdateScore('detective', detScore + 20);
      }
    }, 2200);
  };

  // ========================================================
  // GAME 4: KÉO THẢ AN TOÀN (Safe Sorting)
  // ========================================================
  const sortItems = [
    { text: 'Đặt mật khẩu: SocSon@51YeuThuong', isSafe: true },
    { text: 'Bấm vào link nhận 1000 Robux miễn phí', isSafe: false },
    { text: 'Xin phép bạn trước khi dùng ảnh bạn vẽ', isSafe: true },
    { text: 'Gửi số điện thoại và địa chỉ nhà cho người lạ', isSafe: false },
    { text: 'Đăng xuất tài khoản sau giờ tin học', isSafe: true },
    { text: 'Chế giễu ngoại hình bạn trong nhóm chat', isSafe: false },
    { text: 'Kiểm tra nguồn tin trước khi chia sẻ', isSafe: true },
    { text: 'Chép nguyên văn bài văn AI nộp cho cô', isSafe: false },
  ];
  const [sortIdx, setSortIdx] = useState(0);
  const [sortScore, setSortScore] = useState(0);
  const [sortGameOver, setSortGameOver] = useState(false);

  const startSortGame = () => {
    sound.playClick();
    setSortIdx(0);
    setSortScore(0);
    setSortGameOver(false);
    setSelectedGame('safe_sort');
  };

  const handleSortCategorize = (userSafe: boolean) => {
    const item = sortItems[sortIdx];
    const isCorrect = userSafe === item.isSafe;
    if (isCorrect) {
      sound.playSuccess();
      setSortScore((s) => s + 10);
    } else {
      sound.playWarning();
    }

    if (sortIdx < sortItems.length - 1) {
      setSortIdx((i) => i + 1);
    } else {
      setSortGameOver(true);
      sound.playCheer();
      onUpdateScore('safe_sort', sortScore + (isCorrect ? 10 : 0));
    }
  };

  // ========================================================
  // GAME 5: VƯỢT CHƯỚNG NGẠI VẬT (Obstacle River Run)
  // ========================================================
  const obstacles = [
    {
      stone: 1,
      hazard: 'Cạm bẫy mật khẩu',
      question: 'Mật khẩu nào giúp vượt qua tảng đá trơn trợt?',
      choices: ['12345678', 'AnGiang#2026Star', 'nguyenvana'],
      correct: 1
    },
    {
      stone: 2,
      hazard: 'Dòng nước tin giả',
      question: 'Gặp bài viết giật gân, em cần dùng công cụ nào?',
      choices: ['Bấm like ngay', 'Bộ lọc 5W1H và hỏi cô giáo', 'Chia sẻ cho bạn bè'],
      correct: 1
    },
    {
      stone: 3,
      hazard: 'Quái vật lừa đảo',
      question: 'Kẻ lạ gạ nạp thẻ cào để nhận xe máy điện, em làm gì?',
      choices: ['Không tin, cúp máy báo người lớn', 'Nạp thẻ ngay', 'Đi mượn tiền bạn'],
      correct: 0
    },
    {
      stone: 4,
      hazard: 'Bão tố mạng',
      question: 'Thấy bạn bị bắt nạt, hành động hiệp sĩ là:',
      choices: ['Hùa theo chê bai', 'Bảo vệ bạn và báo cô giáo Kim Dung', 'Bỏ đi không quan tâm'],
      correct: 1
    },
    {
      stone: 5,
      hazard: 'Đích đến công dân số',
      question: 'Khẩu hiệu của chúng mình là gì?',
      choices: ['Chơi game thả ga', 'Thông minh khi dùng AI – An toàn số – Trách nhiệm', 'Cứ chép bài AI'],
      correct: 1
    }
  ];
  const [obsStep, setObsStep] = useState(0);
  const [obsGameOver, setObsGameOver] = useState(false);
  const [obsFeedback, setObsFeedback] = useState<string | null>(null);

  const startObstacleGame = () => {
    sound.playClick();
    setObsStep(0);
    setObsGameOver(false);
    setObsFeedback(null);
    setSelectedGame('obstacle');
  };

  const handleObstacleChoice = (cIdx: number) => {
    const cur = obstacles[obsStep];
    if (cIdx === cur.correct) {
      sound.playSuccess();
      setObsFeedback('✨ Nhảy qua chướng ngại vật an toàn!');
      setTimeout(() => {
        if (obsStep < obstacles.length - 1) {
          setObsStep((s) => s + 1);
          setObsFeedback(null);
        } else {
          setObsGameOver(true);
          sound.playCheer();
          onUpdateScore('obstacle', 100);
        }
      }, 1000);
    } else {
      sound.playWarning();
      setObsFeedback('💥 Bị trượt chân! Hãy chọn phương án an toàn hơn nhé!');
    }
  };

  // ========================================================
  // GAME 6: GIẢI CỨU BÉ SAO AI (Rescue Bé Sao AI 5-Stage Vault)
  // ========================================================
  const rescueStages = [
    {
      stage: 1,
      title: 'Cửa 1: Ổ Khóa Bảo Mật',
      desc: 'Bé Sao AI bị nhốt trong phòng kín đòi hỏi mã giải cứu. Thông tin nào an toàn nhất để giải mã?',
      options: ['Mật khẩu cá nhân', 'Mã xác thực 2 bước (2FA)', 'Số nhà riêng'],
      correct: 1,
      hint: 'Chỉ 2FA mới bảo vệ tài khoản vững chắc!'
    },
    {
      stage: 2,
      title: 'Cửa 2: Mê Cung Tin Đồn',
      desc: 'Một bóng ma nói: "Ngày mai thế giới cúp điện vĩnh viễn, hãy tháo pin robot ra!". Bé Sao cần em làm gì?',
      options: ['Tháo pin robot ngay', 'Kiểm chứng thông tin trên bản tin chính thống', 'Khóc thầm'],
      correct: 1,
      hint: 'Thám tử tin giả luôn kiểm tra nguồn uy tín.'
    },
    {
      stage: 3,
      title: 'Cửa 3: Cầu Treo Lừa Đảo',
      desc: 'Kẻ xấu gửi link "Bấm vào để mở cửa miễn phí". Em phải làm sao?',
      options: ['Không bấm vào link lạ, tìm công tắc thật', 'Bấm vào link ngay', 'Gửi link cho mẹ'],
      correct: 0,
      hint: 'Link lạ chứa mã độc phá hủy thiết bị.'
    },
    {
      stage: 4,
      title: 'Cửa 4: Tấm Khiên Tử Tế',
      desc: 'Trước cửa có chữ viết độc hại. Để phá vỡ lời nguyền, cần đọc câu thần chú nào?',
      options: ['Nói lời cay độc', 'Quy tắc T.H.I.N.K: Lời nói Thật và Tử Tế', 'Chế giễu người khác'],
      correct: 1,
      hint: 'Chỉ sự tử tế mới xóa tan bóng tối mạng.'
    },
    {
      stage: 5,
      title: 'Cửa 5: Vương Miện Trách Nhiệm',
      desc: 'Cánh cửa cuối cùng yêu cầu lời cam kết: Em dùng AI vì mục đích gì?',
      options: ['Để gian lận thi cử', 'Để học tập thông minh và phục vụ cộng đồng', 'Để làm việc xấu'],
      correct: 1,
      hint: 'Công dân số chân chính luôn có trách nhiệm!'
    }
  ];
  const [rescueStageIdx, setRescueStageIdx] = useState(0);
  const [rescueGameOver, setRescueGameOver] = useState(false);
  const [rescueFeedback, setRescueFeedback] = useState<string | null>(null);

  const startRescueGame = () => {
    sound.playClick();
    setRescueStageIdx(0);
    setRescueGameOver(false);
    setRescueFeedback(null);
    setSelectedGame('rescue_besao');
  };

  const handleRescueChoice = (optIdx: number) => {
    const cur = rescueStages[rescueStageIdx];
    if (optIdx === cur.correct) {
      sound.playSuccess();
      setRescueFeedback('🔓 Mở khóa thành công một tầng bảo vệ!');
      setTimeout(() => {
        if (rescueStageIdx < rescueStages.length - 1) {
          setRescueStageIdx((s) => s + 1);
          setRescueFeedback(null);
        } else {
          setRescueGameOver(true);
          sound.playCheer();
          onUpdateScore('rescue_besao', 100);
        }
      }, 1000);
    } else {
      sound.playWarning();
      setRescueFeedback(`⚠️ Sai mã rồi! ${cur.hint}`);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-emerald-100">
            <Trophy className="w-3.5 h-3.5 text-amber-300" />
            <span>Học Qua Trò Chơi Tương Tác</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">Đấu Trường Kiến Thức Số</h1>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
            Thử thách trí tuệ qua 6 trò chơi thú vị: rèn luyện phản xạ, bẻ khóa mật mã, phân tích chứng cứ và giải cứu Bé Sao AI!
          </p>
        </div>
        <BeSaoMascot mood="cheering" size="md" />
      </div>

      {/* Main 6 Games Grid (When no game is currently open) */}
      {!selectedGame ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Game 1 */}
          <div className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">1. Ai Nhanh Hơn?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đua tốc độ cùng đồng hồ đếm ngược! Trả lời 8 câu hỏi ngẫu nhiên trong 15 giây/câu để ghi điểm thưởng combo.
              </p>
              <div className="text-xs font-semibold text-slate-400">
                Kỷ lục của em: <span className="text-amber-600 font-bold tabular-nums">{student.gameHighScores['speed'] || 0}</span> điểm
              </div>
            </div>
            <button
              onClick={startSpeedGame}
              className="mt-4 w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-xs rounded-xl shadow-sm transition-colors"
            >
              Chơi Ngay ⚡
            </button>
          </div>

          {/* Game 2 */}
          <div className="bg-white border border-slate-200 hover:border-sky-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">2. Đúng Hay Sai?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Phân biệt nhanh các quan niệm và hành vi số. Đúng bấm ĐÚNG, sai bấm SAI, nhận giải thích sư phạm tức thì.
              </p>
              <div className="text-xs font-semibold text-slate-400">
                Kỷ lục của em: <span className="text-sky-600 font-bold tabular-nums">{student.gameHighScores['true_false'] || 0}</span> điểm
              </div>
            </div>
            <button
              onClick={startTfGame}
              className="mt-4 w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              Vào Thử Thách 🎯
            </button>
          </div>

          {/* Game 3 */}
          <div className="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">3. Thám Tử Mạng</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhập vai thám tử phân tích hồ sơ vụ án: soi xét bài đăng câu view, lần theo manh mối để vạch trần kẻ lừa đảo.
              </p>
              <div className="text-xs font-semibold text-slate-400">
                Kỷ lục của em: <span className="text-indigo-600 font-bold tabular-nums">{student.gameHighScores['detective'] || 0}</span> điểm
              </div>
            </div>
            <button
              onClick={startDetectiveGame}
              className="mt-4 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              Phá Án Ngay 🔍
            </button>
          </div>

          {/* Game 4 */}
          <div className="bg-white border border-slate-200 hover:border-emerald-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">4. Kéo Thả An Toàn</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Phân loại nhanh các hành động trên mạng: "An Toàn Nên Làm" hay "Nguy Hiểm Cần Tránh".
              </p>
              <div className="text-xs font-semibold text-slate-400">
                Kỷ lục của em: <span className="text-emerald-600 font-bold tabular-nums">{student.gameHighScores['safe_sort'] || 0}</span> điểm
              </div>
            </div>
            <button
              onClick={startSortGame}
              className="mt-4 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              Phân Loại Ngay 🛡️
            </button>
          </div>

          {/* Game 5 */}
          <div className="bg-white border border-slate-200 hover:border-purple-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Flag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">5. Vượt Chướng Ngại Vật</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vượt qua dòng sông cạm bẫy bằng cách giải quyết chuẩn xác từng hòn đá thử thách để về đích vinh quang.
              </p>
              <div className="text-xs font-semibold text-slate-400">
                Kỷ lục của em: <span className="text-purple-600 font-bold tabular-nums">{student.gameHighScores['obstacle'] || 0}</span> điểm
              </div>
            </div>
            <button
              onClick={startObstacleGame}
              className="mt-4 w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              Vượt Thử Thách 🏃
            </button>
          </div>

          {/* Game 6 */}
          <div className="bg-white border border-slate-200 hover:border-rose-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">6. Giải Cứu Bé Sao AI</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bé Sao AI bị kẹt trong căn hầm bảo mật 5 lớp! Vận dụng toàn bộ kiến thức công dân số để mở từng ổ khóa.
              </p>
              <div className="text-xs font-semibold text-slate-400">
                Kỷ lục của em: <span className="text-rose-600 font-bold tabular-nums">{student.gameHighScores['rescue_besao'] || 0}</span> điểm
              </div>
            </div>
            <button
              onClick={startRescueGame}
              className="mt-4 w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              Giải Cứu Ngay 🌟
            </button>
          </div>
        </div>
      ) : (
        /* PLAYING GAME CONTAINER */
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <button
              onClick={() => setSelectedGame(null)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              ← Trở Về Danh Sách Trò Chơi
            </button>
            <div className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              {selectedGame === 'speed' && 'Trò chơi: Ai Nhanh Hơn'}
              {selectedGame === 'true_false' && 'Trò chơi: Đúng Hay Sai'}
              {selectedGame === 'detective' && 'Trò chơi: Thám Tử Mạng'}
              {selectedGame === 'safe_sort' && 'Trò chơi: Kéo Thả An Toàn'}
              {selectedGame === 'obstacle' && 'Trò chơi: Vượt Chướng Ngại Vật'}
              {selectedGame === 'rescue_besao' && 'Trò chơi: Giải Cứu Bé Sao AI'}
            </div>
          </div>

          {/* 1. PLAY SPEED */}
          {selectedGame === 'speed' && (
            <div className="space-y-6">
              {!speedGameOver ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      Câu {speedIdx + 1} / {speedQuestions.length}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500">Thời gian:</span>
                      <span
                        className={`text-sm font-extrabold px-2.5 py-0.5 rounded-full tabular-nums ${
                          speedTimeLeft <= 5 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        ⏱️ {speedTimeLeft}s
                      </span>
                      <span className="text-xs font-bold text-emerald-600 ml-2">
                        Điểm: {speedScore}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                    {speedQuestions[speedIdx]?.question}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {speedQuestions[speedIdx]?.options.map((opt, i) => (
                      <button
                        key={i}
                        disabled={speedFeedback !== null}
                        onClick={() => handleSpeedAnswer(i)}
                        className="text-left p-3.5 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50 text-xs sm:text-sm font-semibold transition-all"
                      >
                        <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                        {opt}
                      </button>
                    ))}
                  </div>

                  {speedFeedback && (
                    <div className="p-3 bg-slate-100 rounded-xl text-xs font-bold text-slate-800 text-center">
                      {speedFeedback}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="text-4xl">⚡</div>
                  <h3 className="text-xl font-black text-slate-900">Hoàn Thành Chặng Đua!</h3>
                  <div className="text-3xl font-black text-amber-500 tabular-nums">
                    Tổng điểm: {speedScore}
                  </div>
                  <p className="text-xs text-slate-600">
                    Phản xạ của em rất tuyệt vời! Điểm số đã được ghi nhận vào thành tích.
                  </p>
                  <button
                    onClick={startSpeedGame}
                    className="px-5 py-2.5 bg-amber-500 text-slate-900 font-bold text-xs rounded-xl"
                  >
                    Chơi Lại Lần Nữa
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 2. PLAY TRUE OR FALSE */}
          {selectedGame === 'true_false' && (
            <div className="space-y-6">
              {!tfGameOver ? (
                <>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Khẳng định {tfIdx + 1} / {tfStatements.length}</span>
                    <span className="text-sky-600">Điểm: {tfScore}</span>
                  </div>

                  <div className="bg-sky-50/60 border border-sky-200 p-6 rounded-2xl text-center space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                      Khẳng định này ĐÚNG hay SAI?
                    </div>
                    <div className="text-base sm:text-lg font-bold text-slate-800 max-w-xl mx-auto">
                      "{tfStatements[tfIdx]?.text}"
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <button
                      disabled={tfFeedback !== null}
                      onClick={() => handleTfChoice(true)}
                      className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>ĐÚNG</span>
                    </button>
                    <button
                      disabled={tfFeedback !== null}
                      onClick={() => handleTfChoice(false)}
                      className="py-3 px-6 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <XCircle className="w-5 h-5" />
                      <span>SAI</span>
                    </button>
                  </div>

                  {tfFeedback && (
                    <div className="p-3 bg-slate-100 rounded-xl text-xs font-medium text-slate-800 text-center">
                      {tfFeedback}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="text-4xl">🎯</div>
                  <h3 className="text-xl font-black text-slate-900">Chúc Mừng Em!</h3>
                  <div className="text-3xl font-black text-sky-600 tabular-nums">
                    {tfScore} / {tfStatements.length * 10} Điểm
                  </div>
                  <button
                    onClick={startTfGame}
                    className="px-5 py-2.5 bg-sky-600 text-white font-bold text-xs rounded-xl"
                  >
                    Chơi Lại
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 3. PLAY DETECTIVE */}
          {selectedGame === 'detective' && (
            <div className="space-y-6">
              {!detGameOver ? (
                <>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Hồ sơ vụ án {detIdx + 1} / {detectiveCases.length}</span>
                    <span className="text-indigo-600">Điểm thám tử: {detScore}</span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-sm font-bold text-slate-900">{detectiveCases[detIdx]?.title}</h3>
                    <div className="text-xs text-slate-500">Người đăng: {detectiveCases[detIdx]?.author}</div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 italic">
                      "{detectiveCases[detIdx]?.content}"
                    </div>

                    <div className="pt-2">
                      <div className="text-xs font-bold text-slate-700 mb-1">🔍 Manh mối thu thập được:</div>
                      <ul className="text-xs text-slate-600 list-disc list-inside space-y-1">
                        {detectiveCases[detIdx]?.clues.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-800">
                      {detectiveCases[detIdx]?.question}
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {detectiveCases[detIdx]?.options.map((opt, i) => (
                        <button
                          key={i}
                          disabled={detFeedback !== null}
                          onClick={() => handleDetectiveChoice(i)}
                          className="text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-xs font-semibold"
                        >
                          {i + 1}. {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {detFeedback && (
                    <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-bold text-indigo-900">
                      {detFeedback}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="text-4xl">🕵️‍♂️</div>
                  <h3 className="text-xl font-black text-slate-900">Đã Hoàn Thành Phá Án!</h3>
                  <div className="text-3xl font-black text-indigo-600 tabular-nums">
                    {detScore} Điểm
                  </div>
                  <p className="text-xs text-slate-600">
                    Em xứng đáng nhận danh hiệu Thám Tử Kỹ Thuật Số của lớp 5/1!
                  </p>
                  <button
                    onClick={startDetectiveGame}
                    className="px-5 py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl"
                  >
                    Luyện Tập Thêm
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 4. PLAY SAFE SORTING */}
          {selectedGame === 'safe_sort' && (
            <div className="space-y-6">
              {!sortGameOver ? (
                <>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Tình huống {sortIdx + 1} / {sortItems.length}</span>
                    <span className="text-emerald-600">Điểm: {sortScore}</span>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase">Hành động này nên hay không nên?</div>
                    <div className="text-base sm:text-lg font-bold text-slate-800">
                      {sortItems[sortIdx]?.text}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <button
                      onClick={() => handleSortCategorize(true)}
                      className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>NÊN LÀM (An Toàn)</span>
                    </button>
                    <button
                      onClick={() => handleSortCategorize(false)}
                      className="py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                    >
                      <AlertTriangle className="w-4 h-4" />
                      <span>KHÔNG NÊN (Nguy Hiểm)</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="text-4xl">🛡️</div>
                  <h3 className="text-xl font-black text-slate-900">Hoàn Thành Phân Loại!</h3>
                  <div className="text-3xl font-black text-emerald-600 tabular-nums">
                    {sortScore} / {sortItems.length * 10} Điểm
                  </div>
                  <button
                    onClick={startSortGame}
                    className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                  >
                    Chơi Lại
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 5. PLAY OBSTACLE */}
          {selectedGame === 'obstacle' && (
            <div className="space-y-6">
              {!obsGameOver ? (
                <>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Hòn đá {obsStep + 1} / {obstacles.length}</span>
                    <span className="text-purple-600">Vượt sông công dân số</span>
                  </div>

                  {/* Visual Stepping Stones */}
                  <div className="flex items-center justify-between gap-1 p-3 bg-sky-50 rounded-2xl border border-sky-100 overflow-x-auto">
                    {obstacles.map((ob, idx) => (
                      <div
                        key={idx}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0 ${
                          idx < obsStep
                            ? 'bg-emerald-500 text-white'
                            : idx === obsStep
                            ? 'bg-amber-400 text-slate-900 ring-4 ring-amber-200 animate-bounce'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {idx + 1}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-purple-700 uppercase">
                      Chướng ngại vật: {obstacles[obsStep]?.hazard}
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {obstacles[obsStep]?.question}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {obstacles[obsStep]?.choices.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => handleObstacleChoice(i)}
                        className="text-left p-3.5 rounded-xl border border-slate-200 hover:border-purple-400 hover:bg-purple-50 text-xs font-semibold transition-all"
                      >
                        {i + 1}. {c}
                      </button>
                    ))}
                  </div>

                  {obsFeedback && (
                    <div className="p-3 bg-purple-50 rounded-xl text-xs font-bold text-purple-900 text-center">
                      {obsFeedback}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="text-4xl">🚩</div>
                  <h3 className="text-xl font-black text-slate-900">Về Đích Thành Công!</h3>
                  <p className="text-xs text-slate-600">
                    Em đã xuất sắc vượt qua toàn bộ 5 chướng ngại vật trên sông!
                  </p>
                  <button
                    onClick={startObstacleGame}
                    className="px-5 py-2.5 bg-purple-600 text-white font-bold text-xs rounded-xl"
                  >
                    Vượt Thử Thách Lại
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 6. PLAY RESCUE BE SAO AI */}
          {selectedGame === 'rescue_besao' && (
            <div className="space-y-6">
              {!rescueGameOver ? (
                <>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Tầng hầm {rescueStageIdx + 1} / {rescueStages.length}</span>
                    <span className="text-rose-600">Nhiệm vụ: Giải Cứu Bé Sao AI</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-rose-50/60 p-4 rounded-2xl border border-rose-200">
                    <BeSaoMascot mood="thinking" size="md" />
                    <div>
                      <h4 className="text-sm font-bold text-rose-900">
                        {rescueStages[rescueStageIdx]?.title}
                      </h4>
                      <p className="text-xs text-slate-700 mt-1">
                        {rescueStages[rescueStageIdx]?.desc}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {rescueStages[rescueStageIdx]?.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleRescueChoice(i)}
                        className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-rose-400 hover:bg-rose-50 text-xs font-semibold transition-all"
                      >
                        {String.fromCharCode(65 + i)}. {opt}
                      </button>
                    ))}
                  </div>

                  {rescueFeedback && (
                    <div className="p-3 bg-slate-100 rounded-xl text-xs font-bold text-slate-800 text-center">
                      {rescueFeedback}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="flex justify-center">
                    <BeSaoMascot mood="cheering" size="lg" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    🎉 Hoan Hô! Bé Sao AI Đã Được Giải Cứu!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    "Cảm ơn bạn nhỏ lớp 5/1 nhiều lắm! Nhờ sự thông minh, dũng cảm và tuân thủ các quy tắc an toàn số của bạn mà mình đã thoát khỏi căn hầm bảo mật. Bạn là hiệp sĩ số xuất sắc!"
                  </p>
                  <button
                    onClick={startRescueGame}
                    className="px-5 py-2.5 bg-rose-600 text-white font-bold text-xs rounded-xl"
                  >
                    Chơi Lại Thử Thách
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
