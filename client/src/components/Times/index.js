import React from "react";
import "./style.css";

function Times(props) {
    return (
        <div class="card">
            <div class="card-header">
                <h5 className="timesHeader">HOURS OF OPERATION</h5>
            </div>
            <div class="card-body">
                <h2 className="schedule">{props.startMonth} - {props.endMonth}</h2>
                <h2 className="schedule">{props.days}</h2>
                <h2 className="schedule">{props.startTime} - {props.endTime}</h2>
            </div>
        </div>


    )
}

export default Times;