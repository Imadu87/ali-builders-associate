import {
  FaLocationDot,
  FaCircleInfo,
} from "react-icons/fa6";

import SectionHeader from "../../common/SectionHeader";

const ProjectInfo = ({ project }) => {
  return (
    <section className="first-section bg-white">
      <div className="container">

        <SectionHeader
          align="left"
          subtitle="Project Details"
          title={project.title}
          description={project.description}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">

          {/* Image */}

          <div>
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full rounded-xl object-cover shadow-primary"
            />
          </div>

          {/* Details */}

          <div className="flex flex-col justify-center">

            <div className="space-y-6">

              <div className="flex items-start gap-4 rounded-xl border border-border p-5">

                <FaCircleInfo className="mt-1 text-2xl text-secondary" />

                <div>

                  <h3 className="text-lg font-semibold text-heading">
                    Project Status
                  </h3>

                  <span
                    className={`mt-2 inline-block rounded-full px-4 py-2 text-sm font-semibold text-white ${
                      project.status === "ongoing"
                        ? "bg-green-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {project.status === "ongoing"
                      ? "Ongoing"
                      : "Completed"}
                  </span>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border p-5">

                <FaLocationDot className="mt-1 text-2xl text-secondary" />

                <div>

                  <h3 className="text-lg font-semibold text-heading">
                    Project Location
                  </h3>

                  <p className="mt-2 text-text">
                    {project.location}
                  </p>

                </div>

              </div>

            </div>

            {/* Google Map */}

            <div className="mt-10 overflow-hidden rounded-xl shadow-primary">

              <iframe
                src={project.googleMap}
                title={project.title}
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectInfo;