import React from "react";
import toast from "react-hot-toast";

const Bayer = ({bayer, refetch}) => {
console.log(bayer.role)
    const {photoURL, name, email, _id} = bayer;

    const handleDelete = id =>{
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    toast.success('delete successfully');
                    refetch();
                }
            })
    }

   return (
      <tbody>
         {bayer.role === "Bayer" && (
            <tr>
               <th>
                  <div className="avatar">
                     <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photoURL} alt="" />
                     </div>
                  </div>
               </th>
               <td>{name}</td>
               <td>{email}</td>
               <td>
                  <button
                     onClick={() => handleDelete(_id)}
                     className="btn btn-sm"
                  >
                     Delete
                  </button>
               </td>
            </tr>
         )}
      </tbody>
   );
};

export default Bayer;
