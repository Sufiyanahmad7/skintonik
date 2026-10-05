import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Treatment } from '../data/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onSelect }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl border border-[#EAD7C5]/60 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group">
      <div>
        <div className="h-28 sm:h-32 w-full overflow-hidden relative bg-[#F3EDE2]">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-3.5 sm:p-4">
          <h4 className="font-serif text-base font-semibold text-[#2C1B18] leading-tight mb-1 group-hover:text-[#4A151B] transition-colors">
            {treatment.title}
          </h4>
          <p className="text-xs font-bold text-[#4A151B] mb-2">{treatment.price}</p>
          <p className="text-[11px] text-[#66534E] leading-relaxed line-clamp-2">
            {treatment.description}
          </p>
        </div>
      </div>
      
      <div className="p-3.5 sm:p-4 pt-0">
        <button
          onClick={() => onSelect(treatment)}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#4A151B] hover:text-[#3A0D12] transition-colors group/link"
        >
          <span>Know More</span>
          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
