import { useEffect, useState } from "react";

const useToken = (email) => {
   const [token, setToken] = useState("");
   useEffect(() => {
      if (email) {
         fetch(`http://localhost:5000/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
               if (data.acknowledge) {
                console.log(data)
                  localStorage.setItem("reseller-token", data.accessToken);
                  setToken(data.accessToken);
               }
            });
      }
   }, [email]);
   return [token];
};

export default useToken;