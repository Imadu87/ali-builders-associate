import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () =>
            window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{
                        duration: 0.25,
                    }}
                    onClick={scrollToTop}
                    className="
                        fixed
                        bottom-6
                        right-6
                        z-[999]

                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-full
                        bg-secondary
                        text-white

                        shadow-xl

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:scale-110
                        hover:bg-primary
                    "
                >
                    <HiArrowUp className="text-xl" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;