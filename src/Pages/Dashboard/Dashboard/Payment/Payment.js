import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
console.log(stripePromise);

const Payment = () => {
   const order = useLoaderData();
   const { productName, price } = order;
   return (
      <div>
         <p className="text-primary text-3xl text-center mb-5">Payment</p>
         <p>Product: {productName}</p>
         <p>Price: {price}</p>
         <div className="w-96 py-8">
            <Elements stripe={stripePromise}>
               <CheckOut
                    order={order}
               />
            </Elements>
         </div>
      </div>
   );
};

export default Payment;
