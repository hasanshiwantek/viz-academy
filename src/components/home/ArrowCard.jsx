import React from 'react'
import orignal from '../../assets/orignal.svg'
import finalImg from '../../assets/find.svg'
import ai from '../../assets/ai.svg'
import b from '../../assets/b.svg'
import a from '../../assets/a.svg'
import colorImg from '../../assets/color.svg'

const cards = [
  { id: 'original',   title: 'Original Input',   sub: 'Start with your base image\nor concept',  left: 1,   top: 446, w: 192, h: 233, img: orignal  },
  { id: 'final',      title: 'Final Output',      sub: 'Polished, production-ready\nresult',      left: 354, top: 263, w: 192, h: 224, img: finalImg },
  { id: 'enhance',    title: 'AI Enhancement',    sub: 'Paint mask & apply AI',                   left: 354, top: 638, w: 192, h: 233, img: ai       },
  { id: 'styleB',     title: 'Style Variation B', sub: 'Branch into alternative\naesthetics',     left: 738, top: 60,  w: 192, h: 215, img: b        },
  { id: 'styleA',     title: 'Style Variation A', sub: 'Explore different artistic\ndirections',  left: 738, top: 338, w: 192, h: 216, img: a        },
  { id: 'colorShift', title: 'Color Shift',       sub: 'Adjust tones and\natmosphere',            left: 738, top: 659, w: 192, h: 212, img: colorImg },
]

const R = 14
const rc = (id) => { const c = cards.find(x => x.id === id); return { x: c.left + c.w, y: c.top + c.h / 2 } }
const lc = (id) => { const c = cards.find(x => x.id === id); return { x: c.left,        y: c.top + c.h / 2 } }
const mid = (a, b) => (rc(a).x + lc(b).x) / 2

const elbow = (sx, sy, mx, dx, dy) => {
  const goUp = dy < sy
  return goUp
    ? `M ${sx} ${sy} H ${mx-R} Q ${mx} ${sy} ${mx} ${sy-R} V ${dy+R} Q ${mx} ${dy} ${mx+R} ${dy} H ${dx}`
    : `M ${sx} ${sy} H ${mx-R} Q ${mx} ${sy} ${mx} ${sy+R} V ${dy-R} Q ${mx} ${dy} ${mx+R} ${dy} H ${dx}`
}

const arrowDefs = () => {
  const origR=rc('original'), finalL=lc('final'), finalR=rc('final')
  const enhR=rc('enhance'), enhL=lc('enhance')
  const styleBL=lc('styleB'), styleAL=lc('styleA'), colorL=lc('colorShift')
  return [
    { id:'orig-final',   d: elbow(origR.x,origR.y,  mid('original','final'),   finalL.x, finalL.y)  },
    { id:'orig-ai',      d: elbow(origR.x,origR.y,  mid('original','enhance'), enhL.x,   enhL.y)    },
    { id:'final-styleB', d: elbow(finalR.x,finalR.y, mid('final','styleB'),    styleBL.x,styleBL.y) },
    { id:'final-styleA', d: elbow(finalR.x,finalR.y, mid('final','styleA'),    styleAL.x,styleAL.y) },
    { id:'ai-styleA',    d: elbow(enhR.x,enhR.y,    mid('enhance','styleA'),   styleAL.x,styleAL.y) },
    { id:'ai-color',     d: elbow(enhR.x,enhR.y,    mid('enhance','colorShift'),colorL.x, colorL.y) },
  ]
}

const CANVAS_W = 960
const CANVAS_H = 920

// ── Mobile layout constants ──
const MCW = 128
const MCH = 147
const GAP_Y = 24          // gap between Final and Enhance (right col)
const CONN = 44           // connector zone width
const PAD = 12

const FINAL_Y = PAD
const ENHANCE_Y = FINAL_Y + MCH + GAP_Y
const ORIG_Y = (FINAL_Y + ENHANCE_Y + MCH) / 2 - MCH / 2  // vertically centered

const LEFT_X = PAD
const RIGHT_X = PAD + MCW + CONN

const SVG_W = RIGHT_X + MCW + PAD
const SVG_H = ENHANCE_Y + MCH + PAD + 48  // extra for labels below

