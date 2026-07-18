import StatCard from "./StatCard";

import { HOME_DATA } from "../../../constant/home/homeData";

const StatsSection = () => {
    return (
        <section className="section bg-primary">
            <div className="container">
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
                    {HOME_DATA.stats.map((item) => (
                        <StatCard
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;