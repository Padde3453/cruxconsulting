import { useState, useEffect, useMemo } from "react";

// Fingertip offset from image center (you'll need to fine-tune these)
// These represent the pixel distance from the center of the hand image to the fingertip
interface FingertipOffset {
  x: number; // positive = right of image center
  y: number; // positive = below image center
}

interface HandConfig {
  start: { x: number; y: number; rotate: number };
  meeting: { x: number; y: number; rotate: number };
  end: { x: number; y: number; rotate: number };
}

interface HandAnimationValues {
  humanHand: HandConfig;
  robotHand: HandConfig;
  windowWidth: number;
  windowHeight: number;
}

// Image sizes at different breakpoints (matching the CSS classes)
function getImageSize(width: number): number {
  if (width >= 1024) return 700; // lg:w-[700px]
  if (width >= 768) return 550;  // md:w-[550px]
  return 400;                     // w-[400px]
}

export function useHandAnimationValues(): HandAnimationValues {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const values = useMemo(() => {
    const { width, height } = windowSize;
    const centerX = width / 2;
    const centerY = height / 2;
    const imageSize = getImageSize(width);
    const halfImage = imageSize / 2;

    // Fingertip offsets from image center (adjust these to match your images)
    // Human hand: fingertip is roughly at bottom-left of the image
    const humanFingertip: FingertipOffset = {
      x: -halfImage * 0.25,  // 25% left of center
      y: halfImage * 0.4,     // 40% below center
    };

    // Robot hand: fingertip is roughly at top-right of the image
    const robotFingertip: FingertipOffset = {
      x: halfImage * 0.35,   // 35% right of center
      y: -halfImage * 0.3,   // 30% above center
    };

    // Rotation angles (degrees)
    const humanRotation = { start: 0, meeting: -10, end: -15 };
    const robotRotation = { start: 35, meeting: 25, end: 15 };

    // Calculate meeting positions so fingertips touch at screen center
    // The image is positioned by its center, so we offset by the fingertip distance
    const humanMeetingX = centerX - humanFingertip.x - halfImage;
    const humanMeetingY = centerY - humanFingertip.y - halfImage;

    const robotMeetingX = centerX - robotFingertip.x - halfImage;
    const robotMeetingY = centerY - robotFingertip.y - halfImage;

    // Start positions (off-screen)
    const humanStartX = width + 200;
    const humanStartY = -height - 200;

    const robotStartX = -imageSize - 200;
    const robotStartY = height + 200;

    // End positions (retreated to corners)
    const retreatDistance = Math.min(width, height) * 0.25;
    const humanEndX = humanMeetingX + retreatDistance * 0.8;
    const humanEndY = humanMeetingY - retreatDistance * 1.2;

    const robotEndX = robotMeetingX - retreatDistance * 1.2;
    const robotEndY = robotMeetingY + retreatDistance * 0.6;

    return {
      humanHand: {
        start: { x: humanStartX, y: humanStartY, rotate: humanRotation.start },
        meeting: { x: humanMeetingX, y: humanMeetingY, rotate: humanRotation.meeting },
        end: { x: humanEndX, y: humanEndY, rotate: humanRotation.end },
      },
      robotHand: {
        start: { x: robotStartX, y: robotStartY, rotate: robotRotation.start },
        meeting: { x: robotMeetingX, y: robotMeetingY, rotate: robotRotation.meeting },
        end: { x: robotEndX, y: robotEndY, rotate: robotRotation.end },
      },
      windowWidth: width,
      windowHeight: height,
    };
  }, [windowSize]);

  return values;
}
