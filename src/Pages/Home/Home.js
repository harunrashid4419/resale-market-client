import React from 'react';
import AllCategory from './Categories/AllCategory';
import Slider from './Slider/Slider';
import SoldSection from '../Others/SoldSection/SoldSection';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AdvertisedItems></AdvertisedItems>
            <AllCategory></AllCategory>
            <SoldSection></SoldSection>
        </div>
    );
};

export default Home;