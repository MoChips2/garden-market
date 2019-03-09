import React from "react";
import "./style.css";

function Times(props) {
    return (
        <div className="timesDiv">
            <h2 className="months">{props.startMonth}-{props.endMonth}</h2>
            <h2 className="days">{props.days}</h2>
            <h2 className="className">{props.startTime}-{props.endTime}</h2>
        </div>
    )
}

export default Times;