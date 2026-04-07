
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/ai-engine1.png";
import img2 from "../../assets/Engines/kling-icon.png";
import img3 from "../../assets/Engines/bytedance-icon.png";
import img4 from "../../assets/Engines/magnific-icon.png";
import img5 from "../../assets/Engines/google-icon.png";
import img6 from "../../assets/Engines/meshy-icon.png";
import img7 from "../../assets/Engines/tripodo-icon.png";
import img8 from "../../assets/Engines/sora-icon.png";
const engines = [
  { id: 1, name: "VEO", category: "Video Engine", icon: img5 },
  { id: 2, name: "Kling", category: "Video Generation", icon: img2 },
  { id: 3, name: "Seedream", category: "Creative AI", icon: img3 },
  { id: 4, name: "Magnific", category: "AI Upscaling", icon: img4 },
  { id: 5, name: "Nano Banana PRO", category: "Image Generation", icon: img5 },
  { id: 6, name: "Meshy AI", category: "3D Generation", icon: img6 },
  { id: 7, name: "Tripo3D", category: "3D Modeling", icon: img7 },
  { id: 8, name: "Sora", category: "Video AI", icon: img8 },
];

const SLIDER_CARD_CENTER = { width: 200, height: 200 };
const SLIDER_CARD_SIDE = { width: 139, height: 142 };
const SLIDER_GAP = 0;
// xl+: center 432×306, left/right 210×180, no gap
const XL_CENTER = { width: 432, height: 306 };
const XL_SIDE = { width: 210, height: 180 };
const XL_BREAKPOINT = 1280;

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const EngineCard = ({
  engine,
  index,
  isSliderCard = false,
  isSliderActive = false,
  sizeOverride = null,
  onSelect = null,
  disableClick = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const showBorderAnimation = hovered || (isSliderCard && isSliderActive);
  const sliderSize = isSliderCard
    ? (sizeOverride ?? (isSliderActive ? SLIDER_CARD_CENTER : SLIDER_CARD_SIDE))
    : null;

  return (
    <motion.div
      custom={index}
      initial={isSliderCard ? "visible" : "hidden"}
      whileInView={isSliderCard ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      style={{
        perspective: 1000,
        flexShrink: 0,
        ...(isSliderCard && { width: "100%", display: "flex", justifyContent: "center" }),
        ...(!isSliderCard && { marginLeft: undefined, marginRight: undefined }),
      }}
      className={!isSliderCard ? "flex-shrink-0 w-[calc(150%-8px)] sm:w-auto" : ""}
    >
      <div
        className="relative cursor-pointer transition-all duration-300 overflow-hidden rounded-3xl"
        style={{
          transform: hovered
            ? "translateY(-5px) scale(1.04)"
            : isSliderCard && isSliderActive
              ? "translateY(-6px) scale(1)"
              : "translateY(0) scale(1)",
          padding: "2px",
          ...(sliderSize && {
            width: sliderSize.width,
            height: sliderSize.height,
          }),
          transition: "all 0.4s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          if (disableClick) return;
          if (isSliderCard && onSelect) onSelect(index);
        }}
        role={isSliderCard ? "button" : undefined}
        tabIndex={isSliderCard ? 0 : undefined}
        onKeyDown={(e) => {
          if (!isSliderCard || !onSelect) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(index);
          }
        }}
      >
        {/* ROTATING ANIMATED GRADIENT BORDER */}
        <div
          className="absolute inset-0 rounded-3xl flex items-center justify-center pointer-events-none"
          style={{ opacity: showBorderAnimation ? 1 : 0, transition: "opacity 0.3s ease" }}
        >
          <div
            className="absolute"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,255,255,0) 0%, #8ef5e8 25%, #ff9b7a 50%, #ffdc7a 75%, rgba(0,255,255,0) 100%)",
              height: "300px",
              width: "150px",
              top: "50%",
              transformOrigin: "top center",
              animation: showBorderAnimation ? "gradient-spin 3s linear infinite" : "none",
              zIndex: 0,
            }}
          />
        </div>

        {/* Inner mask */}
        <div
          className="absolute inset-[2px] rounded-3xl z-10 pointer-events-none"
          style={{ background: "rgb(3,6,18)" }}
        />

        {/* CARD CONTENT */}
        <div
          className="relative rounded-3xl overflow-hidden z-20 flex flex-col items-center justify-center text-center h-full"
          style={{
            padding: isSliderCard && !isSliderActive ? 8 : 16,
            background:
              "linear-gradient(180deg, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0) 100%)",
            backgroundColor: "rgb(3,6,18)",
            border: showBorderAnimation ? "none" : "1px solid rgba(0,255,255,0.2)",
            transition: "all 0.4s ease",
          }}
        >
          <div className="mb-2 flex-shrink-0">
            <img
              src={engine.icon}
              alt={engine.name}
              className="object-contain"
              style={{
                width: isSliderCard && !isSliderActive ? 32 : 48,
                height: isSliderCard && !isSliderActive ? 36 : 52,
              }}
            />
          </div>
          <h3
            className="font-bold text-white flex-shrink-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
            style={{
              fontSize: isSliderCard && !isSliderActive ? 10 : 14,
              letterSpacing: "-0.01em",
            }}
          >
            {engine.name}
          </h3>
          <p
            className="text-xs flex-shrink-0"
            style={{ color: "rgba(152, 162, 179, 1)", fontSize: isSliderCard && !isSliderActive ? 9 : 11 }}
          >
            {engine.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const AIEngines = () => {
  const [activeIndex, setActiveIndex] = useState(() => Math.floor(engines.length / 2));
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [hoveredTabIndex, setHoveredTabIndex] = useState(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const update = () => setSliderWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clampIndex = (i) => Math.max(0, Math.min(engines.length - 1, i));
  const xlMode = sliderWidth >= XL_BREAKPOINT;
  const trackW = xlMode
    ? (engines.length - 1) * XL_SIDE.width + XL_CENTER.width
    : SLIDER_CARD_CENTER.width +
      (engines.length - 1) * SLIDER_CARD_SIDE.width +
      (engines.length - 1) * SLIDER_GAP;
  const xlLeftOffset = activeIndex * XL_SIDE.width;
  const xVal =
    sliderWidth > 0
      ? xlMode
        ? sliderWidth / 2 - (xlLeftOffset + XL_CENTER.width / 2)
        : (sliderWidth - SLIDER_CARD_CENTER.width) / 2 -
          activeIndex * (SLIDER_CARD_SIDE.width + SLIDER_GAP)
      : 0;
  const indexFromX = (x) => {
    if (sliderWidth <= 0) return activeIndex;
    if (xlMode) {
      const i = (sliderWidth / 2 - XL_CENTER.width / 2 - x) / XL_SIDE.width;
      return clampIndex(Math.round(i));
    }
    const i =
      ((sliderWidth - SLIDER_CARD_CENTER.width) / 2 - x) /
      (SLIDER_CARD_SIDE.width + SLIDER_GAP);
    return clampIndex(Math.round(i));
  };
  const slotW = (i) =>
    xlMode
      ? (i === activeIndex ? XL_CENTER.width : XL_SIDE.width)
      : activeIndex === i
        ? SLIDER_CARD_CENTER.width
        : SLIDER_CARD_SIDE.width;

  const sliderMaxH = xlMode ? XL_CENTER.height : SLIDER_CARD_CENTER.height;

  return (
    <section className="py-20 px-6 flex justify-center flex-col items-center">
    <div className="w-full rounded-2xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-bold leading-tight mb-3 text-[24px] md:text-[56px]"
            style={{
              color: "var(--text-color)",
              letterSpacing: "-0.02em",
            }}
          >
            Best-in-Class{" "}
            <span
              style={{
                background: "var(--gradient-bg)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Engines
            </span>
          </h2>
          <p className="leading-relaxed font-medium max-w-2xl mx-auto text-[rgb(152,162,179)] text-[14px] md:text-[18px]">
            VizMaker integrates the world's most advanced AI models, giving you
            <br className="hidden sm:block" />
            access to cutting-edge technology without the complexity.
          </p>
        </motion.div>

        {/* Tabs + slider + dots: below sm same; big screen same slider, xl = 2+1+2 */}
        <div className="w-full max-w-full mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-6 justify-start sm:justify-center scrollbar-hide">
            {engines.map((e, i) => {
              const isActive = activeIndex === i;
              const isHovered = hoveredTabIndex === i;
              return (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setHoveredTabIndex(i)}
                  onMouseLeave={() => setHoveredTabIndex(null)}
                  className="flex-shrink-0 rounded-lg text-sm font-medium whitespace-nowrap"
                >
                  <span
                    className="block px-3 py-2 rounded-[6px] transition-colors duration-200"
                    style={{
                      color: isActive ? "var(--text-color)" : isHovered ? "rgba(220, 224, 235, 1)" : "rgba(152, 162, 179, 1)",
                      background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {e.name}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Slider: below xl = 200 center / 139 sides; xl+ = 2+1+2, center 432×306, sides 210×180, gap */}
          <div ref={sliderRef} className="relative w-full overflow-hidden pt-2">
            <motion.div
              className="flex items-center"
              style={{ width: trackW, gap: xlMode ? 0 : SLIDER_GAP, minHeight: sliderMaxH }}
              animate={{ x: xVal }}
              transition={{ type: "tween", duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={sliderWidth > 0 ? { left: sliderWidth - trackW, right: 0 } : undefined}
              dragElastic={xlMode ? 0.06 : 0.08}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_, info) => {
                setIsDragging(false);
                if (Math.abs(info.offset.x) < 8) return;
                const next = indexFromX(xVal + info.offset.x);
                setActiveIndex(next);
              }}
            >
              {engines.map((engine, index) => (
                <div
                  key={engine.id}
                  className="flex-shrink-0 flex justify-center relative"
                  style={{
                    width: slotW(index),
                    zIndex:
                      activeIndex === index
                        ? 10
                        : index === activeIndex - 1 || index === activeIndex + 1
                          ? 1
                          : 0,
                  }}
                >
                  <EngineCard
                    engine={engine}
                    index={index}
                    isSliderCard
                    isSliderActive={activeIndex === index}
                    sizeOverride={
                      xlMode
                        ? activeIndex === index
                          ? XL_CENTER
                          : XL_SIDE
                        : null
                    }
                    onSelect={setActiveIndex}
                    disableClick={isDragging}
                  />
                </div>
              ))}
            </motion.div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {engines.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? "8px" : "8px",
                  height: "8px",
                  background:
                    activeIndex === i ? "#00FFFF" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEngines;