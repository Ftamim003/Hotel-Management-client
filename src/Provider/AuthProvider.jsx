import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext=createContext(null)

const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(()=>{

        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)

            if(currentUser?.email){
                const user={email:currentUser.email}
                axios.post('http://localhost:5000/jwt',user,{
                    withCredentials:true
                })
                    .then(res=> {
                        console.log(res.data)
                        setLoading(false);
                    }
                    )
            }
            else{
                axios.post('http://localhost:5000/logout',{},{
                    withCredentials:true
                })
                .then(res=>{
                    console.log('logout',res.data)
                    setLoading(false);
                })
            }
            
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const googleSignIn =() =>{
        return signInWithPopup(auth,googleProvider)
    }

    const useInfo = {
        user,
        loading,
        setUser,
        createUser,
        userLogin,
        googleSignIn,
        logOut,
        updateProfileUser,
    }
 return (
        <AuthContext.Provider value={useInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;