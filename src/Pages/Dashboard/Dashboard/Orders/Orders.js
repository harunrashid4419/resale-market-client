import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Router/context/UsersContext';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const {user} = useContext(AuthContext);

    const {data: orders = []} = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
            {
                orders.map(order => <OrderDetails key={order._id} order={order}></OrderDetails>)
            }
        </div>
    );
};

export default Orders;