import { LessonPlan } from '../types';

export interface DemoStudent {
  code: string;
  anonymousName: string;
  gender: 'Nam' | 'Nữ';
  completedMissionsCount: number; // 0..6
  averageQuizScore: number; // 0..100
  preTestScore: number; // out of 15
  postTestScore: number; // out of 15
  posterSubmitted: boolean;
  pledgeSigned: boolean;
  status: 'Đạt xuất sắc' | 'Đạt chuẩn' | 'Cần rèn luyện thêm';
  weakTopic?: string;
  teacherNote?: string;
}

export const DEMO_STUDENTS: DemoStudent[] = [
  { code: 'HS01', anonymousName: 'Học sinh 01 (L.V.A)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 98, preTestScore: 7, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc', teacherNote: 'Nắm rất vững kỹ năng nhận diện tin giả và phòng chống lừa đảo.' },
  { code: 'HS02', anonymousName: 'Học sinh 02 (N.T.B)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 95, preTestScore: 6, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc', teacherNote: 'Poster tuyên truyền rất sáng tạo, thể hiện rõ 5 nguyên tắc số.' },
  { code: 'HS03', anonymousName: 'Học sinh 03 (T.Q.C)', gender: 'Nam', completedMissionsCount: 5, averageQuizScore: 82, preTestScore: 5, postTestScore: 12, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn', weakTopic: 'Nhận diện Deepfake' },
  { code: 'HS04', anonymousName: 'Học sinh 04 (P.M.D)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 92, preTestScore: 8, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS05', anonymousName: 'Học sinh 05 (H.T.E)', gender: 'Nam', completedMissionsCount: 4, averageQuizScore: 74, preTestScore: 4, postTestScore: 10, posterSubmitted: false, pledgeSigned: true, status: 'Cần rèn luyện thêm', weakTopic: 'Bảo mật mật khẩu mạnh', teacherNote: 'Cần hướng dẫn thêm cách đặt mật khẩu kết hợp ký tự đặc biệt.' },
  { code: 'HS06', anonymousName: 'Học sinh 06 (D.K.G)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 96, preTestScore: 7, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS07', anonymousName: 'Học sinh 07 (V.H.H)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 90, preTestScore: 6, postTestScore: 13, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS08', anonymousName: 'Học sinh 08 (B.Q.K)', gender: 'Nam', completedMissionsCount: 5, averageQuizScore: 85, preTestScore: 5, postTestScore: 12, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS09', anonymousName: 'Học sinh 09 (L.T.L)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 94, preTestScore: 8, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS10', anonymousName: 'Học sinh 10 (M.T.M)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 88, preTestScore: 6, postTestScore: 13, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS11', anonymousName: 'Học sinh 11 (N.V.N)', gender: 'Nam', completedMissionsCount: 5, averageQuizScore: 80, preTestScore: 5, postTestScore: 11, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn', weakTopic: 'Bản quyền hình ảnh' },
  { code: 'HS12', anonymousName: 'Học sinh 12 (P.T.O)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 96, preTestScore: 9, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS13', anonymousName: 'Học sinh 13 (Q.H.P)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 90, preTestScore: 7, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS14', anonymousName: 'Học sinh 14 (R.T.Q)', gender: 'Nữ', completedMissionsCount: 4, averageQuizScore: 72, preTestScore: 4, postTestScore: 10, posterSubmitted: false, pledgeSigned: true, status: 'Cần rèn luyện thêm', weakTopic: 'Lừa đảo link độc hại' },
  { code: 'HS15', anonymousName: 'Học sinh 15 (S.V.R)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 88, preTestScore: 6, postTestScore: 13, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS16', anonymousName: 'Học sinh 16 (T.T.S)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 100, preTestScore: 8, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc', teacherNote: 'Xuất sắc tuyệt đối, tích cực giải cứu Bé Sao AI đạt điểm tuyệt đối.' },
  { code: 'HS17', anonymousName: 'Học sinh 17 (U.V.T)', gender: 'Nam', completedMissionsCount: 5, averageQuizScore: 84, preTestScore: 6, postTestScore: 12, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS18', anonymousName: 'Học sinh 18 (V.T.U)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 92, preTestScore: 7, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS19', anonymousName: 'Học sinh 19 (X.V.V)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 86, preTestScore: 5, postTestScore: 13, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS20', anonymousName: 'Học sinh 20 (Y.T.X)', gender: 'Nữ', completedMissionsCount: 5, averageQuizScore: 82, preTestScore: 6, postTestScore: 12, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS21', anonymousName: 'Học sinh 21 (A.V.Y)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 94, preTestScore: 7, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS22', anonymousName: 'Học sinh 22 (B.T.Z)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 96, preTestScore: 8, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS23', anonymousName: 'Học sinh 23 (C.V.A)', gender: 'Nam', completedMissionsCount: 5, averageQuizScore: 78, preTestScore: 5, postTestScore: 11, posterSubmitted: false, pledgeSigned: true, status: 'Đạt chuẩn', weakTopic: 'Nguyên tắc T.H.I.N.K' },
  { code: 'HS24', anonymousName: 'Học sinh 24 (D.T.B)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 90, preTestScore: 7, postTestScore: 13, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS25', anonymousName: 'Học sinh 25 (E.V.C)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 92, preTestScore: 6, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS26', anonymousName: 'Học sinh 26 (G.T.D)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 88, preTestScore: 6, postTestScore: 13, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS27', anonymousName: 'Học sinh 27 (H.V.E)', gender: 'Nam', completedMissionsCount: 4, averageQuizScore: 70, preTestScore: 4, postTestScore: 10, posterSubmitted: false, pledgeSigned: true, status: 'Cần rèn luyện thêm', weakTopic: 'Ảo giác AI & Kiểm chứng' },
  { code: 'HS28', anonymousName: 'Học sinh 28 (K.T.G)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 94, preTestScore: 8, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS29', anonymousName: 'Học sinh 29 (L.V.H)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 86, preTestScore: 5, postTestScore: 12, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS30', anonymousName: 'Học sinh 30 (M.T.K)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 90, preTestScore: 7, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS31', anonymousName: 'Học sinh 31 (N.V.L)', gender: 'Nam', completedMissionsCount: 5, averageQuizScore: 80, preTestScore: 5, postTestScore: 11, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS32', anonymousName: 'Học sinh 32 (O.T.M)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 96, preTestScore: 8, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS33', anonymousName: 'Học sinh 33 (P.V.N)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 88, preTestScore: 6, postTestScore: 13, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS34', anonymousName: 'Học sinh 34 (Q.T.O)', gender: 'Nữ', completedMissionsCount: 5, averageQuizScore: 82, preTestScore: 5, postTestScore: 12, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS35', anonymousName: 'Học sinh 35 (R.V.P)', gender: 'Nam', completedMissionsCount: 6, averageQuizScore: 94, preTestScore: 7, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS36', anonymousName: 'Học sinh 36 (S.T.Q)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 98, preTestScore: 8, postTestScore: 15, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS37', anonymousName: 'Học sinh 37 (T.V.R)', gender: 'Nam', completedMissionsCount: 5, averageQuizScore: 84, preTestScore: 6, postTestScore: 12, posterSubmitted: true, pledgeSigned: true, status: 'Đạt chuẩn' },
  { code: 'HS38', anonymousName: 'Học sinh 38 (U.T.S)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 92, preTestScore: 7, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
  { code: 'HS39', anonymousName: 'Học sinh 39 (V.V.T)', gender: 'Nam', completedMissionsCount: 4, averageQuizScore: 76, preTestScore: 4, postTestScore: 11, posterSubmitted: false, pledgeSigned: true, status: 'Cần rèn luyện thêm', weakTopic: 'Ứng xử khi bị trêu chọc' },
  { code: 'HS40', anonymousName: 'Học sinh 40 (X.T.U)', gender: 'Nữ', completedMissionsCount: 6, averageQuizScore: 90, preTestScore: 6, postTestScore: 14, posterSubmitted: true, pledgeSigned: true, status: 'Đạt xuất sắc' },
];

// Summary statistics for Class 5/1
export const CLASS_SUMMARY_STATS = {
  totalStudents: 40,
  averageCompletionRate: 92.5, // %
  averagePreScore: 6.3, // out of 15
  averagePostScore: 13.2, // out of 15
  improvementRate: '+109.5%',
  postersCreated: 36,
  pledgesSigned: 40,
  excellenceCount: 22,
  standardCount: 15,
  reinforceCount: 3,
  topicMastery: [
    { topic: 'Hiểu biết & Giới hạn AI', prePercent: 45, postPercent: 92 },
    { topic: 'Bảo mật Thông tin cá nhân', prePercent: 52, postPercent: 95 },
    { topic: 'Nhận diện Tin giả & Deepfake', prePercent: 32, postPercent: 88 },
    { topic: 'Phòng chống Lừa đảo trực tuyến', prePercent: 38, postPercent: 91 },
    { topic: 'Ứng xử văn minh (Anti-Bullying)', prePercent: 58, postPercent: 96 },
    { topic: 'Trách nhiệm & Cân bằng số', prePercent: 42, postPercent: 94 }
  ],
  commonMistakes: [
    { question: 'Có tin tưởng 100% vào hình ảnh trên mạng không?', mistakeRatePre: 72, mistakeRatePost: 12, fixAction: 'Đã bổ sung bài tập Thám tử tin tức với bài đăng mẫu.' },
    { question: 'Khi người lạ hỏi mật khẩu trong game để tặng đồ?', mistakeRatePre: 58, mistakeRatePost: 5, fixAction: 'Đã rèn luyện tình huống giải cứu Bé Sao AI chặng 2.' },
    { question: 'Chép nguyên văn bài văn AI viết có được không?', mistakeRatePre: 65, mistakeRatePost: 8, fixAction: 'Đã nhấn mạnh bài học về liêm chính học tập trong Nhiệm vụ 1.' }
  ]
};

// 6 Detailed Lesson Plans (35 mins each)
export const LESSON_PLANS: LessonPlan[] = [
  {
    sessionNumber: 1,
    title: 'Tiết 1: Làm Quen Với AI - Người Bạn Thông Minh Nhưng Cần Kiểm Chứng',
    durationMinutes: 35,
    targetCompetencies: [
      'Nhận biết AI là phần mềm máy tính học từ dữ liệu.',
      'Hiểu AI có thể hỗ trợ học tập nhưng không thể thay thế trái tim con người.',
      'Biết cách đặt câu hỏi gợi mở, không chép bài AI.'
    ],
    equipmentNeeded: [
      'Máy tính kết nối màn hình chiếu hoặc máy tính bảng học sinh',
      'Ứng dụng Công Dân Số Nhí - Phân hệ Khám phá AI & Nhiệm vụ 1',
      'Phiếu học tập số 1'
    ],
    mainActivities: [
      {
        phase: '1. Khởi động (5 phút)',
        timeMinutes: 5,
        teacherActivity: 'Cho học sinh xem video ngắn về robot và đặt câu hỏi: "Robot có biết buồn khi bị điểm kém không?"',
        studentActivity: 'Thảo luận nhanh, phát biểu cảm nghĩ về cảm xúc của robot.',
        assessment: 'Đánh giá mức độ tò mò và hiểu biết ban đầu của học sinh.'
      },
      {
        phase: '2. Khám phá (12 phút)',
        timeMinutes: 12,
        teacherActivity: 'Hướng dẫn học sinh truy cập mục "Khám phá AI", cùng Bé Sao AI tìm hiểu AI học như thế nào và hiện tượng ảo giác AI.',
        studentActivity: 'Đọc tài liệu, thực hiện trò chơi kéo thả: "AI làm được" vs "Con người quyết định".',
        assessment: 'Quan sát kết quả phân loại trên màn hình học sinh.'
      },
      {
        phase: '3. Thực hành tình huống (10 phút)',
        timeMinutes: 10,
        teacherActivity: 'Nêu tình huống bài văn mùa nước nổi An Giang. Hướng dẫn các nhóm phân tích.',
        studentActivity: 'Các nhóm 4 học sinh thảo luận: Chọn chép bài AI hay tự viết sau khi tham khảo ý tưởng.',
        assessment: 'Nhận xét câu trả lời của các nhóm.'
      },
      {
        phase: '4. Củng cố & Cam kết (8 phút)',
        timeMinutes: 8,
        teacherActivity: 'Tổng kết 3 bước dùng AI thông minh. Hướng dẫn làm mini quiz 10 câu.',
        studentActivity: 'Làm trắc nghiệm Nhiệm vụ 1, ghi điểm vào Phiếu học tập số 1.',
        assessment: 'Điểm số bài kiểm tra trắc nghiệm trên hệ thống.'
      }
    ],
    printableWorksheet: {
      title: 'PHIẾU HỌC TẬP SỐ 1: BẠN VÀ ROBOT AI',
      sections: [
        { heading: 'Phần 1: Nối đúng cột', prompt: 'Nối 3 việc AI làm giỏi nhất và 3 việc chỉ có con người mới làm được.', type: 'check' },
        { heading: 'Phần 2: Thử thách câu lệnh', prompt: 'Em hãy viết một câu lệnh nhờ AI gợi ý 3 trò chơi dân gian ngày Tết ở An Giang.', type: 'fill' },
        { heading: 'Phần 3: Tự đánh giá', prompt: 'Khoanh tròn số sao em tự chấm cho mình trong tiết học hôm nay: 1 - 2 - 3 - 4 - 5 sao.', type: 'pledge' }
      ]
    }
  },
  {
    sessionNumber: 2,
    title: 'Tiết 2: Lá Chắn Thông Tin Cá Nhân - Mật Khẩu Siêu Cấp',
    durationMinutes: 35,
    targetCompetencies: [
      'Phân biệt dữ liệu công khai và dữ liệu riêng tư cần giữ kín.',
      'Tạo được mật khẩu mạnh trên 8 ký tự và biết giữ bí mật.',
      'Luôn đăng xuất sau khi sử dụng máy tính trường.'
    ],
    equipmentNeeded: ['Phòng máy tính trường TH Sóc Sơn', 'Phiếu học tập số 2', 'Bảng phụ ghi các mật khẩu mẫu'],
    mainActivities: [
      {
        phase: 'Khởi động (5p)',
        timeMinutes: 5,
        teacherActivity: 'Đố vui: "Chiếc chìa khóa nào không làm bằng sắt nhưng mở được mọi tài khoản của em?"',
        studentActivity: 'Đoán từ khóa "Mật khẩu".',
        assessment: 'Hứng thú tham gia.'
      },
      {
        phase: 'Khám phá (12p)',
        timeMinutes: 12,
        teacherActivity: 'Giới thiệu các thành phần của mật khẩu mạnh. Minh họa thời gian bẻ khóa mật khẩu yếu.',
        studentActivity: 'Thực hành tạo mật khẩu cá nhân theo công thức câu nói yêu thích.',
        assessment: 'Kiểm tra độ mạnh mật khẩu học sinh tạo.'
      },
      {
        phase: 'Luyện tập (10p)',
        timeMinutes: 10,
        teacherActivity: 'Chơi game "Kéo thả an toàn" phân loại thông tin nhạy cảm.',
        studentActivity: 'Thi đua kéo thả trên ứng dụng, đạt điểm phân loại.',
        assessment: 'Tỷ lệ phân loại chính xác.'
      },
      {
        phase: 'Vận dụng (8p)',
        timeMinutes: 8,
        teacherActivity: 'Xử lý tình huống người lạ trong game xin mật khẩu tặng kim cương.',
        studentActivity: 'Đưa ra giải pháp: Dừng lại - Không gửi - Báo người lớn.',
        assessment: 'Ý thức tự bảo vệ thông tin.'
      }
    ],
    printableWorksheet: {
      title: 'PHIẾU HỌC TẬP SỐ 2: LÁ CHẮN SỐ CỦA EM',
      sections: [
        { heading: 'Phần 1: Tô màu bảo vệ', prompt: 'Tô màu đỏ vào thông tin CẤM chia sẻ, tô màu xanh vào thông tin ĐƯỢC chia sẻ an toàn.', type: 'check' },
        { heading: 'Phần 2: Sáng tạo mật khẩu', prompt: 'Biến câu nói: "Em Yêu Trường Tiểu Học Sóc Sơn" thành mật khẩu mạnh.', type: 'fill' }
      ]
    }
  },
  {
    sessionNumber: 3,
    title: 'Tiết 3: Thám Tử Tin Giả - Mắt Sáng Phân Tích Thông Tin',
    durationMinutes: 35,
    targetCompetencies: [
      'Phân biệt Fact và Opinion.',
      'Sử dụng công thức 5W1H kiểm tra tính xác thực của tin tức.',
      'Nhận diện nguy cơ từ hình ảnh/video Deepfake.'
    ],
    equipmentNeeded: ['Màn hình chiếu các mẩu tin giả định', 'Ứng dụng Thám tử mạng', 'Phiếu học tập số 3'],
    mainActivities: [
      {
        phase: 'Khởi động (5p)',
        timeMinutes: 5,
        teacherActivity: 'Chiếu bức ảnh "Cá voi bay trên núi Sam" và hỏi học sinh tin hay không.',
        studentActivity: 'Quan sát và tranh luận sôi nổi.',
        assessment: 'Tư duy hoài nghi tích cực.'
      },
      {
        phase: 'Khám phá (12p)',
        timeMinutes: 12,
        teacherActivity: 'Hướng dẫn 4 dấu hiệu nhận biết tin giả và công nghệ Deepfake.',
        studentActivity: 'Ghi nhớ công thức 5W1H (Ai? Việc gì? Ở đâu? Khi nào? Tại sao? Thế nào?).',
        assessment: 'Khả năng ghi nhớ từ khóa.'
      },
      {
        phase: 'Thực hành (10p)',
        timeMinutes: 10,
        teacherActivity: 'Mở minigame "Thám tử mạng" trên ứng dụng.',
        studentActivity: 'Truy tìm manh mối trong 3 bài đăng giả định, tìm bằng chứng giả mạo.',
        assessment: 'Điểm số trò chơi thám tử.'
      },
      {
        phase: 'Tổng kết (8p)',
        timeMinutes: 8,
        teacherActivity: 'Nhấn mạnh: Không chia sẻ khi chưa kiểm chứng với nguồn báo chí chính thống.',
        studentActivity: 'Tuyên thệ: "Dừng lại 30 giây trước khi bấm chia sẻ".',
        assessment: 'Thái độ trách nhiệm thông tin.'
      }
    ],
    printableWorksheet: {
      title: 'PHIẾU HỌC TẬP SỐ 3: SỔ TAY THÁM TỬ MẠNG',
      sections: [
        { heading: 'Phần 1: Thám tử 5W1H', prompt: 'Ghi lại 5 câu hỏi em sẽ hỏi khi đọc một bài viết gây hoang mang trên Facebook.', type: 'fill' },
        { heading: 'Phần 2: Thật hay Ý kiến?', prompt: 'Đánh dấu tick vào câu là Sự thật (Fact).', type: 'check' }
      ]
    }
  },
  {
    sessionNumber: 4,
    title: 'Tiết 4: Dũng Sĩ Chống Lừa Đảo - Cảnh Giác Với Cạm Bẫy Trực Tuyến',
    durationMinutes: 35,
    targetCompetencies: [
      'Nhận diện các thủ đoạn: Trúng thưởng ảo, hack nick mượn tiền, link chứa mã độc.',
      'Ghi nhớ quy tắc 4 KHÔNG và số điện thoại Tổng đài 111.',
      'Biết cách tìm sự hỗ trợ ngay khi gặp tình huống nguy hiểm.'
    ],
    equipmentNeeded: ['Ứng dụng Công Dân Số Nhí - Nhiệm vụ 4', 'Tình huống đóng vai', 'Phiếu học tập số 4'],
    mainActivities: [
      {
        phase: 'Khởi động (5p)',
        timeMinutes: 5,
        teacherActivity: 'Kể câu chuyện ngắn: Bạn nhỏ bấm trúng thưởng iPhone làm mất tiền điện thoại của mẹ.',
        studentActivity: 'Rút ra bài học cảnh giác.',
        assessment: 'Sự tập trung chú ý.'
      },
      {
        phase: 'Khám phá (12p)',
        timeMinutes: 12,
        teacherActivity: 'Phân tích các bẫy tâm lý: Lòng tham, tò mò, sợ hãi.',
        studentActivity: 'Ghi chép 4 quy tắc KHÔNG của dũng sĩ nhí.',
        assessment: 'Hiểu bản chất lừa đảo.'
      },
      {
        phase: 'Đóng vai xử lý (10p)',
        timeMinutes: 10,
        teacherActivity: 'Tổ chức đóng vai: "Bạn thân nhắn tin mượn tiền chữa bệnh khẩn cấp".',
        studentActivity: 'Đóng vai thực hiện cuộc gọi điện thoại trực tiếp để kiểm tra.',
        assessment: 'Kỹ năng phản xạ thực tế.'
      },
      {
        phase: 'Củng cố (8p)',
        timeMinutes: 8,
        teacherActivity: 'Đồng thanh đọc to số tổng đài 111 và làm bài kiểm tra trắc nghiệm.',
        studentActivity: 'Thuộc lòng số 111, hoàn thành trắc nghiệm Nhiệm vụ 4.',
        assessment: 'Điểm kiểm tra Nhiệm vụ 4.'
      }
    ],
    printableWorksheet: {
      title: 'PHIẾU HỌC TẬP SỐ 4: VŨ KHÍ DŨNG SĨ SỐ',
      sections: [
        { heading: 'Phần 1: Đường dây nóng', prompt: 'Viết thật to và trang trí số điện thoại Tổng đài Quốc gia Bảo vệ Trẻ em.', type: 'fill' },
        { heading: 'Phần 2: Xử lý tình huống', prompt: 'Nếu lỡ bấm vào một link lạ hiện cảnh báo virus, em sẽ làm 3 bước nào?', type: 'dilemma' }
      ]
    }
  },
  {
    sessionNumber: 5,
    title: 'Tiết 5: Ứng Xử Văn Minh Trên Mạng - Quy Tắc T.H.I.N.K',
    durationMinutes: 35,
    targetCompetencies: [
      'Hiểu rõ tác hại của bạo lực ngôn từ và bắt nạt trên mạng.',
      'Ứng dụng thành thạo bộ lọc T.H.I.N.K trước khi bình luận.',
      'Biết xin phép và ghi nguồn tác giả khi dùng tranh ảnh.'
    ],
    equipmentNeeded: ['Mô hình cây lời nói tử tế', 'Ứng dụng Công Dân Số Nhí - Nhiệm vụ 5', 'Phiếu học tập số 5'],
    mainActivities: [
      {
        phase: 'Khởi động (5p)',
        timeMinutes: 5,
        teacherActivity: 'Chiếu hình ảnh tờ giấy bị vò nát: "Lời nói cay nghiệt trên mạng cũng giống tờ giấy này, dù vuốt lại cũng không phẳng được".',
        studentActivity: 'Cảm nhận sâu sắc về nỗi đau của nạn nhân bị chế giễu.',
        assessment: 'Sự đồng cảm nhân văn.'
      },
      {
        phase: 'Khám phá (12p)',
        timeMinutes: 12,
        teacherActivity: 'Giới thiệu quy tắc T.H.I.N.K và nguyên tắc bản quyền trong kỷ nguyên AI.',
        studentActivity: 'Thực hành phân tích 3 bình luận mẫu xem có đạt chuẩn T.H.I.N.K không.',
        assessment: 'Khả năng đánh giá văn hóa mạng.'
      },
      {
        phase: 'Thực hành (10p)',
        timeMinutes: 10,
        teacherActivity: 'Tình huống: Bạn bị chụp lén ảnh ngã dìm hàng trong nhóm chat.',
        studentActivity: 'Viết câu bình luận tử tế để bảo vệ bạn và yêu cầu gỡ ảnh.',
        assessment: 'Ngôn từ chuẩn mực, hòa nhã.'
      },
      {
        phase: 'Cam kết (8p)',
        timeMinutes: 8,
        teacherActivity: 'Hướng dẫn viết lời khen tặng bạn cùng bàn trên góc học tập số.',
        studentActivity: 'Gửi lời động viên tích cực, hoàn thành trắc nghiệm Nhiệm vụ 5.',
        assessment: 'Lan tỏa năng lượng tích cực.'
      }
    ],
    printableWorksheet: {
      title: 'PHIẾU HỌC TẬP SỐ 5: BỘ LỌC T.H.I.N.K',
      sections: [
        { heading: 'Phần 1: Giải mã T.H.I.N.K', prompt: 'Điền 5 từ tiếng Việt tương ứng: T (Thật), H (Hữu ích), I (Truyền cảm hứng), N (Cần thiết), K (Tử tế).', type: 'fill' },
        { heading: 'Phần 2: Lời nói tử tế', prompt: 'Viết 2 câu khen ngợi một sản phẩm học tập của bạn cùng lớp.', type: 'pledge' }
      ]
    }
  },
  {
    sessionNumber: 6,
    title: 'Tiết 6: Em Là Công Dân Số Có Trách Nhiệm - Dự Án Poster & Vinh Danh',
    durationMinutes: 35,
    targetCompetencies: [
      'Tổng kết 5 nguyên tắc sử dụng AI an toàn và có trách nhiệm.',
      'Sáng tạo poster thông điệp số tại Góc Sáng Tạo.',
      'Ký bản cam kết công dân số và nhận Chứng nhận Công dân số nhí Lớp 5/1.'
    ],
    equipmentNeeded: ['Phân hệ Góc Sáng Tạo & Thành tích', 'Máy in chứng nhận', 'Phiếu khảo sát sau triển khai (Post-test)'],
    mainActivities: [
      {
        phase: 'Khởi động & Ôn tập (5p)',
        timeMinutes: 5,
        teacherActivity: 'Cùng học sinh đọc vang khẩu hiệu dự án: "Thông minh khi sử dụng AI – An toàn trong thế giới số – Trách nhiệm với cộng đồng".',
        studentActivity: 'Hào hứng hòa nhịp, sẵn sàng cho dự án sáng tạo.',
        assessment: 'Tinh thần tập thể.'
      },
      {
        phase: 'Sáng tạo poster (12p)',
        timeMinutes: 12,
        teacherActivity: 'Hướng dẫn sử dụng công cụ thiết kế poster và bản cam kết trên ứng dụng.',
        studentActivity: 'Tự chọn màu sắc, biểu tượng, khẩu hiệu và viết lời cam kết cá nhân.',
        assessment: 'Tính sáng tạo và tính giáo dục của sản phẩm.'
      },
      {
        phase: 'Khảo sát đầu ra (10p)',
        timeMinutes: 10,
        teacherActivity: 'Cho học sinh làm bài khảo sát đầu ra 15 câu để đo lường mức độ tiến bộ so với trước khi học.',
        studentActivity: 'Tập trung làm bài khảo sát trên máy tính hoặc điện thoại.',
        assessment: 'Điểm số bài khảo sát Post-test.'
      },
      {
        phase: 'Lễ Trao Chứng Nhận (8p)',
        timeMinutes: 8,
        teacherActivity: 'Ký duyệt và in Chứng nhận Công Dân Số Nhí cho học sinh hoàn thành xuất sắc.',
        studentActivity: 'Nhận chứng nhận, chụp ảnh kỷ niệm cùng Bé Sao AI và cô giáo.',
        assessment: 'Niềm tự hào và tinh thần trách nhiệm số.'
      }
    ],
    printableWorksheet: {
      title: 'BẢN CAM KẾT CÔNG DÂN SỐ NHÍ - LỚP 5/1',
      sections: [
        { heading: 'Lời cam kết danh dự', prompt: 'Em tên là ..., học sinh lớp 5/1, trường TH Sóc Sơn xin hứa: 1. Giữ bí mật dữ liệu cá nhân; 2. Kiểm chứng tin tức trước khi tin; 3. Dùng AI hỗ trợ học tập trung thực; 4. Nói lời tử tế trên mạng; 5. Giúp đỡ gia đình cùng an toàn số.', type: 'pledge' }
      ]
    }
  }
];

// Rubric for poster assessment
export const POSTER_RUBRIC = [
  { criteria: 'Thông điệp giáo dục (4 điểm)', standardGood: 'Thể hiện rõ ràng ít nhất 3 nguyên tắc sử dụng AI an toàn, có khẩu hiệu ý nghĩa.', standardFair: 'Có thông điệp nhưng còn chung chung, chưa sát chủ đề.', standardNeedsWork: 'Chưa có thông điệp rõ ràng.' },
  { criteria: 'Tính thẩm mỹ & Bố cục (3 điểm)', standardGood: 'Màu sắc hài hòa, phông chữ dễ đọc, biểu tượng phù hợp lứa tuổi học sinh tiểu học.', standardFair: 'Màu sắc hơi tối hoặc chữ hơi nhỏ.', standardNeedsWork: 'Bố cục lộn xộn, khó đọc.' },
  { criteria: 'Tính độc đáo & Sáng tạo (2 điểm)', standardGood: 'Có lời cam kết mang dấu ấn cá nhân, gắn liền với trường lớp Sóc Sơn, An Giang.', standardFair: 'Sao chép lại các câu mẫu có sẵn.', standardNeedsWork: 'Chưa thể hiện sự đầu tư suy nghĩ.' },
  { criteria: 'Tính ứng dụng & Lan tỏa (1 điểm)', standardGood: 'Sản phẩm có thể dùng để tuyên truyền tại góc lớp hoặc chia sẻ cho gia đình.', standardFair: 'Chỉ phù hợp xem cá nhân.', standardNeedsWork: 'Khó áp dụng thực tế.' }
];

// Competition Dossier Content (Minh chứng sản phẩm sáng kiến)
export const COMPETITION_DOSSIER = {
  projectTitle: 'CÔNG DÂN SỐ NHÍ – HỌC SINH LỚP 5 SỬ DỤNG AI AN TOÀN VÀ CÓ TRÁCH NHIỆM',
  author: 'Trần Thị Kim Dung',
  school: 'Trường Tiểu học Sóc Sơn',
  classTarget: 'Lớp 5/1',
  location: 'Huyện Tri Tôn, Tỉnh An Giang',
  
  contextAndProblem: [
    'Bối cảnh địa phương: Trường Tiểu học Sóc Sơn thuộc huyện Tri Tôn, An Giang, nơi có đông đảo học sinh tiếp cận điện thoại thông minh và Internet ngoài giờ học, nhưng phần lớn các em thiếu kiến thức tự bảo vệ trước các cạm bẫy lừa đảo và tin giả.',
    'Thực trạng nhức nhối: Khảo sát đầu vào 40 học sinh lớp 5/1 cho thấy 72% học sinh tin ngay vào ảnh giật gân trên mạng; 58% sẵn sàng cung cấp thông tin để nhận kim cương game; 65% xem việc copy bài của AI là bình thường.',
    'Tính cấp thiết: Chương trình GDPT 2018 chú trọng phát triển năng lực số, nhưng chưa có bộ công cụ trực quan, tương tác cao phù hợp tâm sinh lý lứa tuổi 10-11 tuổi tại địa phương.'
  ],

  objectives: [
    'Hình thành và phát triển 6 năng lực số cốt lõi: Hiểu biết AI, Bảo mật dữ liệu, Nhận diện tin giả, Phòng chống lừa đảo, Ứng xử văn minh, Trách nhiệm số.',
    'Chuyển đổi phương pháp dạy học từ "thuyết giảng lý thuyết suông" sang "trải nghiệm - tương tác - giải quyết tình huống thực tế".',
    'Cung cấp cho giáo viên tiểu học một hệ thống quản lý học tập số hóa khép kín: giao nhiệm vụ, phân tích lỗi sai, đo lường tiến bộ và xuất báo cáo minh chứng minh bạch.'
  ],

  innovations: [
    'Tích hợp nhân vật ảo dẫn dắt sư phạm "Bé Sao AI": Trợ lý AI có màng lọc an toàn tuyệt đối cho học sinh lớp 5, nói chuyện thân thiện, không xin dữ liệu cá nhân, định hướng tư duy phản biện.',
    'Hệ thống 6 trò chơi tương tác thực chất: Không phải câu hỏi lý thuyết khô khan mà là các thử thách phản xạ nhanh, phân tích chứng cứ như thám tử, phân loại rủi ro số.',
    'Cơ chế bảo vệ dữ liệu học sinh nghiêm ngặt: Ứng dụng hoạt động với mã định danh ẩn danh (HS01 - HS40), không lưu trữ thông tin nhạy cảm của trẻ em ra bên ngoài.',
    'Quy trình đánh giá khoa học Pre-Test & Post-Test: Đối sánh số liệu trước và sau can thiệp 6 buổi học với bộ tiêu chí tương đương.'
  ],

  implementationSteps: [
    'Buổi 1: Khởi động nhận thức - Phân biệt AI và con người (35 phút).',
    'Buổi 2: Xây dựng lá chắn thông tin cá nhân & Mật khẩu mạnh (35 phút).',
    'Buổi 3: Thám tử tin tức 5W1H & Cảnh giác Deepfake (35 phút).',
    'Buổi 4: Dũng sĩ chống lừa đảo mạng & Thuộc lòng Tổng đài 111 (35 phút).',
    'Buổi 5: Thực hành giao tiếp tử tế với bộ lọc T.H.I.N.K (35 phút).',
    'Buổi 6: Dự án sáng tạo poster, ký cam kết số & Trao chứng nhận (35 phút).'
  ],

  resultsMeasured: [
    'Tỷ lệ hoàn thành nhiệm vụ đạt 92.5% toàn lớp 5/1.',
    'Điểm khảo sát năng lực số tăng từ trung bình 6.3/15 (42%) lên 13.2/15 (88%), mức tăng trưởng +109.5%.',
    'Tỷ lệ học sinh biết bảo vệ mật khẩu và nhận diện tin nhắn lừa đảo đạt 95% (tăng từ mức 42% ban đầu).',
    '100% học sinh ký bản cam kết công dân số và 36/40 poster thông điệp số được trưng bày tại lớp.'
  ],

  sustainabilityAndScale: [
    'Khả năng nhân rộng cao: Ứng dụng chạy mượt mà trên trình duyệt web, không đòi hỏi máy tính cấu hình cao, tương thích cả điện thoại di động và máy tính bảng.',
    'Chi phí bằng 0: Toàn bộ chức năng học tập cơ bản không phụ thuộc dịch vụ trả phí, giáo viên các trường bạn có thể sử dụng ngay mà không tốn ngân sách.',
    'Dễ dàng tích hợp vào môn Tin học, Hoạt động trải nghiệm và các tiết sinh hoạt lớp theo Chương trình GDPT 2018.'
  ],

  presentationScript5Mins: [
    { minute: 'Phút 1', title: 'Đặt vấn đề & Tiếng chuông cảnh báo', content: 'Kính thưa Ban giám khảo, khi các bạn nhỏ lớp 5/1 cầm trên tay chiếc điện thoại thông minh, thế giới mở ra nhưng cạm bẫy cũng ập đến. Khảo sát của tôi tại TH Sóc Sơn cho thấy hơn 60% học sinh chưa hề có lá chắn an toàn số...' },
    { minute: 'Phút 2', title: 'Giới thiệu giải pháp & Bé Sao AI', content: 'Để giải quyết bài toán đó, tôi đã thiết kế ứng dụng "Công Dân Số Nhí". Với sự đồng hành của bạn nhỏ Bé Sao AI, 6 nhiệm vụ học tập được biến thành hành trình phiêu lưu sinh động...' },
    { minute: 'Phút 3', title: 'Trực quan hóa hoạt động lớp học', content: 'Các em không nghe lý thuyết suông, mà trực tiếp làm thám tử lật tẩy tin đồn cá voi bay trên núi Sam, phân loại mật khẩu mạnh, gọi điện xác minh tài khoản bị hack...' },
    { minute: 'Phút 4', title: 'Minh chứng hiệu quả đo lường', content: 'Kết quả đối chiếu Pre-test và Post-test trên 40 học sinh lớp 5/1 cho thấy năng lực nhận diện cạm bẫy tăng hơn 100%. Các em đã từ người dùng thụ động trở thành công dân số có trách nhiệm...' },
    { minute: 'Phút 5', title: 'Kết luận & Khát vọng lan tỏa', content: 'Thông minh khi dùng AI - An toàn trong thế giới số - Trách nhiệm với cộng đồng. Tôi tin rằng giải pháp từ một lớp học vùng quê Tri Tôn hoàn toàn có thể nhân rộng đến mọi mái trường tiểu học trên cả nước. Xin trân trọng cảm ơn!' }
  ]
};
