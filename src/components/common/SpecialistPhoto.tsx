```tsx
import React, { useState } from 'react';
import { UserCheck, ShieldCheck } from 'lucide-react';

interface SpecialistPhotoProps {
  type: 'hero' | 'profile' | 'compact';
  className?: string;
  containerClassName?: string;
  altText?: string;
}

export const SpecialistPhoto: React.FC<SpecialistPhotoProps> = ({
  type,
  className = '',
  containerClassName = '',
  altText = 'Usama, Walmart and TikTok Shop e-commerce specialist',
}) => {
  // Images are stored directly inside the public folder.
  // BASE_URL automatically handles GitHub Pages (/web-ai/).
  const imageSrc =
    type === 'hero'
      ? `${import.meta.env.BASE_URL}DESKTOP.png`
      : `${import.meta.env.BASE_URL}usama-profile.png`;

  const [hasFailed, setHasFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasFailed) {
    return (
      <div
        className={`w-full h-full min-h-[220px] rounded-2xl bg-[#20242A] border border-[#2B3036] flex flex-col items-center justify-center p-6 text-center text-[#A7ADB4] ${containerClassName}`}
      >
        <div className="w-14 h-14 rounded-2xl bg-[#181B1F] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD] mb-3">
          <UserCheck className="w-7 h-7" />
        </div>

        <div className="font-bold text-[#F5F5F2] text-base sm:text-lg mb-1">
          Usama
        </div>

        <div className="text-xs font-semibold text-[#6B8AFD] mb-2">
          Walmart & TikTok Shop Specialist
        </div>

        <p className="text-[11px] text-[#A7ADB4] max-w-xs leading-relaxed mb-3">
          Specialist photo could not be loaded.
        </p>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181B1F] border border-[#2B3036] text-[11px] text-[#F5F5F2] font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Verified Specialist Identity</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${containerClassName}`}
    >
      <img
        src={imageSrc}
        alt={altText}
        onError={() => setHasFailed(true)}
        onLoad={() => setIsLoaded(true)}
        className={`max-w-full max-h-full w-full h-full object-contain transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        referrerPolicy="no-referrer"
      />

      {!isLoaded && (
        <div className="absolute inset-0 bg-[#181B1F] animate-pulse flex items-center justify-center">
          <span className="text-xs text-[#A7ADB4]">
            Loading Usama's photo...
          </span>
        </div>
      )}
    </div>
  );
};
```
