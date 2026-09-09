import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  FileText, 
  SlidersHorizontal, 
  ShieldCheck,
  Layers,
  Sparkles,
  Search,
  ExternalLink,
  Table,
  Calculator,
  Download
} from 'lucide-react';
import { portfolioDemonstrations } from '../data/portfolioData';
import { BeforeAfterComparison } from '../components/common/BeforeAfterComparison';
import { CtaBanner } from '../components/common/CtaBanner';
import { WorkbookModal } from '../components/portfolio/WorkbookModal';

interface PortfolioPageProps {
  onOpenAuditModal: () => void;
  onNavigateToContact: (projectNote?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenAuditModal,
  onNavigateToContact,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isWorkbookOpen, setIsWorkbookOpen] = useState<boolean>(false);
  const [workbookInitialTab, setWorkbookInitialTab] = useState<'research' | 'sourcing' | 'checklist' | 'compliance'>('research');

  const categories = [
    { label: 'All Demonstrations', value: 'all' },
    { label: 'Listing Optimization', value: 'Listing Optimization' },
    { label: 'Store Audit', value: 'Store Audit' },
    { label: 'Shop Setup', value: 'Shop Setup' },
    { label: 'Product Creative', value: 'Product Creative' },
  ];

  const filteredDemos = activeFilter === 'all'
    ? portfolioDemonstrations
    : portfolioDemonstrations.filter(d => d.category === activeFilter);

  const handleOpenWorkbook = (tab: 'research' | 'sourcing' | 'checklist' | 'compliance' = 'research') => {
    setWorkbookInitialTab(tab);
    setIsWorkbookOpen(true);
  };

  return (
    <div id="portfolio-page-container" className="pt-28 pb-20 bg-[#111315]">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Capability & Methodology Showcase</span>
          </div>

          <h1 id="portfolio-h1-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
            E-commerce Portfolio & Case Studies
          </h1>

          <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
            Detailed breakdowns of marketplace optimization workflows, audit frameworks, and catalog enhancements. In alignment with my strict transparency standard, these demonstrate exact processes, analysis, and deliverables without fabricated metrics or fake client testimonials.
          </p>

          {/* Filter Pills */}
          <div className="pt-3 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`filter-btn-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat.value
                    ? 'bg-[#6B8AFD] text-[#111315] font-semibold shadow-sm'
                    : 'bg-[#181B1F] border border-[#2B3036] text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sample Workbook Spotlight Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#181B1F] border border-[#2B3036] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#6B8AFD]/30 transition-all">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#20242A] text-[#6B8AFD] border border-[#2B3036]">
              <Table className="w-3.5 h-3.5" />
              <span>Interactive Operations Artifact</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#F5F5F2]">
              E-Commerce Operations Workbook (Interactive Demo)
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
              Explore the exact multi-tab analysis tool used to evaluate products: Walmart & TikTok fee calculations, supplier land-cost comparisons, catalog launch checklists, and compliance audit frameworks.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => handleOpenWorkbook('research')}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#20242A] hover:bg-[#252A30] text-[#A7ADB4] hover:text-[#F5F5F2] border border-[#2B3036] cursor-pointer transition-colors"
              >
                Product Economics
              </button>
              <button
                onClick={() => handleOpenWorkbook('sourcing')}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#20242A] hover:bg-[#252A30] text-[#A7ADB4] hover:text-[#F5F5F2] border border-[#2B3036] cursor-pointer transition-colors"
              >
                Supplier Matrix
              </button>
              <button
                onClick={() => handleOpenWorkbook('checklist')}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#20242A] hover:bg-[#252A30] text-[#A7ADB4] hover:text-[#F5F5F2] border border-[#2B3036] cursor-pointer transition-colors"
              >
                Launch Checklist
              </button>
              <button
                onClick={() => handleOpenWorkbook('compliance')}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#20242A] hover:bg-[#252A30] text-[#A7ADB4] hover:text-[#F5F5F2] border border-[#2B3036] cursor-pointer transition-colors"
              >
                Compliance Rules
              </button>
            </div>
          </div>

