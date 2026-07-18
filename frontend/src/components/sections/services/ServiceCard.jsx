const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div
            className="
                group rounded-xl border border-border
                bg-white p-8 text-center
                shadow-primary transition-default
                hover:-translate-y-2
                hover:border-secondary
            "
        >
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 transition-default group-hover:bg-secondary">
                <Icon className="text-4xl text-secondary transition-default group-hover:text-white" />
            </div>
            {/* Title */}
            <h3 className="mb-4 text-2xl font-semibold text-heading">
                {title}
            </h3>
            {/* Description */}
            <p className="leading-7 text-text">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;