import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      onClick={() => onClick(service)}
      className="bg-white rounded-xl border border-[#EAD7C5]/70 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 cursor-pointer group"
    >
      {/* Image */}
      <div className="h-28 sm:h-32 w-full overflow-hidden relative bg-[#F3EDE2]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Label + Arrow */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <span className="font-serif text-[12px] sm:text-[13px] font-semibold text-[#2C1B18] leading-tight group-hover:text-[#4A151B] transition-colors flex-grow">
          {service.name}
        </span>
        <div className="w-6 h-6 rounded-full bg-[#F3EDE2] text-[#4A151B] flex items-center justify-center shrink-0 ml-1.5 group-hover:bg-[#4A151B] group-hover:text-white transition-colors duration-300">
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
