import { useState, useEffect } from "react";

// 1. CONFIGURATION
// The natural dimensions of your raw images (used for scaling calculations)
const NATURAL_DIMS = {
  human: { width: 620, height: 402 },
  robot: { width: 580, height: 430 },
};

// The offset from the CENTER of the image to the FINGERTIP
const FINGERTIP_OFFSETS = {
  human: { x: -294, y: 148 },
  robot: { x: 287, y: -129 },
};

// Distance multipliers based on hand image width
const DISTANCE_MULTIPLIERS = {
  start: 1.5, // 150% of hand width past center (fully off-screen)
  end: 0.5, // 50% of hand width from center (hands frame the content)
};

export const useHandAnimationValues = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Matches Tailwind classes: w-[400px] md:w-[550px] lg:w-[700px]
  const getRenderedWidth = (width: number) => {
    if (width >= 1024) return 700;
    if (width >= 768) return 550;
    return 400;
  };

  const calculateHand = (type: "human" | "robot") => {
    const isHuman = type === "human";
    const natural = isHuman ? NATURAL_DIMS.human : NATURAL_DIMS.robot;
    const offset = isHuman ? FINGERTIP_OFFSETS.human : FINGERTIP_OFFSETS.robot;

    // Calculate current rendered size
    const currentWidth = getRenderedWidth(windowSize.width);
    const scale = currentWidth / natural.width;
    const currentHeight = natural.height * scale;

    // Screen positions
    const screenCenter = {
      x: windowSize.width / 2,
      y: windowSize.height / 2,
    };

    // Target corners: Human -> Top-Right, Robot -> Bottom-Left
    // On mobile/tablet (< 1024px), steepen robot hand trajectory to avoid CTA button overlap
    const isMobileOrTablet = windowSize.width < 1024;

    let targetCorner;
    if (isHuman) {
      targetCorner = { x: windowSize.width, y: 0 };
    } else {
      // Robot hand: offset downward on mobile/tablet for steeper angle
      targetCorner = isMobileOrTablet
        ? { x: -70, y: windowSize.height + windowSize.height * 0.3 }
        : { x: 0, y: windowSize.height };
    }

    // Calculate the trajectory vector (Center to Corner)
    const trajectoryVector = {
      x: targetCorner.x - screenCenter.x,
      y: targetCorner.y - screenCenter.y,
    };

    // Normalize the trajectory vector (make it length 1)
    const trajectoryLength = Math.sqrt(trajectoryVector.x ** 2 + trajectoryVector.y ** 2);
    const normalizedVector = {
      x: trajectoryVector.x / trajectoryLength,
      y: trajectoryVector.y / trajectoryLength,
    };

    // Calculate positions based on hand width, not screen size
    const calculatePosition = (distance: number) => {
      // Fingertip position along the normalized trajectory
      const fingertipX = screenCenter.x + normalizedVector.x * distance;
      const fingertipY = screenCenter.y + normalizedVector.y * distance;

      // Scale the offset (no rotation applied)
      const scaledOffset = { x: offset.x * scale, y: offset.y * scale };

      // Calculate image top-left position
      const imageX = fingertipX - scaledOffset.x - currentWidth / 2;
      const imageY = fingertipY - scaledOffset.y - currentHeight / 2;

      return { x: imageX, y: imageY, rotate: 0 };
    };

    // Calculate distances based on hand image width
    const startDistance = currentWidth * DISTANCE_MULTIPLIERS.start + trajectoryLength; // Fully off-screen
    const endDistance = currentWidth * DISTANCE_MULTIPLIERS.end; // Hands frame the content

    return {
      scale,
      start: calculatePosition(startDistance),
      meeting: calculatePosition(0), // Center of screen
      end: calculatePosition(endDistance),
    };
  };

  return {
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
    imageSize: getRenderedWidth(windowSize.width),
    humanHand: calculateHand("human"),
    robotHand: calculateHand("robot"),
    humanScale: getRenderedWidth(windowSize.width) / NATURAL_DIMS.human.width,
    robotScale: getRenderedWidth(windowSize.width) / NATURAL_DIMS.robot.width,
    scaledHumanFingertip: { x: 0, y: 0 },
    scaledRobotFingertip: { x: 0, y: 0 },
  };
};
