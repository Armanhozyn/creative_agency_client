import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './OurWorks.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
const options = {
    center: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        900: {
            items: 2,
            nav: false,
        },
        1000: {
            items: 3,
            nav: false,
        },
    },
};

const OurWorks = () => {

    return (
        <section className="mt-5 ourWorks-container">
            <div className="container">
                <h2  className="text-white mb-5">Here are some of <span style={{color : '#7AB259'}}> our works</span></h2>
                <OwlCarousel
                    className="owl-theme"
                    margin={20}
                    {...options}
                    autoplay
                >
                    <div className='item' style={{ height: '300px' }}><img src={carousel1} className="h-100" alt="The Last of us" /></div>
                    <div className='item' style={{ height: '300px' }}><img src={carousel2} className="h-100" alt="GTA V" /></div>
                    <div className='item' style={{ height: '300px' }}><img src={carousel3} className="h-100" alt="Mirror Edge" /></div>
                    <div className='item' style={{ height: '300px' }}><img src={carousel3} className="h-100" alt="Mirror Edge" /></div>
                </OwlCarousel>
            </div>
        </section>
    );
};

export default OurWorks;