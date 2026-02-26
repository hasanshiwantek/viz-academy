import React, { useState } from 'react'
import sketchup from '../../assets/sketchuo.svg'
import ds from '../../assets/3ds.svg'
import revit from '../../assets/revit.svg'
import blender from '../../assets/blender.svg'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import frame3 from '../../assets/frame3.png'
import frame4 from '../../assets/frame4.png'

const icons = ['▶','⏸','⏹','⏺','R','⚙'];

const FavoriteApp = () => {
  const [active, setActive] = useState(0);

  const mobileCards = [
    {
      title: 'SketchUp',
      desc: 'AI-powered rendering directly inside SketchUp for faster design workflows.',
      frame: frame1,
      icon: sketchup,
      iconPos: 'bottom-center',
    },
    {
      title: '3DS Max',
      desc: 'AI rendering plugin for 3ds Max, built for professional visual quality.',
      frame: frame2,
      icon: ds,
      iconPos: 'top-right',
      extraTopLeft: true,
    },
    {
      title: 'Revit',
      desc: 'Generate realistic AI renders directly inside Revit without exporting models.',
      frame: frame3,
      icon: revit,
      iconPos: 'top-right',
    },
    {
      title: 'Blender',
      desc: 'Create production-ready renders in Blender using intelligent AI.',
      frame: frame4,
      icon: blender,
      iconPos: 'bottom-right',
      hasIcons: true,
    },
  ];

  return (
    <div className="flex items-center justify-center px-5 py-10">
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes favCardSpin {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }
        .fav-card-border {
          position: absolute;
          inset: 0;
          pointer-events: none;
          padding: 2px;
          background: conic-gradient(
            from var(--angle),
            transparent 0%, transparent 30%,
            #8ef5e8 38%, #00ffff 44%,
            #ff9b7a 50%, #ffdc7a 56%,
            transparent 64%, transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: favCardSpin 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
          z-index: 20;
        }
        .fav-card:hover .fav-card-border { opacity: 1; }

        @keyframes mobileCardIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-card { animation: mobileCardIn 0.45s ease forwards; opacity: 0; }
        .mobile-card:nth-child(1) { animation-delay: 0.05s; }
        .mobile-card:nth-child(2) { animation-delay: 0.15s; }
        .mobile-card:nth-child(3) { animation-delay: 0.25s; }
        .mobile-card:nth-child(4) { animation-delay: 0.35s; }
      `}</style>

      <div className="w-full max-w-[1200px] flex flex-col items-center gap-[30px]">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-white font-bold text-[2rem] lg:text-[3.5rem] tracking-[-1px]">
            Works Inside Your
          </h2>
          <h2
            className="font-bold text-[2rem] lg:text-[3.5rem] tracking-[-1px] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(89.43deg, #00FFFF 10.3%, #FF7E57 37.33%, #FFC457 61.09%, #00B2B2 95.49%)",
            }}
          >
            Favorite Apps
          </h2>
          <p className="m-0 text-center text-[15px] lg:text-[18px] leading-[150%] font-normal tracking-[0px] text-[#98A2B3]">
            Install VizMaker once, use it everywhere. Direct integration<br className="hidden lg:block" />
            means no export/import hassles.
          </p>
        </div>

        {/* ===== DESKTOP lg+ — original layout ===== */}
        <div className="hidden lg:flex flex-col gap-[30px] w-full">

          {/* Row 1 */}
          <div className="flex gap-[30px] w-full">
            <div
              className="fav-card relative flex flex-col overflow-hidden shrink-0 rounded-[32px] border-[3px] border-[rgba(80,140,255,0.22)] bg-cover w-full h-[430px] sm:w-[50%] bg-center"
              style={{ width: 483, height: 430, backgroundImage: `url(${frame1})` }}
            >
              <div className="fav-card-border" />
              <div className="relative z-10 p-7 flex flex-col gap-2">
                <h3 className="text-white font-bold text-[32px] leading-[120%] m-0 mb-1">SketchUp</h3>
                <p className="text-[16px] font-normal leading-[150%] m-0 max-w-[85%] text-[rgba(180,200,220,0.65)]">
                  AI-powered rendering directly inside SketchUp for faster design workflows.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center">
                <img src={sketchup} alt="SketchUp" className="w-full max-w-[85%] object-contain" />
              </div>
            </div>

            <div
              className="fav-card relative flex flex-col justify-end overflow-hidden flex-1 rounded-[32px] border-[2px] border-[rgba(80,140,255,0.18)] bg-cover w-full h-[430px] sm:w-[50%] bg-center"
              style={{ height: 430, backgroundImage: `url(${frame2})` }}
            >
              <div className="fav-card-border" />
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <div className="rounded-xl w-10 h-[22px] bg-[rgba(25,40,65,0.9)] border border-[rgba(100,150,255,0.2)]"/>
                <div className="rounded-lg w-[30px] h-[30px] flex items-center justify-center text-white font-bold text-lg bg-[rgba(0,180,255,0.85)]">+</div>
              </div>
              <div className="absolute top-[1%] right-[1%]">
                <img src={ds} alt="3DS Max" />
              </div>
              <div className="relative z-10 p-7">
                <h3 className="text-white font-bold text-[32px] leading-[120%] m-0 mb-1">3DS Max</h3>
                <p className="text-[16px] font-normal leading-[150%] m-0 max-w-[55%] text-[rgba(180,200,220,0.65)]">
                  AI rendering plugin for 3ds Max, built for professional visual quality.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-[30px] w-full">
            <div
              className="fav-card relative flex flex-col justify-end overflow-hidden flex-1 rounded-[32px] border-[2px] border-[rgba(80,140,255,0.18)] bg-cover w-full h-[430px] sm:w-[50%] bg-center"
              style={{ height: 430, backgroundImage: `url(${frame3})` }}
            >
              <div className="fav-card-border" />
              <div className="absolute right-0 top-2">
                <img src={revit} alt="Revit" />
              </div>
              <div className="relative z-10 p-7">
                <h3 className="text-white font-bold text-[32px] leading-[120%] m-0 mb-1">Revit</h3>
                <p className="text-[16px] font-normal leading-[150%] m-0 max-w-[55%] text-[rgba(180,200,220,0.65)]">
                  Generate realistic AI renders directly inside Revit without exporting models.
                </p>
              </div>
            </div>

            <div
              className="fav-card relative flex flex-col overflow-hidden shrink-0 rounded-[32px] border-[3px] border-[rgba(80,140,255,0.22)] bg-cover w-full h-[430px] sm:w-[50%] bg-center"
              style={{ width: 483, height: 430, backgroundImage: `url(${frame4})` }}
            >
              <div className="fav-card-border" />
              <div className="relative z-10 p-7">
                <h3 className="text-white font-bold text-[32px] leading-[120%] m-0 mb-1">Blender</h3>
                <p className="text-[16px] font-normal leading-[150%] m-0 max-w-[65%] text-[rgba(180,200,220,0.65)]">
                  Create production-ready renders in Blender using intelligent AI.
                </p>
              </div>
              <div className="absolute bottom-[-4px] right-16">
                <img src={blender} alt="Blender" />
              </div>
              <div className="absolute bottom-7 left-5 z-10 flex items-center gap-1.5">
                {icons.map((icon, i) => (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`
                      flex items-center justify-center rounded-md text-[12px] cursor-pointer
                      w-[36px] h-[36px] transition-all duration-300
                      ${active === i
                        ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.7)]"
                        : "bg-[rgba(25,40,65,0.85)] text-[rgba(180,210,255,0.8)] border border-[rgba(100,150,255,0.2)]"
                      }
                    `}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== MOBILE below lg — custom stacked card design ===== */}
        <div className="hidden sm:flex lg:hidden flex-col items-center gap-3 w-full">
          {mobileCards.map((card, idx) => (
            <div
              key={idx}
              className="mobile-card fav-card relative rounded-[22px] overflow-hidden border border-[rgba(80,140,255,0.22)] bg-cover w-full h-[430px] sm:h-[200px] sm:w-[60%] bg-center"
              style={{
                backgroundImage: `url(${card.frame})`,
              }}
            >
              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(3,6,18,0.95) 0%, rgba(3,6,18,0.55) 50%, rgba(3,6,18,0.1) 100%)',
                }}
              />

              <div className="fav-card-border" style={{ borderRadius: '22px' }} />

              {/* 3DS Max top-left UI */}
              {card.extraTopLeft && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <div className="rounded-xl w-9 h-[18px] bg-[rgba(25,40,65,0.9)] border border-[rgba(100,150,255,0.2)]" />
                  <div className="rounded-lg w-6 h-6 flex items-center justify-center text-white font-bold text-sm bg-[rgba(0,180,255,0.85)]">+</div>
                </div>
              )}

              {/* Icon: top-right */}
              {card.iconPos === 'top-right' && (
                <div className="absolute top-0 right-0 z-10" style={{ maxWidth: '42%' }}>
                  <img src={card.icon} alt={card.title} style={{ maxHeight: 110, objectFit: 'contain' }} />
                </div>
              )}

              {/* Icon: bottom-right (Blender) */}
              {card.iconPos === 'bottom-right' && (
                <div className="absolute bottom-0 right-8 z-10">
                  <img src={card.icon} alt={card.title} style={{ maxHeight: 110, objectFit: 'contain' }} />
                </div>
              )}

              {/* Icon: bottom-center (SketchUp) */}
              {card.iconPos === 'bottom-center' && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[52%]">
                  <img src={card.icon} alt={card.title} className="w-full object-contain" />
                </div>
              )}

              {/* Text bottom-left */}
              <div className="absolute bottom-0 left-0 z-10 p-4">
                <h3 className="text-white font-bold text-[18px] leading-tight m-0 mb-0.5">
                  {card.title}
                </h3>
                <p
                  className="text-[11.5px] leading-[145%] m-0 text-[rgba(180,200,220,0.68)]"
                  style={{ maxWidth: card.iconPos === 'top-right' ? '52%' : '65%' }}
                >
                  {card.desc}
                </p>

                {/* Blender icons */}
                {card.hasIcons && (
                  <div className="flex items-center gap-1 mt-2">
                    {icons.map((icon, i) => (
                      <div
                        key={i}
                        onClick={() => setActive(i)}
                        className={`
                          flex items-center justify-center rounded-md text-[9px] cursor-pointer
                          w-[26px] h-[26px] transition-all duration-300
                          ${active === i
                            ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                            : "bg-[rgba(25,40,65,0.85)] text-[rgba(180,210,255,0.8)] border border-[rgba(100,150,255,0.2)]"
                          }
                        `}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

         {/* ===== MOBILE sm aur neechy — 343x430, unique layout per card ===== */}
        <div className="flex sm:hidden flex-col items-center gap-4 w-full">

          {/* CARD 1 — SketchUp: TOP text, BOTTOM icon image */}
          <div
            className="mobile-card w-[94.7%] fav-card relative rounded-[22px] overflow-hidden border border-[rgba(80,140,255,0.22)] bg-cover bg-center"
            style={{ height: 430, backgroundImage: `url(${frame1})` }}
          >
            <div className="absolute inset-0 z-0"
              style={{ background: 'linear-gradient(to bottom, rgba(3,6,18,0.92) 0%, rgba(3,6,18,0.4) 40%, rgba(3,6,18,0.05) 100%)' }}
            />
            <div className="fav-card-border" style={{ borderRadius: '22px' }} />

            {/* TOP: Text */}
            <div className="absolute top-0 left-0 z-10 p-5">
              <h3 className="text-white font-bold text-[22px] leading-tight m-0 mb-1">SketchUp</h3>
              <p className="text-[13px] leading-[150%] m-0 text-[rgba(180,200,220,0.68)]" style={{ maxWidth: '70%' }}>
                AI-powered rendering directly inside SketchUp for faster design workflows.
              </p>
            </div>

            {/* BOTTOM: Icon image centered */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[90%]">
              <img src={sketchup} alt="SketchUp" className="w-full object-contain" />
            </div>
          </div>

          {/* CARD 2 — 3DS Max: TOP text + top-left UI, CENTER icon, BOTTOM text */}
          <div
            className="mobile-card w-[94.7%] fav-card relative rounded-[22px] overflow-hidden border border-[rgba(80,140,255,0.22)] bg-cover bg-center"
            style={{ height: 430, backgroundImage: `url(${frame2})` }}
          >
            <div className="absolute inset-0 z-0"
              style={{ background: 'linear-gradient(to bottom, rgba(3,6,18,0.88) 0%, rgba(3,6,18,0.2) 50%, rgba(3,6,18,0.88) 100%)' }}
            />
            <div className="fav-card-border" style={{ borderRadius: '22px' }} />

            {/* TOP: text */}
            <div className="absolute top-0 left-0 z-10 p-5">
              {/* top-left UI */}
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-xl w-9 h-[18px] bg-[rgba(25,40,65,0.9)] border border-[rgba(100,150,255,0.2)]" />
                <div className="rounded-lg w-6 h-6 flex items-center justify-center text-white font-bold text-sm bg-[rgba(0,180,255,0.85)]">+</div>
              </div>
             
            </div>

            {/* CENTER: icon image */}
            <div className="absolute inset-0 flex items-center justify-center z-10 ">
              <img src={ds} alt="3DS Max" style={{ maxHeight: 200, objectFit: 'contain' }} />
            </div>

            {/* BOTTOM: description text */}
            <div className="absolute bottom-0 left-0 z-10 p-5">
               <h3 className="text-white font-bold text-[22px] leading-tight m-0 mb-1">3DS Max</h3>
              <p className="text-[13px] leading-[150%] m-0 text-[rgba(180,200,220,0.68)]" style={{ maxWidth: '100%' }}>
                AI rendering plugin for 3ds Max, built for professional visual quality.
              </p>
            </div>
          </div>

          {/* CARD 3 — Revit: CENTER icon, BOTTOM text */}
          <div
            className="mobile-card w-[94.7%] fav-card relative rounded-[22px] overflow-hidden border border-[rgba(80,140,255,0.22)] bg-cover bg-center"
            style={{ height: 430, backgroundImage: `url(${frame3})` }}
          >
            <div className="absolute inset-0 z-0"
              style={{ background: 'linear-gradient(to top, rgba(3,6,18,0.92) 0%, rgba(3,6,18,0.35) 50%, rgba(3,6,18,0.1) 100%)' }}
            />
            <div className="fav-card-border" style={{ borderRadius: '22px' }} />

            {/* CENTER: icon image */}
            <div className="absolute inset-0 flex items-center justify-center z-10 mr-10 mb-32">
              <img src={revit} alt="Revit" style={{ maxHeight: 220, maxWidth: '100%', objectFit: 'contain' }} />
            </div>

            {/* BOTTOM: text */}
            <div className="absolute bottom-0 left-0 z-10 p-5">
              <h3 className="text-white font-bold text-[22px] leading-tight m-0 mb-1">Revit</h3>
              <p className="text-[13px] leading-[150%] m-0 text-[rgba(180,200,220,0.68)]" style={{ maxWidth: '70%' }}>
                Generate realistic AI renders directly inside Revit without exporting models.
              </p>
            </div>
          </div>

          {/* CARD 4 — Blender: TOP text, CENTER icon, BOTTOM glow icons */}
          <div
            className="mobile-card w-[94.7%] fav-card relative rounded-[22px] overflow-hidden border border-[rgba(80,140,255,0.22)] bg-cover bg-center"
            style={{ height: 430, backgroundImage: `url(${frame4})` }}
          >
            <div className="absolute inset-0 z-0"
              style={{ background: 'linear-gradient(to bottom, rgba(3,6,18,0.9) 0%, rgba(3,6,18,0.15) 40%, rgba(3,6,18,0.85) 100%)' }}
            />
            <div className="fav-card-border" style={{ borderRadius: '22px' }} />

            {/* TOP: text */}
            <div className="absolute top-0 left-0 z-10 p-5">
              <h3 className="text-white font-bold text-[22px] leading-tight m-0 mb-1">Blender</h3>
              <p className="text-[13px] leading-[150%] m-0 text-[rgba(180,200,220,0.68)]" style={{ maxWidth: '65%' }}>
                Create production-ready renders in Blender using intelligent AI.
              </p>
            </div>

            {/* CENTER: icon image */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img src={blender} alt="Blender" style={{ maxHeight: 200, maxWidth: '70%', objectFit: 'contain' }} />
            </div>

            {/* BOTTOM: glow icon buttons */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex justify-center">
              <div className="flex items-center gap-2">
                {icons.map((icon, i) => (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`
                      flex items-center justify-center rounded-md text-[11px] cursor-pointer
                      w-[34px] h-[34px] transition-all duration-300
                      ${active === i
                        ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.8),0_0_24px_rgba(0,255,255,0.4)]"
                        : "bg-[rgba(25,40,65,0.85)] text-[rgba(180,210,255,0.8)] border border-[rgba(100,150,255,0.2)]"
                      }
                    `}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>


        {/* Footer badge */}
        <div
          className="hidden sm:flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[rgba(180,210,255,0.75)]"
          style={{ background: 'rgba(15,28,50,0.8)', border: '1px solid rgba(80,140,255,0.2)' }}
        >
          <span className="text-cyan-400 w-4 h-4">✦</span>
          More integrations coming soon: ArchiCAD, Cinema 4D, and more
        </div>

      </div>
    </div>
  )
}

export default FavoriteApp