import { motion } from "framer-motion";
import { LEADERSHIP_DATA } from "../../../constant/leadership/leadershipData";

const Leadership = () => {
    return (
        <section className="first-section bg-white">
            <div className="container">
                <div data-aos="fade-up" className="section-header">
                    <span className="section-subtitle">
                        Leadership
                    </span>
                    <h2 className="section-title">
                        Our Leadership
                    </h2>
                </div>
                <div className="space-y-24">
                    {LEADERSHIP_DATA.map((leader, index) => (
                        <div
                            key={leader.id}
                            className="grid items-center gap-12 lg:grid-cols-2"
                        >
                            {/* Message */}
                            <div
                                data-aos="fade-zoom-in"
                                className={index % 2 !== 0 ? "lg:order-2" : ""}
                            >
                                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[3px] text-secondary">
                                    {leader.title}
                                </span>
                                <p className="section-description-left italic">
                                    {leader.message}
                                </p>
                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold text-heading">
                                        {leader.name}
                                    </h3>
                                    <p className="mt-2 font-medium text-secondary">
                                        {leader.designation}
                                    </p>
                                </div>
                            </div>
                            {/* Image */}
                            <div
                                data-aos="fade-zoom-in"
                                className={`relative flex justify-center ${index % 2 !== 0 ? "lg:order-1" : ""
                                    }`}
                                style={{ perspective: "1200px" }}
                            >
                                <div className="absolute h-72 w-72 rounded-full bg-secondary/15 blur-2xl"></div>
                                <motion.img
                                    src={leader.image}
                                    alt={leader.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="relative z-10 h-72 w-72 rounded-full border-4 border-secondary object-cover shadow-2xl md:h-80 md:w-80"
                                    whileHover={{
                                        rotateX: 12,
                                        rotateY: -12,
                                        scale: 1.06,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 18,
                                    }}
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;