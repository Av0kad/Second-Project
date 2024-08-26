import React from "react";
import testimonialCSS from './../Testimonial/Testimonial.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";

import profile from './../../assets/people/person.png'


function Testimonial() {
    return (
        <div className={`${testimonialCSS.testimonial_wrapper} section`} id="testimonials">
            <h2> Explore with TravelSite!</h2>

            <Swiper 

                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                    0:{
                        slidesPerView:1
                    },
                    768:{
                        slidesPerView:2
                    },
                    1200:{
                        slidesPerView:3
                    },
                }}
                autoplay={
                    {
                        delay: 1500
                    }
                }
                modules={Autoplay}

            className={testimonialCSS.swiper}
            
            >
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile} alt="profile1" />
                            <div className={testimonialCSS.detail}>
                            <span>
                                Name Surname
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            </div>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile} alt="profile2" />
                            <div className={testimonialCSS.detail}>
                            <span>
                                Name2 Surname2
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            </div>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile} alt="profile3" />
                            <div className={testimonialCSS.detail}>
                            <span>
                                Name3 Surname3
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            </div>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile} alt="profile4" />
                            <div className={testimonialCSS.detail}>
                            <span>
                                Name4 Surname4
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            </div>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile} alt="profile5" />
                            <div className={testimonialCSS.detail}>
                            <span>
                                Name5 Surname5
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile} alt="profile6" />
                            <div className={testimonialCSS.detail}>
                            <span>
                                Name6 Surname6
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial;