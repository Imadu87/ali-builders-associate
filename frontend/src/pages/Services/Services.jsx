import PageHero from "../../components/common/PageHero"

import ServicesSection from "../../components/sections/services/ServicesSection";
import ContactCTA from "../../components/sections/contactCTA/ContactCTA";

import serviceBanner from "../../assets/images/hero/hero1.avif"
import WhyChooseUs from "../../components/sections/whyChooseUs/WhyChooseUs";

const About = () => {
    return (
        <>
            <PageHero
                title="Our Services"
                breadcrumb="Services"
                background={serviceBanner}
            />
            <ServicesSection />
            <WhyChooseUs />
            <ContactCTA />
        </>
    );
};

export default About;
