import { useState } from "react";

import SectionHeader from "../../common/SectionHeader";
import Lightbox from "../../common/Lightbox";

const ProjectGallery = ({ gallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );

  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Project Gallery"
            title="Explore Project Images"
            description="Browse the latest images showcasing the development progress and highlights of this project."
          />

          <div
            data-aos="fade-up"
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {gallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openImage(index)}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-primary"
              >
                <img
                  src={item.image}
                  alt="Project Gallery"
                  loading="lazy"
                  decoding="async"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={gallery}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
};

export default ProjectGallery;