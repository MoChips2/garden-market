import React from "react";
import "./style.css";

function Image(props) {
    return(
        <div className="imageDiv">
        <img src={props.img} className="marketImage"  alt="garden market" />
        </div>
    )
}

export default Image;