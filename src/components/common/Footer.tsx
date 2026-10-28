import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white text-slate-600 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="text-sm font-bold text-slate-800">
              DỰ ÁN: CÔNG DÂN SỐ NHÍ – HỌC SINH LỚP 5 SỬ DỤNG AI AN TOÀN VÀ CÓ TRÁCH NHIỆM
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Giáo viên thực hiện: <span className="font-semibold text-slate-700">Trần Thị Kim Dung</span> · Lớp: <span className="font-semibold text-slate-700">5/1</span> · Trường Tiểu học Sóc Sơn, An Giang
            </div>
          </div>
          <div className="text-xs text-slate-500 max-w-md md:text-right">
            <span className="italic font-medium text-amber-700">“Thông minh khi sử dụng AI – An toàn trong thế giới số – Trách nhiệm với cộng đồng.”</span>
            <div className="mt-1 text-[11px] text-slate-400">
              Ứng dụng giáo dục phi thương mại dành riêng cho học sinh tiểu học Việt Nam
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
