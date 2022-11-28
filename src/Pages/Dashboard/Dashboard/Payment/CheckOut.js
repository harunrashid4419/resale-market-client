import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOut = ({ order }) => {
   const stripe = useStripe();
   const elements = useElements();
   const [cardError, setCardError] = useState("");
   const [success, setSuccess] = useState("");
   const [processing, setProcessing] = useState(false);
   const [transitionId, setTransitionId] = useState("");
   const [clientSecret, setClientSecret] = useState("");
   const { price, email, _id, productId } = order;
   console.log('inside', order.productId)

   useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         },
         body: JSON.stringify({ price }),
      })
         .then((res) => res.json())
         .then((data) => setClientSecret(data.clientSecret));
   }, [price]);

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
         return;
      }
      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: "card",
         card,
      });
      if (error) {
         console.log(error);
         setCardError(error.message);
      } else {
         setCardError("");
      }
      setSuccess('');
      setProcessing(true);
      const { paymentIntent, error: confirmError } =
         await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: card,
               billing_details: {
                  email: email,
               },
            },
         });

        if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        if(paymentIntent.status === "succeeded"){
            setSuccess('Congress! you payment is success');
            setTransitionId(paymentIntent.id);

            const payment = {
                price,
                email,
                transitionId: paymentIntent.id,
                ordersId: _id,
                productId
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                })
        }
        setProcessing(false);
   };

   return (
      <form onSubmit={handleSubmit}>
         <CardElement
            options={{
               style: {
                  base: {
                     fontSize: "16px",
                     color: "#424770",
                     "::placeholder": {
                        color: "#aab7c4",
                     },
                  },
                  invalid: {
                     color: "#9e2146",
                  },
               },
            }}
         />
         <button
            className=" btn btn-primary mt-8"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
         >
            Pay
         </button>
         {cardError && <p className="text-red-500 my-3 text-xl">{cardError}</p>}
        {success && <div>
            <p className="text-primary mt-3">{success}</p>
            <p className="text-black">Your TransitionId: <span className="font-bold">{transitionId}</span></p>
        </div>}
      </form>
   );
};

export default CheckOut;
