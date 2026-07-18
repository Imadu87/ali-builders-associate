const StatCard = ({ icon: Icon, number, suffix, title }) => {
    return (
        <div className="group text-center">
            <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 transition-default group-hover:scale-110 group-hover:bg-secondary">
                    <Icon className="text-4xl text-secondary transition-default group-hover:text-white" />
                </div>
            </div>
            <h3 className="text-4xl font-bold text-white">
                {number}
                {suffix}
            </h3>
            <p className="mt-3 text-white/80">
                {title}
            </p>
        </div>
    );
};

export default StatCard;