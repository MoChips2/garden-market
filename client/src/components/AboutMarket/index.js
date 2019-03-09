import React from "react";
import "./style.css"

function AboutMarket(props) {

    return(
        <div>
            <h2>ABOUT THE MARKET</h2>
           <p className="about">{props.about}</p>
        </div>
    )
}

export default AboutMarket;