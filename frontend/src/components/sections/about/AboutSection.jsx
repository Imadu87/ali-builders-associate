import SectionHeader from "../../common/SectionHeader"

import { ABOUT_DATA } from "../../../constant/about/aboutData";

const AboutSection = () => {
    return (
        <section className="section bg-light">
            <div className="container">

                <div data-aos="fade-up" className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}

                    <div>

                        <SectionHeader
                            align="left"
                            subtitle={ABOUT_DATA.subtitle}
                            title={ABOUT_DATA.title}
                            description={ABOUT_DATA.description}
                        />

                        {/* Our Goal */}

                        <div className="mt-10">

                            <h3 className="mb-3 text-2xl font-semibold text-heading">
                                {ABOUT_DATA.goalTitle}
                            </h3>

                            <p className="leading-8 text-text">
                                {ABOUT_DATA.goalDescription}
                            </p>

                        </div>

                        {/* Vision */}

                        <div className="mt-8">

                            <h3 className="mb-3 text-2xl font-semibold text-heading">
                                {ABOUT_DATA.visionTitle}
                            </h3>

                            <p className="leading-8 text-text">
                                {ABOUT_DATA.visionDescription}
                            </p>

                        </div>

                    </div>

                    {/* Right Image */}

                    <div data-aos="fade-up" className="relative">

                        <img
                            src={ABOUT_DATA.image}
                            alt="About Ali Builders"
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full rounded-xl object-cover shadow-primary"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;