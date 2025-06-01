
interface RevenueAnimationProps {
  isOpen: boolean;
}

const RevenueAnimation = ({ isOpen }: RevenueAnimationProps) => {
  return (
    <div className="w-16 h-16 relative overflow-hidden rounded-lg bg-gray-900/80 flex items-center justify-center border border-gray-700/50">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#374151" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Chart container */}
      <div className="relative w-14 h-10 z-10">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          {/* Animated chart line */}
          <polyline
            points="10,45 25,40 40,50 55,45 70,25 85,15"
            fill="none"
            strokeWidth="2"
            className="transition-all duration-1000 ease-in-out"
            stroke={isOpen ? "#10b981" : "#ef4444"}
            style={{
              filter: isOpen ? 
                "drop-shadow(0 0 4px #10b98150)" : 
                "drop-shadow(0 0 4px #ef444450)",
              animation: isOpen ? 
                "revenueUp 7s infinite" : 
                "revenueDown 7s infinite"
            }}
          />
          
          {/* Animated data points */}
          <circle
            cx="10" cy="45" r="2"
            className="transition-all duration-1000"
            fill={isOpen ? "#10b981" : "#ef4444"}
            style={{
              filter: isOpen ? 
                "drop-shadow(0 0 6px #10b98180)" : 
                "drop-shadow(0 0 6px #ef444480)",
              animation: isOpen ? 
                "pointPulse 2s infinite ease-in-out" :
                "pointPulse 2s infinite ease-in-out 0.5s"
            }}
          />
          <circle
            cx="85" cy="15" r="2"
            className="transition-all duration-1000"
            fill={isOpen ? "#10b981" : "#ef4444"}
            style={{
              filter: isOpen ? 
                "drop-shadow(0 0 6px #10b98180)" : 
                "drop-shadow(0 0 6px #ef444480)",
              animation: isOpen ? 
                "pointPulse 2s infinite ease-in-out 0.3s" :
                "pointPulse 2s infinite ease-in-out 0.8s"
            }}
          />
          
          {/* Growth indicator arrow (only when positive) */}
          {isOpen && (
            <g className="opacity-80">
              <path
                d="M75,20 L80,15 L85,20 M80,15 L80,25"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  animation: "arrowGlow 2s infinite ease-in-out",
                  filter: "drop-shadow(0 0 3px #10b98150)"
                }}
              />
            </g>
          )}
        </svg>
      </div>

      <style jsx>{`
        @keyframes revenueDown {
          0%, 28% {
            transform: translateY(8px) scaleY(0.8);
          }
          43%, 71% {
            transform: translateY(8px) scaleY(0.8);
          }
          85%, 100% {
            transform: translateY(-4px) scaleY(1.1);
          }
        }
        
        @keyframes revenueUp {
          0%, 28% {
            transform: translateY(-4px) scaleY(1.1);
          }
          43%, 71% {
            transform: translateY(-4px) scaleY(1.1);
          }
          85%, 100% {
            transform: translateY(-4px) scaleY(1.1);
          }
        }
        
        @keyframes pointPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.4);
            opacity: 1;
          }
        }
        
        @keyframes arrowGlow {
          0%, 100% {
            opacity: 0.6;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-1px);
          }
        }
      `}</style>
    </div>
  );
};

export default RevenueAnimation;
