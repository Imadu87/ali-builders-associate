import { HiCheckCircle } from "react-icons/hi2";

import SectionHeader from "../../common/SectionHeader";

import { TEAM_COMMITMENT } from "../../../constant/team/teamCommitmentData";

const TeamCommitment = () => {
    return (
        <section className="section bg-light">
            <div className="container">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Image */}
                    <div  data-aos="fade-right">
                        <img
                            src={TEAM_COMMITMENT.image}
                            alt={TEAM_COMMITMENT.title}
                            className="w-full rounded-xl object-cover shadow-primary"
                        />
                    </div>
                    {/* Content */}
                    <div  data-aos="fade-left">
                        <SectionHeader
                            align="left"
                            subtitle={TEAM_COMMITMENT.subtitle}
                            title={TEAM_COMMITMENT.title}
                            description={TEAM_COMMITMENT.description}
                        />
                        <div className="mt-8 space-y-4">
                            {TEAM_COMMITMENT.points.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-center gap-3"
                                >
                                    <HiCheckCircle className="text-2xl text-secondary" />
                                    <span className="text-heading font-medium">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamCommitment;