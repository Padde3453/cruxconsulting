import React from 'react';

const AnimatedGears = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Gear 1 - Left gear (medium size) */}
      <div 
        className="absolute top-8 left-4 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden animate-spin"
        style={{ 
          animationDuration: '4s',
          animationDirection: 'normal'
        }}
      >
        <img 
          src="/lovable-uploads/52471b51-0d8d-487a-bb90-cd8d016ad4c6.png" 
          alt="Left gear" 
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
          style={{
            transform: 'translate(-25%, -12%)',
            clipPath: 'circle(48px at 25% 30%)'
          }}
        />
      </div>

      {/* Gear 2 - Right gear (large size) */}
      <div 
        className="absolute top-4 right-2 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden animate-spin"
        style={{ 
          animationDuration: '6s',
          animationDirection: 'reverse'
        }}
      >
        <img 
          src="/lovable-uploads/52471b51-0d8d-487a-bb90-cd8d016ad4c6.png" 
          alt="Right gear" 
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
          style={{
            transform: 'translate(-60%, -20%)',
            clipPath: 'circle(64px at 75% 35%)'
          }}
        />
      </div>

      {/* Gear 3 - Bottom gear (small size) */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden animate-spin"
        style={{ 
          animationDuration: '3s',
          animationDirection: 'normal'
        }}
      >
        <img 
          src="/lovable-uploads/52471b51-0d8d-487a-bb90-cd8d016ad4c6.png" 
          alt="Bottom gear" 
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
          style={{
            transform: 'translate(-50%, -75%)',
            clipPath: 'circle(40px at 50% 75%)'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedGears;