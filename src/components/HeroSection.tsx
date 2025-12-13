
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import humanHand from '@/assets/human-hand.png';
import robotHand from '@/assets/robot-hand.png';

interface HeroSectionProps {
  onBooking: () => void;
}

const HeroSection = ({ onBooking }: HeroSectionProps) => {
  const { t } = useTranslation();
  const rotatingWords = t('hero.rotatingWords', { returnObjects: true }) as string[];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<'waiting' | 'hands-in' | 'spark' | 'hands-out' | 'text'>('waiting');
  
  // Check synchronously if loading screen was already shown
  const hasSeenLoading = typeof window !== 'undefined' && sessionStorage.getItem('hasSeenLoading') === 'true';

  // Animation sequence controller
  useEffect(() => {
    const initialDelay = hasSeenLoading ? 500 : 7000;
    
    const timers: NodeJS.Timeout[] = [];
    
    // Phase 1: Start hands animation
    timers.push(setTimeout(() => {
      setAnimationPhase('hands-in');
    }, initialDelay));
    
    // Phase 2: Spark appears when hands meet (after 3s of hands moving - slower)
    timers.push(setTimeout(() => {
      setAnimationPhase('spark');
    }, initialDelay + 3000));
    
    // Phase 3: Hands move apart (after spark holds for 1.5s)
    timers.push(setTimeout(() => {
      setAnimationPhase('hands-out');
    }, initialDelay + 4500));
    
    // Phase 4: Text appears (after hands have moved apart - 2.5s)
    timers.push(setTimeout(() => {
      setAnimationPhase('text');
    }, initialDelay + 7000));
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [hasSeenLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Animation variants for text fly-in from below
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

  // Hand positions based on animation phase
  const getHumanHandPosition = () => {
    switch (animationPhase) {
      case 'waiting':
        return { x: '80vw', y: '-80vh' }; // Off screen top-right
      case 'hands-in':
      case 'spark':
        return { x: '15vw', y: '-5vh' }; // Meeting point - fingers just touch
      case 'hands-out':
      case 'text':
        return { x: '50vw', y: '-40vh' }; // Top-right corner, still visible
      default:
        return { x: '80vw', y: '-80vh' };
    }
  };

  const getRobotHandPosition = () => {
    switch (animationPhase) {
      case 'waiting':
        return { x: '-80vw', y: '80vh' }; // Off screen bottom-left
      case 'hands-in':
      case 'spark':
        return { x: '-15vw', y: '5vh' }; // Meeting point - fingers just touch
      case 'hands-out':
      case 'text':
        return { x: '-50vw', y: '40vh' }; // Bottom-left corner, still visible
      default:
        return { x: '-80vw', y: '80vh' };
    }
  };

  const sparkOpacity = () => {
    switch (animationPhase) {
      case 'spark':
        return 1;
      case 'hands-out':
        return 0.6;
      case 'text':
        return 0.15;
      default:
        return 0;
    }
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

      {/* Diagonal Spark Line - Behind everything */}
      <motion.div 
        className="absolute inset-0 z-[5] pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: sparkOpacity() }}
        transition={{ duration: 0.5 }}
      >
        <svg 
          className="absolute w-[200%] h-[200%]" 
          style={{ 
            top: '-50%', 
            left: '-50%',
            transform: 'rotate(-35deg)'
          }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sparkGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="hsl(var(--brand-blue))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(200, 100%, 70%)" stopOpacity="1" />
              <stop offset="80%" stopColor="hsl(var(--brand-blue))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="sparkGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Main spark line */}
          <motion.line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="url(#sparkGradient)"
            strokeWidth="4"
            filter="url(#sparkGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: animationPhase === 'spark' || animationPhase === 'hands-out' || animationPhase === 'text' ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Brighter core line */}
          <motion.line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="hsl(200, 100%, 85%)"
            strokeWidth="2"
            filter="url(#sparkGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: animationPhase === 'spark' || animationPhase === 'hands-out' || animationPhase === 'text' ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </svg>
        {/* Particle effects along the line */}
        {(animationPhase === 'spark' || animationPhase === 'hands-out' || animationPhase === 'text') && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${5 + i * 4.5}%`,
                  top: `${50 + (Math.random() - 0.5) * 20}%`,
                  boxShadow: '0 0 10px 3px rgba(0, 200, 255, 0.8)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.05,
                  repeat: animationPhase === 'text' ? 0 : Infinity,
                  repeatDelay: 1,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Human Hand - Coming from top-right */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-200px',
          marginLeft: '0px',
        }}
        initial={{ x: '80vw', y: '-80vh' }}
        animate={getHumanHandPosition()}
        transition={{
          type: 'spring',
          stiffness: 20,
          damping: 12,
        }}
      >
        <img 
          src={humanHand} 
          alt="Human hand" 
          className="w-[400px] md:w-[550px] lg:w-[700px] h-auto"
          style={{ transform: 'rotate(-20deg)' }}
        />
      </motion.div>

      {/* Robot Hand - Coming from bottom-left */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-100px',
          marginLeft: '-350px',
        }}
        initial={{ x: '-80vw', y: '80vh' }}
        animate={getRobotHandPosition()}
        transition={{
          type: 'spring',
          stiffness: 20,
          damping: 12,
        }}
      >
        <img 
          src={robotHand} 
          alt="Robot hand" 
          className="w-[400px] md:w-[550px] lg:w-[700px] h-auto"
          style={{ transform: 'rotate(15deg)' }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div 
        className="relative z-20 text-center max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={animationPhase === 'text' ? "visible" : "hidden"}
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={animationPhase === 'text' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
