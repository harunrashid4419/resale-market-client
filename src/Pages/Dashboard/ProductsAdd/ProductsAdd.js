import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Router/context/UsersContext";

const ProductsAdd = () => {
   const { user } = useContext(AuthContext);

   const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.productName.value;
      const price = form.price.value;
      const review = form.review.value;
      const fullCategory = form.category.value;
      const category = fullCategory.split(" ")[0];
      const number = form.number.value;
      const description = form.description.value;
      const usedOfYear = form.used.value;
      const image = form.image.value;
      const date = new Date();
      const cell_price = form.cellPrice.value;
      const location = form.location.value;

      const product = {
         product_name: name,
         origin_price: price,
         review,
         category_id: category,
         number,
         description,
         used_of_year: usedOfYear,
         image,
         date,
         sell_price: cell_price,
         email: user.email,
         name: user.displayName,
         isAdd: false,
         location,
      };

      fetch("http://localhost:5000/products", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(product),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               toast.success("products added");
               form.reset();
            }
         });
   };

   return (
      <div className="md:pr-32 pr-4 md:py-24 py-4">
         <h1 className="text-center mb-8 text-3xl text-primary">
            Add a Product
         </h1>
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
                  placeholder="Original Price"
                  className="input input-bordered w-full"
                  name="price"
               />
            </div>
            <div className="mb-3">
               <input
                  type="number"
                  placeholder="Cell Price"
                  className="input input-bordered w-full"
                  name="cellPrice"
               />
            </div>
            <div className="mb-3">
               <select name="review" className="select select-bordered w-full">
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
               </select>
            </div>
            <div className="mb-3">
               <select
                  name="category"
                  className="select select-bordered w-full"
               >
                  <option>1 Samsung</option>
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
               <input
                  type="text"
                  placeholder="ImageURL"
                  className="input input-bordered w-full"
                  name="image"
               />
            </div>
            <div className="mb-3">
               <select
                  name="location"
                  className="select select-bordered w-full"
               >
                  <option>Dhaka</option>
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

export default ProductsAdd;
