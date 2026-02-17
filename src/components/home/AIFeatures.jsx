// import React, { useState } from 'react'

// const features = [
//   {
//     id: 1,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
//         <path d="M14 3h7v7"/><path d="M14 10 21 3"/>
//       </svg>
//     ),
//     title: 'Screen-to-Render',
//     description: 'Transform screenshots from 3DS Max, SketchUp, Revit, or any 3D software into stunning photorealistic renders instantly.',
//     image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop&auto=format',
//   },
//   {
//     id: 2,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
//         <path d="M8 10h.01M12 10h.01M16 10h.01"/>
//       </svg>
//     ),
//     title: 'AI Upscaling',
//     description: 'Industry-leading upscaling powered by Magnific Creative and Magnific Precision V2. Transform low-res images into ultra-sharp, professional quality.',
//     image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=220&fit=crop&auto=format',
//   },
//   {
//     id: 3,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <polygon points="23 7 16 12 23 17 23 7"/>
//         <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
//       </svg>
//     ),
//     title: 'AI Animations',
//     description: 'Bring your renders to life with cutting-edge video engines: Veo, Kling, Seedance, and Sora. Create cinematic walkthroughs in seconds.',
//     image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=220&fit=crop&auto=format',
//   },
//   {
//     id: 4,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 2L2 7l10 5 10-5-10-5z"/>
//         <path d="M2 17l10 5 10-5"/>
//         <path d="M2 12l10 5 10-5"/>
//       </svg>
//     ),
//     title: '3D Model Generation',
//     description: 'Generate 3D models with Meshy AI and Tripo3D integration. Preview, refine, and export directly to your favorite 3D software.',
//     image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=220&fit=crop&auto=format',
//   },
//   {
//     id: 5,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10"/>
//         <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
//       </svg>
//     ),
//     title: 'Smart Inpainting',
//     description: 'Paint exactly where you want changes. Our AI intelligently understands your intent and seamlessly modifies specific areas.',
//     image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=220&fit=crop&auto=format',
//   },
//   {
//     id: 6,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
//         <circle cx="8.5" cy="8.5" r="1.5"/>
//         <polyline points="21 15 16 10 5 21"/>
//       </svg>
//     ),
//     title: 'Image Composition',
//     description: 'Paste and position any image onto your canvas. Perfect for adding furniture, people, or decorative elements with natural blending.',
//     image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=220&fit=crop&auto=format',
//   },
//   {
//     id: 7,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
//       </svg>
//     ),
//     title: 'Multi-Image Merge',
//     description: 'Combine multiple images to add specific objects, textures, or elements. Create complex scenes from simple components.',
//     image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=220&fit=crop&auto=format',
//   },
//   {
//     id: 8,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
//         <polyline points="14 2 14 8 20 8"/>
//         <line x1="16" y1="13" x2="8" y2="13"/>
//         <line x1="16" y1="17" x2="8" y2="17"/>
//       </svg>
//     ),
//     title: 'Custom Prompt Presets',
//     description: 'Save your favorite prompts and styles. Build a library of tailored presets for consistent, brand-aligned results every time.',
//     image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=400&h=220&fit=crop&auto=format',
//   },
//   {
//     id: 9,
//     icon: (
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 20h9"/>
//         <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
//       </svg>
//     ),
//     title: 'Text-to-Image',
//     description: "Create any image from scratch using the world's top AI engines. Describe your vision and watch it materialize in seconds.",
//     image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=220&fit=crop&auto=format',
//   },
// ]

// const FeatureCard = ({ feature }) => {
//   const [hovered, setHovered] = useState(false)

//   return (
//     <div
//       className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
//       style={{
//         background: 'rgba(255,255,255,0.03)',
//         border: '1px solid rgba(255,255,255,0.08)',
//         transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
//         boxShadow: hovered
//           ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,255,0.15)'
//           : '0 4px 20px rgba(0,0,0,0.3)',
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden h-40">
//         <img
//           src={feature.image}
//           alt={feature.title}
//           className="w-full h-full object-cover transition-transform duration-500"
//           style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
//         />

//         {/* Bottom fade to dark */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

//         {/* Cyan glow on hover — var(--primary-color) */}
//         <div
//           className="absolute inset-0 transition-opacity duration-300"
//           style={{
//             background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,255,0.14) 0%, transparent 70%)',
//             opacity: hovered ? 1 : 0,
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4">

//         {/* Icon badge — uses --primary-color and --button-bg */}
//         <div
//           className="flex items-center justify-center w-8 h-8 rounded-lg mb-3 transition-all duration-300"
//           style={{
//             background: hovered ? 'var(--button-bg)' : 'rgba(0,255,255,0.06)',
//             border: '1px solid rgba(0,255,255,0.2)',
//             color: 'var(--primary-color)',
//           }}
//         >
//           {feature.icon}
//         </div>

//         {/* Title — uses --text-color */}
//         <h3
//           className="font-bold mb-2 leading-snug"
//           style={{
//             fontSize: '15px',
//             letterSpacing: '-0.01em',
//             color: 'var(--text-color)',
//           }}
//         >
//           {feature.title}
//         </h3>

//         {/* Description */}
//         <p
//           className="leading-relaxed"
//           style={{
//             fontSize: '12.5px',
//             color: 'rgba(255,255,255,0.45)',
//           }}
//         >
//           {feature.description}
//         </p>
//       </div>

//       {/* Bottom accent line — uses --primary-color */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
//         style={{
//           background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
//           opacity: hovered ? 1 : 0,
//         }}
//       />
//     </div>
//   )
// }

