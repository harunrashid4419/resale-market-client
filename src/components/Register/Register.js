import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Router/context/UsersContext";

const Register = () => {
   const { createUser, updateUser } = useContext(AuthContext);
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const handleRegister = (data) => {
      // console.log(data);
      createUser(data.email, data.password)
         .then((result) => {
            const user = result.user;
            toast.success("Sign up success");
            console.log(user);
            const userInfo = {
               displayName: data.name,
               photoURL: data.photoURL,
            };
            updateUser(userInfo)
               .then((result) => {
                  savedUserInDatabase(
                     data.name,
                     data.email,
                     data.photoURL,
                     data.role
                  );
                  navigate("/login");
               })
               .catch((error) => console.error(error));
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const savedUserInDatabase = (name, email, photoURL, role) => {
      const userInfo = { name, email, photoURL, role };
      console.log(userInfo);
      fetch('http://localhost:5000/users', {
         method: 'POST',
         headers: {
            'content-type':'application/json'
         },
         body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(data =>{
         console.log(data);
      })
   };

   return (
      <div className="form">
         <h1 className="text-white text-4xl mb-8 font-bold text-center">
            Register
         </h1>
         <form onSubmit={handleSubmit(handleRegister)}>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">Name</span>
               </label>
               <input
                  type="text"
                  {...register("name", {
                     required: "Name is required",
                  })}
                  placeholder="name"
                  className="input input-bordered"
               />
               {errors?.name && (
                  <p className="text-red-500 mt-2">{errors?.name?.message}</p>
               )}
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">PhotoURL</span>
               </label>
               <input
                  type="text"
                  {...register("photoURL", {
                     required: "PhotoUrl is required",
                  })}
                  placeholder="Photo"
                  className="input input-bordered"
               />
               {errors?.name && (
                  <p className="text-red-500 mt-2">{errors?.name?.message}</p>
               )}
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">
                     As a Bayer or Seller?
                  </span>
               </label>
               <select
                  {...register("role", { required: "Role is required" })}
                  className="select select-bordered w-full"
               >
                  <option>Bayer</option>
                  <option>Seller</option>
               </select>
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">Email</span>
               </label>
               <input
                  type="email"
                  {...register("email", {
                     required: "Email is required",
                  })}
                  placeholder="email"
                  className="input input-bordered"
               />
               {errors?.email && (
                  <p className="text-red-500 mt-2">{errors?.email?.message}</p>
               )}
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">Password</span>
               </label>
               <input
                  type="password"
                  {...register("password", {
                     required: "Password is required",
                     pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                        message: "Password should be strong",
                     },
                     minLength: {
                        value: 6,
                        message: "Password at least 6 character or longer",
                     },
                  })}
                  placeholder="*******"
                  className="input input-bordered"
               />
               {errors?.password && (
                  <p className="text-red-500 mt-2">
                     {errors?.password?.message}
                  </p>
               )}
            </div>
            <label id="forget" className="label">
               <Link className="label-text text-white mt-3">
                  <p>Forget Password?</p>
               </Link>
            </label>
            <div className="mt-3">
               <input
                  className="btn btn-neutral w-full mt-5"
                  value="Register"
                  type="submit"
               />
            </div>
         </form>
         <div className="divider text-white">OR</div>
         <Link>
            <div className="bg-white p-3 rounded-md">
               <p className="fond-bold text-xl flex items-center justify-center">
                  <FaGoogle className="mr-2" />
                  Sign in with google
               </p>
            </div>
         </Link>
         <p className="text-white text-center mt-6 text-xl">
            Already have an account{" "}
            <Link className="text-primary" to="/login">
               Login
            </Link>{" "}
         </p>
      </div>
   );
};

export default Register;
