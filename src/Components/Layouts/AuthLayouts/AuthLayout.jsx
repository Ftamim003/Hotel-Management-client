import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const AuthLayout = () => {
    return (
        <div>
            <div>
                <header>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;