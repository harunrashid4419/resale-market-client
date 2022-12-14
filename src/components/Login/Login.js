import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Router/context/UsersContext";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Login = () => {
   const { logIn, user, updatePassword } = useContext(AuthContext);
   const [error, setError] = useState("");
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const [tokenEmail, setTokenEmail] = useState("");
   const token = useToken(tokenEmail);
   const [email, setEmail] = useState('');

   const handleLogin = (data) => {
      console.log(data);
      logIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            toast.success("Login success");
            console.log(user);
            setError("");
            setTokenEmail(data.email);
         })
         .catch((error) => {
            console.error(error);
            setError(error.message);
         });
   };

   const handleEmail = event =>{
      const loginEmail = event.target.value;
      setEmail(loginEmail);
   }

   const handleForget = () => {
      updatePassword(email)
         .then((result) => {
            toast.success("please check you email and reset your password");
         })
         .catch((error) => console.error(error));
   };

   useEffect(() => {
      if (user && user?.email && token) {
         navigate(from, { replace: true });
      }
   }, [from, navigate, user, token]);

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
                  onBlur={handleEmail}
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

            <Link onClick={handleForget} className=" text-white">
               <p className="my-3">Forget Password?</p>
            </Link>
            <div className="mt-3">
               <input
                  className="btn btn-neutral w-full"
                  value="Login"
                  type="submit"
               />
            </div>
         </form>
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
