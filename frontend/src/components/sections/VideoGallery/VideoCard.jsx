import { FaPlay } from "react-icons/fa6";

const VideoCard = ({
    thumbnail,
    title,
    onClick,
    animationDelay,
}) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay={animationDelay}
            onClick={onClick}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-primary"
        >
            <img
                src={thumbnail}
                alt={title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition duration-300 group-hover:bg-black/45">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl text-white transition duration-300 group-hover:scale-110">
                    <FaPlay className="ml-1" />
                </div>
            </div>

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5">
                <h3 className="text-lg font-semibold text-white">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default VideoCard;