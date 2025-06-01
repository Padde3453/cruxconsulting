
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
      <div className="relative w-14 h-12 z-10">
        <svg viewBox="0 0 56 48" className="w-full h-full">
          {/* Piggy bank body */}
          <ellipse
            cx="28"
            cy="28"
            rx="18"
            ry="13"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#10b981" : "#6b7280"}
            style={{
              filter: isSaving 
                ? "drop-shadow(0 0 4px rgba(16, 185, 129, 0.4))" 
                : "drop-shadow(0 0 4px rgba(107, 114, 128, 0.4))"
            }}
          />
          
          {/* Piggy bank ears */}
          <ellipse
            cx="20"
            cy="16"
            rx="3"
            ry="4"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
            transform="rotate(-15 20 16)"
          />
          <ellipse
            cx="36"
            cy="16"
            rx="3"
            ry="4"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
            transform="rotate(15 36 16)"
          />
          
          {/* Piggy bank snout */}
          <ellipse
            cx="44"
            cy="28"
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
          
          {/* Snout nostrils */}
          <ellipse
            cx="46"
            cy="26"
            rx="0.8"
            ry="0.6"
            fill={isSaving ? "#047857" : "#374151"}
          />
          <ellipse
            cx="46"
            cy="30"
            rx="0.8"
            ry="0.6"
            fill={isSaving ? "#047857" : "#374151"}
          />
          
          {/* Coin slot */}
          <rect
            x="24"
            y="16"
            width="8"
            height="2"
            rx="1"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#047857" : "#374151"}
          />
          
          {/* Legs */}
          <rect
            x="14"
            y="38"
            width="3"
            height="6"
            rx="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
          />
          <rect
            x="20"
            y="38"
            width="3"
            height="6"
            rx="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
          />
          <rect
            x="33"
            y="38"
            width="3"
            height="6"
            rx="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
          />
          <rect
            x="39"
            y="38"
            width="3"
            height="6"
            rx="1.5"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
          />
          
          {/* Eye */}
          <circle
            cx="24"
            cy="24"
            r="1.5"
            fill="#1f2937"
          />
          
          {/* Tail */}
          <path
            d="M10,24 Q6,20 8,16 Q10,18 12,22"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out"
            stroke={isSaving ? "#059669" : "#4b5563"}
          />
          
          {/* Falling coins when saving - positioned to fall into the coin slot */}
          {isSaving && (
            <g>
              {/* Coin 1 - falls into slot from left */}
              <circle
                cx="22"
                cy="-4"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-slot-1"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="22"
                y="-2.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-slot-1"
              >
                $
              </text>
              
              {/* Coin 2 - falls into slot from center */}
              <circle
                cx="28"
                cy="-6"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-slot-2"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="28"
                y="-4.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-slot-2"
              >
                $
              </text>
              
              {/* Coin 3 - falls into slot from right */}
              <circle
                cx="30"
                cy="-2"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-slot-3"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="30"
                y="-0.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-slot-3"
              >
                $
              </text>
            </g>
          )}
          
          {/* Savings indicator when active */}
          {isSaving && (
            <g className="opacity-80 animate-fade-in">
              <text
                x="36"
                y="14"
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
              cx="28"
              cy="28"
              rx="20"
              ry="15"
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
        
        @keyframes coin-fall-slot-1 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(22px) rotate(180deg);
            opacity: 0;
          }
        }
        
        @keyframes coin-fall-slot-2 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(24px) rotate(-180deg);
            opacity: 0;
          }
        }
        
        @keyframes coin-fall-slot-3 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          65% {
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(20px) rotate(180deg);
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
        
        .animate-coin-fall-slot-1 {
          animation: coin-fall-slot-1 3s infinite ease-in;
          animation-delay: 0.5s;
        }
        
        .animate-coin-fall-slot-2 {
          animation: coin-fall-slot-2 3.5s infinite ease-in;
          animation-delay: 1s;
        }
        
        .animate-coin-fall-slot-3 {
          animation: coin-fall-slot-3 3.2s infinite ease-in;
          animation-delay: 1.8s;
        }
      `}</style>
    </div>
  );
};

export default CostAnimation;
