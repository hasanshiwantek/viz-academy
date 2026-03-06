import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import sketchup from '../../assets/sketchuo.svg'
import ds from '../../assets/3ds.svg'
import revit from '../../assets/revit.svg'
import blender from '../../assets/blender.svg'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import frame3 from '../../assets/frame3.png'
import frame4 from '../../assets/frame4.png'

const icons = ['▶','⏸','⏹','⏺','R','⚙'];

const SLIDER_CENTER = { width: 280, height: 430 }
const SLIDER_SIDE = { width: 210, height: 360 }
const SLIDER_GAP = 0

const FavoriteApp = () => {
  const [active, setActive] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null)
  const [sliderWidth, setSliderWidth] = useState(0)

  useEffect(() => {
    if (!sliderRef.current) return
    const el = sliderRef.current
    const update = () => setSliderWidth(el.offsetWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

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

         {/* ===== MOBILE below sm — tabs + slider (Pricing-style) ===== */}
        <div className="flex sm:hidden w-full flex-col overflow-hidden py-5">
          {/* Tabs — AIEngines jaisa (scrollbar hidden, active = rotating gradient border) */}
          <div className="flex gap-2 overflow-x-auto pb-5 justify-start scrollbar-hide">
            {mobileCards.map((card, i) => {
              const isActive = activeIndex === i
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="flex-shrink-0 relative rounded-lg text-sm font-medium whitespace-nowrap overflow-hidden"
                  style={{ padding: '2px' }}
                >
                  {isActive && (
                    <>
                      <div
                        className="absolute inset-0 rounded-lg flex items-center justify-center pointer-events-none"
                        style={{ zIndex: 0 }}
                      >
                        <div
                          className="absolute"
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(0,255,255,0) 0%, #8ef5e8 25%, #ff9b7a 50%, #ffdc7a 75%, rgba(0,255,255,0) 100%)',
                            height: '300px',
                            width: '200px',
                            top: '50%',
                            transformOrigin: 'top center',
                            animation: 'gradient-spin 3s linear infinite',
                          }}
                        />
                      </div>
                      <div
                        className="absolute inset-[2px] rounded-[6px] z-10 pointer-events-none"
                        style={{ background: 'rgb(3,6,18)' }}
                      />
                    </>
                  )}
                  <span
                    className="relative z-20 block px-3 py-2 rounded-[6px] transition-colors duration-200"
                    style={{
                      color: isActive ? 'var(--text-color)' : 'rgba(152, 162, 179, 1)',
                      background: isActive ? 'rgb(3,6,18)' : 'transparent',
                      border: isActive ? 'none' : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {card.title}
                  </span>
                </button>
              )
            })}
          </div>
          <div ref={sliderRef} className="relative w-full overflow-hidden">
            <motion.div
              className="flex items-center gap-0"
              style={{
                width:
                  SLIDER_CENTER.width +
                  (mobileCards.length - 1) * SLIDER_SIDE.width,
                gap: 0,
              }}
              animate={{
                x:
                  sliderWidth > 0
                    ? (sliderWidth - SLIDER_CENTER.width) / 2 -
                      activeIndex * SLIDER_SIDE.width
                    : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {mobileCards.map((card, idx) => {
                const isActive = activeIndex === idx
                const slotW = isActive ? SLIDER_CENTER.width : SLIDER_SIDE.width
                const slotH = isActive ? SLIDER_CENTER.height : SLIDER_SIDE.height
                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 flex justify-center items-center overflow-hidden"
                    style={{ width: slotW, height: slotH, margin: 0, padding: 0 }}
                  >
                    <div
                      className="fav-card relative rounded-[22px] overflow-hidden border border-[rgba(80,140,255,0.22)] w-full h-full"
                      style={{
                        width: SLIDER_CENTER.width,
                        height: SLIDER_CENTER.height,
                        backgroundImage: `url(${card.frame})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transform: isActive ? 'none' : 'scale(0.75, 0.84)',
                        transformOrigin: 'center',
                      }}
                    >
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(3,6,18,0.92) 0%, rgba(3,6,18,0.4) 50%, rgba(3,6,18,0.05) 100%)',
                        }}
                      />
                      <div className="fav-card-border" style={{ borderRadius: '22px' }} />
                      {card.extraTopLeft && (
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                          <div className="rounded-xl w-7 h-[14px] bg-[rgba(25,40,65,0.9)] border border-[rgba(100,150,255,0.2)]" />
                          <div className="rounded-lg w-5 h-5 flex items-center justify-center text-white font-bold text-xs bg-[rgba(0,180,255,0.85)]">+</div>
                        </div>
                      )}
                      {/* App icon — sab center mein */}
                      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none" style={{ padding: '15% 10% 35% 10%' }}>
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-full h-full object-contain"
                          style={{ objectPosition: 'center center' }}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 z-10 p-4 right-0">
                        <h3 className="text-white font-bold text-[18px] leading-tight m-0 mb-0.5">{card.title}</h3>
                        <p className="text-[12px] leading-[145%] m-0 text-[rgba(180,200,220,0.68)]" style={{ maxWidth: '90%' }}>
                          {card.desc}
                        </p>
                        {card.hasIcons && (
                          <div className="flex items-center gap-1 mt-2">
                            {icons.map((icon, i) => (
                              <div
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setActive(i); }}
                                className={`
                                  flex items-center justify-center rounded-md text-[9px] cursor-pointer
                                  w-[26px] h-[26px] transition-all duration-300
                                  ${active === i ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400' : 'bg-[rgba(25,40,65,0.85)] text-[rgba(180,210,255,0.8)] border border-[rgba(100,150,255,0.2)]'}
                                `}
                              >
                                {icon}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
          {/* Dots neeche — sab ki width 8 */}
          <div className="flex justify-center gap-2 mt-8 pt-2 pb-1">
            {mobileCards.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to ${mobileCards[i].title}`}
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-300 flex-shrink-0"
                style={{
                  width: 8,
                  height: 8,
                  background: activeIndex === i ? '#00FFFF' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
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