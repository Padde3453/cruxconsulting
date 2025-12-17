import { useState, useEffect, useCallback } from "react";

export interface MeetingPoint {
  x: number;
  y: number;
}

/**
 * Hook that provides a centralized meeting point coordinate.
 * This serves as the single source of truth for:
 * - Where the hands should meet
 * - Where the sparkles should originate
 * 
 * By default, this is the exact center of the viewport.
 * Optional offsets can fine-tune the position if needed.
 */
export const useMeetingPoint = (offsetX: number = 0, offsetY: number = 0) => {
  const [meetingPoint, setMeetingPoint] = useState<MeetingPoint>(() => {
    if (typeof window === "undefined") {
      return { x: 600, y: 400 }; // SSR fallback
    }
    return {
      x: window.innerWidth / 2 + offsetX,
      y: window.innerHeight / 2 + offsetY,
    };
  });

  const [windowSize, setWindowSize] = useState(() => ({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  }));

  const updateMeetingPoint = useCallback(() => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    
    setWindowSize({ width: newWidth, height: newHeight });
    setMeetingPoint({
      x: newWidth / 2 + offsetX,
      y: newHeight / 2 + offsetY,
    });
  }, [offsetX, offsetY]);

  useEffect(() => {
    // Set initial value
    updateMeetingPoint();

    // Update on resize
    window.addEventListener("resize", updateMeetingPoint);
    return () => window.removeEventListener("resize", updateMeetingPoint);
  }, [updateMeetingPoint]);

  return {
    meetingPoint,
    windowSize,
  };
};
