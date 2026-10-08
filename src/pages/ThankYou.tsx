import React from 'react';
import { CheckCircle, Calendar, PhoneCall, ShieldCheck, ArrowLeft, Home as HomeIcon } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBF8F3] flex flex-col justify-between text-[#271446] font-sans">
      {/* Top Bar with Skintonik Logo */}
      <header className="w-full bg-[#FAF7F2] border-b border-[#EAD7C5]/60 py-4 px-4 sm:px-8 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/images/skintonik.png"
              alt="Skintonik Logo"
              className="h-9 sm:h-11 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-[#271446] leading-none">
                SKINTONIK
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#C59B27] font-semibold tracking-wider uppercase mt-0.5">
                Skin · Hair · Body · Wellness
              </span>
            </div>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#271446] hover:text-[#C59B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main Thank You Card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 my-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl border border-[#EAD7C5] shadow-xl overflow-hidden text-center p-6 sm:p-10 lg:p-12 space-y-6 relative">

          {/* Subtle Decorative Background Accents */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#F8DB66]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#271446]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Success Check Icon Animation container */}
          <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#271446] to-[#422175] rounded-full flex items-center justify-center shadow-lg border-4 border-[#F8DB66] relative animate-bounce-short">
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#F8DB66] stroke-[2.5]" />
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-[#F8DB66]/30 text-[#271446] text-xs font-bold uppercase tracking-widest rounded-full border border-[#C59B27]/40">
              Booking Confirmed
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#271446] leading-tight">
              Thank You for Booking Your Consultation!
            </h1>
          </div>

          {/* Supporting Message */}
          <p className="text-sm sm:text-base text-[#52413E] leading-relaxed max-w-lg mx-auto">
            Your consultation request has been received successfully. Our team will contact you shortly to confirm your appointment.
          </p>

          {/* Next Steps / Highlights */}
          <div className="bg-[#FBF8F3] border border-[#EAD7C5] rounded-2xl p-4 sm:p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <PhoneCall className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#271446]">Confirmation Call</h4>
                <p className="text-[#52413E] text-xs mt-0.5">Our representative will call your mobile number to lock in your preferred slot.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#271446]">Personalised Plan</h4>
                <p className="text-[#52413E] text-xs mt-0.5">Get expert 1-on-1 guidance from top skin & body specialists during your visit.</p>
              </div>
            </div>
          </div>

          {/* Guarantee Pill */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#271446]/80 pt-2">
            <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
            <span>Skintonik Aesthetic Care · Kasavanahalli, Bengaluru - 560035</span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-[#271446] hover:bg-[#381d63] text-[#F8DB66] font-bold text-sm py-3 px-8 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Return to Homepage</span>
            </a>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full bg-[#FAF7F2] border-t border-[#EAD7C5]/60 py-4 px-4 text-center text-xs text-[#52413E]/80">
        © {new Date().getFullYear()} Skintonik Bengaluru. All Rights Reserved.
      </footer>
    </div>
  );
};
