import SectionHeader from "../../common/SectionHeader"
import PrimaryButton from "../../common/PrimaryButton";
import ProjectCard from "./ProjectCard";

import { PROJECTS_DATA } from "../../../constant/projects/projectsData"

const ProjectsSection = () => {
    const featuredProjects = PROJECTS_DATA.filter(
        (project) => project.featured
    );
    return (
        <section className="section bg-white">
            <div className="container">
                <SectionHeader
                    subtitle="Our Projects"
                    title="Featured Projects"
                    description="Explore some of our completed and ongoing real estate developments, reflecting our commitment to quality, innovation, and customer satisfaction."
                />
                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
                <div className="mt-14 flex justify-center">
                    <PrimaryButton to="/projects">
                        View All Projects
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;