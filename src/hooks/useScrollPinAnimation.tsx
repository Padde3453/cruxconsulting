import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollPinAnimationReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  stickyRef: React.RefObject<HTMLDivElement>;
  cardProgress: MotionValue<number>[];
  cardOpacity: MotionValue<number>[];
  cardX: MotionValue<number>[];
  cardScale: MotionValue<number>[];
  isComplete: boolean;
  titleOpacity: MotionValue<number>;
  titleY: MotionValue<number>;
}

export const useScrollPinAnimation = (cardCount: number = 4): ScrollPinAnimationReturn => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Title animation (animates first)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.05], [-20, 0]);

  // Define animation thresholds for each card
  const getCardThresholds = (index: number, total: number) => {
    const startBase = 0.1;
    const spacing = 0.15;
    const duration = 0.2;
    
    const start = startBase + (index * spacing);
    const end = start + duration;
    
    return { start, end };
  };

  // Create progress transforms for each card
  const cardProgress: MotionValue<number>[] = [];
  const cardOpacity: MotionValue<number>[] = [];
  const cardX: MotionValue<number>[] = [];
  const cardScale: MotionValue<number>[] = [];

  for (let i = 0; i < cardCount; i++) {
    const { start, end } = getCardThresholds(i, cardCount);
    const isEven = i % 2 === 0;
    const slideDistance = 100;

    cardProgress.push(useTransform(scrollYProgress, [start, end], [0, 1]));
    cardOpacity.push(useTransform(scrollYProgress, [start, end], [0, 1]));
    cardX.push(
      useTransform(
        scrollYProgress,
        [start, end],
        [isEven ? -slideDistance : slideDistance, 0]
      )
    );
    cardScale.push(useTransform(scrollYProgress, [start, end], [0.9, 1]));
  }

  // Mark animation as complete when last card finishes
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.75 && !isComplete) {
        setIsComplete(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isComplete]);

  return {
    containerRef,
    stickyRef,
    cardProgress,
    cardOpacity,
    cardX,
    cardScale,
    isComplete,
    titleOpacity,
    titleY
  };
};
