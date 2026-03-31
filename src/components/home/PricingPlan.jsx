import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const SLIDER_CARD_CENTER = { width: 270, height: 554 };
const SLIDER_CARD_SIDE = { width: 230, height: 455 };
const SLIDER_GAP = 0;

const plans = [
  {
    id: "free",
    name: "FREE Trial",
    subtitle: "Best for personal use.",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Employee directory",
      "Task management",
      "Calendar integration",
      "File storage",
      "Communication tools",
      "Reporting and analytics",
    ],
  },
  {
    id: "standard",
    name: "Standard Plan",
    subtitle: "Best for personal use.",
    price: { monthly: 14.99, yearly: 9.99 },
    features: [
      "Employee directory",
      "Task management",
      "Calendar integration",
      "File storage",
      "Communication tools",
      "Reporting and analytics",
    ],
  },
  {
    id: "professional",
    name: "Professional Plan",
    subtitle: "Best for personal use.",
    price: { monthly: 29.99, yearly: 19.99 },
    features: [
      "Employee directory",
      "Task management",
      "Calendar integration",
      "File storage",
      "Communication tools",
      "Reporting and analytics",
    ],
  },
];

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const LogoIcon = ({ active }) => (
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
    style={{
      border: `2px solid ${active ? "rgba(0,255,255,0.6)" : "rgba(255,255,255,0.15)"}`,
      background: active
        ? "linear-gradient(135deg, rgba(0,255,255,0.2), rgba(0,178,178,0.1))"
        : "rgba(255,255,255,0.05)",
    }}
  >
    <div
      className="w-5 h-5 rounded-full transition-all duration-300"
      style={{
        background: active
          ? "linear-gradient(135deg, #00ffff, #00b2b2)"
          : "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.1))",
        boxShadow: active ? "0 0 10px rgba(0,255,255,0.7)" : "none",
      }}
    />
  </div>
);

