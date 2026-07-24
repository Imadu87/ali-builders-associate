import { Link } from "react-router";
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-light">
            <div className="container text-center">
                <motion.h1
                    className="text-8xl font-extrabold text-secondary"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    404
                </motion.h1>
                <h2 className="mt-6 text-4xl font-bold text-heading">
                    Page Not Found
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-text">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="
                        mt-10 inline-flex
                        rounded-md
                        bg-secondary
                        px-8 py-3
                        font-semibold
                        text-white
                        transition-default
                        hover:bg-primary
                    "
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;