import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
   return (
      <div className="form">
         <h1 className="text-white text-4xl mb-8 font-bold text-center">
            Register
         </h1>
         <form>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">Name</span>
               </label>
               <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
               />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">As a Bayer or Seller?</span>
               </label>
               <select className="select select-bordered w-full">
                  <option>Bayer</option>
                  <option selected>Seller</option>
               </select>
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text text-white">Email</span>
               </label>
               <input
                  type="email"
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
                  placeholder="*******"
                  className="input input-bordered"
               />
            </div>
            <label id="forget" className="label">
               <Link className="label-text text-white mt-3">
                  <p>Forget Password?</p>
               </Link>
            </label>
            <div className="form-control mt-3">
               <button className="btn btn-primary">Register</button>
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
