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
      className="bg-white rounded-[20px] border border-[#D8C4B0] p-4 sm:p-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(39,20,70,0.12)] transition-all duration-300 group cursor-pointer w-full"
    >
      {/* 1. Large Treatment Image */}
      <div className="w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-xl overflow-hidden bg-[#F5EFE6] mb-5 border border-[#EADBCE]/60">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow justify-between text-center space-y-4">
        <div>
          {/* 2. Treatment/Service Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#271446] leading-snug mb-2">
            {service.name}
          </h3>

          {/* 3. Short Description */}
          <p className="font-sans text-xs sm:text-sm text-[#271446]/80 font-normal leading-relaxed line-clamp-3 px-1">
            {service.description}
          </p>
        </div>

        {/* 4. Gold Outlined "Explore More" Button */}
        <div className="pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleExploreClick();
            }}
            className="w-full bg-white hover:bg-[#FAF6ED] text-[#271446] border-2 border-[#C9A35D] text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};
