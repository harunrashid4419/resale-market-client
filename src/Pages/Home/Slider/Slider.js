import React from "react";
import img1 from "../../../assets/slider_img/img1.png";
import img2 from "../../../assets/slider_img/img2.png";
import img3 from "../../../assets/slider_img/img3.png";
import Banner from "./Banner";

const Slider = () => {
   const sliderData = [
      {
         image: img2,
         previous: 3,
         next: 2,
         id: 1,
      },
      {
         image: img1,
         previous: 1,
         next: 3,
         id: 2,
      },
      {
         image: img3,
         previous: 2,
         next: 1,
         id: 3,
      },
   ];

   return (
      <div className="carousel w-full" style={{height: '650px'}}>
         {sliderData.map((slider) => (
            <Banner key={slider.id} slider={slider}></Banner>
         ))}
      </div>
   );
};

export default Slider;
