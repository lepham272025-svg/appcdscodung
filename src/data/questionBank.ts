import { QuizQuestion } from '../types';

export const QUESTION_BANK: QuizQuestion[] = [
  // ==========================================
  // NHIỆM VỤ 1: AI LÀ NGƯỜI BẠN THÔNG MINH (10 CÂU)
  // ==========================================
  {
    id: 'm1_q1',
    missionId: 1,
    question: 'Trí tuệ nhân tạo (AI) hoạt động dựa trên điều gì?',
    options: [
      'Dựa trên cảm xúc và suy nghĩ tự nhiên như con người',
      'Dựa trên dữ liệu và các thuật toán máy tính do con người huấn luyện',
      'Dựa vào phép thuật huyền bí trong vi mạch máy tính',
      'Tự sinh ra và biết tất cả mọi điều mà không cần ai dạy'
    ],
    correctIndex: 1,
    explanation: 'AI là chương trình máy tính xử lý lượng lớn dữ liệu thông qua các thuật toán do con người lập trình và huấn luyện.',
    level: 'Nhận biết'
  },
  {
    id: 'm1_q2',
    missionId: 1,
    question: 'Hành động nào sau đây là cách sử dụng AI ĐÚNG ĐẮN khi làm bài tập làm văn?',
    options: [
      'Nhờ AI viết toàn bộ bài văn rồi chép nguyên xi nộp cho cô giáo',
      'Hỏi AI các ý tưởng mở bài, gợi ý từ ngữ hay, sau đó tự em viết bằng cảm xúc của mình',
      'Không đọc bài AI viết, chỉ copy dán nộp bài cho nhanh',
      'Bảo AI làm thay bài tập toán để mình đi chơi game'
    ],
    correctIndex: 1,
    explanation: 'AI là người bạn gợi ý ý tưởng. Việc tự suy nghĩ và viết bằng chính cảm xúc của bản thân mới giúp em rèn luyện tư duy và sự trung thực.',
    level: 'Thông hiểu'
  },
  {
    id: 'm1_q3',
    missionId: 1,
    question: 'Theo em, AI có bao giờ đưa ra thông tin sai lệch hoặc bịa đặt (ảo giác AI) không?',
    options: [
      'Không bao giờ, vì máy tính thông minh hơn con người mọi mặt',
      'Có thể mắc lỗi khi dữ liệu huấn luyện sai hoặc thiếu thông tin chính xác',
      'Chỉ sai khi máy tính bị mất điện',
      'AI luôn luôn đúng 100% trong mọi lĩnh vực'
    ],
    correctIndex: 1,
    explanation: 'AI có thể tạo ra thông tin không có thật (gọi là hiện tượng ảo giác AI - hallucination). Vì vậy học sinh luôn cần kiểm chứng lại với sách giáo khoa và thầy cô.',
    level: 'Nhận biết'
  },
  {
    id: 'm1_q4',
    missionId: 1,
    question: 'Việc nào sau đây BẮT BUỘC cần con người tự quyết định mà KHÔNG NÊN phó mặc cho AI?',
    options: [
      'Dịch nhanh một từ tiếng Anh sang tiếng Việt',
      'Quyết định chọn ai là bạn thân hoặc đánh giá nhân cách một người',
      'Gợi ý công thức tính diện tích hình thang',
      'Tìm kiếm danh sách các địa danh nổi tiếng ở An Giang'
    ],
    correctIndex: 1,
    explanation: 'Tình cảm, đạo đức, tình bạn và các quyết định nhân văn thuộc về trái tim và lý trí của con người, máy móc không thể thay thế.',
    level: 'Thông hiểu'
  },
  {
    id: 'm1_q5',
    missionId: 1,
    question: 'Khi em hỏi bài AI mà câu trả lời nghe rất lạ và khác với bài học của cô giáo, em nên làm gì?',
    options: [
      'Tin AI ngay vì AI thông minh hơn sách giáo khoa',
      'Dừng lại, đối chiếu với sách giáo khoa và hỏi cô giáo Kim Dung để được hướng dẫn',
      'Đăng ngay câu trả lời đó lên mạng khoe với các bạn',
      'Tẩy xóa bài giải trong vở và chép theo AI'
    ],
    correctIndex: 1,
    explanation: 'Khi gặp mâu thuẫn thông tin, đối chiếu tài liệu chính thống và hỏi thầy cô là cách học tập chủ động, khoa học.',
    level: 'Vận dụng'
  },
  {
    id: 'm1_q6',
    missionId: 1,
    question: 'Đặc điểm nào sau đây KHÔNG PHẢI là của Trí tuệ nhân tạo (AI)?',
    options: [
      'Xử lý tính toán và tìm kiếm thông tin cực nhanh',
      'Có trái tim, biết buồn vui, biết yêu thương như con người',
      'Nhận diện hình ảnh và giọng nói',
      'Học hỏi từ các ví dụ mẫu được cung cấp'
    ],
    correctIndex: 1,
    explanation: 'AI chỉ là máy móc mô phỏng hành vi thông minh, AI hoàn toàn không có cảm xúc, linh hồn hay tình yêu thương như con người.',
    level: 'Nhận biết'
  },
  {
    id: 'm1_q7',
    missionId: 1,
    question: 'Để đặt câu hỏi cho AI (câu lệnh - prompt) mang lại câu trả lời tốt nhất cho bài học Lịch sử, em nên làm thế nào?',
    options: [
      'Chỉ gõ một từ cộc lốc: "Lịch sử"',
      'Nêu rõ chủ đề, yêu cầu cụ thể (ví dụ: "Hãy tóm tắt chiến thắng Bạch Đằng năm 938 bằng 3 ý chính cho học sinh lớp 5")',
      'Gõ thật nhiều ký tự ngẫu nhiên vào ô chat',
      'Gõ mật khẩu của em vào cho AI tin tưởng'
    ],
    correctIndex: 1,
    explanation: 'Một câu lệnh rõ ràng, có vai trò, bối cảnh và yêu cầu cụ thể giúp AI đưa ra câu trả lời súc tích, phù hợp độ tuổi.',
    level: 'Vận dụng'
  },
  {
    id: 'm1_q8',
    missionId: 1,
    question: 'Sự phụ thuộc quá mức vào AI trong học tập có thể dẫn đến nguy cơ nào?',
    options: [
      'Lười suy nghĩ, giảm khả năng tự tư duy và sáng tạo',
      'Chữ viết ngày càng đẹp hơn',
      'Trí nhớ tăng vọt mà không cần học bài',
      'Không có nguy cơ nào cả'
    ],
    correctIndex: 0,
    explanation: 'Nếu ỷ lại vào AI làm hộ mọi bài tập, não bộ sẽ không được rèn luyện, dẫn đến mất khả năng tự lập giải quyết vấn đề.',
    level: 'Thông hiểu'
  },
  {
    id: 'm1_q9',
    missionId: 1,
    question: 'AI có thể hỗ trợ bác sĩ trong việc gì?',
    options: [
      'Phân tích ảnh chụp X-quang nhanh chóng để gợi ý phát hiện bệnh sớm',
      'Thay thế hoàn toàn bác sĩ chăm sóc bệnh nhân',
      'Tự mình đi mua thuốc ngoài chợ',
      'Tự ý phẫu thuật mà không cần sự giám sát của con người'
    ],
    correctIndex: 0,
    explanation: 'AI là công cụ hỗ trợ phân tích dữ liệu hình ảnh y tế rất đắc lực, nhưng quyết định chẩn đoán và điều trị cuối cùng luôn là bác sĩ.',
    level: 'Thông hiểu'
  },
  {
    id: 'm1_q10',
    missionId: 1,
    question: 'Quy trình sử dụng AI an toàn và hiệu quả gồm 3 bước nào?',
    options: [
      'Hỏi bừa - Chép hết - Quên luôn',
      'Xác định rõ mục tiêu - Đặt câu hỏi thông minh - Kiểm chứng và chắt lọc kiến thức',
      'Gửi ảnh cá nhân - Yêu cầu làm bài hộ - Đem nộp bài',
      'Chỉ dùng AI để giải toán và không học lý thuyết'
    ],
    correctIndex: 1,
    explanation: 'Quy trình chuẩn: Xác định nhu cầu rõ ràng -> Ra lệnh chuẩn xác -> Đọc kỹ và kiểm chứng trước khi vận dụng.',
    level: 'Vận dụng'
  },

  // ==========================================
  // NHIỆM VỤ 2: LÁ CHẮN THÔNG TIN CÁ NHÂN (10 CÂU)
  // ==========================================
  {
    id: 'm2_q1',
    missionId: 2,
    question: 'Thông tin nào sau đây thuộc về "Dữ liệu cá nhân nhạy cảm" cần tuyệt đối giữ bí mật?',
    options: [
      'Tên một bài hát thiếu nhi mà em yêu thích',
      'Mật khẩu tài khoản học tập, địa chỉ nhà riêng và số điện thoại của ba mẹ',
      'Tên loài hoa biểu tượng của tỉnh An Giang (hoa sen, hoa súng)',
      'Tên cuốn truyện tranh Đôrêmon'
    ],
    correctIndex: 1,
    explanation: 'Mật khẩu, địa chỉ cư trú và số điện thoại là dữ liệu định danh riêng tư. Tiết lộ có thể bị kẻ xấu lợi dụng lừa đảo hoặc tiếp cận ngoài đời thật.',
    level: 'Nhận biết'
  },
  {
    id: 'm2_q2',
    missionId: 2,
    question: 'Một mật khẩu được coi là AN TOÀN VÀ MẠNH khi có đặc điểm nào?',
    options: [
      'Chỉ là ngày tháng năm sinh của em: ví dụ "2015"',
      'Chữ "123456" hoặc họ tên của em không dấu',
      'Dài ít nhất 8 ký tự, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt (ví dụ: SaoBang@2026)',
      'Đặt trùng với tên tài khoản để cho dễ nhớ'
    ],
    correctIndex: 2,
    explanation: 'Mật khẩu mạnh cần tối thiểu 8 ký tự và kết hợp nhiều loại ký tự khác nhau để kẻ gian không thể dùng phần mềm đoán ra.',
    level: 'Thông hiểu'
  },
  {
    id: 'm2_q3',
    missionId: 2,
    question: 'Khi một trang web hoặc ứng dụng AI miễn phí yêu cầu em chụp và tải lên Căn cước công dân của ba mẹ, em phải làm gì?',
    options: [
      'Lấy trộm căn cước của ba mẹ chụp gửi ngay để được chơi miễn phí',
      'Tuyệt đối KHÔNG chụp gửi và báo ngay cho ba mẹ hoặc cô giáo biết',
      'Nhờ bạn cùng lớp chụp căn cước của nhà bạn gửi thay',
      'Tải lên nửa mặt trước và giấu mặt sau'
    ],
    correctIndex: 1,
    explanation: 'Căn cước công dân chứa mã số định danh, vân tay và dữ liệu cá nhân cực kỳ bảo mật. Tuyệt đối không tải lên các trang web lạ.',
    level: 'Vận dụng'
  },
  {
    id: 'm2_q4',
    missionId: 2,
    question: 'Khi sử dụng máy tính ở phòng thực hành Tin học của trường hoặc máy tính công cộng, sau khi học xong em cần làm gì?',
    options: [
      'Chỉ tắt màn hình rồi ra về',
      'Đăng xuất khỏi tài khoản cá nhân và đóng hoàn toàn trình duyệt',
      'Lưu mật khẩu vào trình duyệt cho bạn tiết sau dùng chung',
      'Để nguyên tài khoản mở sẵn để lần sau vào lại cho tiện'
    ],
    correctIndex: 1,
    explanation: 'Luôn luôn Đăng xuất (Sign Out) trên thiết bị dùng chung để ngăn người khác truy cập và sử dụng tài khoản của em.',
    level: 'Thông hiểu'
  },
  {
    id: 'm2_q5',
    missionId: 2,
    question: 'Em có nên đăng ảnh chụp vé máy bay, thời khóa biểu hoặc ảnh trước cổng nhà riêng lên mạng xã hội không?',
    options: [
      'Có chứ, đăng để khoe với mọi người cho vui',
      'Không nên, vì kẻ xấu có thể biết vị trí nhà em và lịch trình sinh hoạt gia đình để rình rập',
      'Chỉ đăng khi có nhiều bạn bè thả tim',
      'Đăng kèm theo số nhà và số điện thoại'
    ],
    correctIndex: 1,
    explanation: 'Hình ảnh chứa dấu vết vị trí địa lý (geolocation, cổng nhà, vé máy bay có mã QR) có thể bị kẻ gian lợi dụng để theo dõi thời gian vắng nhà.',
    level: 'Vận dụng'
  },
  {
    id: 'm2_q6',
    missionId: 2,
    question: 'Ai là người DUY NHẤT mà em có thể chia sẻ mật khẩu tài khoản học tập của mình?',
    options: [
      'Bạn thân nhất cùng bàn',
      'Người lạ vừa quen trong game hứa tặng trang phục VIP',
      'Cha mẹ hoặc người giám hộ đáng tin cậy của em',
      'Bất kỳ ai hỏi xin lịch sự'
    ],
    correctIndex: 2,
    explanation: 'Chỉ cha mẹ hoặc người giám hộ là người đồng hành quản lý an toàn của em. Ngay cả bạn thân cũng không nên chia sẻ vì có thể vô tình để lộ.',
    level: 'Nhận biết'
  },
  {
    id: 'm2_q7',
    missionId: 2,
    question: 'Hiện tượng "Dấu chân kỹ thuật số" (Digital Footprint) có nghĩa là gì?',
    options: [
      'Dấu giày dép dính bùn đất trên bàn phím máy tính',
      'Mọi thông tin, hình ảnh, bài đăng, bình luận em để lại trên Internet có thể tồn tại lâu dài',
      'Một loại trò chơi điện tử chạy bộ',
      'Thiết bị đo bước chân thông minh'
    ],
    correctIndex: 1,
    explanation: 'Dấu chân số là những dấu vết em để lại trên mạng (bình luận, like, ảnh). Chúng có thể được lưu lại và ảnh hưởng đến tương lai của em.',
    level: 'Thông hiểu'
  },
  {
    id: 'm2_q8',
    missionId: 2,
    question: 'Khi tạo tài khoản trên một nền tảng học tập mới, tại sao em nên xem xét kỹ các quyền truy cập ứng dụng đòi hỏi (micro, camera, danh bạ)?',
    options: [
      'Để biết ứng dụng có thu thập dữ liệu vượt quá mức cần thiết hay không',
      'Để cấp hết tất cả các quyền cho máy chạy nhanh hơn',
      'Không cần quan tâm, cứ bấm "Đồng ý tất cả"',
      'Chỉ để xem màu sắc icon ứng dụng'
    ],
    correctIndex: 0,
    explanation: 'Một ứng dụng giải toán không có lý do gì để đòi quyền đọc tin nhắn SMS hay danh bạ gia đình. Hãy cẩn trọng trước các đòi hỏi quyền vô lý.',
    level: 'Thông hiểu'
  },
  {
    id: 'm2_q9',
    missionId: 2,
    question: 'Bạn An nhận được câu hỏi từ chatbot trực tuyến: "Em tên gì, học trường nào, nhà ở ấp nào để robot gửi quà tận nhà?". An nên làm gì?',
    options: [
      'Gõ đầy đủ họ tên, lớp 5/1, trường TH Sóc Sơn, địa chỉ nhà chi tiết',
      'Từ chối cung cấp địa chỉ và hỏi ý kiến cô giáo hoặc phụ huynh trước khi tương tác tiếp',
      'Cho số điện thoại của ba mẹ để robot tự liên hệ',
      'Rủ các bạn khác cùng nhập địa chỉ để cùng nhận quà'
    ],
    correctIndex: 1,
    explanation: 'Tuyệt đối không khai báo thông tin trường lớp và địa chỉ nhà cho các dịch vụ trực tuyến không rõ nguồn gốc.',
    level: 'Vận dụng'
  },
  {
    id: 'm2_q10',
    missionId: 2,
    question: 'Biện pháp nào giúp bảo vệ tài khoản tốt nhất khi có kẻ muốn đăng nhập trái phép?',
    options: [
      'Dùng chung 1 mật khẩu thật dễ nhớ cho tất cả mọi trang web',
      'Bật tính năng xác thực hai yếu tố (2FA) kết hợp với số điện thoại của ba mẹ',
      'Viết mật khẩu dán lên mặt trước máy tính',
      'Không bao giờ đổi mật khẩu'
    ],
    correctIndex: 1,
    explanation: 'Xác thực 2 bước (2FA) bảo vệ tài khoản ngay cả khi kẻ xấu đoán được mật khẩu, vì cần thêm mã xác minh gửi về điện thoại ba mẹ.',
    level: 'Nhận biết'
  },

  // ==========================================
  // NHIỆM VỤ 3: THÁM TỬ TIN GIẢ (10 CÂU)
  // ==========================================
  {
    id: 'm3_q1',
    missionId: 3,
    question: '"Tin giả" (Fake news) trên mạng Internet thường được tạo ra nhằm mục đích gì?',
    options: [
      'Giúp học sinh học tập tốt hơn và yêu thiên nhiên',
      'Gây hoang mang, câu like, câu view để kiếm tiền hoặc lừa đảo trục lợi',
      'Cung cấp kiến thức chính xác từ Bộ Giáo dục và Đào tạo',
      'Để làm sạch môi trường mạng'
    ],
    correctIndex: 1,
    explanation: 'Tin giả thường được giật tít ly kỳ, đe dọa hoặc phóng đại để lôi kéo sự chú ý, phục vụ mục đích trục lợi cá nhân hoặc phá hoại.',
    level: 'Nhận biết'
  },
  {
    id: 'm3_q2',
    missionId: 3,
    question: 'Dấu hiệu nào sau đây cho thấy một bài đăng trên mạng CÓ NGUY CƠ CAO là tin giả?',
    options: [
      'Tiêu đề giật gân in hoa, câu từ hối thúc ("CHẤN ĐỘNG! CHIA SẺ NGAY KẺO BỊ XÓA!"), không có nguồn tác giả',
      'Được đăng trên cổng thông tin điện tử của cơ quan nhà nước có đuôi .gov.vn',
      'Có ngày tháng xuất bản rõ ràng và trích dẫn lời chuyên gia có thật',
      'Giọng văn điềm tĩnh, khách quan và có số liệu kiểm chứng'
    ],
    correctIndex: 0,
    explanation: 'Tiêu đề giật gân, đe dọa, thiếu tên tác giả hay tổ chức uy tín là biểu hiện kinh điển của tin giả, tin kích động.',
    level: 'Thông hiểu'
  },
  {
    id: 'm3_q3',
    missionId: 3,
    question: 'Công nghệ "Deepfake" sử dụng AI để làm gì?',
    options: [
      'Quét virus cho điện thoại',
      'Tạo ra video hoặc giọng nói giả mạo khuôn mặt người thật cực kỳ tinh vi',
      'Tăng tốc độ mạng Internet lên gấp đôi',
      'Dọn dẹp rác điện tử trên máy vi tính'
    ],
    correctIndex: 1,
    explanation: 'Deepfake dùng AI ghép mặt và giả giọng nói của người khác, khiến người xem tưởng rằng nhân vật đó thực sự nói hoặc làm điều đó.',
    level: 'Nhận biết'
  },
  {
    id: 'm3_q4',
    missionId: 3,
    question: 'Khi thấy một bức ảnh con cá voi bơi lơ lửng trên ngọn núi Sam (An Giang), em nên đánh giá như thế nào?',
    options: [
      'Tin ngay và chia sẻ rằng An Giang có hiện tượng kỳ lạ',
      'Nhận biết đây là ảnh ghép hoặc do AI tạo ra vì trái với quy luật tự nhiên và chưa có báo chí chính thống đưa tin',
      'Đi tìm cần câu để lên núi câu cá',
      'Bình luận khẳng định chắc chắn 100% có thật'
    ],
    correctIndex: 1,
    explanation: 'Vận dụng kiến thức khoa học và logic: cá voi sống ở biển, không thể bay trên núi; cần kiểm chứng nguồn gốc hình ảnh.',
    level: 'Vận dụng'
  },
  {
    id: 'm3_q5',
    missionId: 3,
    question: 'Để kiểm tra xem một bức ảnh có phải do AI vẽ hoặc ảnh cũ bị đăng lại hay không, ta có thể dùng phương pháp gì?',
    options: [
      'Tin luôn vào người đăng bài đầu tiên',
      'Sử dụng công cụ tìm kiếm ngược bằng hình ảnh (Reverse Image Search) hoặc tra cứu nguồn gốc ảnh',
      'Tắt máy tính đi ngủ',
      'Nhờ bạn cùng lớp bấm chia sẻ'
    ],
    correctIndex: 1,
    explanation: 'Tìm kiếm ngược hình ảnh giúp ta tìm thấy bức ảnh gốc xuất hiện từ bao giờ, do ai chụp hoặc có phải sản phẩm mô phỏng AI hay không.',
    level: 'Thông hiểu'
  },
  {
    id: 'm3_q6',
    missionId: 3,
    question: 'Điều nào sau đây là "SỰ THẬT" (Fact), khác với "Ý KIẾN CÁ NHÂN" (Opinion)?',
    options: [
      '"Trường Tiểu học Sóc Sơn nằm ở huyện Tri Tôn, tỉnh An Giang"',
      '"Môn Tin học là môn học vui nhất trên thế giới"',
      '"Robot hình ngôi sao là robot đẹp nhất vũ trụ"',
      '"Chơi game trên máy tính hay hơn đá bóng ngoài sân"'
    ],
    correctIndex: 0,
    explanation: 'Địa chỉ trường học là sự thật khách quan có thể xác minh được. Những nhận định còn lại là cảm xúc, sở thích và ý kiến chủ quan.',
    level: 'Thông hiểu'
  },
  {
    id: 'm3_q7',
    missionId: 3,
    question: 'Khi vô tình chia sẻ một tin giả lên nhóm lớp, em nên có thái độ và hành động thế nào?',
    options: [
      'Cãi cố và bảo rằng mình không có lỗi',
      'Lặng lẽ xóa bài mà không nói gì với ai',
      'Chủ động đính chính, xin lỗi các bạn và cô giáo, rồi xóa bài viết sai sự thật',
      'Đổ lỗi cho bạn khác đã gửi cho mình'
    ],
    correctIndex: 2,
    explanation: 'Người dũng cảm và có trách nhiệm sẵn sàng nhận lỗi, công khai đính chính sự thật để ngăn tin giả tiếp tục lây lan.',
    level: 'Vận dụng'
  },
  {
    id: 'm3_q8',
    missionId: 3,
    question: 'Tại sao chúng ta KHÔNG NÊN khẳng định một bức ảnh là giả CHỈ DỰA VÀO một chi tiết nhỏ như ngón tay?',
    options: [
      'Vì AI ngày càng tinh vi và cần phải tìm kiếm nguồn gốc gốc, bối cảnh thực tế để xác minh',
      'Vì AI không bao giờ vẽ sai ngón tay',
      'Vì máy tính luôn vẽ đẹp hơn họa sĩ',
      'Vì tất cả ảnh trên mạng đều là thật'
    ],
    correctIndex: 0,
    explanation: 'Các mô hình AI hiện đại vẽ rất chi tiết. Việc xác thực đòi hỏi xem xét nguồn tin, tác giả và bối cảnh chứ không chỉ nhìn lướt qua.',
    level: 'Thông hiểu'
  },
  {
    id: 'm3_q9',
    missionId: 3,
    question: 'Một bài viết có ghi "Theo một nhà khoa học giấu tên cho biết học sinh không cần ăn sáng mà chỉ cần uống nước ngọt có ga sẽ thông minh hơn". Em nên làm gì?',
    options: [
      'Nghe theo ngay và nhịn ăn sáng',
      'Chia sẻ cho cả lớp cùng biết bí quyết',
      'Nghi ngờ ngay vì nguồn tin mập mờ ("giấu tên"), phản khoa học, và hỏi ý kiến ba mẹ, bác sĩ hoặc thầy cô',
      'Khen người viết bài sáng tạo'
    ],
    correctIndex: 2,
    explanation: 'Nguồn tin "giấu tên", "truyền miệng" không có cơ sở khoa học và có thể gây nguy hại nghiêm trọng đến sức khỏe.',
    level: 'Vận dụng'
  },
  {
    id: 'm3_q10',
    missionId: 3,
    question: 'Quy tắc "5W1H" mà các thám tử nhí dùng để kiểm chứng thông tin gồm những câu hỏi nào?',
    options: [
      'Ai viết? Chuyện gì xảy ra? Ở đâu? Khi nào? Tại sao? Làm như thế nào?',
      'Mua ở đâu? Giá bao nhiêu? Có ngon không?',
      'Bao nhiêu người like? Ai đã thả tim? Có nhạc nền hay không?',
      'Trang web màu gì? Có chữ to không? Có hoạt hình không?'
    ],
    correctIndex: 0,
    explanation: '5W1H (Who, What, Where, When, Why, How) là công cụ kinh điển để phân tích tính đầy đủ và xác thực của mọi mẩu tin.',
    level: 'Nhận biết'
  },

  // ==========================================
  // NHIỆM VỤ 4: DŨNG SĨ CHỐNG LỪA ĐẢO (10 CÂU)
  // ==========================================
  {
    id: 'm4_q1',
    missionId: 4,
    question: 'Em nhận được tin nhắn: "Chúc mừng bạn trúng thưởng xe máy điện 50 triệu đồng! Nhấn vào đường link này để đóng phí ship 200k nhận quà". Em xử lý thế nào?',
    options: [
      'Bấm ngay vào link và nạp thẻ cào để nhận xe máy',
      'Nhận diện ngay đây là chiêu trò lừa đảo "trúng thưởng ảo", không bấm vào link và báo cho phụ huynh',
      'Chuyển tiếp tin nhắn cho tất cả các bạn trong lớp',
      'Xin tiền ba mẹ đóng phí vì sợ mất phần thưởng'
    ],
    correctIndex: 1,
    explanation: 'Nguyên tắc vàng: Không có phần thưởng miễn phí từ trên trời rơi xuống đối với trò chơi mà em không hề tham gia.',
    level: 'Vận dụng'
  },
  {
    id: 'm4_q2',
    missionId: 4,
    question: 'Tài khoản mạng xã hội của một bạn cùng lớp bỗng nhắn tin: "Tớ đang kẹt tiền gấp, cậu chuyển tiền vào tài khoản này cho tớ mượn 100k nhé". Em nên làm gì?',
    options: [
      'Chuyển tiền ngay vì tin bạn',
      'Gọi điện thoại trực tiếp hoặc gặp bạn ngoài đời để xác nhận xem tài khoản của bạn có bị hack hay không',
      'Chụp ảnh thẻ ngân hàng của ba mẹ gửi cho bạn',
      'Mắng mỏ bạn trên mạng'
    ],
    correctIndex: 1,
    explanation: 'Kẻ xấu thường chiếm đoạt tài khoản (hack nick) rồi nhắn tin mượn tiền hàng loạt. Cần xác thực trực tiếp qua kênh khác.',
    level: 'Vận dụng'
  },
  {
    id: 'm4_q3',
    missionId: 4,
    question: '"Tấn công giả mạo" (Phishing) thường được kẻ xấu thực hiện bằng cách nào?',
    options: [
      'Tạo trang web có giao diện giống hệt trang đăng nhập thật (như Facebook, Zalo, Google) để lừa người dùng nhập tài khoản và mật khẩu',
      'Gửi thư tay qua đường bưu điện',
      'Đến cổng trường gặp trực tiếp học sinh',
      'Cắt dây cáp mạng Internet ngoài đường'
    ],
    correctIndex: 0,
    explanation: 'Phishing là kỹ thuật lừa đảo bằng trang web giả mạo (đường link sai khác 1 vài chữ cái) để đánh cắp tên đăng nhập và mật khẩu.',
    level: 'Nhận biết'
  },
  {
    id: 'm4_q4',
    missionId: 4,
    question: 'Một người lạ quen trong game online yêu cầu em bật camera và cởi bớt áo khoác hoặc chụp ảnh riêng tư để tặng trang phục hiếm. Em cần làm gì NGAY LẬP TỨC?',
    options: [
      'Làm theo ngay vì rất muốn có trang phục hiếm trong game',
      'Tắt ngay camera, chặn tài khoản đó và báo ngay lập tức cho ba mẹ hoặc thầy cô giáo',
      'Thương lượng xin tặng đồ trước rồi mới chụp ảnh sau',
      'Giữ bí mật không kể với ai vì sợ bị mắng'
    ],
    correctIndex: 1,
    explanation: 'Đây là hành vi xâm hại trẻ em cực kỳ nguy hiểm. Luôn dừng tương tác, chặn kẻ xấu và báo ngay cho người lớn tin cậy để được bảo vệ.',
    level: 'Vận dụng'
  },
  {
    id: 'm4_q5',
    missionId: 4,
    question: 'Khi thấy một liên kết lạ có đuôi mở rộng đáng ngờ như ".exe", ".apk", ".scr" gửi kèm tin nhắn "Xem ảnh lộ đề thi lớp 5", điều gì có thể xảy ra nếu em bấm vào tải về?',
    options: [
      'Máy tính được tăng thêm dung lượng bộ nhớ',
      'Máy tính hoặc điện thoại có thể bị nhiễm mã độc, virus theo dõi và đánh cắp thông tin',
      'Em sẽ thấy toàn bộ đề thi chính thức của trường',
      'Máy tính tự động phát nhạc thiếu nhi'
    ],
    correctIndex: 1,
    explanation: 'Các tệp thực thi (.exe, .apk) từ nguồn không uy tín thường chứa mã độc (malware, trojan) phá hoại hoặc đánh cắp dữ liệu thiết bị.',
    level: 'Thông hiểu'
  },
  {
    id: 'm4_q6',
    missionId: 4,
    question: 'Số điện thoại Tổng đài Quốc gia Bảo vệ Trẻ em tại Việt Nam miễn phí cước gọi là số nào?',
    options: [
      'Số 111',
      'Số 113',
      'Số 114',
      'Số 115'
    ],
    correctIndex: 0,
    explanation: 'Tổng đài 111 là đường dây nóng quốc gia bảo vệ trẻ em, tiếp nhận và hỗ trợ 24/7 mọi vấn đề xâm hại, bạo lực và nguy cơ trên mạng.',
    level: 'Nhận biết'
  },
  {
    id: 'm4_q7',
    missionId: 4,
    question: 'Kẻ lừa đảo thường dùng tâm lý nào của trẻ em để dẫn dụ sập bẫy?',
    options: [
      'Lòng tham (thích quà miễn phí, vật phẩm game đắt tiền), sự tò mò và nỗi sợ hãi (bị đe dọa)',
      'Sự chăm chỉ học bài môn Toán',
      'Tình yêu thiên nhiên cây cỏ',
      'Sở thích ăn rau xanh'
    ],
    correctIndex: 0,
    explanation: 'Đánh vào lòng tham quà tặng miễn phí, sự tò mò hoặc đe dọa nạt nộ là các chiêu tâm lý mà kẻ lừa đảo thường áp dụng với học sinh.',
    level: 'Thông hiểu'
  },
  {
    id: 'm4_q8',
    missionId: 4,
    question: 'Nếu lỡ bấm vào một đường link lạ và phát hiện màn hình nhảy ra cảnh báo lạ, em nên xử lý bước đầu tiên ra sao?',
    options: [
      'Tiếp tục nhập số điện thoại của ba mẹ vào ô trống',
      'Đóng tab trình duyệt ngay, ngắt kết nối mạng wifi nếu cần và thông báo cho người lớn',
      'Đập vỡ màn hình máy tính để virus không chạy',
      'Gửi link đó cho các bạn khác nhờ bấm thử'
    ],
    correctIndex: 1,
    explanation: 'Bình tĩnh đóng cửa sổ độc hại, không làm theo các hướng dẫn trên màn hình lạ và nhờ người lớn hỗ trợ kiểm tra an toàn thiết bị.',
    level: 'Vận dụng'
  },
  {
    id: 'm4_q9',
    missionId: 4,
    question: 'Một người tự xưng là "chú công an" gọi điện thoại đe dọa gia đình em đang vi phạm pháp luật và yêu cầu em cung cấp mã OTP gửi về máy mẹ. Em phải làm gì?',
    options: [
      'Đọc ngay mã OTP vì sợ bị công an bắt',
      'Cúp máy ngay, không cung cấp bất kỳ mã số nào và kể ngay cho ba mẹ',
      'Lấy hết tiền tiết kiệm mang ra bưu điện gửi',
      'Nhắn tin mã OTP cho người đó'
    ],
    correctIndex: 1,
    explanation: 'Cơ quan công an không bao giờ làm việc qua điện thoại đòi hỏi mã OTP hay chuyển tiền. Đây là thủ đoạn lừa đảo mạo danh.',
    level: 'Vận dụng'
  },
  {
    id: 'm4_q10',
    missionId: 4,
    question: 'Biển báo an toàn số: "3 KHÔNG" khi tương tác trên không gian mạng là gì?',
    options: [
      'Không học bài - Không làm bài tập - Không đi ngủ sớm',
      'Không tin người lạ dễ dàng - Không bấm link đáng ngờ - Không chia sẻ thông tin bí mật',
      'Không dùng máy tính - Không mở tivi - Không đọc sách',
      'Không kết bạn - Không nói chuyện - Không tìm kiếm'
    ],
    correctIndex: 1,
    explanation: 'Quy tắc 3 KHÔNG giúp học sinh luôn giữ được lá chắn bảo vệ bản thân trước mọi cạm bẫy trực tuyến.',
    level: 'Nhận biết'
  },

  // ==========================================
  // NHIỆM VỤ 5: ỨNG XỬ VĂN MINH TRÊN MẠNG (10 CÂU)
  // ==========================================
  {
    id: 'm5_q1',
    missionId: 5,
    question: 'Hành vi nào sau đây là biểu hiện của "Bắt nạt trên mạng" (Cyberbullying)?',
    options: [
      'Nhắn tin chúc mừng sinh nhật bạn trên nhóm lớp',
      'Chụp lén ảnh dìm hàng của bạn rồi đăng lên mạng kèm lời lẽ chế giễu, kêu gọi tẩy chay bạn',
      'Gửi bài giảng ôn tập môn Tiếng Việt cho bạn khi bạn bị ốm',
      'Thả biểu tượng mặt cười vào bức tranh vẽ đẹp của bạn'
    ],
    correctIndex: 1,
    explanation: 'Đăng ảnh chế giễu, bêu riếu, xúc phạm danh dự hoặc cô lập bạn bè trên mạng là hành vi bắt nạt trực tuyến gây tổn thương tâm lý nghiêm trọng.',
    level: 'Nhận biết'
  },
  {
    id: 'm5_q2',
    missionId: 5,
    question: 'Khi em muốn sử dụng một bức tranh do bạn cùng lớp vẽ để làm hình nền bài thuyết trình Canva, em cần làm gì?',
    options: [
      'Tự ý lấy dùng và nhận là do mình vẽ',
      'Lễ phép hỏi xin phép bạn và ghi rõ tên tác giả bạn mình dưới bức tranh',
      'Cắt bỏ chữ ký của bạn để cô giáo không biết',
      'Chê bai tranh bạn xấu rồi mới dùng'
    ],
    correctIndex: 1,
    explanation: 'Tôn trọng quyền tác giả và công sức sáng tạo của người khác bằng cách xin phép và ghi nguồn là phẩm chất cốt lõi của công dân số.',
    level: 'Thông hiểu'
  },
  {
    id: 'm5_q3',
    missionId: 5,
    question: 'Trong nhóm Zalo của lớp 5/1, khi hai bạn có ý kiến bất đồng tranh cãi nhau, cách ứng xử tử tế nhất là:',
    options: [
      'Tham gia vào hùa theo chửi bới để thêm phần kịch tính',
      'Khuyên hai bạn bình tĩnh, tôn trọng sự khác biệt và nhờ cô giáo Kim Dung phân xử nếu cần',
      'Dùng từ ngữ thô tục để đe dọa các bạn',
      'Chụp màn hình đăng lên mạng xã hội để người ngoài vào phán xét'
    ],
    correctIndex: 1,
    explanation: 'Giữ thái độ hòa nhã, tôn trọng và làm cầu nối hòa giải giúp xây dựng môi trường lớp học đoàn kết, văn minh.',
    level: 'Vận dụng'
  },
  {
    id: 'm5_q4',
    missionId: 5,
    question: 'Nguyên tắc "Tôn trọng bản quyền" khi sử dụng tranh ảnh do AI tạo ra có ý nghĩa gì?',
    options: [
      'Em có thể nói dối là do chính tay em tự cầm cọ vẽ từng nét',
      'Em nên trung thực ghi chú: "Hình ảnh được hỗ trợ tạo bởi công nghệ AI"',
      'AI không có bản quyền nên em có thể lấy tranh người khác đem bán kiếm tiền',
      'Không cần quan tâm đến ai đã tạo ra'
    ],
    correctIndex: 1,
    explanation: 'Trung thực về nguồn gốc tác phẩm (ghi nhận công cụ AI hỗ trợ) thể hiện sự liêm chính trong học tập và sáng tạo số.',
    level: 'Thông hiểu'
  },
  {
    id: 'm5_q5',
    missionId: 5,
    question: 'Trước khi bấm nút "Đăng bài" (Post) hoặc "Bình luận" (Comment) trên mạng, em nên tự hỏi 3 điều nào (Quy tắc T.H.I.N.K)?',
    options: [
      'Điều này có Thật không? Có Hữu ích không? Có Tử tế không?',
      'Có nhiều like không? Có gây bão mạng không? Có làm bạn khóc không?',
      'Có tốn tiền không? Có màu đỏ không? Có dài không?',
      'Có ai đọc không? Có vui không? Có được điểm 10 không?'
    ],
    correctIndex: 0,
    explanation: 'Quy tắc THINK (True - Helpful - Inspiring - Necessary - Kind): Thật, Hữu ích, Truyền cảm hứng, Cần thiết và Tử tế.',
    level: 'Nhận biết'
  },
  {
    id: 'm5_q6',
    missionId: 5,
    question: 'Khi thấy một bài đăng có nội dung xúc phạm thầy cô giáo hoặc bôi nhọ trường lớp, hành động đúng của em là:',
    options: [
      'Bấm like và chia sẻ bài viết đó ngay',
      'Không lan truyền, báo cáo vi phạm (Report) nội dung xấu và thông báo cho cô giáo chủ nhiệm',
      'Bình luận thêm những từ ngữ thô tục hơn',
      'Rủ các bạn cùng trường vào cãi vã chửi bới tập thể'
    ],
    correctIndex: 1,
    explanation: 'Không tiếp tay lan truyền nội dung tiêu cực; sử dụng tính năng báo cáo vi phạm và thông tin kịp thời tới nhà trường.',
    level: 'Vận dụng'
  },
  {
    id: 'm5_q7',
    missionId: 5,
    question: 'Gõ chữ viết hoa TOÀN BỘ trong tin nhắn (ví dụ: "TẠI SAO BẠN KHÔNG LÀM BÀI???") trên mạng thường được người nhận hiểu là gì?',
    options: [
      'Thể hiện sự lịch sự và kính trọng',
      'Như thể người viết đang quát tháo, la hét giận dữ vào mặt người khác',
      'Tín hiệu báo bài tập rất dễ',
      'Một cách viết thơ ca hay'
    ],
    correctIndex: 1,
    explanation: 'Trong văn hóa mạng (Netiquette), gõ toàn bộ chữ in hoa tương đương với việc quát tháo vào tai người đọc, gây cảm giác khó chịu.',
    level: 'Thông hiểu'
  },
  {
    id: 'm5_q8',
    missionId: 5,
    question: 'Nếu bạn thân của em tâm sự rằng bạn đang bị một nhóm người trên mạng đe dọa và chế giễu, em nên giúp bạn thế nào?',
    options: [
      'Bảo bạn hãy im lặng chịu đựng một mình',
      'Động viên bạn, khuyên bạn lưu lại ảnh chụp bằng chứng và cùng bạn báo ngay cho cô giáo hoặc phụ huynh',
      'Rủ bạn lập nick ảo đi chửi lại họ',
      'Nghỉ chơi với bạn vì sợ bị vạ lây'
    ],
    correctIndex: 1,
    explanation: 'Chụp ảnh màn hình làm bằng chứng và tìm kiếm sự can thiệp từ người lớn có trách nhiệm là cách bảo vệ nạn nhân hiệu quả nhất.',
    level: 'Vận dụng'
  },
  {
    id: 'm5_q9',
    missionId: 5,
    question: 'Hành vi tự ý thêm người khác vào các nhóm chat không lành mạnh khi chưa được họ đồng ý là hành vi:',
    options: [
      'Rất thân thiện và hòa đồng',
      'Vi phạm quyền riêng tư và gây phiền hà cho người khác',
      'Được nhà trường khuyến khích',
      'Cách hay để có thêm nhiều bạn'
    ],
    correctIndex: 1,
    explanation: 'Cần tôn trọng không gian cá nhân của người khác, chỉ mời vào các nhóm học tập bổ ích khi bạn đã đồng ý tham gia.',
    level: 'Thông hiểu'
  },
  {
    id: 'm5_q10',
    missionId: 5,
    question: 'Khẩu hiệu nào sau đây thể hiện đúng tinh thần văn minh trên không gian số của học sinh tiểu học?',
    options: [
      '"Lời nói chẳng mất tiền mua - Lựa lời mà gõ cho vừa lòng nhau"',
      '"Ai chửi mình một câu, mình chửi lại mười câu"',
      '"Mạng ảo thì muốn nói gì cũng được không sợ ai biết"',
      '"Chỉ cần vui là được, không cần quan tâm người khác buồn hay đau"'
    ],
    correctIndex: 0,
    explanation: 'Dù ở thế giới thực hay thế giới số, lời nói và hành vi tử tế luôn là thước đo văn minh của mỗi con người.',
    level: 'Nhận biết'
  },

  // ==========================================
  // NHIỆM VỤ 6: EM LÀ CÔNG DÂN SỐ CÓ TRÁCH NHIỆM (10 CÂU)
  // ==========================================
  {
    id: 'm6_q1',
    missionId: 6,
    question: 'Một "Công dân số có trách nhiệm" (Responsible Digital Citizen) là người như thế nào?',
    options: [
      'Chỉ biết chơi game giỏi nhất lớp',
      'Biết sử dụng công nghệ và AI để học tập an toàn, trung thực, tôn trọng pháp luật và giúp đỡ cộng đồng',
      'Người sở hữu nhiều thiết bị điện thoại xịn nhất',
      'Người dành cả ngày 24/24 giờ ngồi trước màn hình máy tính'
    ],
    correctIndex: 1,
    explanation: 'Công dân số trách nhiệm sử dụng công nghệ một cách thông minh, an toàn, có ích cho bản thân và đóng góp tích cực cho xã hội.',
    level: 'Nhận biết'
  },
  {
    id: 'm6_q2',
    missionId: 6,
    question: 'Để cân bằng giữa cuộc sống số và sức khỏe thể chất (Digital Wellbeing), học sinh lớp 5 nên làm gì?',
    options: [
      'Chơi game liên tục 5 tiếng không nghỉ mắt',
      'Áp dụng quy tắc 20-20-20 (nhìn xa 20 giây sau mỗi 20 phút), tập thể dục thể thao và tương tác ngoài đời thật',
      'Vừa ăn cơm vừa dán mắt vào điện thoại',
      'Thức khuya lướt mạng đến 2 giờ sáng'
    ],
    correctIndex: 1,
    explanation: 'Cân bằng thời gian màn hình với vận động ngoài trời giúp bảo vệ thị lực và duy trì sức khỏe tinh thần dẻo dai.',
    level: 'Thông hiểu'
  },
  {
    id: 'm6_q3',
    missionId: 6,
    question: 'Trong 5 nguyên tắc vàng sử dụng AI an toàn, nguyên tắc "TƯ DUY PHẢN BIỆN" có nghĩa là:',
    options: [
      'Luôn luôn phản đối tất cả những gì người khác nói',
      'Không tin mù quáng vào kết quả do AI tạo ra mà luôn kiểm tra, đánh giá và đối chiếu nguồn tin',
      'Không bao giờ dùng AI nữa',
      'Chỉ tin vào bài viết trên mạng xã hội'
    ],
    correctIndex: 1,
    explanation: 'Tư duy phản biện là năng lực cốt lõi giúp con người giữ vị thế làm chủ công nghệ, không bị dẫn dắt bởi thông tin sai lệch.',
    level: 'Thông hiểu'
  },
  {
    id: 'm6_q4',
    missionId: 6,
    question: 'Khi sử dụng AI để sáng tạo một poster cổ động bảo vệ môi trường sông nước An Giang, em nên làm gì để trở thành công dân số gương mẫu?',
    options: [
      'Yêu cầu AI vẽ, sau đó tự viết khẩu hiệu ý nghĩa, ghi rõ nguồn hỗ trợ AI và chia sẻ thông điệp đẹp tới bạn bè',
      'Lấy ảnh của họa sĩ nổi tiếng rồi xóa tên họ thay bằng tên mình',
      'Bảo AI vẽ rồi bảo là mình tự vẽ tay 100%',
      'Không cần bảo vệ môi trường'
    ],
    correctIndex: 0,
    explanation: 'Kết hợp sáng tạo cá nhân với công cụ AI để phục vụ cộng đồng địa phương là việc làm đẹp và giàu ý nghĩa.',
    level: 'Vận dụng'
  },
  {
    id: 'm6_q5',
    missionId: 6,
    question: 'Lời cam kết công dân số nhí của học sinh lớp 5/1 bao gồm điều nào sau đây?',
    options: [
      'Cam kết bảo vệ dữ liệu cá nhân, dùng AI có trách nhiệm và nói lời tử tế trên mạng',
      'Cam kết chơi game thật nhiều để lên hạng',
      'Cam kết chia sẻ mật khẩu cho các bạn cùng bàn',
      'Cam kết không bao giờ hỏi cô giáo khi gặp sự cố'
    ],
    correctIndex: 0,
    explanation: 'Cam kết công dân số khẳng định ý thức tự giác tuân thủ chuẩn mực an toàn, trung thực và văn minh số.',
    level: 'Nhận biết'
  },
  {
    id: 'm6_q6',
    missionId: 6,
    question: 'Khi phát hiện một bạn trong lớp có dấu hiệu nghiện mạng xã hội, thường xuyên bỏ bê học tập và buồn bã, em nên làm gì?',
    options: [
      'Chế nhạo bạn là người kém cỏi',
      'Lắng nghe, chia sẻ thân thiện, rủ bạn tham gia các hoạt động ngoại khóa ngoài trời và báo cho cô giáo Kim Dung biết để hỗ trợ',
      'Mặc kệ bạn vì không liên quan đến mình',
      'Rủ bạn chơi game nhiều hơn để quên nỗi buồn'
    ],
    correctIndex: 1,
    explanation: 'Tình bạn đẹp và sự hỗ trợ kịp thời từ tập thể lớp giúp bạn vượt qua khó khăn và lấy lại cân bằng trong cuộc sống.',
    level: 'Vận dụng'
  },
  {
    id: 'm6_q7',
    missionId: 6,
    question: 'Vì sao chúng ta nói: "AI là công cụ hỗ trợ, con người mới là người cầm lái"?',
    options: [
      'Vì AI có thể lái xe ô tô',
      'Vì AI chỉ xử lý dữ liệu theo chỉ thị của con người; chính con người quyết định mục đích và chịu trách nhiệm đạo đức về kết quả',
      'Vì máy tính không biết chạy nhảy',
      'Vì con người có sức khỏe cơ bắp mạnh hơn máy bay'
    ],
    correctIndex: 1,
    explanation: 'Con người có đạo đức, lương tri, sự sáng tạo và trách nhiệm. Công nghệ chỉ phát huy giá trị tốt đẹp khi nằm trong tay người có đạo đức.',
    level: 'Thông hiểu'
  },
  {
    id: 'm6_q8',
    missionId: 6,
    question: 'Điều gì sau đây thể hiện sự tôn trọng quyền riêng tư của cha mẹ và người thân trên mạng?',
    options: [
      'Chụp ảnh lén lúc ba mẹ ngủ rồi đăng lên mạng mua vui',
      'Hỏi xin phép ba mẹ trước khi đăng ảnh chụp chung gia đình lên mạng',
      'Tự ý đăng sổ đỏ hoặc giấy tờ nhà lên mạng để khoe nhà đẹp',
      'Đăng bảng lương của ba mẹ lên nhóm chat'
    ],
    correctIndex: 1,
    explanation: 'Tôn trọng quyền riêng tư của mọi người, bắt đầu từ chính người thân trong gia đình, bằng việc luôn xin phép trước khi đăng ảnh hay thông tin.',
    level: 'Thông hiểu'
  },
  {
    id: 'm6_q9',
    missionId: 6,
    question: 'Khi tốt nghiệp khóa học "Công dân số nhí", nhiệm vụ tiếp theo của em là gì?',
    options: [
      'Quên hết tất cả những gì đã học',
      'Thực hành các kỹ năng an toàn hằng ngày và lan tỏa, giúp đỡ bạn bè, gia đình cùng sử dụng Internet thông minh',
      'Đi khoe khoang và chê bai những người chưa biết',
      'Chỉ dùng kiến thức khi đi thi lấy điểm'
    ],
    correctIndex: 1,
    explanation: 'Học đi đôi với hành; lan tỏa văn hóa số lành mạnh đến gia đình và cộng đồng là sứ mệnh của công dân số nhí.',
    level: 'Vận dụng'
  },
  {
    id: 'm6_q10',
    missionId: 6,
    question: 'Khẩu hiệu chính thức của dự án Công dân số nhí trường Tiểu học Sóc Sơn là gì?',
    options: [
      '"Chơi game thả ga - Không lo học bài"',
      '"Thông minh khi sử dụng AI – An toàn trong thế giới số – Trách nhiệm với cộng đồng"',
      '"Có máy tính là có tất cả"',
      '"Cứ hỏi AI không cần suy nghĩ"'
    ],
    correctIndex: 1,
    explanation: 'Khẩu hiệu thể hiện trọn vẹn 3 trụ cột: Năng lực trí tuệ (Thông minh) - Kỹ năng tự vệ (An toàn) - Chuẩn mực đạo đức (Trách nhiệm).',
    level: 'Nhận biết'
  }
];

