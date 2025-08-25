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
    // Spacing based on actual time differences: 6, 6, 6, 12, 12 months = 1:1:1:2:2 ratio
    const spacings = ['mb-8', 'mb-8', 'mb-8', 'mb-16', 'mb-16'];
    return spacings[index] || 'mb-8';
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
                
                {/* Content card */}
                <div 
                  onClick={() => handleCardClick(index)}
                  className={`ml-16 bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-lg border transition-all duration-300 cursor-pointer ${
                    expandedIndex === index 
                      ? 'border-brand-blue/50 p-6' 
                      : 'border-gray-600/30 p-4 hover:border-brand-blue/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-semibold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                      {getStatusIcon(item.status)}
                    </div>
                  </div>
                  
                  <h3 className={`font-bold text-white transition-all duration-300 ${
                    expandedIndex === index ? 'text-xl mb-3' : 'text-lg'
                  }`}>
                    {item.title}
                  </h3>
                  
                  {expandedIndex === index && (
                    <div className="overflow-hidden">
                      <p className="text-gray-300 leading-relaxed animate-fade-in">
                        {item.body}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiActTimeline;