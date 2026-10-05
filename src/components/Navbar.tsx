import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
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
    <header className="sticky top-0 z-50 bg-[#FBF8F3]/95 backdrop-blur-sm border-b border-[#EAD7C5]/50 px-4 lg:px-12 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Tagline */}
        <a href="#" className="flex flex-col items-start group">
          <span className="font-serif text-2xl lg:text-3xl tracking-[0.2em] font-semibold text-[#2C1B18] leading-tight">
            SKINTONIK
          </span>
          <span className="text-[9px] lg:text-[10px] tracking-[0.25em] text-[#8C7A75] font-medium uppercase mt-0.5">
            SKIN | HAIR | BODY | WELLNESS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium text-[#2C1B18]/80">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="hover:text-[#4A151B] transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:block">
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center space-x-2 bg-[#4A151B] hover:bg-[#3A0D12] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2C1B18] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-4 pb-6 border-t border-[#EAD7C5] bg-[#FBF8F3] px-2 space-y-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-3 py-2 text-sm text-[#2C1B18] hover:bg-[#F3EDE2] rounded-md transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={handleScrollToForm}
              className="w-full flex items-center justify-center space-x-2 bg-[#4A151B] text-white text-sm font-medium py-3 rounded-full shadow"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
