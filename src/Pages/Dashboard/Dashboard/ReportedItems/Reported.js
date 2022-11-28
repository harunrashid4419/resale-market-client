import React from "react";
import toast from "react-hot-toast";

const Reported = ({ report, refetch }) => {
   const { product_id, product_name, image, sell_price } = report;
   console.log(report)

   const handleDeleteToReport = (id) => {
      const agree = window.confirm("DO you want to delete?");
      if (agree) {
         fetch(`https://resale-market-server-flax.vercel.app/report/${id}`, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               if (data.deletedCount) {
                  toast.success("delete successfully");
                  refetch();
               }
            });
      }
   };

   return (
      <div className="card bg-primary text-primary-content">
         <div className="card-body">
            <p className=" font-bold mb-5">Product ID: {product_id}</p>
            <img className="w-full" src={image} alt="" />
            <h2 className="card-title">{product_name}</h2>
            <p>Price: {sell_price}</p>
            <div className="card-actions justify-end">
               <button
                  onClick={() => handleDeleteToReport(product_id)}
                  className="btn"
               >
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
};

export default Reported;
