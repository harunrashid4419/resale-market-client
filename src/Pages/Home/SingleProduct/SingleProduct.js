import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Router/context/UsersContext";
import "./SingleProduct.css";

const SingleProduct = ({ product, setProduct }) => {
   const {
      image,
      location,
      original_price,
      date,
      name,
      used_of_year,
      sell_price,
   } = product;

   const { user } = useContext(AuthContext);
   
   
   return (
      <div className="single_products">
         <div className="card w-full bg-base-100 shadow-xl p-5">
            <p className="card-title text-orange-400 text-right">
               Posted Time: {date}
            </p>
            <figure className="px-10 pt-10">
               <img
                  style={{ width: "200px" }}
                  src={image}
                  alt="Shoes"
                  className="rounded-xl w-full"
               />
            </figure>
            <div className="my-5">
               <h2 className="card-title text-red-500">{name}</h2>

               <h2 className="card-title">
                  Original-Price: {original_price}TK.
               </h2>
               <p className="card-title">Sell-Price: {sell_price}Tk.</p>
               <p className="card-title">Location: {location}</p>
               <p className="card-title">Used {used_of_year} years</p>
            </div>
            <h2 className="card-title">User: {user?.displayName}</h2>
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
