import React from "react";

function Address(props) {
    return (
        <div className="addressDiv">
            <h2 className="address">{props.address}</h2>
            <h2 className="address">{props.city}, {props.state}  &nbsp;{props.zip}</h2>
        </div>

    )
}

export default Address;