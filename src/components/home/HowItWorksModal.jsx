import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import howitsWorkImg from "../../assets/how-its-work.png"
import { motion } from "framer-motion";
import bgNew from "../../assets/bg-new.png";



const mobile = window.innerWidth < 768

const HowItWorksModal = ({ isOpen, onClose }) => {

    useEffect(() => {
        [bgNew, howitsWorkImg].forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

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
    useEffect(() => {
        if (isOpen) {
            // Modal open hone par history entry push karo
            window.history.pushState({ modalOpen: true }, '');

            const handlePopState = () => {
                onClose();
            };

            window.addEventListener('popstate', handlePopState);
            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [isOpen, onClose]);
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
            style={{ display: isOpen ? 'flex' : 'none', backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(1px)' }}
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
                    {/* ✅ X Close Button */}
                    {mobile && <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '14px',
                            right: '14px',
                            zIndex: 10,
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.15)',
                            background: 'rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(4px)',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                        aria-label="Close"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    }
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
                        // initial={{ opacity: 0, y: 20 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.6, delay: 0.2 }}
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
                        // initial={{ opacity: 0, scale: 0.97 }}
                        // animate={{ opacity: 1, scale: 1 }}
                        // transition={{ duration: 0.6, delay: 0.3 }}
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