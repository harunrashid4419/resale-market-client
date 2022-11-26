import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../hooks/useSeller';
import Loader from '../../Pages/Others/Loader/Loader';
import { AuthContext } from '../context/UsersContext';

const SellerRoutes = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);

    if(loading){
        return <Loader></Loader>
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default SellerRoutes;