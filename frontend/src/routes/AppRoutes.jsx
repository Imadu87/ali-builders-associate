import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

import MainLayout from "../layout/MainLayout";
import ScrollToTop from "../components/common/ScrollToTop";
import Loader from "../components/common/Loader";

// Lazy Loaded Pages
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Project = lazy(() => import("../pages/Projects/Project"));
const ProjectDetails = lazy(() => import("../pages/Projects/ProjectDetails"));
const Services = lazy(() => import("../pages/Services/Services"));
const Team = lazy(() => import("../pages/Team/Team"));
const TeamDetails = lazy(() => import("../pages/Team/TeamDetails"));
const PhotoGallery = lazy(() => import("../pages/Photo-Gallery/PhotoGallery"));
const VideoGallery = lazy(() => import("../pages/Vdeo-Gallery/VideoGallery"));
const FileVerification = lazy(
  () => import("../pages/File-Verification/FileVerification"),
);
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:slug" element={<TeamDetails />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
            <Route path="/file-verification" element={<FileVerification />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
