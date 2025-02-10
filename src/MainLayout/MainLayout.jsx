import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";



const MainLayout = () => {
    return (
        <div className="">
            
        <Navbar></Navbar>
        
        <div className="relative pt-24 min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-230px)] w-11/12 mx-auto">

            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default MainLayout;