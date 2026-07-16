import {
    HiOutlineArrowLongLeft,
    HiOutlineArrowLongRight,
} from "react-icons/hi2";

const HeroNavigation = () => {
    return (
        <div className="hidden lg:block">
            <button
                className="hero-prev absolute left-6 top-1/2 z-30 -translate-y-1/2 text-5xl text-white transition-default hover:text-secondary lg:left-10 lg:text-6xl"
            >
                <HiOutlineArrowLongLeft />
            </button>

            <button
                className="hero-next absolute right-6 top-1/2 z-30 -translate-y-1/2 text-5xl text-white transition-default hover:text-secondary lg:right-10 lg:text-6xl"
            >
                <HiOutlineArrowLongRight />
            </button>
        </div>
    );
};

export default HeroNavigation;