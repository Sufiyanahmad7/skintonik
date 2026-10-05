import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { IMAGES } from '../data/images';

export const ClinicSection: React.FC = () => {
  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/n3v827McWbMcsvHn9', '_blank');
  };

  return (
    <section id="clinic-location" className="bg-[#F9F6F0] py-14 px-4 lg:px-12 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#2C1B18] mb-2">
            Our Bangalore Clinic
          </h2>
          <p className="text-xs sm:text-sm text-[#66534E]">
            Centrally located and easily accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Address Card */}
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#EAD7C5]/60 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F3EDE2] text-[#4A151B] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#2C1B18] mb-2">
                Skintonik, Bangalore
              </h3>
              <p className="text-xs text-[#66534E] leading-relaxed mb-6">
                Skintonik Dermamatic Private Limited,<br />
                Indiranagar, Bangalore – 560038
              </p>
            </div>

            <button
              onClick={handleGetDirections}
              className="inline-flex items-center justify-center space-x-2 bg-[#4A151B] hover:bg-[#3A0D12] text-white text-xs font-medium py-3 px-5 rounded-xl transition-colors w-full shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </button>
          </div>

          {/* Card 2: Clinic Interior Image */}
          <div className="rounded-2xl overflow-hidden border border-[#EAD7C5]/60 shadow-sm bg-white min-h-[240px]">
            <img
              src={IMAGES.clinic.interior}
              alt="Skintonik Bangalore Clinic Interior"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card 3: Embedded Google Map Directly Rendered */}
          <div className="rounded-2xl overflow-hidden border border-[#EAD7C5]/60 shadow-sm bg-white min-h-[240px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.341766932595!2d77.67002697398533!3d12.885731687421785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ce3accde81%3A0x79be80e1cc6a3be2!2sSkintonik%20Dermamatic%20Private%20Limited!5e0!3m2!1sen!2sin!4v1791207218275!5m2!1sen!2sin"
              className="w-full h-full min-h-[240px] border-0"
              allowFullScreen
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Skintonik Dermamatic Bangalore Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
