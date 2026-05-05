import React, { useState } from 'react'
import orignal from '../../assets/orignal.svg'
import finalImg from '../../assets/find.svg'
import ai from '../../assets/ai.svg'
import b from '../../assets/b.svg'
import a from '../../assets/a.svg'
import colorImg from '../../assets/color.svg'
import DownloadvizMakerForMobilemodal from './DownloadvizMakerForMobilemodal'
import DownloadvizMakermodal from './DownloadvizMakermodal'


const mobile = window.innerWidth < 768
const cards = [
  { id: 'original', title: 'Original Input', sub: 'Start with your base image\nor concept', left: 1, top: 446, w: 192, h: 233, img: orignal },
  { id: 'final', title: 'Final Output', sub: 'Polished, production-ready\nresult', left: mobile ? 244 : 354, top: 263, w: 192, h: 224, img: finalImg },
  { id: 'enhance', title: 'AI Enhancement', sub: 'Paint mask & apply AI', left: mobile ? 244 : 354, top: 638, w: 192, h: 233, img: ai },
  { id: 'styleB', title: 'Style Variation B', sub: 'Branch into alternative\naesthetics', left: mobile ? 500 : 738, top: 60, w: 192, h: 215, img: b },
  { id: 'styleA', title: 'Style Variation A', sub: 'Explore different artistic\ndirections', left: mobile ? 500 : 738, top: 338, w: 192, h: 216, img: a },
  { id: 'colorShift', title: 'Color Shift', sub: 'Adjust tones and\natmosphere', left: mobile ? 500 : 738, top: 646, w: 192, h: 216, img: colorImg },
]

const R = 14
const rc = (id) => { const c = cards.find(x => x.id === id); return { x: c.left + c.w, y: c.top + c.h / 2 } }
const lc = (id) => { const c = cards.find(x => x.id === id); return { x: c.left, y: c.top + c.h / 2 } }
const mid = (a, b) => (rc(a).x + lc(b).x) / 2

const elbow = (sx, sy, mx, dx, dy) => {
  const goUp = dy < sy
  return goUp
    ? `M ${sx} ${sy} H ${mx - R} Q ${mx} ${sy} ${mx} ${sy - R - 4} V ${dy} H ${dx}`
    : `M ${sx} ${sy} H ${mx - R} Q ${mx} ${sy} ${mx} ${sy + R - 4} V ${dy} H ${dx}`
}

const arrowDefs = () => {
  const origR = rc('original'), finalL = lc('final'), finalR = rc('final')
  const enhR = rc('enhance'), enhL = lc('enhance')
  const styleBL = lc('styleB'), styleAL = lc('styleA'), colorL = lc('colorShift')
  return [
    { id: 'orig-final', d: elbow(origR.x, origR.y, mid('original', 'final'), finalL.x, finalL.y) },
    { id: 'orig-ai', d: elbow(origR.x, origR.y, mid('original', 'enhance'), enhL.x, enhL.y) },
    { id: 'final-styleB', d: elbow(finalR.x, finalR.y, mid('final', 'styleB'), styleBL.x, styleBL.y) },
    { id: 'final-styleA', d: elbow(finalR.x, finalR.y, mid('final', 'styleA'), styleAL.x, styleAL.y) },
    { id: 'ai-styleA', d: elbow(enhR.x, enhR.y, mid('enhance', 'styleA'), styleAL.x, styleAL.y) },
    { id: 'ai-color', d: elbow(enhR.x, enhR.y, mid('enhance', 'colorShift'), colorL.x, colorL.y) },
  ]
}

const CANVAS_W = 960
const CANVAS_H = 920

