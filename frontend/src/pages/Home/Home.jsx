import Hero from "../../components/home/Hero/Hero"
import CEOMessage from "../../components/home/CEOMessage/CEOMessage"
import AboutSection from "../../components/sections/about/AboutSection"
import StatsSection from "../../components/home/StatsSection/StatsSection"
import ServicesSection from "../../components/sections/services/ServicesSection"
import ProjectsSection from "../../components/sections/projects/ProjectsSection"
import ClientsSection from "../../components/home/Clients/ClientsSection"

const Home = () => {
    return (
        <div>
            <Hero />
            <CEOMessage />
            <AboutSection />
            <StatsSection />
            <ServicesSection />
            <ProjectsSection />
            <ClientsSection />
        </div>
    )
}

export default Home