import React, { useState } from "react";

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

const PricingCard = ({ plan, isActive, billing, setActivePlan }) => {
  const price = billing === "monthly" ? plan.price.monthly : plan.price.yearly;

  return (
    /* Outer wrapper — clips the spinning beam to a rounded rect */
    <div
      onMouseEnter={() => setActivePlan(plan.id)}
      onMouseLeave={() => setActivePlan(null)}
      className="relative flex-1 rounded-2xl cursor-pointer"
      style={{
        padding: "2px",
        overflow: "hidden",
        transform: isActive
          ? "translateY(-6px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "transform 0.3s ease",
        zIndex: isActive ? 2 : 1,
      }}
    >
      {/* ── SPINNING CONIC BORDER (active) ──────────────────────────── */}
      {isActive ? (
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
        className="relative rounded-2xl p-7 h-full flex flex-col"
        style={{
          backgroundColor: "rgb(10, 14, 30)",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <div className="mb-4">
          <LogoIcon active={isActive} />
        </div>

        {/* Name */}
        <h3
          className="font-medium text-[24px]  mb-1 leading-tight"
          style={{ color: "#ffffff" }}
        >
          {plan.name}
        </h3>

        {/* Subtitle */}
        <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>
          {plan.subtitle}
        </p>

        {/* Divider */}
        <div
          className="mb-5 transition-all duration-300"
          style={{
            height: "1px",
            background: isActive
              ? "linear-gradient(90deg, rgba(0,255,255,0.5), transparent)"
              : "rgba(255,255,255,0.08)",
          }}
        />

        {/* Price */}
        <div className="flex items-end gap-2 mb-6">
          <span
            className="font-extrabold leading-none"
            style={{
              fontSize: 40,
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
            className="mb-2 text-sm"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            / per month
          </span>
        </div>

        {/* Features label */}
        <p className="text-white font-medium text-[18px] mb-3">
          What you will get
        </p>

        {/* Features list */}
        <ul className="flex flex-col gap-[16px] mb-8 flex-grow">
          {plan.features.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm"
              style={{ color: "rgba(255,255,255,0.65)" }}
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
          className="w-full py-4 rounded-full font-semibold text-[15px] transition-all duration-200"
          style={{
            background: isActive
              ? "linear-gradient(135deg, #093131 0%, #049B9B 50%, #00FFFF 100%)"
              : "transparent",
            border: isActive ? "none" : "1px solid rgba(0,255,255,0.35)",
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

  const handleClick = (id) => setActivePlan(id);

  // Mouse leave pe null
  // PricingCard onMouseLeave mein:
  // onMouseLeave={() => setActivePlan(null)}

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
                onClick={() => setBilling(val)}
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

      {/* Cards Grid */}
      <div
        className=" flex flex-col md:flex-row gap-8 w-full "
        style={{ maxWidth: 1200 }}
      >
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isActive={activePlan === plan.id}
            billing={billing}
            setActivePlan={setActivePlan} // pass karo
          />
        ))}
      </div>
    </section>
  );
};

export default PricingPlan;
