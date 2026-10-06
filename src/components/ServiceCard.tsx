import React from 'react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const handleExploreClick = () => {
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
    <div 
      onClick={handleExploreClick}
      className="bg-white rounded-2xl border border-[#EAD7C5]/80 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group cursor-pointer"
    >
      {/* Complete Image Container (Full visibility without cropping) */}
      <div className="h-36 sm:h-44 w-full relative bg-[#F9F6F0] p-2 flex items-center justify-center border-b border-[#EAD7C5]/40 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 rounded-lg"
        />
      </div>

      {/* Title, Description & Explore More Button */}
      <div className="p-3.5 flex flex-col text-center space-y-2.5 flex-grow justify-between">
        <div>
          <h3 className="font-serif text-sm sm:text-base font-semibold text-[#2C1B18] leading-snug group-hover:text-[#4A151B] transition-colors mb-1.5">
            {service.name}
          </h3>
          <p className="text-xs text-[#66534E] leading-relaxed line-clamp-3 font-normal">
            {service.description}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleExploreClick();
          }}
          className="w-full bg-[#F3EDE2] group-hover:bg-[#4A151B] text-[#4A151B] group-hover:text-white border border-[#EAD7C5] group-hover:border-[#4A151B] text-xs font-semibold py-2 px-3 rounded-full transition-all duration-300 shadow-2xs cursor-pointer mt-2"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};
