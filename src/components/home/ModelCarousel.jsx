import React, { useRef, useState, useCallback, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";

import vRhino from "../../assets/videos/Rhino www_compressed_q27_res50_fps30_nocrop_noaudio.mp4";
import v3ds from "../../assets/videos/www 3ds max_compressed_q27_res50_fps30_nocrop_noaudio.mp4";
import vArchicad from "../../assets/videos/www archicad final_compressed_q27_res50_fps30_nocrop_noaudio.mp4";
import vBlender from "../../assets/videos/www blender_compressed_q27_res50_fps30_nocrop_noaudio.mp4";
import vRevit from "../../assets/videos/www revit _compressed_q27_res50_fps30_nocrop_noaudio.mp4";
import vSketchup from "../../assets/videos/www sketchup final _compressed_q27_res50_fps30_nocrop_noaudio.mp4";

const ChevronIcon = () => (
  <div className="flex items-center gap-1">
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
      <path d="M8 2L2 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
      <path d="M2 2L8 8L2 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 15, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const VideoLayer = forwardRef(({ src, className, style }, ref) => (
  <video
    ref={ref}
    src={src}
    className={className}
    style={style}
    muted
    playsInline
    preload="auto"
    controls={false}
    draggable={false}
  />
));
VideoLayer.displayName = "VideoLayer";

const BeforeAfterSlider = ({ beforeVideo, afterVideo, label, index, shouldPlay }) => {
  const [splitPercent, setSplitPercent] = useState(50);
  const containerRef = useRef(null);
  const beforeVidRef = useRef(null);
  const afterVidRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (!shouldPlay) return;
    const run = () => {
      beforeVidRef.current?.play().catch(() => {});
      afterVidRef.current?.play().catch(() => {});
    };
    run();
  }, [shouldPlay]);
  const updateSplit = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 1), 100);
    setSplitPercent(percent);
  }, []);

  const onMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    updateSplit(e.clientX);
  }, [updateSplit]);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }, [onMouseMove]);

  const onTouchStart = () => { isDragging.current = true; };
  const onTouchMove = (e) => { if (!isDragging.current) return; updateSplit(e.touches[0].clientX); };
  const onTouchEnd = () => { isDragging.current = false; };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      className="w-full flex flex-col gap-8"
      style={{ perspective: 1200 }}
    >
      {label && (
        <p className="text-[24px] font-bold tracking-wide" style={{ color: "rgba(255,255,255,1)" }}>
          {label}
        </p>
      )}

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden select-none"
        style={{ borderRadius: "12px", height: "550px", cursor: "ew-resize" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <VideoLayer
          ref={afterVidRef}
          src={afterVideo}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${splitPercent}%` }}>
          <VideoLayer
            ref={beforeVidRef}
            src={beforeVideo}
            className="absolute inset-0 h-full object-cover pointer-events-none"
            style={{ width: `${100 / (splitPercent / 100)}%`, maxWidth: "none" }}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
          style={{
            left: `${splitPercent}%`,
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 0 8px rgba(255,255,255,0.4)",
          }}
        />

        <div
          className="absolute top-1/2 flex items-center justify-center rounded-full"
          style={{
            left: `${splitPercent}%`,
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.4)",
            cursor: "ew-resize",
            zIndex: 10,
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <ChevronIcon />
        </div>
      </div>
    </motion.div>
  );
};

const rows = [
  { label: "Architectural", beforeVideo: vRhino, afterVideo: v3ds },
  { label: "Interior",      beforeVideo: vArchicad, afterVideo: vBlender },
  { label: "Concept",       beforeVideo: vRevit, afterVideo: vSketchup },
];

const ModelCarousel = () => {
  const slidersRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const hasTriggeredPlay = useRef(false);

  useEffect(() => {
    const el = slidersRef.current;
    if (!el) return;

    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (hasTriggeredPlay.current || !entry.isIntersecting) return;
        const br = entry.boundingClientRect;
        const ir = entry.intersectionRect;
        const heightFrac = br.height > 0 ? ir.height / br.height : 0;
        const vh = typeof window !== "undefined" ? window.innerHeight : 800;
        const blockTallerThanViewport = br.height > vh * 1.1;
        const maxRatio = br.height > 0 ? Math.min(1, vh / br.height) : 0;
        const relaxedTall =
          blockTallerThanViewport &&
          entry.intersectionRatio >= Math.min(0.5, maxRatio) * 0.9;
        const halfInView =
          entry.intersectionRatio >= 0.5 ||
          heightFrac >= 0.5 ||
          relaxedTall;
        if (halfInView) {
          hasTriggeredPlay.current = true;
          setShouldPlay(true);
        }
      },
      { threshold: thresholds }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="py-20 px-6 flex flex-col items-center justify-center max-w-[1200px] w-full mx-auto"
      style={{ background: "rgb(3, 6, 18)", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          className="font-bold leading-tight mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 56px)", color: "#ffffff", letterSpacing: "-0.02em" }}
        >
          From Model to{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00ffff 0%, #ff7e57 32%, #ffc457 60%, #00b2b2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
            }}
          >
            Visual in Seconds
          </span>
        </h2>
        <p style={{ fontSize: "18px", color: "rgba(152, 162, 179, 1)" }}>
          Simple setup, powerful results. No technical expertise required.
        </p>
      </motion.div>

      {/* Sliders — play videos once when ≥50% of this block is in view */}
      <div
        ref={slidersRef}
        className="flex flex-col gap-6 w-full"
        style={{ maxWidth: "1200px" }}
      >
        {rows.map((row, i) => (
          <BeforeAfterSlider
            key={i}
            index={i}
            label={row.label}
            beforeVideo={row.beforeVideo}
            afterVideo={row.afterVideo}
            shouldPlay={shouldPlay}
          />
        ))}
      </div>
    </section>
  );
};

export default ModelCarousel;
