import React from "react";
import "./style.css"

function AboutMarket(props) {

    return(
        <div>
           <p className="about">{props.about}</p>
        </div>
    )
}

export default AboutMarket;