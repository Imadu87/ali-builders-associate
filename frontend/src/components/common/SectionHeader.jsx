const SectionHeader = ({
    subtitle,
    title,
    description,
    align = "center",
}) => {
    return (
        <div
            className={`section-header ${align === "left" ? "text-left" : "text-center"
                }`}
        >
            {subtitle && (
                <span className="section-subtitle">
                    {subtitle}
                </span>
            )}

            <h2 className="section-title">
                {title}
            </h2>

            {description && (
                <p
                    className={`section-description ${align === "left" ? "mx-0" : ""
                        }`}
                >
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;