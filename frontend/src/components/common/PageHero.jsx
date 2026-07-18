import { Link } from "react-router";

const PageHero = ({
    title,
    breadcrumb,
    background,
}) => {
    return (
        <section
            className="relative flex h-[350px] items-center justify-center overflow-hidden lg:h-[420px]"
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Content */}
            <div className="container relative z-10 text-center text-white">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                    {title}
                </h1>
                <div className="mt-5 flex items-center justify-center gap-3 text-sm font-medium md:text-base">
                    <Link
                        to="/"
                        className="transition-default hover:text-secondary"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-secondary">
                        {breadcrumb}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default PageHero;