import { createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

     const loginUser = (email, password) => {
       setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
     };

     const logOut = () => {
        return signOut(auth)
     }
    

    useEffect(() => {
        setLoading(true)
        const disConnect = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
        })


        return () => {
            disConnect ()
        }

    },[])

   
    const userInfo = {
        createUser,
        loginUser,
        user,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
           {
            children
           } 
        </AuthContext.Provider>
    );
};

export default AuthProvider;