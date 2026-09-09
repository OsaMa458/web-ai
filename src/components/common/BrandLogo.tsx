import React from 'react';

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showWordmark = true,
  size = 'md',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const wordmarkSize = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Stylized 'U' with Upward Growth Arrow (matching official USAMA Logo System) */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconDimensions}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(107,138,253,0.25)]"
        >
          <defs>
            <linearGradient id="usama-blue-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4D6FD6" />
              <stop offset="100%" stopColor="#6B8AFD" />
            </linearGradient>
            <linearGradient id="usama-white-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F5F2" />
              <stop offset="100%" stopColor="#A7ADB4" />
            </linearGradient>
          </defs>

          {/* Dark graphite backdrop pill */}
          <rect width="100" height="100" rx="24" fill="#181B1F" stroke="#2B3036" strokeWidth="3" />
          
          {/* Base curved 'U' crescent */}
          <path
            d="M 22 28 C 22 28, 22 62, 34 76 C 45 88, 62 86, 74 74 C 82 66, 82 54, 82 54 L 72 54 C 72 54, 71 63, 65 69 C 58 76, 48 76, 41 68 C 33 59, 33 34, 33 28 Z"
            fill="#20242A"
          />

          {/* Left sweeping curved wing in muted blue gradient */}
          <path
            d="M 24 24 L 35 24 C 35 48, 36 68, 50 78 C 38 78, 28 66, 24 50 Z"
            fill="url(#usama-blue-grad)"
          />

          {/* Upward dynamic growth arrow & curve */}
          <path
            d="M 33 66 C 44 76, 59 72, 68 60 L 78 35 L 86 43 L 88 18 L 63 20 L 71 28 L 61 50 C 54 58, 44 60, 36 54 Z"
            fill="url(#usama-blue-grad)"
          />

          {/* Sleek interior off-white highlight wave */}
          <path
            d="M 36 71 C 45 78, 56 75, 64 65 L 75 42 L 72 39 L 61 58 C 54 66, 44 68, 36 62 Z"
            fill="url(#usama-white-accent)"
            opacity="0.9"
          />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight text-[#F5F5F2] font-sans uppercase ${wordmarkSize}`}
            >
              USAMA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B8AFD]" />
          </div>
          <span className="text-[11px] text-[#A7ADB4] font-medium tracking-tight -mt-0.5">
            Walmart & TikTok Shop Specialist
          </span>
        </div>
      )}
    </div>
  );
};
