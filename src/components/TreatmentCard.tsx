import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Treatment } from '../data/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onSelect }) => {
  return (
    <div className="bg-[#341b5c] rounded-xl border border-[#F8DB66]/30 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group cursor-pointer" onClick={() => onSelect(treatment)}>
      {/* Image */}
      <div className="h-32 sm:h-36 w-full overflow-hidden relative bg-[#271446]">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-grow">
        <h4 className="font-serif text-[13px] sm:text-sm font-semibold text-[#F8DB66] leading-tight mb-0.5 group-hover:text-[#F8DB66] transition-colors">
          {treatment.title}
        </h4>
        <p className="text-[11px] font-bold text-[#F8DB66] mb-1.5">{treatment.price}</p>
        <p className="text-[10px] sm:text-[11px] text-[#FFFFFF]/90 leading-relaxed line-clamp-2 flex-grow">
          {treatment.description}
        </p>

        <button
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F8DB66] hover:text-[#e0c453] transition-colors mt-2.5 group/link"
        >
          <span>Know More</span>
          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform text-[#F8DB66]" />
        </button>
      </div>
    </div>
  );
};