// const AIFeatures = () => {
//   return (
//     <section className="min-h-screen py-20 px-6">

//       {/* ── Header ── */}
//       <div className="text-center max-w-xl mx-auto mb-14">

//         <h2
//           className="font-extrabold leading-tight mb-4"
//           style={{
//             fontSize: 'clamp(28px, 4vw, 42px)',
//             color: 'var(--text-color)',
//             letterSpacing: '-0.02em',
//           }}
//         >
//           Powerful AI Features,
//           <br />
//           {/* Multicolor gradient text — var(--gradient-bg) */}
//           <span
//             style={{
//               background: 'var(--gradient-bg)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}
//           >
//             Right Where You Work
//           </span>
//         </h2>

//         <p
//           className="leading-relaxed"
//           style={{
//             fontSize: '14px',
//             color: 'rgba(255,255,255,0.4)',
//           }}
//         >
//           Install VizMaker once, use it everywhere. Direct integration means no
//           <br />
//           export/import hassles.
//         </p>
//       </div>

//       {/* ── 3×3 Feature Grid ── */}
//       <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
//         {features.map((feature) => (
//           <FeatureCard key={feature.id} feature={feature} />
//         ))}
//       </div>

//     </section>
//   )
// }

// export default AIFeatures






import React, { useState } from 'react'

const features = [
  {
    id: 1,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M14 3h7v7"/><path d="M14 10 21 3"/>
      </svg>
    ),
    title: 'Screen-to-Render',
    description: 'Transform screenshots from 3DS Max, SketchUp, Revit, or any 3D software into stunning photorealistic renders instantly.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop&auto=format',
  },
  {
    id: 2,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h.01M12 10h.01M16 10h.01"/>
      </svg>
    ),
    title: 'AI Upscaling',
    description: 'Industry-leading upscaling powered by Magnific Creative and Magnific Precision V2. Transform low-res images into ultra-sharp, professional quality.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=220&fit=crop&auto=format',
  },
  {
    id: 3,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: 'AI Animations',
    description: 'Bring your renders to life with cutting-edge video engines: Veo, Kling, Seedance, and Sora. Create cinematic walkthroughs in seconds.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=220&fit=crop&auto=format',
  },
  {
    id: 4,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: '3D Model Generation',
    description: 'Generate 3D models with Meshy AI and Tripo3D integration. Preview, refine, and export directly to your favorite 3D software.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=220&fit=crop&auto=format',
  },
  {
    id: 5,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
    title: 'Smart Inpainting',
    description: 'Paint exactly where you want changes. Our AI intelligently understands your intent and seamlessly modifies specific areas.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=220&fit=crop&auto=format',
  },
  {
    id: 6,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: 'Image Composition',
    description: 'Paste and position any image onto your canvas. Perfect for adding furniture, people, or decorative elements with natural blending.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=220&fit=crop&auto=format',
  },
  {
    id: 7,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Multi-Image Merge',
    description: 'Combine multiple images to add specific objects, textures, or elements. Create complex scenes from simple components.',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=220&fit=crop&auto=format',
  },
  {
    id: 8,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Custom Prompt Presets',
    description: 'Save your favorite prompts and styles. Build a library of tailored presets for consistent, brand-aligned results every time.',
    image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=400&h=220&fit=crop&auto=format',
  },
  {
    id: 9,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Text-to-Image',
    description: "Create any image from scratch using the world's top AI engines. Describe your vision and watch it materialize in seconds.",
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=220&fit=crop&auto=format',
  },
]

const FeatureCard = ({ feature }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 p-5"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,255,0.15)'
          : '0 4px 20px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-40">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover transition-transform duration-500 rounded-lg"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />

        {/* Bottom fade to dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

        {/* Cyan glow on hover — var(--primary-color) */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,255,0.14) 0%, transparent 70%)',
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Icon badge — uses --primary-color and --button-bg */}
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg mb-3 transition-all duration-300"
          style={{
            background: hovered ? 'var(--button-bg)' : 'rgba(0,255,255,0.06)',
            border: '1px solid rgba(0,255,255,0.2)',
            color: 'var(--primary-color)',
          }}
        >
          {feature.icon}
        </div>

        {/* Title — uses --text-color */}
        <h3
          className="font-bold mb-2 leading-snug"
          style={{
            fontSize: '15px',
            letterSpacing: '-0.01em',
            color: 'var(--text-color)',
          }}
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed"
          style={{
            fontSize: '12.5px',
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          {feature.description}
        </p>
      </div>

      {/* Bottom accent line — uses --primary-color */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
          opacity: hovered ? 1 : 0,
        }}
      />
    </div>
  )
}

const AIFeatures = () => {
  return (
    <section className=" py-20 px-6 flex justify-center flex-col items-center">

      {/* ── Header ── */}
      <div className="text-center max-w-xl mx-auto mb-10 ">

        <h2
          className="font-extrabold leading-tight mb-4"
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: 'var(--text-color)',
            letterSpacing: '-0.02em',
          }}
        >
          Powerful AI Features,
          <br />
          {/* Multicolor gradient text — var(--gradient-bg) */}
          <span
            style={{
              background: 'var(--gradient-bg)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Right Where You Work
          </span>
        </h2>

        <p
          className="leading-relaxed"
          style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Install VizMaker once, use it everywhere. Direct integration means no
          <br />
          export/import hassles.
        </p>
      </div>

      {/* ── 3×3 Feature Grid ── */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto ">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>

    </section>
  )
}

export default AIFeatures