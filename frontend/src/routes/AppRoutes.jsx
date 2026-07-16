import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "../layout/MainLayout"

import Home from "../pages/Home/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes