import React from 'react';
import { ArrowUpRight, Mail, MessageSquare, PhoneCall, ShieldCheck, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { serviceCategories } from '../../data/servicesData';
import { BrandLogo } from '../common/BrandLogo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenAuditModal }) => {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#111315] border-t border-[#2B3036] text-[#A7ADB4] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Positioning */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <BrandLogo size="md" />
            </button>
            <p className="text-[#F5F5F2] font-semibold text-sm">
              {siteConfig.positioning}
            </p>
            <p className="text-xs text-[#A7ADB4] leading-relaxed max-w-sm">
              Helping US, UK, European, and worldwide brand owners and marketplace merchants with Walmart Seller Center and TikTok Shop research, sourcing, listings, setup, and marketplace operations.
            </p>

            {/* Social & Professional Profile Links */}
            <div className="pt-2">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A7ADB4] mb-2.5">
                Verified Specialist Profiles
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#20242A] hover:bg-[#252A30] text-[#6B8AFD] border border-[#2B3036] transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={siteConfig.socials.fiverr}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#20242A] hover:bg-[#252A30] text-emerald-400 border border-[#2B3036] transition-colors flex items-center gap-1.5"
                >
                  <span className="font-black text-[10px] px-1 py-0.2 bg-emerald-500 text-[#111315] rounded">Fi</span>
                  <span>Fiverr</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#20242A] hover:bg-[#252A30] text-[#F5F5F2] border border-[#2B3036] transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#A7ADB4]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{siteConfig.contact.targetRegions}</span>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F2]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#6B8AFD] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#6B8AFD] transition-colors cursor-pointer"
                >
                  Services (5 Pillars / 9 Core)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-[#6B8AFD] transition-colors cursor-pointer"
                >
                  Portfolio & Demos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#6B8AFD] transition-colors cursor-pointer"
                >
                  About Usama
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#6B8AFD] transition-colors cursor-pointer"
                >
                  Contact & Book Call
                </button>
              </li>
            </ul>
          </div>

          {/* 5 Service Categories */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F2]">
              Core Specializations
            </div>
            <ul className="space-y-2.5 text-xs">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#6B8AFD] text-left transition-colors cursor-pointer"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Channels */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F2]">
              Direct Inquiries
            </div>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-[#A7ADB4] hover:text-[#F5F5F2] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                <span className="truncate">{siteConfig.contact.email}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#A7ADB4] hover:text-emerald-400 transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {siteConfig.contact.whatsappNumber}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
              <button
                onClick={() => handleNav('contact')}
                className="flex items-center gap-2 text-[#A7ADB4] hover:text-[#6B8AFD] transition-colors group text-left cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                <span>Schedule an Intro Discussion</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </button>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAuditModal}
                className="w-full text-center px-4 py-3 rounded-xl text-xs font-semibold bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] transition-all cursor-pointer shadow-sm"
              >
                Get a Free Store Audit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#2B3036] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7ADB4]">
          <p>© {new Date().getFullYear()} USAMA. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#A7ADB4]">
            <span>Independent Walmart Seller Center & TikTok Shop Specialist</span>
            <span>•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">Legal & Operational Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

