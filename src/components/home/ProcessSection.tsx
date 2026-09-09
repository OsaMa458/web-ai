import React from 'react';
import { Search, MapPin, Wrench, ShieldCheck, Repeat, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenAuditModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAuditModal }) => {
  const steps = [
    {
      stepNumber: '01',
      icon: Search,
      title: 'Account & Catalog Diagnostic',
      desc: 'We perform a deep manual audit of your active storefront: inspecting item specs, Buy Box retention, category taxonomy, and current policy standing.',
      deliverable: 'Diagnostic audit report & error catalog',
    },
    {
      stepNumber: '02',
      icon: MapPin,
      title: 'Prioritized Action Roadmap',
      desc: 'Instead of boiling the ocean, we isolate high-impact bottlenecks: suppressed revenue drivers, low LQS items (< 60), and WFS 2-Day badge eligibility.',
      deliverable: 'Structured roadmap with milestone timelines',
    },
    {
      stepNumber: '03',
      icon: Wrench,
      title: 'Direct Technical Execution',
      desc: 'I personally author compliant listing copy, map backend attributes, create conversion-engineered graphics, and submit clean inventory feeds.',
      deliverable: 'Ready-to-publish feeds & creative decks',
    },
    {
      stepNumber: '04',
      icon: ShieldCheck,
      title: 'Validation & Indexing Check',
      desc: 'We verify that the marketplace algorithms accept every field without errors, monitor search indexing on mobile devices, and track LQS gains.',
      deliverable: 'Verification scorecard & indexing check',
    },
    {
      stepNumber: '05',
      icon: Repeat,
      title: 'Recurring Operations & Care',
      desc: 'Continuous daily health monitoring: maintaining TikTok dispatch SLAs, resolving customer inquiries, managing inventory alerts, and catalog expansion.',
      deliverable: 'Stable shop rating & active operations care',
    },
  ];

  return (
    <section id="process-section" className="py-20 lg:py-28 bg-[#181B1F] border-y border-[#2B3036] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#20242A] text-[#6B8AFD] border border-[#2B3036]">
              <span className="w-2 h-2 rounded-full bg-[#6B8AFD]" />
              <span>Connected Operational Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
              From Diagnostic to Execution in 5 Steps
            </h2>
            <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
              Every marketplace project follows a disciplined, predictable structure. No guesswork, no junior delegation—just hands-on execution that produces measurable results.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] shadow-sm transition-all cursor-pointer"
            >
              <span>Start With a Free Store Audit</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={`process-step-${idx + 1}`}
                className="rounded-2xl bg-[#20242A] border border-[#2B3036] p-6 flex flex-col justify-between hover:border-[#6B8AFD]/40 hover:bg-[#252A30] transition-all group duration-300"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-bold text-[#6B8AFD]/70 group-hover:text-[#6B8AFD] transition-colors">
                      {item.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#181B1F] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD] group-hover:border-[#6B8AFD]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#F5F5F2] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#A7ADB4] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Deliverable badge */}
                <div className="pt-5 mt-5 border-t border-[#2B3036]">
                  <span className="text-[10px] font-mono uppercase font-semibold text-[#6B8AFD] block mb-1">
                    Direct Deliverable
                  </span>
                  <div className="text-[11px] text-[#F5F5F2] font-medium leading-tight">
                    {item.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
