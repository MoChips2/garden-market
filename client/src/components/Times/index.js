import React from "react";
import "./style.css";

function Times(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="timesHeader">HOURS OF OPERATION</h5>
            </div>
            <div className="card-body">
                <h2 className="schedule">{props.startMonth} - {props.endMonth}</h2>
                <h2 className="schedule">{props.days}</h2>
                <h2 className="schedule">{props.startTime} - {props.endTime}</h2>
            </div>
        </div>


    )
}

export default Times;