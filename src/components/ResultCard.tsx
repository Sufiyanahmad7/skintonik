import React from 'react';

interface ResultCardProps {
  title: string;
  image: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ title, image }) => {
  return (
    <div className="bg-white rounded-xl border border-[#EAD7C5]/70 overflow-hidden shadow-sm flex-shrink-0 w-full sm:w-[260px] lg:w-[270px] group">
      <div className="relative overflow-hidden bg-[#F3EDE2]">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500"
          style={{ aspectRatio: '3/2' }}
        />
        {/* Before / After Label overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-3 py-1.5 bg-black/50 text-[9px] font-bold text-white uppercase tracking-widest">
          <span>Before</span>
          <span>After</span>
        </div>
      </div>
      <div className="py-2.5 px-3 text-center bg-white">
        <h4 className="font-serif text-[12px] sm:text-[13px] font-semibold text-[#2C1B18] group-hover:text-[#4A151B] transition-colors leading-snug">
          {title}
        </h4>
      </div>
    </div>
  );
};
