import { useState, useEffect, useMemo } from "react";

interface FingertipOffset {
  x: number;
  y: number;
}

interface HandPosition {
  x: number;
  y: number;
  rotate: number;
}

interface HandConfig {
  start: HandPosition;
  meeting: HandPosition;
  end: HandPosition;
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

// Raw fingertip offsets (based on natural image dimensions, measured from center)
const HUMAN_FINGERTIP_RAW = { x: -297, y: 148 };
const ROBOT_FINGERTIP_RAW = { x: 286, y: -129 };

// Trajectory configuration (angles in degrees)
// 0° = right, 90° = down, -90° = up, 180° = left
// Robot enters from bottom-left, human enters from top-right
const ROBOT_TRAJECTORY_ANGLE = 135;  // degrees (bottom-left direction: down + left)
const HUMAN_TRAJECTORY_ANGLE = -45;  // degrees (top-right direction: up + right)

// Rotation values for each phase
const HUMAN_ROTATION = { start: 0, meeting: -10, end: -15 };
const ROBOT_ROTATION = { start: -10, meeting: -20, end: -30 };

// How much of the hand remains visible at end position (0.1 = 10%)
const VISIBLE_AT_END = 0.1;

// Convert degrees to radians
function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Get unit vector from angle (0° = right, 90° = down, etc.)
function getUnitVector(angleDegrees: number): { x: number; y: number } {
  const radians = degreesToRadians(angleDegrees);
  return {
    x: Math.cos(radians),
    y: Math.sin(radians),
  };
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

    // Calculate meeting positions (fingertips touch at screen center)
    const humanMeetingX = centerX - humanFingertip.x - halfImage;
    const humanMeetingY = centerY - humanFingertip.y - halfImage;

    const robotMeetingX = centerX - robotFingertip.x - halfImage;
    const robotMeetingY = centerY - robotFingertip.y - halfImage;

    // Get trajectory vectors
    const humanVector = getUnitVector(HUMAN_TRAJECTORY_ANGLE);
    const robotVector = getUnitVector(ROBOT_TRAJECTORY_ANGLE);

    // Calculate retreat distance: move hand so only VISIBLE_AT_END (20%) remains on screen
    // The hand needs to move far enough that 80% is off-screen
    const retreatDistance = imageSize * (1 - VISIBLE_AT_END);

    // Calculate off-screen distance: retreat distance + full image size
    const offScreenDistance = retreatDistance + imageSize;

    // Project positions along trajectory from meeting point
    // Human hand
    const humanEndX = humanMeetingX + humanVector.x * retreatDistance;
    const humanEndY = humanMeetingY + humanVector.y * retreatDistance;
    const humanStartX = humanMeetingX + humanVector.x * offScreenDistance;
    const humanStartY = humanMeetingY + humanVector.y * offScreenDistance;

    // Robot hand
    const robotEndX = robotMeetingX + robotVector.x * retreatDistance;
    const robotEndY = robotMeetingY + robotVector.y * retreatDistance;
    const robotStartX = robotMeetingX + robotVector.x * offScreenDistance;
    const robotStartY = robotMeetingY + robotVector.y * offScreenDistance;

    return {
      humanHand: {
        start: { x: humanStartX, y: humanStartY, rotate: HUMAN_ROTATION.start },
        meeting: { x: humanMeetingX, y: humanMeetingY, rotate: HUMAN_ROTATION.meeting },
        end: { x: humanEndX, y: humanEndY, rotate: HUMAN_ROTATION.end },
      },
      robotHand: {
        start: { x: robotStartX, y: robotStartY, rotate: ROBOT_ROTATION.start },
        meeting: { x: robotMeetingX, y: robotMeetingY, rotate: ROBOT_ROTATION.meeting },
        end: { x: robotEndX, y: robotEndY, rotate: ROBOT_ROTATION.end },
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
