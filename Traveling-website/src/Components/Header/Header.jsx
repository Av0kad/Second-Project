import React from "react";
import headerCSS from './../Header/Header.module.css'


import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Autoplay} from 'swiper/modules'


import destinationImg1 from './../../assets/destinations/china.jpg';
import destinationImg2 from './../../assets/destinations/singapore.jpg';
import destinationImg3 from './../../assets/destinations/france.jpg';
import destinationImg4 from './../../assets/destinations/singapore.jpg';
import destinationImg5 from './../../assets/destinations/china.jpg';
import destinationImg6 from './../../assets/destinations/france.jpg';

function Header() {
    return(
        <div className={`${headerCSS.header_wrapper} section`} id="home">
            <div className={headerCSS.imageContainer}>
                <h2>Explore The World, <br /> Take A Magnificent Journey</h2>
            </div>

            <Swiper 
            
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay = {
                    {
                        delay:1500,
                    }
                }
                
                breakpoints={
                    {
                        0:{
                            slidesPerView:1,
                        },
                        500:{
                            slidesPerView:2,
                        },
                        768:{
                            slidesPerView:3,
                        },
                        1024:{
                            slidesPerView:4,
                        },
                        1200:{
                            slidesPerView:5,
                        },
                    }
                    

                }       
                modules={{Autoplay}}
            
            className={headerCSS.swiper}>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg1} alt="Destinationcard" />
                    <h3>Sample</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg2} alt="Destinationcard" />
                        <h3>Sample</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg3} alt="Destinationcard" />
                        <h3>Sample</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg4} alt="Destinationcard" />
                     <h3>Sample</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg5} alt="Destinationcard" />
                   <h3>Sample</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg6} alt="Destinationcard" />
                        <h3>Sample</h3>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Header;