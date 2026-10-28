import { Mission } from '../types';

export const MISSIONS_DATA: Mission[] = [
  // ==========================================================
  // NHIỆM VỤ 1
  // ==========================================================
  {
    id: 1,
    title: 'Nhiệm Vụ 1: AI Là Người Bạn Thông Minh',
    slogan: 'Hiểu đúng về AI - Học cùng AI, không ỷ lại AI!',
    iconName: 'Bot',
    color: 'emerald',
    badgeName: 'Bậc Thầy Khám Phá AI',
    estimatedMinutes: 35,
    summary: 'Tìm hiểu bản chất của Trí tuệ nhân tạo (AI), nhận biết điều AI có thể làm xuất sắc và giới hạn của AI, cách sử dụng AI hỗ trợ học tập hiệu quả mà không sao chép hay lệ thuộc.',
    learningGoals: [
      'Hiểu AI là hệ thống máy tính học hỏi từ dữ liệu do con người cung cấp.',
      'Phân biệt việc AI có thể làm tốt (tính toán, tìm kiếm, dịch thuật) và việc con người phải tự quyết định (đạo đức, cảm xúc, tình bạn).',
      'Nhận biết hiện tượng AI có thể mắc sai lầm (ảo giác AI).',
      'Thành thạo công thức 3 bước đặt câu lệnh (prompt) an toàn, hiệu quả để gợi mở tư duy khi học tập.'
    ],
    sections: [
      {
        title: '1. Trí tuệ nhân tạo (AI) là gì?',
        content: [
          'Trí tuệ nhân tạo (viết tắt là AI - Artificial Intelligence) là khả năng của máy tính hoặc robot mô phỏng các hành vi thông minh của con người như: nhận diện hình ảnh, hiểu giọng nói, dịch ngôn ngữ và giải bài toán.',
          'AI không có bộ não sinh học và không có cảm xúc. AI học hỏi bằng cách đọc hàng triệu trang sách, bài báo và dữ liệu do con người nạp vào.',
          'Hãy tưởng tượng AI như một "bạn thủ thư siêu trí nhớ": Bạn ấy tìm sách rất nhanh, nhưng không thể cảm nhận được vẻ đẹp của câu chuyện hay tình yêu thương như các em!'
        ],
        tips: 'Mẹo nhớ: AI là công cụ hỗ trợ thông minh, không phải thần tài biết hết mọi sự!'
      },
      {
        title: '2. AI có thể mắc sai lầm không?',
        content: [
          'CÓ! AI hoàn toàn có thể trả lời sai hoặc bịa đặt thông tin nghe rất thuyết phục. Trong khoa học máy tính, hiện tượng này gọi là "Ảo giác AI" (Hallucination).',
          'Nguyên nhân: Nếu dữ liệu người ta dạy AI có thông tin sai lệch, hoặc khi AI không tìm thấy dữ liệu, nó sẽ tự xâu chuỗi các từ ngữ lại thành câu trả lời nghe có vẻ hợp lý nhưng không có thật.',
          'Vì vậy, học sinh lớp 5 chúng mình tuyệt đối KHÔNG tin 100% vào mọi câu trả lời của AI. Luôn kiểm tra lại với sách giáo khoa, từ điển hoặc hỏi cô giáo Kim Dung!'
        ],
        warning: 'Cảnh báo: Không dùng thông tin từ AI làm bài kiểm tra nếu chưa kiểm chứng với tài liệu chính thống!'
      },
      {
        title: '3. Công thức 3 bước dùng AI thông minh',
        content: [
          'Bước 1: Xác định rõ mục tiêu cần hỗ trợ (Ví dụ: Em muốn tìm 3 ý tưởng mở bài văn tả cây phượng vĩ).',
          'Bước 2: Ra lệnh chi tiết, có văn hóa và rõ độ tuổi (Ví dụ: "Em là học sinh lớp 5, hãy gợi ý cho em 3 cách mở bài gián tiếp tả cây phượng ở sân trường Sóc Sơn nhé").',
          'Bước 3: Tự em viết lại bằng lời văn và cảm xúc thật của mình, tuyệt đối không sao chép nguyên văn!'
        ]
      }
    ],
    sortingActivity: {
      instruction: 'Hãy phân loại xem hành động nào AI có thể hỗ trợ tốt, hành động nào BẮT BUỘC cần con người tự quyết định!',
      categoryA: 'AI Có Thể Hỗ Trợ Tốt',
      categoryB: 'Bắt Buộc Con Người Quyết Định',
      items: [
        { text: 'Gợi ý từ vựng tiếng Anh chủ đề trường học', category: 'A', explanation: 'AI có cơ sở dữ liệu từ điển phong phú, hỗ trợ tra cứu rất nhanh.' },
        { text: 'Quyết định tha thứ hay giận bạn cùng lớp', category: 'B', explanation: 'Tình cảm và sự bao dung thuộc về trái tim con người, máy móc không thể cảm nhận.' },
        { text: 'Gợi ý dàn ý bài tập làm văn miêu tả', category: 'A', explanation: 'AI giúp gợi mở cấu trúc bài văn, nhưng em phải tự viết bằng lời văn của mình.' },
        { text: 'Chấm điểm và thấu hiểu hoàn cảnh của một học sinh', category: 'B', explanation: 'Chỉ thầy cô giáo mới có tình thương và sự cảm thông để đánh giá đúng hoàn cảnh học trò.' },
        { text: 'Tóm tắt nội dung một văn bản dài trong 3 ý chính', category: 'A', explanation: 'AI rất giỏi trong việc phân tích văn bản và rút trích các ý nổi bật.' },
        { text: 'Lựa chọn nghề nghiệp tương lai em yêu thích nhất', category: 'B', explanation: 'Ước mơ và sở thích cá nhân chỉ có chính em mới cảm nhận và quyết định được.' }
      ]
    },
    scenario: {
      id: 'sc_m1',
      missionId: 1,
      title: 'Tình huống: Bài tập làm văn ngày mai phải nộp',
      situation: 'Tối nay bạn Nam chuẩn bị đi ngủ thì nhớ ra ngày mai phải nộp bài văn tả cảnh sông nước quê hương An Giang. Nam định mở ứng dụng AI và gõ: "Viết hộ tao bài văn tả sông nước An Giang điểm 10 rồi chép vào vở".',
      context: 'Nếu là Nam, em sẽ xử lý như thế nào để vừa hoàn thành bài tập vừa trung thực?',
      choices: [
        {
          text: 'Chép nguyên văn bài AI viết vào vở, thêm tên mình vào để được điểm cao.',
          isSafe: false,
          feedback: 'Không nên! Việc này là gian lận học tập. Em sẽ không rèn luyện được kỹ năng viết văn và sẽ lúng túng khi kiểm tra trực tiếp trên lớp.',
          points: 0
        },
        {
          text: 'Hỏi AI: "Gợi ý cho em 3 hình ảnh đẹp về dòng sông mùa nước nổi ở An Giang để làm tư liệu", sau đó tự suy nghĩ và viết bằng cảm xúc của chính mình.',
          isSafe: true,
          feedback: 'Xuất sắc! Đây chính là cách dùng AI văn minh: Coi AI như người bạn đồng hành gợi ý tư liệu, còn sản phẩm là do chính khối óc của em tạo ra.',
          points: 10
        },
        {
          text: 'Không làm bài nữa, sáng mai đến lớp đổ lỗi cho máy tính bị hỏng.',
          isSafe: false,
          feedback: 'Không trung thực và thiếu trách nhiệm! Là học sinh lớp 5, em cần chủ động sắp xếp thời gian học tập.',
          points: 0
        }
      ],
      safeActionGuide: 'Ghi nhớ: Dùng AI để "mở khóa tư duy", không dùng AI để "lười biếng tư duy"!'
    }
  },

  // ==========================================================
  // NHIỆM VỤ 2
  // ==========================================================
  {
    id: 2,
    title: 'Nhiệm Vụ 2: Lá Chắn Thông Tin Cá Nhân',
    slogan: 'Bảo vệ thông tin riêng tư - Xây dựng lá chắn số vững chắc!',
    iconName: 'ShieldCheck',
    color: 'blue',
    badgeName: 'Hiệp Sĩ Bảo Vệ Dữ Liệu',
    estimatedMinutes: 35,
    summary: 'Học cách nhận diện các loại dữ liệu cá nhân nhạy cảm, nguyên tắc tạo mật khẩu mạnh, phòng ngừa rò rỉ dữ liệu khi dùng ứng dụng và AI, bảo vệ tài khoản số học sinh.',
    learningGoals: [
      'Phân biệt thông tin công khai và thông tin cá nhân cần bảo mật tuyệt đối (mật khẩu, địa chỉ, số điện thoại, ảnh thẻ).',
      'Biết cách đặt mật khẩu mạnh (trên 8 ký tự, có hoa, thường, số, ký tự đặc biệt) và giữ bí mật.',
      'Hiểu rõ nguyên tắc đăng xuất tài khoản trên máy tính trường lớp hoặc nơi công cộng.',
      'Từ chối các yêu cầu cung cấp dữ liệu riêng tư từ người lạ hoặc các ứng dụng không rõ nguồn gốc.'
    ],
    sections: [
      {
        title: '1. Kho báu thông tin cá nhân của em',
        content: [
          'Dữ liệu cá nhân là tất cả những gì giúp người khác nhận ra em và gia đình: Họ tên đầy đủ, ngày tháng năm sinh, địa chỉ nhà riêng, số điện thoại ba mẹ, tài khoản học tập và mật khẩu.',
          'Nếu kẻ xấu có được các thông tin này, họ có thể: Giả mạo em để lừa tiền người thân, đến tận nhà hoặc trường học gây nguy hiểm, hoặc chiếm đoạt tài khoản game và mạng xã hội của em.',
          'Hãy coi thông tin cá nhân như chiếc chìa khóa nhà: Em có bao giờ trao chìa khóa nhà cho một người lạ gặp ngoài đường không? Trên mạng cũng y như vậy!'
        ],
        tips: 'Quy tắc vàng: Thông tin nào không muốn hét to giữa sân trường thì đừng bao giờ gõ lên mạng!'
      },
      {
        title: '2. Bí kíp tạo "Mật khẩu siêu cấp an toàn"',
        content: [
          'Mật khẩu yếu: "123456", "nguyenvana", "2015", "socson". Kẻ gian dùng phần mềm chỉ mất chưa đầy 1 giây để đoán ra!',
          'Mật khẩu mạnh: Dài tối thiểu 8 ký tự, kết hợp CHỮ HOA, chữ thường, chữ số và ký hiệu đặc biệt. Ví dụ: SocSon@51YeuThuong, SaoBang#2026.',
          'Mẹo nhớ mật khẩu: Nghĩ ra một câu nói yêu thích rồi ghép các chữ cái đầu tiên lại (Ví dụ: "Em Yêu Trường Tiểu Học Sóc Sơn 5/1" -> EYTTHSS5/1@).'
        ],
        warning: 'Lưu ý: Không bao giờ dùng chung 1 mật khẩu cho tất cả tài khoản học tập, email và game!'
      },
      {
        title: '3. Lá chắn khi sử dụng máy tính trường học',
        content: [
          'Tại phòng Tin học trường TH Sóc Sơn hoặc tiệm net: Luôn bấm ĐĂNG XUẤT (Sign Out) sau khi hết giờ thực hành.',
          'Khi trình duyệt hỏi: "Bạn có muốn lưu mật khẩu không?", hãy chọn KHÔNG (Never / Not now).',
          'Không cho bạn bè mượn tài khoản học tập của mình để tránh việc bạn vô tình bấm xóa dữ liệu hoặc gửi tin nhắn không phù hợp.'
        ]
      }
    ],
    sortingActivity: {
      instruction: 'Hãy xếp các thông tin sau vào nhóm "CẦN GIỮ BÍ MẬT TUYỆT ĐỐI" hoặc "CÓ THỂ CHIA SẺ AN TOÀN"!',
      categoryA: 'Cần Giữ Bí Mật Tuyệt Đối',
      categoryB: 'Có Thể Chia Sẻ An Toàn',
      items: [
        { text: 'Mật khẩu tài khoản học trực tuyến', category: 'A', explanation: 'Mật khẩu chỉ duy nhất em và ba mẹ được biết.' },
        { text: 'Môn học yêu thích của em ở trường', category: 'B', explanation: 'Sở thích học tập lành mạnh hoàn toàn có thể chia sẻ cùng bạn bè.' },
        { text: 'Địa chỉ nhà riêng và số điện thoại của mẹ', category: 'A', explanation: 'Kẻ xấu có thể tiếp cận nhà riêng hoặc gọi điện tống tiền lừa đảo.' },
        { text: 'Ảnh chụp mặt trước căn cước công dân của ba', category: 'A', explanation: 'Dữ liệu định danh quốc gia cực kỳ nhạy cảm, tuyệt đối không đăng tải.' },
        { text: 'Tên cuốn sách hay về khoa học em vừa đọc', category: 'B', explanation: 'Chia sẻ sách hay giúp lan tỏa tinh thần đọc sách trong tập thể lớp.' },
        { text: 'Mã số OTP gửi về điện thoại', category: 'A', explanation: 'Mã OTP là chìa khóa mở ví tiền và tài khoản, không chia sẻ cho bất kỳ ai kể cả công an hay giáo viên.' }
      ]
    },
    scenario: {
      id: 'sc_m2',
      missionId: 2,
      title: 'Tình huống: Quà tặng miễn phí từ người lạ trong game',
      situation: 'Bạn Minh đang chơi một trò chơi giáo dục trực tuyến thì nhận được tin nhắn từ một tài khoản tên "Admin_TangQuaVIP": "Chúc mừng bạn nhận được 1000 kim cương! Hãy gửi tên đăng nhập, mật khẩu và số điện thoại của ba mẹ để hệ thống kích hoạt quà tặng trong 5 phút nhé".',
      context: 'Nếu là Minh, em sẽ đưa ra quyết định nào?',
      choices: [
        {
          text: 'Gửi ngay mật khẩu và số điện thoại của mẹ vì rất muốn có 1000 kim cương.',
          isSafe: false,
          feedback: 'Nguy hiểm! Kẻ xấu sẽ đổi ngay mật khẩu để chiếm đoạt tài khoản của em và dùng số điện thoại của mẹ để nhắn tin lừa đảo nạp tiền.',
          points: 0
        },
        {
          text: 'Không gửi bất kỳ thông tin nào, chụp màn hình lại và báo ngay cho ba mẹ hoặc cô giáo Kim Dung.',
          isSafe: true,
          feedback: 'Rất thông minh! Người quản trị hệ thống thật sự KHÔNG BAO GIỜ hỏi mật khẩu của người dùng. Đây 100% là kẻ lừa đảo.',
          points: 10
        },
        {
          text: 'Cho mật khẩu giả kèm lời thách thức chửi bới người đó.',
          isSafe: false,
          feedback: 'Không nên đôi co hay chửi bới với kẻ xấu trên mạng. Cách tốt nhất là dừng tương tác và chặn tài khoản ngay.',
          points: 0
        }
      ],
      safeActionGuide: 'Nhớ kỹ: Quản trị viên hay thầy cô không bao giờ nhắn tin xin mật khẩu của em!'
    }
  },

  // ==========================================================
  // NHIỆM VỤ 3
  // ==========================================================
  {
    id: 3,
    title: 'Nhiệm Vụ 3: Thám Tử Tin Giả',
    slogan: 'Mắt sáng nhìn thấu tin đồn - Kiểm tra nguồn tin trước khi chia sẻ!',
    iconName: 'Search',
    color: 'amber',
    badgeName: 'Thám Tử Kỹ Thuật Số',
    estimatedMinutes: 35,
    summary: 'Rèn luyện kỹ năng phân biệt sự thật và ý kiến cá nhân, phát hiện tin đồn thất thiệt, nhận diện hình ảnh/video do AI tạo dựng (Deepfake), và quy trình kiểm chứng nguồn tin 5W1H.',
    learningGoals: [
      'Phân biệt rõ ràng giữa "Sự thật" (Fact) và "Ý kiến cá nhân" (Opinion).',
      'Nhận biết 4 dấu hiệu cảnh báo tin giả: Giật tít đe dọa, thiếu tác giả, sai lỗi chính tả, kêu gọi chia sẻ gấp.',
      'Hiểu công nghệ Deepfake và hình ảnh AI tổng hợp để không tin ngay vào mắt mình khi chưa kiểm chứng.',
      'Thực hành quy tắc 5W1H và dừng lan truyền khi thông tin chưa được cơ quan chức năng hoặc thầy cô xác nhận.'
    ],
    sections: [
      {
        title: '1. Tin giả là gì và vì sao nguy hiểm?',
        content: [
          'Tin giả (Fake News) là những câu chuyện, bài viết hoặc hình ảnh sai sự thật được cố tình tạo ra để lừa gạt, gây sợ hãi hoặc câu tương tác (like, share) để bán hàng.',
          'Ví dụ: Tin đồn "ngày mai toàn bộ học sinh An Giang được nghỉ học đi xem người ngoài hành tinh" làm các bạn bỏ học, gây hoang mang cho cha mẹ và nhà trường.',
          'Học sinh chia sẻ tin giả có thể bị nhà trường kỷ luật và vi phạm Luật An ninh mạng!'
        ],
        tips: 'Trước khi chia sẻ bất kỳ bài viết nào: Hãy DỪNG LẠI 30 GIÂY và tự hỏi: "Tin này có nguồn gốc uy tín không?"'
      },
      {
        title: '2. Bí kíp Thám tử 5W1H lật tẩy tin giả',
        content: [
          'WHO (Ai viết?): Có tên tác giả, cơ quan báo chí chính thống (VTV, Báo An Giang, Cổng TTĐT Bộ GD&ĐT) không? Hay chỉ là "tài khoản ẩn danh"?',
          'WHAT (Chuyện gì?): Nội dung có giật gân vô lý không? Có hình ảnh minh chứng xác thực không?',
          'WHEN (Khi nào?): Sự kiện xảy ra hôm nay hay là ảnh từ 5 năm trước bị đăng lại?',
          'WHERE (Ở đâu?): Địa danh có chính xác không?',
          'WHY (Mục đích gì?): Bài viết có đang cố gắng bán thuốc, đòi chuyển tiền hay câu like không?'
        ]
      },
      {
        title: '3. Cảnh giác với ảnh và video do AI tạo ra (Deepfake)',
        content: [
          'Ngày nay, công cụ AI có thể vẽ tranh người giống hệt ảnh chụp thật, hoặc làm video giả giọng nói của người khác (Deepfake).',
          'Dấu hiệu nghi ngờ: Bàn tay có quá nhiều hoặc quá ít ngón, mắt không chớp tự nhiên, bóng đổ ánh sáng lộn xộn, giọng nói cứng đờ như robot.',
          'Tuy nhiên, AI ngày càng tinh vi, nên cách chắc chắn nhất là KIỂM TRA NGUỒN XÁC THỰC từ đài truyền hình và báo chí quốc gia.'
        ],
        warning: 'Lưu ý: Không khẳng định ngay một bức ảnh là thật chỉ vì "tận mắt thấy trên mạng"!'
      }
    ],
    sortingActivity: {
      instruction: 'Hãy phân loại các nhận định dưới đây thành "SỰ THẬT (Fact)" hoặc "Ý KIẾN / SUY ĐOÁN (Opinion)"!',
      categoryA: 'Sự Thật (Có Thể Xác Minh)',
      categoryB: 'Ý Kiến / Suy Đoán (Chủ Quan)',
      items: [
        { text: 'Trường Tiểu học Sóc Sơn thuộc huyện Tri Tôn, tỉnh An Giang', category: 'A', explanation: 'Địa chỉ trường học là dữ liệu hành chính thực tế, kiểm chứng được 100%.' },
        { text: 'Kem sô-cô-la là món tráng miệng ngon nhất trần đời', category: 'B', explanation: 'Mỗi bạn có khẩu vị khác nhau, đây là sở thích cá nhân.' },
        { text: 'Trái Đất quay quanh Mặt Trời', category: 'A', explanation: 'Đây là quy luật thiên văn học đã được khoa học chứng minh.' },
        { text: 'Chắc chắn ngày mai trời sẽ mưa to làm trường học ngập nước', category: 'B', explanation: 'Dự đoán chưa xảy ra, cần tham khảo bản tin dự báo thời tiết của Đài khí tượng.' },
        { text: 'Môn Toán khó hơn rất nhiều so với môn Tiếng Việt', category: 'B', explanation: 'Mức độ khó dễ tùy thuộc vào năng khiếu của từng học sinh.' },
        { text: 'Nước sôi ở nhiệt độ 100 độ C ở điều kiện áp suất tiêu chuẩn', category: 'A', explanation: 'Định luật vật lý chính xác có thể làm thí nghiệm kiểm chứng.' }
      ]
    },
    scenario: {
      id: 'sc_m3',
      missionId: 3,
      title: 'Tình huống: Bài đăng giật gân trên mạng xã hội',
      situation: 'Buổi chiều sau giờ tan học, bạn Hoa thấy trên Facebook có một bài viết: "KHẨN CẤP! Vừa xuất hiện quái vật 3 đầu ở vùng Thất Sơn An Giang bắt cóc trẻ em, phụ huynh và học sinh chia sẻ ngay kẻo gặp nạn!". Bài viết có kèm một bức ảnh quái vật mờ ảo và đã có 200 lượt chia sẻ.',
      context: 'Nếu là Hoa, em sẽ hành động như thế nào?',
      choices: [
        {
          text: 'Chia sẻ ngay lên trang cá nhân và gửi vào nhóm lớp để cảnh báo các bạn.',
          isSafe: false,
          feedback: 'Sai lầm! Bài viết này 100% là tin giả câu view. Việc chia sẻ sẽ gieo rắc nỗi sợ hãi vô căn cứ cho bạn bè và vi phạm quy định thông tin.',
          points: 0
        },
        {
          text: 'Bình tĩnh kiểm tra: Hỏi người lớn, xem bản tin đài Truyền hình An Giang hoặc hỏi cô giáo Kim Dung xem có thông tin này không, đồng thời bấm Báo cáo vi phạm (Report tin giả).',
          isSafe: true,
          feedback: 'Quá chuẩn xác! Một thám tử tin tức chân chính không bao giờ để cảm xúc hoảng sợ dẫn dắt. Em đã ngăn chặn tin giả lan rộng.',
          points: 10
        },
        {
          text: 'Viết bình luận khẳng định: "Tớ vừa nhìn thấy con quái vật đó ở sau trường Sóc Sơn nè!" để đùa cho vui.',
          isSafe: false,
          feedback: 'Rất nguy hại! Đùa cợt hùa theo tin giả sẽ khiến mọi người càng thêm hoang mang và em có thể bị thầy cô khiển trách nặng.',
          points: 0
        }
      ],
      safeActionGuide: 'Quy tắc thám tử: Tin giật gân, đe dọa chia sẻ gấp -> 99% là tin giả!'
    }
  },

  // ==========================================================
  // NHIỆM VỤ 4
  // ==========================================================
  {
    id: 4,
    title: 'Nhiệm Vụ 4: Dũng Sĩ Chống Lừa Đảo',
    slogan: 'Tỉnh táo trước cạm bẫy - Không để kẻ xấu dụ dỗ!',
    iconName: 'AlertTriangle',
    color: 'rose',
    badgeName: 'Dũng Sĩ An Ninh Mạng',
    estimatedMinutes: 35,
    summary: 'Nhận diện các chiêu trò lừa đảo tinh vi nhắm vào học sinh tiểu học: Tin nhắn trúng thưởng giả, link chứa mã độc, mạo danh bạn bè mượn tiền, dụ dỗ gửi ảnh nhạy cảm và cách ứng phó an toàn.',
    learningGoals: [
      'Nhận diện bẫy tâm lý của kẻ lừa đảo: Đánh vào lòng tham quà tặng, sự tò mò hoặc đe dọa nạt nộ.',
      'Hiểu tác hại của việc bấm vào đường link lạ (.apk, .exe, trang web giả mạo).',
      'Biết cách xử lý khi bạn bè bị hack nick hỏi mượn tiền (gọi điện thoại trực tiếp để xác minh).',
      'Thuộc lòng số Tổng đài Quốc gia Bảo vệ Trẻ em 111 và biết cầu cứu cha mẹ, cô giáo khi gặp nguy hiểm.'
    ],
    sections: [
      {
        title: '1. Các cái bẫy lừa đảo thường gặp trên mạng',
        content: [
          'Bẫy trúng thưởng ảo: "Chúc mừng em trúng xe đạp điện / iPhone 16 / kim cương Free Fire, hãy nạp thẻ 50k phí nhận quà".',
          'Bẫy link độc hại: "Xem video lộ đề thi Toán học kỳ 1 của trường Sóc Sơn tại đây -> bấm vào link lạ". Khi bấm vào, điện thoại của ba mẹ sẽ bị dính mã độc và trừ sạch tiền trong tài khoản ngân hàng!',
          'Bẫy mạo danh: Kẻ xấu cướp nick của bạn cùng lớp rồi nhắn tin: "Tớ bị mất xe đạp, cho tớ mượn 50k vào số tài khoản này gấp".',
          'Bẫy dụ dỗ: Kẻ lạ giả vờ là bạn cùng trang lứa, kết bạn nói chuyện thân thiết rồi gạ gẫm gửi ảnh riêng tư hoặc rủ ra nơi vắng gặp mặt.'
        ],
        tips: 'Thần chú dũng sĩ: Không có bữa trưa nào miễn phí! Đừng tham quà to từ người không quen!'
      },
      {
        title: '2. Bí quyết 4 KHÔNG của dũng sĩ nhí',
        content: [
          '1. KHÔNG bấm vào bất kỳ đường link lạ nào được gửi qua tin nhắn hay bình luận.',
          '2. KHÔNG chuyển tiền, không nạp thẻ cào hay đọc mã OTP cho bất kỳ ai qua mạng.',
          '3. KHÔNG chụp và gửi ảnh thân thể, ảnh gia đình hay giấy tờ nhà cho người lạ.',
          '4. KHÔNG đồng ý gặp mặt người quen qua mạng một mình ở bên ngoài!'
        ]
      },
      {
        title: '3. Phải làm gì khi lỡ bấm vào link hoặc gặp nguy cơ?',
        content: [
          'Bước 1: BÌNH TĨNH! Tắt ngay trang web đó hoặc tắt wifi trên máy.',
          'Bước 2: KHÔNG GIẤU DIẾM! Đừng sợ bị mắng mà im lặng. Kẻ xấu thường đe dọa: "Nếu em nói với mẹ thì mẹ em sẽ bị bắt". Đừng tin!',
          'Bước 3: Báo ngay lập tức cho cô giáo Kim Dung hoặc ba mẹ để người lớn xử lý kỹ thuật.',
          'Bước 4: Gọi Tổng đài Quốc gia Bảo vệ Trẻ em: 111 (hoàn toàn miễn phí cước cuộc gọi) để được các cô chú chuyên gia bảo vệ 24/7!'
        ],
        warning: 'Khẩn cấp: Khi bị đe dọa, luôn nhớ có cô giáo, ba mẹ và Tổng đài 111 luôn đứng về phía em!'
      }
    ],
    scenario: {
      id: 'sc_m4',
      missionId: 4,
      title: 'Tình huống: Tin nhắn mượn tiền từ tài khoản bạn thân',
      situation: 'Tối thứ Bảy, bạn Tuấn nhận được tin nhắn từ tài khoản Facebook của bạn Hùng (bạn thân ngồi cùng bàn lớp 5/1): "Tuấn ơi cứu tớ với! Mẹ tớ đang cấp cứu ở bệnh viện Tri Tôn, cậu lấy điện thoại của mẹ cậu chuyển gấp 200.000đ vào số tài khoản này giúp tớ nhé, mai tớ đến trường trả!".',
      context: 'Nếu là Tuấn, em nên làm gì?',
      choices: [
        {
          text: 'Lén lấy điện thoại của mẹ tự chuyển 200.000đ ngay vì sợ mẹ bạn Hùng gặp chuyện.',
          isSafe: false,
          feedback: 'Rất nguy hiểm! Đây là thủ đoạn kẻ gian chiếm đoạt tài khoản rồi bịa chuyện cấp cứu để lợi dụng lòng tốt của bạn bè lừa đảo.',
          points: 0
        },
        {
          text: 'Kể ngay cho mẹ nghe, cùng mẹ bấm số gọi điện thoại trực tiếp cho ba mẹ của bạn Hùng để kiểm tra sự thật.',
          isSafe: true,
          feedback: 'Xuất sắc! Bằng cách gọi điện trực tiếp, Tuấn đã phát hiện tài khoản của bạn Hùng vừa bị hacker đánh cắp lúc chiều. Nhờ vậy không bị mất tiền và giúp bạn Hùng kịp thời cảnh báo cả lớp.',
          points: 10
        },
        {
          text: 'Nhắn tin mắng bạn Hùng là kẻ nói dối rồi chặn Facebook luôn.',
          isSafe: false,
          feedback: 'Chưa hợp lý vì có thể tài khoản của bạn bị hack chứ không phải chính bạn làm. Em cần xác minh trước khi hành động.',
          points: 0
        }
      ],
      safeActionGuide: 'Ghi nhớ vàng: Đụng đến tiền bạc hay chuyển khoản -> Phải gọi điện hoặc gặp mặt trực tiếp để xác minh!'
    }
  },

  // ==========================================================
  // NHIỆM VỤ 5
  // ==========================================================
  {
    id: 5,
    title: 'Nhiệm Vụ 5: Ứng Xử Văn Minh Trên Mạng',
    slogan: 'Nói lời tử tế - Lan tỏa yêu thương - Tôn trọng bản quyền!',
    iconName: 'HeartHandshake',
    color: 'purple',
    badgeName: 'Đại Sứ Văn Hóa Số',
    estimatedMinutes: 35,
    summary: 'Xây dựng văn hóa giao tiếp lịch sự, nói không với bắt nạt trên mạng (Cyberbullying), tôn trọng quyền tác giả và sản phẩm sáng tạo của người khác, biết xin phép khi dùng ảnh.',
    learningGoals: [
      'Hiểu tác hại to lớn của những bình luận ác ý, chê bai ngoại hình và bắt nạt hội đồng trên mạng.',
      'Áp dụng quy tắc T.H.I.N.K (True - Helpful - Inspiring - Necessary - Kind) trước khi bấm đăng hoặc bình luận.',
      'Biết cách hỗ trợ, an ủi bạn bè khi bạn bị bắt nạt trực tuyến và báo cáo vi phạm.',
      'Thực hành tôn trọng bản quyền: Xin phép tác giả và ghi nguồn rõ ràng khi dùng hình ảnh, bài viết của người khác.'
    ],
    sections: [
      {
        title: '1. Sức mạnh của lời nói trên không gian số',
        content: [
          'Dù giao tiếp qua màn hình máy tính hay điện thoại, người đọc tin nhắn của em vẫn là một con người có trái tim và cảm xúc thực sự.',
          'Một câu nói khích lệ: "Bức tranh của bạn vẽ ngộ nghĩnh lắm!" có thể làm bạn vui cả ngày.',
          'Một lời chế giễu: "Trông mặt bạn như con heo, đừng có lên hình nữa!" có thể làm bạn khóc thầm, sợ hãi không dám đến trường và trầm cảm.',
          'Học sinh lớp 5 văn minh luôn nhớ: Sau màn hình là một con người thật!'
        ],
        tips: 'Quy tắc vàng: Nếu em không nói điều đó trực tiếp trước mặt bạn ngoài đời, thì đừng gõ nó lên mạng!'
      },
      {
        title: '2. Bộ quy tắc T.H.I.N.K trước khi bình luận',
        content: [
          'T - True (Có Thật không?): Điều em sắp nói có đúng sự thật không hay chỉ là tin đồn?',
          'H - Helpful (Có Hữu ích không?): Lời nói này có giúp ích gì cho mọi người không?',
          'I - Inspiring (Có Truyền cảm hứng không?): Có làm cho bầu không khí lớp học vui vẻ hơn không?',
          'N - Necessary (Có Cần thiết không?): Có nhất thiết phải nói ra không, hay chỉ làm người khác khó chịu?',
          'K - Kind (Có Tử tế không?): Lời nói có ấm áp và tôn trọng bạn bè không?'
        ]
      },
      {
        title: '3. Tôn trọng bản quyền và sản phẩm sáng tạo',
        content: [
          'Khi bạn vẽ một bức tranh, viết một bài văn hay chụp một bức ảnh: Bạn là tác giả của tác phẩm đó!',
          'Nếu em muốn dùng tác phẩm của bạn để làm bài trình chiếu hay đăng Facebook: Em PHẢI xin phép bạn và ghi chú: "Tác phẩm của bạn Mai lớp 5/1".',
          'Nếu sử dụng tranh ảnh do công nghệ AI tạo ra: Em nên ghi chú rõ ràng: "Hình ảnh được tạo bởi công cụ AI" để thể hiện sự trung thực.'
        ],
        warning: 'Cảnh báo: Tự ý lấy ảnh xấu của người khác đăng lên mạng chế giễu là vi phạm pháp luật về quyền hình ảnh cá nhân!'
      }
    ],
    scenario: {
      id: 'sc_m5',
      missionId: 5,
      title: 'Tình huống: Bức ảnh dìm hàng trong nhóm chat',
      situation: 'Trong giờ thể dục, bạn Khoa vô tình bị trượt chân ngã vào vũng nước làm quần áo lấm lem. Bạn Dũng liền rút điện thoại chụp lén cảnh Khoa ngã rồi gửi vào nhóm chat của lớp với lời chú thích: "Nhìn như con vịt bầu mắc cạn, xấu hổ chưa kìa haha!". Một số bạn bắt đầu thả icon cười nhạo làm Khoa rất buồn và bật khóc.',
      context: 'Nếu em là một thành viên trong nhóm chat đó, em sẽ làm gì?',
      choices: [
        {
          text: 'Thả icon haha và bình luận thêm: "Đúng là vịt bầu thật, buồn cười quá" để cùng vui với các bạn.',
          isSafe: false,
          feedback: 'Hành vi này là tiếp tay cho bắt nạt trên mạng! Lời chế giễu của em sẽ khoét sâu thêm vết thương lòng của bạn Khoa.',
          points: 0
        },
        {
          text: 'Lên tiếng bảo vệ bạn: "Các bạn ơi, bạn Khoa bị ngã đau rồi, chúng mình đừng trêu bạn nữa. Dũng hãy xóa ảnh đi nhé!". Sau đó nhắn tin riêng an ủi Khoa và báo cho cô giáo Kim Dung.',
          isSafe: true,
          feedback: 'Tuyệt vời! Em là một công dân số dũng cảm và giàu lòng nhân ái. Lời nói tử tế đúng lúc của em đã bảo vệ bạn mình khỏi tổn thương tinh thần.',
          points: 10
        },
        {
          text: 'Lặng lẽ rời nhóm chat và coi như không thấy gì xảy ra.',
          isSafe: false,
          feedback: 'Thờ ơ trước cái xấu tuy không phải là người trực tiếp bắt nạt nhưng cũng chưa thể hiện được trách nhiệm của một người bạn tốt.',
          points: 2
        }
      ],
      safeActionGuide: 'Hành động dũng cảm: Dám lên tiếng bảo vệ người yếu thế trước sự chế giễu trên mạng!'
    }
  },

  // ==========================================================
  // NHIỆM VỤ 6
  // ==========================================================
  {
    id: 6,
    title: 'Nhiệm Vụ 6: Em Là Công Dân Số Có Trách Nhiệm',
    slogan: 'Làm chủ công nghệ - Giữ vững đạo đức - Tự hào học sinh Sóc Sơn!',
    iconName: 'Award',
    color: 'indigo',
    badgeName: 'Công Dân Số Tiên Phong',
    estimatedMinutes: 35,
    summary: 'Dự án tổng kết: Xây dựng 5 nguyên tắc vàng sử dụng AI an toàn, viết lời cam kết công dân số, thiết kế poster tuyên truyền và nhận Chứng nhận Công dân số nhí lớp 5/1.',
    learningGoals: [
      'Hệ thống hóa toàn bộ kiến thức 5 nhiệm vụ trước thành cẩm nang hành động thực tiễn.',
      'Khắc sâu 5 nguyên tắc sử dụng AI an toàn và có trách nhiệm.',
      'Tự tay viết bản cam kết công dân số của chính mình và chia sẻ cùng gia đình.',
      'Sáng tạo poster thông điệp số để trưng bày tại lớp học 5/1 Trường TH Sóc Sơn.'
    ],
    sections: [
      {
        title: '1. Năm nguyên tắc vàng sử dụng AI an toàn',
        content: [
          'Nguyên tắc 1: BẢO VỆ DỮ LIỆU - Không chia sẻ thông tin cá nhân, mật khẩu, địa chỉ cho AI hay người lạ.',
          'Nguyên tắc 2: TƯ DUY PHẢN BIỆN - Không tin mù quáng vào kết quả AI, luôn đối chiếu sách giáo khoa và hỏi thầy cô.',
          'Nguyên tắc 3: LIÊM CHÍNH HỌC TẬP - Dùng AI để gợi mở ý tưởng, tự mình suy nghĩ và viết bài, không sao chép.',
          'Nguyên tắc 4: TỬ TẾ & TÔN TRỌNG - Ứng xử lịch sự trên mạng, không bắt nạt, ghi rõ nguồn khi dùng tác phẩm của người khác.',
          'Nguyên tắc 5: CẦU CỨU KỊP THỜI - Khi gặp nguy hiểm, cạm bẫy hoặc hoang mang, luôn chia sẻ với cô giáo Kim Dung, ba mẹ hoặc gọi 111.'
        ],
        tips: 'Hãy ghi nhớ 5 nguyên tắc này như bảng cửu chương để luôn là người dùng công nghệ thông thái!'
      },
      {
        title: '2. Bản cam kết Công dân số nhí Lớp 5/1',
        content: [
          'Một công dân số thực thụ không chỉ biết lý thuyết mà thể hiện bằng hành động mỗi ngày.',
          'Cam kết giữ gìn uy tín của học sinh Trường Tiểu học Sóc Sơn, huyện Tri Tôn, tỉnh An Giang.',
          'Lan tỏa những điều tốt đẹp, hướng dẫn lại cho ông bà, cha mẹ và các em nhỏ cách nhận biết tin giả và phòng chống lừa đảo trên mạng.'
        ]
      },
      {
        title: '3. Hoàn thành chứng nhận vinh dự',
        content: [
          'Sau khi hoàn thành xuất sắc các thử thách, em sẽ được cấp CHỨNG NHẬN CÔNG DÂN SỐ NHÍ do cô giáo Trần Thị Kim Dung chứng thực.',
          'Em có thể in chứng nhận này ra để dán vào góc học tập ở nhà, nhắc nhở bản thân luôn học tập thông minh và có trách nhiệm!'
        ]
      }
    ],
    scenario: {
      id: 'sc_m6',
      missionId: 6,
      title: 'Tình huống dự án: Lan tỏa thông điệp số đến gia đình',
      situation: 'Về nhà sau buổi học, em thấy bà ngoại đang chăm chú xem một video trên điện thoại có người quảng cáo: "Uống lá cây thần kỳ này sẽ chữa khỏi 100 loại bệnh mà không cần đi viện, chỉ còn 10 hộp cuối cùng ai đặt mua thì để lại số điện thoại và địa chỉ nhà ngay". Bà ngoại bảo em lấy bút ghi lại địa chỉ nhà để bà đặt mua.',
      context: 'Vận dụng kiến thức đã học, em sẽ làm gì để giúp bà ngoại?',
      choices: [
        {
          text: 'Lấy bút ghi ngay địa chỉ nhà cho bà để bà mua thuốc uống cho khỏe.',
          isSafe: false,
          feedback: 'Nguy hiểm! Các quảng cáo "thuốc thần kỳ chữa bách bệnh" trên mạng đa số là lừa đảo, thuốc không rõ nguồn gốc có thể gây ngộ độc nghiêm trọng.',
          points: 0
        },
        {
          text: 'Lễ phép giải thích cho bà: "Bà ơi, cô giáo Kim Dung dạy chúng con trên mạng có nhiều tin giả và quảng cáo sai sự thật để bán hàng kém chất lượng. Bà đừng để lại địa chỉ nhà vội, để lát nữa mẹ đi làm về chở bà đến trạm y tế khám bác sĩ cho an toàn bà nhé!".',
          isSafe: true,
          feedback: 'Xuất sắc tuyệt vời! Em đã trở thành một "đại sứ số nhí" bảo vệ sức khỏe và tài sản cho chính người thân trong gia đình. Cả nhà sẽ rất tự hào về em!',
          points: 10
        },
        {
          text: 'Giật lấy điện thoại của bà và mắng bà là nhẹ dạ cả tin.',
          isSafe: false,
          feedback: 'Thái độ này là bất kính với người lớn. Em cần kiên nhẫn, lễ phép và giải thích khoa học để bà hiểu.',
          points: 0
        }
      ],
      safeActionGuide: 'Sứ mệnh công dân số: Bảo vệ bản thân và trở thành lá chắn an toàn cho gia đình!'
    }
  }
];
