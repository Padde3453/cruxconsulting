
interface RevenueAnimationProps {
  isOpen: boolean;
}

const RevenueAnimation = ({ isOpen }: RevenueAnimationProps) => {
  return (
    <div className="w-16 h-16 relative overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center">
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polyline
            points="10,80 30,60 50,70 70,40 90,20"
            fill="none"
            stroke={isOpen ? "#10b981" : "#ef4444"}
            strokeWidth="3"
            className={`transition-all duration-1000 ${isOpen ? 'animate-pulse' : ''}`}
          />
          <circle
            cx="90"
            cy="20"
            r="3"
            fill={isOpen ? "#10b981" : "#ef4444"}
            className={`transition-all duration-500 ${isOpen ? 'animate-bounce' : ''}`}
          />
        </svg>
      </div>
    </div>
  );
};

export default RevenueAnimation;
