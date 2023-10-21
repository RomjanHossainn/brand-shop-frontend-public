import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AddProductPrivet = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
          <span className=" loading loading-lg text-2xl loading-spinner absolute left-1/2 top-1/2 text-gray-800"></span>
        );
    }

    if (user) {
      return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AddProductPrivet;