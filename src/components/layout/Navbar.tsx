import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { BrandLogo } from '../common/BrandLogo';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenAuditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'nav-link-home', label: 'Home', page: 'home' },
    { id: 'nav-link-services', label: 'Services', page: 'services' },
    { id: 'nav-link-portfolio', label: 'Portfolio', page: 'portfolio' },
    { id: 'nav-link-about', label: 'About', page: 'about' },
    { id: 'nav-link-contact', label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#111315]/95 backdrop-blur-md border-b border-[#2B3036] shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#111315]/85 backdrop-blur-sm border-b border-[#2B3036]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Specialist Brand */}
          <button
            onClick={() => handleNavClick('home')}
            id="brand-logo-btn"
            className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B8AFD]/40 rounded-lg p-1 transition-transform"
          >
            <BrandLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" aria-label="Primary Navigation" className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={link.id}
                  onClick={() => handleNavClick(link.page)}
                  className={`relative px-4 py-2 rounded-xl text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#F5F5F2] font-semibold bg-[#20242A] border border-[#2B3036]'
                      : 'text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]/60 font-medium'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-[#6B8AFD] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Primary CTA with Muted Blue */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAuditModal}
              id="nav-free-audit-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#111315] bg-[#6B8AFD] hover:bg-[#5A78EB] shadow-sm active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Get a Free Store Audit</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenAuditModal}
              className="px-3 py-1.5 text-xs font-semibold text-[#111315] bg-[#6B8AFD] rounded-lg shadow-sm"
            >
              Free Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-xl text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A] focus:outline-none focus:ring-2 focus:ring-[#6B8AFD]/40"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden bg-[#181B1F] border-b border-[#2B3036] px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`mobile-${link.id}`}
                  onClick={() => handleNavClick(link.page)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-base transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#F5F5F2] bg-[#20242A] font-semibold border border-[#2B3036]'
                      : 'text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#20242A]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#2B3036] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              id="mobile-cta-audit-btn"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#111315] bg-[#6B8AFD] hover:bg-[#5A78EB] shadow-sm cursor-pointer"
            >
              <span>Get a Free Store Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              id="mobile-cta-contact-btn"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[#F5F5F2] bg-[#20242A] hover:bg-[#252A30] border border-[#2B3036] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#6B8AFD]" />
              <span>Contact Specialist</span>
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-[#A7ADB4]">
            {siteConfig.contact.targetRegions}
          </div>
        </div>
      )}
    </header>
  );
};
