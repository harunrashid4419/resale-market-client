import React, { useContext } from "react";
import { AuthContext } from "../../../Router/context/UsersContext";

const BookingModal = ({ product }) => {
   const { user } = useContext(AuthContext);
   const { name, sell_price } = product;
   
   const handleSubmit = event =>{
        event.preventDefault();
    
   }
   
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
                        disabled
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="productName"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="text"
                        defaultValue={user?.displayName}
                        disabled
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="userName"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="text"
                        defaultValue={user?.email}
                        disabled
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="userEmail"
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="text"
                        defaultValue={sell_price}
                        disabled
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
                        name="price"
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
