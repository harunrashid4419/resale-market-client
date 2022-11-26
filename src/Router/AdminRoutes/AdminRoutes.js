import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../context/UsersContext";
import Loader from "../../Pages/Others/Loader/Loader";

const AdminRoutes = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   const [isAdmin, isLoading] = useAdmin(user?.email);

   if (loading || isLoading) {
      return <Loader></Loader>;
   }

   if (user && isAdmin) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
