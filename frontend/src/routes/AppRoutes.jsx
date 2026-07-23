import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "../layout/MainLayout"

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Project from "../pages/Projects/Project";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import Services from "../pages/Services/Services";
import Team from "../pages/Team/Team";
import PhotoGallery from "../pages/Photo-Gallery/PhotoGallery";
import VideoGallery from "../pages/Vdeo-Gallery/VideoGallery";
import FileVerification from "../pages/File-Verification/FileVerification";
import Contact from "../pages/Contact/Contact";
import ScrollToTop from "../components/common/ScrollToTop";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Project />} /> 
                    <Route path="/projects/:slug" element={<ProjectDetails />} />
                    <Route path="/services" element={<Services />} /> 
                    <Route path="/team" element={<Team />} /> 
                    <Route path="/photo-gallery" element={<PhotoGallery />} /> 
                    <Route path="/video-gallery" element={<VideoGallery />} /> 
                    <Route path="/file-verification" element={<FileVerification />} /> 
                    <Route path="/contact" element={<Contact />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes