import { useState } from "react";

import SectionHeader from "../../common/SectionHeader";
import PrimaryButton from "../../common/PrimaryButton";
import VideoCard from "./VideoCard";
import VideoModal from "../../common/VideoModal";

import { VIDEO_GALLERY_DATA } from "../../../constant/videoGallery/videoGalleryData";

const VideoGallerySection = ({ showButton = false, limit }) => {
    const videos = limit
        ? VIDEO_GALLERY_DATA.slice(0, limit)
        : VIDEO_GALLERY_DATA;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const openVideo = (videoId) => {
        setSelectedVideo(videoId);
        setIsOpen(true);
    };

    return (
        <>
            <section className="section bg-light">
                <div className="container">
                    <SectionHeader
                        subtitle="Video Gallery"
                        title="Watch Our Latest Projects"
                        description="Explore our latest construction updates, project highlights, and company activities through our video gallery."
                    />

                    <div className="mt-14 grid gap-8 md:grid-cols-2">
                        {videos.map((video, index) => (
                            <VideoCard
                                key={video.id}
                                {...video}
                                animationDelay={index * 100}
                                onClick={() => openVideo(video.videoId)}
                            />
                        ))}
                    </div>

                    {showButton && (
                        <div className="mt-14 flex justify-center">
                            <PrimaryButton to="/video-gallery">
                                View All Videos
                            </PrimaryButton>
                        </div>
                    )}
                </div>
            </section>

            <VideoModal
                isOpen={isOpen}
                videoId={selectedVideo}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default VideoGallerySection;