const ArrowCard = () => {
  const arrows = arrowDefs()

  // connector mid x
  const connMidX = LEFT_X + MCW + CONN / 2

  // from original right edge center
  const origRX = LEFT_X + MCW
  const origRY = ORIG_Y + MCH / 2

  // to final left edge center
  const finalLX = RIGHT_X
  const finalLY = FINAL_Y + MCH / 2

  // to enhance left edge center
  const enhLX = RIGHT_X
  const enhLY = ENHANCE_Y + MCH / 2

  const CR = 10  // corner radius for mobile elbows

  // orig → final path (up-right elbow)
  const pathFinal = `M ${origRX} ${origRY} H ${connMidX - CR} Q ${connMidX} ${origRY} ${connMidX} ${origRY - CR} V ${finalLY + CR} Q ${connMidX} ${finalLY} ${connMidX + CR} ${finalLY} H ${finalLX}`
  // orig → enhance path (down-right elbow)
  const pathEnhance = `M ${origRX} ${origRY} H ${connMidX - CR} Q ${connMidX} ${origRY} ${connMidX} ${origRY + CR} V ${enhLY - CR} Q ${connMidX} ${enhLY} ${connMidX + CR} ${enhLY} H ${enhLX}`

  return (
    <>
      <style>{`
        @keyframes spin-beam {
          0%   { transform: translateX(-50%) rotate(0deg);   }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        @keyframes dash-march {
          to { stroke-dashoffset: -20; }
        }
        .card-border-wrap {
          position: relative;
          border-radius: 6px;
          padding: 4px;
          overflow: hidden;
          background: #0a0d1a;
        }
        .card-border-wrap::before {
          content: '';
          position: absolute;
          left: 50%; top: 50%;
          width: 160px; height: 400px;
          transform-origin: top center;
          transform: translateX(-50%);
          background: linear-gradient(90deg, rgba(0,255,255,0) 0%, #8ef5e8 25%, #ff9b7a 50%, #ffdc7a 75%, rgba(0,255,255,0) 100%);
          animation: spin-beam 3s linear infinite;
          z-index: 1;
          mix-blend-mode: screen;
        }
        .card-border-wrap::after {
          content: '';
          position: absolute;
          inset: 4px;
          border-radius: 3px;
          background: #0a0d1a;
          z-index: 2;
        }
        .card-img-wrap {
          position: relative;
          z-index: 3;
          border-radius: 3px;
          overflow: hidden;
          background: #0a0d1a;
        }
        .arrow-path-base { stroke: url(#ag); stroke-width: 2.5; fill: none; }
        .arrow-path-anim { stroke: url(#ag-bright); stroke-width: 2.5; fill: none; stroke-dasharray: 10 10; animation: dash-march 0.6s linear infinite; opacity: 0.85; }
        .m-arrow-base { stroke: url(#mag); stroke-width: 2; fill: none; }
        .m-arrow-anim { stroke: url(#mag-bright); stroke-width: 2; fill: none; stroke-dasharray: 7 7; animation: dash-march 0.6s linear infinite; opacity: 0.85; }
      `}</style>

      <div className="min-h-screen flex flex-col items-center justify-start overflow-auto pt-20 pb-20">

        {/* Header */}
        <div className="flex flex-col items-center gap-5 px-6 text-center">
          <h2 className='text-xl sm:text-[3.5rem]'
            style={{ fontFamily: "'Sharp Sans Display No1 TRIAL', 'Inter', sans-serif", fontWeight: 700, lineHeight: '120%', color: '#ffffff', margin: 0 }}
          >
            VizMaker{' '}
            <span style={{ backgroundImage: 'linear-gradient(89.43deg, #00FFFF 10.3%, #FF7E57 37.33%, #FFC457 61.09%, #00B2B2 95.49%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Workflow
            </span>
          </h2>
          <p className='text-[14px] sm:text-[18px]'
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: '150%', color: '#98A2B3', margin: 0, maxWidth: '560px' }}
          >
            Explore every creative path, without losing the thread.
          </p>
          <button
            className="flex items-center justify-center gap-[10px] w-full sm:w-[204px] h-[56px] px-[24px] py-[10px] rounded-[50px] text-[18px] font-medium text-[#00FFFF] border-2 border-transparent transition-all duration-300"
            style={{ fontFamily: "Inter, sans-serif", background: `linear-gradient(90deg, rgba(9,49,49,0.2) 0%, rgba(0,255,255,0.2) 122.41%) padding-box, linear-gradient(171.77deg, rgba(255,255,255,0.7) -5.76%, rgba(255,255,255,0.2) 39.41%, rgba(255,255,255,0) 78.14%) border-box` }}
          >
            Try For Free
          </button>
        </div>

        {/* ===== DESKTOP md+ ===== */}
        <div className="relative flex-shrink-0 hidden md:block" style={{ width: CANVAS_W, height: CANVAS_H }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}>
            <defs>
              <linearGradient id="ag" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6CC8B7" /><stop offset="35%" stopColor="#F66A3A" /><stop offset="65%" stopColor="#FFC357" /><stop offset="100%" stopColor="#00FFFF" />
              </linearGradient>
              <linearGradient id="ag-bright" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8ef5e8" /><stop offset="35%" stopColor="#ff9b7a" /><stop offset="65%" stopColor="#ffdc7a" /><stop offset="100%" stopColor="#00FFFF" />
              </linearGradient>
              <marker id="ah" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#00FFFF" />
              </marker>
            </defs>
            {arrows.map(({ id, d }) => (
              <g key={id}>
                <path className="arrow-path-base" d={d} markerEnd="url(#ah)" />
                <path className="arrow-path-anim" d={d} />
              </g>
            ))}
          </svg>
          {cards.map((c) => (
            <div key={c.id} className="absolute flex flex-col items-center gap-2" style={{ left: c.left, top: c.top }}>
              <div className="card-border-wrap" style={{ width: c.w, height: c.h }}>
                <div className="card-img-wrap" style={{ width: c.w - 8, height: c.h - 8 }}>
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover block" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-center max-w-[180px]">
                <span className="text-white text-[13px] font-bold leading-tight whitespace-nowrap">{c.title}</span>
                <span className="text-[#7a8fb5] text-[10.5px] font-normal leading-[1.45] whitespace-pre-line">{c.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ===== MOBILE below md — original LEFT, final+enhance RIGHT ===== */}
        <div className="flex md:hidden justify-center w-full mt-10">
          <div className="relative" style={{ width: SVG_W, height: SVG_H }}>

            {/* SVG lines */}
            <svg className="absolute inset-0 pointer-events-none overflow-visible" width={SVG_W} height={SVG_H} viewBox={`0 0 ${SVG_W} ${SVG_H}`}>
              <defs>
                <linearGradient id="mag" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6CC8B7" /><stop offset="50%" stopColor="#ff9b7a" /><stop offset="100%" stopColor="#00FFFF" />
                </linearGradient>
                <linearGradient id="mag-bright" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8ef5e8" /><stop offset="50%" stopColor="#ffdc7a" /><stop offset="100%" stopColor="#00FFFF" />
                </linearGradient>
                <marker id="mah" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                  <polygon points="0 0, 6 2.5, 0 5" fill="#00FFFF" />
                </marker>
              </defs>

              {/* original → final */}
              <g>
                <path d={pathFinal} className="m-arrow-base" markerEnd="url(#mah)" />
                <path d={pathFinal} className="m-arrow-anim" />
              </g>

              {/* original → enhance */}
              <g>
                <path d={pathEnhance} className="m-arrow-base" markerEnd="url(#mah)" />
                <path d={pathEnhance} className="m-arrow-anim" />
              </g>
            </svg>

            {/* Original — LEFT, vertically centered */}
            <div className="absolute flex flex-col items-center gap-1" style={{ left: LEFT_X, top: ORIG_Y }}>
              <div className="card-border-wrap" style={{ width: MCW, height: MCH }}>
                <div className="card-img-wrap" style={{ width: MCW - 8, height: MCH - 8 }}>
                  <img src={orignal} alt="Original Input" className="w-full h-full object-cover block" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-center" style={{ maxWidth: MCW + 10 }}>
                <span className="text-white text-[11px] font-bold leading-tight">Original Input</span>
                <span className="text-[#7a8fb5] text-[9px] leading-[1.4] text-center">Start with your base image or concept</span>
              </div>
            </div>

            {/* Final Output — RIGHT TOP */}
            <div className="absolute flex flex-col items-center gap-1" style={{ left: RIGHT_X, top: FINAL_Y }}>
              <div className="card-border-wrap" style={{ width: MCW, height: MCH }}>
                <div className="card-img-wrap" style={{ width: MCW - 8, height: MCH - 8 }}>
                  <img src={finalImg} alt="Final Output" className="w-full h-full object-cover block" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-center" style={{ maxWidth: MCW + 10 }}>
                <span className="text-white text-[11px] font-bold leading-tight">Final Output</span>
                <span className="text-[#7a8fb5] text-[9px] leading-[1.4] text-center">Polished, production-ready result</span>
              </div>
            </div>

            {/* AI Enhancement — RIGHT BOTTOM */}
            <div className="absolute flex flex-col items-center gap-1" style={{ left: RIGHT_X, top: ENHANCE_Y }}>
              <div className="card-border-wrap" style={{ width: MCW, height: MCH }}>
                <div className="card-img-wrap" style={{ width: MCW - 8, height: MCH - 8 }}>
                  <img src={ai} alt="AI Enhancement" className="w-full h-full object-cover block" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-center" style={{ maxWidth: MCW + 10 }}>
                <span className="text-white text-[11px] font-bold leading-tight">AI Enhancement</span>
                <span className="text-[#7a8fb5] text-[9px] leading-[1.4] text-center">Paint mask & apply AI</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default ArrowCard