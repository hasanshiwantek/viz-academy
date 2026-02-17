import { useState } from 'react'
import navlogo from '../../assets/nav-logo.png'
 
const Navbar = () => {
  const [active, setActive] = useState('Home')
  const navLinks = ['Home', 'Products', 'Pricing', 'How It Works']
 
  return (
    <nav
      className="w-full flex items-center justify-evenly backdrop-blur-md bg-black/30 border-b border-white/10"
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
 
      {/* Nav Links */}
      <div
        className="flex 2xl:w-[23.4%] items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2"
        style={{ height: '44px' }}
      >
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`flex-1 h-full rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              active === link
                ? 'bg-white/10 text-white border border-white/20'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {link}
          </button>
        ))}
      </div>
 
      {/* Download Button */}
      <button
        className="flex 2xl:w-[10.7%] items-center justify-center gap-2 border border-cyan-400/60 text-cyan-300 rounded-full text-xs sm:text-sm font-medium hover:bg-cyan-400/10 transition-all whitespace-nowrap"
        style={{ height: '40px' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download VizMaker
      </button>
    </nav>
  )
}
 
export default Navbar