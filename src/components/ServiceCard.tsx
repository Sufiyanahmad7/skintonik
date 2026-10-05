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
      className="bg-[#FFFFFF] rounded-2xl border border-[#EAD7C5]/60 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer group p-2.5"
    >
      <div className="h-24 sm:h-28 w-full overflow-hidden rounded-xl relative bg-[#F3EDE2] mb-3">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex items-center justify-between px-1.5 pb-1">
        <span className="font-serif text-sm lg:text-base font-semibold text-[#2C1B18] leading-tight group-hover:text-[#4A151B] transition-colors">
          {service.name}
        </span>
        <div className="w-7 h-7 rounded-full bg-[#F3EDE2] text-[#4A151B] flex items-center justify-center flex-shrink-0 ml-2 group-hover:bg-[#4A151B] group-hover:text-white transition-colors duration-300">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
