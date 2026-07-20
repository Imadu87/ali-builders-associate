import Hero from "../../components/home/Hero/Hero"
import CEOMessage from "../../components/sections/ceoMessage/CEOMessage"
import AboutSection from "../../components/sections/about/AboutSection"
import StatsSection from "../../components/sections/stats/StatsSection"
import ServicesSection from "../../components/sections/services/ServicesSection"
import ProjectsSection from "../../components/sections/projects/ProjectsSection"
import ClientsSection from "../../components/home/Clients/ClientsSection"
import TeamSection from "../../components/sections/team/TeamSection"
import PhotoGallerySection from "../../components/sections/photoGallery/PhotoGallerySection"
import VideoGallerySection from "../../components/sections/VideoGallery/VideoGallerySection"
import ContactCTA from "../../components/sections/contactCTA/ContactCTA"

const Home = () => {
    return (
        <div>
            <Hero />
            <CEOMessage />
            <AboutSection />
            <StatsSection />
            <ServicesSection limit={4} showButton={true} />
            <ProjectsSection limit={4} showButton={true} />
            <ClientsSection />
            <TeamSection limit={4} showButton={true} />
            <PhotoGallerySection />
            <VideoGallerySection />
            <ContactCTA />
        </div>
    )
}

export default Home