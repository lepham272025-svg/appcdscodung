import React from 'react';

interface BeSaoMascotProps {
  mood?: 'happy' | 'cheering' | 'thinking' | 'warning' | 'talking';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  bubbleText?: string;
  className?: string;
}

export const BeSaoMascot: React.FC<BeSaoMascotProps> = ({
  mood = 'happy',
  size = 'md',
  bubbleText,
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
  };

  return (
    <div className={`relative inline-flex items-center gap-3 ${className}`}>
      {/* SVG Star Robot */}
      <div className={`relative ${sizeMap[size]} shrink-0 animate-float drop-shadow-md`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Star Body Gradient */}
            <linearGradient id="starGrad" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE047" /> {/* Yellow 300 */}
              <stop offset="60%" stopColor="#F59E0B" /> {/* Amber 500 */}
              <stop offset="100%" stopColor="#D97706" /> {/* Amber 600 */}
            </linearGradient>

            {/* Cyan Cyber Ear/Headset Gradient */}
            <linearGradient id="cyberCyan" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            {/* Visor Gradient */}
            <linearGradient id="visorGrad" x1="50" y1="80" x2="150" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
          </defs>

          {/* Star Five-Pointed Body */}
          <path
            d="M 100 12 
               L 126 66 
               L 186 74 
               L 142 116 
               L 153 176 
               L 100 148 
               L 47 176 
               L 58 116 
               L 14 74 
               L 74 66 Z"
            fill="url(#starGrad)"
            stroke="#B45309"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Golden Highlights on Top Tips */}
          <path
            d="M 100 22 L 120 64 L 100 58 L 80 64 Z"
            fill="#FEF08A"
            opacity="0.8"
          />

          {/* Cyber Antenna on Top */}
          <line x1="100" y1="12" x2="100" y2="2" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="2" r="6" fill="#38BDF8" stroke="#0369A1" strokeWidth="2" />
          <circle cx="100" cy="2" r="3" fill="#FFFFFF" />

          {/* Cyber Earphones / Communication Nodes */}
          <rect x="28" y="85" width="12" height="26" rx="6" fill="url(#cyberCyan)" stroke="#0369A1" strokeWidth="2" />
          <rect x="160" y="85" width="12" height="26" rx="6" fill="url(#cyberCyan)" stroke="#0369A1" strokeWidth="2" />

          {/* Digital Screen Face / Visor */}
          <rect
            x="54"
            y="76"
            width="92"
            height="56"
            rx="18"
            fill="url(#visorGrad)"
            stroke="#0284C7"
            strokeWidth="3"
          />

          {/* Mood Expression: Eyes & Cheeks */}
          {mood === 'happy' || mood === 'talking' ? (
            <>
              {/* Joyful Arch Eyes */}
              <path d="M 68 102 Q 78 88 88 102" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M 112 102 Q 122 88 132 102" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" fill="none" />
              {/* Sweet smile */}
              <path d="M 92 116 Q 100 124 108 116" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" fill="none" />
            </>
          ) : mood === 'cheering' ? (
            <>
              {/* Sparkle Star Eyes */}
              <circle cx="78" cy="98" r="7" fill="#38BDF8" />
              <circle cx="76" cy="96" r="2.5" fill="#FFFFFF" />
              <circle cx="122" cy="98" r="7" fill="#38BDF8" />
              <circle cx="120" cy="96" r="2.5" fill="#FFFFFF" />
              {/* Wide Happy Mouth */}
              <path d="M 90 114 Q 100 126 110 114 Z" fill="#EF4444" stroke="#FDE047" strokeWidth="2" />
            </>
          ) : mood === 'thinking' ? (
            <>
              {/* Big curious round eyes looking up */}
              <circle cx="78" cy="94" r="8" fill="#38BDF8" />
              <circle cx="80" cy="91" r="3" fill="#FFFFFF" />
              <circle cx="122" cy="94" r="8" fill="#38BDF8" />
              <circle cx="124" cy="91" r="3" fill="#FFFFFF" />
              {/* Little 'o' mouth */}
              <circle cx="100" cy="116" r="4" fill="#FDE047" />
            </>
          ) : (
            <>
              {/* Warning / Alert Alert Eyes */}
              <circle cx="78" cy="98" r="6" fill="#F87171" />
              <circle cx="122" cy="98" r="6" fill="#F87171" />
              <line x1="72" y1="88" x2="84" y2="92" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
              <line x1="128" y1="88" x2="116" y2="92" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
              <line x1="94" y1="116" x2="106" y2="116" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
            </>
          )}

          {/* Rosy Cheeks */}
          <circle cx="64" cy="112" r="5" fill="#FB7185" opacity="0.6" />
          <circle cx="136" cy="112" r="5" fill="#FB7185" opacity="0.6" />

          {/* Cute Little Robot Shoes */}
          <ellipse cx="80" cy="178" rx="14" ry="7" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
          <ellipse cx="120" cy="178" rx="14" ry="7" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
        </svg>
      </div>

      {/* Interactive Speech Bubble */}
      {bubbleText && (
        <div className="relative bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-sm max-w-sm text-sm text-slate-700 font-medium leading-relaxed">
          {/* Arrow */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white drop-shadow-sm" />
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 mb-1">
            <span>⭐ Bé Sao AI gợi ý:</span>
          </div>
          <p>{bubbleText}</p>
        </div>
      )}
    </div>
  );
};
