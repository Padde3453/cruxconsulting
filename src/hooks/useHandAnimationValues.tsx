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
  imageSize: number;
  humanScale: number;
  robotScale: number;
  scaledHumanFingertip: FingertipOffset;
  scaledRobotFingertip: FingertipOffset;
}

// Image sizes at different breakpoints (matching the CSS classes)
function getImageSize(width: number): number {
  if (width >= 1024) return 700; // lg:w-[700px]
  if (width >= 768) return 550;  // md:w-[550px]
  return 400;                     // w-[400px]
}

// Natural dimensions of the source images
const HUMAN_NATURAL_WIDTH = 620;
const ROBOT_NATURAL_WIDTH = 580;

// Raw fingertip offsets (based on natural image dimensions)
const HUMAN_FINGERTIP_RAW = { x: -294, y: 148 };
const ROBOT_FINGERTIP_RAW = { x: 287, y: -129 };

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

    // Calculate scale ratios based on rendered vs natural size
    const humanScale = imageSize / HUMAN_NATURAL_WIDTH;
    const robotScale = imageSize / ROBOT_NATURAL_WIDTH;

    // Apply scaling to fingertip offsets
    const humanFingertip: FingertipOffset = {
      x: HUMAN_FINGERTIP_RAW.x * humanScale,
      y: HUMAN_FINGERTIP_RAW.y * humanScale,
    };
    const robotFingertip: FingertipOffset = {
      x: ROBOT_FINGERTIP_RAW.x * robotScale,
      y: ROBOT_FINGERTIP_RAW.y * robotScale,
    };

    // Rotation angles (degrees)
    const humanRotation = { start: 0, meeting: -10, end: -15 };
    const robotRotation = { start: 35, meeting: 25, end: 15 };

    // Calculate meeting positions so fingertips touch at screen center
    const humanMeetingX = centerX - humanFingertip.x - halfImage;
    const humanMeetingY = centerY - humanFingertip.y - halfImage;

    const robotMeetingX = centerX - robotFingertip.x - halfImage;
    const robotMeetingY = centerY - robotFingertip.y - halfImage;

    // Start positions (off-screen)
    const humanStartX = width + 200;
    const humanStartY = -height - 200;

    const robotStartX = -imageSize - 200;
    const robotStartY = height + 200;

    // End positions: 20% of image remains visible on screen
    // Human hand retreats to top-right corner
    const humanEndX = width - imageSize * 0.2;  // 80% off-screen to the right
    const humanEndY = -imageSize * 0.8;          // 80% off-screen above

    // Robot hand retreats to bottom-left corner
    const robotEndX = -imageSize * 0.8;          // 80% off-screen to the left
    const robotEndY = height - imageSize * 0.2;  // 80% off-screen below

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
      imageSize,
      humanScale,
      robotScale,
      scaledHumanFingertip: humanFingertip,
      scaledRobotFingertip: robotFingertip,
    };
  }, [windowSize]);

  return values;
}
