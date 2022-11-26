import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Pages/Others/Loader/Loader";
import { AuthContext } from "../context/UsersContext";

const PrivateRouter = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);

   if (loading) {
      return <Loader></Loader>;
   }
   if (user) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
