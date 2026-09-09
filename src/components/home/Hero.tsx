import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, Sparkles, BarChart3 } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SpecialistPhoto } from '../common/SpecialistPhoto';

interface HeroProps {
  onOpenAuditModal: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onViewWork }) => {
  return (
    <section id="hero-section" className="relative pt-32 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-[#111315]">
      {/* NexStudio subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#2B3036_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Positioning & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Direct Specialization Badge - NexStudio Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#6B8AFD] animate-pulse" />
              <span className="tracking-wide">Walmart & TikTok Shop Specialist</span>
            </div>

            {/* Confident Agency Headline */}
            <div className="space-y-2">
              <h1 id="hero-h1-positioning" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F5F2] tracking-tight leading-[1.08]">
                Walmart & TikTok Shop <br className="hidden sm:inline" />
                <span>E-commerce Specialist</span>
              </h1>
            </div>

            {/* Supporting Service Line */}
            <p className="text-sm sm:text-base font-medium text-[#6B8AFD] tracking-wide">
              {siteConfig.supportingLine}
            </p>

            {/* Direct Work Description */}
            <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed max-w-2xl">
              Helping US, UK, European, and worldwide e-commerce brands research, build, optimize, and manage their Walmart Marketplace and TikTok Shop presence with data-grounded execution.
            </p>

            {/* Conversion CTA Group - Primary & Secondary */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenAuditModal}
                id="hero-primary-audit-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get a Free Store Audit</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onViewWork}
                id="hero-secondary-view-work-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-[#F5F5F2] hover:bg-[#252A30] bg-[#181B1F] border border-[#2B3036] transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-[#6B8AFD]" />
              </button>
            </div>

            {/* Target Audience & Direct Specialist Guarantee */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#A7ADB4]">
              <span className="flex items-center gap-1.5 font-medium text-[#F5F5F2]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{siteConfig.contact.targetRegions}</span>
              </span>
              <span className="hidden sm:inline text-[#2B3036]">•</span>
              <span>Direct 1-on-1 specialist communication • No agency middleman</span>
            </div>

          </div>

          {/* Right Column: NexStudio Elevated Visual Card with Usama's Photo */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-2xl bg-[#20242A] border border-[#2B3036] p-3.5 shadow-xl space-y-3.5 relative overflow-hidden group hover:border-[#6B8AFD]/40 transition-all duration-300">
              {/* Authentic Photo Container */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#181B1F] border border-[#2B3036]">
                <SpecialistPhoto
                  type="hero"
                  altText="Usama, Walmart and TikTok Shop e-commerce specialist"
                  className="group-hover:scale-[1.02] transition-transform duration-500 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="bg-[#181B1F]/90 px-3 py-1 rounded-md border border-[#2B3036] text-[#F5F5F2] font-semibold text-[11px]">
                    <span>USAMA · Specialist Operations</span>
                  </div>
                  <div className="bg-[#6B8AFD]/20 px-2.5 py-1 rounded-md border border-[#6B8AFD]/40 text-[#6B8AFD] text-[11px] font-medium">
                    Direct Operator
                  </div>
                </div>
              </div>

              {/* Specialist Quality Standard Diagnostic */}
              <div className="p-3.5 rounded-xl bg-[#181B1F] border border-[#2B3036] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F5F5F2] font-medium flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-[#6B8AFD]" />
                    <span>Target Listing Quality Score (LQS)</span>
                  </span>
                  <span className="font-semibold text-emerald-400 font-mono">94% Target</span>
                </div>

                <div className="w-full bg-[#111315] h-2 rounded-full overflow-hidden border border-[#2B3036]">
                  <div className="bg-[#6B8AFD] h-full rounded-full w-[94%]" />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="text-[11px] text-[#A7ADB4] flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Walmart Seller Center</span>
                  </div>
                  <div className="text-[11px] text-[#A7ADB4] flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>TikTok Shop US & UK</span>
                  </div>
                </div>
              </div>

              {/* Free Audit Button */}
              <button
                onClick={onOpenAuditModal}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-[#111315] bg-[#6B8AFD] hover:bg-[#5A78EB] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Request a Free Manual Store Audit</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

