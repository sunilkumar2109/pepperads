import React from 'react';

const GlassmorphicCard = ({ 
  icon, 
  title, 
  description,
  number
}) => {
  return (
    <div className="relative group">
      {number && (
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold text-white z-10">
          {number}
        </div>
      )}
      <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-8 border border-gray-800 
        hover:border-red-900 transition-all duration-300 h-full">
        <div className="mb-6 flex items-center gap-3">
          <div className="text-red-500 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default GlassmorphicCard;
