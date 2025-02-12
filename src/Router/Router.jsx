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
import SingleRoom from "../Components/Pages/SingleRoomDetails/SingleRoom";
import NotFound from "../Components/NotFound/NotFound";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader:()=> fetch('https://modern-hotel-booking-server.vercel.app/rooms')
        },
        {
            path:'allRooms',
            element:<AllRooms></AllRooms>,
            
        },
        {

            path:'/room-details/:id',
            element:<SingleRoom></SingleRoom>,
            loader: ({params})=> fetch(`https://modern-hotel-booking-server.vercel.app/room-details/${params.id}`)

        },
        {
            path:'my-bookings/',
            element:<PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>,
        },
        {
          path:'aboutUs',
           element:<AboutUs></AboutUs>
        }
      
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
       
    },

  
    {
        path:'*',
        element:<NotFound></NotFound>
    },
  ]);

  export default router