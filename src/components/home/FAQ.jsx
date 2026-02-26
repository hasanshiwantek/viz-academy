import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Is VizMaker a web-based tool?",
    answer:
      "No. VizMaker is a native AI app that works as a plugin inside your 3D software. There's no browser interface and no need to upload files externally.",
  },
  {
    id: 2,
    question: "Which software does VizMaker support?",
    answer:
      "VizMaker supports all major 3D software including 3DS Max, SketchUp, Revit, Blender, Cinema 4D, and more. It works as a native plugin inside each application.",
  },
  {
    id: 3,
    question: "Do I need to export my model to render?",
    answer:
      "No exports needed. VizMaker renders directly from your viewport screenshot. Just take a screenshot inside your 3D software and VizMaker handles the rest.",
  },
  {
    id: 4,
    question: "Is VizMaker suitable for professionals?",
    answer:
      "Absolutely. VizMaker is built for architects, interior designers, and 3D artists who need fast, high-quality renders without complex render setup.",
  },
  {
    id: 5,
    question: "How fast is AI rendering?",
    answer:
      "Most renders complete in under 30 seconds. Upscaling and animation generation times vary by resolution and engine selected.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className="relative rounded-2xl cursor-pointer"
      style={{
        padding: "2px",
        transition: "transform 0.3s ease",
      }}
      onClick={() => onToggle(faq.id)}
    >
      {/* ── SINGLE BEAM BORDER (active) — sweeps full perimeter ── */}
      {isOpen ? (
        <div
          className="absolute inset-0 pointer-events-none faq-border-active"
          style={{ borderRadius: "56px" }}
        />
      ) : (
        /* ── STATIC BORDER (inactive) ── */
        <div
          className="absolute inset-0 rounded-[50px] pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        />
      )}

      {/* ── INNER CARD ── */}
      <div
        className="relative rounded-[50px] px-6 py-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,255,255,0.10) 0%, rgba(0,255,255,0) 100%)",
          zIndex: 1,
        }}
      >
        {/* Question row */}
        <div className="flex items-center justify-between gap-4">
          <h3
            className="font-medium text-xl sm:text-[32px]"
            style={{ color: "#ffffff" }}
          >
            {faq.id}. {faq.question}
          </h3>

          {/* Toggle icon */}
          <div
            className="flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: isOpen
              ? "gray"// closed = transparent
                : "linear-gradient(135deg, #093131, #00ffff)" ,// open = gradient
              border: isOpen
                ? "none" // open = no border
                : "1.5px solid rgba(0,255,255,0.5)", // closed = cyan border
            }}
          >
            {isOpen ? (
              // Minus icon — white
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            ) : (
              // Plus icon — cyan
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            )}
          </div>
        </div>

        {/* Answer */}
        <div
          style={{
            maxHeight: isOpen ? "300px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
          }}
        >
          <p
            className="text-[14px] sm:text-[24px] leading-relaxed sm:pt-4"
            style={{ color: "rgba(234, 236, 240, 1)" }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(0);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="py-20  flex flex-col items-center max-w-[1200px] mx-auto"
      style={{ background: "rgb(3, 6, 18)", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes faqBorderRotate {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }

        .faq-border-active {
          padding: 2px;
          background: conic-gradient(
            from var(--angle),
            transparent 0%,
            transparent 30%,
            #8ef5e8 40%,
            #00ffff 45%,
            #ff9b7a 50%,
            #ffdc7a 55%,
            transparent 65%,
            transparent 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: faqBorderRotate 3s linear infinite;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-12">
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          FAQ —{" "}
          <span
            style={{
              color: "rgba(0, 255, 255, 1)",
            }}
          >
            VizMaker
          </span>
        </h2>
      </div>

      {/* Accordion */}
      <div
        className="flex flex-col gap-8 w-full"
        style={{ maxWidth: "1200px" }}
      >
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
