import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { COMPANY } from "../../../constant/company";

const socialLinks = [
    {
        name: "Facebook",
        icon: <FaFacebookF />,
        url: COMPANY.social.facebook,
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn />,
        url: COMPANY.social.linkedin,
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        url: COMPANY.social.instagram,
    },
    {
        name: "YouTube",
        icon: <FaYoutube />,
        url: COMPANY.social.youtube,
    },
];

const TopBar = () => {
    return (
        <div className="hidden bg-primary text-white lg:block">
            <div className="container flex h-10 items-center justify-between">

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
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
                <p className="text-sm font-medium tracking-wide">
                    Welcome to {COMPANY.name}
                </p>

            </div>
        </div>
    );
};

export default TopBar;