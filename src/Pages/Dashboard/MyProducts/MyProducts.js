import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Router/context/UsersContext';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data: products = []} = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <p>my products{products.length}</p>
        </div>
    );
};

export default MyProducts;