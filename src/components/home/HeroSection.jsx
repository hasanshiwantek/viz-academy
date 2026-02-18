// import { motion } from 'framer-motion'
// import heroBg from '../../assets/hero section.png'
// import card1 from '../../assets/card1.png'
// import card2 from '../../assets/card2.png'
// import card3 from '../../assets/card3.png'
// import Navbar from '../navbar/Navbar'

// const HeroSection = () => {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">

//       {/* Animated Background */}
//       <motion.div
//         className="absolute inset-0 -z-10"
//         style={{
//           backgroundImage: `url(${heroBg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center top',
//           backgroundRepeat: 'no-repeat',
//         }}
//         animate={{
//           scale: [1, 1.08, 1],
//           x: [0, -15, 10, -5, 0],
//           y: [0, 10, -8, 12, 0],
//         }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: [0.45, 0.05, 0.55, 0.95]
//         }}
//       />

//       {/* Navbar with fade in */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Navbar />
//       </motion.div>

//       {/* Main Content */}
//       <div
//         className="flex flex-col items-center justify-center text-center px-4 w-full"
//         style={{ paddingTop: '88px' }}
//       >

//         {/* Badge - fade in */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex items-center justify-center gap-2 text-white text-sm px-4 py-1.5 rounded-md mt-8 mb-6 bg-white/5 backdrop-blur-sm"
//           style={{
//             border: '1px solid #FFFFFF1A',
//             boxShadow: '0 0 10px rgba(156, 163, 175, 0.1), 0 0 20px rgba(156, 163, 175, 0.05)'
//           }}
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="#22d3ee">
//             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
//           </svg>
//           AI-Powered app for designers
//         </motion.div>

//         {/* Heading - stagger animation */}
//         <motion.h1
//           className="text-6xl md:text-7xl font-bold leading-tight mb-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <span
//             className="block bg-clip-text text-transparent"
//             style={{
//               backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 40%,  #030612 100%)',
//             }}
//           >
//             Transform Your 3D
//           </span>

//           <motion.span
//             className="block bg-clip-text text-transparent md:mt-5"
//             style={{
//               backgroundImage: 'linear-gradient(90deg, #00FFFF 0%, #FF7E57 32%, #FFC457 60%, #00B2B2 100%)',
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//           >
//             Workflow with AI
//           </motion.span>
//         </motion.h1>

//         {/* Subtext - fade in */}
//         <motion.p
//           className="text-gray-400 text-lg max-w-100 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[43%] 2xl:max-w-[32%] mx-auto mb-10 leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           VizMaker is the only AI-powered app that works directly inside SketchUp,
//           3DS Max, Revit, and more. Generate photorealistic renders and 3D models
//           instantly—no web uploads, no waiting.
//         </motion.p>

//         {/* CTA Buttons - hover effects */}
//         <motion.div
//           className="flex items-center gap-4 mb-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//         >
//           <motion.button
//             className="relative flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200 shadow-lg shadow-cyan-500/30 overflow-hidden"
//             style={{
//               background: 'linear-gradient(89.69deg, #00FFFF -1.81%, #003131 95.62%)'
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span
//               className="absolute inset-0 rounded-full"
//               style={{
//                 padding: '2px',
//                 background: 'linear-gradient(171.77deg, rgba(255, 255, 255, 0) -5.76%, rgba(255, 255, 255, 0.2) 32.96%, rgba(255, 255, 255, 0.7) 78.14%)',
//                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 pointerEvents: 'none'
//               }}
//             />

//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
//               <polyline points="7 10 12 15 17 10"/>
//               <line x1="12" y1="15" x2="12" y2="3"/>
//             </svg>
//             Download VizMaker
//           </motion.button>

//           <motion.button
//             className="relative flex items-center gap-2 text-cyan-300 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200 overflow-hidden"
//             style={{
//               background: 'linear-gradient(90deg, rgba(9, 49, 49, 0.2) 0%, rgba(0, 255, 255, 0.2) 122.41%)'
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span
//               className="absolute inset-0 rounded-full"
//               style={{
//                 padding: '2px',
//                 background: 'linear-gradient(171.77deg, rgba(255, 255, 255, 0.7) -5.76%, rgba(255, 255, 255, 0.2) 39.41%, rgba(255, 255, 255, 0) 78.14%)',
//                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 pointerEvents: 'none'
//               }}
//             />

//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <rect x="2" y="3" width="20" height="14" rx="2"/>
//               <polygon points="10 8 16 11 10 14 10 8" fill="currentColor"/>
//             </svg>
//             Watch Demo
//           </motion.button>
//         </motion.div>

//         {/* Phone Cards - NO ANIMATION */}
//         <div className="flex items-end justify-center gap-4 pb-10">
//           {/* Left Card */}
//           <div
//             className="rounded-[32px] border-[10px] border-cyan-400/30 shadow-2xl relative overflow-hidden"
//             style={{
//               width: '262px',
//               height: '440px',
//               transform: 'rotate(-4.94deg) translateY(32px)'
//             }}
//           >
//             <img
//               src={card2}
//               alt="render 1"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="#00FFFF">
//                   <polygon points="5 3 19 12 5 21 5 3"/>
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Center Card */}
//           <div
//             className="rounded-[32px] border-[10px] border-cyan-400/60 shadow-2xl shadow-cyan-500/20 relative z-10 overflow-hidden"
//             style={{
//               width: '262px',
//               height: '440px'
//             }}
//           >
//             <img
//               src={card2}
//               alt="render 2"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="#00FFFF">
//                   <polygon points="5 3 19 12 5 21 5 3"/>
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Right Card */}
//           <div
//             className="rounded-[32px] border-[10px] border-cyan-400/30 shadow-2xl relative overflow-hidden"
//             style={{
//               width: '262px',
//               height: '440px',
//               transform: 'rotate(4.94deg) translateY(32px)'
//             }}
//           >
//             <img
//               src={card2}
//               alt="render 3"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="#00FFFF">
//                   <polygon points="5 3 19 12 5 21 5 3"/>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

import { motion } from "framer-motion";
import { useState } from "react";
import heroBg from "../../assets/hero section.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import Navbar from "../navbar/Navbar";
const PhoneCard = ({ image, rotation, translateY, isCenter }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer transition-all duration-300"
      style={{
        width: "262px",
        height: "440px",
        transform: `rotate(${rotation}deg) translateY(${translateY}px) ${
          hovered ? "scale(1.02)" : "scale(1)"
        }`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 🔥 Outer Border Container */}
      <div
        className="relative w-full h-full rounded-[32px] overflow-hidden"
        style={{
          padding: "10px",
          background: hovered
            ? "transparent"
            : isCenter
              ? "rgba(34, 211, 238, 0.6)"
              : "rgba(34, 211, 238, 0.3)",
          transition: "background 0.3s ease",
        }}
      >
        {/* 🔥 ANIMATED GRADIENT BACKGROUND - Only shows on hover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            background:
              "conic-gradient(from 0deg, #00ffff, #8ef5e8, #ff9b7a, #ffdc7a, #00ffff)",
            animation: hovered ? "gradient-spin 3s linear infinite" : "none",
          }}
        />

        {/* 🔥 Card Content - Sits on top of gradient */}
        <div
          className="relative rounded-[24px] shadow-2xl overflow-hidden h-full z-10"
          style={{
            background: "rgb(3,6,18)",
            boxShadow: isCenter
              ? "0 25px 50px -12px rgba(6, 182, 212, 0.2)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={image}
            alt="render"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all duration-300"
              style={{
                width: isCenter ? "48px" : "40px",
                height: isCenter ? "48px" : "40px",
              }}
            >
              <svg
                width={isCenter ? "18" : "16"}
                height={isCenter ? "18" : "16"}
                viewBox="0 0 24 24"
                fill="#00FFFF"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -15, 10, -5, 0],
          y: [0, 10, -8, 12, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      />

      {/* Navbar with fade in */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />
      </motion.div>

      {/* Main Content */}
      <div
        className="flex flex-col items-center justify-center text-center px-4 w-full"
        style={{ paddingTop: "88px" }}
      >
        {/* Badge - fade in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-white text-sm px-4 py-1.5 rounded-md mt-8 mb-6 bg-white/5 backdrop-blur-sm"
          style={{
            border: "1px solid #FFFFFF1A",
            boxShadow:
              "0 0 10px rgba(156, 163, 175, 0.1), 0 0 20px rgba(156, 163, 175, 0.05)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#22d3ee">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          AI-Powered app for designers
        </motion.div>

        {/* Heading - stagger animation */}
        <motion.h1
          className="text-6xl md:text-7xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 40%,  #030612 100%)",
            }}
          >
            Transform Your 3D
          </span>

          <motion.span
            className="block bg-clip-text text-transparent md:mt-5"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #00FFFF 0%, #FF7E57 32%, #FFC457 60%, #00B2B2 100%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Workflow with AI
          </motion.span>
        </motion.h1>

        {/* Subtext - fade in */}
        <motion.p
          className="text-gray-400 text-lg max-w-100 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[43%] 2xl:max-w-[32%] mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          VizMaker is the only AI-powered app that works directly inside
          SketchUp, 3DS Max, Revit, and more. Generate photorealistic renders
          and 3D models instantly—no web uploads, no waiting.
        </motion.p>

        {/* CTA Buttons - hover effects */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            className="relative flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200 shadow-lg shadow-cyan-500/30 overflow-hidden"
            style={{
              background:
                "linear-gradient(89.69deg, #00FFFF -1.81%, #003131 95.62%)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                padding: "2px",
                background:
                  "linear-gradient(171.77deg, rgba(255, 255, 255, 0) -5.76%, rgba(255, 255, 255, 0.2) 32.96%, rgba(255, 255, 255, 0.7) 78.14%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
              }}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download VizMaker
          </motion.button>

          <motion.button
            className="relative flex items-center gap-2 text-cyan-300 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200 overflow-hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(9, 49, 49, 0.2) 0%, rgba(0, 255, 255, 0.2) 122.41%)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                padding: "2px",
                background:
                  "linear-gradient(171.77deg, rgba(255, 255, 255, 0.7) -5.76%, rgba(255, 255, 255, 0.2) 39.41%, rgba(255, 255, 255, 0) 78.14%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
              }}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <polygon points="10 8 16 11 10 14 10 8" fill="currentColor" />
            </svg>
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Phone Cards with Animated Borders */}
        <div className="flex items-end justify-center gap-4 pb-10">
          <PhoneCard
            image={card2}
            rotation={-4.94}
            translateY={32}
            isCenter={false}
          />
          <PhoneCard
            image={card2}
            rotation={0}
            translateY={0}
            isCenter={true}
          />
          <PhoneCard
            image={card2}
            rotation={4.94}
            translateY={32}
            isCenter={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
