import { useQuery } from "@tanstack/react-query";
import React from "react";
import Bayer from "./Bayer";

const AllBayer = () => {
   const { data: byers = [], refetch } = useQuery({
      queryKey: ["byers"],
      queryFn: async () => {
         const res = await fetch("https://resale-market-server-flax.vercel.app/users");
         const data = await res.json();
         return data;
      },
   });

   return (
      <div className="md:px-0 px-8">
         <p className="text-3xl text-primary py-5">All Bayer</p>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Action</th>
                  </tr>
               </thead>
               {byers.map((bayer) => (
                  <Bayer
                     key={bayer._id}
                     refetch={refetch}
                     bayer={bayer}
                  ></Bayer>
               ))}
            </table>
         </div>
      </div>
   );
};

export default AllBayer;
