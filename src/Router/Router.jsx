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


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'rooms',
            element:<Rooms></Rooms>
        },
        {
            path:'my-bookings',
            element:<MyBookings></MyBookings>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signUp',
            element:<SIgnUp></SIgnUp>
        }
      ]
    },
  ]);

  export default router