import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from '../Category/Category';

const AllCategory = () => {

    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='bg-red-500 grid lg:grid-cols-3 grid-cols-1'>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
    );
};

export default AllCategory;