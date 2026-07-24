import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { HiOutlineBars3 } from "react-icons/hi2";

import { NAV_LINKS } from "../../../constant/navbar/navbarData";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 70);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`
                    w-full
                    transition-all
                    duration-300
                    ease-in-out

                    ${isSticky
                        ? "fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md shadow-lg animate-in slide-in-from-top"
                        : "relative bg-secondary"
                    }
                `}
            >
                <div className="container flex h-[68px] items-center">

                    {/* Desktop Menu */}

                    <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
                        {NAV_LINKS.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `
                                        relative
                                        text-sm
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        transition-all
                                        duration-300

                                        ${isSticky
                                            ? isActive
                                                ? "text-secondary"
                                                : "text-heading hover:text-secondary"
                                            : isActive
                                                ? "text-white"
                                                : "text-white/80 hover:text-white"
                                        }
                                    `
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
                        className={`
                            ml-auto
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-lg
                            text-3xl
                            transition-all
                            duration-300

                            ${isSticky
                                ? "text-heading hover:bg-secondary/10"
                                : "text-white hover:bg-white/10"
                            }

                            lg:hidden
                        `}
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