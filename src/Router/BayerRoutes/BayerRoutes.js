import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useBayer from "../../hooks/useBayer";
import Loader from "../../Pages/Others/Loader/Loader";
import { AuthContext } from "../context/UsersContext";

const BayerRoutes = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   const [isBayer, isLoading] = useBayer(user?.email);

   if (loading || isLoading) {
      return <Loader></Loader>;
   }
   if (user && isBayer) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BayerRoutes;
