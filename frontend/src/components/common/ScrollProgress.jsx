import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress =
                (window.scrollY / totalHeight) * 100;

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] h-1 origin-left bg-secondary"
            animate={{
                width: `${scrollProgress}%`,
            }}
            transition={{
                ease: "linear",
                duration: 0.1,
            }}
        />
    );
};

export default ScrollProgress;