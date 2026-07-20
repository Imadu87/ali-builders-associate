import SectionHeader from "../../common/SectionHeader";
import PrimaryButton from "../../common/PrimaryButton";
import TeamCard from "./TeamCard";

import { TEAM_DATA } from "../../../constant/team/teamData";

const TeamSection = ({ limit, showButton = false }) => {

    const featuredMembers = limit
        ? TEAM_DATA.slice(0, limit)
        : TEAM_DATA;

    return (
        <section className="section bg-light">

            <div className="container">

                <SectionHeader
                    subtitle="Our Team"
                    title="Meet Our Professional Team"
                    description="Our experienced professionals are committed to delivering trusted real estate and construction solutions with integrity, expertise, and dedication."
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {featuredMembers.map((member) => (
                        <TeamCard
                            key={member.id}
                            {...member}
                        />
                    ))}

                </div>

                <div className="mt-14 flex justify-center">

                    {showButton && <PrimaryButton to="/team">
                        View All Team
                    </PrimaryButton>}

                </div>

            </div>

        </section>
    );
};

export default TeamSection;