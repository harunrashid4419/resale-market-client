import React from 'react';
import { FaProductHunt, FaTv } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";

const SoldSection = () => {
    return (
        <div className='py-12 grid lg:grid-cols-3 text-white text-center grid-cols-1 bg-stone-600'>
            <div>
                <FaProductHunt className='mx-auto text-6xl'></FaProductHunt>
                <p className='text-3xl font-bold my-2'>Available Products</p>
                <p className='text-4xl font-bold'>2200+</p>
            </div>
            <div className='lg:my-0 md:my-12 my-12'>
                <FaTv className='mx-auto text-6xl'></FaTv>
                <p className='text-3xl font-bold my-2'>TV Sold Month</p>
                <p className='text-4xl font-bold'>654+</p>
            </div>
            <div>
                <TbBrandAirtable className='mx-auto text-6xl'></TbBrandAirtable>
                <p className='text-3xl font-bold my-2'>Available Brands</p>
                <p className='text-4xl font-bold'>35+</p>
            </div>
        </div>
    );
};

export default SoldSection;