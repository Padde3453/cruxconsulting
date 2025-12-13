
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onBooking: () => void;
}

const HeroSection = ({ onBooking }: HeroSectionProps) => {
  const { t } = useTranslation();
  const rotatingWords = t('hero.rotatingWords', { returnObjects: true }) as string[];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Delay animation start by 1 second after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Animation variants for fly-in from below
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 80, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 60,
        damping: 12,
      },
    },
  };

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

      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
      >
        <div className="mb-8"></div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent block mb-4">
            {t('hero.title')}
          </span>
          <div className="relative h-[1.2em] overflow-hidden inline-block min-w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                }}
                className="block w-full bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {t('hero.description')}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <Button 
            onClick={onBooking} 
            size="lg" 
            variant="gradient"
            enableMouseGradient
            className="rounded-full px-8 py-4 text-lg flex items-center space-x-2"
          >
            <span>{t('hero.cta')}</span>
            <Plus size={20} />
          </Button>
          
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {t('hero.responseTime')}
            </div>
            <div className="text-sm text-gray-400">{t('hero.responseTimeLabel')}</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-gradient-to-b from-brand-blue to-brand-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
