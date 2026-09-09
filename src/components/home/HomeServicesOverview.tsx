import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Store, PackageSearch, Video, Image, TrendingUp } from 'lucide-react';
import { serviceCategories } from '../../data/servicesData';

interface HomeServicesOverviewProps {
  onNavigateToServices: () => void;
  onOpenAuditModal: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building2: Store,
  PackageSearch: PackageSearch,
  Video: Video,
  Image: Image,
  TrendingUp: TrendingUp,
};

export const HomeServicesOverview: React.FC<HomeServicesOverviewProps> = ({
  onNavigateToServices,
  onOpenAuditModal,
}) => {
  return (
    <section id="homepage-services-overview-section" className="py-16 lg:py-24 relative bg-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
              <span>Structured Service Architecture</span>
            </div>
            <h2 id="home-services-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
              E-commerce Specialist Services
            </h2>
            <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
              Organized into 5 focused disciplines to help you build, operate, optimize, and scale your marketplace storefronts.
            </p>
          </div>

          <div>
            <button
              onClick={onNavigateToServices}
              id="view-all-services-link-btn"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8AFD] hover:text-[#5A78EB] transition-colors group cursor-pointer"
            >
              <span>Explore Detailed Service Breakdowns</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Exactly 5 Primary Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => {
            const IconComponent = iconMap[category.iconName] || Store;
            return (
              <div
                key={category.id}
                id={`category-card-${category.id}`}
                className="rounded-2xl bg-[#20242A] border border-[#2B3036] hover:border-[#6B8AFD]/40 hover:bg-[#252A30] p-6 flex flex-col justify-between transition-all duration-300 shadow-sm group"
              >
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#181B1F] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD] group-hover:border-[#6B8AFD]/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036] font-medium">
                      Category 0{category.categoryNumber}
                    </span>
                  </div>

                  {/* Title & Short Explanation */}
                  <h3 className="text-lg font-bold text-[#F5F5F2] group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#A7ADB4] mt-1.5 mb-5 leading-relaxed">
                    {category.shortDescription}
                  </p>

                  {/* Individual Services in Category */}
                  <div className="space-y-3 pt-3 border-t border-[#2B3036]">
                    {category.services.map((service) => (
                      <div key={service.id} className="group/item">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6B8AFD] shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <span className="text-xs font-semibold text-[#F5F5F2]">
                              {service.name}
                            </span>
                            <p className="text-[11px] text-[#A7ADB4] leading-normal mt-0.5 line-clamp-2">
                              {service.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-4 border-t border-[#2B3036] flex items-center justify-between">
                  <button
                    onClick={onNavigateToServices}
                    className="text-xs font-semibold text-[#A7ADB4] group-hover:text-[#6B8AFD] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View deliverables & specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenAuditModal}
                    className="text-[11px] text-[#A7ADB4] hover:text-[#F5F5F2] underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    Free Audit
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick-Help Card on 6th Slot in Grid */}
          <div className="rounded-2xl bg-[#20242A] border border-[#2B3036] p-6 flex flex-col justify-between shadow-sm hover:border-[#6B8AFD]/40 transition-all">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-md bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
                Tailored Marketplace Support
              </span>
              <h3 className="text-lg font-bold text-[#F5F5F2]">
                Unsure Which Services Your Store Needs?
              </h3>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                Send your store link or current challenge. You'll receive an objective, no-obligation diagnosis identifying whether your bottleneck is store setup, listing taxonomy, or conversion presentation.
              </p>
            </div>

            <div className="pt-6 mt-4 space-y-2.5">
              <button
                onClick={onOpenAuditModal}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Request Free Store Review</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
              <p className="text-[11px] text-[#A7ADB4] text-center">
                Direct manual review • No generic automated PDF dumps
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
