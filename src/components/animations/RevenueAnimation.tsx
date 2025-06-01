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
    <div className="w-20 h-20 relative overflow-hidden rounded-lg bg-gray-900/90 flex items-center justify-center border border-gray-700/30 backdrop-blur-sm">
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
      <div className="relative w-14 h-10 z-10">
        <svg viewBox="0 0 56 40" className="w-full h-full">
          {/* Chart line path */}
          <path
            d={isPositive 
              ? "M4,30 Q14,24 24,20 Q34,16 40,10 L52,5" 
              : "M4,10 Q14,16 24,20 Q34,24 40,30 L52,35"
            }
            fill="none"
            strokeWidth="2"
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
            cy={isPositive ? "30" : "10"}
            r="2"
            className="transition-all duration-1000 ease-in-out"
            fill={isPositive ? "#10b981" : "#ef4444"}
            style={{
              filter: isPositive 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.6))" 
                : "drop-shadow(0 0 4px rgba(239, 68, 68, 0.6))"
            }}
          />
          
          <circle
            cx="24"
            cy="20"
            r="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isPositive ? "#10b981" : "#ef4444"}
            style={{
              filter: isPositive 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.5))" 
                : "drop-shadow(0 0 4px rgba(239, 68, 68, 0.5))"
            }}
          />
          
          <circle
            cx="52"
            cy={isPositive ? "5" : "35"}
            r="2"
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
                x="48"
                y="3"
                fontSize="5"
                fill="#10b981"
                className="text-[5px] font-medium"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(16, 185, 129, 0.4))"
                }}
              >
                +21%
              </text>
              <path
                d="M50,7 L52,5 L54,7"
                fill="none"
                stroke="#10b981"
                strokeWidth="1"
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
