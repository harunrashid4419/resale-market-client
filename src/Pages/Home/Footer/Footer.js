import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
   return (
      <div className="footer-section">
         <div className="footer">
            <div className="left-column">
               <Link to='/'><h3>SellerBD.com</h3></Link>
               <p>
                  Do you want to buy second hand TV? You can come to us
                  if you want to buy a tv. We sell second hand tvs at low
                  prices. You are invited to see the tv in our shop
               </p>
               <h5 className="text-white font-bold text-4xl mt-5">Location</h5>
               <h3>Mirpur 10, Dhaka-1216</h3>
            </div>
            <div className="link">
               <Link to=''>Home</Link>
               <Link to=''>About</Link>
               <Link to=''>Blog</Link>
               <Link to=''>Dashboard</Link>
            </div>
            <div className="contact">
               <h2>Contact Us</h2>
               <h3>Phone: +88014554844</h3>
               <h3>Phone: +88014012457</h3>
               <h3>Email: jafor@gmail.com</h3>
            </div>
         </div>
         <p className="text-center py-5">copyright &copy; 2022 CELLERBD.COM</p>
      </div>
   );
};

export default Footer;
