import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/Home/Footer/Footer";
import Navbar from "../../Pages/Home/Navbar/Navbar";

const DashboardLayout = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
            <input
               id="dashboard-drawer"
               type="checkbox"
               className="drawer-toggle"
            />
            <div className="drawer-content">
               <Outlet></Outlet>
            </div>
            <div className="drawer-side">
               <label
                  htmlFor="dashboard-drawer"
                  className="drawer-overlay"
               ></label>
               <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                  <li>
                     <Link to="/dashboard">Add Products</Link>
                  </li>
                  <li>
                     <Link to="/dashboard/allSeller">All Seller</Link>
                  </li>
                  <li>
                     <Link to="/dashboard/order">My Order</Link>
                  </li>
                  <li>
                     <Link to="/dashboard/myProduct">My Product</Link>
                  </li>
                  <li>
                     <Link to="/dashboard/allBayer">All Bayer</Link>
                  </li>
               </ul>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default DashboardLayout;
