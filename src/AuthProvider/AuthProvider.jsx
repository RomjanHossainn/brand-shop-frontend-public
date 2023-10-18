import { createContext, useState} from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    

    const [user,setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(email,password)
    }
    
    const userInfo = {
        createUser,
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