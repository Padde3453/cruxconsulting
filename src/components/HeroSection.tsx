import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import humanHandImg from "@/assets/human-hand.png";
import robotHandImg from "@/assets/robot-hand.png";
import { useHandAnimationValues } from "@/hooks/useHandAnimationValues";
import { BlueSparkles } from "@/components/BlueSparkles";

interface HeroSectionProps {
  onBooking: () => void;
}

const HeroSection = ({ onBooking }: HeroSectionProps) => {
  const { t } = useTranslation();
  const rotatingWords = t("hero.rotatingWords", { returnObjects: true }) as string[];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<"waiting" | "hands-in" | "text">(
    "waiting",
  );
  const [showSparkles, setShowSparkles] = useState(false);
  

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

    // Sparkles start when hands meet (3s after hands-in starts)
    timers.push(
      setTimeout(() => {
        setShowSparkles(true);
      }, initialDelay + 3000),
    );

    // Phase 2: Text phase starts 1.5s after hands meet (hands meet at 3s)
    timers.push(
      setTimeout(() => {
        setAnimationPhase("text");
      }, initialDelay + 4500),
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [hasSeenLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);


  // Hand positions based on animation phase - returns { x, y, rotate } for framer-motion
  const getHumanHandPosition = () => {
    let pos;
    switch (animationPhase) {
      case "waiting":
        pos = humanHand.start;
        break;
      case "hands-in":
        pos = humanHand.meeting;
        break;
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
        pos = robotHand.meeting;
        break;
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

      {/* Blue Sparkles Effect - triggers when hands meet */}
      <BlueSparkles
        color="#3B82F6"
        opacity={0.8}
        size={2}
        spread={15}
        isActive={showSparkles}
      />



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

      {/* Text Content - slides in from below after hands meet */}
      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 100 }}
        animate={animationPhase === "text" ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
      >
        <div className="mb-8"></div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
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
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
        </div>
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
    </section>
  );
};

export default HeroSection;
