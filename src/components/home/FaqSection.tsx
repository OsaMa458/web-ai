import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Walmart' | 'TikTok Shop' | 'General';
}

const faqData: FaqItem[] = [
  {
    id: 'faq-walmart-requirements',
    category: 'Walmart',
    question: 'What are the core requirements to start selling on Walmart Marketplace?',
    answer: 'To get approved for Walmart Marketplace, you generally need a registered business (US entity or approved international seller program), a valid Tax ID / EIN, verified business address, a primary product catalog with valid barcodes (UPC/GTIN), and a proven e-commerce fulfillment setup (such as a reliable 3PL or enrollment in Walmart Fulfillment Services - WFS). I help guide sellers through the application, tax verification, and shipping profile configuration to avoid delays or rejections.',
  },
  {
    id: 'faq-listing-quality-score',
    category: 'Walmart',
    question: 'What is a Walmart Listing Quality Score (LQS) and why is it critical?',
    answer: 'The Listing Quality Score (0–100%) is Walmart’s proprietary algorithmic health metric evaluated across three pillars: Content & Discoverability (keyword title, rich media, complete taxonomy attributes), Offer Competitiveness (pricing, shipping speed, Buy Box win rate), and Ratings & Reviews. Listings scoring below 70% are penalized in organic search results. By filling missing backend attributes and optimizing title syntax, I regularly help bring listings into the 85–95%+ target tier.',
  },
  {
    id: 'faq-tiktok-sla-shipping',
    category: 'TikTok Shop',
    question: 'What are the shipping and fulfillment SLA requirements on TikTok Shop?',
    answer: 'TikTok Shop enforces strict operational Service Level Agreements (SLAs). Sellers must dispatch orders and provide a valid carrier tracking scan typically within 2 business days (48 hours), while maintaining an Order Defect Rate (ODR) under 1% and a Late Dispatch Rate below 4%. Violating these thresholds triggers severe throttling or shop suspensions. I assist with warehouse profile configuration, shipping template setup, and daily operational checks to keep accounts in full standing.',
  },
  {
    id: 'faq-international-sellers',
    category: 'General',
    question: 'Can international sellers (UK, Europe, or worldwide) sell on Walmart and TikTok Shop?',
    answer: 'Yes. Both platforms support international sellers, either through dedicated cross-border seller programs or via a registered US corporate entity (such as a US LLC) paired with a US fulfillment center or 3PL. I collaborate with sellers across the US, UK, Europe, and globally to coordinate catalog compliance, tax settings, and fulfillment routing regardless of your local timezone.',
  },
  {
    id: 'faq-ongoing-management',
    category: 'General',
    question: 'What is included in ongoing day-to-day store management?',
    answer: 'Ongoing store management covers day-to-day marketplace operations so you don’t have to constantly log into Seller Center. This includes inventory feed synchronization, listing maintenance, Buy Box tracking, responding to customer support inquiries, resolving catalog suppression glitches, managing case logs with partner support, and continuously tuning attributes to prevent rank decay.',
  },
  {
    id: 'faq-free-store-audit',
    category: 'General',
    question: 'What exactly do I receive in the Free Store Audit?',
    answer: 'The Free Store Audit is a manual, human-conducted inspection of your Walmart or TikTok Shop presence—not an automated generic PDF dump. I examine your top listings, Listing Quality Scores, backend attribute completeness, shipping competitiveness, and customer friction points. Within 24–48 hours, you receive a clear, prioritized action report detailing quick-win fixes and operational improvements with zero sales obligation.',
  },
  {
    id: 'faq-multi-channel',
    category: 'General',
    question: 'Can you handle both Walmart Marketplace and TikTok Shop together?',
    answer: 'Yes. Many merchants expand simultaneously to Walmart for high-intent retail search buyers and TikTok Shop for rapid social discovery and viral sales. I coordinate cross-platform catalog architecture, ensuring product listings, creative assets, and operational workflows are tailored specifically to the rules of each marketplace.',
  },
];

interface FaqSectionProps {
  onOpenAuditModal: () => void;
  onNavigateToContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenAuditModal,
  onNavigateToContact,
}) => {
  // Store expanded item IDs (allow toggling multiple or single)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-walmart-requirements': true, // open first item by default
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = selectedCategory === 'All'
    ? faqData
    : faqData.filter((item) => item.category === selectedCategory);

  return (
    <section id="faq-section" className="py-20 lg:py-28 bg-[#111315] border-t border-[#2B3036] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Marketplace Inquiries</span>
          </div>

          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Clear, honest answers about Walmart Marketplace, TikTok Shop operations, onboarding requirements, and specialist management.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {['All', 'Walmart', 'TikTok Shop', 'General'].map((cat) => (
              <button
                key={cat}
                id={`faq-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#6B8AFD] text-[#111315] shadow-sm font-semibold'
                    : 'bg-[#181B1F] border border-[#2B3036] text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]'
                }`}
              >
                {cat === 'All' ? 'All Questions' : `${cat} Questions`}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3" role="region" aria-labelledby="faq-heading">
          {filteredFaqs.map((faq, index) => {
            const isOpen = !!openItems[faq.id];

            return (
              <div
                key={faq.id}
                id={`faq-card-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#20242A] border-[#6B8AFD]/50 shadow-md'
                    : 'bg-[#20242A] border-[#2B3036] hover:border-[#6B8AFD]/30'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${faq.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8AFD] rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#6B8AFD] shrink-0">
                        0{index + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#F5F5F2] leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#181B1F] text-[#6B8AFD] rotate-180'
                          : 'bg-[#181B1F] text-[#A7ADB4]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 text-[#A7ADB4] text-xs sm:text-sm leading-relaxed border-t border-[#2B3036] animate-fadeIn"
                  >
                    <p className="whitespace-pre-line text-[#A7ADB4]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#181B1F] border border-[#2B3036] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#F5F5F2] flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#6B8AFD]" />
              <span>Have a question specific to your store?</span>
            </div>
            <p className="text-xs text-[#A7ADB4]">
              Chat directly with Usama on WhatsApp for a fast reply, or request a free store audit.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] transition-colors cursor-pointer"
            >
              <span>Get a Free Store Audit</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
