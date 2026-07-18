import { useState } from "react";

import SectionHeader from "../../common/SectionHeader";
import PrimaryButton from "../../common/PrimaryButton";
import VideoCard from "./VideoCard";

import { VIDEO_GALLERY_DATA } from "../../../constant/videoGallery/videoGalleryData";

const VideoGallerySection = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section className="section bg-light">

            <div className="container">

                <SectionHeader
                    subtitle="Video Gallery"
                    title="Watch Our Latest Projects"
                    description="Explore our latest construction updates, project highlights, and company activities through our video gallery."
                />

                <div className="mt-14 grid gap-8 md:grid-cols-2">

                    {VIDEO_GALLERY_DATA.slice(0, 2).map((video) => (
                        <VideoCard
                            key={video.id}
                            {...video}
                            onClick={() => setSelectedVideo(video)}
                        />
                    ))}

                </div>

                <div className="mt-14 flex justify-center">
                    <PrimaryButton to="/video-gallery">
                        View All Videos
                    </PrimaryButton>
                </div>

            </div>

            {/* Video Modal */}

            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="aspect-video w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            className="h-full w-full rounded-lg"
                            src={`https://www.youtube.com/embed/${selectedVideo.videoId}?rel=0&modestbranding=1`}
                            title={selectedVideo.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

        </section>
    );
};

export default VideoGallerySection;