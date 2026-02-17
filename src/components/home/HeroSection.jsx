import heroBg from '../../assets/hero section.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import Navbar from '../navbar/Navbar'
 
const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar — background ke upar */}
      <Navbar />
 
      {/* Main Content — navbar ke neeche */}
      <div
        className="flex flex-col items-center justify-center text-center px-4 w-full"
        style={{ paddingTop: '88px' }}  
      >
 
        {/* Badge */}
   
    <div
  className="flex items-center justify-center gap-2 border border-cyan-400/50 text-cyan-300 text-sm px-4 py-1.5 rounded-full mt-16 mb-6 bg-white/5 backdrop-blur-sm"
  style={{ width: '13.13%', height: '32px' }}
>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          AI-Powered app for designers
        </div>
 
        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
          Transform Your 3D
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-orange-400 bg-clip-text text-transparent">
            Workflow with AI
          </span>
        </h1>
 
        {/* Subtext */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          VizMaker is the only AI-powered app that works directly inside SketchUp,
          3DS Max, Revit, and more. Generate photorealistic renders and 3D models
          instantly—no web uploads, no waiting.
        </p>
 
        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mb-16">
          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200 shadow-lg shadow-cyan-500/30">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download VizMaker
          </button>
 
          <button className="flex items-center gap-2 border border-cyan-400/60 text-cyan-300 px-7 py-3.5 rounded-full font-medium text-sm hover:bg-cyan-400/10 transition-all duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <polygon points="10 8 16 11 10 14 10 8" fill="currentColor"/>
            </svg>
            Watch Demo
          </button>
        </div>
 
        {/* Phone Cards */}
        <div className="flex items-end justify-center gap-4 pb-10">
 
          {/* Left Card */}
          <div className="w-[220px] h-[380px] rounded-[2rem] overflow-hidden border-2 border-cyan-400/30 shadow-2xl rotate-[-6deg] translate-y-8 relative bg-gray-900">
            <img src={card1} alt="render 1" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
 
          {/* Center Card */}
          <div className="w-[260px] h-[460px] rounded-[2rem] overflow-hidden border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/20 relative z-10 bg-gray-900">
            <img src={card2} alt="render 2" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
 
          {/* Right Card */}
          <div className="w-[220px] h-[380px] rounded-[2rem] overflow-hidden border-2 border-cyan-400/30 shadow-2xl rotate-[6deg] translate-y-8 relative bg-gray-900">
            <img src={card3} alt="render 3" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  )
}
 
export default HeroSection