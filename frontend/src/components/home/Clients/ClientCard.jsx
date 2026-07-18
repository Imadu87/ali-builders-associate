const ClientCard = ({
    image,
    name,
    designation,
    company,
}) => {
    return (
        <div
            className="
                rounded-xl
                border
                border-border
                bg-white
                p-8
                text-center
                shadow-primary
                transition-default
                hover:-translate-y-2
            "
        >
            <img
                src={image}
                alt={name}
                className="
                    mx-auto
                    mb-6
                    h-28
                    w-28
                    rounded-full
                    object-cover
                    border-4
                    border-secondary
                "
            />

            <h3 className="text-2xl font-semibold text-heading">
                {name}
            </h3>

            <p className="mt-2 font-medium text-secondary">
                {designation}
            </p>

            <p className="mt-1 text-sm text-text">
                {company}
            </p>
        </div>
    );
};

export default ClientCard;