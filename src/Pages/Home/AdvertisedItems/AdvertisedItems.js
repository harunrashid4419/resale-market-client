import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AdvertiseModal from "../AdvertiseModal/AdvertiseModal";
import SingleAdvertise from "../SingleAdvertise/SingleAdvertise";

const AdvertisedItems = () => {
   const [advertise, setAdvertise] = useState(null);
   const { data: advertises = [] } = useQuery({
      queryKey: ["advertises"],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/advertise");
         const data = await res.json();
         return data;
      },
   });

   console.log(advertises);

   return (
      <div>
         {advertises.length > 0 && (
            <div className="">
               <div className="">
                  {advertises.map(
                     (advertise) =>
                        !advertise.isPaid && (
                           <div className="py-12">
                              <h3 className="mb-5 text-center text-primary font-bold text-3xl">
                                 Advertise section
                              </h3>
                              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                 <SingleAdvertise
                                    advertise={advertise}
                                    setAdvertise={setAdvertise}
                                    key={advertise._id}
                                 ></SingleAdvertise>
                              </div>
                           </div>
                        )
                  )}
               </div>
               <div>
                  {advertise && (
                     <AdvertiseModal
                        setAdvertise={setAdvertise}
                        advertise={advertise}
                     ></AdvertiseModal>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default AdvertisedItems;
