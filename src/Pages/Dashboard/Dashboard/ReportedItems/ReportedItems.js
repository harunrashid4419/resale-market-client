import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Others/Loader/Loader";
import Reported from "./Reported";

const ReportedItems = () => {
   const { data: reports = [], refetch, isLoading } = useQuery({
      queryKey: ["reports"],
      queryFn: async () => {
         const res = await fetch("https://resale-market-server-flax.vercel.app/report");
         const data = await res.json();
         return data;
      },
   });

   if(isLoading){
      return <Loader></Loader>
   }

   return (
      <div className="md:px-24 px-5 md:py-12 py-5">
        <h3 className="text-primary text-3xl text-center mb-8">Reported Items</h3>
         <div className="grid gap-5 md:grid-cols-2 grid-cols-1">
            {
                reports.map(report => <Reported key={report._id} refetch={refetch} report={report}></Reported>)
            }
         </div>
      </div>
   );
};

export default ReportedItems;
