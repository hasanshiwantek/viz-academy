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

const MOB_CENTER = { width: 280, height: 430 }
const MOB_SIDE   = { width: 210, height: 360 }
const MD_BREAKPOINT = 768

const FavoriteApp = () => {
  const [active, setActive] = useState(0)
  const [activeIndex, setActiveIndex] = useState(2)
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
  ]

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
      `}</style>

      <div className="w-full flex flex-col items-center gap-[30px]">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-white font-bold text-[2rem] lg:text-[3.5rem] tracking-[-1px]">
            Works Inside Your
          </h2>
          <h2
            className="font-bold text-[2rem] lg:text-[3.5rem] tracking-[-1px] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(89.43deg, #00FFFF 10.3%, #FF7E57 37.33%, #FFC457 61.09%, #00B2B2 95.49%)',
            }}
          >
            Favorite Apps
          </h2>
          <p className="m-0 text-center text-[15px] lg:text-[18px] leading-[150%] font-normal tracking-[0px] text-[#98A2B3]">
            Install VizMaker once, use it everywhere. Direct integration
            <br className="hidden lg:block" />
            means no export/import hassles.
          </p>
        </div>

        {/* Tabs + Slider */}
        <div className="flex w-full flex-col overflow-hidden py-5">

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-5 justify-start sm:justify-center scrollbar-hide">
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

          {/* Slider */}
          <div ref={sliderRef} className="relative w-full overflow-hidden">
            {(() => {
              const isMd = sliderWidth >= MD_BREAKPOINT
              const cw = isMd ? Math.round(sliderWidth * 0.55) : MOB_CENTER.width
              const ch = isMd ? Math.round(cw * (570 / 700))  : MOB_CENTER.height
              const sw = isMd ? Math.round(sliderWidth * 0.35) : MOB_SIDE.width
              const sh = isMd ? Math.round(sw * (420 / 483))  : MOB_SIDE.height

              const CENTER = { width: cw, height: ch }
              const SIDE   = { width: sw, height: sh }

              const trackW = CENTER.width + (mobileCards.length - 1) * SIDE.width
              const xVal =
                sliderWidth > 0
                  ? (sliderWidth - CENTER.width) / 2 - activeIndex * SIDE.width
                  : 0

              return (
                <motion.div
                className="flex items-center"
                style={{ width: trackW, gap: 0, height: CENTER.height }}
                  animate={{ x: xVal }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {mobileCards.map((card, idx) => {
                    const isActive = activeIndex === idx
                    const cardW = isActive ? CENTER.width : SIDE.width
                    const cardH = isActive ? CENTER.height : SIDE.height

                    return (
                      <div
                        key={idx}
                        className="flex-shrink-0 flex justify-center items-end"
                        style={{ width: cardW, height: cardH, margin: 0, padding: 0 }}
                      >
                        <div
                          className="fav-card relative rounded-[22px] overflow-hidden border border-[rgba(80,140,255,0.22)]"
                          style={{
                            width: cardW,
                            height: cardH,
                            backgroundImage: `url(${card.frame})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0 z-0"
                            style={{
                              background:
                                'linear-gradient(to top, rgba(3,6,18,0.92) 0%, rgba(3,6,18,0.4) 50%, rgba(3,6,18,0.05) 100%)',
                            }}
                          />

                          <div className="fav-card-border" style={{ borderRadius: '22px' }} />

                          {/* 3DS Max top-left UI */}
                          {card.extraTopLeft && (
                            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                              <div className="rounded-xl w-7 h-[14px] bg-[rgba(25,40,65,0.9)] border border-[rgba(100,150,255,0.2)]" />
                              <div className="rounded-lg w-5 h-5 flex items-center justify-center text-white font-bold text-xs bg-[rgba(0,180,255,0.85)]">+</div>
                            </div>
                          )}

                          {/* App icon */}
                          <div
                            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
                            style={{ padding: '6% 4% 26% 4%' }}
                          >
                            <img
                              src={card.icon}
                              alt={card.title}
                              className="w-full h-full object-contain"
                              style={{ objectPosition: 'center center' }}
                            />
                          </div>

                          {/* Text */}
                          <div className="absolute bottom-0 left-0 z-10 p-3 right-0">
                            <h3 className="text-white font-bold text-[18px] leading-tight m-0 mb-0.5">
                              {card.title}
                            </h3>
                            <p
                              className="text-[12px] leading-[145%] m-0 text-[rgba(180,200,220,0.68)]"
                              style={{ maxWidth: '90%' }}
                            >
                              {card.desc}
                            </p>

                            {/* Blender icons */}
                            {card.hasIcons && (
                              <div className="flex items-center gap-1 mt-2">
                                {icons.map((icon, i) => (
                                  <div
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setActive(i) }}
                                    className={`
                                      flex items-center justify-center rounded-md text-[9px] cursor-pointer
                                      w-[26px] h-[26px] transition-all duration-300
                                      ${active === i
                                        ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.6)]'
                                        : 'bg-[rgba(25,40,65,0.85)] text-[rgba(180,210,255,0.8)] border border-[rgba(100,150,255,0.2)]'
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
                      </div>
                    )
                  })}
                </motion.div>
              )
            })()}
          </div>

          {/* Dots */}
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