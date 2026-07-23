import { COMPANY } from "../../../constant/common/company.js";
import { SOCIAL_LINKS } from "../../../constant/common/socialLinks.jsx";

const TopBar = () => {
    return (
        <div className="hidden bg-primary text-white lg:block">
            <div className="container flex h-10 items-center justify-between">

                {/* Social Icons */}
                <div data-aos="fade-right" className="flex items-center gap-4">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="transition-default hover:text-secondary"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Welcome Text */}
                <p data-aos="fade-left" className="text-sm font-medium tracking-wide">
                    Welcome to {COMPANY.name}
                </p>

            </div>
        </div>
    );
};

export default TopBar;