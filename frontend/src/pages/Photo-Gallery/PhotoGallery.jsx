import PageHero from "../../components/common/PageHero"

import ContactCTA from "../../components/sections/contactCTA/ContactCTA";

import photoBanner from "../../assets/images/hero/hero1.avif"
import PhotoGallerySection from "../../components/sections/photoGallery/PhotoGallerySection";

const PhotoGallery = () => {
    return (
        <>
            <PageHero
                title="Photo Gallery"
                breadcrumb="Photo Gallery"
                background={photoBanner}
            />
            <PhotoGallerySection />
            <ContactCTA />
        </>
    );
};

export default PhotoGallery;
