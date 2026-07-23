import { Link } from "react-router";

const ProjectCard = ({
    title,
    slug,
    image,
    status,
    animationDelay
}) => {
    return (
        <Link
            data-aos="fade-up"
            data-aos-delay={animationDelay}
            to={`/projects/${slug}`}
            className="group block overflow-hidden rounded-xl shadow-primary"
        >
            <div className="relative h-80 overflow-hidden">
                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-default group-hover:from-black/90" />
                {/* Status */}
                <span
                    className={`absolute top-5 right-5 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white ${status === "ongoing"
                        ? "bg-secondary"
                        : "bg-primary"
                        }`}
                >
                    {status}
                </span>
                {/* Bottom Content */}
                <div className="absolute right-0 bottom-0 left-0 p-6">

                    <h3 className="text-2xl font-semibold text-white transition-default group-hover:text-secondary">
                        {title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;