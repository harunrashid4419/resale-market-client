import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Router/context/UsersContext";

const BookingModal = ({ product, setProduct }) => {
   const { user } = useContext(AuthContext);
   const { name, sell_price, image } = product;

   const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.target;
      const productName = form.productName.value;
      const userName = form.userName.value;
      const userEmail = form.userEmail.value;
      const price = form.price.value;
      const number = form.number.value;
      const location = form.location.value;      

      const booked = {
         productName,
         userName,
         userEmail,
         price,
         number,
         location,
         image
      };
      fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booked)
      })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                setProduct(null)
                toast.success('order success');
            }
        })
   };

   return (
      <div>
         <input type="checkbox" id="my-modal-3" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
               <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
               >
                  ✕
               </label>
               <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                     <input
                        type="text"
                        defaultValue={name}
                        disabled={true}
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="productName"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="text"
                        defaultValue={user?.displayName}
                        disabled={true}
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="userName"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="text"
                        defaultValue={user?.email}
                        disabled={true}
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="userEmail"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="text"
                        defaultValue={sell_price}
                        disabled={true}
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="price"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="text"
                        placeholder="Meeting Location"
                        className="input input-bordered w-full"
                        name="location"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="number"
                        placeholder="Sell Number"
                        className="input input-bordered w-full"
                        name="number"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary w-full"
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default BookingModal;
