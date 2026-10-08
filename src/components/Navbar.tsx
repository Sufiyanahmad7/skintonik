import React, { useState } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { reportCallConversion } from '../utils/googleAds';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'All Treatments', href: '#popular-treatments' },
    { label: 'Offers', href: '#festive-offer' },
    { label: 'Why Skintonik', href: '#why-skintonik' },
    { label: 'Results', href: '#results' },
    { label: 'Our Experts', href: '#why-skintonik' },
    { label: 'Locations', href: '#clinic-location' },
    { label: 'FAQs', href: '#popular-searches' },
  ];

  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const inputEl = document.getElementById('hero-full-name-input');
    const formContainer = document.getElementById('consultation-form');
    
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      if (inputEl) {
        inputEl.focus();
      }
    }, 400);
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/97 backdrop-blur-sm border-b border-[#EAD7C5]/60 transition-all duration-300 px-3 md:px-4 lg:px-10">
      <div className="max-w-7xl mx-auto py-2.5 flex items-center justify-between">
        {/* Logo & Tagline */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <img 
            src="/images/skintonik.png" 
            alt="Skintonik Logo" 
            className="h-8 lg:h-10 w-auto object-contain shrink-0" 
          />
          <div className="flex flex-col items-start">
            <span 
              className="font-serif text-xl lg:text-2xl tracking-[0.18em] font-bold text-[#271446] leading-tight"
            >
              SKINTONIK
            </span>
            <span className="text-[8px] lg:text-[9px] tracking-[0.22em] text-[#271446]/80 font-medium uppercase mt-0.5">
              SKIN | HAIR | BODY | WELLNESS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6 text-[10.5px] lg:text-[11px] xl:text-xs font-semibold text-[#271446]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="hover:text-[#271446] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href="tel:7387125717"
            onClick={reportCallConversion}
            className="h-8 lg:h-9 xl:h-10 inline-flex items-center gap-1.5 bg-white hover:bg-[#F3EDE2] text-[#271446] border border-[#EAD7C5] text-xs lg:text-sm font-semibold px-3 lg:px-4 rounded-full transition-all duration-200 shadow-2xs"
            title="Call Us"
          >
            <Phone className="w-3.5 h-3.5 text-[#271446]" />
            <span>Call</span>
          </a>
          <button
            onClick={handleScrollToForm}
            className="h-8 lg:h-9 xl:h-10 inline-flex items-center gap-1.5 lg:gap-2 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] text-xs lg:text-sm font-semibold px-4 lg:px-5 rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F8DB66]" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-[#271446] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden pt-3 pb-5 border-t border-[#EAD7C5] bg-[#FBF8F3] px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-3 py-2.5 text-sm text-[#271446] hover:bg-[#F3EDE2] rounded-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:7387125717"
              onClick={() => {
                reportCallConversion();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#271446] border border-[#EAD7C5] text-sm font-semibold py-2.5 rounded-full shadow-2xs"
            >
              <Phone className="w-4 h-4 text-[#271446]" />
              <span>Call Us: +91 73871 25717</span>
            </a>
            <button
              onClick={handleScrollToForm}
              className="w-full flex items-center justify-center gap-2 bg-[#271446] text-[#F8DB66] text-sm font-semibold py-3 rounded-full shadow"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#F8DB66]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
