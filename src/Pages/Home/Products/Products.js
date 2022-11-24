import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
   const products = useLoaderData();
   const [product, setProduct] = useState(null);
   return (
      <div>
         {products.map((product) => (
            <SingleProduct
               setProduct={setProduct}
               key={product._id}
               product={product}
            ></SingleProduct>
         ))}
         {product && <BookingModal setProduct={setProduct} product={product}></BookingModal>}
      </div>
   );
};

export default Products;
