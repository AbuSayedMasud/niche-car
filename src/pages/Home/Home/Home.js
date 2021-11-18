import React from 'react';
import Banner from '../Banner/Banner';
import CarDemo from '../CarDemo/CarDemo';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CarDemo></CarDemo>
            <Review></Review>
            
            <Contact></Contact>
        </div>
    );
};

export default Home;