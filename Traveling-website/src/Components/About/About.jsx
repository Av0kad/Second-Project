import React from "react";
import aboutCSS from './../About/About.module.css'

import aboutImg from '../../assets/images/about.png'

function About(){
    return(
        <div className={`${aboutCSS.about_wrapper} section`} id="about">
            <div className={aboutCSS.about_image}>
                <img src={aboutImg} alt="about" />
            </div>
            <div className={aboutCSS.about_content}>
                <h2>Discorver organized <br />
                Adventures! <br />
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi beatae voluptas consequuntur numquam accusamus illo repellendus magnam eligendi, facere odio facilis tempore! Reprehenderit, eaque. Eos illum fugiat saepe non pariatur.</p>
                <div className={aboutCSS.about}>
                    <p><i className="ri-building-4-line"></i>Accommodation</p>
                    <p><i className="ri-car-line"></i>Tranpsort</p>
                    <p><i className="ri-magic-line"></i>Unforgettable experiences</p>
                    <p><i className="ri-instance-line"></i>Local recommendations</p>
                    <p><i className="ri-pin-distance-line"></i>Personal trips</p>
                    <p><i className="ri-phone-line"></i>24/7 support line</p>
                </div>
            </div>
        </div>
    )
}

export default About;