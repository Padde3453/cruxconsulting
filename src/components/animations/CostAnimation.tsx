
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
            cx="18"
            cy="18"
            rx="3"
            ry="4"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
            transform="rotate(-20 18 18)"
          />
          <ellipse
            cx="38"
            cy="18"
            rx="3"
            ry="4"
            className="transition-all duration-1000 ease-in-out"
            fill={isSaving ? "#059669" : "#4b5563"}
            transform="rotate(20 38 18)"
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
          
          {/* 9 Falling coins when saving */}
          {isSaving && (
            <g>
              {/* Coin 1 */}
              <circle
                cx="20"
                cy="-2"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-1"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="20"
                y="-0.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-1"
              >
                $
              </text>
              
              {/* Coin 2 */}
              <circle
                cx="24"
                cy="-4"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-2"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="24"
                y="-2.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-2"
              >
                $
              </text>
              
              {/* Coin 3 */}
              <circle
                cx="28"
                cy="-6"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-3"
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
                className="animate-coin-fall-3"
              >
                $
              </text>
              
              {/* Coin 4 */}
              <circle
                cx="32"
                cy="-3"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-4"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="32"
                y="-1.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-4"
              >
                $
              </text>
              
              {/* Coin 5 */}
              <circle
                cx="22"
                cy="-8"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-5"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="22"
                y="-6.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-5"
              >
                $
              </text>
              
              {/* Coin 6 */}
              <circle
                cx="26"
                cy="-10"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-6"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="26"
                y="-8.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-6"
              >
                $
              </text>
              
              {/* Coin 7 */}
              <circle
                cx="30"
                cy="-1"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-7"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="30"
                y="0.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-7"
              >
                $
              </text>
              
              {/* Coin 8 */}
              <circle
                cx="25"
                cy="-12"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-8"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="25"
                y="-10.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-8"
              >
                $
              </text>
              
              {/* Coin 9 */}
              <circle
                cx="29"
                cy="-14"
                r="1.5"
                fill="#fbbf24"
                className="animate-coin-fall-9"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 0.6))"
                }}
              />
              <text
                x="29"
                y="-12.5"
                fontSize="1.2"
                textAnchor="middle"
                fill="#f59e0b"
                className="animate-coin-fall-9"
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
        
        @keyframes coin-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(18px) rotate(180deg);
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
          animation: coin-fall 2s infinite ease-in;
          animation-delay: 0.2s;
        }
        
        .animate-coin-fall-2 {
          animation: coin-fall 2.2s infinite ease-in;
          animation-delay: 0.4s;
        }
        
        .animate-coin-fall-3 {
          animation: coin-fall 2.4s infinite ease-in;
          animation-delay: 0.6s;
        }
        
        .animate-coin-fall-4 {
          animation: coin-fall 2.1s infinite ease-in;
          animation-delay: 0.8s;
        }
        
        .animate-coin-fall-5 {
          animation: coin-fall 2.3s infinite ease-in;
          animation-delay: 1s;
        }
        
        .animate-coin-fall-6 {
          animation: coin-fall 2.5s infinite ease-in;
          animation-delay: 1.2s;
        }
        
        .animate-coin-fall-7 {
          animation: coin-fall 2.1s infinite ease-in;
          animation-delay: 1.4s;
        }
        
        .animate-coin-fall-8 {
          animation: coin-fall 2.3s infinite ease-in;
          animation-delay: 1.6s;
        }
        
        .animate-coin-fall-9 {
          animation: coin-fall 2.2s infinite ease-in;
          animation-delay: 1.8s;
        }
      `}</style>
    </div>
  );
};

export default CostAnimation;
