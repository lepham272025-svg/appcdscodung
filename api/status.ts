export default function handler(_req: any, res: any) {
  res.status(200).json({
    status: 'online',
    appName: 'Công Dân Số Nhí - Lớp 5/1 Sóc Sơn',
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    author: 'Trần Thị Kim Dung - TH Sóc Sơn - An Giang',
  });
}
