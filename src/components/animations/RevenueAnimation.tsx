
import { useEffect, useState } from 'react';

interface RevenueAnimationProps {
  isOpen: boolean;
}

const RevenueAnimation = ({ isOpen }: RevenueAnimationProps) => {
  const [isPositive, setIsPositive] = useState(false);

  useEffect(() => {
    const loop = () => {
      // Start with negative state (2 seconds)
      setIsPositive(false);
      
      setTimeout(() => {
        // Transition to positive (1 second transition time)
        setIsPositive(true);
        
        setTimeout(() => {
          // Stay positive for 5 seconds, then restart loop
          loop();
        }, 5000);
      }, 2000);
    };

    // Start the loop
    loop();
  }, []);

  return (
    <div className="w-16 h-16 relative overflow-hidden rounded-lg bg-gray-900/90 flex items-center justify-center border border-gray-700/30 backdrop-blur-sm">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="revenue-grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#374151" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#revenue-grid)" />
        </svg>
      </div>

      {/* Main chart container */}
      <div className="relative w-12 h-8 z-10">
        <svg viewBox="0 0 48 32" className="w-full h-full">
          {/* Chart line path */}
          <path
            d={isPositive 
              ? "M4,24 Q12,20 20,16 Q28,12 32,8 L44,4" 
              : "M4,8 Q12,12 20,16 Q28,20 32,24 L44,28"
            }
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-1000 ease-in-out"
            stroke={isPositive ? "#10b981" : "#ef4444"}
            style={{
              filter: isPositive 
                ? "drop-shadow(0 0 3px rgba(16, 185, 129, 0.4))" 
                : "drop-shadow(0 0 3px rgba(239, 68, 68, 0.4))"
            }}
          />
          
          {/* Data points */}
          <circle
            cx="4"
            cy={isPositive ? "24" : "8"}
            r="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isPositive ? "#10b981" : "#ef4444"}
            style={{
              filter: isPositive 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.6))" 
                : "drop-shadow(0 0 4px rgba(239, 68, 68, 0.6))"
            }}
          />
          
          <circle
            cx="20"
            cy="16"
            r="1.2"
            className="transition-all duration-1000 ease-in-out"
            fill={isPositive ? "#10b981" : "#ef4444"}
            style={{
              filter: isPositive 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.5))" 
                : "drop-shadow(0 0 4px rgba(239, 68, 68, 0.5))"
            }}
          />
          
          <circle
            cx="44"
            cy={isPositive ? "4" : "28"}
            r="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isPositive ? "#10b981" : "#ef4444"}
            style={{
              filter: isPositive 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.6))" 
                : "drop-shadow(0 0 4px rgba(239, 68, 68, 0.6))",
              animation: isPositive ? "gentle-pulse 2s infinite ease-in-out" : "none"
            }}
          />
          
          {/* Growth indicator when positive */}
          {isPositive && (
            <g className="opacity-80 animate-fade-in">
              <text
                x="40"
                y="2"
                fontSize="4"
                fill="#10b981"
                className="text-[4px] font-medium"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(16, 185, 129, 0.4))"
                }}
              >
                +21%
              </text>
              <path
                d="M42,6 L44,4 L46,6"
                fill="none"
                stroke="#10b981"
                strokeWidth="0.8"
                strokeLinecap="round"
                style={{
                  animation: "arrow-glow 1.5s infinite ease-in-out"
                }}
              />
            </g>
          )}
        </svg>
      </div>

      <style>{`
        @keyframes gentle-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        @keyframes arrow-glow {
          0%, 100% {
            opacity: 0.7;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-0.5px);
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

export default RevenueAnimation;
