import { Navigate, useParams } from "react-router";

import PageHero from "../../components/common/PageHero";
import ContactCTA from "../../components/sections/contactCTA/ContactCTA";

import ProjectInfo from "../../components/sections/projectDetails/ProjectInfo";
import ProjectGallery from "../../components/sections/projectDetails/ProjectGallery";

import { PROJECTS_DATA } from "../../constant/projects/projectsData";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = PROJECTS_DATA.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageHero
        title={project.title}
        breadcrumb={project.title}
        background={project.image}
      />

      <ProjectInfo project={project} />

      <ProjectGallery gallery={project.gallery} />

      <ContactCTA />
    </>
  );
};

export default ProjectDetails;