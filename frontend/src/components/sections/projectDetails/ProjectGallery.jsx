import SectionHeader from "../../common/SectionHeader";

const ProjectGallery = ({ gallery }) => {
  return (
    <section className="section bg-light">

      <div className="container">

        <SectionHeader
          subtitle="Project Gallery"
          title="Explore Project Images"
          description="Browse the latest images showcasing the development progress and highlights of this project."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="group overflow-hidden rounded-xl shadow-primary"
            >

              <img
                src={item.image}
                alt="Project Gallery"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ProjectGallery;