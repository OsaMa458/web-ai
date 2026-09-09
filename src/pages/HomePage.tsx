import React from 'react';
import { Hero } from '../components/home/Hero';
import { CapabilityStrip } from '../components/home/CapabilityStrip';
import { HomeServicesOverview } from '../components/home/HomeServicesOverview';
import { ProblemSolutionSection } from '../components/home/ProblemSolutionSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { SpecialistIntroSection } from '../components/home/SpecialistIntroSection';
import { ProofPlaceholder } from '../components/home/ProofPlaceholder';
import { FaqSection } from '../components/home/FaqSection';
import { BeforeAfterComparison } from '../components/common/BeforeAfterComparison';
import { CtaBanner } from '../components/common/CtaBanner';
import { ArrowRight, Layers } from 'lucide-react';

interface HomePageProps {
  onOpenAuditModal: () => void;
  onNavigateToServices: () => void;
  onNavigateToPortfolio: () => void;
  onNavigateToAbout: () => void;
  onNavigateToContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenAuditModal,
  onNavigateToServices,
  onNavigateToPortfolio,
  onNavigateToAbout,
  onNavigateToContact,
}) => {
  return (
    <div id="home-page-container" className="space-y-0 bg-[#111315]">
      {/* 1. Hero Section */}
      <Hero
        onOpenAuditModal={onOpenAuditModal}
        onBookCall={onNavigateToContact}
        onNavigateToPortfolio={onNavigateToPortfolio}
      />

      {/* 2. Capability / Service Introduction Strip */}
      <CapabilityStrip />

      {/* 3. 5 Primary Service Categories Overview */}
      <HomeServicesOverview
        onNavigateToServices={onNavigateToServices}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* 4. Problem → Solution & Operational Value */}
      <ProblemSolutionSection
        onOpenAuditModal={onOpenAuditModal}
        onNavigateToServices={onNavigateToServices}
      />

      {/* 5. Featured Portfolio / Work Interactive Showcase */}
      <section id="featured-work-section" className="py-20 lg:py-28 bg-[#181B1F] border-y border-[#2B3036]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#20242A] text-[#6B8AFD] border border-[#2B3036]">
                <Layers className="w-3.5 h-3.5" />
                <span>Operational Work & Demonstrations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
                Real-World Marketplace Transformations
              </h2>
              <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
                See how structured listing syntax, mobile-first information hierarchy, and 4-pillar diagnostics transform confusing seller metrics into concrete revenue gains.
              </p>
            </div>

            <div>
              <button
                onClick={onNavigateToPortfolio}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-medium text-[#F5F5F2] hover:bg-[#252A30] bg-[#20242A] border border-[#2B3036] transition-all cursor-pointer"
              >
                <span>View All Case Studies & Artifacts</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6B8AFD]" />
              </button>
            </div>
          </div>

          <BeforeAfterComparison />
        </div>
      </section>

      {/* 6. 5-Step Connected Workflow Process */}
      <ProcessSection onOpenAuditModal={onOpenAuditModal} />

      {/* 7. About / Specialist Introduction */}
      <SpecialistIntroSection
        onNavigateToAbout={onNavigateToAbout}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* 8. Trust & Proof Area */}
      <ProofPlaceholder
        onOpenAuditModal={onOpenAuditModal}
        onNavigateToPortfolio={onNavigateToPortfolio}
      />

      {/* 9. Frequently Asked Questions */}
      <FaqSection
        onOpenAuditModal={onOpenAuditModal}
        onNavigateToContact={onNavigateToContact}
      />

      {/* 10. Final Call to Action */}
      <CtaBanner
        onOpenAuditModal={onOpenAuditModal}
        onBookCall={onNavigateToContact}
      />
    </div>
  );
};


