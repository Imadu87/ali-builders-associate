import { useState } from "react";

import PageHero from "../../components/common/PageHero";
import ContactCTA from "../../components/sections/contactCTA/ContactCTA";
import ProjectCard from "../../components/sections/projects/ProjectCard";

import { PROJECTS_DATA } from "../../constant/projects/projectsData";

import projectBanner from "../../assets/images/hero/hero2.jpg";

const FILTERS = [
  "All",
  "Ongoing",
  "Completed",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
        (project) =>
          project.status.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <>
      <PageHero
        title="Our Projects"
        breadcrumb="Projects"
        background={projectBanner}
      />

      <section className="section bg-white">
        <div className="container">

          {/* Filter */}

          <div className="mb-12 flex flex-wrap justify-center gap-4">

            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-md px-6 py-3 font-semibold transition-default ${activeFilter === filter
                  ? "bg-secondary text-white"
                  : "bg-light text-heading hover:bg-secondary hover:text-white"
                  }`}
              >
                {filter}
              </button>
            ))}

          </div>

          {/* Projects */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}

          </div>

        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default Projects;