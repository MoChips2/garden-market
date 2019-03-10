import React from "react";
import "./style.css"

function AboutMarket(props) {

    return(
        <div className="aboutMarketDiv">
            <h2 className="aboutMarketHeader">ABOUT THE MARKET</h2>
           <p className="about">{props.about}</p>
        </div>
    )
}

export default AboutMarket;