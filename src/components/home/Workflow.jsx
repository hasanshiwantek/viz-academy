import React from 'react'
import bgimage from '../../assets/2ndlastImg.png'

const Workflow = () => {
  return (
    <section className="flex items-center justify-center py-20 px-6" style={{ background: 'rgb(3,6,18)' }}>
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes workflowBorderSpin {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }

        .workflow-border {
          position: absolute;
          inset: 0;
          pointer-events: none;
          padding: 2px;
          border-radius: 28px;
          background: conic-gradient(
            from var(--angle),
            transparent 0%,
            transparent 30%,
            #8ef5e8 38%,
            #00ffff 44%,
            #ff9b7a 50%,
            #ffdc7a 56%,
            transparent 64%,
            transparent 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: workflowBorderSpin 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }

        .workflow-card:hover .workflow-border {
          opacity: 1;
        }
      `}</style>

      {/* Outer card with gradient border */}
      <div
        className="workflow-card relative w-full max-w-[1100px] rounded-[28px] overflow-hidden"
        style={{
          padding: '2px',
          background: 'linear-gradient(135deg, rgba(0,255,255,0.6) 0%, rgba(255,120,80,0.5) 40%, rgba(0,255,255,0.1) 100%)',
        }}
      >
        {/* ✅ ONLY THIS DIV ADDED — animated hover border */}
        <div className="workflow-border" />

        {/* Inner card with bg image */}
        <div
          className="relative rounded-[26px] overflow-hidden flex flex-col items-center justify-center text-center px-8 py-20"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(3,8,24,0.55)' }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 max-w-[660px]">

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Sharp Sans Display No1 TRIAL', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: '120%',
                letterSpacing: '-0.01em',
                color: '#ffffff',
                margin: 0,
              }}
            >
              Ready to Transform{' '}
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(89.43deg, #00FFFF 10.3%, #FF7E57 37.33%, #FFC457 61.09%, #00B2B2 95.49%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Your 3D Workflow?
              </span>
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '160%',
                color: '#98A2B3',
                margin: 0,
                maxWidth: '93%',
              }}
            >
              Join thousands of architects, designers, and 3D artists who are creating
              stunning visualizations faster with VizMaker.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-2 flex-wrap justify-center">
              {/* Primary - Download */}
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[15px] text-white border-2 border-transparent transition-all duration-300 hover:brightness-110"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: `
                    linear-gradient(89.69deg, #00FFFF -1.81%, #003131 95.62%) padding-box,
                    linear-gradient(171.77deg, rgba(255,255,255,0) -5.76%, rgba(255,255,255,0.2) 32.96%, rgba(255,255,255,0.7) 78.14%) border-box
                  `,
                  boxShadow: "0 0 24px rgba(0,255,255,0.35)",
                  cursor: "pointer",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download VizMaker
              </button>

              {/* Secondary - Watch Demo */}
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[15px] text-[#00FFFF] border-2 border-transparent transition-all duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: `
                    linear-gradient(90deg, rgba(9, 49, 49, 0.2) 0%, rgba(0, 255, 255, 0.2) 122.41%) padding-box,
                    linear-gradient(171.77deg, rgba(255, 255, 255, 0.7) -5.76%, rgba(255, 255, 255, 0.2) 39.41%, rgba(255, 255, 255, 0) 78.14%) border-box
                  `,
                  backdropFilter: "blur(8px)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background =
                  `linear-gradient(90deg, rgba(9,49,49,0.3) 0%, rgba(0,255,255,0.3) 122.41%) padding-box,
                   linear-gradient(171.77deg, rgba(255,255,255,0.7) -5.76%, rgba(255,255,255,0.2) 39.41%, rgba(255,255,255,0) 78.14%) border-box`
                )}
                onMouseLeave={(e) => (e.currentTarget.style.background =
                  `linear-gradient(90deg, rgba(9,49,49,0.2) 0%, rgba(0,255,255,0.2) 122.41%) padding-box,
                   linear-gradient(171.77deg, rgba(255,255,255,0.7) -5.76%, rgba(255,255,255,0.2) 39.41%, rgba(255,255,255,0) 78.14%) border-box`
                )}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-1 flex-wrap justify-center">
              {['14-day free trial', 'No credit card required', 'Cancel anytime'].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#00FFFF">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z"/>
                  </svg>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow