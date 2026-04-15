// // import { useEffect } from 'react';
// // import howitsWorkImg from "../../assets/how-its-work.png"
// // import { motion } from "framer-motion";
// // import bgNew from "../../assets/bg-new.png";


// // const HowItWorksModal = ({ isOpen, onClose }) => {
// //     useEffect(() => {
// //         const handleEsc = (e) => {
// //             if (e.key === 'Escape') onClose();
// //         };
// //         if (isOpen) window.addEventListener('keydown', handleEsc);
// //         return () => window.removeEventListener('keydown', handleEsc);
// //     }, [isOpen, onClose]);

// //     if (!isOpen) return null;

// //     return (
// //         <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#091a22] backdrop-blur-xl p-6">
// //             {/* Modal Card */}
// //             <div
// //                 className="relative w-full max-w-[700px] max-h-[55vh] bg-[#0a0f1a] border border-[#00ccff]/30 rounded-3xl overflow-hidden shadow-2xl"
// //                 style={{
// //                     backgroundImage: `url(${bgNew})`,
// //                     // backgroundSize: "cover",
// //                     // backgroundPosition: "center",
// //                 }}>

// //                 {/* Dashed Border Effect */}
// //                 <div className="absolute inset-0 border-2 border-dashed border-[#00ccff]/40 rounded-3xl pointer-events-none" />

// //                 {/* Header */}
// //                 <div className="pt-8 pb-4 flex justify-center">
// //                     <motion.h5
// //                         className="text-[2.5rem] sm:text-6xl md:text-7xl font-semibold leading-tight "
// //                         initial={{ opacity: 0, y: 30 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.8, delay: 0.3 }}
// //                     >
// //                         <motion.span
// //                             className="block bg-clip-text text-transparent md:mt-5"
// //                             style={{
// //                                 backgroundImage:
// //                                     "linear-gradient(90deg, #00FFFF 0%, #FF7E57 32%, #FFC457 60%, #00B2B2 100%)",
// //                             }}
// //                             initial={{ opacity: 0 }}
// //                             animate={{ opacity: 1 }}
// //                             transition={{ duration: 0.8, delay: 0.5 }}
// //                         >
// //                             How its work
// //                         </motion.span>
// //                     </motion.h5>
// //                     {/* </div> */}
// //                 </div>

// //                 {/* Image Container */}
// //                 <div className="px-8 pb-8">
// //                     <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
// //                         <img
// //                             src={howitsWorkImg}
// //                             alt="How it works"
// //                             className="w-full h-auto object-cover aspect-square"  // Makes it 1:1 like 644x644
// //                         />

// //                         {/* Small glowing dot on the building (optional, matching your screenshot) */}
// //                         <div className="absolute top-[38%] left-[48%] w-2 h-2 bg-[#00ffcc] rounded-full shadow-[0_0_12px_#00ffcc]" />
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default HowItWorksModal;

// import { useEffect } from 'react';
// import howitsWorkImg from "../../assets/how-its-work.png"
// import { motion } from "framer-motion";
// import bgNew from "../../assets/bg-new.png";


// const HowItWorksModal = ({ isOpen, onClose }) => {
//     useEffect(() => {
//         const handleEsc = (e) => {
//             if (e.key === 'Escape') onClose();
//         };
//         if (isOpen) window.addEventListener('keydown', handleEsc);
//         return () => window.removeEventListener('keydown', handleEsc);
//     }, [isOpen, onClose]);

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/5 backdrop-blur-xl p-6">   {/* ← Fixed: backdrop-blur-xl */}
//             <div
//                 className='rounded-3xl '
//                 style={{
//                     // inset: "-100%",
//                     padding: "1.5px",
//                     background:
//                         "conic-gradient(from 0deg, transparent 0deg, #8ef5e8 60deg, #00ffff 90deg, #ff9b7a 150deg, #ffdc7a 210deg, transparent 270deg)",
//                 }}
//             >
//                 <div
//                     className="relative w-full max-w-[700px] h-[100% ] bg-[#0a0f1a] border border-[#00ccff]/30 rounded-3xl overflow-hidden shadow-2xl"

