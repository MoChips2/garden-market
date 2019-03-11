import React from "react";
import "./style.css";

function MarketTitle(props) {

    return (
        <div className="marketTitleDiv">
        <h1 className="marketName">{props.marketName}</h1>
        <h3 className="organizer">organized by {props.organizer}</h3>
        </div>
    )
}

export default MarketTitle;