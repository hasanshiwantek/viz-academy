import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from "framer-motion";
import bgNew from "../../assets/bg-new.png";
import cubeImg from "../../assets/cube.png";
import switchImg from "../../assets/switch-btn-and-arrow-top.png";
import cursorIcon from "../../assets/cursor-icon.png";

const DownloadvizMakerForMobilemodal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');

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
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
        >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                style={{
                    padding: "1.5px",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, #ff8c5a 0%, #ffb347 25%, #00e5cc 60%, #00cfcf 100%)",
                    width: "100%",
                    maxWidth: "860px",
                }}
            >
                {/* Inner Modal */}
                <div
                    style={{
                        backgroundImage: `url(${bgNew})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "19px",
                        backgroundColor: "#060f18",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    {/* LAYOUT: mobile=column, desktop=row */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-stretch">

                        {/* LEFT — Cube side */}
                        {/* Mobile: full width, shorter height | Desktop: 40% */}
                        <div
                            className="w-full sm:w-auto"
                            style={{
                                flex: '0 0 40%',
                                alignSelf: 'stretch',
                                paddingBottom: "30px",
                                paddingLeft: "20px",
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%',
                                minHeight: '200px',   // ← mobile pe cube visible rahe
                            }}>
                                {/* Cube */}
                                <motion.img
                                    src={cubeImg}
                                    alt="3D Cube"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-full sm:w-auto"
                                    style={{
                                        maxWidth: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        objectPosition: 'bottom left',
                                    }}
                                />

                                {/* Cursor Icon */}
                                <motion.img
                                    src={cursorIcon}
                                    alt="cursor"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.45 }}
                                    style={{
                                        position: 'absolute',
                                        top: '140px',
                                        right: '62px',
                                        width: '65px',
                                        height: 'auto',
                                        zIndex: 3,
                                    }}
                                />

                                {/* Switch/Toggle */}
                                <motion.img
                                    src={switchImg}
                                    alt="switchImg"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '14px',
                                        right: '62px',
                                        width: '65px',
                                        height: 'auto',
                                        zIndex: 3,
                                    }}
                                />
                            </div>
                        </div>

                        {/* RIGHT — Content */}
                        {/* Mobile: full width, less padding | Desktop: 60% */}
                        <div
                            className="w-full sm:w-auto"
                            style={{
                                flex: '0 0 60%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxSizing: 'border-box',
                                padding: '24px 20px',       // mobile padding
                            }}
                        >
                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                style={{ width: '100%' }}
                            >
                                <h3
                                    className="text-2xl sm:text-3xl"   // ← mobile smaller, desktop bigger
                                    style={{
                                        margin: 0,
                                        fontWeight: 700,
                                        backgroundImage: "linear-gradient(90deg, #00FFFF 0%, #FF7E57 40%, #FFC457 70%, #00B2B2 100%)",
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Download
                                </h3>
                                <p
                                    className="text-sm sm:text-base"   // ← mobile smaller
                                    style={{
                                        margin: '8px 0 0 0',
                                        color: '#ffffff',
                                    }}
                                >
                                    Get The Desktop App For Free
                                </p>
                            </motion.div>

                            {/* Email Input */}
                            <motion.input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.25 }}
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: '50px',
                                    padding: '14px 20px',
                                    color: 'rgba(255,255,255,0.6)',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    height: "52px",
                                }}
                            />

                            {/* CTA Button */}
                            <motion.button
                                className="relative flex items-center justify-center gap-2 text-white rounded-full font-medium transition-all duration-200 shadow-lg shadow-cyan-500/30 overflow-hidden text-sm sm:text-lg"
                                style={{
                                    background: "linear-gradient(89.69deg, #00FFFF -1.81%, #003131 95.62%)",
                                    width: '100%',
                                    height: "52px",
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        padding: "2px",
                                        background: "linear-gradient(171.77deg, rgba(255,255,255,0) -5.76%, rgba(255,255,255,0.2) 32.96%, rgba(255,255,255,0.7) 78.14%)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                        pointerEvents: "none",
                                    }}
                                />
                                Get the app
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};

export default DownloadvizMakerForMobilemodal;