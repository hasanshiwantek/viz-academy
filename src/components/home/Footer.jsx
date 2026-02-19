import React from 'react'
import logo from '../../assets/nav-logo.png'
import bgimg1 from '../../assets/footer2.png'
const Footer = () => {
  return (
    <footer
      className="relative w-full"
      style={{
        backgroundImage: `url(${bgimg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0" style={{ background: 'rgba(3,8,24,0.82)' }} /> */}

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-14 pb-6">

        {/* ── Main Row ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 pb-10 border-b border-white/10">

          {/* Left — Logo + desc + socials */}
          <div className="flex flex-col gap-4 max-w-[25%]">
            <img src={logo} alt="VizMaker" style={{ height: '60px', width: 'auto', objectFit: 'contain', alignSelf: 'flex-start' }} />
            <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              VizMaker is the only AI-powered app that works directly inside SketchUp, 3DS Max, Revit, and more.
            </p>

            {/* Social icons */}
    <div className="flex items-center gap-3 mt-1">
  {[
    // Facebook
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>,
    // Instagram
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>,
    // LinkedIn
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>,
    // YouTube
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>,
  ].map((icon, i) => (
    <button
      key={i}
      className="flex items-center justify-center rounded-full transition-all duration-200"
      style={{
        width: 48,
        height: 48,
        background: 'transparent',
        border: 'none',
        color: '#00FFFF',
        cursor: 'pointer',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.5)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(89.69deg, #00FFFF -1.81%, #003131 95.62%)'
        e.currentTarget.style.color = '#ffffff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = '#00FFFF'
      }}
    >
      {icon}
    </button>
  ))}
</div>

          </div>

          {/* Right — Nav columns */}
          <div className="flex flex-1 flex-wrap gap-8 lg:justify-end">
            {[
              {
                heading: 'Product',
                links: ['Features', 'Pricing', 'Download', 'Changelog'],
              },
              {
                heading: 'Supported Apps',
                links: ['SketchUp', '3DS Max', 'Revit', 'Rhino'],
              },
              {
                heading: 'Resources',
                links: ['Documentation', 'Tutorials', 'Blog', 'Community'],
              },
              {
                heading: 'Company',
                links: ['About', 'Careers', 'Contact', 'Privacy'],
              },
            ].map((col) => (
              <div key={col.heading} className="flex flex-col gap-3 min-w-[120px]">
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  {col.heading}
                </h4>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{ fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#00FFFF'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5">
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            © 2026 VizMaker. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >Terms & Conditions</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>·</span>
            <a href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer