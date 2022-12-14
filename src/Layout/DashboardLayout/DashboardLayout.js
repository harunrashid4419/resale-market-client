import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useBayer from "../../hooks/useBayer";
import useSeller from "../../hooks/useSeller";
import Footer from "../../Pages/Home/Footer/Footer";
import Navbar from "../../Pages/Home/Navbar/Navbar";
import { AuthContext } from "../../Router/context/UsersContext";

const DashboardLayout = () => {
   const { user } = useContext(AuthContext);
   const [isAdmin] = useAdmin(user?.email);
   const [isBayer] = useBayer(user?.email);
   const [isSeller] = useSeller(user?.email);
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
                  {/* <li>
                     <Link to="/dashboard">Add Products</Link>
                  </li> */}
                  {isSeller && (
                     <>
                        <li>
                           <Link to="/dashboard/productadd">Add Product</Link>
                        </li>
                        <li>
                           <Link to="/dashboard/myProduct">My Product</Link>
                        </li>
                     </>
                  )}
                  {isBayer && (
                     <>
                        <li>
                           <Link to="/dashboard/order">My Order</Link>
                        </li>
                     </>
                  )}

                  {isAdmin && (
                     <>
                        <li>
                           <Link to="/dashboard/seller">All Seller</Link>
                        </li>
                        <li>
                           <Link to="/dashboard/bayer">All Bayer</Link>
                        </li>
                        <li>
                           <Link to="/dashboard/report">Reported Items</Link>
                        </li>
                     </>
                  )}
               </ul>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default DashboardLayout;
