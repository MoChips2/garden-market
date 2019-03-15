import React from "react";
import "./style.css";

function Address(props) {
    return (

        <div className="card market-card">
            <div className="card-header market-card-header">
                <h5 className="timesHeader">MARKET ADDRESS</h5>
            </div>
            <div className="card-body market-card-body">
            <h2 className="address">{props.address}</h2>
            <h2 className="address">{props.city}, {props.state}  &nbsp;{props.zip}</h2>
            </div>
        </div>

        
    )
}

export default Address;