const WorkflowCanvas = ({ arrows, arrowsActive, hoveredCardId, onHoverCard }) => (
  <div
    className={`relative overflow-hidden ${arrowsActive ? 'workflow-arrows-active' : ''}`}
    style={{ width: CANVAS_W, height: CANVAS_H }}
  >
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}>
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
      <div
        key={c.id}
        className="absolute flex flex-col items-center gap-2"
        style={{ left: c.left, top: c.top }}
        onMouseEnter={() => onHoverCard(c.id)}
        onMouseLeave={() => onHoverCard(null)}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`card-border-wrap ${hoveredCardId === c.id ? 'card-border-spin' : ''}`}
          style={{ width: c.w, height: c.h }}
        >
          <div className="card-img-wrap" style={{ width: c.w - 8, height: c.h - 8 }}>
            <img src={c.img} alt={c.title} className="w-full h-full object-cover block" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-center w-full max-w-[180px] min-w-0 overflow-hidden px-0.5">
          <span className="text-white text-[13px] font-bold leading-tight text-center break-words">{c.title}</span>
          <span className="text-[#7a8fb5] text-[10.5px] font-normal leading-[1.45] whitespace-pre-line">{c.sub}</span>
        </div>
      </div>
    ))}
  </div>
)

const ArrowCard = () => {
  const arrows = arrowDefs()
  const [hoverWorkflow, setHoverWorkflow] = useState(false)
  const [clickWorkflow, setClickWorkflow] = useState(false)
  const [hoveredCardId, setHoveredCardId] = useState(null)
  const [showDownloadvizMaker, setShowDownloadvizMaker] = useState(false);
  const arrowsActive = hoverWorkflow || clickWorkflow
  return (
    <>
      {mobile ? <DownloadvizMakerForMobilemodal
        isOpen={showDownloadvizMaker}
        onClose={() => setShowDownloadvizMaker(false)}
      /> : <DownloadvizMakermodal
        isOpen={showDownloadvizMaker}
        onClose={() => setShowDownloadvizMaker(false)}
      />
      }
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
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: border-color 0.25s ease;
        }
        .card-border-wrap::before {
          content: '';
          position: absolute;
          left: 50%; top: 50%;
          width: 160px; height: 400px;
          transform-origin: top center;
          transform: translateX(-50%);
          background: linear-gradient(90deg, rgba(0,255,255,0) 0%, #8ef5e8 25%, #ff9b7a 50%, #ffdc7a 75%, rgba(0,255,255,0) 100%);
          animation: none;
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 1;
          mix-blend-mode: screen;
        }
        .card-border-wrap.card-border-spin {
          border-color: transparent;
        }
        .card-border-wrap.card-border-spin::before {
          animation: spin-beam 3s linear infinite;
          opacity: 1;
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
        .arrow-path-anim {
          stroke: url(#ag-bright); stroke-width: 2.5; fill: none; stroke-dasharray: 10 10;
          animation: none; opacity: 0;
          transition: opacity 0.25s ease;
        }
        .workflow-arrows-active .arrow-path-anim {
          animation: dash-march 0.6s linear infinite;
          opacity: 0.85;
        }
      `}</style>

      <section className="w-full max-w-full min-w-0 flex flex-col items-center py-20 box-border">

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
            onClick={() => setShowDownloadvizMaker(true)}
          >
            Try For Free
          </button>
        </div>

        {/* Fixed web canvas width; narrow viewports scroll horizontally */}
        <div className="w-full min-w-0 max-w-full mt-10 px-2 sm:px-3 box-border overflow-x-auto overflow-y-hidden [scrollbar-gutter:stable]">
          <div className="flex w-max min-w-full justify-center mx-auto pb-1">
            <div
              role="button"
              tabIndex={0}
              aria-label="Workflow diagram — hover or click for arrow animation; hover a card for its border. Scroll horizontally on small screens."
              className="relative flex-shrink-0 outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-cyan-400/50 cursor-pointer overflow-hidden"
              style={{ width: CANVAS_W, height: CANVAS_H }}
              onMouseEnter={() => setHoverWorkflow(true)}
              onMouseLeave={() => setHoverWorkflow(false)}
              onClick={() => setClickWorkflow((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setClickWorkflow((v) => !v)
                }
              }}
            >
              <WorkflowCanvas
                arrows={arrows}
                arrowsActive={arrowsActive}
                hoveredCardId={hoveredCardId}
                onHoverCard={setHoveredCardId}
              />
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default ArrowCard