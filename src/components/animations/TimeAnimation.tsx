
interface TimeAnimationProps {
  isOpen: boolean;
}

const TimeAnimation = ({ isOpen }: TimeAnimationProps) => {
  return (
    <div className="w-16 h-16 relative overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="w-full h-full border-2 border-gray-400 rounded-full relative">
          <div 
            className={`absolute top-1 left-1/2 w-0.5 h-4 bg-gray-400 origin-bottom transition-transform duration-1000 ${
              isOpen ? 'rotate-90' : 'rotate-[270deg] animate-spin'
            }`}
            style={{ transformOrigin: 'bottom center', marginLeft: '-1px' }}
          />
          <div 
            className={`absolute top-2 left-1/2 w-0.5 h-3 bg-gray-600 origin-bottom transition-transform duration-500 ${
              isOpen ? 'rotate-180' : 'rotate-[450deg] animate-spin'
            }`}
            style={{ transformOrigin: 'bottom center', marginLeft: '-1px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeAnimation;
