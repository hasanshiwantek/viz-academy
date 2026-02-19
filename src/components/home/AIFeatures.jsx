import React, { useState } from "react";
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
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M14 3h7v7" />
        <path d="M14 10 21 3" />
      </svg>
    ),
    title: "Screen-to-Render",
    description: "Transform screenshots from 3DS Max, SketchUp, Revit, or any 3D software into stunning photorealistic renders instantly.",
    image: img1,
  },
  {
    id: 2,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    title: "AI Upscaling",
    description: "Industry-leading upscaling powered by Magnific Creative and Magnific Precision V2. Transform low-res images into ultra-sharp, professional quality.",
    image: img2,
  },
  {
    id: 3,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "AI Animations",
    description: "Bring your renders to life with cutting-edge video engines: Veo, Kling, Seedance, and Sora. Create cinematic walkthroughs in seconds.",
    image: img3,
  },
  {
    id: 4,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "3D Model Generation",
    description: "Generate 3D models with Meshy AI and Tripo3D integration. Preview, refine, and export directly to your favorite 3D software.",
    image: img4,
  },
  {
    id: 5,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "Smart Inpainting",
    description: "Paint exactly where you want changes. Our AI intelligently understands your intent and seamlessly modifies specific areas.",
    image: img5,
  },
  {
    id: 6,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Image Composition",
    description: "Paste and position any image onto your canvas. Perfect for adding furniture, people, or decorative elements with natural blending.",
    image: img6,
  },
  {
    id: 7,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "Multi-Image Merge",
    description: "Combine multiple images to add specific objects, textures, or elements. Create complex scenes from simple components.",
    image: img7,
  },
  {
    id: 8,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Custom Prompt Presets",
    description: "Save your favorite prompts and styles. Build a library of tailored presets for consistent, brand-aligned results every time.",
    image: img8,
  },
  {
    id: 9,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Text-to-Image",
    description: "Create any image from scratch using the world's top AI engines. Describe your vision and watch it materialize in seconds.",
    image: img9,
  },
];

// 3D fade-in variant — har card apni row ke hisaab se delay lega
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 20,
    scale: 0.95,
  },
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

const FeatureCard = ({ feature, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      style={{ perspective: 1000, width: "100%", height: "100%" }}
    >
      <div
        className="relative rounded-2xl cursor-pointer transition-all md:w-[90%] xl:w-[380px] w-full h-full duration-300 overflow-hidden"
        style={{
          transform: hovered ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
          padding: "2px",
          minHeight: "450px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ROTATING ANIMATED GRADIENT BORDER */}
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="absolute"
            style={{
              background: "linear-gradient(90deg, rgba(0,255,255,0) 0%, #8ef5e8 25%, #ff9b7a 50%, #ffdc7a 75%, rgba(0,255,255,0) 100%)",
              height: "300px",
              width: "200px",
              top: "50%",
              transformOrigin: "top center",
              animation: hovered ? "gradient-spin 3s linear infinite" : "none",
              zIndex: 0,
            }}
          />
        </div>

        {/* Inner mask */}
        <div
          className="absolute inset-[2px] rounded-2xl z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0,255,255,0.05) 0%, rgba(3,6,18,1) 100%)",
          }}
        />

        {/* CARD CONTENT */}
        <div
          className="relative rounded-2xl overflow-hidden p-6 h-full z-20 flex flex-col"
          style={{
            background: "linear-gradient(180deg, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0) 100%)",
            backgroundColor: "rgb(3,6,18)",
            border: hovered ? "none" : "1px solid rgba(255,255,255,0.08)",
            boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
            transition: "all 0.2s ease",
          }}
        >
          {/* Image */}
          <div className="relative overflow-hidden h-40 mb-4 flex-shrink-0">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover transition-transform duration-500 rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(0,255,255,0.14) 0%, transparent 70%)",
                opacity: hovered ? 1 : 0,
              }}
            />
          </div>

          {/* Icon badge */}
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg mb-3 transition-all duration-300 flex-shrink-0"
            style={{
              background: hovered ? "var(--button-bg)" : "rgba(0,255,255,0.06)",
              border: "1px solid rgba(0,255,255,0.2)",
              color: "var(--primary-color)",
            }}
          >
            {feature.icon}
          </div>

          {/* Title */}
          <h3
            className="font-bold mb-2 leading-snug flex-shrink-0"
            style={{
              fontSize: "24px",
              letterSpacing: "-0.01em",
              color: "var(--text-color)",
            }}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p className="leading-relaxed text-[16px] flex-grow" style={{ color: "#98A2B3" }}>
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const AIFeatures = () => {
  return (
    <section className="py-20 px-6 flex justify-center flex-col items-center">
      {/* Header */}
      <motion.div
        className="text-center w-[1200px] max-w-full mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          className="font-bold leading-tight mb-4 text-[56px]"
          style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            color: "var(--text-color)",
            letterSpacing: "-0.02em",
          }}
        >
          Powerful AI Features,
          <br />
          <span
            className="font-bold text-[56px] leading-tight"
            style={{
              background: "var(--gradient-bg)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Right Where You Work
          </span>
        </h2>
        <p className="leading-relaxed" style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)" }}>
          Install VizMaker once, use it everywhere. Direct integration means no
          <br />
          export/import hassles.
        </p>
      </motion.div>

      {/* 3×3 Grid */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-[1200px] max-w-full mx-auto place-items-center auto-rows-fr">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AIFeatures;