import React, { useState } from 'react';
import { UserCheck, ShieldCheck, UploadCloud } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

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
  const sources =
    type === 'hero'
      ? siteConfig.images.heroFallbacks
      : siteConfig.images.profileFallbacks;

  const [currentSourceIndex, setCurrentSourceIndex] = useState<number>(0);
  const [hasFailedAll, setHasFailedAll] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (currentSourceIndex < sources.length - 1) {
      setCurrentSourceIndex(prev => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  const currentSrc = sources[currentSourceIndex];

  if (hasFailedAll) {
    return (
      <div
        className={`w-full h-full min-h-[220px] rounded-2xl bg-[#20242A] border border-[#2B3036] flex flex-col items-center justify-center p-6 text-center text-[#A7ADB4] relative overflow-hidden group ${containerClassName}`}
      >
        <div className="w-14 h-14 rounded-2xl bg-[#181B1F] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD] mb-3 shadow-inner">
          <UserCheck className="w-7 h-7" />
        </div>

        <div className="font-bold text-[#F5F5F2] text-base sm:text-lg mb-1">
          Usama
        </div>
        <div className="text-xs font-semibold text-[#6B8AFD] mb-2">
          Walmart & TikTok Shop Specialist
        </div>

        <p className="text-[11px] text-[#A7ADB4] max-w-xs leading-relaxed mb-3">
          Drop your personal photograph into the <code className="bg-[#181B1F] px-1.5 py-0.5 rounded text-[#F5F5F2] border border-[#2B3036]">public/</code> folder to display live.
        </p>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181B1F] border border-[#2B3036] text-[11px] text-[#F5F5F2] font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Verified Specialist Identity</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={altText}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        referrerPolicy="no-referrer"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#181B1F] animate-pulse flex items-center justify-center">
          <span className="text-xs text-[#A7ADB4]">Loading Usama's photo...</span>
        </div>
      )}
    </div>
  );
};
