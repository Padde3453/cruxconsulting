
interface CostAnimationProps {
  isOpen: boolean;
}

const CostAnimation = ({ isOpen }: CostAnimationProps) => {
  return (
    <div className="w-16 h-16 relative overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="w-full h-8 bg-pink-300 rounded-full relative mt-2">
          <div className="absolute -top-1 left-8 w-2 h-2 bg-pink-300 rounded-full"></div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-2 left-2 w-3 h-1 bg-pink-400 rounded-full"></div>
          <div className="absolute top-1 right-2 w-1 h-1 bg-pink-400 rounded-full"></div>
          {/* Coins animation */}
          {isOpen && (
            <>
              <div className="absolute -top-2 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute -top-1 left-6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute -top-3 left-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostAnimation;
