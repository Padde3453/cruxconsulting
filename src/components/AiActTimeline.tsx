import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const AiActTimeline = () => {
  const { t } = useTranslation();
  const timelineAnimation = useScrollAnimation();
  const [expandedIndex, setExpandedIndex] = useState<number>(1); // Start with second item (current status)

  const timelineItems = t('aiCompliance.timeline.items', { returnObjects: true }) as Array<{
    date: string;
    title: string;
    body: string;
    status: 'completed' | 'current' | 'upcoming';
  }>;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'current':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'upcoming':
        return <AlertTriangle className="w-4 h-4 text-blue-500" />;
      default:
        return <Calendar className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSpacingClass = (index: number) => {
    // Calculate spacing based on actual time differences between milestones
    // Timeline: Feb 2024 -> Aug 2024 (6mo) -> Feb 2025 (6mo) -> Aug 2025 (6mo) -> Aug 2026 (12mo) -> Aug 2027 (12mo)
    // Time differences in months: [6, 6, 6, 12, 12]
    // Convert to relative spacing units (base unit = 6 months)
    const timeGaps = [6, 6, 6, 12, 12]; // months between each milestone
    const baseSpacing = 8; // Base Tailwind spacing unit (32px)
    
    if (index >= timeGaps.length) return 'mb-32';
    
    // Calculate proportional spacing: (timeGap / 6) * baseSpacing * 4 for better visual separation
    const multiplier = (timeGaps[index] / 6) * baseSpacing;
    const spacingValue = multiplier * 4; // Increase overall spacing for better visibility
    
    // Map to closest Tailwind spacing classes
    if (spacingValue <= 32) return 'mb-32';
    else if (spacingValue <= 48) return 'mb-48';
    else if (spacingValue <= 64) return 'mb-64';
    else return 'mb-80';
  };

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
            {t('aiCompliance.timeline.title')}
          </h2>
        </div>

        <div 
          ref={timelineAnimation.elementRef}
          className={`relative transition-all duration-1000 ${
            timelineAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-green to-gray-600"></div>

          <div className="space-y-0">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative ${getSpacingClass(index)} ${
                  timelineAnimation.isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ 
                  transitionDelay: timelineAnimation.isVisible ? `${index * 200}ms` : '0ms' 
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-brand-blue to-brand-green rounded-full border-4 border-gray-900 z-10"></div>
                
                {/* Collapsed state - only date visible */}
                {expandedIndex !== index && (
                  <div 
                    onClick={() => handleCardClick(index)}
                    className="ml-16 flex items-center space-x-3 cursor-pointer hover:text-brand-blue transition-colors duration-200"
                  >
                    <span className="text-sm font-semibold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.date}
                    </span>
                    <span className="text-lg font-bold text-white">
                      {item.title}
                    </span>
                    {getStatusIcon(item.status)}
                  </div>
                )}
                
                {/* Expanded content card - only for selected item */}
                {expandedIndex === index && (
                  <div className="ml-16 relative">
                    {/* Triangle pointer - positioned higher up */}
                    <div className="absolute -left-6 top-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-gray-700/80 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
                    
                    {/* Content box with date and title inside */}
                    <div 
                      onClick={() => handleCardClick(index)}
                      className="bg-gradient-to-r from-gray-800/80 to-gray-700/60 backdrop-blur-sm rounded-lg border border-brand-blue/30 p-6 animate-fade-in cursor-pointer"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-sm font-semibold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full whitespace-nowrap">
                          {item.date}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        {getStatusIcon(item.status)}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiActTimeline;