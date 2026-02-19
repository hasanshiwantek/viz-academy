import React, { useRef, useEffect } from "react";
import backgroundimg from "../../assets/hero-section/reviewBG.PNG"

const reviews = [
  { id: 1, stars: 5, rating: "4.7 out of 5 stars", text: "Many users appreciate platforms that are easy to navigate, allowing both recruiters and candidates", name: "Ronald Richards", avatar: "https://i.pravatar.cc/40?img=11" },
  { id: 2, stars: 5, rating: "4.7 out of 5 stars", text: "Many users appreciate platforms that are easy to navigate, allowing both recruiters and candidates", name: "Ronald Richards", avatar: "https://i.pravatar.cc/40?img=12" },
  { id: 3, stars: 5, rating: "4.7 out of 5 stars", text: "Many users appreciate platforms that are easy to navigate, allowing both recruiters and candidates", name: "Ronald Richards", avatar: "https://i.pravatar.cc/40?img=13" },
  { id: 4, stars: 5, rating: "4.7 out of 5 stars", text: "Many users appreciate platforms that are easy to navigate, allowing both recruiters and candidates", name: "Ronald Richards", avatar: "https://i.pravatar.cc/40?img=14" },
  { id: 5, stars: 5, rating: "4.7 out of 5 stars", text: "Many users appreciate platforms that are easy to navigate, allowing both recruiters and candidates", name: "Ronald Richards", avatar: "https://i.pravatar.cc/40?img=15" },
  { id: 6, stars: 3, rating: "4.7 out of 5 stars", text: "Many users appreciate platforms that are easy to navigate, allowing both recruiters and candidates", name: "Ronald Richards", avatar: "https://i.pravatar.cc/40?img=16" },
];

const avatars = [
  "https://i.pravatar.cc/40?img=11",
  "https://i.pravatar.cc/40?img=12",
  "https://i.pravatar.cc/40?img=13",
  "https://i.pravatar.cc/40?img=14",
];

const CARD_WIDTH = 296;
const SINGLE_SET = reviews.length * CARD_WIDTH;
const AUTO_SPEED = 1.2; // px per frame

const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#FFC457" : "rgba(255,196,87,0.25)"} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TestimonialCard = ({ review }) => (
  <div
    className="flex-shrink-0 rounded-2xl p-5 flex flex-col gap-3 select-none"
    style={{
      width: "306px",
      background: "linear-gradient(180deg, rgba(0,255,255,0.10) 0%, rgba(0,255,255,0) 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(8px)",
    }}
  >
    <div className="flex items-center gap-2">
      <div className="flex gap-[2px]">
        {[1, 2, 3, 4, 5].map((s) => (
          <StarIcon key={s} filled={s <= review.stars} />
        ))}
      </div>
      <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
        {review.rating}
      </span>
    </div>
    <p className="text-[16px] leading-relaxed flex-grow" style={{ color: "rgba(208, 213, 221, 1)" }}>
      {review.text}
    </p>
    <div className="flex items-center gap-3 mt-1">
      <img src={review.avatar} alt={review.name} className="w-9 h-9 rounded-full object-cover" style={{ border: "1.5px solid rgba(0,255,255,0.3)" }} />
      <span className="font-semibold text-sm" style={{ color: "#ffffff" }}>{review.name}</span>
    </div>
  </div>
);

const DraggableRow = ({ items, initialOffset, allowDirection }) => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const offset = useRef(initialOffset ?? -SINGLE_SET);
  const isDragging = useRef(false);
  const isHovered = useRef(false); // ✅ hover state
  const lastX = useRef(0);
  const vel = useRef(0);
  const rafRef = useRef(null);

  const wrap = (val) => {
    if (val > -SINGLE_SET * 0.5) val -= SINGLE_SET;
    if (val < -SINGLE_SET * 2.5) val += SINGLE_SET;
    return val;
  };

  const applyTransform = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offset.current}px)`;
    }
  };

  // ✅ Auto play loop
  const startAutoPlay = () => {
    cancelAnimationFrame(rafRef.current);
    const tick = () => {
      if (!isDragging.current && !isHovered.current) {
        // Row 1 (left) auto scrolls left (negative), Row 2 (right) auto scrolls right (positive)
        const autoVel = allowDirection === "left" ? -AUTO_SPEED : AUTO_SPEED;
        offset.current = wrap(offset.current + autoVel);
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const startMomentum = () => {
    cancelAnimationFrame(rafRef.current);
    const tick = () => {
      if (Math.abs(vel.current) < 0.3) {
        vel.current = 0;
        // ✅ Resume auto play after momentum dies
        startAutoPlay();
        return;
      }
      vel.current *= 0.92;
      offset.current = wrap(offset.current + vel.current);
      applyTransform();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const onMouseEnter = () => {
    isHovered.current = true; // ✅ pause auto play
  };

  const onMouseLeave = () => {
    isHovered.current = false; // ✅ resume auto play
    if (!isDragging.current) return;
    isDragging.current = false;
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grab";
    startMomentum();
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    lastX.current = e.clientX;
    vel.current = 0;
    cancelAnimationFrame(rafRef.current);
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;

    if (allowDirection === "left" && dx > 0) return;
    if (allowDirection === "right" && dx < 0) return;

    vel.current = dx;
    offset.current = wrap(offset.current + dx);
    applyTransform();
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grab";
    startMomentum();
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    lastX.current = e.touches[0].clientX;
    vel.current = 0;
    cancelAnimationFrame(rafRef.current);
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastX.current;
    lastX.current = e.touches[0].clientX;

    if (allowDirection === "left" && dx > 0) return;
    if (allowDirection === "right" && dx < 0) return;

    vel.current = dx;
    offset.current = wrap(offset.current + dx);
    applyTransform();
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    startMomentum();
  };

  useEffect(() => {
    applyTransform();
    startAutoPlay(); // ✅ start auto play on mount
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const tripled = [...items, ...items, ...items];

  return (
    <div
      ref={wrapperRef}
      className="w-full overflow-hidden"
      style={{ cursor: "grab" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={trackRef}
        className="flex gap-8"
        style={{ willChange: "transform", width: "15552px" }}
      >
        {tripled.map((review, i) => (
          <TestimonialCard key={`${review.id}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
};

const HappyUsers = () => {
  const row2Items = [...reviews].reverse();

  return (
    <section
      className="py-20 max-w-[1552px] flex flex-col items-center border-[1px] border-gray-600 rounded-[32px] mx-auto overflow-hidden relative justify-center"
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Teal glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          width: "700px",
          height: "350px",
          background: "radial-gradient(ellipse at 50% 100%, rgba(0,255,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Left fade */}
      <div className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(90deg, rgb(3,6,18) 0%, transparent 100%)" }} />
      {/* Right fade */}
      <div className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(-90deg, rgb(3,6,18) 0%, transparent 100%)" }} />

      {/* Header */}
      <div className="text-center mb-12 px-6 relative z-20">
        <h2
          className="font-bold leading-tight"
          style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "#ffffff", letterSpacing: "-0.02em" }}
        >
          Hear From Our
        </h2>
        <h2
          className="font-bold leading-tight"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            letterSpacing: "-0.02em",
            background: "linear-gradient(90deg, #00ffff 0%, #ff7e57 32%, #ffc457 60%, #00b2b2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Happy Users
        </h2>
      </div>

      {/* Row 1 — auto scrolls left, drag left only */}
      <div className="max-w-[1352px] w-full mb-4 relative z-0">
        <DraggableRow items={reviews} initialOffset={-SINGLE_SET} allowDirection="left" />
      </div>

      {/* Row 2 — auto scrolls right, drag right only */}
      <div className="max-w-[1352px] w-full mb-12 relative z-0">
        <DraggableRow items={row2Items} initialOffset={-SINGLE_SET * 1.5} allowDirection="right" />
      </div>

      {/* Bottom avatars */}
      <div
        className="flex items-center px-5 py-3 rounded-full relative z-20"
        style={{
          background: "rgba(255, 255, 255, 0.3)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="flex">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-9 h-9 rounded-full object-cover"
              style={{
                marginLeft: i === 0 ? 0 : "-10px",
                border: "1px solid rgba(255, 255, 255, 1)",
                zIndex: avatars.length - i,
                position: "relative",
              }}
            />
          ))}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
            style={{
              marginLeft: "-10px",
              background: "linear-gradient(135deg, #00ffff, #00b2b2)",
              color: "rgb(3,6,18)",
              border: "1px solid rgb(3,6,18)",
              position: "relative",
              zIndex: 0,
            }}
          >
            +
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyUsers;