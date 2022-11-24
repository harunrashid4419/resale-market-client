import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {

    const {name, category_id} = category;

    return (
        <div className='text-center text-white text-2xl p-8'>
            <Link to={`/products/${category_id}`}>{name}</Link>
        </div>
    );
};

export default Category;