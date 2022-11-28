import { useQuery } from "@tanstack/react-query";
import React from "react";
import Seller from "./Seller";

const AllSeller = () => {
   const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await fetch("https://resale-market-server-flax.vercel.app/users");
         const data = await res.json();
         return data;
      },
   });

   return (
      <div className="md:px- 0 px-8">
         <p className="text-3xl text-primary py-5">All Seller</p>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Action</th>
                     <th>Verify</th>
                  </tr>
               </thead>
               {users.map((user, i) => (
                  <Seller key={user._id} i={i} refetch={refetch} user={user}></Seller>
               ))}
            </table>
         </div>
      </div>
   );
};

export default AllSeller;
