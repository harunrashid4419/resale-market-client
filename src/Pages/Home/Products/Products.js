import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
   const products = useLoaderData();
   const [product, setProduct] = useState(null);
   return (
      <div>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-12 px-12 mt-12">
            {products.map((product) => (!product.isAdd && 
               <SingleProduct
                  setProduct={setProduct}
                  key={product._id}
                  product={product}
               ></SingleProduct>
            ))}
         </div>
         {product && (
            <BookingModal
               setProduct={setProduct}
               product={product}
            ></BookingModal>
         )}
      </div>
   );
};

export default Products;
