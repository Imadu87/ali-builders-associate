import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

const Lightbox = ({
    images,
    currentIndex,
    isOpen,
    onClose,
    onPrev,
    onNext,
}) => {

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose, onPrev, onNext]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>

            <motion.div
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-4xl text-white transition hover:text-secondary"
                >
                    <FaXmark />
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                    className="absolute left-5 text-4xl text-white transition hover:text-secondary"
                >
                    <FaChevronLeft />
                </button>

                <motion.img
                    key={currentIndex}
                    src={images[currentIndex].image}
                    alt=""
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                />

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    className="absolute right-5 text-4xl text-white transition hover:text-secondary"
                >
                    <FaChevronRight />
                </button>

                <div className="absolute bottom-6 text-white">
                    {currentIndex + 1} / {images.length}
                </div>

            </motion.div>

        </AnimatePresence>
    );
};

export default Lightbox;