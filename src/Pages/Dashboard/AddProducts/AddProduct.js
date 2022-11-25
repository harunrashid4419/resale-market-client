import React from "react";

const AddProduct = () => {
   const handleSubmit = (event) => {};

   return (
      <div className='md:pr-32 pr-4 md:py-24 py-4'>
        <h1 className="text-center mb-8 text-3xl text-primary">Add a Product</h1>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <input
                  type="text"
                  placeholder="product name"
                  className="input input-bordered w-full"
                  name="productName"
               />
            </div>
            <div className="mb-3">
               <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  name="price"
               />
            </div>
            <div className="mb-3">
               <select className="select select-bordered w-full">
                  <option selected>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
               </select>
            </div>
            <div className="mb-3">
               <select className="select select-bordered w-full">
                  <option selected>1 Samsung</option>
                  <option>2 Waltion</option>
                  <option>3 Vission</option>
               </select>
            </div>
            <div className="mb-3">
               <input
                  type="number"
                  placeholder="Mobile Number"
                  className="input input-bordered w-full"
                  name="number"
               />
            </div>
            <div className="mb-3">
               <select className="select select-bordered w-full">
                  <option selected>Dhaka</option>
                  <option>Rajshahi</option>
                  <option>Khulna</option>
                  <option>Natore</option>
                  <option>Rangpur</option>
               </select>
            </div>
            <div className="mb-3">
               <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full"
                  name="description"
               />
            </div>
            <div className="mb-3">
               <input
                  type="text"
                  placeholder="Years of used"
                  className="input input-bordered w-full"
                  name="used"
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
   );
};

export default AddProduct;
