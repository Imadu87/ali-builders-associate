import PageHero from "../../components/common/PageHero"

import TeamSection from "../../components/sections/team/TeamSection";
import ContactCTA from "../../components/sections/contactCTA/ContactCTA";

import teamBanner from "../../assets/images/hero/hero1.avif"
import TeamCommitment from "../../components/sections/teamCommitment/TeamCommitment";

const About = () => {
    return (
        <>
            <PageHero
                title="Our Team"
                breadcrumb="Team"
                background={teamBanner}
            />
            <TeamSection />
            <TeamCommitment />
            <ContactCTA />
        </>
    );
};

export default About;
