import PageHero from "../../components/common/PageHero"

import AboutSection from "../../components/sections/about/AboutSection"
import StatsSection from "../../components/sections/stats/StatsSection"
import CEOMessage from "../../components/sections/ceoMessage/CEOMessage"
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
