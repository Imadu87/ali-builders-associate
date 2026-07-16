import { useState } from "react";
import { NavLink } from "react-router";
import { HiOutlineBars3 } from "react-icons/hi2";

import { NAV_LINKS } from "../../../constant/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-secondary shadow-sm">
                <div className="container flex h-[68px] items-center">

                    {/* Desktop Menu */}
                    <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
                        {NAV_LINKS.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `relative text-sm font-semibold uppercase tracking-wide transition-default ${isActive
                                            ? "text-white"
                                            : "text-white/80 hover:text-white"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label="Open Menu"
                        onClick={() => setIsOpen(true)}
                        className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg text-3xl text-white transition-default hover:bg-white/10 lg:hidden"
                    >
                        <HiOutlineBars3 />
                    </button>
                </div>
            </nav>

            <MobileMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    );
};

export default Navbar;