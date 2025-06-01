
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
        // Transition to gold coin stacking state (6 seconds)
        setIsSaving(true);
        
        setTimeout(() => {
          // Loop restarts after 6 seconds of stacking
          loop();
        }, 6000);
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

      {/* Coin stacking container */}
      <div className="relative w-14 h-14 z-10">
        <svg viewBox="0 0 56 56" className="w-full h-full">
          {/* Base red coins (negative state) */}
          {!isSaving && (
            <g>
              {/* Red coin 1 */}
              <circle
                cx="28"
                cy="48"
                r="6"
                fill="#dc2626"
                stroke="#991b1b"
                strokeWidth="1"
                className="animate-fade-in"
              />
              <text
                x="28"
                y="51"
                fontSize="4"
                textAnchor="middle"
                fill="#7f1d1d"
                fontWeight="bold"
              >
                €
              </text>
              
              {/* Red coin 2 */}
              <circle
                cx="18"
                cy="48"
                r="5"
                fill="#dc2626"
                stroke="#991b1b"
                strokeWidth="1"
                className="animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              />
              <text
                x="18"
                y="50.5"
                fontSize="3.5"
                textAnchor="middle"
                fill="#7f1d1d"
                fontWeight="bold"
              >
                €
              </text>
              
              {/* Red coin 3 */}
              <circle
                cx="38"
                cy="48"
                r="5"
                fill="#dc2626"
                stroke="#991b1b"
                strokeWidth="1"
                className="animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              />
              <text
                x="38"
                y="50.5"
                fontSize="3.5"
                textAnchor="middle"
                fill="#7f1d1d"
                fontWeight="bold"
              >
                €
              </text>
            </g>
          )}

          {/* Gold coins stacking when saving */}
          {isSaving && (
            <g>
              {/* Stacked gold coins at bottom */}
              <circle cx="28" cy="48" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
              <text x="28" y="51" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              
              <circle cx="28" cy="42" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-1" />
              <text x="28" y="45" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-1">€</text>
              
              <circle cx="28" cy="36" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-2" />
              <text x="28" y="39" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-2">€</text>
              
              <circle cx="28" cy="30" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-3" />
              <text x="28" y="33" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-3">€</text>
              
              <circle cx="28" cy="24" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-4" />
              <text x="28" y="27" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-4">€</text>
              
              <circle cx="28" cy="18" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-5" />
              <text x="28" y="21" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-5">€</text>

              {/* Falling coins */}
              <g className="animate-coin-fall-1">
                <circle cx="28" cy="-10" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="28" y="-7" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-2">
                <circle cx="28" cy="-10" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="28" y="-7" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-3">
                <circle cx="28" cy="-10" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="28" y="-7" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-4">
                <circle cx="28" cy="-10" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="28" y="-7" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-5">
                <circle cx="28" cy="-10" r="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="28" y="-7" fontSize="4" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes coin-fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(58px);
            opacity: 0;
          }
        }
        
        @keyframes stack-appear {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-stack-1 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 0.8s;
          animation-fill-mode: both;
        }
        
        .animate-stack-2 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 1.6s;
          animation-fill-mode: both;
        }
        
        .animate-stack-3 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 2.4s;
          animation-fill-mode: both;
        }
        
        .animate-stack-4 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 3.2s;
          animation-fill-mode: both;
        }
        
        .animate-stack-5 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 4s;
          animation-fill-mode: both;
        }
        
        .animate-coin-fall-1 {
          animation: coin-fall 0.8s ease-in;
          animation-delay: 0.5s;
        }
        
        .animate-coin-fall-2 {
          animation: coin-fall 0.8s ease-in;
          animation-delay: 1.3s;
        }
        
        .animate-coin-fall-3 {
          animation: coin-fall 0.8s ease-in;
          animation-delay: 2.1s;
        }
        
        .animate-coin-fall-4 {
          animation: coin-fall 0.8s ease-in;
          animation-delay: 2.9s;
        }
        
        .animate-coin-fall-5 {
          animation: coin-fall 0.8s ease-in;
          animation-delay: 3.7s;
        }
      `}</style>
    </div>
  );
};

export default CostAnimation;
