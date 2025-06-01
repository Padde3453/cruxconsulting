import { useEffect, useState } from 'react';

interface ExperienceAnimationProps {
  isOpen: boolean;
}

const ExperienceAnimation = ({ isOpen }: ExperienceAnimationProps) => {
  const [isHappy, setIsHappy] = useState(false);

  useEffect(() => {
    const loop = () => {
      // Start with neutral state (2 seconds)
      setIsHappy(false);
      
      setTimeout(() => {
        // Transition to happy state (1 second transition time)
        setIsHappy(true);
        
        setTimeout(() => {
          // Stay happy for 5 seconds, then restart loop
          loop();
        }, 5000);
      }, 2000);
    };

    // Start the loop
    loop();
  }, []);

  return (
    <div className="w-20 h-20 relative overflow-hidden rounded-lg bg-gray-900/90 flex items-center justify-center border border-gray-700/30 backdrop-blur-sm">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="experience-grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#374151" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#experience-grid)" />
        </svg>
      </div>

      {/* Smiley face container */}
      <div className="relative w-14 h-14 z-10">
        <svg viewBox="0 0 56 56" className="w-full h-full">
          {/* Face circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            strokeWidth="3"
            className="transition-all duration-1000 ease-in-out"
            stroke={isHappy ? "#10b981" : "#f59e0b"}
            style={{
              filter: isHappy 
                ? "drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))" 
                : "drop-shadow(0 0 6px rgba(245, 158, 11, 0.4))"
            }}
          />
          
          {/* Left eye */}
          <circle
            cx="21"
            cy="21"
            r="2.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isHappy ? "#10b981" : "#f59e0b"}
            style={{
              filter: isHappy 
                ? "drop-shadow(0 0 3px rgba(16, 185, 129, 0.5))" 
                : "drop-shadow(0 0 3px rgba(245, 158, 11, 0.5))"
            }}
          />
          
          {/* Right eye */}
          <circle
            cx="35"
            cy="21"
            r="2.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isHappy ? "#10b981" : "#f59e0b"}
            style={{
              filter: isHappy 
                ? "drop-shadow(0 0 3px rgba(16, 185, 129, 0.5))" 
                : "drop-shadow(0 0 3px rgba(245, 158, 11, 0.5))"
            }}
          />
          
          {/* Mouth - transitions from neutral line to smile */}
          <path
            d={isHappy 
              ? "M 18 33 Q 28 42 38 33" // Smile curve
              : "M 21 35 L 35 35"       // Neutral line
            }
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out"
            stroke={isHappy ? "#10b981" : "#f59e0b"}
            style={{
              filter: isHappy 
                ? "drop-shadow(0 0 3px rgba(16, 185, 129, 0.5))" 
                : "drop-shadow(0 0 3px rgba(245, 158, 11, 0.5))"
            }}
          />
          
          {/* Happiness indicator when happy */}
          {isHappy && (
            <g className="opacity-80 animate-fade-in">
              <text
                x="38"
                y="14"
                fontSize="5"
                fill="#10b981"
                className="text-[5px] font-medium"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(16, 185, 129, 0.4))"
                }}
              >
                😊
              </text>
            </g>
          )}
          
          {/* Gentle pulse effect when happy */}
          {isHappy && (
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              strokeWidth="1.5"
              stroke="#10b981"
              opacity="0.3"
              style={{
                animation: "gentle-pulse 2s infinite ease-in-out"
              }}
            />
          )}
        </svg>
      </div>

      <style>{`
        @keyframes gentle-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ExperienceAnimation;
