import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';

interface ComparisonItem {
  id: string;
  tabLabel: string;
  title: string;
  platform: string;
  before: {
    label: string;
    score?: string;
    content: string;
    flaws: string[];
  };
  after: {
    label: string;
    score?: string;
    content: string;
    benefits: string[];
  };
  takeaway: string;
}

const comparisons: ComparisonItem[] = [
  {
    id: 'walmart-title',
    tabLabel: 'Walmart Title & Search Indexing',
    title: 'Item Title & Keyword Optimization',
    platform: 'Walmart Marketplace',
    before: {
      label: 'Typical Unoptimized Listing',
      score: 'LQS: 52 / 100',
      content: 'Stainless Steel Insulated Tumbler Mug with Lid',
      flaws: [
        'Only 46 characters (Walmart recommends up to 80-100 characters)',
        'Missing capacity (20oz), insulation mechanism, and finish',
        'Lacks primary search attributes, causing poor organic indexation',
        'Fails to highlight leak-proof or travel-ready functionality'
      ]
    },
    after: {
      label: 'Specialist Optimized Structure',
      score: 'LQS: 94 / 100',
      content: 'ThermoPro 20oz Stainless Steel Vacuum Insulated Tumbler, Double-Wall Travel Mug with Leak-Proof Splash Lid (Midnight Black)',
      benefits: [
        'Structured syntax: [Brand] + [Size] + [Material] + [Feature] + [Item Type] + [Key Benefit] + [Color]',
        'Indexes for 6 high-volume Walmart customer search variations',
        'Answers immediate buyer criteria directly in search results',
        'Fully complies with Walmart 2025 Item Spec style rules'
      ]
    },
    takeaway: 'Applying structured Walmart title architecture immediately expands organic search visibility and helps mobile searchers identify the right product.'
  },
  {
    id: 'tiktok-mobile-copy',
    tabLabel: 'TikTok Shop Mobile Presentation',
    title: 'Mobile-First Information Architecture',
    platform: 'TikTok Shop',
    before: {
      label: 'Desktop Copy Dump (Unoptimized)',
      score: 'High Bounce Rate',
      content: 'This moisturizing facial serum contains hyaluronic acid and vitamin C. It is good for daily use on face and neck area. Apply morning and night for best results. It comes in a 30ml bottle with dropper cap. Made with high quality ingredients and tested for skin friendliness.',
      flaws: [
        'Dense text block requires pinching/zooming on mobile devices',
        'No visual hierarchy or rapid scannability for impulse shoppers',
        'Omits concrete concentration percentages and key safety highlights',
        'Over 70% of shoppers bounce without reading past line 2'
      ]
    },
    after: {
      label: 'Optimized TikTok Shop Mobile Specs',
      score: 'Scannable in 3 Seconds',
      content: '💧 DEEP HYDRATION: 2% Pure Hyaluronic Acid locks moisture for 24 hours\n✨ BRIGHTENING: Stable Vitamin C visibly evens skin tone in 14 days\n🌿 CLEAN & SAFE: Fragrance-free, paraben-free, non-greasy formula\n📏 SIZE: 1.0 fl oz (30ml) dropper bottle with leak-proof travel lock',
      benefits: [
        'Scannable bullet points formatted for 6-inch phone screens',
        'Visual anchors (emojis & bold headers) draw eyes to benefits',
        'Concise, high-trust claims that comply with TikTok beauty guidelines',
        'Clear size and usage cues reduce returns and customer support tickets'
      ]
    },
    takeaway: 'TikTok Shop users browse at high speed; formatting for quick mobile comprehension directly increases add-to-cart rates.'
  },
  {
    id: 'store-health-audit',
    tabLabel: 'Store Audit Diagnostic',
    title: 'Storefront Health & Operational Review',
    platform: 'Walmart & TikTok Shop',
    before: {
      label: 'Reactive Management Approach',
      score: 'Vague Symptoms',
      content: 'Seller notices sales slowing down, but Seller Center only shows general revenue dips without clear SKU-level diagnostic insights. Ads continue running on underperforming or suppressed listings.',
      flaws: [
        'No tracking of Buy Box loss triggers or fulfillment lag',
        'Unaware of 4 catalog items suppressed due to missing taxonomy attributes',
        'Wasting advertising budget on low Listing Quality Score items',
        'No actionable roadmap for catalog recovery'
      ]
    },
    after: {
      label: 'Systematic 4-Pillar Audit Roadmap',
      score: 'Prioritized Action Plan',
      content: 'Complete diagnostic matrix covering: (1) Buy Box competitiveness, (2) WFS 2-Day badge eligibility, (3) Attribute taxonomy completeness, (4) Customer review friction patterns.',
      benefits: [
        'SKU-by-SKU diagnostic report highlighting exact error codes',
        'Identifies 4 SKUs ready for immediate WFS enrollment to restore 2-Day tags',
        'Fixes parent-child variation broken links to consolidate review counts',
        'Step-by-step 7-day remediation roadmap organized by revenue impact'
      ]
    },
    takeaway: 'A methodical audit turns confusing seller portal metrics into a clear, prioritized checklist of practical improvements.'
  }
];

export const BeforeAfterComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(comparisons[0].id);
  const activeItem = comparisons.find((c) => c.id === activeTab) || comparisons[0];

  return (
    <div id="before-after-comparison-card" className="rounded-2xl bg-[#20242A] border border-[#2B3036] overflow-hidden shadow-xl">
      {/* Platform & Header */}
      <div className="p-4 sm:p-6 border-b border-[#2B3036] bg-[#181B1F]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B8AFD]">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Interactive Demonstration</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F2] mt-1">
              Before & After Optimization Comparison
            </h3>
            <p className="text-xs sm:text-sm text-[#A7ADB4] mt-0.5">
              Compare unoptimized seller states against specialist-structured marketplace frameworks.
            </p>
          </div>
          <span className="inline-flex self-start sm:self-auto items-center px-3 py-1 rounded-full text-xs font-medium bg-[#111315] text-[#F5F5F2] border border-[#2B3036]">
            {activeItem.platform}
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mt-5">
          {comparisons.map((item) => (
            <button
              key={item.id}
              id={`tab-btn-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-[#252A30] text-[#F5F5F2] border border-[#6B8AFD] shadow-sm'
                  : 'bg-[#111315] text-[#A7ADB4] hover:text-[#F5F5F2] border border-[#2B3036]'
              }`}
            >
              {item.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#20242A]">
        {/* BEFORE BOX */}
        <div className="rounded-xl bg-red-950/20 border border-red-900/40 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-red-900/40 text-red-300 border border-red-700/50">
              <AlertCircle className="w-3.5 h-3.5 text-red-400" />
              {activeItem.before.label}
            </span>
            {activeItem.before.score && (
              <span className="text-xs font-mono font-semibold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/50">
                {activeItem.before.score}
              </span>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-[#111315] border border-red-900/40 text-[#F5F5F2] text-xs sm:text-sm font-mono whitespace-pre-line leading-relaxed">
            {activeItem.before.content}
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              Identified Problems & Bottlenecks:
            </div>
            <ul className="space-y-1.5">
              {activeItem.before.flaws.map((flaw, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#A7ADB4] leading-normal">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>{flaw}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AFTER BOX */}
        <div className="rounded-xl bg-emerald-950/20 border border-emerald-900/40 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/50">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {activeItem.after.label}
            </span>
            {activeItem.after.score && (
              <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/50">
                {activeItem.after.score}
              </span>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-[#111315] border border-emerald-900/40 text-emerald-100 text-xs sm:text-sm font-mono whitespace-pre-line leading-relaxed">
            {activeItem.after.content}
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              Deliverables & Practical Improvements:
            </div>
            <ul className="space-y-1.5">
              {activeItem.after.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#F5F5F2] leading-normal">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Summary takeaway */}
      <div className="px-4 sm:px-6 py-3.5 bg-[#181B1F] border-t border-[#2B3036] text-xs text-[#A7ADB4] flex items-start gap-2">
        <Sparkles className="w-4 h-4 text-[#6B8AFD] shrink-0 mt-0.5" />
        <span><strong className="text-[#F5F5F2]">Key Takeaway:</strong> {activeItem.takeaway}</span>
      </div>
    </div>
  );
};
