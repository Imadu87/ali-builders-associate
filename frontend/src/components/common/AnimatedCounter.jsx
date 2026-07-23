import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const motionValue = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(motionValue, value, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplayValue(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [isInView, value, duration, motionValue]);

    return <span ref={ref}>{displayValue}</span>;
};

export default AnimatedCounter;