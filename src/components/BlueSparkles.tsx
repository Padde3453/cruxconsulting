import React, { useEffect, useRef } from 'react';

// Configuration Types
interface BlueSparklesProps {
  color: string;   // Hex color code (e.g., #3B82F6)
  opacity: number; // 0.0 to 1.0
  size: number;    // Average radius of particles in pixels
  spread: number;  // Deviation in degrees (0 = line, 90 = full circle)
  isActive: boolean; // Controls when the animation starts
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

// --- Constants ---
const DURATION = 2000;         // Duration of particle emission in ms
const PARTICLES_PER_FRAME = 30; // Number of particles created per frame during emission
const SOURCE_RADIUS = 10;      // Radius of the central glowing orb

/**
 * Helper to convert a Hex color to an RGBA string.
 * Used for creating gradients with alpha transparency.
 */
const getRgba = (hex: string, alpha: number) => {
  if (!/^#[0-9A-F]{6}$/i.test(hex)) return hex;
  
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const BlueSparkles: React.FC<BlueSparklesProps> = ({ color, opacity, size, spread, isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!isActive || hasStartedRef.current) return;
    
    hasStartedRef.current = true;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Animation state
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const particles: Particle[] = [];
    const startTime = Date.now();
    
    // --- Resize Handler ---
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    // Initial size setup
    window.addEventListener('resize', handleResize);
    handleResize();

    // --- Particle Factory ---
    const createParticles = (count: number) => {
      const startX = width / 2;
      const startY = height / 2;
      
      // We aim for the top-left (0,0) and bottom-right (width, height) corners.
      // Math.atan2(height, width) gives the angle to the bottom-right corner.
      const diagonalAngle = Math.atan2(height, width); 

      for (let i = 0; i < count; i++) {
        // Randomly choose direction: Forward (Bottom-Right) or Backward (Top-Left)
        const isOpposite = Math.random() > 0.5;
        const baseAngle = isOpposite ? diagonalAngle + Math.PI : diagonalAngle;

        // Apply spread: Convert degrees to radians and offset the base angle
        // spread of 90 deg means +- 90 deg deviation (total 180 coverage per side -> 360 total)
        const deviationRad = (Math.random() - 0.5) * 2 * (spread * Math.PI / 180);
        const angle = baseAngle + deviationRad;
        
        // Randomize speed and size for natural look
        const speed = Math.random() * 5 + 3; // Speed range: 3 to 8
        const particleSize = Math.max(0.5, size + (Math.random() - 0.5));

        particles.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: particleSize,
          color: color, 
        });
      }
    };

    // --- Animation Loop ---
    const render = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      // 1. Clear Canvas
      ctx.clearRect(0, 0, width, height);
      
      // 2. Draw Central Source (The "Hole" Filler)
      if (elapsed < DURATION) {
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Calculate fade-out ratio (1 -> 0)
        const timeFraction = 1 - (elapsed / DURATION);
        const currentSourceOpacity = opacity * Math.max(0, timeFraction);

        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, SOURCE_RADIUS);
        gradient.addColorStop(0, getRgba(color, currentSourceOpacity)); // Core color
        gradient.addColorStop(1, getRgba(color, 0));                    // Fade to transparent

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, SOURCE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Emit New Particles
      if (elapsed < DURATION) {
        createParticles(PARTICLES_PER_FRAME); 
      }

      // 4. Update and Draw Existing Particles
      ctx.globalAlpha = opacity; // Apply global opacity to all particles

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Update Position
        p.x += p.vx;
        p.y += p.vy;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Cleanup: Remove particles that have moved far off-screen
        const buffer = 100;
        if (
          p.x < -buffer || 
          p.x > width + buffer || 
          p.y < -buffer || 
          p.y > height + buffer
        ) {
          particles.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1.0; // Reset alpha for next frame
      
      // Continue loop if animation is active or particles still exist
      if (elapsed <= DURATION || particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Start Loop
    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, opacity, size, spread, isActive]);

  if (!isActive && !hasStartedRef.current) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-50"
      style={{ background: 'transparent' }} 
    />
  );
};
