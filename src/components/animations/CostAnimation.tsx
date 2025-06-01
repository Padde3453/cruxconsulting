
import { useEffect, useState } from 'react';

interface CostAnimationProps {
  isOpen: boolean;
}

const CostAnimation = ({ isOpen }: CostAnimationProps) => {
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loop = () => {
      // Start with grey state (2 seconds)
      setIsSaving(false);
      
      setTimeout(() => {
        // Transition to green state (1 second transition time)
        setIsSaving(true);
        
        setTimeout(() => {
          // Stay green for 5 seconds, then restart loop
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
            <pattern id="cost-grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#374151" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cost-grid)" />
        </svg>
      </div>

      {/* Piggy bank container */}
      <div className="relative w-12 h-10 z-10">
        <svg viewBox="0 0 48 40" className="w-full h-full">
          {/* Piggy bank body */}
          <ellipse
            cx="24"
            cy="24"
            rx="16"
            ry="12"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#10b981" : "#6b7280"}
            style={{
              filter: isSaving 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.4))" 
                : "drop-shadow(0 0 4px rgba(107, 114, 128, 0.4))"
            }}
          />
          
          {/* Piggy bank snout */}
          <ellipse
            cx="38"
            cy="24"
            rx="6"
            ry="4"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
            style={{
              filter: isSaving 
                ? "drop-shadow(0 0 2px rgba(5, 150, 105, 0.3))" 
                : "drop-shadow(0 0 2px rgba(75, 85, 99, 0.3))"
            }}
          />
          
          {/* Snout nostril */}
          <ellipse
            cx="40"
            cy="24"
            rx="1.5"
            ry="1"
            fill={isSaving ? "#047857" : "#374151"}
          />
          
          {/* Coin slot */}
          <rect
            x="20"
            y="14"
            width="8"
            height="2"
            rx="1"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#047857" : "#374151"}
          />
          
          {/* Legs */}
          <rect
            x="12"
            y="32"
            width="3"
            height="6"
            rx="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
          />
          <rect
            x="18"
            y="32"
            width="3"
            height="6"
            rx="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
          />
          <rect
            x="27"
            y="32"
            width="3"
            height="6"
            rx="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
          />
          <rect
            x="33"
            y="32"
            width="3"
            height="6"
            rx="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
          />
          
          {/* Eye */}
          <circle
            cx="20"
            cy="20"
            r="1.5"
            fill="#1f2937"
          />
          
          {/* Tail */}
          <path
            d="M8,20 Q4,16 6,12 Q8,14 10,18"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out"
            stroke={isSaving ? "#059669" : "#4b5563"}
          />
          
          {/* Falling coins when saving */}
          {isSaving && (
            <g>
              {/* Coin 1 */}
              <circle
                cx="24"
                cy="8"
                r="2"
                fill="#fbbf24"
                className="animate-coin-fall-1"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="24"
                y="10"
                fontSize="2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-1"
              >
                $
              </text>
              
              {/* Coin 2 */}
              <circle
                cx="20"
                cy="4"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-2"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="20"
                y="5.5"
                fontSize="1.5"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-2"
              >
                $
              </text>
              
              {/* Coin 3 */}
              <circle
                cx="28"
                cy="6"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-3"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="28"
                y="7.5"
                fontSize="1.5"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-3"
              >
                $
              </text>
            </g>
          )}
          
          {/* Savings indicator when active */}
          {isSaving && (
            <g className="opacity-80 animate-fade-in">
              <text
                x="32"
                y="12"
                fontSize="4"
                fill="#10b981"
                className="text-[4px] font-medium"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(16, 185, 129, 0.4))"
                }}
              >
                💰
              </text>
            </g>
          )}
          
          {/* Gentle pulse effect when saving */}
          {isSaving && (
            <ellipse
              cx="24"
              cy="24"
              rx="18"
              ry="14"
              fill="none"
              strokeWidth="1"
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
        
        @keyframes coin-fall-1 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(20px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes coin-fall-2 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(22px) rotate(-360deg);
            opacity: 0;
          }
        }
        
        @keyframes coin-fall-3 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(24px) rotate(360deg);
            opacity: 0;
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
        
        .animate-coin-fall-1 {
          animation: coin-fall-1 2s infinite ease-in;
          animation-delay: 0.2s;
        }
        
        .animate-coin-fall-2 {
          animation: coin-fall-2 2.5s infinite ease-in;
          animation-delay: 0.7s;
        }
        
        .animate-coin-fall-3 {
          animation: coin-fall-3 2.2s infinite ease-in;
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
};

export default CostAnimation;
