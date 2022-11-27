import React from "react";
import { Link } from "react-router-dom";

const OrderDetails = ({ order }) => {
   const { productName, price, image, _id } = order;
   console.log(order)

   return (
      <div className="card bg-gray-300 shadow-xl pt-10">
         <img
            className="mx-auto h-full"
            style={{ width: "200px" }}
            src={image}
            alt=""
         />
         <div className="card-body">
            <h2 className="card-title">{productName}</h2>
            <p>Price: {price} tk.</p>
            {price && !order?.paid && (
               <Link to={`/dashboard/payment/${_id}`}>
                  <button className="btn btn-primary btn-sm">Pay</button>
               </Link>
            )}
            {price && order.paid && <span className="text-2xl">Paid</span>}
         </div>
      </div>
   );
};

export default OrderDetails;
