import { useQuery } from "@tanstack/react-query";
import React from "react";
import Seller from "./Seller";

const AllSeller = () => {
   const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/users");
         const data = await res.json();
         return data;
      },
   });

   return (
      <div>
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
