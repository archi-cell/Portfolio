import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            
        </>
    );
};

export default MainLayout;
