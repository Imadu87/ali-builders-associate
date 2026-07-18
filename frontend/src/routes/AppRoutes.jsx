import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "../layout/MainLayout"

import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes