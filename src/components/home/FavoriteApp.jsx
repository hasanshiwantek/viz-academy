import React from 'react'
import sketchup from '../../assets/sketchuo.svg'
import ds from '../../assets/3ds.svg'
import revit from '../../assets/revit.svg'
import blender from '../../assets/blender.svg'


// App Icons
const SketchUpIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M4 8L16 2L28 8V24L16 30L4 24V8Z" fill="#FF6D00"/>
    <path d="M4 8L16 14L28 8" stroke="white" strokeWidth="1.5" fill="none"/>
    <path d="M16 14V30" stroke="white" strokeWidth="1.5"/>
  </svg>
)

const RevitIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="28" height="28" rx="5" fill="#1565C0"/>
    <text x="16" y="22" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold" fontFamily="Arial">R</text>
  </svg>
)

const BlenderIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" fill="#EA7600"/>
    <circle cx="19" cy="14" r="5.5" fill="white"/>
    <circle cx="19" cy="14" r="2.8" fill="#EA7600"/>
    <line x1="6" y1="14" x2="13.5" y2="14" stroke="white" strokeWidth="2.5"/>
    <line x1="8" y1="10" x2="13" y2="14" stroke="white" strokeWidth="2.5"/>
    <line x1="8" y1="18" x2="13" y2="14" stroke="white" strokeWidth="2.5"/>
  </svg>
)

const MaxIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="28" height="28" rx="5" fill="#0047AB"/>
    <text x="16" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">3ds</text>
  </svg>
)

const FavoriteApp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-10">
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

          {/* SketchUp — 483px wide, border 3px */}
   <div
  className="relative flex flex-col overflow-hidden shrink-0 rounded-[32px] border-[3px] border-[rgba(80,140,255,0.22)]"
  style={{
    width: 483,
    height: 430,
    background: "linear-gradient(135deg, rgba(12,22,42,0.97), rgba(7,14,28,0.99))",
  }}
>
  {/* Gradient overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: "radial-gradient(ellipse at 30% 15%, rgba(20,80,200,0.18) 0%, transparent 60%)",
    }}
  />

  {/* Text content on top */}
  <div className="relative z-10 p-7 flex flex-col gap-2">
    <h3 className="text-white font-bold text-[32px] leading-[120%] m-0 mb-1">
      SketchUp
    </h3>
    <p className="text-[16px] font-normal leading-[150%] m-0 max-w-[85%] text-[rgba(180,200,220,0.65)]">
      AI-powered rendering directly inside SketchUp for faster design workflows.
    </p>
  </div>

  {/* Image at bottom using flex auto spacing */}
  <div className="flex-1 flex items-end justify-center">
    <img
      src={sketchup}
      alt="SketchUp"
      className="w-full max-w-[85%] object-contain"
    />
  </div>
</div>




          {/* 3DS Max — flex-1, border 2px */}
          <div
            className="relative flex flex-col justify-end overflow-hidden flex-1"
            style={{
              height: 430,
              borderRadius: 32,
              border: '2px solid rgba(80,140,255,0.18)',
              background: 'linear-gradient(135deg,rgba(12,22,42,0.97),rgba(7,14,28,0.99))',
            }}
          >
            {/* Toggle buttons top-left */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
              <div className="rounded-xl w-10 h-[22px] bg-[rgba(25,40,65,0.9)] border border-[rgba(100,150,255,0.2)]"/>
              <div className="rounded-lg w-[30px] h-[30px] flex items-center justify-center text-white font-bold text-lg bg-[rgba(0,180,255,0.85)]">+</div>
            </div>
            {/* Pill top-right */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 75% 25%,rgba(40,100,220,0.15) 0%,transparent 60%)' }}/>
            <div className="absolute" style={{ top: '1%', right: '1%' }}>
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

        {/* Row 2 — reversed layout */}
        <div className="flex gap-[30px] w-full">

          {/* Revit — flex-1, border 2px */}
          <div
            className="relative flex flex-col justify-end overflow-hidden flex-1"
            style={{
              height: 430,
              borderRadius: 32,
              border: '2px solid rgba(80,140,255,0.18)',
              background: 'linear-gradient(135deg,rgba(12,22,42,0.97),rgba(7,14,28,0.99))',
            }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 35% 25%,rgba(20,80,200,0.15) 0%,transparent 60%)' }}/>
            <div className="absolute right-0 top-2" >
             <img src={revit} alt="Revit" />
            </div>
            <div className="relative z-10 p-7">
              <h3 className="text-white font-bold text-[32px] leading-[120%] m-0 mb-1">Revit</h3>
              <p className="text-[16px] font-normal leading-[150%] m-0 max-w-[55%] text-[rgba(180,200,220,0.65)]">
                Generate realistic AI renders directly inside Revit without exporting models.
              </p>
            </div>
          </div>

          {/* Blender — 483px wide, border 3px */}
      <div
  className="relative flex flex-col overflow-hidden shrink-0 rounded-[32px] border-[3px] border-[rgba(80,140,255,0.22)]"
  style={{
    width: 483,
    height: 430,
    background: "linear-gradient(135deg, rgba(12,22,42,0.97), rgba(7,14,28,0.99))",
  }}
>
  {/* Gradient overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: "radial-gradient(ellipse at 70% 20%, rgba(40,100,200,0.15) 0%, transparent 60%)",
    }}
  />

  {/* Text content top */}
  <div className="relative z-10 p-7">
    <h3 className="text-white font-bold text-[32px] leading-[120%] m-0 mb-1">Blender</h3>
    <p className="text-[16px] font-normal leading-[150%] m-0 max-w-[65%] text-[rgba(180,200,220,0.65)]">
      Create production-ready renders in Blender using intelligent AI.
    </p>
  </div>

  {/* Image at bottom center */}
  <div className="absolute bottom-[-4px] right-16">
    <img
      src={blender}
      alt="Blender"
    />
  </div>

  {/* Playback icons bottom-left */}
  <div className="absolute bottom-7 left-5 z-10 flex items-center gap-1.5">
    {['▶','⏸','⏹','⏺','R','⚙'].map((icon, i) => (
      <div
        key={i}
        className="flex items-center justify-center rounded-md text-[10px] text-[rgba(180,210,255,0.8)]"
        style={{
          width: 36,
          height: 36,
          background: "rgba(25,40,65,0.85)",
          border: "1px solid rgba(100,150,255,0.2)",
        }}
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
          style={{
            background: 'rgba(15,28,50,0.8)',
            border: '1px solid rgba(80,140,255,0.2)',
          }}
        >
          <span className="text-blue-400">✦</span>
          More integrations coming soon: ArchiCAD, Cinema 4D, and more
        </div>

      </div>
    </div>
  )
}

export default FavoriteApp