import SectionHeader from "../../common/SectionHeader";
import ClientCard from "./ClientCard";

import { HOME_DATA } from "../../../constant/home/homeData";

const ClientsSection = () => {
    return (
        <section className="section bg-light">

            <div className="container">

                <SectionHeader
                    subtitle="Our Clients"
                    title="Trusted by Our Valuable Clients"
                    description="We take pride in serving individuals and businesses who trust us for quality construction, real estate solutions, and long-term partnerships."
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {HOME_DATA.clients.map((client, index) => (
                        <ClientCard
                            key={client.id}
                            animationDelay={index * 100} 
                            {...client}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ClientsSection;