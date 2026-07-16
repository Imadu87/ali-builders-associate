import { NavLink } from "react-router";
import { IoClose } from "react-icons/io5";

import { NAV_LINKS } from "../../../constant/navigation";

const MobileMenu = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={`fixed top-0 right-0 z-50 h-screen w-[280px] bg-white shadow-xl transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-border p-5">

                <h3 className="text-lg font-bold text-heading">
                    Menu
                </h3>

                <button
                    onClick={() => setIsOpen(false)}
                    className="text-3xl text-heading"
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
                                `block border-b border-border px-5 py-4 text-sm font-medium transition-default ${isActive
                                    ? "bg-secondary text-white"
                                    : "text-heading hover:bg-light"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>

                    </li>

                ))}

            </ul>

        </div>
    );
};

export default MobileMenu;