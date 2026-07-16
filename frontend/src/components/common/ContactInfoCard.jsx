const ContactInfoCard = ({
    icon,
    title,
    value,
    href,
    target = "_self",
}) => {
    const content = (
        <>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm text-white">
                {icon}
            </div>

            <div>
                <h4 className="text-xs font-semibold text-heading">
                    {title}
                </h4>

                <p className="text-sm text-text transition-default hover:text-secondary">
                    {value}
                </p>
            </div>
        </>
    );

    return href ? (
        <a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3"
        >
            {content}
        </a>
    ) : (
        <div className="flex items-center gap-3">
            {content}
        </div>
    );
};

export default ContactInfoCard;