          <button
            onClick={() => handleOpenWorkbook('research')}
            className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] shadow-sm flex items-center gap-2 shrink-0 cursor-pointer transition-all active:scale-95"
          >
            <Table className="w-4 h-4" />
            <span>Open Sample Workbook</span>
          </button>
        </div>
      </section>

      {/* Featured Interactive Tool: Before & After */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-6 space-y-1">
          <h2 className="text-2xl font-bold text-[#F5F5F2] flex items-center gap-2">
            <span>Direct Comparison Showcase</span>
            <span className="text-xs font-normal text-[#6B8AFD] font-mono">(Interactive)</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A7ADB4]">
            Toggle between unoptimized marketplace listings and specialist-engineered structures.
          </p>
        </div>
        <BeforeAfterComparison />
      </section>

      {/* Detailed Case Study Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex items-center justify-between border-b border-[#2B3036] pb-4">
          <h2 className="text-2xl font-bold text-[#F5F5F2]">
            Demonstration Case Studies ({filteredDemos.length})
          </h2>
          <span className="text-xs text-[#A7ADB4]">
            Showing exact problem → analysis → deliverables
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredDemos.map((demo) => (
            <div
              key={demo.id}
              id={`portfolio-card-${demo.id}`}
              className="rounded-3xl bg-[#181B1F] border border-[#2B3036] p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm hover:border-[#6B8AFD]/30 transition-all duration-300"
            >
              <div className="space-y-5">
                
                {/* Header Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2B3036] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#20242A] text-[#6B8AFD] border border-[#2B3036]">
                      {demo.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#20242A] text-[#F5F5F2] border border-[#2B3036]">
                      {demo.platform}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A7ADB4] italic">
                    {demo.projectType}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F2] leading-snug">
                  {demo.title}
                </h3>

                {/* Problem Statement */}
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/40 space-y-1">
                  <div className="text-[11px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>The Challenge & Initial Bottleneck</span>
                  </div>
                  <p className="text-xs text-[#A7ADB4] leading-relaxed">
                    {demo.problem}
                  </p>
                </div>

                {/* Analysis */}
                <div className="space-y-1">
                  <div className="text-[11px] font-semibold text-[#6B8AFD] uppercase tracking-wider">
                    Marketplace Diagnostic Analysis
                  </div>
                  <p className="text-xs text-[#A7ADB4] leading-relaxed">
                    {demo.analysis}
                  </p>
                </div>

                {/* Work Performed */}
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-[#F5F5F2] uppercase tracking-wider">
                    Execution & Work Performed:
                  </div>
                  <ul className="space-y-1.5">
                    {demo.workPerformed.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#A7ADB4] leading-normal">
                        <span className="text-[#6B8AFD] font-bold shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Improvements & Measurable Outcomes */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
                  <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Key Improvements & Deliverables</span>
                  </div>
                  <ul className="space-y-1.5">
                    {demo.keyImprovements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-emerald-200 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#2B3036]">
                  <div className="text-[11px] font-semibold text-[#A7ADB4] uppercase tracking-wider">
                    Client Deliverable Assets:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {demo.deliverables.map((del, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#20242A] border border-[#2B3036] text-[11px] text-[#A7ADB4]"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#2B3036] flex items-center justify-between">
                <button
                  onClick={() => onNavigateToContact(`I'd like to implement a workflow similar to "${demo.title}" for my store.`)}
                  className="text-xs font-semibold text-[#6B8AFD] hover:text-[#5A78EB] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Request Similar Implementation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenAuditModal}
                  className="text-[11px] text-[#A7ADB4] hover:text-[#F5F5F2] transition-colors cursor-pointer"
                >
                  Free Audit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <div className="mt-20">
        <CtaBanner
          onOpenAuditModal={onOpenAuditModal}
          onBookCall={() => onNavigateToContact()}
          title="Want Me to Run a Similar Audit on Your Store?"
          subtitle="Get a clear, manual evaluation of your current listing score, attribute completeness, and growth opportunities."
        />
      </div>

      {/* Interactive Workbook Modal */}
      <WorkbookModal
        isOpen={isWorkbookOpen}
        onClose={() => setIsWorkbookOpen(false)}
        initialTab={workbookInitialTab}
      />

    </div>
  );
};
