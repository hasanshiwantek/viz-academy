import React, { useState } from 'react'

const engines = [
  {
    id: 1,
    name: 'Nano Banana PRO',
    category: 'Image Generation',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Kling',
    category: 'Video Generation',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Seedream',
    category: 'Creative AI',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Magnific',
    category: 'AI Upscaling',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'VEO',
    category: 'Video Engine',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Meshy AI',
    category: '3D Generation',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
  {
    id: 7,
    name: 'Tripo3D',
    category: '3D Modeling',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 8,
    name: 'Sora',
    category: 'Video AI',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
]

const EngineCard = ({ engine }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative cursor-pointer transition-all duration-300 overflow-hidden rounded-3xl "
      style={{
        transform: hovered ? "translateY(-5px) scale(1.04)" : "translateY(0) scale(1)",
        padding: hovered ? "2px" : "2px",
        transition: "all 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ✅ ROTATING ANIMATED GRADIENT BORDER */}
      <div
        className="absolute inset-0 rounded-3xl flex items-center justify-center pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Spinning gradient beam */}
        <div
          className="absolute"
          style={{
            content: "",
            display: "block",
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

      {/* Inner mask to create 2px border */}
      <div
        className="absolute inset-[2px] rounded-3xl z-10 pointer-events-none"
        style={{ background: "rgb(3,6,18)" }}
      />

      {/* CARD CONTENT */}
      <div
        className="relative rounded-3xl overflow-hidden p-6 h-full z-20 flex flex-col items-center justify-center text-center"
        style={{
          background: "linear-gradient(180deg, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0) 100%)",
          backgroundColor: "rgb(3,6,18)",
          border: hovered ? "none" : "1px solid rgba(0,255,255,0.2)",
        //   minHeight: "200px",
          transition: "all 0.4s ease",
        }}
      >

        {/* Icon */}
        <div
          className="mb-3 transition-all duration-300"
          style={{
            color: "var(--primary-color)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          {engine.icon}
        </div>

        {/* Name */}
        <h3
          className="font-bold mb-1 text-white"
          style={{
            fontSize: "16px",
            letterSpacing: "-0.01em",
          }}
        >
          {engine.name}
        </h3>

        {/* Category */}
        <p
          className="text-xs"
          style={{
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {engine.category}
        </p>
      </div>
    </div>
  )
}

const AIEngines = () => {
  return (
    <section className="py-20 px-6 flex justify-center flex-col items-center">
      {/* Container with border */}
      <div className="w-full max-w-[1200px] rounded-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-bold leading-tight mb-3"
            style={{
              fontSize: "clamp(56px, 4vw, 42px)",
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

          <p
            className="leading-relaxed font-medium max-w-2xl mx-auto"
            style={{
              fontSize: "18px",
              color: "#98A2B3",
            }}
          >
            VizMaker integrates the world's most advanced AI models, giving you
            <br />
            access to cutting-edge technology without the complexity.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {engines.map((engine) => (
            <EngineCard key={engine.id} engine={engine} />
          ))}
        </div>


      </div>
    </section>
  )
}

export default AIEngines