import React from 'react';

const FeatureLayout = ({ 
  title, 
  subtitle, 
  backgroundImage,
  children,
  badge
}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={title} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-900"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="relative mb-4 inline-block">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{title}</h1>
            {badge && (
              <span className="absolute -top-2 -right-16 bg-red-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                {badge}
              </span>
            )}
          </div>
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </h2>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
};

export default FeatureLayout;
