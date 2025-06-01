
interface ExperienceAnimationProps {
  isOpen: boolean;
}

const ExperienceAnimation = ({ isOpen }: ExperienceAnimationProps) => {
  return (
    <div className="w-16 h-16 relative overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div 
          className={`w-full h-full rounded-full border-2 transition-all duration-1000 ${
            isOpen ? 'bg-brand-green border-brand-green' : 'bg-amber-500 border-amber-500'
          }`}
        >
          <div className="flex items-center justify-center h-full">
            <div className="flex space-x-1 mb-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          <div 
            className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
              isOpen ? 'w-6 h-3' : 'w-4 h-0.5'
            }`}
          >
            <div 
              className={`w-full border-b-2 border-white transition-all duration-1000 ${
                isOpen ? 'rounded-b-full' : 'rounded-none'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAnimation;
