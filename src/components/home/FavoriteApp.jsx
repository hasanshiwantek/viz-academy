import React, { useState } from 'react'
import sketchup from '../../assets/sketchuo.svg'
import ds from '../../assets/3ds.svg'
import revit from '../../assets/revit.svg'
import blender from '../../assets/blender.svg'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import frame3 from '../../assets/frame3.png'
import frame4 from '../../assets/frame4.png'

// App Icons
const icons = ['▶','⏸','⏹','⏺','R','⚙'];

const FavoriteApp = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-10">
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
          animation: favCardSpin 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
          z-index: 20;
        }

        .fav-card:hover .fav-card-border {
          opacity: 1;
        }
      `}</style>

      <div className="w-full max-w-[1200px] flex flex-col items-center gap-[30px]">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-white font-bold text-[3.5rem] tracking-[-1px]">
            Works Inside Your
          </h2>
          <h2
            className="font-bold text-[3.5rem] tracking-[-1px] mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(89.43deg, #00FFFF 10.3%, #FF7E57 37.33%, #FFC457 61.09%, #00B2B2 95.49%)",
            }}
          >
            Favorite Apps
          </h2>
          <p className="m-0 text-center text-[18px] leading-[150%] font-normal tracking-[0px] text-[#98A2B3]">
            Install VizMaker once, use it everywhere. Direct integration<br />
            means no export/import hassles.
          </p>
        </div>

        {/* Row 1 */}
        <div className="flex gap-[30px] w-full">

          {/* SketchUp */}
          <div
            className="fav-card relative flex flex-col overflow-hidden shrink-0 rounded-[32px] border-[3px] border-[rgba(80,140,255,0.22)] bg-cover bg-center"
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

          {/* 3DS Max */}
          <div
            className="fav-card relative flex flex-col justify-end overflow-hidden flex-1 rounded-[32px] border-[2px] border-[rgba(80,140,255,0.18)] bg-cover bg-center"
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

          {/* Revit */}
          <div
            className="fav-card relative flex flex-col justify-end overflow-hidden flex-1 rounded-[32px] border-[2px] border-[rgba(80,140,255,0.18)] bg-cover bg-center"
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

          {/* Blender */}
          <div
            className="fav-card relative flex flex-col overflow-hidden shrink-0 rounded-[32px] border-[3px] border-[rgba(80,140,255,0.22)] bg-cover bg-center"
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

        {/* Footer badge */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[rgba(180,210,255,0.75)]"
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