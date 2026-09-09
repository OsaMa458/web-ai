import React from 'react';
import { Shield, CheckCircle2, MessageSquareQuote, FileText, ArrowRight, Sparkles } from 'lucide-react';

interface ProofPlaceholderProps {
  onOpenAuditModal: () => void;
  onNavigateToPortfolio: () => void;
}

export const ProofPlaceholder: React.FC<ProofPlaceholderProps> = ({
  onOpenAuditModal,
  onNavigateToPortfolio,
}) => {
  return (
    <section id="proof-and-results-section" className="py-20 lg:py-28 bg-[#181B1F] border-y border-[#2B3036] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#20242A] text-[#6B8AFD] border border-[#2B3036]">
            <Shield className="w-3.5 h-3.5 text-[#6B8AFD]" />
            <span>Proof & Verification Standards</span>
          </div>

          <h2 id="proof-section-heading" className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
            Transparent Results & Case Studies
          </h2>

          <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
            I operate with complete integrity: no fabricated revenue screenshots, fake five-star reviews, or unverified platform badges. See practical demonstrations of deliverables below.
          </p>
        </div>

        {/* Structured Placeholder & Demonstration Ready Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Store Health Diagnostic Blueprint */}
          <div className="rounded-2xl bg-[#20242A] border border-[#2B3036] hover:border-[#6B8AFD]/40 hover:bg-[#252A30] p-6 space-y-4 flex flex-col justify-between transition-all duration-300 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#A7ADB4] uppercase tracking-wider">Audit Demonstration</span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
                  Deliverable Spec
                </span>
              </div>
              <h3 className="text-base font-bold text-[#F5F5F2]">
                Walmart 360° Store Health Diagnostic
              </h3>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                Systematic evaluation of Buy Box loss causes, shipping template lag, LQS attributes, and catalog taxonomy compliance across active items.
              </p>
              <div className="p-3.5 rounded-xl bg-[#181B1F] border border-[#2B3036] text-xs text-[#A7ADB4] space-y-1.5">
                <div className="text-[#F5F5F2] font-medium text-[11px]">Audit Report Scope:</div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Item spec completeness score</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WFS 2-Day badge eligibility review</span>
                </div>
              </div>
            </div>
            <button
              onClick={onNavigateToPortfolio}
              className="text-xs font-semibold text-[#6B8AFD] hover:text-[#5A78EB] flex items-center gap-1 cursor-pointer pt-2 transition-colors"
            >
              <span>Inspect Demonstration Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Listing Transformation Blueprint */}
          <div className="rounded-2xl bg-[#20242A] border border-[#2B3036] hover:border-[#6B8AFD]/40 hover:bg-[#252A30] p-6 space-y-4 flex flex-col justify-between transition-all duration-300 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#A7ADB4] uppercase tracking-wider">Listing Optimization</span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
                  Deliverable Spec
                </span>
              </div>
              <h3 className="text-base font-bold text-[#F5F5F2]">
                Mobile-First Copy & Attribute Architecture
              </h3>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                Rebuilding ambiguous listing descriptions into high-converting title syntax, benefit bullets, and backend specification tables.
              </p>
              <div className="p-3.5 rounded-xl bg-[#181B1F] border border-[#2B3036] text-xs text-[#A7ADB4] space-y-1.5">
                <div className="text-[#F5F5F2] font-medium text-[11px]">Optimization Scope:</div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Title formula complying with 2025 specs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Structured backend CSV attribute values</span>
                </div>
              </div>
            </div>
            <button
              onClick={onNavigateToPortfolio}
              className="text-xs font-semibold text-[#6B8AFD] hover:text-[#5A78EB] flex items-center gap-1 cursor-pointer pt-2 transition-colors"
            >
              <span>View Before/After Comparison</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Placeholder for Future Verified Testimonials */}
          <div className="rounded-2xl bg-[#20242A] border border-dashed border-[#2B3036] p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#A7ADB4] uppercase tracking-wider">Client Verification</span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-[#181B1F] text-[#A7ADB4] border border-[#2B3036]">
                  Transparency Notice
                </span>
              </div>
              <div className="w-9 h-9 rounded-lg bg-[#181B1F] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD]">
                <MessageSquareQuote className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F2]">
                Verified Client Reviews
              </h3>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                Client testimonials and verified results will be added here as marketplace store setup and optimization projects are completed and authenticated.
              </p>
              <div className="p-3.5 rounded-lg bg-[#181B1F] border border-[#2B3036] text-[11px] text-[#A7ADB4] italic">
                "Real store performance and authenticated client feedback only — never fabricated."
              </div>
            </div>
            <button
              onClick={onOpenAuditModal}
              className="text-xs font-semibold text-[#6B8AFD] hover:text-[#5A78EB] flex items-center gap-1 cursor-pointer pt-2 transition-colors"
            >
              <span>Work together on your store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
