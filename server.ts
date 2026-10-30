import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini client if API key is provided
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// Fallback rule-based pedagogical answers for 5th graders
function getSafeFallbackResponse(query: string): string {
  const lower = query.toLowerCase();

  if (lower.includes('mật khẩu') || lower.includes('pass') || lower.includes('địa chỉ') || lower.includes('số điện thoại') || lower.includes('ảnh riêng')) {
    return '⭐ Bé Sao AI nhắc bạn: Tuyệt đối KHÔNG chia sẻ mật khẩu, địa chỉ nhà, số điện thoại hay ảnh riêng tư cho bất kỳ ai trên mạng, kể cả khi họ hứa tặng quà, tặng robux hay xu game! Hãy bấm chặn và kể ngay cho cô Kim Dung hoặc ba mẹ nhé!';
  }

  if (lower.includes('tin giả') || lower.includes('thật hay giả') || lower.includes('kiểm tra')) {
    return '🔍 Để nhận diện tin giả, Bé Sao AI gợi ý 3 bước: 1. Xem nguồn tin từ đâu (báo chí chính thống hay tài khoản lạ); 2. Kiểm tra xem người lớn và thầy cô có xác nhận không; 3. Không vội vàng chia sẻ bài viết giật gân, kèm lời đe dọa!';
  }

  if (lower.includes('ai là gì') || lower.includes('trí tuệ nhân tạo') || lower.includes('nguồn gốc')) {
    return '🤖 AI (Trí tuệ nhân tạo) giống như một bạn robot siêu chăm chỉ, được con người dạy học từ rất nhiều dữ liệu sách vở để hỗ trợ chúng mình dịch ngôn ngữ, tìm ý tưởng, giải bài tập. Nhưng AI không có cảm xúc thật và có thể mắc lỗi, nên chúng mình phải luôn suy nghĩ và kiểm tra lại nhé!';
  }

  if (lower.includes('chép bài') || lower.includes('làm bài tập') || lower.includes('văn')) {
    return '✍️ AI có thể gợi ý ý tưởng hoặc mở bài hay, nhưng chúng mình TUYỆT ĐỐI không chép nguyên văn của AI vào vở. Tự mình suy nghĩ và viết bằng chính cảm xúc của em mới giúp em học giỏi và trở thành công dân số trung thực!';
  }

  if (lower.includes('người lạ') || lower.includes('nhắn tin') || lower.includes('lừa đảo') || lower.includes('trúng thưởng')) {
    return '🛡️ Cảnh giác nào bạn ơi! Khi người lạ nhắn tin trúng thưởng hoặc gửi link bắt bấm vào để nhận quà, 99% đó là bẫy lừa đảo. Em hãy: Dừng lại - Không bấm vào link - Kể ngay cho cô giáo hoặc người thân xử lý nhé!';
  }

  if (lower.includes('chửi') || lower.includes('bắt nạt') || lower.includes('xúc phạm') || lower.includes('tẩy chay')) {
    return '🌸 Công dân số văn minh luôn nói lời hay, việc tốt. Nếu thấy bạn bị bắt nạt trên mạng, đừng hùa theo mà hãy động viên bạn và báo cho cô giáo Kim Dung hoặc nhà trường hỗ trợ nhé!';
  }

  return '⭐ Chào bạn nhỏ lớp 5! Bé Sao AI luôn sẵn sàng đồng hành cùng em khám phá thế giới số thật an toàn. Em có thể hỏi về cách dùng AI học tập, cách tạo mật khẩu mạnh, nhận diện tin giả, hay cách ứng xử tử tế trên mạng nhé!';
}

// API Route for Safe Educational Assistant
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Nội dung tin nhắn không hợp lệ.' });
  }

  // Pre-filter: Check for sensitive PII queries or harmful requests
  const lowerMsg = message.toLowerCase();
  const dangerousKeywords = ['hack', 'bẻ khóa', 'lấy trộm', 'mật khẩu của ai', 'địa chỉ nhà của'];
  for (const kw of dangerousKeywords) {
    if (lowerMsg.includes(kw)) {
      return res.json({
        reply: '🚫 Bé Sao AI là trợ lý học tập an toàn. Bé Sao không hỗ trợ các hành vi xâm nhập, tìm kiếm thông tin riêng tư hay làm hại người khác. Hãy sử dụng công nghệ một cách có trách nhiệm bạn nhé!',
        source: 'safety_guardrail',
      });
    }
  }

  // If Gemini API is available, query Gemini 3.8 Flash
  if (aiClient && process.env.GEMINI_API_KEY) {
    try {
      const systemInstruction = `Bạn là "Bé Sao AI" - trợ lý ảo giáo dục thân thiện, hình dáng ngôi sao đáng yêu, đồng hành cùng học sinh lớp 5 (10-11 tuổi) tại Trường Tiểu học Sóc Sơn, xã Mỹ Thuận, tỉnh An Giang (lớp cô Trần Thị Kim Dung).
Quy tắc bất di bất dịch:
1. Xưng hô: "Bé Sao AI" hoặc "Bé Sao", gọi người dùng là "bạn", "bạn nhỏ", "bạn ơi".
2. Ngôn ngữ: Tiếng Việt trong sáng, ngắn gọn (tối đa 3-4 câu hoặc gạch đầu dòng ngắn), từ ngữ dễ hiểu cho học sinh lớp 5, vui vẻ, khích lệ.
3. Giáo dục số: Dạy học sinh dùng AI an toàn, tự suy nghĩ, không sao chép nguyên văn bài làm của AI, tôn trọng bản quyền, lịch sự trên mạng.
4. BẢO MẬT & AN TOÀN: Tuyệt đối KHÔNG xin thông tin cá nhân (tên thật, địa chỉ, số điện thoại, mật khẩu). Nhắc học sinh giữ bí mật thông tin riêng.
5. CẢNH GIÁC LỪA ĐẢO: Khi gặp người lạ gạ gẫm, link lạ, tin nhắn trúng thưởng, luôn khuyên học sinh dừng lại và hỏi cô giáo Kim Dung hoặc ba mẹ.
6. THỪA NHẬN GIỚI HẠN: Thẳng thắn nói rõ Bé Sao là trí tuệ nhân tạo, không phải con người, có thể nhầm lẫn, học sinh cần rèn luyện tư duy phản biện.
7. Không dùng từ ngữ thô tục, bạo lực hay chính trị người lớn.`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || getSafeFallbackResponse(message);
      return res.json({
        reply: replyText,
        source: 'gemini-3.8-flash',
      });
    } catch (err: any) {
      console.warn('Gemini API call failed, using safe pedagogical fallback:', err?.message || err);
      // Fallback gracefully without breaking the user experience
      const fallback = getSafeFallbackResponse(message);
      return res.json({
        reply: fallback,
        source: 'guided_script',
        notice: 'Đang dùng bộ kiến thức có kiểm soát sư phạm.',
      });
    }
  }

  // Graceful rule-based response
  const reply = getSafeFallbackResponse(message);
  return res.json({
    reply,
    source: 'guided_script',
  });
});

// Status check API
app.get('/api/status', (_req, res) => {
  res.json({
    status: 'online',
    appName: 'Công Dân Số Nhí - Lớp 5/1 Sóc Sơn',
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY && aiClient),
    author: 'Trần Thị Kim Dung - TH Sóc Sơn - An Giang',
  });
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${port} (mode: ${isDev ? 'development' : 'production'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
