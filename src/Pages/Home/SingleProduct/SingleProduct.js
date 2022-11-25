import React, { useContext } from "react";
import { AuthContext } from "../../../Router/context/UsersContext";
import "./SingleProduct.css";

const SingleProduct = ({ product, setProduct }) => {
   const { image, location, original_price, name, used_of_year, sell_price } =
      product;
   const { user } = useContext(AuthContext);

   return (
      <div className="single_products">
         <div className="card w-full bg-base-100 shadow-xl p-5">
            <figure className="px-10 pt-10">
               <img src={image} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div>
               <h2 className="card-title">{name}</h2>
               <p className="card-title">Posted Time</p>
               <h2 className="card-title">
                  Original-Price: {original_price}TK.
               </h2>
               <p className="card-title">Sell-Price: {sell_price}Tk.</p>
               <p className="card-title">Location: {location}</p>
               <p className="card-title">Used {used_of_year} years</p>
               <h2 className="card-title">User: {user?.displayName}</h2>
            </div>
            {/* <div className="flex justify-between">
               <h2 className="card-title">{name}</h2>
               <p className="card-title">Posted Time</p>
            </div>
            <div className="flex justify-between mt-3">
               <h2 className="card-title">
                  Original-Price: {original_price}TK.
               </h2>
               <p className="card-title">Sell-Price: {sell_price}Tk.</p>
            </div>
            <div className="flex justify-between mt-3">
               <h2 className="card-title">User: {user?.displayName}</h2>
               <p className="card-title">Location: {location}</p>
               <p className="card-title">Used {used_of_year} years</p>
            </div> */}
            <div className="card-actions mx-auto mt-5">
               <label
                  onClick={() => setProduct(product)}
                  htmlFor="my-modal-3"
                  className="btn"
               >
                  Book Now
               </label>
            </div>
         </div>
      </div>
   );
};

export default SingleProduct;
