import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/ai-engine1.png";
import img2 from "../../assets/ai-engine2.png";
import img3 from "../../assets/ai-engine3.png";
import img4 from "../../assets/ai-engine4.jpg";
import img5 from "../../assets/ai-engine5.png";
import img6 from "../../assets/ai-engine6.jpg";
import img7 from "../../assets/ai-engine7.png";
import img8 from "../../assets/ai-engine8.png";

const engines = [
  { id: 1, name: "Nano Banana PRO", category: "Image Generation", icon: img1 },
  { id: 2, name: "Kling", category: "Video Generation", icon: img2 },
  { id: 3, name: "Seedream", category: "Creative AI", icon: img3 },
  { id: 4, name: "Magnific", category: "AI Upscaling", icon: img4 },
  { id: 5, name: "VEO", category: "Video Engine", icon: img5 },
  { id: 6, name: "Meshy AI", category: "3D Generation", icon: img6 },
  { id: 7, name: "Tripo3D", category: "3D Modeling", icon: img7 },
  { id: 8, name: "Sora", category: "Video AI", icon: img8 },
];

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

const EngineCard = ({ engine, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      style={{ perspective: 1000 }}
      // Mobile pe fixed width taki 2 cards ek baar dikhein
      className="flex-shrink-0  w-[calc(150%-8px)] sm:w-auto"
    >
      <div
        className="relative cursor-pointer transition-all duration-300 overflow-hidden rounded-3xl"
        style={{
          transform: hovered
            ? "translateY(-5px) scale(1.04)"
            : "translateY(0) scale(1)",
          padding: "2px",
          transition: "all 0.4s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ROTATING ANIMATED GRADIENT BORDER */}
        <div
          className="absolute inset-0 rounded-3xl flex items-center justify-center pointer-events-none"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease" }}
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
              animation: hovered ? "gradient-spin 3s linear infinite" : "none",
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
          className="relative rounded-3xl overflow-hidden p-6 md:h-full h-[180px] w-[186px] sm:w-full  z-20 flex flex-col items-center justify-center text-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0) 100%)",
            backgroundColor: "rgb(3,6,18)",
            border: hovered ? "none" : "1px solid rgba(0,255,255,0.2)",
            transition: "all 0.4s ease",
          }}
        >
          <div
            className="mb-3 transition-all duration-300"
            // style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
          >
            <img
              src={engine.icon}
              alt={engine.name}
              className="w-14 h-16 object-contain"
            />
          </div>
          <h3
            className="font-bold mb-1 text-white"
            style={{ fontSize: "16px", letterSpacing: "-0.01em" }}
          >
            {engine.name}
          </h3>
          <p className="text-xs" style={{ color: "rgba(152, 162, 179, 1)" }}>
            {engine.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const AIEngines = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll hone par active dot update karo
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / engines.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="py-20 px-6 flex justify-center flex-col items-center">
      <div className="w-full max-w-[1200px] rounded-2xl">
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
            <br />
            access to cutting-edge technology without the complexity.
          </p>
        </motion.div>

        {/* 
          Mobile: horizontal scroll slider (2 cards visible)
          sm+: normal 2-col grid
          lg+: 4-col grid
        */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
            sm:grid sm:grid-cols-2 sm:overflow-visible  sm:gap-8 
            lg:grid-cols-4  
          "
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE
          }}
        >
          {engines.map((engine, index) => (
            <div key={engine.id} className="snap-start">
              <EngineCard engine={engine} index={index} />
            </div>
          ))}
        </div>

        {/* Dots — sirf mobile pe dikhein */}
        <div className="flex justify-center gap-2 mt-5 sm:hidden">
          {engines.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = el.scrollWidth / engines.length;
                el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                setActiveIndex(i);
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? "20px" : "8px",
                height: "8px",
                background:
                  activeIndex === i
                    ? "var(--primary-color, #8ef5e8)"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEngines;
