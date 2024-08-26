import React from "react";
import DestinationCSS from './../Destination/Destination.module.css';

import destination01 from '../../assets/destinations/destionation01.jpg'
import destination02 from '../../assets/destinations/destionation02.jpg'
import destination03 from '../../assets/destinations/destionation03.jpg'
import destination04 from '../../assets/destinations/destionation04.jpg'
import destination05 from '../../assets/destinations/destionation05.jpg'
import destination06 from '../../assets/destinations/destionation06.jpg'



function Destination() {
    return (
        <div className={`${DestinationCSS.destination_wrapper} section`} id="populardestinations">
            <h2> Popular Destinations</h2>
            <div className={DestinationCSS.destinationCards}>
                <div className={DestinationCSS.destinationCard}>
                    <img src={destination01} alt="img1" />
                    <div className={DestinationCSS.destinationDetails}>
                        <h3>Sample text</h3>
                        <div className={DestinationCSS.btns}>
                            <a href="#">All destinations</a>
                            <a href="#">Deals</a>   
                        </div>
                    </div>
                </div>
                <div className={DestinationCSS.destinationCard}>
                    <img src={destination02} alt="img1" />
                    <div className={DestinationCSS.destinationDetails}>
                        <h3>Sample text</h3>
                        <div className={DestinationCSS.btns}>
                            <a href="#">All destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={DestinationCSS.destinationCard}>
                    <img src={destination03} alt="img1" />
                    <div className={DestinationCSS.destinationDetails}>
                        <h3>Sample text</h3>
                        <div className={DestinationCSS.btns}>
                            <a href="#">All destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={DestinationCSS.destinationCard}>
                    <img src={destination04} alt="img1" />
                    <div className={DestinationCSS.destinationDetails}>
                        <h3>Sample text</h3>
                        <div className={DestinationCSS.btns}>
                            <a href="#">All destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={DestinationCSS.destinationCard}>
                    <img src={destination05} alt="img1" />
                    <div className={DestinationCSS.destinationDetails}>
                        <h3>Sample text</h3>
                        <div className={DestinationCSS.btns}>
                            <a href="#">All destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={DestinationCSS.destinationCard}>
                    <img src={destination06} alt="img1" />
                    <div className={DestinationCSS.destinationDetails}>
                        <h3>Sample text</h3>
                        <div className={DestinationCSS.btns}>
                            <a href="#">All destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination