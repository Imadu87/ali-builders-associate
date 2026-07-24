import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

const VideoModal = ({ isOpen, videoId, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-5xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute -top-14 right-0 text-4xl text-white transition hover:text-secondary"
                        >
                            <FaXmark />
                        </button>

                        <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
                            <iframe
                                className="h-full w-full"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title="Project Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VideoModal;