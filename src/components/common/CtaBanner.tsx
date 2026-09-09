import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface CtaBannerProps {
  onOpenAuditModal: () => void;
  onBookCall: () => void;
  title?: string;
  subtitle?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenAuditModal,
  onBookCall,
  title = "Ready to Improve Your Walmart or TikTok Shop Store?",
  subtitle = "Whether you are launching your store from scratch, tackling low listing quality scores, or seeking ongoing marketplace management, let's discuss your goals."
}) => {
  return (
    <section id="closing-cta-section" className="relative py-20 lg:py-28 overflow-hidden bg-[#111315]">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#20242A] border border-[#2B3036] p-8 sm:p-12 lg:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Marketplace Specialist Collaboration</span>
            </div>

            <h2 id="closing-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onOpenAuditModal}
                id="closing-cta-audit-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get a Free Store Audit</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onBookCall}
                id="closing-cta-book-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-sm text-[#F5F5F2] hover:bg-[#252A30] border border-[#2B3036] transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#6B8AFD]" />
                <span>Book a Call</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A7ADB4]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> No long-term lock-in contracts
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Practical, actionable roadmaps
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Fast 12-hour response
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
