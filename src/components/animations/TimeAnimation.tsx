import { useEffect, useState } from 'react';

interface TimeAnimationProps {
  isOpen: boolean;
}

const TimeAnimation = ({ isOpen }: TimeAnimationProps) => {
  const [isSlowTime, setIsSlowTime] = useState(false);

  useEffect(() => {
    const loop = () => {
      // Start with fast time state (2 seconds)
      setIsSlowTime(false);
      
      setTimeout(() => {
        // Transition to slow time (1 second transition time)
        setIsSlowTime(true);
        
        setTimeout(() => {
          // Stay slow for 5 seconds, then restart loop
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
            <pattern id="time-grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#374151" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#time-grid)" />
        </svg>
      </div>

      {/* Watch container */}
      <div className="relative w-14 h-14 z-10">
        <svg viewBox="0 0 56 56" className="w-full h-full">
          {/* Watch face */}
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            strokeWidth="2.5"
            className="transition-all duration-1000 ease-in-out"
            stroke={isSlowTime ? "#10b981" : "#ef4444"}
            style={{
              filter: isSlowTime 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.4))" 
                : "drop-shadow(0 0 4px rgba(239, 68, 68, 0.4))"
            }}
          />
          
          {/* Hour markers */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="28"
              y1="6"
              x2="28"
              y2="12"
              strokeWidth="2"
              className="transition-all duration-1000 ease-in-out"
              stroke={isSlowTime ? "#10b981" : "#ef4444"}
              transform={`rotate(${i * 90} 28 28)`}
              style={{
                filter: isSlowTime 
                  ? "drop-shadow(0 0 2px rgba(16, 185, 129, 0.3))" 
                  : "drop-shadow(0 0 2px rgba(239, 68, 68, 0.3))"
              }}
            />
          ))}
          
          {/* Hour hand - moves slower, logical rotation */}
          <line
            x1="28"
            y1="28"
            x2="28"
            y2="16"
            strokeWidth="3"
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out origin-[28px_28px]"
            stroke={isSlowTime ? "#10b981" : "#ef4444"}
            style={{
              filter: isSlowTime 
                ? "drop-shadow(0 0 3px rgba(16, 185, 129, 0.5))" 
                : "drop-shadow(0 0 3px rgba(239, 68, 68, 0.5))",
              animation: isSlowTime 
                ? "hour-hand-slow 12s linear infinite" 
                : "hour-hand-fast 2s linear infinite",
              transformOrigin: "28px 28px"
            }}
          />
          
          {/* Minute hand - moves faster, logical rotation */}
          <line
            x1="28"
            y1="28"
            x2="28"
            y2="8"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out origin-[28px_28px]"
            stroke={isSlowTime ? "#10b981" : "#ef4444"}
            style={{
              filter: isSlowTime 
                ? "drop-shadow(0 0 3px rgba(16, 185, 129, 0.5))" 
                : "drop-shadow(0 0 3px rgba(239, 68, 68, 0.5))",
              animation: isSlowTime 
                ? "minute-hand-slow 4s linear infinite" 
                : "minute-hand-fast 0.5s linear infinite",
              transformOrigin: "28px 28px"
            }}
          />
          
          {/* Center dot */}
          <circle
            cx="28"
            cy="28"
            r="2"
            className="transition-all duration-1000 ease-in-out"
            fill={isSlowTime ? "#10b981" : "#ef4444"}
            style={{
              filter: isSlowTime 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.6))" 
                : "drop-shadow(0 0 4px rgba(239, 68, 68, 0.6))",
              animation: isSlowTime ? "gentle-pulse 2s infinite ease-in-out" : "none"
            }}
          />
          
          {/* Time saved indicator when slow */}
          {isSlowTime && (
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
                +3h
              </text>
            </g>
          )}
        </svg>
      </div>

      <style>{`
        @keyframes hour-hand-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes hour-hand-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes minute-hand-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes minute-hand-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
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

export default TimeAnimation;
