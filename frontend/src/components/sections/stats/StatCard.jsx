import AnimatedCounter from "../../common/AnimatedCounter";

const StatCard = ({
    icon: Icon,
    number,
    suffix,
    title,
    animationDelay,
}) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay={animationDelay}
            className="group rounded-xl p-4 text-center transition-default hover:-translate-y-2"
        >
            <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 transition-default group-hover:scale-110 group-hover:bg-secondary">
                    <Icon className="text-4xl text-secondary transition-default group-hover:text-white" />
                </div>
            </div>

            <h3 className="text-4xl font-bold text-white">
                <AnimatedCounter value={number} />
                {suffix}
            </h3>

            <p className="mt-3 text-white/80">
                {title}
            </p>
        </div>
    );
};

export default StatCard;