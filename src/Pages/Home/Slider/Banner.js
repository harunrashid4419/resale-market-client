import React from "react";
import './Banner.css';

const Banner = ({ slider }) => {
   const { id, image, previous, next } = slider;
   
   return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
         <img src={image} alt="" className="w-full" />
         <div className="content">
            <h2>Do you want to buy <br/> second hand TV?</h2>
            <p>You can come to us if you want to buy a TV. We sell second hand tvs at low prices. You are invited to see the tv in our shop</p>
            <button className="btn btn-info">See More</button>
         </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${previous}`} className="btn btn-circle">
               ❮
            </a>
            <a href={`#slide${next}`} className="btn btn-circle">
               ❯
            </a>
         </div>
      </div>
   );
};

export default Banner;
