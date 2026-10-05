import React from 'react';

interface ResultCardProps {
  title: string;
  image: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ title, image }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl border border-[#EAD7C5]/60 overflow-hidden shadow-sm flex-shrink-0 w-full sm:w-[280px] lg:w-[290px] group">
      <div className="relative h-36 w-full bg-[#F3EDE2] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Before / After Label overlay */}
        <div className="absolute bottom-1.5 left-2 right-2 flex justify-between px-3 py-1 bg-black/40 backdrop-blur-xs rounded-md text-[10px] font-semibold text-white uppercase tracking-wider">
          <span>Before</span>
          <span>After</span>
        </div>
      </div>
      <div className="p-3 text-center bg-white">
        <h4 className="font-serif text-sm font-semibold text-[#2C1B18] group-hover:text-[#4A151B] transition-colors">
          {title}
        </h4>
      </div>
    </div>
  );
};
