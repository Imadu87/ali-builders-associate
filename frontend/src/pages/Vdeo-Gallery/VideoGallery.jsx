import PageHero from "../../components/common/PageHero";

import ContactCTA from "../../components/sections/contactCTA/ContactCTA";

import videoBanner from "../../assets/images/hero/hero1.avif";
import VideoGallerySection from "../../components/sections/VideoGallery/VideoGallerySection";

const VideoGallery = () => {
  return (
    <>
      <PageHero
        title="Video Gallery"
        breadcrumb="Video Gallery"
        background={videoBanner}
      />
      <VideoGallerySection />
      <ContactCTA />
    </>
  );
};

export default VideoGallery;
