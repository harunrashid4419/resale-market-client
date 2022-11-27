import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Router/context/UsersContext";

const MyProducts = () => {
   const { user } = useContext(AuthContext);
   const { data: products = [], refetch } = useQuery({
      queryKey: ["products", user?.email],
      queryFn: async () => {
         const res = await fetch(
            `http://localhost:5000/products?email=${user?.email}`
         );
         const data = await res.json();
         return data;
      },
   });
   console.log(products);

   const handleDelete = id =>{
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success('Product deleted successfully');
                    refetch();
                }
            })
   }
console.log(products)
   return (
      <div>
         <p className="text-3xl text-primary font-bold">My Products</p>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-6 py-12 px-8">
            {products.map((product) => (
               <div className="card bg-neutral text-neutral-content">
                <img style={{width: '400px'}} className="p-5 mx-auto" src={product.image} alt="" />
                  <div className="card-body items-center text-center">
                     <h2 className="card-title">{product.name}</h2>
                     <p>Price: {product.cell_price} tk.</p>
                     <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
                        <button className="btn btn-ghost">Available</button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default MyProducts;
