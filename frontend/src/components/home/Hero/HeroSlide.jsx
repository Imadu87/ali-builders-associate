import { motion } from "framer-motion";
import HeroContent from "./HeroContent";

const HeroSlide = ({ slide }) => {
    return (
        <div className="relative h-screen overflow-hidden">

            {/* Animated Image */}

            <motion.img
                src={slide.image}
                alt={slide.title}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{
                    scale: 1.15,
                }}
                animate={{
                    scale: 1,
                }}
                transition={{
                    duration: 5,
                    ease: "easeOut",
                }}
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

            {/* Content */}

            <HeroContent slide={slide} />

        </div>
    );
};

export default HeroSlide;