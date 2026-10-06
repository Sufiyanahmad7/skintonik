import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Treatment } from '../data/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onSelect }) => {
  return (
    <div className="bg-white rounded-xl border border-[#EAD7C5]/70 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 group cursor-pointer" onClick={() => onSelect(treatment)}>
      {/* Image */}
      <div className="h-32 sm:h-36 w-full overflow-hidden relative bg-[#F3EDE2]">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-grow">
        <h4 className="font-serif text-[13px] sm:text-sm font-semibold text-[#2C1B18] leading-tight mb-0.5 group-hover:text-[#4A151B] transition-colors">
          {treatment.title}
        </h4>
        <p className="text-[11px] font-bold text-[#4A151B] mb-1.5">{treatment.price}</p>
        <p className="text-[10px] sm:text-[11px] text-[#66534E] leading-relaxed line-clamp-2 flex-grow">
          {treatment.description}
        </p>

        <button
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4A151B] hover:text-[#3A0D12] transition-colors mt-2.5 group/link"
        >
          <span>Know More</span>
          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
