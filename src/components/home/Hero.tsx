import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  BarChart3,
} from 'lucide-react';
import { SpecialistPhoto } from '../common/SpecialistPhoto';

interface HeroProps {
  onOpenAuditModal: () => void;
  onBookCall: () => void;
  onNavigateToPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAuditModal,
  onBookCall,
  onNavigateToPortfolio,
}) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#111315] border-b border-[#2B3036]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181B1F] border border-[#2B3036] text-[#A7ADB4] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#6B8AFD]" />
              Walmart & TikTok Shop E-commerce Specialist
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F2] leading-[1.05]">
              Build, Optimize & Manage
              <span className="block text-[#6B8AFD] mt-2">
                Your E-commerce Store
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-8 text-[#A7ADB4] max-w-xl">
              I help e-commerce brands and store owners set up, manage,
              optimize, and grow their Walmart and TikTok Shop operations —
              from store setup and product research to listings, sourcing,
              audits, and creative assets.
            </p>

            {/* Capability Points */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-[#F5F5F2]">
                <CheckCircle className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                Walmart Store Setup & Management
              </div>

              <div className="flex items-center gap-2 text-sm text-[#F5F5F2]">
                <CheckCircle className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                TikTok Shop Setup & Management
              </div>

              <div className="flex items-center gap-2 text-sm text-[#F5F5F2]">
                <CheckCircle className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                Product Research & Sourcing
              </div>

              <div className="flex items-center gap-2 text-sm text-[#F5F5F2]">
                <CheckCircle className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                Listing Optimization & Audits
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                id="hero-primary-audit-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#6B8AFD] text-white font-bold text-sm hover:brightness-110 transition-all duration-200 shadow-lg"
              >
                <ShieldCheck className="w-4 h-4" />
                Get a Free Store Audit
              </button>

              <button
                type="button"
                onClick={onBookCall}
                id="hero-secondary-book-call-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#181B1F] border border-[#2B3036] text-[#F5F5F2] font-bold text-sm hover:bg-[#20242A] transition-all duration-200"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust / Positioning */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#A7ADB4]">
              <ShieldCheck className="w-4 h-4 text-[#6B8AFD]" />
              Practical e-commerce execution focused on store performance
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div
              id="hero-specialist-card"
              className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#181B1F] border border-[#2B3036] shadow-2xl"
            >
              <SpecialistPhoto
                type="hero"
                altText="Usama, Walmart and TikTok Shop e-commerce specialist"
                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-[#111315] via-[#111315]/80 to-transparent">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[#A7ADB4] mb-1">
                      E-commerce Specialist
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-[#F5F5F2]">
                      Usama
                    </h2>

                    <p className="text-xs sm:text-sm text-[#A7ADB4] mt-1">
                      Walmart • TikTok Shop • E-commerce Operations
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-11 h-11 rounded-xl bg-[#181B1F]/90 border border-[#2B3036]">
                    <BarChart3 className="w-5 h-5 text-[#6B8AFD]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Portfolio CTA */}
            <button
              type="button"
              onClick={onNavigateToPortfolio}
              id="hero-secondary-view-work-cta"
              className="absolute -bottom-5 left-5 sm:left-8 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#20242A] border border-[#2B3036] text-[#F5F5F2] text-sm font-bold shadow-xl hover:bg-[#252A30] transition-all duration-200"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 text-[#6B8AFD]" />
            </button>
          </div>
        </div>

        {/* Bottom Audit CTA */}
        <div className="mt-20 pt-8 border-t border-[#2B3036] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h3 className="text-lg font-bold text-[#F5F5F2]">
              Want to know what is holding your store back?
            </h3>

            <p className="text-sm text-[#A7ADB4] mt-1">
              Get a practical manual store audit focused on actionable issues.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#181B1F] border border-[#2B3036] text-[#F5F5F2] text-sm font-bold hover:bg-[#20242A] transition-all duration-200"
          >
            <ShieldCheck className="w-4 h-4 text-[#6B8AFD]" />
            Request a Free Manual Store Audit
          </button>
        </div>
      </div>
    </section>
  );
};
