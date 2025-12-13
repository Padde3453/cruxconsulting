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

// Position percentages along the trajectory vector (0 = center, 1 = corner)
const TRAJECTORY_POSITIONS = {
  start: 1.5,    // 150% - past the corner, fully off-screen
  meeting: 0,    // 0% - at screen center
  end: 0.85,     // 85% - near the corner, partially visible
};

// Rotation offsets for visual alignment (applied on top of trajectory angle)
const ROTATION_OFFSETS = {
  human: { start: 0, meeting: -10, end: -20 },
  robot: { start: 0, meeting: 20, end: 15 },
};

// Helper: Rotate a point around (0,0)
const rotatePoint = (x: number, y: number, angleDeg: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: x * Math.cos(rad) - y * Math.sin(rad),
    y: x * Math.sin(rad) + y * Math.cos(rad),
  };
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
    const rotationOffset = isHuman ? ROTATION_OFFSETS.human : ROTATION_OFFSETS.robot;

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
    const targetCorner = isHuman
      ? { x: windowSize.width, y: 0 }
      : { x: 0, y: windowSize.height };

    // 2. CALCULATE THE TRAJECTORY VECTOR (Center to Corner)
    const trajectoryVector = {
      x: targetCorner.x - screenCenter.x,
      y: targetCorner.y - screenCenter.y,
    };

    // Calculate trajectory angle using atan2
    const trajectoryAngleRad = Math.atan2(trajectoryVector.y, trajectoryVector.x);
    const trajectoryAngleDeg = (trajectoryAngleRad * 180) / Math.PI;

    // 3. CALCULATE POSITIONS ALONG THE TRAJECTORY
    const calculatePosition = (percent: number, rotation: number) => {
      // Fingertip position along the trajectory
      const fingertipX = screenCenter.x + trajectoryVector.x * percent;
      const fingertipY = screenCenter.y + trajectoryVector.y * percent;

      // Scale the offset
      const scaledOffset = { x: offset.x * scale, y: offset.y * scale };

      // Rotate the offset to match the hand's rotation
      const rotatedOffset = rotatePoint(scaledOffset.x, scaledOffset.y, rotation);

      // Calculate image top-left position
      // We want: ImageCenter + RotatedOffset = FingertipPosition
      // Therefore: ImageTopLeft = FingertipPosition - RotatedOffset - (ImageSize / 2)
      const imageX = fingertipX - rotatedOffset.x - currentWidth / 2;
      const imageY = fingertipY - rotatedOffset.y - currentHeight / 2;

      return { x: imageX, y: imageY, rotate: rotation };
    };

    return {
      scale,
      trajectoryAngle: trajectoryAngleDeg,
      start: calculatePosition(TRAJECTORY_POSITIONS.start, rotationOffset.start),
      meeting: calculatePosition(TRAJECTORY_POSITIONS.meeting, rotationOffset.meeting),
      end: calculatePosition(TRAJECTORY_POSITIONS.end, rotationOffset.end),
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
