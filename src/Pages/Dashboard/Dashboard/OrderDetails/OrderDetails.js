import React from "react";

const OrderDetails = ({ order }) => {
   const { productName, price, image } = order;

   return (
      <div className="card bg-gray-300 shadow-xl pt-10">
         <img
            className="mx-auto"
            style={{ width: "200px" }}
            src={image}
            alt=""
         />
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
