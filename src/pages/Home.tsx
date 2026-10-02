import ContactCTA from "../sections/ContactCTA"
import FeaturedProjects from "../sections/FeaturedProjects"
import Hero from "../sections/Hero"
import Specialities from "../sections/Specialities"

export default function Home() {
    return(
        <div>
            <Hero />
            <Specialities />
            <FeaturedProjects />
            <ContactCTA />
            <div className="h-8"></div>
        </div>
    )
}