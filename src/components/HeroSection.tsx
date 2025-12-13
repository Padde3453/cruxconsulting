import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import humanHandImg from "@/assets/human-hand.png";
import robotHandImg from "@/assets/robot-hand.png";
import { useHandAnimationValues } from "@/hooks/useHandAnimationValues";

interface HeroSectionProps {
  onBooking: () => void;
}

const HeroSection = ({ onBooking }: HeroSectionProps) => {
  const { t } = useTranslation();
  const rotatingWords = t("hero.rotatingWords", { returnObjects: true }) as string[];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<"waiting" | "hands-in" | "spark" | "hands-out" | "text">(
    "waiting",
  );
  const [showDebug, setShowDebug] = useState(false);

  // Get dynamically calculated hand positions
  const handValues = useHandAnimationValues();
  const { humanHand, robotHand, windowWidth, windowHeight } = handValues;

  // Check synchronously if loading screen was already shown
  const hasSeenLoading = typeof window !== "undefined" && sessionStorage.getItem("hasSeenLoading") === "true";

  // Animation sequence controller
  useEffect(() => {
    const initialDelay = hasSeenLoading ? 500 : 7000;

    const timers: NodeJS.Timeout[] = [];

    // Phase 1: Start hands animation
    timers.push(
      setTimeout(() => {
        setAnimationPhase("hands-in");
      }, initialDelay),
    );

    // Phase 2: Spark appears when hands meet (after 3s of hands moving - slower)
    timers.push(
      setTimeout(() => {
        setAnimationPhase("spark");
      }, initialDelay + 3000),
    );

    // Phase 3: Hands move apart (after spark holds for 1.5s)
    timers.push(
      setTimeout(() => {
        setAnimationPhase("hands-out");
      }, initialDelay + 4500),
    );

    // Phase 4: Text appears (after hands have moved apart - 2.5s)
    timers.push(
      setTimeout(() => {
        setAnimationPhase("text");
      }, initialDelay + 7000),
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [hasSeenLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Animation variants for text fly-in from below
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 12,
      },
    },
  };

  // Hand positions based on animation phase - returns { x, y, rotate } for framer-motion
  const getHumanHandPosition = () => {
    let pos;
    switch (animationPhase) {
      case "waiting":
        pos = humanHand.start;
        break;
      case "hands-in":
      case "spark":
        pos = humanHand.meeting;
        break;
      case "hands-out":
      case "text":
        pos = humanHand.end;
        break;
      default:
        pos = humanHand.start;
    }
    return { x: pos.x, y: pos.y, rotate: pos.rotate };
  };

  const getRobotHandPosition = () => {
    let pos;
    switch (animationPhase) {
      case "waiting":
        pos = robotHand.start;
        break;
      case "hands-in":
      case "spark":
        pos = robotHand.meeting;
        break;
      case "hands-out":
      case "text":
        pos = robotHand.end;
        break;
      default:
        pos = robotHand.start;
    }
    return { x: pos.x, y: pos.y, rotate: pos.rotate };
  };


  // Get current image size for debug display
  const getImageSize = () => {
    if (windowWidth >= 1024) return 700;
    if (windowWidth >= 768) return 550;
    return 400;
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: "3s",
          }}
        ></div>
      </div>


      {/* Human Hand - Coming from top-right */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        style={{
          top: 0,
          left: 0,
        }}
        initial={getHumanHandPosition()}
        animate={getHumanHandPosition()}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 12,
        }}
      >
        <motion.img 
          src={humanHandImg} 
          alt="Human hand" 
          className="w-[400px] md:w-[550px] lg:w-[700px] h-auto"
          animate={{ rotate: getHumanHandPosition().rotate }}
          transition={{ type: "spring", stiffness: 20, damping: 12 }}
        />
      </motion.div>

      {/* Robot Hand - Coming from bottom-left */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        style={{
          top: 0,
          left: 0,
        }}
        initial={getRobotHandPosition()}
        animate={getRobotHandPosition()}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 12,
        }}
      >
        <motion.img 
          src={robotHandImg} 
          alt="Robot hand" 
          className="w-[400px] md:w-[550px] lg:w-[700px] h-auto"
          animate={{ rotate: getRobotHandPosition().rotate }}
          transition={{ type: "spring", stiffness: 20, damping: 12 }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={animationPhase === "text" ? "visible" : "hidden"}
      >
        <div className="mb-8"></div>

        <motion.h1 className="text-6xl md:text-8xl font-bold mb-6" variants={itemVariants}>
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent block mb-4">
            {t("hero.title")}
          </span>
          <div className="relative h-[1.2em] overflow-hidden inline-block min-w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
                className="block w-full bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          {t("hero.description")}
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
          <Button
            onClick={onBooking}
            size="lg"
            variant="gradient"
            enableMouseGradient
            className="rounded-full px-8 py-4 text-lg flex items-center space-x-2"
          >
            <span>{t("hero.cta")}</span>
            <Plus size={20} />
          </Button>

          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {t("hero.responseTime")}
            </div>
            <div className="text-sm text-gray-400">{t("hero.responseTimeLabel")}</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={animationPhase === "text" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-gradient-to-b from-brand-blue to-brand-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
      {/* Debug Overlay */}
      {showDebug && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          {/* Center Crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-screen bg-red-500/70" style={{ top: '-50vh' }} />
            <div className="absolute top-1/2 -translate-y-1/2 h-[2px] w-screen bg-red-500/70" style={{ left: '-50vw' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-red-600" />
          </div>

          {/* Info Panel */}
          <div className="absolute top-20 left-4 bg-black/90 p-4 rounded-lg text-white text-sm font-mono pointer-events-auto max-w-sm">
            <div className="text-yellow-400 font-bold mb-2 text-lg">🔧 Debug Mode (Scaled)</div>
            <div className="mb-3 pb-2 border-b border-gray-600">
              <span className="text-cyan-400">Window:</span> {windowWidth}×{windowHeight}px
            </div>
            <div className="mb-3 pb-2 border-b border-gray-600">
              <span className="text-cyan-400">Image Size:</span> {handValues.imageSize}px
            </div>
            <div className="mb-3 pb-2 border-b border-gray-600">
              <span className="text-cyan-400">Phase:</span> {animationPhase}
            </div>
            
            <div className="mb-3 pb-2 border-b border-gray-600">
              <div className="text-green-400 font-bold mb-1">Human Hand:</div>
              <div className="text-xs space-y-1 pl-2">
                <div><span className="text-gray-400">scale:</span> {handValues.humanScale.toFixed(2)}x</div>
                <div><span className="text-gray-400">scaled offset:</span> ({Math.round(handValues.scaledHumanFingertip.x)}, {Math.round(handValues.scaledHumanFingertip.y)})</div>
                <div><span className="text-gray-400">meeting:</span> ({Math.round(humanHand.meeting.x)}, {Math.round(humanHand.meeting.y)})</div>
                <div><span className="text-gray-400">end:</span> ({Math.round(humanHand.end.x)}, {Math.round(humanHand.end.y)})</div>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="text-blue-400 font-bold mb-1">Robot Hand:</div>
              <div className="text-xs space-y-1 pl-2">
                <div><span className="text-gray-400">scale:</span> {handValues.robotScale.toFixed(2)}x</div>
                <div><span className="text-gray-400">scaled offset:</span> ({Math.round(handValues.scaledRobotFingertip.x)}, {Math.round(handValues.scaledRobotFingertip.y)})</div>
                <div><span className="text-gray-400">meeting:</span> ({Math.round(robotHand.meeting.x)}, {Math.round(robotHand.meeting.y)})</div>
                <div><span className="text-gray-400">end:</span> ({Math.round(robotHand.end.x)}, {Math.round(robotHand.end.y)})</div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 mt-3 pt-2 border-t border-gray-600">
              Raw offsets scaled by rendered/natural ratio
            </div>
          </div>
        </div>
      )}

      {/* Debug Toggle Button */}
      <button
        onClick={() => setShowDebug(!showDebug)}
        className="fixed bottom-4 right-4 z-[110] bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg pointer-events-auto transition-colors"
      >
        {showDebug ? '✕ Hide Debug' : '🔧 Debug Hands'}
      </button>
    </section>
  );
};

export default HeroSection;
