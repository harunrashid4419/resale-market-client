import React from "react";

const OrderDetails = ({ order }) => {
   const { productName, price, image } = order;
   console.log(order);
   return (
      <div className="card w-96 bg-base-100 shadow-xl pt-10">
         <figure>
            <img src={image} alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{productName}</h2>
            <p>Price: {price}</p>
            <div className="card-actions">
               <button className="btn btn-primary">Pay</button>
            </div>
         </div>
      </div>
   );
};

export default OrderDetails;
