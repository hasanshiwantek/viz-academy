import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Download & Install',
    desc: 'Download VizMaker on your computer using fast and secure Microsoft Store',
    side: 'right',
    width: 428,
    height: 177,
  },
  {
    number: '02',
    title: 'Activate Plugin',
    desc: 'Open VizMaker and install the plugin',
    side: 'left',
    width: 438,
    height: 177,
  },
  {
    number: '03',
    title: 'Create with AI',
    desc: 'Start creating: choose any AI model, upload your image, enter your prompt, and click "Make". The magic happens in seconds.',
    side: 'right',
    width: 428,
    height: 231,
  },
]

const StepCard = ({ title, desc, width, height }) => (
  <div
    className="flex flex-col gap-2 px-5 py-4 rounded-2xl"
    style={{
      background: 'rgba(0,40,50,0.55)',
      border: '1px solid rgba(0,180,160,0.25)',
      width: `${width}px`,
      height: `${height}px`,
      backdropFilter: 'blur(10px)',
      boxSizing: 'border-box',
    }}
  >
    <h3 className="text-white font-bold text-4xl m-0 leading-tight">{title}</h3>
    <p className="text-lg leading-relaxed m-0" style={{ color: 'rgba(160,210,210,0.75)' }}>{desc}</p>
  </div>
)

const NumberBadge = ({ number }) => (
  <div
    className="flex items-center justify-center rounded-full font-bold text-sm shrink-0"
    style={{
      width: 44,
      height: 44,
      background: 'linear-gradient(135deg, #00b2b2, #007a7a)',
      color: '#fff',
      boxShadow: '0 0 18px rgba(0,200,200,0.45)',
      border: '2px solid rgba(0,220,220,0.3)',
      zIndex: 10,
      position: 'relative',
    }}
  >
    {number}
  </div>
)

const GetStarted = () => {
  // Total width = max card width (438) + connector (40) + badge (44) + connector (40) + max card width (438) = 1000
  // But we only show one card per row, other side is empty space
  // Center column = badge (44px), side connectors = 40px each
  // Left col = 438px, Right col = 438px

  const BADGE = 44
  const CONNECTOR = 40
  const LEFT_COL = 438
  const RIGHT_COL = 438
  const TOTAL = LEFT_COL + CONNECTOR + BADGE + CONNECTOR + RIGHT_COL

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060e18] px-6 py-16">
      <div className="relative flex flex-col" style={{ width: TOTAL }}>

        {/* Vertical line — sits behind everything */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: LEFT_COL + CONNECTOR + BADGE / 2,
            width: 2,
            background: 'linear-gradient(to bottom, transparent 0%, #00b2b2 5%, #00b2b2 95%, transparent 100%)',
            zIndex: 0,
          }}
        />

        {steps.map((step, i) => {
          const isRight = step.side === 'right'
          return (
            <div
              key={i}
              className="flex items-center"
              style={{
                marginBottom: i < steps.length - 1 ? 60 : 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Left card area */}
              <div style={{ width: LEFT_COL, display: 'flex', justifyContent: 'flex-end' }}>
                {!isRight && (
                  <StepCard title={step.title} desc={step.desc} width={step.width} height={step.height} />
                )}
              </div>

              {/* Left connector */}
              <div style={{
                width: CONNECTOR,
                height: 2,
                background: !isRight ? '#00b2b2' : 'transparent',
                flexShrink: 0,
              }} />

              {/* Badge */}
              <NumberBadge number={step.number} />

              {/* Right connector */}
              <div style={{
                width: CONNECTOR,
                height: 2,
                background: isRight ? '#00b2b2' : 'transparent',
                flexShrink: 0,
              }} />

              {/* Right card area */}
              <div style={{ width: RIGHT_COL, display: 'flex', justifyContent: 'flex-start' }}>
                {isRight && (
                  <StepCard title={step.title} desc={step.desc} width={step.width} height={step.height} />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GetStarted