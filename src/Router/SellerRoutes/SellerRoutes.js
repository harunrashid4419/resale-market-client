import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import useSeller from '../../hooks/useSeller';
import Loader from '../../Pages/Others/Loader/Loader';
import { AuthContext } from '../context/UsersContext';

const SellerRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isLoading] = useSeller(user?.email);

    if(loading || isLoading){
        return <Loader></Loader>
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>;

};

export default SellerRoutes;