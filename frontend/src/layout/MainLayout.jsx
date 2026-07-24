import { Outlet } from "react-router"

import Header from "../components/layout/Header/Header"
import Footer from "../components/layout/Footer/Footer"
import BackToTop from "../components/common/BackToTop"

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default MainLayout