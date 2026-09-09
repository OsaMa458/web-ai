import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, UserCheck, PhoneCall } from 'lucide-react';
import { SpecialistPhoto } from '../common/SpecialistPhoto';
import { siteConfig } from '../../config/siteConfig';

interface SpecialistIntroSectionProps {
  onNavigateToAbout: () => void;
  onOpenAuditModal: () => void;
}

export const SpecialistIntroSection: React.FC<SpecialistIntroSectionProps> = ({
  onNavigateToAbout,
  onOpenAuditModal,
}) => {
  return (
    <section id="specialist-intro-section" className="py-20 lg:py-28 bg-[#111315] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Authentic Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl bg-[#20242A] border border-[#2B3036] p-4 shadow-xl group hover:border-[#6B8AFD]/40 transition-all">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-[#181B1F] border border-[#2B3036]">
                <SpecialistPhoto
                  type="profile"
                  altText="Usama, Walmart and TikTok Shop e-commerce specialist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/90 via-[#111315]/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036] text-xs font-semibold mb-1.5">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Independent Specialist</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F2]">Usama Ghaffar</h3>
                  <p className="text-xs text-[#A7ADB4] font-medium">
                    Walmart & TikTok Shop E-commerce Specialist
                  </p>
                </div>
              </div>

              {/* Verified Specialization Footnote */}
              <div className="mt-3.5 p-3 rounded-xl bg-[#181B1F] border border-[#2B3036] flex items-center justify-between text-xs">
                <span className="text-[#A7ADB4]">Walmart Seller Center • TikTok Shop</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Operator</span>
                </span>
              </div>
            </div>
          </div>

          {/* Narrative & Positioning Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
              <span className="w-2 h-2 rounded-full bg-[#6B8AFD]" />
              <span>About The Specialist</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight leading-[1.12]">
              E-commerce Work Should Feel Connected <br className="hidden sm:inline" />
              <span>From Decision to Execution.</span>
            </h2>

            <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
              I focus on the practical, methodical work that moves a marketplace project from problem to resolution: category research, supplier comparison, listing architecture, product graphics, marketplace onboarding, and daily store operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: 'Zero Agency Overhead', desc: 'Direct 1-on-1 contact. You speak with the person who actually works on your catalog.' },
                { title: 'Honest Proof Standard', desc: 'No fabricated revenues or fake screenshots. Clear deliverables you can inspect directly.' },
                { title: 'Algorithmic Rigor', desc: 'Deep focus on Walmart 2025 Item Spec rules and TikTok Shop dispatch requirements.' },
                { title: 'Global Reach', desc: 'Actively serving brands and sellers across the US, UK, Europe, and worldwide.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#20242A] border border-[#2B3036] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F5F5F2]">
                    <CheckCircle2 className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-[#A7ADB4] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] shadow-sm transition-all cursor-pointer"
              >
                <span>Request a Free Store Review</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onNavigateToAbout}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[#F5F5F2] hover:bg-[#252A30] bg-[#181B1F] border border-[#2B3036] transition-all cursor-pointer"
              >
                <span>Read Full Background & Philosophy</span>
                <ArrowRight className="w-4 h-4 text-[#6B8AFD]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
