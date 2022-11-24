import React, { useContext } from 'react';
import { AuthContext } from '../context/UsersContext';

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouter;