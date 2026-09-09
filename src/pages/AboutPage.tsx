import React from 'react';
import { 
  ShieldCheck, 
  Store, 
  Video, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Zap, 
  MessageSquare, 
  Clock, 
  SlidersHorizontal 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { CtaBanner } from '../components/common/CtaBanner';
import { SpecialistPhoto } from '../components/common/SpecialistPhoto';

interface AboutPageProps {
  onOpenAuditModal: () => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenAuditModal,
  onNavigateToContact,
}) => {
  return (
    <div id="about-page-container" className="pt-28 pb-20 bg-[#111315]">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
            <Target className="w-3.5 h-3.5" />
            <span>Marketplace Specialist Positioning</span>
          </div>

          <h1 id="about-h1-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
            About Usama
          </h1>

          <p className="text-base sm:text-lg font-semibold text-[#6B8AFD]">
            {siteConfig.positioning}
          </p>

          <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
            I help e-commerce brands, private label sellers, and multichannel retailers build, operate, and optimize their storefronts across Walmart Marketplace and TikTok Shop.
          </p>
        </div>
      </section>

      {/* Main Narrative & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Narrative & Founder Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Founder Portrait Card */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-[#2B3036] bg-[#181B1F] shadow-sm p-3 group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-[#111315]">
                <SpecialistPhoto
                  type="profile"
                  altText="Usama, Walmart and TikTok Shop e-commerce specialist"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="font-bold text-[#F5F5F2] text-lg">Usama</div>
                  <div className="text-xs text-[#6B8AFD] font-medium">Marketplace Specialist</div>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-[#20242A] border border-[#2B3036] text-center text-xs text-[#A7ADB4]">
                <span className="text-[#F5F5F2] font-semibold">Walmart Seller Center</span> • <span className="text-[#F5F5F2] font-semibold">TikTok Shop</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#20242A] text-[#F5F5F2] border border-[#2B3036]">
              <span>Direct Specialist Partnership</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2] tracking-tight">
              E-commerce work should feel connected from decision to execution.
            </h2>

            <p>
              I focus on the practical work that moves a marketplace project from idea to execution: product research, supplier comparison, listing structure, product graphics, marketplace setup, and recurring operations.
            </p>

            <p>
              The approach is straightforward: understand the decision first, define the scope clearly, then execute the work that supports the store directly—without agency account manager handoffs or junior delegation.
            </p>

            <div className="p-4 rounded-2xl bg-[#181B1F] border border-[#2B3036] text-xs text-[#A7ADB4] leading-relaxed">
              <strong className="text-[#6B8AFD]">Honest Proof Standard:</strong> The site avoids unsupported claims, certifications, or exaggerated biographies. Every demonstration is labeled honestly so store owners can inspect real methodology and verified artifacts.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#181B1F] border border-[#2B3036] space-y-2">
                <div className="flex items-center gap-2 text-[#F5F5F2] font-bold text-sm">
                  <Store className="w-4 h-4 text-[#6B8AFD]" />
                  <span>Walmart Marketplace</span>
                </div>
                <p className="text-xs text-[#A7ADB4] leading-normal">
                  US retail marketplace with high buyer intent, where catalog attribute completeness, strict Listing Quality Scores (LQS), and Buy Box dynamics govern success.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#181B1F] border border-[#2B3036] space-y-2">
                <div className="flex items-center gap-2 text-[#F5F5F2] font-bold text-sm">
                  <Video className="w-4 h-4 text-[#6B8AFD]" />
                  <span>TikTok Shop</span>
                </div>
                <p className="text-xs text-[#A7ADB4] leading-normal">
                  Rapid-fire social commerce where impulse discovery, mobile-first product copy, SLA dispatch compliance, and creator affiliate showcases drive conversions.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 5-Step Connected Workflow */}
        <div className="rounded-3xl bg-[#181B1F] border border-[#2B3036] p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B8AFD]">Execution Framework</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2]">
              Research before execution. Execution connected to operations.
            </h3>
            <p className="text-xs sm:text-sm text-[#A7ADB4]">
              Whether the need is a new store, listing cleanup, or recurring management, the workflow stays grounded in marketplace context and available evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-bold text-[#6B8AFD]">01</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Clarify the Decision</h4>
              <p className="text-xs text-[#A7ADB4]">Define what needs to be decided or fixed before spending capital.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-bold text-[#6B8AFD]">02</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Review Evidence</h4>
              <p className="text-xs text-[#A7ADB4]">Assess product demand, fees, platform fit, and listing attributes.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-bold text-[#6B8AFD]">03</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Execute Scope</h4>
              <p className="text-xs text-[#A7ADB4]">Build, optimize, configure, or document the agreed deliverables.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-bold text-[#6B8AFD]">04</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Communicate Clearly</h4>
              <p className="text-xs text-[#A7ADB4]">Make assumptions, gaps, and next actions visible without jargon.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-bold text-[#6B8AFD]">05</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Improve Workflow</h4>
              <p className="text-xs text-[#A7ADB4]">Use recurring operations and feedback to keep catalog performance scaling.</p>
            </div>
          </div>
        </div>

        {/* What I Help With Summary Grid */}
        <div className="rounded-3xl bg-[#181B1F] border border-[#2B3036] p-6 sm:p-10 space-y-6 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2]">
              Core Areas Where I Deliver Practical Results
            </h3>
            <p className="text-xs sm:text-sm text-[#A7ADB4]">
              Targeted solutions built around real store operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-semibold text-[#6B8AFD] uppercase tracking-wider">01. Setup & Launch</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Store Infrastructure</h4>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                Navigating seller applications, banking/tax verification, warehouse shipping templates, and account onboarding.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-semibold text-[#6B8AFD] uppercase tracking-wider">02. Listing Quality</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Listing Optimization</h4>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                Elevating Listing Quality Scores (LQS), structuring titles, filling backend attributes, and writing high-converting mobile copy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-semibold text-[#6B8AFD] uppercase tracking-wider">03. Market Viability</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Product Research</h4>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                Analyzing search demand, fee structures, margin thresholds, and competitor saturation before allocating capital.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
              <div className="text-xs font-mono font-semibold text-[#6B8AFD] uppercase tracking-wider">04. Operational Health</div>
              <h4 className="text-sm font-bold text-[#F5F5F2]">Store Health Audits</h4>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                Diagnosing Buy Box loss triggers, shipping lag penalties, catalog glitches, and unaddressed customer objections.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Mandatory Closing CTAs as specified in prompt */}
      <div className="mt-20">
        <CtaBanner
          onOpenAuditModal={onOpenAuditModal}
          onBookCall={onNavigateToContact}
          title="Let's Discuss Your Walmart or TikTok Shop Goals"
          subtitle="Get a personalized, no-obligation store audit or schedule an introductory conversation to explore how I can support your marketplace operations."
        />
      </div>

    </div>
  );
};
