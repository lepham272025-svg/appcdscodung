import React, { useState, useRef, useEffect } from 'react';
import { BeSaoMascot } from '../common/BeSaoMascot';
import { sound } from '../../utils/storage';
import { 
  Send, 
  Sparkles, 
  ShieldAlert, 
  Volume2, 
  Bot, 
  HelpCircle,
  RotateCcw
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: string;
}

export const AssistantView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: '⭐ Bé Sao AI chào bạn nhỏ lớp 5/1 nhé! Mình là trợ lý học tập số, luôn sẵn sàng đồng hành cùng bạn khám phá cách dùng AI thông minh, tạo mật khẩu mạnh, nhận diện tin giả và phòng chống cạm bẫy mạng. Bạn muốn hỏi điều gì nào?',
      timestamp: 'Vừa xong',
      source: 'welcome'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<string>('Đang kiểm tra kết nối...');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check backend status
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => {
        if (data.geminiConfigured) {
          setActiveMode('Đã kết nối trực tiếp Bé Sao AI (Gemini 3.8 Flash máy chủ)');
        } else {
          setActiveMode('Chế độ hướng dẫn có kiểm soát (Nội dung sư phạm chuẩn lớp 5)');
        }
      })
      .catch(() => {
        setActiveMode('Chế độ hướng dẫn có kiểm soát (Nội dung sư phạm chuẩn lớp 5)');
      });
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const quickPrompts = [
    'Làm sao để nhận biết một bức ảnh do AI vẽ hay ảnh chụp thật?',
    'Có người nhắn tin tặng kim cương game và xin mật khẩu, em nên làm gì?',
    'Bé Sao ơi, làm thế nào để tạo một mật khẩu siêu mạnh và dễ nhớ?',
    'AI có bao giờ mắc sai lầm hoặc nói dối không?',
    'Bạn cùng lớp bị chụp lén ảnh dìm hàng trêu chọc, em xử lý sao?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    sound.playClick();
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      const botReply: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: data.reply || 'Bé Sao AI đã nhận được câu hỏi của bạn. Hãy luôn nhớ kiểm tra kỹ thông tin và hỏi cô giáo Kim Dung nhé!',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        source: data.source,
      };

      setMessages((prev) => [...prev, botReply]);
      sound.playSuccess();
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: '⭐ Bé Sao AI đây! Mình luôn nhắc bạn: Khi gặp bất kỳ tình huống nghi ngờ hoặc nguy cơ nào trên mạng, em hãy bình tĩnh, không cung cấp thông tin cá nhân và kể ngay cho cô giáo Kim Dung hoặc ba mẹ nhé!',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        source: 'guided_script',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[⭐🤖🔍✍️🛡️🌸⚠️]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Banner with AI Mascot & Safety Mode */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-sky-100">
            <Bot className="w-3.5 h-3.5" />
            <span>Trợ Lý Giáo Dục Số Cho Học Sinh Lớp 5</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black">Trò Chuyện Cùng Bé Sao AI</h1>
          <p className="text-xs text-sky-100">
            Hệ thống lọc an toàn cho trẻ em · Không thu thập dữ liệu cá nhân · Luôn định hướng tư duy phản biện
          </p>
          <div className="text-[11px] font-semibold text-amber-200 pt-1">
            {activeMode}
          </div>
        </div>
        <BeSaoMascot mood="talking" size="md" />
      </div>

      {/* Safety Notice Strip */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Nhắc nhở an toàn số: </span>
          Bé Sao AI là trợ lý học tập máy móc, không phải con người và có thể mắc lỗi. Tuyệt đối KHÔNG gõ họ tên thật, mật khẩu, địa chỉ nhà hay số điện thoại vào ô chat!
        </div>
      </div>

      {/* Quick Prompt Suggestions */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
          <span>Gợi ý câu hỏi nhanh:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              className="text-left text-xs font-medium bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 px-3 py-2 rounded-xl transition-all shadow-sm"
            >
              💬 {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Frame */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-sm min-h-[380px] max-h-[500px] overflow-y-auto space-y-4">
        {messages.map((m) => {
          const isUser = m.sender === 'user';

          return (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {!isUser ? (
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-sm shrink-0 shadow-sm mt-1">
                  ⭐
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm mt-1">
                  HS
                </div>
              )}

              <div
                className={`max-w-[82%] sm:max-w-[70%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-sky-600 text-white font-medium rounded-tr-none shadow-sm'
                    : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{m.text}</div>

                <div
                  className={`mt-2 flex items-center justify-between text-[10px] ${
                    isUser ? 'text-sky-200' : 'text-slate-400'
                  }`}
                >
                  <span>{m.timestamp}</span>

                  {!isUser && (
                    <button
                      onClick={() => handleSpeak(m.text)}
                      title="Bé Sao đọc to"
                      className="inline-flex items-center gap-1 hover:text-sky-600 transition-colors ml-3"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Đọc to</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-sm shrink-0 animate-pulse">
              ⭐
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-500 italic">
              Bé Sao AI đang suy nghĩ câu trả lời phù hợp nhất cho bạn nhỏ lớp 5/1...
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-2xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-sky-500">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          placeholder="Nhập câu hỏi của em về AI, an toàn mạng, tin giả..."
          className="flex-1 px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none"
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim() || isLoading}
          className="p-3 bg-sky-600 disabled:opacity-40 hover:bg-sky-700 text-white rounded-xl shadow-md transition-colors shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
