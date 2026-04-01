import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/hero-section/ai-img1.jpg";
import img2 from "../../assets/hero-section/ai-img2.png";
import img3 from "../../assets/hero-section/ai-img3.png";
import img4 from "../../assets/hero-section/ai-img4.png";
import img5 from "../../assets/hero-section/ai-img5.png";
import img6 from "../../assets/hero-section/ai-img6.png";
import img7 from "../../assets/hero-section/ai-img7.png";
import img8 from "../../assets/hero-section/ai-img8.png";
import img9 from "../../assets/hero-section/ai-img9.png";

const features = [
  {
    id: 1,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 3h7v7"/><path d="M14 10 21 3"/></svg>),
    title: "Screen-to-Render",
    description: "Transform screenshots from 3DS Max, SketchUp, Revit, or any 3D software into stunning photorealistic renders instantly.",
    image: img1,
  },
  {
    id: 2,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>),
    title: "AI Upscaling",
    description: "Industry-leading upscaling powered by Magnific Creative and Magnific Precision V2. Transform low-res images into ultra-sharp, professional quality.",
    image: img2,
  },
  {
    id: 3,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>),
    title: "AI Animations",
    description: "Bring your renders to life with cutting-edge video engines: Veo, Kling, Seedance, and Sora. Create cinematic walkthroughs in seconds.",
    image: img3,
  },
  {
    id: 4,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>),
    title: "3D Model Generation",
    description: "Generate 3D models with Meshy AI and Tripo3D integration. Preview, refine, and export directly to your favorite 3D software.",
    image: img4,
  },
  {
    id: 5,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>),
    title: "Smart Inpainting",
    description: "Paint exactly where you want changes. Our AI intelligently understands your intent and seamlessly modifies specific areas.",
    image: img5,
  },
  {
    id: 6,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>),
    title: "Image Composition",
    description: "Paste and position any image onto your canvas. Perfect for adding furniture, people, or decorative elements with natural blending.",
    image: img6,
  },
  {
    id: 7,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>),
    title: "Multi-Image Merge",
    description: "Combine multiple images to add specific objects, textures, or elements. Create complex scenes from simple components.",
    image: img7,
  },
  {
    id: 8,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
    title: "Custom Prompt Presets",
    description: "Save your favorite prompts and styles. Build a library of tailored presets for consistent, brand-aligned results every time.",
    image: img8,
  },
  {
    id: 9,
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>),
    title: "Text-to-Image",
    description: "Create any image from scratch using the world's top AI engines. Describe your vision and watch it materialize in seconds.",
    image: img9,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Mobile/below-xl ──────────────────────────────────────────────────────────
const MOB_CENTER = { width: 280, height: 479 };
const MOB_SIDE   = { width: 270, height: 366 };
const MOB_SLOT   = 280;
const MOB_GAP    = 8;

// ── xl+ (Figma 1600px) ───────────────────────────────────────────────────────
// Slot = 280 (= side card width). Center card (453) centers within the 280 slot
// and overflows ±86px — clipped by the outer overflow-hidden at screen edges.
const XL_CENTER = { width: 453, height: 567 };
const XL_SIDE   = { width: 280, height: 436 };
const XL_SLOT   = 280;
const XL_GAP    = 16;

