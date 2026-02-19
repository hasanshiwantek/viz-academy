import React, { useRef, useState, useCallback } from "react";
import beforeImg1 from "../../assets/models/before1Img.jpeg";
import afterImg1 from "../../assets/models/after1Img.jpeg";
import beforeImg2 from "../../assets/models/before2Img.jpeg";
import afterImg2 from "../../assets/models/after2Img.jpeg";
import beforeImg3 from "../../assets/models/before3Img.jpeg";
import afterImg3 from "../../assets/models/after3Img.jpeg";

const ChevronIcon = () => (
  <div className="flex items-center gap-1">
    {/* Left chevron */}
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
      <path d="M8 2L2 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    {/* Right chevron */}
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
      <path d="M2 2L8 8L2 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const BeforeAfterSlider = ({ beforeImg, afterImg, label }) => {
  const [splitPercent, setSplitPercent] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

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

  const onTouchStart = (e) => {
    isDragging.current = true;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    updateSplit(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Label */}
      {label && (
        <p className="text-[24px] font-bold tracking-wide" style={{ color: "rgba(255,255,255,1)" }}>
          {label}
        </p>
      )}

      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden select-none"
        style={{
          borderRadius: "12px",
          height: "550px",
          cursor: "ew-resize",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* AFTER image (full width, behind) */}
        <img
          src={afterImg}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* BEFORE image (clipped to left of split) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${splitPercent}%` }}
        >
          <img
            src={beforeImg}
            alt="Before"
            className="absolute inset-0  h-full object-cover"
            style={{ width: `${100 / (splitPercent / 100)}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
          style={{
            left: `${splitPercent}%`,
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 0 8px rgba(255,255,255,0.4)",
          }}
        />

        {/* Chevron handle */}
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
    </div>
  );
};

const rows = [
  { label: "Architectural", beforeImg: beforeImg1, afterImg: afterImg1 },
  { label: "Interior",      beforeImg: beforeImg2, afterImg: afterImg2 },
  { label: "Concept",       beforeImg: beforeImg3, afterImg: afterImg3 },
];

const ModelCarousel = () => {
  return (
    <section
      className="py-20 px-6  flex flex-col items-center justify-center max-w-[1200px] w-full mx-auto"
      style={{ background: "rgb(3, 6, 18)", fontFamily: "'Inter', sans-serif" }}
    >

      {/* Header */}
      <div className="text-center mb-12 max-w-xl">
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
      </div>

      {/* Sliders */}
      <div
        className="flex flex-col gap-6 w-full"
        style={{ maxWidth: "1200px" }}
      >
        {rows.map((row, i) => (
          <BeforeAfterSlider
            key={i}
            label={row.label}
            beforeImg={row.beforeImg}
            afterImg={row.afterImg}
          />
        ))}
      </div>
    </section>
  );
};

export default ModelCarousel;