import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Rooms from "../Components/Pages/Rooms";
import MyBookings from "../Components/Pages/MyBookings";
import Login from "../Components/Pages/Login/Login";
import SIgnUp from "../Components/Pages/SignUp/SIgnUp";
import AuthLayout from "../Components/Layouts/AuthLayouts/AuthLayout";
import PrivateRoutes from "../Routes/PrivateRoute/PrivateRoutes";
import AllRooms from "../Components/Pages/AllRooms/AllRooms";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader:()=> fetch('http://localhost:5000/rooms')
        },
        {
            path:'allRooms',
            element:<AllRooms></AllRooms>,
            
        },
        {
            path:'my-bookings',
            element:<PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
        },
      
      ]
      
    },
    {
       path:'auth',
       element:<AuthLayout></AuthLayout>,
       children:[
        {
            path:'/auth/login',
            element:<Login></Login>
        },
        {
            path:'/auth/signUp',
            element:<SIgnUp></SIgnUp>
        }
       ]
    }
  ]);

  export default router