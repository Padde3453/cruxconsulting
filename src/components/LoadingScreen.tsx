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
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [logoFadeComplete, setLogoFadeComplete] = useState(false);
  
  const isGerman = i18n.language.startsWith('de');
  const slogan = isGerman 
    ? "Mit Künstlicher Intelligenz gestalten wir Zeit zu Ihren Gunsten um"
    : "We reshape time in your favour with AI";

  // Logo opacity fade effect (0.1 to 1 over 3 seconds) using requestAnimationFrame for smoother animation
  useEffect(() => {
    if (phase !== 'fadeIn') return;
    
    const startTime = performance.now();
    const duration = 3000;
    let animationId: number;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newOpacity = 0.1 + (0.9 * progress);
      setLogoOpacity(newOpacity);
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setLogoFadeComplete(true);
      }
    };
    
    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [phase]);

  // Typewriter effect using requestAnimationFrame for consistency
  useEffect(() => {
    if (phase !== 'fadeIn') return;
    
    const totalDuration = 3000;
    const startTime = performance.now();
    let animationId: number;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const charIndex = Math.floor(progress * slogan.length);
      
      setDisplayedText(slogan.slice(0, charIndex + 1));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        // Ensure full text is displayed
        setDisplayedText(slogan);
        setTypewriterComplete(true);
      }
    };
    
    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [phase, slogan]);

  // Phase transitions - only progress when animations are complete
  useEffect(() => {
    // Wait for both animations to complete before moving to hold phase
    if (typewriterComplete && logoFadeComplete && phase === 'fadeIn') {
      // Small buffer to ensure visual completion
      const holdTimer = setTimeout(() => {
        setPhase('hold');
      }, 200);
      return () => clearTimeout(holdTimer);
    }
  }, [typewriterComplete, logoFadeComplete, phase]);

  // Hold phase duration and transition
  useEffect(() => {
    if (phase !== 'hold') return;
    
    // Hold for 1.3s then transition
    const transitionTimer = setTimeout(() => {
      setPhase('transition');
    }, 1300);

    return () => clearTimeout(transitionTimer);
  }, [phase]);

  // Transition phase - complete after animation finishes
  useEffect(() => {
    if (phase !== 'transition') return;
    
    // Allow 2s for transition animation
    const completeTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2000);

    return () => clearTimeout(completeTimer);
  }, [phase, onComplete]);

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
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
