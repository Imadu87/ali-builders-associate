import { useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        AOS.refresh();
    }, [pathname]);

    return null;
};

export default ScrollToTop;