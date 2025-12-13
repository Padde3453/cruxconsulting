import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const { i18n } = useTranslation();
  const [phase, setPhase] = useState<'fadeIn' | 'hold' | 'transition' | 'done'>('fadeIn');
  const [displayedText, setDisplayedText] = useState('');
  const [logoOpacity, setLogoOpacity] = useState(0.1);
  
  const isGerman = i18n.language.startsWith('de');
  const slogan = isGerman 
    ? "Mit Künstlicher Intelligenz gestalten wir Zeit zu Ihren Gunsten um"
    : "We reshape time in your favour with AI";

  // Logo opacity fade effect (0.1 to 1 over 3 seconds)
  useEffect(() => {
    if (phase !== 'fadeIn') return;
    
    const startTime = Date.now();
    const duration = 3000;
    
    const fadeInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newOpacity = 0.1 + (0.9 * progress); // 0.1 to 1.0
      setLogoOpacity(newOpacity);
      
      if (progress >= 1) {
        clearInterval(fadeInterval);
      }
    }, 16); // ~60fps

    return () => clearInterval(fadeInterval);
  }, [phase]);

  // Typewriter effect - starts immediately, completes in 3 seconds
  useEffect(() => {
    if (phase !== 'fadeIn') return;
    
    const totalDuration = 3000;
    const charDelay = totalDuration / slogan.length;
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

  // Phase transitions with longer timing
  useEffect(() => {
    // After 3.2s (fadeIn + typewriter complete), move to hold phase
    const holdTimer = setTimeout(() => {
      setPhase('hold');
    }, 3200);

    // After 4.5s (3.2s fadeIn + 1.3s hold), start transition
    const transitionTimer = setTimeout(() => {
      setPhase('transition');
    }, 4500);

    // After 6.5s (give 2 seconds for transition), complete
    const completeTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 6500);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(transitionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Calculate target position for logo merge (header position)
  const getTargetPosition = () => {
    return {
      x: -window.innerWidth / 2 + 120,
      y: -window.innerHeight / 2 + 60,
      scale: 0.28
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
        transition={{ duration: 1.5, delay: phase === 'transition' ? 0.5 : 0 }}
      >
        {/* Logo with manual opacity control */}
        <motion.img
          src="/lovable-uploads/Crux_Consulting_logo_noBG.png"
          alt="Crux Consulting Logo"
          className="w-48 md:w-64 h-auto mb-8"
          style={{ opacity: phase === 'transition' ? undefined : logoOpacity }}
          initial={{ scale: 1 }}
          animate={
            phase === 'transition'
              ? {
                  opacity: 0,
                  x: targetPos.x,
                  y: targetPos.y,
                  scale: targetPos.scale,
                }
              : { scale: 1 }
          }
          transition={
            phase === 'transition'
              ? { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }
              : { duration: 0.1 }
          }
        />

        {/* Slogan with typewriter effect */}
        <motion.div
          className="text-center px-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'transition' ? 0 : 1 }}
          transition={{ duration: phase === 'transition' ? 0.5 : 0.3 }}
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
