
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onBooking: () => void;
}

const HeroSection = ({ onBooking }: HeroSectionProps) => {
  const { t } = useTranslation();
  const rotatingWords = t('hero.rotatingWords', { returnObjects: true }) as string[];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsTransitioning(false);
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '3s'
        }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8"></div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {t('hero.title')}
          </span>
          <br />
          <div className="relative h-[1.2em] overflow-hidden inline-block min-w-full">
            <span 
              className={`block w-full bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent transition-all duration-500 ${
                isTransitioning ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              {rotatingWords[currentWordIndex]}
            </span>
            <span 
              className={`absolute top-0 left-0 w-full bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent transition-all duration-500 ${
                isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              {rotatingWords[(currentWordIndex + 1) % rotatingWords.length]}
            </span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
          <Button onClick={onBooking} size="lg" className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <span>{t('hero.cta')}</span>
            <Plus size={20} />
          </Button>
          
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {t('hero.responseTime')}
            </div>
            <div className="text-sm text-gray-400">{t('hero.responseTimeLabel')}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-brand-blue to-brand-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
