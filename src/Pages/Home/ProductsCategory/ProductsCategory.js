import React from 'react';

const ProductsCategory = ({product}) => {
    const {name, price, category} = product;
    return (
        <div>
            <p>{category}</p>
        </div>
    );
};

export default ProductsCategory;