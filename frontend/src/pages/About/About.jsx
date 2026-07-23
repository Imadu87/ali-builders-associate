import PageHero from "../../components/common/PageHero"

import AboutSection from "../../components/sections/about/AboutSection"
import StatsSection from "../../components/sections/stats/StatsSection"
import CEOMessage from "../../components/sections/ceoMessage/CEOMessage"
import TeamSection from "../../components/sections/team/TeamSection";
import ContactCTA from "../../components/sections/contactCTA/ContactCTA";

import aboutBanner from "../../assets/images/hero/hero1.avif"

const About = () => {
    return (
        <>
            <PageHero
                title="About Us"
                breadcrumb="About"
                background={aboutBanner}
            />
            <AboutSection />
            <StatsSection />
            <CEOMessage />
            <TeamSection limit={4} showButton={true} />
            <ContactCTA />
        </>
    );
};

export default About;
