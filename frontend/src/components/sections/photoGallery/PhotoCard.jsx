const PhotoCard = ({ image, onClick, animationDelay }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={animationDelay}
            onClick={onClick}
            className="
                group
                cursor-pointer
                overflow-hidden
                rounded-xl
                shadow-primary
            "
        >
            <img
                src={image}
                alt="Gallery"
                className="
                    h-72
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                "
            />
        </div>
    );
};

export default PhotoCard;