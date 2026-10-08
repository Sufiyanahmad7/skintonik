import React from 'react';
import { MessageCircle, Phone, Calendar, ArrowRight } from 'lucide-react';
import { reportCallConversion } from '../utils/googleAds';

export const FloatingActions: React.FC = () => {
  const handleScrollToForm = () => {
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
  };

  return (
    <>
      {/* ── DESKTOP & TABLET / IPAD: FLOATING ROUND CIRCLE WHATSAPP ICON ── */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/917387125717?text=Hi%20Skintonik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20treatments"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95"
          title="Chat on WhatsApp"
        >
          <img
            src="/images/whatsapp_official.svg"
            alt="WhatsApp Chat"
            className="w-full h-full object-contain"
          />
        </a>
      </div>

      {/* ── MOBILE: FIXED BOTTOM STICKY BAR WITH WHATSAPP & BOOK CONSULTATION ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#271446] border-t border-[#F8DB66]/30 px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          
          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/917387125717?text=Hi%20Skintonik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20treatments"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-sm transition-transform active:scale-95 text-center"
          >
            <img
              src="/images/whatsapp_official.svg"
              alt="WhatsApp"
              className="w-5 h-5 shrink-0"
            />
            <span>WhatsApp</span>
          </a>

          {/* BOOK CONSULTATION BUTTON */}
          <button
            onClick={handleScrollToForm}
            className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#F8DB66] via-[#FFE885] to-[#F8DB66] text-[#271446] font-black text-xs py-2.5 px-3 rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer text-center"
          >
            <Calendar className="w-4 h-4 text-[#271446] shrink-0" />
            <span>Book Consultation</span>
          </button>

        </div>
      </div>
    </>
  );
};
