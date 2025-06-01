
import { useEffect, useState } from 'react';

interface CostAnimationProps {
  isOpen: boolean;
}

const CostAnimation = ({ isOpen }: CostAnimationProps) => {
  const [animationPhase, setAnimationPhase] = useState<'red' | 'turning-gold' | 'stacking'>('red');

  useEffect(() => {
    const loop = () => {
      // Phase 1: Red coins (2 seconds)
      setAnimationPhase('red');
      
      setTimeout(() => {
        // Phase 2: Turn gold (1 second)
        setAnimationPhase('turning-gold');
        
        setTimeout(() => {
          // Phase 3: Gold stacking (5 seconds)
          setAnimationPhase('stacking');
          
          setTimeout(() => {
            // Loop restarts after total 8 seconds
            loop();
          }, 5000);
        }, 1000);
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

      {/* Animation container */}
      <div className="relative w-14 h-14 z-10">
        <svg viewBox="0 0 56 56" className="w-full h-full">
          {/* Base 3 coins - start red, turn gold */}
          <g>
            {/* Left coin */}
            <circle
              cx="18"
              cy="46"
              r="7"
              fill={animationPhase === 'red' ? '#dc2626' : '#fbbf24'}
              stroke={animationPhase === 'red' ? '#991b1b' : '#f59e0b'}
              strokeWidth="1"
              className={animationPhase === 'turning-gold' ? 'animate-color-transition' : ''}
            />
            <text
              x="18"
              y="50"
              fontSize="5"
              textAnchor="middle"
              fill={animationPhase === 'red' ? '#7f1d1d' : '#92400e'}
              fontWeight="bold"
              className={animationPhase === 'turning-gold' ? 'animate-color-transition' : ''}
            >
              €
            </text>
            
            {/* Center coin */}
            <circle
              cx="28"
              cy="46"
              r="7"
              fill={animationPhase === 'red' ? '#dc2626' : '#fbbf24'}
              stroke={animationPhase === 'red' ? '#991b1b' : '#f59e0b'}
              strokeWidth="1"
              className={animationPhase === 'turning-gold' ? 'animate-color-transition' : ''}
            />
            <text
              x="28"
              y="50"
              fontSize="5"
              textAnchor="middle"
              fill={animationPhase === 'red' ? '#7f1d1d' : '#92400e'}
              fontWeight="bold"
              className={animationPhase === 'turning-gold' ? 'animate-color-transition' : ''}
            >
              €
            </text>
            
            {/* Right coin */}
            <circle
              cx="38"
              cy="46"
              r="7"
              fill={animationPhase === 'red' ? '#dc2626' : '#fbbf24'}
              stroke={animationPhase === 'red' ? '#991b1b' : '#f59e0b'}
              strokeWidth="1"
              className={animationPhase === 'turning-gold' ? 'animate-color-transition' : ''}
            />
            <text
              x="38"
              y="50"
              fontSize="5"
              textAnchor="middle"
              fill={animationPhase === 'red' ? '#7f1d1d' : '#92400e'}
              fontWeight="bold"
              className={animationPhase === 'turning-gold' ? 'animate-color-transition' : ''}
            >
              €
            </text>
          </g>

          {/* Stacked coins - only show during stacking phase */}
          {(animationPhase === 'stacking') && (
            <g>
              {/* Left column stacked coins */}
              <circle cx="18" cy="38" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-1" />
              <text x="18" y="42" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-1">€</text>
              
              <circle cx="18" cy="30" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-2" />
              <text x="18" y="34" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-2">€</text>
              
              <circle cx="18" cy="22" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-3" />
              <text x="18" y="26" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-3">€</text>

              {/* Center column stacked coins */}
              <circle cx="28" cy="38" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-4" />
              <text x="28" y="42" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-4">€</text>
              
              <circle cx="28" cy="30" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-5" />
              <text x="28" y="34" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-5">€</text>
              
              <circle cx="28" cy="22" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-6" />
              <text x="28" y="26" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-6">€</text>
              
              <circle cx="28" cy="14" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-7" />
              <text x="28" y="18" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-7">€</text>

              {/* Right column stacked coins */}
              <circle cx="38" cy="38" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-8" />
              <text x="38" y="42" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-8">€</text>
              
              <circle cx="38" cy="30" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-9" />
              <text x="38" y="34" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-9">€</text>
              
              <circle cx="38" cy="22" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" className="animate-stack-10" />
              <text x="38" y="26" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold" className="animate-stack-10">€</text>

              {/* Falling coins */}
              <g className="animate-coin-fall-1">
                <circle cx="18" cy="-7" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="18" y="-3" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-2">
                <circle cx="28" cy="-7" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="28" y="-3" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-3">
                <circle cx="38" cy="-7" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="38" y="-3" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-4">
                <circle cx="18" cy="-7" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="18" y="-3" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-5">
                <circle cx="28" cy="-7" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="28" y="-3" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-6">
                <circle cx="38" cy="-7" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="38" y="-3" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
              
              <g className="animate-coin-fall-7">
                <circle cx="28" cy="-7" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <text x="28" y="-3" fontSize="5" textAnchor="middle" fill="#92400e" fontWeight="bold">€</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      <style>{`
        @keyframes color-transition {
          0% {
            fill: #dc2626;
            stroke: #991b1b;
          }
          100% {
            fill: #fbbf24;
            stroke: #f59e0b;
          }
        }
        
        @keyframes coin-fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(53px);
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
        
        .animate-color-transition {
          animation: color-transition 1s ease-out;
        }
        
        .animate-stack-1 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }
        
        .animate-stack-2 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 0.8s;
          animation-fill-mode: both;
        }
        
        .animate-stack-3 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 1.3s;
          animation-fill-mode: both;
        }
        
        .animate-stack-4 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }
        
        .animate-stack-5 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 1.0s;
          animation-fill-mode: both;
        }
        
        .animate-stack-6 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 1.5s;
          animation-fill-mode: both;
        }
        
        .animate-stack-7 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 2.0s;
          animation-fill-mode: both;
        }
        
        .animate-stack-8 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 0.7s;
          animation-fill-mode: both;
        }
        
        .animate-stack-9 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 1.2s;
          animation-fill-mode: both;
        }
        
        .animate-stack-10 {
          animation: stack-appear 0.3s ease-out;
          animation-delay: 1.7s;
          animation-fill-mode: both;
        }
        
        .animate-coin-fall-1 {
          animation: coin-fall 0.7s ease-in;
          animation-delay: 0.2s;
        }
        
        .animate-coin-fall-2 {
          animation: coin-fall 0.7s ease-in;
          animation-delay: 0.4s;
        }
        
        .animate-coin-fall-3 {
          animation: coin-fall 0.7s ease-in;
          animation-delay: 0.6s;
        }
        
        .animate-coin-fall-4 {
          animation: coin-fall 0.7s ease-in;
          animation-delay: 0.9s;
        }
        
        .animate-coin-fall-5 {
          animation: coin-fall 0.7s ease-in;
          animation-delay: 1.1s;
        }
        
        .animate-coin-fall-6 {
          animation: coin-fall 0.7s ease-in;
          animation-delay: 1.3s;
        }
        
        .animate-coin-fall-7 {
          animation: coin-fall 0.7s ease-in;
          animation-delay: 1.6s;
        }
      `}</style>
    </div>
  );
};

export default CostAnimation;
