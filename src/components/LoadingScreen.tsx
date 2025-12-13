import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const { i18n } = useTranslation();
  const [phase, setPhase] = useState<'fadeIn' | 'hold' | 'transition' | 'done'>('fadeIn');
  const [displayedText, setDisplayedText] = useState('');
  
  const isGerman = i18n.language.startsWith('de');
  const slogan = isGerman 
    ? "Mit Künstlicher Intelligenz gestalten wir Zeit zu Ihren Gunsten um"
    : "We reshape time in your favour with AI";

  // Typewriter effect
  useEffect(() => {
    if (phase !== 'fadeIn') return;
    
    const charDelay = 3000 / slogan.length;
    let currentIndex = 0;
    
    const typewriterInterval = setInterval(() => {
      currentIndex++;
      setDisplayedText(slogan.slice(0, currentIndex));
      
      if (currentIndex >= slogan.length) {
        clearInterval(typewriterInterval);
      }
    }, charDelay);

    return () => clearInterval(typewriterInterval);
  }, [phase, slogan]);

  // Phase transitions
  useEffect(() => {
    // After 3s (fadeIn + typewriter complete), move to hold phase
    const holdTimer = setTimeout(() => {
      setPhase('hold');
    }, 3000);

    // After 4s (3s fadeIn + 1s hold), start transition
    const transitionTimer = setTimeout(() => {
      setPhase('transition');
    }, 4000);

    // After ~4.8s, complete
    const completeTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 4800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(transitionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Calculate target position for logo merge (header position)
  const getTargetPosition = () => {
    // Header is at top-[25px], centered, logo is ~64px with pl-4 offset
    // We target approximately where the header logo sits
    return {
      x: window.innerWidth / 2 - (window.innerWidth / 2) + 60, // Approximately left side of header
      y: 25 + 16, // top-[25px] + some padding
      scale: 0.32 // From ~200px to ~64px
    };
  };

  const targetPos = getTargetPosition();

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'transition' ? 0 : 1 }}
        transition={{ duration: 0.8, delay: phase === 'transition' ? 0 : 0 }}
      >
        {/* Logo */}
        <motion.img
          src="/lovable-uploads/Crux_Consulting_logo_noBG.png"
          alt="Crux Consulting Logo"
          className="w-48 md:w-64 h-auto mb-8"
          initial={{ opacity: 0.1 }}
          animate={
            phase === 'transition'
              ? {
                  opacity: 0,
                  x: targetPos.x - window.innerWidth / 2 + 32,
                  y: targetPos.y - window.innerHeight / 2 + 32,
                  scale: targetPos.scale,
                }
              : { opacity: 1 }
          }
          transition={
            phase === 'transition'
              ? { duration: 0.8, ease: 'easeInOut' }
              : { duration: 3, ease: 'easeOut' }
          }
        />

        {/* Slogan with typewriter effect */}
        <motion.div
          className="text-center px-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'transition' ? 0 : 1 }}
          transition={{ duration: phase === 'transition' ? 0.3 : 0.5, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl font-light bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
            {displayedText}
            <motion.span
              className="inline-block w-0.5 h-6 md:h-7 bg-brand-green ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            />
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