// ─── FeatureCard ──────────────────────────────────────────────────────────────
const FeatureCard = ({ feature, index, isSliderCard = false, isSliderActive = false, sizeOverride = null, onSelect = null, disableClick = false }) => {
  const [hovered, setHovered] = useState(false);
  const showBorder = hovered || (isSliderCard && isSliderActive);
  const size = isSliderCard
    ? (sizeOverride ?? (isSliderActive ? MOB_CENTER : MOB_SIDE))
    : null;

  return (
    <motion.div
      custom={index}
      initial={isSliderCard ? "visible" : "hidden"}
      whileInView={isSliderCard ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      style={{ perspective: 1000, width: size ? size.width : "100%", height: size ? size.height : "100%", flexShrink: 0 }}
    >
      <div
        className="relative rounded-3xl md:rounded-2xl cursor-pointer transition-all w-full h-full duration-300 overflow-hidden"
        style={{ transform: hovered ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)", padding: "2px", minHeight: size ? size.height : "450px" }}
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
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl md:rounded-2xl flex items-center justify-center pointer-events-none" style={{ opacity: showBorder ? 1 : 0, transition: "opacity 0.3s ease" }}>
          <div
            className="absolute"
            style={{
              background:
                "linear-gradient(90deg,rgba(0,255,255,0) 0%,#8ef5e8 25%,#ff9b7a 50%,#ffdc7a 75%,rgba(0,255,255,0) 100%)",
              height: isSliderCard && isSliderActive ? "420px" : "300px",
              width: isSliderCard && isSliderActive ? "260px" : "200px",
              top: "50%",
              transformOrigin: "top center",
              animation: showBorder ? "gradient-spin 3s linear infinite" : "none",
              zIndex: 0,
            }}
          />
        </div>

        {/* Inner mask */}
        <div className="absolute inset-[2px] rounded-3xl md:rounded-2xl z-10 pointer-events-none" style={{ background: "linear-gradient(180deg,rgba(0,255,255,0.05) 0%,rgba(3,6,18,1) 100%)" }} />

        {/* Content */}
        <div
          className="relative rounded-3xl md:rounded-2xl overflow-hidden h-full z-20 flex flex-col"
          style={{
            padding: isSliderCard && !isSliderActive ? 12 : 24,
            background: "linear-gradient(180deg,rgba(0,255,255,0.1) 0%,rgba(0,255,255,0) 100%)",
            backgroundColor: "rgb(3,6,18)",
            border: showBorder ? "none" : "1px solid rgba(255,255,255,0.08)",
            boxShadow: showBorder ? "0 20px 60px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
            transition: "all 0.2s ease",
          }}
        >
          <div
            className="relative overflow-hidden mb-3 flex-shrink-0 rounded-lg"
            style={{
              height: size
                ? (isSliderActive ? Math.round(size.height * 0.52) : Math.round(size.height * 0.5))
                : 220,
            }}
          >
            <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(0,255,255,0.14) 0%,transparent 70%)", opacity: hovered ? 1 : 0 }} />
          </div>

          <div className="flex items-center justify-center rounded-lg transition-all duration-300 flex-shrink-0" style={{ width: isSliderCard && !isSliderActive ? 24 : 32, height: isSliderCard && !isSliderActive ? 24 : 32, marginBottom: isSliderCard && !isSliderActive ? 6 : 12, background: hovered ? "var(--button-bg)" : "rgba(0,255,255,0.06)", border: "1px solid rgba(0,255,255,0.2)", color: "var(--primary-color)" }}>
            {feature.icon}
          </div>

          <h3 className="font-bold leading-snug flex-shrink-0 md:text-[24px]" style={{ marginBottom: isSliderCard && !isSliderActive ? 4 : 8, fontSize: isSliderCard && !isSliderActive ? 14 : 20, letterSpacing: "-0.01em", color: "var(--text-color)" }}>
            {feature.title}
          </h3>

          <p className="leading-relaxed flex-grow line-clamp-3" style={{ color: "#98A2B3", fontSize: isSliderCard && !isSliderActive ? 11 : 14 }}>
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Shared TabBar ────────────────────────────────────────────────────────────
const TabBar = ({ activeIndex, onSelect, className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`flex gap-2 overflow-x-auto pb-10 scrollbar-hide ${className}`}>
      {features.map((f, i) => {
        const isActive = activeIndex === i;
        const isHovered = hoveredIndex === i;
        const showAnim = isActive || isHovered;

        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onSelect(i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex-shrink-0 relative rounded-lg text-sm font-medium whitespace-nowrap overflow-hidden"
            style={{ padding: "2px" }}
          >
            {showAnim && (
              <>
                <div className="absolute inset-0 rounded-lg flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="absolute" style={{ background: "linear-gradient(90deg,rgba(0,255,255,0) 0%,#8ef5e8 25%,#ff9b7a 50%,#ffdc7a 75%,rgba(0,255,255,0) 100%)", height: "300px", width: "200px", top: "50%", transformOrigin: "top center", animation: "gradient-spin 3s linear infinite" }} />
                </div>
                <div className="absolute inset-[2px] rounded-[6px] z-10 pointer-events-none" style={{ background: "rgb(3,6,18)" }} />
              </>
            )}
            <span
              className="relative z-20 block px-3 py-2 rounded-[6px] transition-colors duration-200"
              style={{
                color: showAnim ? "var(--text-color)" : "rgba(152,162,179,1)",
                background: showAnim ? "rgb(3,6,18)" : "transparent",
                border: showAnim ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {f.title}
            </span>
          </button>
        );
      })}
    </div>
  );
};

// ─── Shared Dots ──────────────────────────────────────────────────────────────
const Dots = ({ activeIndex, onSelect }) => (
  <div className="flex justify-center gap-2 mt-5">
    {features.map((_, i) => (
      <button key={i} type="button" aria-label={`Go to slide ${i + 1}`} onClick={() => onSelect(i)} className="w-2 h-2 rounded-full transition-colors duration-200" style={{ background: activeIndex === i ? "#00FFFF" : "rgba(255,255,255,0.2)" }} />
    ))}
  </div>
);

// ─── AIFeatures ───────────────────────────────────────────────────────────────
// Page load par beech wala card (5th of 9) center mein
const INITIAL_CENTER_INDEX = Math.floor(features.length / 2);

const AIFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_CENTER_INDEX);
  const [isDragging, setIsDragging] = useState(false);

  const mobRef = useRef(null);
  const [mobW, setMobW] = useState(0);

  const xlRef = useRef(null);
  const [xlW, setXlW] = useState(0);

  useEffect(() => {
    const attach = (ref, setter) => {
      if (!ref.current) return () => {};
      const update = () => setter(ref.current.offsetWidth);
      update();
      const ro = new ResizeObserver(update);
      ro.observe(ref.current);
      return () => ro.disconnect();
    };
    const d1 = attach(mobRef, setMobW);
    const d2 = attach(xlRef,  setXlW);
    return () => { d1(); d2(); };
  }, []);

  const mobTrackW = features.length * MOB_SLOT + (features.length - 1) * MOB_GAP;
  const xlTrackW  = features.length * XL_SLOT  + (features.length - 1) * XL_GAP;

  const mobX = mobW > 0 ? (mobW - MOB_SLOT) / 2 - activeIndex * (MOB_SLOT + MOB_GAP) : 0;
  const xlX  = xlW  > 0 ? (xlW  - XL_SLOT)  / 2 - activeIndex * (XL_SLOT  + XL_GAP)  : 0;

  const clampIndex = (i) => Math.max(0, Math.min(features.length - 1, i));
  const mobIndexFromX = (x) => {
    const i = ((mobW - MOB_SLOT) / 2 - x) / (MOB_SLOT + MOB_GAP);
    return clampIndex(Math.round(i));
  };
  const xlIndexFromX = (x) => {
    const i = ((xlW - XL_SLOT) / 2 - x) / (XL_SLOT + XL_GAP);
    return clampIndex(Math.round(i));
  };

  return (
    <section className="py-20 flex flex-col items-center overflow-x-hidden">

      {/* Header — has horizontal padding */}
      <motion.div
        className="text-center w-[1200px] max-w-full mx-auto mb-10 px-6 xl:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-bold leading-tight mb-4 text-[24px] md:text-[56px]" style={{ color: "var(--text-color)", letterSpacing: "-0.02em" }}>
          Powerful AI Features,
          <br />
          <span className="font-bold text-[24px] md:text-[56px] leading-tight" style={{ background: "var(--gradient-bg)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Right Where You Work
          </span>
        </h2>
        <p className="leading-relaxed md:text-[18px] text-[14px]" style={{ color: "rgba(152,162,179,1)" }}>
          Install VizMaker once, use it everywhere. Direct integration means no
          <br className="hidden sm:block" />
          export/import hassles.
        </p>
      </motion.div>

      {/* ── BELOW XL: original mobile slider ────────────────────────────── */}
      <div className="w-full xl:hidden px-6">
        <TabBar activeIndex={activeIndex} onSelect={setActiveIndex} className="justify-start sm:justify-center" />

        <div ref={mobRef} className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center"
            style={{ width: mobTrackW, gap: MOB_GAP }}
            animate={{ x: mobX }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={mobW > 0 ? { left: mobW - mobTrackW, right: 0 } : undefined}
            dragElastic={0.08}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false);
              if (Math.abs(info.offset.x) < 8) return;
              const next = mobIndexFromX(mobX + info.offset.x);
              setActiveIndex(next);
            }}
          >
            {features.map((feature, index) => (
              <div key={feature.id} className="flex-shrink-0 flex justify-center" style={{ width: MOB_SLOT, alignSelf: activeIndex === index ? "flex-start" : undefined, paddingTop: activeIndex === index ? 0 : 28 }}>
                <FeatureCard feature={feature} index={index} isSliderCard isSliderActive={activeIndex === index} onSelect={setActiveIndex} disableClick={isDragging} />
              </div>
            ))}
          </motion.div>
        </div>

        <Dots activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>

      {/* ── XL+: full-bleed slider, zero edge padding ───────────────────── */}
      <div className="hidden xl:block w-full">
        {/* Tabs: centered with some horizontal breathing room */}
        <div className="px-8">
          <TabBar activeIndex={activeIndex} onSelect={setActiveIndex} className="justify-center" />
        </div>

        {/*
          Full viewport width, overflow-hidden.
          Slots = XL_SLOT (280px each). Active card (453px) is centered in its
          280px slot → bleeds ±86px left/right. Outermost cards clip at screen edge.
          Result: exactly 2 side cards visible on each side, no edge gaps.
        */}
        <div ref={xlRef} className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center"
            style={{ width: xlTrackW, gap: XL_GAP }}
            animate={{ x: xlX }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={xlW > 0 ? { left: xlW - xlTrackW, right: 0 } : undefined}
            dragElastic={0.06}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false);
              if (Math.abs(info.offset.x) < 8) return;
              const next = xlIndexFromX(xlX + info.offset.x);
              setActiveIndex(next);
            }}
          >
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              const isAdjacent = index === activeIndex - 1 || index === activeIndex + 1;
              const z = isActive ? 10 : isAdjacent ? 1 : 0;
              return (
                <div
                  key={feature.id}
                  className="flex-shrink-0 flex justify-center relative"
                  style={{
                    width: XL_SLOT,
                    zIndex: z,
                  }}
                >
                  <FeatureCard
                    feature={feature}
                    index={index}
                    isSliderCard
                    isSliderActive={isActive}
                    sizeOverride={isActive ? XL_CENTER : XL_SIDE}
                    onSelect={setActiveIndex}
                    disableClick={isDragging}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        <Dots activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>
    </section>
  );
};

export default AIFeatures;