const PricingCard = ({
  plan,
  isActive,
  billing,
  setActivePlan,
  isSliderCard = false,
  isSliderActive = false,
}) => {
  const price = billing === "monthly" ? plan.price.monthly : plan.price.yearly;
  const active = isSliderCard ? isSliderActive : isActive;
  const sliderSize = isSliderCard
    ? (isSliderActive ? SLIDER_CARD_CENTER : SLIDER_CARD_SIDE)
    : null;

  return (
    /* Outer wrapper — clips the spinning beam to a rounded rect */
    <div
      onMouseEnter={() => !isSliderCard && setActivePlan(plan.id)}
      onMouseLeave={() => !isSliderCard && setActivePlan(null)}
      className="relative rounded-2xl cursor-pointer"
      style={{
        flex: isSliderCard ? undefined : 1,
        padding: "2px",
        overflow: "hidden",
        transform:
          isSliderCard && isSliderActive
            ? "translateY(0) scale(1)"
            : active
              ? "translateY(-6px) scale(1.02)"
              : "translateY(0) scale(1)",
        transition: "transform 0.3s ease",
        zIndex: active ? 2 : 1,
        ...(sliderSize && {
          width: sliderSize.width,
          height: sliderSize.height,
          boxSizing: "border-box",
        }),
      }}
    >
      {/* ── SPINNING CONIC BORDER (active) ──────────────────────────── */}
      {active ? (
        <div
          className="absolute pointer-events-none"
          style={{
            /* Make it a square centred on the card so the conic gradient
               sweeps evenly around all four sides */
            inset: "-100%",
            background:
              "conic-gradient(from 0deg, transparent 0deg, #8ef5e8 60deg, #00ffff 90deg, #ff9b7a 150deg, #ffdc7a 210deg, transparent 270deg)",
            animation: "pricingBorderSpin 2.5s linear infinite",
          }}
        />
      ) : (
        /* ── STATIC BORDER (inactive) ───────────────────────────────── */
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        />
      )}

      {/* ── INNER CARD (sits on top, covers the spinner except the 2px rim) */}
      <div
        className="relative rounded-2xl h-full flex flex-col overflow-hidden"
        style={{
          padding: isSliderCard && !isSliderActive ? 12 : 28,
          backgroundColor: "rgb(10, 14, 30)",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: isSliderCard && !isSliderActive ? 8 : 16 }}>
          <LogoIcon active={active} />
        </div>

        {/* Name */}
        <h3
          className="font-medium mb-1 leading-tight"
          style={{
            color: "#ffffff",
            fontSize: isSliderCard && !isSliderActive ? 16 : 24,
          }}
        >
          {plan.name}
        </h3>

        {/* Subtitle */}
        <p
          className="mb-3"
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: isSliderCard && !isSliderActive ? 11 : 14,
          }}
        >
          {plan.subtitle}
        </p>

        {/* Divider */}
        <div
          className="transition-all duration-300"
          style={{
            height: "1px",
            marginBottom: isSliderCard && !isSliderActive ? 8 : 20,
            background: active
              ? "linear-gradient(90deg, rgba(0,255,255,0.5), transparent)"
              : "rgba(255,255,255,0.08)",
          }}
        />

        {/* Price */}
        <div
          className="flex items-end gap-2"
          style={{ marginBottom: isSliderCard && !isSliderActive ? 8 : 24 }}
        >
          <span
            className="font-extrabold leading-none"
            style={{
              fontSize: isSliderCard && !isSliderActive ? 28 : 40,
              letterSpacing: "-0.03em",
              background:
                "linear-gradient(90deg, #00ffff 0%, #ff7e57 40%, #ffc457 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ${price === 0 ? "00" : price.toFixed(2)}
          </span>
          <span
            className="mb-1"
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: isSliderCard && !isSliderActive ? 10 : 14,
            }}
          >
            / per month
          </span>
        </div>

        {/* Features label */}
        <p
          className="text-white font-medium mb-2"
          style={{
            fontSize: isSliderCard && !isSliderActive ? 12 : 18,
          }}
        >
          What you will get
        </p>

        {/* Features list */}
        <ul
          className="flex flex-col flex-grow overflow-y-auto"
          style={{
            gap: isSliderCard && !isSliderActive ? 6 : 16,
            marginBottom: isSliderCard && !isSliderActive ? 8 : 32,
          }}
        >
          {plan.features.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-2"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: isSliderCard && !isSliderActive ? 11 : 14,
              }}
            >
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  flexShrink: 0,
                  opacity: 0.85,
                }}
              >
                <CheckIcon />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="w-full rounded-full font-semibold transition-all duration-200"
          style={{
            padding: isSliderCard && !isSliderActive ? "10px 16px" : "16px",
            fontSize: isSliderCard && !isSliderActive ? 12 : 15,
            background: active
              ? "linear-gradient(135deg, #093131 0%, #049B9B 50%, #00FFFF 100%)"
              : "transparent",
            border: active ? "none" : "1px solid rgba(0,255,255,0.35)",
            color: "#ffffff",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const PricingPlan = () => {
  const [billing, setBilling] = useState("monthly");
  const [activePlan, setActivePlan] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const visiblePlans =
    billing === "yearly" ? plans.filter((p) => p.id !== "free") : plans;

  const setBillingWithIndex = (next) => {
    if (next === billing) return;
    if (next === "yearly") {
      setActiveIndex((i) => (i === 2 ? 1 : 0));
    } else {
      setActiveIndex((i) => (i === 0 ? 1 : 2));
    }
    setBilling(next);
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const update = () => setSliderWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clampIndex = (i) => Math.max(0, Math.min(visiblePlans.length - 1, i));
  const mobileTrackW =
    SLIDER_CARD_CENTER.width +
    (visiblePlans.length - 1) * (SLIDER_CARD_SIDE.width + SLIDER_GAP);
  const mobileXVal =
    sliderWidth > 0
      ? (sliderWidth - SLIDER_CARD_CENTER.width) / 2 -
        activeIndex * (SLIDER_CARD_SIDE.width + SLIDER_GAP)
      : 0;
  const mobileIndexFromX = (x) => {
    if (sliderWidth <= 0) return activeIndex;
    const i =
      ((sliderWidth - SLIDER_CARD_CENTER.width) / 2 - x) /
      (SLIDER_CARD_SIDE.width + SLIDER_GAP);
    return clampIndex(Math.round(i));
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center py-20 px-6"
      style={{ background: "rgb(3, 6, 18)", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        @keyframes pricingBorderSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Header */}
      <h2
        className="font-extrabold text-center mb-10"
        style={{
          fontSize: "clamp(32px, 4vw, 56px)",
          letterSpacing: "-0.02em",
          color: "#ffffff",
          lineHeight: 1.15,
        }}
      >
        Your Best{" "}
        <span
          style={{
            background:
              "linear-gradient(90deg, #00ffff 0%, #ff7e57 32%, #ffc457 60%, #00b2b2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Pricing Plan
        </span>
      </h2>

      {/* Billing Toggle */}
      <div
        className="flex items-center rounded-full p-1 mb-14"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid [var(--gradient-bg)]",
        }}
      >
        {["Yearly", "Monthly"].map((opt) => {
          const val = opt.toLowerCase();
          const sel = billing === val;
          return (
            <div
              key={opt}
              className="rounded-full"
              style={{
                padding: sel ? "1.5px" : "1.5px",
                background: sel
                  ? "linear-gradient(90deg, #00ffff 0%, #ff7e57 32%, #ffc457 60%, #00b2b2 100%)"
                  : "transparent",
              }}
            >
              <button
                onClick={() => setBillingWithIndex(val)}
                className="px-7 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: "rgb(3, 6, 18)",
                  color: sel ? "rgba(0,255,255,1)" : "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  display: "block",
                }}
              >
                {opt}
              </button>
            </div>
          );
        })}
      </div>

      {/* Mobile: slider (below sm) — center 270x554, sides 230x455 */}
      <div className="block sm:hidden w-full overflow-hidden">
        <div ref={sliderRef} className="relative w-full overflow-hidden py-5">
          <motion.div
            className="flex items-center"
            style={{
              width: mobileTrackW,
              gap: SLIDER_GAP,
            }}
            animate={{
              x: mobileXVal,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={sliderWidth > 0 ? { left: sliderWidth - mobileTrackW, right: 0 } : undefined}
            dragElastic={0.08}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false);
              if (Math.abs(info.offset.x) < 8) return;
              const next = mobileIndexFromX(mobileXVal + info.offset.x);
              setActiveIndex(next);
            }}
          >
            {visiblePlans.map((plan, index) => {
              const slotWidth =
                activeIndex === index
                  ? SLIDER_CARD_CENTER.width
                  : SLIDER_CARD_SIDE.width;
              return (
                <div
                  key={plan.id}
                  className="flex-shrink-0 flex justify-center"
                  style={{ width: slotWidth }}
                >
                  <PricingCard
                    plan={plan}
                    isActive={activePlan === plan.id}
                    billing={billing}
                    setActivePlan={setActivePlan}
                    isSliderCard
                    isSliderActive={activeIndex === index}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {visiblePlans.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to plan ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 8 : 8,
                height: 8,
                background:
                  activeIndex === i ? "#00FFFF" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop: same card width as 3-up layout (1/3 row minus gaps) — yearly shows 2 centered */}
      <div
        className="hidden sm:flex flex-col md:flex-row md:justify-center gap-8 w-full"
        style={{ maxWidth: 1200 }}
      >
        {visiblePlans.map((plan) => (
          <div
            key={plan.id}
            className="w-full md:w-auto md:min-w-0 md:max-w-[calc((100%-4rem)/3)] md:flex-[0_1_calc((100%-4rem)/3)]"
          >
            <PricingCard
              plan={plan}
              isActive={activePlan === plan.id}
              billing={billing}
              setActivePlan={setActivePlan}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlan;
