import React from "react";
import bgNew from "../../assets/bg-new.png";
import navlogo from '../../assets/nav-logo.png'

const Node = ({ className = "", children }) => (
  <div
    className={`flex items-center justify-center rounded-full border border-white/15 bg-transparent ${className}`}
  >
    {children}
  </div>
);

const Icon = ({ children }) => (
  <div className="text-[#8aa0b8] opacity-90">{children}</div>
);

const Lock = () => (
  <Icon>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.5 11V8.5a4.5 4.5 0 0 1 9 0V11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.5 11h11a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.25v2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  </Icon>
);

const CloudOff = () => (
  <Icon>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 18.5A4.5 4.5 0 0 0 16.1 10a6 6 0 0 0-11.7 1.8A3.5 3.5 0 0 0 6 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3 3l18 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  </Icon>
);

const Shield = () => (
  <Icon>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.8 1.8L15.8 9.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);

const Cpu = () => (
  <Icon>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 9h6v6H9V9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 4v2M17 4v2M7 18v2M17 18v2M4 7h2M4 17h2M18 7h2M18 17h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 6h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);

const CenterLogo = () => (
  <div className="flex items-center gap-3">
  <div className="flex flex-col leading-tight ">
    <img src={navlogo} alt="VizMaker" className="w- h-[45px]" style={{ objectFit: 'contain', alignSelf: 'flex-start' }} />
    </div>
  
  </div>
);

const SecureWorkflows = () => {
  return (
    <section className="w-full px-0 py-14 sm:py-20">
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes swBorderSpin {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }
        .sw-center-border {
          position: absolute;
          inset: 0;
          pointer-events: none;
          padding: 2px;
          border-radius: 28px;
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
          animation: swBorderSpin 3s linear infinite;
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 0;
        }
        .sw-center-wrap:hover .sw-center-border {
          opacity: 1;
        }
      `}</style>
      <div
        className="w-full rounded-[24px] border border-white/10 overflow-hidden relative"
        style={{
          backgroundImage: `url(${bgNew})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 sm:px-10 sm:py-16">
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontFamily:
                "'Sharp Sans Display No1 TRIAL', 'Inter', sans-serif",
              fontSize: "clamp(26px, 3.5vw, 44px)",
            }}
          >
            Built for Secure
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(89.43deg, #00FFFF 10.3%, #FF7E57 37.33%, #FFC457 61.09%, #00B2B2 95.49%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Workflows
            </span>
          </h2>

          <p className="mt-4 text-[12px] sm:text-[13px] leading-relaxed text-white/80 max-w-[520px]">
            A new standard for privacy. With Private Mode, your work never leaves
            your environment—no uploads, no storage, no compromises.
          </p>

          <div className="mt-10 sm:mt-12 w-full flex items-center justify-center">
            <div className="relative w-full max-w-[760px] h-[380px] sm:h-[320px]">
              {/* connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none sm:hidden"
                viewBox="0 0 760 380"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="swLineMobile" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="rgba(0,255,255,0.10)" />
                    <stop offset="0.5" stopColor="rgba(0,255,255,0.35)" />
                    <stop offset="1" stopColor="rgba(0,255,255,0.10)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 305 150 C 275 128, 240 110, 140 90"
                  stroke="url(#swLineMobile)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 305 230 C 275 252, 240 288, 140 300"
                  stroke="url(#swLineMobile)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 455 150 C 485 128, 520 110, 620 90"
                  stroke="url(#swLineMobile)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 455 230 C 485 252, 520 288, 620 300"
                  stroke="url(#swLineMobile)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
                viewBox="0 0 760 320"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="swLineDesktop" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="rgba(0,255,255,0.10)" />
                    <stop offset="0.5" stopColor="rgba(0,255,255,0.35)" />
                    <stop offset="1" stopColor="rgba(0,255,255,0.10)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 300 128 C 255 92, 205 84, 124 64"
                  stroke="url(#swLineDesktop)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 300 192 C 255 228, 205 260, 124 261"
                  stroke="url(#swLineDesktop)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 460 128 C 505 92, 555 84, 636 64"
                  stroke="url(#swLineDesktop)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 460 192 C 505 228, 555 260, 636 261"
                  stroke="url(#swLineDesktop)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* nodes */}
              <div className="absolute left-[6%] top-[52px] sm:top-[40px]">
                <Node className="w-[78px] h-[48px]">
                  <Lock />
                </Node>
              </div>
              <div className="absolute left-[6%] top-[284px] sm:top-[237px]">
                <Node className="w-[78px] h-[48px]">
                  <CloudOff />
                </Node>
              </div>
              <div className="absolute right-[6%] top-[52px] sm:top-[40px]">
                <Node className="w-[78px] h-[48px]">
                  <Shield />
                </Node>
              </div>
              <div className="absolute right-[6%] top-[284px] sm:top-[237px]">
                <Node className="w-[78px] h-[48px]">
                  <Cpu />
                </Node>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="sw-center-wrap relative rounded-[28px] border border-white/15 bg-transparent px-5 py-7 overflow-hidden">
                  <div className="sw-center-border" />
                  <CenterLogo />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-[11px] text-white/50">
            {/* spacer like reference */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureWorkflows;

