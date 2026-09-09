import React, { useState } from 'react';
import { 
  Store, 
  PackageSearch, 
  Video, 
  Image, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { serviceCategories } from '../data/servicesData';
import { CtaBanner } from '../components/common/CtaBanner';

interface ServicesPageProps {
  onOpenAuditModal: () => void;
  onNavigateToContact: (defaultMessage?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building2: Store,
  PackageSearch: PackageSearch,
  Video: Video,
  Image: Image,
  TrendingUp: TrendingUp,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenAuditModal,
  onNavigateToContact,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  const filteredCategories = selectedPlatform === 'all'
    ? serviceCategories
    : serviceCategories.filter(cat => 
        selectedPlatform === 'Walmart' 
          ? cat.platform === 'Walmart' || cat.platform === 'Cross-Platform'
          : cat.platform === 'TikTok Shop' || cat.platform === 'Cross-Platform'
      );

  return (
    <div id="services-page-container" className="pt-28 pb-20 bg-[#111315]">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Marketplace Architecture</span>
          </div>

          <h1 id="services-h1-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
            Walmart & TikTok Shop E-commerce Services
          </h1>

          <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
            Practical, conversion-focused marketplace solutions structured around the exact problems e-commerce store owners face—from store setup and daily management to listing optimization and store audits.
          </p>

          {/* Filter Bar */}
          <div className="pt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#A7ADB4] mr-2 font-medium">Filter by Platform:</span>
            {[
              { label: 'All 5 Categories', value: 'all' },
              { label: 'Walmart Marketplace', value: 'Walmart' },
              { label: 'TikTok Shop', value: 'TikTok Shop' },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setSelectedPlatform(f.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedPlatform === f.value
                    ? 'bg-[#6B8AFD] text-[#111315] font-semibold shadow-sm'
                    : 'bg-[#181B1F] border border-[#2B3036] text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Primary Categories List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredCategories.map((category) => {
          const IconComponent = iconMap[category.iconName] || Store;

          return (
            <div
              key={category.id}
              id={`service-category-${category.id}`}
              className="rounded-3xl bg-[#181B1F] border border-[#2B3036] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-sm"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2B3036] pb-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#20242A] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD] shrink-0 mt-1">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#6B8AFD] font-semibold uppercase tracking-wider">
                        Category 0{category.categoryNumber}
                      </span>
                      <span className="text-[#2B3036]">•</span>
                      <span className="text-xs font-semibold text-[#A7ADB4]">
                        {category.platform} Focus
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#A7ADB4] max-w-2xl leading-relaxed">
                      {category.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => onNavigateToContact(`I'd like to inquire about ${category.title} services.`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#111315] bg-[#6B8AFD] hover:bg-[#5A78EB] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Inquire About Category</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Individual Services Cards within this Category */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    id={`service-card-${service.id}`}
                    className="rounded-2xl bg-[#20242A] border border-[#2B3036] p-5 sm:p-6 flex flex-col justify-between space-y-5 hover:border-[#6B8AFD]/40 hover:bg-[#252A30] transition-all duration-300"
                  >
                    <div className="space-y-4">
                      {/* Service Name */}
                      <h3 className="text-base sm:text-lg font-bold text-[#F5F5F2] tracking-tight flex items-center justify-between">
                        <span>{service.name}</span>
                        <span className="w-2 h-2 rounded-full bg-[#6B8AFD]" />
                      </h3>

                      {/* Problem it solves */}
                      <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/40 space-y-1">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-red-400 uppercase tracking-wider">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>The Problem It Solves</span>
                        </div>
                        <p className="text-xs text-[#A7ADB4] leading-relaxed">
                          {service.problem}
                        </p>
                      </div>

                      {/* Practical Solution / Value */}
                      <div className="space-y-1">
                        <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                          The Value & Approach
                        </div>
                        <p className="text-xs text-[#A7ADB4] leading-relaxed">
                          {service.solution}
                        </p>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-2 border-t border-[#2B3036]">
                        <div className="text-[11px] font-semibold text-[#A7ADB4] uppercase tracking-wider">
                          Specific Deliverables:
                        </div>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#A7ADB4] leading-normal">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#6B8AFD] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Action */}
                    <div className="pt-3 border-t border-[#2B3036] flex items-center justify-between">
                      <button
                        onClick={() => onNavigateToContact(`Hi Usama, I am interested in your ${service.name} service (${category.title}).`)}
                        className="text-xs font-semibold text-[#6B8AFD] hover:text-[#5A78EB] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Discuss this service</span>
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

            </div>
          );
        })}
      </section>

      {/* Closing CTA */}
      <div className="mt-20">
        <CtaBanner
          onOpenAuditModal={onOpenAuditModal}
          onBookCall={() => onNavigateToContact()}
          title="Need a Custom Plan for Your Store?"
          subtitle="Whether you need help with a single product launch or ongoing day-to-day store management across Walmart and TikTok Shop, let's look at your catalog."
        />
      </div>

    </div>
  );
};
