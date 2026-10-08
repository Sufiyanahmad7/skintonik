import React from 'react';
import { MapPin, Navigation, MessageCircle, Phone } from 'lucide-react';
import { IMAGES } from '../data/images';
import { reportCallConversion } from '../utils/googleAds';

export const ClinicSection: React.FC = () => {
  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/n3v827McWbMcsvHn9', '_blank');
  };

  return (
    <section id="clinic-location" className="bg-[#FBF8F3] py-10 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2
            className="font-serif text-[26px] lg:text-[32px] font-bold text-[#271446] mb-1.5"
          >
            Our bengaluru Clinic
          </h2>
          <p className="text-[11px] sm:text-xs text-[#271446] font-medium">
            Centrally located and easily accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

          {/* Card 1: Address & Contact */}
          <div className="bg-white p-6 rounded-2xl border border-[#EAD7C5] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F3EDE2] text-[#271446] flex items-center justify-center mb-4 border border-[#EAD7C5]">
                <MapPin className="w-5 h-5 text-[#271446]" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-bold text-[#271446] mb-2">
                Skintonik, bengaluru
              </h3>
              <p className="text-xs text-[#271446] leading-relaxed mb-4 font-normal">
                Skintonik Dermamatic Private Limited,<br />
                Indiranagar, bengaluru – 560038
              </p>
              
              <div className="space-y-2 text-xs font-semibold text-[#271446] mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#271446] shrink-0" />
                  <span>Call: <a href="tel:7387125717" onClick={reportCallConversion} className="text-[#271446] font-bold hover:underline">+91 73871 25717</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp: <a href="https://wa.me/917387125717" target="_blank" rel="noreferrer" className="text-emerald-700 font-bold hover:underline">+91 73871 25717</a></span>
                </div>
              </div>
            </div>

            <button
              onClick={handleGetDirections}
              className="inline-flex items-center justify-center gap-2 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors w-full shadow-xs cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-[#F8DB66]" />
              <span>Get Directions</span>
            </button>
          </div>

          {/* Card 2: Clinic Photo */}
          <div className="rounded-2xl overflow-hidden border border-[#EAD7C5] shadow-xs bg-white h-full min-h-[240px] relative group">
            <img
              src={IMAGES.clinic.interior}
              alt="Skintonik bengaluru Clinic Interior"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 3: Google Map */}
          <div className="rounded-2xl overflow-hidden border border-[#F8DB66]/30 shadow-md bg-[#341b5c] h-full min-h-[240px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.341766932595!2d77.67002697398533!3d12.885731687421785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ce3accde81%3A0x79be80e1cc6a3be2!2sSkintonik%20Dermamatic%20Private%20Limited!5e0!3m2!1sen!2sin!4v1791207218275!5m2!1sen!2sin"
              className="w-full h-full min-h-[240px] border-0"
              allowFullScreen
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Skintonik Dermamatic bengaluru Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
