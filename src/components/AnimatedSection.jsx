import React from 'react';

const AnimatedSection = ({ children, className = '' }) => {
  return (
    <div className={`animate-fadeIn ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