// ==========================================
// BỘ KHẢO SÁT ĐẦU VÀO & ĐẦU RA (15 CÂU)
// Đánh giá 6 nhóm kỹ năng số
// ==========================================
export interface SurveyQuestion {
  id: string;
  skillDomain: 'Hiểu biết AI' | 'An toàn thông tin' | 'Nhận diện tin giả' | 'Phòng chống lừa đảo' | 'Ứng xử văn minh' | 'Trách nhiệm số';
  question: string;
  options: string[];
  correctIndex: number;
}

export const PRE_POST_SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 'sv_1',
    skillDomain: 'Hiểu biết AI',
    question: 'Khi sử dụng AI để hỗ trợ học tập, học sinh lớp 5 nên làm gì?',
    options: [
      'Chép nguyên văn bài làm của AI nộp cho cô',
      'Tham khảo ý tưởng, tự viết lại và kiểm tra lại sự chính xác',
      'Chỉ hỏi AI đáp án trắc nghiệm rồi khoanh',
      'Để AI tự học một mình'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_2',
    skillDomain: 'Hiểu biết AI',
    question: 'AI có thể tự có cảm xúc vui buồn như con người không?',
    options: [
      'Có, khi máy tính được sạc đầy pin',
      'Không, AI chỉ là thuật toán xử lý dữ liệu máy móc',
      'Có, AI biết yêu thương và hờn dỗi',
      'Tùy vào hãng sản xuất điện thoại'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_3',
    skillDomain: 'Hiểu biết AI',
    question: 'Nếu AI trả lời sai một câu hỏi Lịch sử lớp 5, nguyên nhân có thể do đâu?',
    options: [
      'Dữ liệu đào tạo AI bị sai, thiếu hoặc hiện tượng ảo giác AI',
      'Do máy tính bị ốm sốt',
      'AI cố tình nói dối trêu chọc em',
      'Do bóng đèn trong phòng học bị chớp'
    ],
    correctIndex: 0
  },
  {
    id: 'sv_4',
    skillDomain: 'An toàn thông tin',
    question: 'Mật khẩu nào sau đây là mạnh và an toàn nhất?',
    options: [
      '12345678',
      'SocSon51@AnGiang',
      'nguyenvana',
      '01012015'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_5',
    skillDomain: 'An toàn thông tin',
    question: 'Em có nên cung cấp địa chỉ nhà và số điện thoại cho trang web lạ để nhận quà miễn phí?',
    options: [
      'Có, vì quà miễn phí rất hấp dẫn',
      'Tuyệt đối không, vì có nguy cơ bị lộ thông tin cá nhân nguy hiểm',
      'Chỉ cho số điện thoại của bạn cùng bàn',
      'Cho một nửa địa chỉ'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_6',
    skillDomain: 'An toàn thông tin',
    question: 'Sau khi sử dụng máy tính ở thư viện hoặc phòng tin học, em cần làm gì?',
    options: [
      'Để nguyên tài khoản mở sẵn',
      'Đăng xuất (Sign out) hoàn toàn tài khoản cá nhân',
      'Tắt màn hình mà không đóng trình duyệt',
      'Lưu mật khẩu vào máy'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_7',
    skillDomain: 'Nhận diện tin giả',
    question: 'Dấu hiệu nào cảnh báo một bài đăng có thể là tin giả?',
    options: [
      'Có trích dẫn nguồn từ Bộ Giáo dục & Đào tạo',
      'Tiêu đề giật gân, in hoa toàn bộ, kèm lời giục giã chia sẻ ngay',
      'Có tác giả và ngày giờ rõ ràng',
      'Nội dung khách quan, lịch sự'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_8',
    skillDomain: 'Nhận diện tin giả',
    question: 'Công nghệ Deepfake có thể tạo ra điều gì?',
    options: [
      'Video và giọng nói giả mạo người thật',
      'Một loại virus ăn đứt dây điện',
      'Trò chơi nhảy dây',
      'Bức tranh vẽ tay bằng chì màu'
    ],
    correctIndex: 0
  },
  {
    id: 'sv_9',
    skillDomain: 'Nhận diện tin giả',
    question: 'Khi thấy một thông tin giật gân trên mạng xã hội, hành động thông minh nhất là:',
    options: [
      'Bấm chia sẻ ngay cho bạn bè',
      'Dừng lại, kiểm tra nguồn tin từ báo chính thống và hỏi người lớn',
      'Chửi bới người đăng bài',
      'Tin ngay 100%'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_10',
    skillDomain: 'Phòng chống lừa đảo',
    question: 'Khi nhận được tin nhắn trúng thưởng từ người lạ kèm link yêu cầu nạp tiền, em nên làm gì?',
    options: [
      'Nạp tiền ngay để nhận quà',
      'Không bấm vào link, chặn tin nhắn và kể cho ba mẹ hoặc cô giáo',
      'Gửi link cho cả lớp cùng bấm',
      'Nhắn tin xin thêm quà'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_11',
    skillDomain: 'Phòng chống lừa đảo',
    question: 'Số điện thoại Tổng đài Quốc gia Bảo vệ Trẻ em miễn phí là:',
    options: [
      '111',
      '113',
      '114',
      '115'
    ],
    correctIndex: 0
  },
  {
    id: 'sv_12',
    skillDomain: 'Ứng xử văn minh',
    question: 'Hành động nào sau đây thể hiện văn hóa tử tế trên mạng?',
    options: [
      'Chế giễu ảnh chụp bạn khi bạn làm sai bài tập',
      'Động viên, bình luận lịch sự và bảo vệ bạn khi bạn bị bắt nạt',
      'Lập nhóm kín nói xấu bạn bè và thầy cô',
      'Lan truyền chuyện bí mật của bạn'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_13',
    skillDomain: 'Ứng xử văn minh',
    question: 'Khi sử dụng tranh vẽ của người khác, em cần làm gì?',
    options: [
      'Tự ý lấy dùng và nhận là của mình',
      'Xin phép tác giả và ghi nguồn tác giả rõ ràng',
      'Cắt bỏ tên tác giả',
      'Chê bai tác phẩm của họ'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_14',
    skillDomain: 'Trách nhiệm số',
    question: 'Học sinh lớp 5 nên làm gì để bảo vệ sức khỏe khi sử dụng thiết bị số?',
    options: [
      'Nhìn màn hình liên tục 4 tiếng không chớp mắt',
      'Áp dụng quy tắc nghỉ ngơi mắt và vận động thể dục ngoài trời',
      'Thức khuya lướt mạng đến sáng',
      'Vừa sạc pin vừa chơi điện thoại dưới chăn'
    ],
    correctIndex: 1
  },
  {
    id: 'sv_15',
    skillDomain: 'Trách nhiệm số',
    question: 'Ý nghĩa của việc trở thành "Công dân số có trách nhiệm" là:',
    options: [
      'Làm chủ công nghệ, sử dụng an toàn, trung thực và mang lại điều tốt đẹp cho xã hội',
      'Chơi game giỏi để kiếm nhiều tiền ảo',
      'Có nhiều tài khoản mạng xã hội nhất',
      'Không bao giờ dùng đến máy tính'
    ],
    correctIndex: 0
  }
];
