import React from 'react';
import { 
  Store, 
  Video, 
  Settings, 
  ListChecks, 
  Search, 
  Sparkles, 
  FileSearch 
} from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    { label: 'Walmart Marketplace', icon: Store, note: 'Catalog & Setup' },
    { label: 'TikTok Shop', icon: Video, note: 'Social Commerce' },
    { label: 'Store Setup', icon: Settings, note: 'Onboarding & Ops' },
    { label: 'Store Management', icon: ListChecks, note: 'Daily SLA Care' },
    { label: 'Product Research', icon: Search, note: 'Market Feasibility' },
    { label: 'Listing Optimization', icon: Sparkles, note: 'LQS & Copy' },
    { label: 'Store Audits', icon: FileSearch, note: 'Health & Fixes' },
  ];

  return (
    <div id="capability-strip-section" className="border-y border-[#2B3036] bg-[#181B1F] py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6B8AFD]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB4]">
              Specialist Capabilities & Platforms
            </span>
          </div>
          <span className="text-xs text-[#A7ADB4]">
            Direct hands-on execution for US, UK & international multichannel brands
          </span>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={`capability-badge-${idx}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#20242A] border border-[#2B3036] hover:border-[#6B8AFD]/50 hover:bg-[#252A30] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#181B1F] border border-[#2B3036] flex items-center justify-center text-[#6B8AFD] shrink-0 group-hover:border-[#6B8AFD]/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-[#F5F5F2] truncate group-hover:text-[#F5F5F2]">{item.label}</div>
                  <div className="text-[11px] text-[#A7ADB4] truncate">{item.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
