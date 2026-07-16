import { Link } from "react-router";

import { FOOTER_DATA } from "../../../constant/footer/footerData";

const FooterBottom = () => {
    return (
        <div className="border-t border-white/10">

            <div className="container flex flex-col items-center justify-between gap-5 py-6 text-sm text-white/70 lg:flex-row">

                {/* Copyright */}

                <p className="text-center lg:text-left">
                    Copyright © 2026 |
                    <span className="font-medium text-white">
                        {" "}Designed & Developed by Zia IT Solutions Pvt. Ltd.
                    </span>
                </p>

                {/* Footer Links */}

                <ul className="flex flex-wrap items-center justify-center gap-6">

                    {FOOTER_DATA.links.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className="transition-default hover:text-secondary"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>

            </div>

        </div>
    );
};

export default FooterBottom;