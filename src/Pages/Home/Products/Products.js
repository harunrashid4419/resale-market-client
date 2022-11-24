import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
   const products = useLoaderData();

   return (
      <div>
         {
            products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
         }
         <BookingModal></BookingModal>
      </div>
   );
};

export default Products;