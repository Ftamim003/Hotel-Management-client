import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <div>
           <div className="">
                <nav className="flex items-center">
                    <div className="navbar ">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex="0" role="button" className="btn btn-ghost md:hidden">
                                    <i className="fa-solid fa-bars bg-white rounded-full border text-base w-12 border-black-600 p-3 shadow-md "></i>
                                </div>
                                <ul
                                    tabIndex="0"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-28 p-2 shadow">
                                    <li><NavLink to='/'> Home </NavLink></li>
                                    <li><NavLink to='/rooms'>Rooms </NavLink></li>
                                    <li> <NavLink to="/my-bookings">My Bookings</NavLink></li>
                                    {/* <li><NavLink to='/about'> About Us  </NavLink></li> */}
                                    {/* {
                                        user && <>
                                            <li><NavLink to='/profile'> Profile  </NavLink></li>
                                        </>
                                    } */}
                                </ul>
                            </div>
                            <div className="flex gap-3 items-center">

                                <h1 className="font-bold text-2xl text-blue-600 "><NavLink to='/'>Lingo Bingo</NavLink></h1>
                            </div>
                        </div>
                        <div className="navbar-center hidden md:flex">
                            <ul className="menu menu-horizontal px-1 text-lg">
                                <li ><NavLink to='/'> Home </NavLink></li>
                                <li><NavLink to='/rooms'>Rooms </NavLink></li>
                                <li> <NavLink to="/my-bookings">My Bookings</NavLink></li>
                                {/* <li><NavLink to='/about'> About Us  </NavLink></li> */}
                                {
                                    user && <>
                                        <li><NavLink to='/profile'> Profile  </NavLink></li>
                                    </>
                                }
                            </ul>
                        </div>
                        <div className="navbar-end flex gap-7">
                            {
                                user && user?.email ? <div className="flex items-center gap-1">
                                    <p><span className="text-sm">Welcome,</span> {user.displayName}</p>
                                    <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />

                                </div> : ""
                            }
                            {
                                user && user?.email ? <button onClick={logOut} className="btn btn-primary hover:bg-blue-600 transition-colors duration-300">Log-out</button> : <Link to='/auth/login' className="btn btn-primary hover:bg-blue-600 transition-colors duration-300">Login</Link>
                            }

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;