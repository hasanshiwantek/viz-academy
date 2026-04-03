import React from "react";
import { motion, useReducedMotion, useAnimationControls } from "framer-motion";
import quality1 from "../../assets/quality/quality1.svg";
import quality2 from "../../assets/quality/quality2.svg";
import quality3 from "../../assets/quality/quality3.svg";
import quality4 from "../../assets/quality/quality4.svg";
import quality5 from "../../assets/quality/quality5.svg";
import quality6 from "../../assets/quality/quality6.svg";
import quality7 from "../../assets/quality/quality7.svg";
import quality8 from "../../assets/quality/quality8.svg";
import quality9 from "../../assets/quality/quality9.svg";
import quality10 from "../../assets/quality/quality10.svg";

const QUALITY_IMAGES = [
  quality1,
  quality2,
  quality3,
  quality4,
  quality5,
  quality6,
  quality7,
  quality8,
  quality9,
  quality10,
];

const CARD_W = 278;
const CARD_H = 350;
const GAP = 24;
const MOB_W = 79;
const MOB_H = 110;
const MOB_GAP = 12;

const Card = ({ src, style, className = "", mobile = false }) => {
  const w = mobile ? MOB_W : CARD_W;
  const h = mobile ? MOB_H : CARD_H;
  return (
    <div
      className={`shrink-0 rounded-2xl overflow-hidden ${className}`}
      style={{ width: w, height: h, ...style }}
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

/** Same 3 images stacked twice; translate by one block height for seamless loop */
const InfiniteImageColumn = ({ sources, mobile = false, durationSec = 22, reverse = false }) => {
  const reduceMotion = useReducedMotion();
  const h = mobile ? MOB_H : CARD_H;
  const g = mobile ? MOB_GAP : GAP;
  const w = mobile ? MOB_W : CARD_W;
  const blockH = h * 3 + g * 2;
  const step = blockH + g;
  const viewH = blockH;
  const controls = useAnimationControls()

  const renderStrip = (copyKey) => (
    <div className="flex flex-col shrink-0" style={{ gap: g }}>
      {sources.map((src, i) => (
        <Card key={`${copyKey}-${i}`} src={src} mobile={mobile} />
      ))}
    </div>
  );

  if (reduceMotion) {
    return (
      <div className="shrink-0 overflow-hidden" style={{ width: w, height: viewH }}>
        {renderStrip("a")}
      </div>
    );
  }

  const fromY = reverse ? -step : 0;
  const toY = reverse ? 0 : -step;
  const yRef = React.useRef(fromY)

  React.useEffect(() => {
    controls.start({
      y: [fromY, toY],
      transition: {
        duration: durationSec,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, []);
  return (
    <div className="shrink-0 overflow-hidden" style={{ width: w, height: viewH }}>
      <motion.div
        className="flex flex-col will-change-transform"
        style={{ gap: g }}
        initial={{ y: fromY }}
        animate={controls}
        onUpdate={(latest) => {
          yRef.current = latest.y
        }}
        onHoverStart={() => controls.stop()}
        // onHoverEnd={() => {
        //   const remaining = Math.abs(toY - yRef.current)
        //   const total = Math.abs(toY - fromY)
        //   const duration = durationSec * (remaining / total)

        //   controls.start({
        //     y: [yRef.current, toY],
        //     transition: {
        //       duration,
        //       repeat: Infinity,
        //       ease: "linear",
        //     },
        //   })
        // }}
        onHoverEnd={() => {
          const remaining = Math.abs(toY - yRef.current)
          const total = Math.abs(toY - fromY)
          const duration = durationSec * (remaining / total)

          controls.start({
            y: toY,
            transition: {
              duration,
              ease: "linear",
              onComplete: () => {
                controls.set({ y: fromY })
                controls.start({
                  y: toY,
                  transition: {
                    duration: durationSec,
                    repeat: Infinity,
                    ease: "linear"
                  }
                })
              }
            }
          })
        }}

      >
        {renderStrip("a")}
        {renderStrip("b")}
      </motion.div>
    </div>
  );
};

const QualityPreview = () => {
  const centerH = CARD_H * 3 + GAP * 2;
  const sideH = CARD_H * 2 + GAP;
  const sideOffset = (centerH - sideH) / 2;
  const mobCenterH = MOB_H * 3 + MOB_GAP * 2;
  const mobSideH = MOB_H * 2 + MOB_GAP;
  const mobSideOffset = (mobCenterH - mobSideH) / 2;

  return (
    <section
      className="py-20 px-6 flex flex-col items-center overflow-hidden"
      style={{ background: "rgb(3, 6, 18)" }}
    >
      <motion.h2
        className="text-center font-bold leading-tight mb-16"
        style={{ fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.02em" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span style={{ color: "#ffffff" }}>Output Quality </span>
        <span
          style={{
            background:
              "linear-gradient(89.43deg, #00FFFF 10.3%, #FF7E57 37.33%, #FFC457 61.09%, #00B2B2 95.49%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          }}
        >
          Preview
        </span>
      </motion.h2>

      {/* Below sm: 79×110 blocks */}
      <div className="relative flex items-start justify-center w-full overflow-hidden block sm:hidden">
        <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[18%]" style={{ background: "linear-gradient(to right, rgb(3,6,18) 0%, transparent 100%)" }} />
        <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[18%]" style={{ background: "linear-gradient(to left, rgb(3,6,18) 0%, transparent 100%)" }} />
        <div className="flex items-start" style={{ gap: MOB_GAP }}>
          <div className="flex flex-col shrink-0" style={{ gap: MOB_GAP, opacity: 0.4, marginTop: mobSideOffset }}>
            <Card src={QUALITY_IMAGES[0]} mobile />
            <Card src={QUALITY_IMAGES[1]} mobile />
          </div>
          <div className="flex shrink-0" style={{ gap: MOB_GAP }}>
            <InfiniteImageColumn
              mobile
              durationSec={16}
              sources={[QUALITY_IMAGES[2], QUALITY_IMAGES[3], QUALITY_IMAGES[4]]}
            />
            <InfiniteImageColumn
              mobile
              durationSec={18}
              reverse
              sources={[QUALITY_IMAGES[5], QUALITY_IMAGES[6], QUALITY_IMAGES[7]]}
            />
          </div>
          <div className="flex flex-col shrink-0" style={{ gap: MOB_GAP, opacity: 0.4, marginTop: mobSideOffset }}>
            <Card src={QUALITY_IMAGES[8]} mobile />
            <Card src={QUALITY_IMAGES[9]} mobile />
          </div>
        </div>
      </div>

      {/* sm and up: 278×350 blocks */}
      <div className="relative flex items-start justify-center w-full overflow-hidden hidden sm:flex">
        <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none" style={{ width: "18%", background: "linear-gradient(to right, rgb(3,6,18) 0%, transparent 100%)" }} />
        <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none" style={{ width: "18%", background: "linear-gradient(to left, rgb(3,6,18) 0%, transparent 100%)" }} />
        <div className="flex items-start" style={{ gap: GAP }}>
          <div className="flex flex-col shrink-0" style={{ gap: GAP, opacity: 0.4, marginTop: sideOffset }}>
            <Card src={QUALITY_IMAGES[0]} />
            <Card src={QUALITY_IMAGES[1]} />
          </div>
          <div className="flex shrink-0" style={{ gap: GAP }}>
            <InfiniteImageColumn
              durationSec={24}
              sources={[QUALITY_IMAGES[2], QUALITY_IMAGES[3], QUALITY_IMAGES[4]]}
            />
            <InfiniteImageColumn
              durationSec={28}
              reverse
              sources={[QUALITY_IMAGES[5], QUALITY_IMAGES[6], QUALITY_IMAGES[7]]}
            />
          </div>
          <div className="flex flex-col shrink-0" style={{ gap: GAP, opacity: 0.4, marginTop: sideOffset }}>
            <Card src={QUALITY_IMAGES[8]} />
            <Card src={QUALITY_IMAGES[9]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPreview;