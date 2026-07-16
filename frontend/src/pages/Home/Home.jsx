import Header from "../../components/layout/Header/Header"
import Hero from "../../components/home/Hero/Hero"
import CEOMessage from "../../components/home/CEOMessage/CEOMessage"
import AboutSection from "../../components/home/About/AboutSection"

const Home = () => {
    return (
        <div>
            <Hero />
            <CEOMessage />
            <AboutSection />
        </div>
    )
}

export default Home