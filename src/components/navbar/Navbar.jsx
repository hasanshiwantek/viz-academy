import { useState } from 'react'
import navlogo from '../../assets/nav-logo.png'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = ['Home', 'Products', 'Pricing', 'How It Works']

  return (
    <nav
      className="w-full flex items-center justify-between px-5 lg:px-10 xl:px-0 xl:justify-evenly backdrop-blur-md bg-black/30 border-b border-white/10"
      style={{ height: '88px' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={navlogo}
          alt="VizMaker Logo"
          className="w-auto"
          style={{ height: '60px', objectFit: 'contain' }}
        />
      </div>

      {/* Desktop Nav Links — hidden on mobile */}
      <div
        className="hidden md:flex md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[23.4%] items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2"
        style={{ height: '44px' }}
      >
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`flex-1 h-full rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              active === link
                ? 'bg-white/10 text-white border border-white/20'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Desktop Download Button — hidden on mobile */}
      <button
        className="hidden md:flex relative md:w-[25%] lg:w-[15%] xl:w-[14%] 2xl:w-[10.7%] items-center justify-center gap-2 text-[#00FFFF] rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-all whitespace-nowrap overflow-hidden"
        style={{ 
          height: '40px',
          background: 'linear-gradient(90deg, rgba(9, 49, 49, 0.2) 0%, rgba(0, 255, 255, 0.2) 122.41%)'
        }}
      >
        <span 
          className="absolute inset-0 rounded-full"
          style={{
            padding: '2px',
            background: 'linear-gradient(171.77deg, rgba(255, 255, 255, 0.7) -5.76%, rgba(255, 255, 255, 0.2) 39.41%, rgba(255, 255, 255, 0) 78.14%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none'
          }}
        />
        
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download VizMaker
      </button>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
      >
        <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActive(link)
                  setIsMenuOpen(false)
                }}
                className={`w-full py-3 px-4 rounded-lg text-left transition-all ${
                  active === link
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link}
              </button>
            ))}

            {/* Mobile Download Button */}
            <button
              className="relative flex items-center justify-center gap-2 text-[#00FFFF] rounded-full text-sm font-medium hover:opacity-90 transition-all mt-4 overflow-hidden"
              style={{ 
                height: '44px',
                background: 'linear-gradient(90deg, rgba(9, 49, 49, 0.2) 0%, rgba(0, 255, 255, 0.2) 122.41%)'
              }}
            >
              <span 
                className="absolute inset-0 rounded-full"
                style={{
                  padding: '2px',
                  background: 'linear-gradient(171.77deg, rgba(255, 255, 255, 0.7) -5.76%, rgba(255, 255, 255, 0.2) 39.41%, rgba(255, 255, 255, 0) 78.14%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none'
                }}
              />
              
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download VizMaker
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar