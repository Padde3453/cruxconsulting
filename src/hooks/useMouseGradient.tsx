import { useState, useCallback, MouseEvent } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMouseGradient = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMousePosition({ x: 50, y: 50 });
  }, []);

  const gradientStyle = isHovering
    ? {
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #2748E1 0%, #01937F 70%)`,
      }
    : {};

  return {
    mousePosition,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    gradientStyle,
  };
};
