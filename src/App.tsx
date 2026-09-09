import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AuditModal } from './components/common/AuditModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');

  // Synchronize with URL hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
      if (['home', 'services', 'portfolio', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Page Title and Meta per Section 25
  useEffect(() => {
    switch (currentPage) {
      case 'services':
        document.title = 'Walmart & TikTok Shop E-commerce Services | Usama';
        break;
      case 'portfolio':
        document.title = 'E-commerce Portfolio & Case Studies | Walmart & TikTok Shop';
        break;
      case 'about':
        document.title = 'About Usama | Walmart & TikTok Shop E-commerce Specialist';
        break;
      case 'contact':
        document.title = 'Contact Usama | Walmart & TikTok Shop E-commerce Specialist';
        break;
      case 'home':
      default:
        document.title = 'Walmart & TikTok Shop E-commerce Specialist | Usama';
        break;
    }
  }, [currentPage]);

  const navigateTo = (page: string, message?: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    if (message) {
      setContactInitialMessage(message);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111315] text-[#F5F5F2] antialiased selection:bg-[#6B8AFD]/25 selection:text-[#F5F5F2]">
      {/* Sticky Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={(page) => navigateTo(page)}
        onOpenAuditModal={handleOpenAuditModal}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onOpenAuditModal={handleOpenAuditModal}
            onNavigateToServices={() => navigateTo('services')}
            onNavigateToPortfolio={() => navigateTo('portfolio')}
            onNavigateToAbout={() => navigateTo('about')}
            onNavigateToContact={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenAuditModal={handleOpenAuditModal}
            onNavigateToContact={(msg) => navigateTo('contact', msg)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onOpenAuditModal={handleOpenAuditModal}
            onNavigateToContact={(msg) => navigateTo('contact', msg)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenAuditModal={handleOpenAuditModal}
            onNavigateToContact={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialMessage={contactInitialMessage}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentPage={(page) => navigateTo(page)}
        onOpenAuditModal={handleOpenAuditModal}
      />

      {/* High-Converting Free Store Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
