import { useEffect } from "react";
import { NavLink } from "react-router";
import { IoClose } from "react-icons/io5";

import { NAV_LINKS } from "../../../constant/navbar/navbarData";

const MobileMenu = ({ isOpen, setIsOpen }) => {

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}

            <div
                onClick={() => setIsOpen(false)}
                className={`
                    fixed inset-0 z-40 bg-black/50
                    transition-all duration-300
                    ${isOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }
                `}
            />

            {/* Drawer */}

            <div
                className={`
                    fixed top-0 right-0 z-50
                    h-screen w-[300px]
                    bg-white shadow-2xl

                    transition-transform duration-300 ease-in-out

                    ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >
                {/* Header */}

                <div className="flex items-center justify-between border-b border-border p-5">

                    <h3 className="text-xl font-bold text-heading">
                        Menu
                    </h3>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-full
                            text-2xl text-heading

                            transition-all duration-300

                            hover:bg-secondary
                            hover:text-white
                            hover:rotate-90
                        "
                    >
                        <IoClose />
                    </button>

                </div>

                {/* Links */}

                <ul className="flex flex-col">

                    {NAV_LINKS.map((item) => (

                        <li key={item.id}>

                            <NavLink
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `
                                        block
                                        border-b border-border
                                        px-6 py-4

                                        text-sm
                                        font-semibold
                                        uppercase
                                        tracking-wide

                                        transition-all duration-300

                                        ${isActive
                                        ? "bg-secondary text-white"
                                        : "text-heading hover:bg-light hover:pl-8 hover:text-secondary"
                                    }
                                    `
                                }
                            >
                                {item.label}
                            </NavLink>

                        </li>

                    ))}

                </ul>

            </div>
        </>
    );
};

export default MobileMenu;