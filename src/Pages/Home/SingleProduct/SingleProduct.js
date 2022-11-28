import toast from "react-hot-toast";
import "./SingleProduct.css";

const SingleProduct = ({ product, setProduct }) => {
   const {
      image,
      location,
      origin_price,
      date,
      name,
      used_of_year,
      sell_price,
      product_name,
      description,
      _id,
      review,
      number,
   } = product;

   const reportedProduct = {
      image,
      product_id: _id,
      sell_price,
      product_name,
   };

   const handleReported = (reportedProduct) => {
      fetch("http://localhost:5000/report", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(reportedProduct),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               toast.success("reported success");
            }
         });
   };

   return (
      <div>
         <div className="single_products">
            <div className="card w-full shadow-xl p-5 bg-gray-300">
               <p className="card-title text-black-400 text-right">
                  Posted Time: <span className="text-orange-400">{date}</span>
               </p>
               <button
                  onClick={() => handleReported(reportedProduct)}
                  className="text-right mt-5"
               >
                  Report to Admin
               </button>
               <figure className="px-10 pt-10">
                  <img src={image} alt="" className="rounded-xl w-full h-ful" />
               </figure>
               <div className="my-5">
                  <h2 className="card-title text-red-500 mb-3">
                     {product_name}
                  </h2>

                  <h2 className="font-bold text-md">
                     Original-Price:{" "}
                     <span className="text-xl text-primary">
                        {origin_price}TK.
                     </span>
                  </h2>
                  <p className="font-bold text-md">
                     Sell-Price:{" "}
                     <span className="text-xl text-primary">
                        {sell_price}Tk.
                     </span>
                  </p>
                  <p className="font-bold text-md">
                     Location:{" "}
                     <span className="text-xl text-primary">{location}</span>
                  </p>
                  <p className="font-bold text-md">
                     Used:{" "}
                     <span className="text-xl text-primary">
                        {used_of_year} years
                     </span>
                  </p>
                  <p className="font-bold text-md">
                     Mobile Number:{" "}
                     <span className="text-xl text-primary">{number}</span>
                  </p>
                  <p className="font-bold text-md">
                     Product Type:{" "}
                     <span className="text-xl text-primary">{review}</span>
                  </p>
                  <p className="my-5 text-md">Description: {description}</p>
               </div>
               <h2 className="card-title text-gray-600">User: {name}</h2>
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
      </div>
   );
};

export default SingleProduct;
