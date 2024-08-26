import React from "react";
import footerCSS from '../../Components/Footer/Footer.module.css'

function Footer() {
    return (
        <div className={`${footerCSS.footer_Wrapper} section`}>
            <div className={footerCSS.top_container}>
                <div className={footerCSS.logo}>
                    <a href="#">TravelSite</a>
                </div>
                <div className={footerCSS.social}>
                    <i className="ri-facebook-line"></i>
                    <i className="ri-youtube-line"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-twitter-line"></i>
                </div>
            </div>
            <div className={footerCSS.bottom_container}>
                <div className={footerCSS.footerLinks}>
                    <h3>About TravelSite</h3>
                    <ul>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#">Our partners</a></li>
                        <li><a href="#testimonials">Reviews</a></li>
                        <li><a href="#populardestinations">Destinations</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Destinations</h3>
                    <ul>
                        <li><a href="#">Country</a></li>
                        <li><a href="#">Country</a></li>
                        <li><a href="#">Country</a></li>
                        <li><a href="#">Country</a></li>
                        <li><a href="#">Country</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Requests</a></li>
                        <li><a href="#">Booking conditions</a></li>
                        <li><a href="#">Recommendations</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Newsletter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta!</p>

                    <div className={footerCSS.inputWrapper}>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;