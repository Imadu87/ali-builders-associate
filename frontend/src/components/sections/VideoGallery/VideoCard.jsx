const VideoCard = ({
    title,
    description,
    videoId,
    onClick,
}) => {

    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div
            onClick={onClick}
            className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-primary"
        >
            {/* Thumbnail */}

            <div className="relative overflow-hidden">

                <img
                    src={thumbnail}
                    alt={title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-2xl text-secondary transition-default group-hover:scale-110">
                        ▶
                    </div>

                </div>

            </div>

            {/* Content */}

            <div className="p-6">

                <h3 className="text-xl font-semibold text-heading">
                    {title}
                </h3>

                <p className="mt-3 line-clamp-2 text-text">
                    {description}
                </p>

            </div>

        </div>
    );
};

export default VideoCard;