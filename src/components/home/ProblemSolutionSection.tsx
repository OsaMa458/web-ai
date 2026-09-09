import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, ShieldAlert, Zap, Layers } from 'lucide-react';

interface ProblemSolutionSectionProps {
  onOpenAuditModal: () => void;
  onNavigateToServices: () => void;
}

export const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({
  onOpenAuditModal,
  onNavigateToServices,
}) => {
  return (
    <section id="problem-solution-section" className="py-20 lg:py-28 bg-[#111315] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
            <Layers className="w-3.5 h-3.5" />
            <span>Problem → Solution & Operational Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
            Why Generic Agencies Fail <br className="hidden sm:inline" />
            <span>Walmart & TikTok Marketplaces</span>
          </h2>

          <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
            Marketplaces are unforgiving algorithms, not generic social feeds. You don't need layers of account managers; you need an experienced specialist who operates directly in the backend.
          </p>
        </div>

        {/* Dual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: The Bottleneck (Typical Agency Retainer) */}
          <div className="rounded-2xl bg-[#20242A] border border-red-900/30 p-8 flex flex-col justify-between relative group hover:border-red-900/50 transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#2B3036] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/50 flex items-center justify-center text-red-400">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-red-400 font-semibold uppercase tracking-wider">The Costly Problem</span>
                    <h3 className="text-lg font-bold text-[#F5F5F2]">Typical Agency Model</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-red-950/60 text-red-400 border border-red-900/50">
                  Bloat & Lag
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Junior Account Reps & Broken Relays',
                    desc: 'You talk to a project coordinator who relays messages to offshore interns who have never managed a Walmart Buy Box or resolved a TikTok dispatch penalty.'
                  },
                  {
                    title: 'Cosmetic Tweaks Instead of Algorithmic Depth',
                    desc: 'They rewrite a catchy title without touching backend variant attributes, resulting in low Listing Quality Scores (LQS < 60) and lost organic rank.'
                  },
                  {
                    title: 'Opaque Retainers with Fabricated Metrics',
                    desc: 'You pay thousands monthly for vanity slide decks rather than concrete feed fixes, catalog audits, or direct operational deliverables.'
                  },
                  {
                    title: 'Slow Reaction to Policy Violations',
                    desc: 'When TikTok Shop issues a late-dispatch warning or listing suppression, tickets linger for days while your shop health plummets.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#181B1F] border border-[#2B3036]">
                    <span className="w-5 h-5 rounded-full bg-red-950/60 border border-red-900/60 text-red-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-red-200">{item.title}</div>
                      <div className="text-[11px] text-[#A7ADB4] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B3036] text-xs text-red-400 font-medium">
              Result: Wasted budget, suppressed listings, and persistent marketplace friction.
            </div>
          </div>

          {/* Column 2: The Solution (Usama Direct Execution) */}
          <div className="rounded-2xl bg-[#20242A] border border-[#2B3036] p-8 flex flex-col justify-between relative group hover:border-[#6B8AFD]/40 transition-all shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#2B3036] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#181B1F] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#6B8AFD] font-semibold uppercase tracking-wider">The Direct Solution</span>
                    <h3 className="text-lg font-bold text-[#F5F5F2]">Direct Specialist Execution</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
                  Specialist Partner
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Direct 1-on-1 Specialist Partnership',
                    desc: 'You work directly with Usama. Every diagnostic, feed update, product research sheet, and listing spec is personally analyzed and executed.'
                  },
                  {
                    title: 'Target LQS 90%+ Taxonomy Optimization',
                    desc: 'Systematic backend attribute mapping conforming to Walmart 2025 Item Spec standards, driving organic search visibility and Buy Box eligibility.'
                  },
                  {
                    title: 'Transparent Deliverables & No Fluff',
                    desc: 'Every project receives clear operational artifacts: structured workbooks, before/after audits, verified copy decks, and compliance checklists.'
                  },
                  {
                    title: 'Disciplined TikTok Shop Operations',
                    desc: 'Rigorous order dispatch tracking, sample creator management, and policy compliance ensuring your TikTok Shop maintains elite seller standing.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#181B1F] border border-[#2B3036]">
                    <CheckCircle2 className="w-5 h-5 text-[#6B8AFD] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-[#F5F5F2]">{item.title}</div>
                      <div className="text-[11px] text-[#A7ADB4] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B3036] flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-medium">
                Outcome: Clean catalog compliance, higher conversion, and peace of mind.
              </span>
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111315] bg-[#6B8AFD] hover:bg-[#5A78EB] px-4 py-2 rounded-lg transition-all cursor-pointer"
              >
                <span>Free Audit</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
