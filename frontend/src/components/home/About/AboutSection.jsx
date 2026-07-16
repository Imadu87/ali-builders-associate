import SectionHeader from "../../common/SectionHeader";

import { HOME_DATA } from "../../../constant/home/homeData";

const AboutSection = () => {
    return (
        <section className="section bg-light">
            <div className="container">

                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}

                    <div>

                        <SectionHeader
                            align="left"
                            subtitle={HOME_DATA.about.subtitle}
                            title={HOME_DATA.about.title}
                            description={HOME_DATA.about.description}
                        />

                        {/* Our Goal */}

                        <div className="mt-10">

                            <h3 className="mb-3 text-2xl font-semibold text-heading">
                                {HOME_DATA.about.goalTitle}
                            </h3>

                            <p className="leading-8 text-text">
                                {HOME_DATA.about.goalDescription}
                            </p>

                        </div>

                        {/* Vision */}

                        <div className="mt-8">

                            <h3 className="mb-3 text-2xl font-semibold text-heading">
                                {HOME_DATA.about.visionTitle}
                            </h3>

                            <p className="leading-8 text-text">
                                {HOME_DATA.about.visionDescription}
                            </p>

                        </div>

                    </div>

                    {/* Right Image */}

                    <div className="relative">

                        <img
                            src={HOME_DATA.about.image}
                            alt="About Ali Builders"
                            className="h-full w-full rounded-xl object-cover shadow-primary"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;