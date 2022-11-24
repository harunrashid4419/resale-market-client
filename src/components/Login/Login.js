import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Router/context/UsersContext";
import toast from "react-hot-toast";

const Login = () => {
   const { logIn } = useContext(AuthContext);
   const [error, setError] = useState("");
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

   const handleLogin = (data) => {
      console.log(data);
      logIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            toast.success('Login success')
            console.log(user);
            setError("");
            navigate('/');
         })
         .catch((error) => {
            console.error(error);
            setError(error.message);
         });
   };

   return (
      <div className="form">
         <h1 className="text-white text-4xl mb-8 font-bold text-center">
            Login
         </h1>
         <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">Email</span>
               </label>
               <input
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
               />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">Password</span>
               </label>
               <input
                  type="password"
                  {...register("password")}
                  placeholder="*******"
                  className="input input-bordered"
               />
            </div>
            {error && <p className="text-red-500 mt-3">{error}</p>}
            <label id="forget" className="label">
               <Link className="label-text text-white">
                  <p>Forget Password?</p>
               </Link>
            </label>
            <div className="mt-3">
               <input
                  className="btn btn-neutral w-full"
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
            Don't have any account{" "}
            <Link className="text-primary" to="/register">
               Register
            </Link>{" "}
         </p>
      </div>
   );
};

export default Login;
