import React from 'react';
import AllCategory from './Categories/AllCategory';
import Slider from './Slider/Slider';
import SoldSection from '../Others/SoldSection/SoldSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AllCategory></AllCategory>
            <SoldSection></SoldSection>
        </div>
    );
};

export default Home;