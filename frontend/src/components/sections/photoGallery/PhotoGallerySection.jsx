import { useState } from "react";

import SectionHeader from "../../common/SectionHeader";
import PrimaryButton from "../../common/PrimaryButton";
import PhotoCard from "./PhotoCard";
import Lightbox from "../../common/Lightbox";

import { PHOTO_GALLERY_DATA } from "../../../constant/photoGallery/photoData";

const PhotoGallerySection = ({ limit, showButton = false }) => {
    const featuredPhoto = limit
        ? PHOTO_GALLERY_DATA.slice(0, limit)
        : PHOTO_GALLERY_DATA;

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImage = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? featuredPhoto.length - 1 : prev - 1
        );

    const nextImage = () =>
        setCurrentIndex((prev) =>
            prev === featuredPhoto.length - 1 ? 0 : prev + 1
        );

    return (
        <>
            <section className="section bg-white">
                <div className="container">
                    <SectionHeader
                        subtitle="Photo Gallery"
                        title="Our Recent Team Photo Gallery"
                        description="Take a glimpse at our team and recent visits to project sites."
                    />

                    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredPhoto.map((photo, index) => (
                            <PhotoCard
                                key={photo.id}
                                {...photo}
                                animationDelay={index * 100}
                                onClick={() => openImage(index)}
                            />
                        ))}
                    </div>

                    {showButton && (
                        <div className="mt-14 flex justify-center">
                            <PrimaryButton to="/photo-gallery">
                                View All Photos
                            </PrimaryButton>
                        </div>
                    )}
                </div>
            </section>

            <Lightbox
                images={featuredPhoto}
                currentIndex={currentIndex}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onPrev={prevImage}
                onNext={nextImage}
            />
        </>
    );
};

export default PhotoGallerySection;