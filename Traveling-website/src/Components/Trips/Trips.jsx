import React from "react";
import TripCSS from './../Trips/Trips.module.css'

import trip01 from '../../assets/trips/trip1.jpg'
import trip02 from '../../assets/trips/trip2.jpg'
import trip03 from '../../assets/trips/trip3.jpg'
import trip04 from '../../assets/trips/trip4.jpg'
import trip05 from '../../assets/trips/trip5.jpg'
import trip06 from '../../assets/trips/trip6.jpg'
import trip07 from '../../assets/trips/trip7.jpg'
import trip08 from '../../assets/trips/trip8.jpg'


function Trips() {
    return (
        <div className={`${TripCSS.trips_Wrapper} section`} id="trips">
            <h2>Popular Trips</h2>

            <div className={TripCSS.cards}>
                <div className={TripCSS.card}>
                    <img src={trip01} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>

                        <h3>Placeholder text</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"> 7 days</i></span>
                            <span><i className="ri-map-pin-line"> 5 Places</i></span>
                            <span><i className="ri-flag-line"> Country</i></span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$ 1,400 </span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip02} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <h3>Placeholder text</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"> 6 days</i></span>
                            <span><i className="ri-map-pin-line"> 6 Places</i></span>
                            <span><i className="ri-flag-line"> Country</i></span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$ 3,600 </span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip03} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                            <i className="ri-star-line"></i>
                        </div>

                        <h3>Placeholder text</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"> 7 days</i></span>
                            <span><i className="ri-map-pin-line"> 7 Places</i></span>
                            <span><i className="ri-flag-line"> Country</i></span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$ 2,800 </span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip04} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <h3>Placeholder text</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"> 14 days</i></span>
                            <span><i className="ri-map-pin-line"> 8 Places</i></span>
                            <span><i className="ri-flag-line"> Country</i></span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$ 700 </span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip05} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <h3>Placeholder text</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"> 3 days</i></span>
                            <span><i className="ri-map-pin-line"> 3 Places</i></span>
                            <span><i className="ri-flag-line"> Country</i></span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$ 1,100 </span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip06} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <h3>Placeholder text</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"> 5 days</i></span>
                            <span><i className="ri-map-pin-line"> 4 Places</i></span>
                            <span><i className="ri-flag-line"> Country</i></span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$ 400 </span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip07} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                            <i className="ri-star-line"></i>
                        </div>

                        <h3>Placeholder text</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"> 8 days</i></span>
                            <span><i className="ri-map-pin-line"> 8 Places</i></span>
                            <span><i className="ri-flag-line"> Country</i></span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$ 2,400 </span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip08} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>

                        <h3>Placeholder text</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"> 4 days</i></span>
                            <span><i className="ri-map-pin-line"> 2 Places</i></span>
                            <span><i className="ri-flag-line"> Country</i></span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$ 1,200 </span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trips;