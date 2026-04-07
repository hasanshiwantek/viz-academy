import React, { useState, useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

const MOB_CENTER = { width: 280, height: 430 }
const MOB_SIDE   = { width: 210, height: 360 }
const MD_BREAKPOINT = 768

const FavoriteApp = () => {
  const [active, setActive] = useState(0)
  const [activeIndex, setActiveIndex] = useState(2)
  const [hoveredTabIndex, setHoveredTabIndex] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)
  const [sliderWidth, setSliderWidth] = useState(0)
  const videoRefs = useRef([])

  useEffect(() => {
    if (!sliderRef.current) return
    const el = sliderRef.current
    const update = () => setSliderWidth(el.offsetWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const mobileCards = useMemo(() => {
    const videos = import.meta.glob('../../assets/videos/*.mp4', { eager: true, as: 'url' })
    const toTitle = (base) =>
      base
        .replace(/^www\s+/i, '')
        .replace(/_compressed.*$/i, '')
        .replace(/final/gi, '')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase())

    const toKey = (path) => path.split('/').pop()

    return Object.entries(videos)
      .map(([path, url]) => {
        const file = toKey(path)
        const base = file.replace(/\.mp4$/i, '')
        const title = toTitle(base)
        return {
          id: file,
          title,
          desc: `Works inside ${title}.`,
          video: url,
        }
      })
      .sort((a, b) => a.title.localeCompare(b.title))
  }, [])

  useEffect(() => {
    const els = videoRefs.current ?? []
    els.forEach((el, i) => {
      if (!el) return
      if (i === activeIndex) return
      try {
        el.pause()
        el.currentTime = 0
      } catch {
        // ignore
      }
    })

    const activeEl = els[activeIndex]
    if (activeEl) {
      try {
        activeEl.pause()
        activeEl.currentTime = 0
        const p = activeEl.play()
        if (p && typeof p.catch === 'function') p.catch(() => {})
      } catch {
        // ignore
      }
    }
  }, [activeIndex])

  return (
    <div id="products" className="flex items-center justify-center px-5 py-10 scroll-mt-[88px]">
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
        .fav-card.is-active .fav-card-border { opacity: 1; }
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
              const isHovered = hoveredTabIndex === i
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setHoveredTabIndex(i)}
                  onMouseLeave={() => setHoveredTabIndex(null)}
                  className="flex-shrink-0 rounded-lg text-sm font-medium whitespace-nowrap"
                >
                  <span
                    className="block px-3 py-2 rounded-[6px] transition-colors duration-200"
                    style={{
                      color: isActive ? 'var(--text-color)' : isHovered ? 'rgba(220, 224, 235, 1)' : 'rgba(152, 162, 179, 1)',
                      background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                      border: '1px solid rgba(255,255,255,0.1)',
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
              const clampIndex = (i) => Math.max(0, Math.min(mobileCards.length - 1, i))
              const indexFromX = (x) => {
                if (sliderWidth <= 0) return activeIndex
                const i = ((sliderWidth - CENTER.width) / 2 - x) / SIDE.width
                return clampIndex(Math.round(i))
              }

              return (
                <motion.div
                className="flex items-center"
                style={{ width: trackW, gap: 0, height: CENTER.height }}
                  animate={{ x: xVal }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={sliderWidth > 0 ? { left: sliderWidth - trackW, right: 0 } : undefined}
                  dragElastic={0.08}
                  dragMomentum={false}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(_, info) => {
                    setIsDragging(false)
                    if (Math.abs(info.offset.x) < 8) return
                    const next = indexFromX(xVal + info.offset.x)
                    setActiveIndex(next)
                  }}
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
                          className={`fav-card relative rounded-[22px] overflow-hidden border border-[rgba(80,140,255,0.22)] ${isActive ? 'is-active' : ''}`}
                          style={{
                            width: cardW,
                            height: cardH,
                          }}
                          role="button"
                          tabIndex={0}
                          onClick={() => {
                            if (isDragging) return
                            setActiveIndex(idx)
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              if (isDragging) return
                              setActiveIndex(idx)
                            }
                          }}
                        >
                          {/* Video background */}
                          <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src={card.video}
                            autoPlay={isActive}
                            muted
                            playsInline
                            preload="metadata"
                            ref={(el) => { videoRefs.current[idx] = el }}
                          />

                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0 z-0"
                            style={{
                              background:
                                'linear-gradient(to top, rgba(3,6,18,0.92) 0%, rgba(3,6,18,0.4) 50%, rgba(3,6,18,0.05) 100%)',
                            }}
                          />

                          <div className="fav-card-border" style={{ borderRadius: '22px' }} />

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