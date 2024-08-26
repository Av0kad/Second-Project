import React from "react";
import CallToActionCSS from './../CallToAction/CTA.module.css';

function CTA(){
    return(
        <div className={`${CallToActionCSS.CTA_wrapper} section`}>
                <h2>Explore iconic and breathtaking places!</h2>
                <button>Book now</button>
        </div>
    )
}

export default CTA;