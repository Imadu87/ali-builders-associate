import { useState } from "react";

import SectionHeader from "../../common/SectionHeader";
import PrimaryButton from "../../common/PrimaryButton";
import PhotoCard from "./PhotoCard";

import { PHOTO_GALLERY_DATA } from "../../../constant/photoGallery/photoData"

const PhotoGallerySection = ({ limit, showButton = false }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const featuredPhoto = limit
        ? PHOTO_GALLERY_DATA.slice(0, limit)
        : PHOTO_GALLERY_DATA;

    return (
        <section className="section bg-white">

            <div className="container">

                <SectionHeader
                    subtitle="Photo Gallery"
                    title="Our Recent Team Photo Gallery"
                    description="Take a glimpse at with our team some tours of our projects site."
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {featuredPhoto.map((photo, index) => (
                        <PhotoCard
                            key={photo.id}
                            animationDelay={index * 100}
                            {...photo}
                            onClick={() => setSelectedImage(photo.image)}
                        />
                    ))}

                </div>

                <div className="mt-14 flex justify-center">
                    {showButton && <PrimaryButton to="/photo-gallery">
                        View All Photos
                    </PrimaryButton>}

                </div>

            </div>

            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
                >
                    <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-h-[90vh] max-w-[90vw] rounded-lg"
                    />
                </div>
            )}

        </section>
    );
};

export default PhotoGallerySection;