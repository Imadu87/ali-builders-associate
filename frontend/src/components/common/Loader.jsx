import { motion } from "framer-motion";

import logo from "../../assets/images/logo/logo.PNG";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">
                <motion.img
                    src={logo}
                    alt="Ali Builders Associate"
                    className="h-24 w-24 object-contain"
                    animate={{
                        scale: [1, 1.08, 1],
                        rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.h2
                    className="mt-5 text-2xl font-bold text-heading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                    }}
                >
                    Ali Builders Associate
                </motion.h2>
                <motion.div
                    className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-gray-200"
                >
                    <motion.div
                        className="h-full bg-secondary"
                        animate={{
                            x: [-160, 160],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            </div>

        </div>
    );
};

export default Loader;