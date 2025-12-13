import { useState, useEffect } from "react";

// 1. CONFIGURATION
// The natural dimensions of your raw images (used for scaling calculations)
const NATURAL_DIMS = {
  human: { width: 620, height: 402 },
  robot: { width: 580, height: 430 },
};

// The offset from the CENTER of the image to the FINGERTIP
// (Calculated from your previous measurements)
const FINGERTIP_OFFSETS = {
  human: { x: -294, y: 148 }, 
  robot: { x: 287, y: -129 },
};

// Trajectory Angles (in degrees)
// Defines the angle the hand moves along.
// Human: Enters from Top-Right (-45deg), Retreats to Top-Right
// Robot: Enters from Bottom-Left (135deg), Retreats to Bottom-Left
const TRAJECTORIES = {
  human: -35, // Angle pointing towards the center from Top-Right
  robot: 145, // Angle pointing towards the center from Bottom-Left
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

  // 2. DETERMINE RENDERED SIZE
  // Matches your Tailwind classes: w-[400px] md:w-[550px] lg:w-[700px]
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

    // Rotation at meeting point
    const meetingRotate = isHuman ? -10 : 20;

    // 3. CALCULATE MEETING POINT (Center of Screen)
    // We must account for the rotation shifting the fingertip
    // A. Scale the offset
    const scaledOffset = { x: offset.x * scale, y: offset.y * scale };
    
    // B. Rotate the offset vector to match the hand's rotation at impact
    const rotatedOffset = rotatePoint(scaledOffset.x, scaledOffset.y, meetingRotate);

    // C. Calculate Position
    // We want: ImageCenter + RotatedOffset = ScreenCenter
    // Therefore: ImageCenter = ScreenCenter - RotatedOffset
    // But Framer Motion positions the Top-Left of the div.
    // So: PosX = ScreenCenter - RotatedOffset - (CurrentWidth / 2)
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;

    const meetingX = centerX - rotatedOffset.x - (currentWidth / 2);
    const meetingY = centerY - rotatedOffset.y - (currentHeight / 2);

    // 4. CALCULATE TRAJECTORY VECTORS
    // We simply move the hand away from the meeting point along a fixed angle
    const angleRad = (isHuman ? TRAJECTORIES.human : TRAJECTORIES.robot) * (Math.PI / 180);
    
    // Vector pointing OUTWARDS (Retreat direction)
    // Human retreats to Top-Right (+X, -Y)
    // Robot retreats to Bottom-Left (-X, +Y)
    const vecX = isHuman ? Math.cos(angleRad) : Math.cos(angleRad); // Direction is handled by angle
    const vecY = isHuman ? Math.sin(angleRad) : Math.sin(angleRad);

    // 5. DEFINE DISTANCES
    // "End": Move back enough to expose just the wrist.
    // Logic: Move back by 60% of the image width.
    const retreatDist = currentWidth * 0.55; 
    
    // "Start": Move back enough to be fully off-screen.
    // Logic: Half screen diagonal + image width
    const startDist = Math.max(windowSize.width, windowSize.height) * 0.8 + currentWidth;

    // Apply Vectors
    // Note: We subtract for "Start" (pushing away further) and Add for "End" depending on vector direction?
    // Actually, let's use the Vector purely as "Direction from Center to Corner".
    // Start -> Center -> End (Wait, Start and End are same direction relative to center)
    // Movement: Start (Far away) -> Meeting (Center) -> End (Slightly away)
    
    // Re-calculate vectors specifically for "Retreating to corner"
    // Human (Top Right): dx > 0, dy < 0
    const retreatDirX = isHuman ? 1 : -1; 
    const retreatDirY = isHuman ? -0.8 : 0.8; // 0.8 flattens the angle slightly for better aesthetics

    const endX = meetingX + (retreatDist * retreatDirX);
    const endY = meetingY + (retreatDist * retreatDirY);

    const startX = meetingX + (startDist * retreatDirX);
    const startY = meetingY + (startDist * retreatDirY);

    return {
      scale, // for debug
      scaledFingertip: rotatedOffset, // for debug
      start: { x: startX, y: startY, rotate: 0 }, // Start with 0 rotation or matched
      meeting: { x: meetingX, y: meetingY, rotate: meetingRotate },
      end: { x: endX, y: endY, rotate: isHuman ? -20 : 15 }, // Slight rotation change for "resting" pose
    };
  };

  return {
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
    imageSize: getRenderedWidth(windowSize.width),
    humanHand: calculateHand("human"),
    robotHand: calculateHand("robot"),
    // Exposed for debug overlay
    humanScale: getRenderedWidth(windowSize.width) / NATURAL_DIMS.human.width,
    robotScale: getRenderedWidth(windowSize.width) / NATURAL_DIMS.robot.width,
    scaledHumanFingertip: { x: 0, y: 0 }, // placeholders if you want strict typing
    scaledRobotFingertip: { x: 0, y: 0 },
  };
};
