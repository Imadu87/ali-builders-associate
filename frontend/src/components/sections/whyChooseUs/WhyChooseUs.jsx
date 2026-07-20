import SectionHeader from "../../common/SectionHeader";

import { WHY_CHOOSE_US } from "../../../constant/services/whyChooseUsData.jsx";

const WhyChooseUs = () => {
    return (
        <section className="section bg-light">
            <div className="container">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                        <SectionHeader
                            align="left"
                            subtitle={WHY_CHOOSE_US.subtitle}
                            title={WHY_CHOOSE_US.title}
                            description={WHY_CHOOSE_US.description}
                        />
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {WHY_CHOOSE_US.features.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-lg border border-border bg-white p-6 shadow-primary transition-default hover:-translate-y-1"
                                >
                                    <div className="mb-4 text-4xl text-secondary">
                                        {item.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-heading">
                                        {item.title}
                                    </h3>
                                    <p className="text-text">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right */}
                    <div>
                        <img
                            src={WHY_CHOOSE_US.image}
                            alt={WHY_CHOOSE_US.title}
                            className="w-full rounded-xl object-cover shadow-primary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;