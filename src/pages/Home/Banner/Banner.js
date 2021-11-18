import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/campbell-3ZUsNJhi_Ik-unsplash.jpg';
import img2 from '../../../images/jeff-david-king-ehWdBropexc-unsplash.jpg';
import img3 from '../../../images/joey-banks-YApiWyp0lqo-unsplash.jpg';

import './Banner.css';
const Banner = () => {
    return (
        <div >
            <Carousel variant="dark">
                <Carousel.Item>
                    <div
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img1})` }} className='banner-pos'>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img2})` }} className='banner-pos'>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img3})` }} className='banner-pos'>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;