//                     style={{
//                         backgroundImage: `url(${bgNew})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",

//                     }}>
//                     {/* Header */}
//                     <div className="pt-1 pb-1 flex justify-center">
//                         <motion.h5
//                             className="text-[2.5rem] sm:text-4xl md:text-4xl font-semibold leading-tight "
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.3 }}
//                         >
//                             <motion.span
//                                 className="block bg-clip-text text-transparent md:mt-5"
//                                 style={{
//                                     backgroundImage:
//                                         "linear-gradient(90deg, #00FFFF 0%, #FF7E57 32%, #FFC457 60%, #00B2B2 100%)",
//                                 }}
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ duration: 0.8, delay: 0.5 }}
//                             >
//                                 How its work
//                             </motion.span>
//                         </motion.h5>
//                     </div>

//                     {/* Image Container */}
//                     <div className="px-8 pb-8">
//                         <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
//                             <img
//                                 src={howitsWorkImg}
//                                 alt="How it works"
//                                 className="w-full h-auto object-cover aspect-square"
//                             />
//                             {/* Small glowing dot on the building */}
//                             {/* <div className="absolute top-[38%] left-[48%] w-2 h-2 bg-[#00ffcc] rounded-full shadow-[0_0_12px_#00ffcc]" /> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HowItWorksModal;

import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import howitsWorkImg from "../../assets/how-its-work.png"
import { motion } from "framer-motion";
import bgNew from "../../assets/bg-new.png";

const HowItWorksModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(1px)' }}
            onClick={onClose}
        >
            {/* Gradient Border Wrapper */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    padding: "1.5px",
                    borderRadius: "24px",
                    background: "linear-gradient(135deg, #ff8c5a 0%, #ffb347 25%, #00e5cc 60%, #00cfcf 100%)",

                    // background: "conic-gradient(from 0deg, transparent 0deg, #8ef5e8 60deg, #00ffff 90deg, #ff9b7a 150deg, #ffdc7a 210deg, transparent 270deg)",
                    width: "100%",
                    maxWidth: "520px",       // ← chhota kiya
                    maxHeight: "90vh",       // ← viewport height limit
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Inner Modal */}
                <div
                    style={{
                        backgroundImage: `url(${bgNew})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "23px",
                        overflow: "hidden",
                        width: "100%",
                        backgroundColor: "#0a0f1a",
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: "90vh",   // ← yahan bhi
                    }}
                >
                    {/* Close Button */}
                    {/* <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '14px',
                            right: '18px',
                            color: 'rgba(255,255,255,0.5)',
                            background: 'none',
                            border: 'none',
                            fontSize: '20px',
                            cursor: 'pointer',
                            zIndex: 10,
                        }}
                    >
                        ✕
                    </button> */}

                    {/* Title */}
                    <div style={{
                        paddingTop: '24px',
                        paddingBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        flexShrink: 0,        // ← title kabhi shrink na ho
                    }}>
                        <motion.h5
                            style={{ margin: 0, fontSize: '1.8rem', fontWeight: 600, lineHeight: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span
                                style={{
                                    display: 'block',
                                    backgroundImage: "linear-gradient(90deg, #00FFFF 0%, #FF7E57 32%, #FFC457 60%, #00B2B2 100%)",
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                How it works
                            </span>
                        </motion.h5>
                    </div>

                    {/* Image — flex-1 + overflow hidden so it fills remaining space */}
                    <div style={{ padding: '0 20px 20px 20px', flex: 1, overflow: 'hidden' }}>
                        <motion.div
                            style={{
                                borderRadius: '14px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                                height: '100%',
                            }}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <img
                                src={howitsWorkImg}
                                alt="How it works"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    maxHeight: 'calc(90vh - 100px)', // ← title height minus karo
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default HowItWorksModal;