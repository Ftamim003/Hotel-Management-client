import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosInstance=axios.create({
    baseURL: 'https://modern-hotel-booking-server.vercel.app',
    withCredentials:true
});

const useAxios = () => {
 
    const {logOut}=useContext(AuthContext);
    const navigate=useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        }, error=>{
            console.log('error in ' ,error)

            if(error.status===401|| error.status ===403){
                logOut()
                .then(()=>{
                     
                     navigate('/auth/login')
                })
                .catch(error=> console.log(error))
            }
            return Promise.reject(error);
        })
    },[])
    return axiosInstance;
}

export default useAxios;