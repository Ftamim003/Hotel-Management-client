import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

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

    const googleSignIn =() =>{
        return signInWithPopup(auth,googleProvider)
    }

    const useInfo = {
        user,
        loading,
        createUser,
        userLogin,
        googleSignIn,
    }
 return (
        <AuthContext.Provider value={useInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;