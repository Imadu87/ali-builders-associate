import StatCard from "./StatCard";
import { STATS_DATA } from "../../../constant/stats/statsData";

const StatsSection = () => {
    return (
        <section className="section bg-primary">
            <div className="container">
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
                    {STATS_DATA.map((item, index) => (
                        <StatCard
                            key={item.id}
                            animationDelay={index * 100}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;