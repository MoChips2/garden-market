import React from "react";
import "./style.css";

function Times(props) {
    return (
        <div className="card market-card">
            <div className="card-header market-card-header">
                <h5 className="timesHeader">HOURS OF OPERATION</h5>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item schedule">{props.startMonth} - {props.endMonth}</li>
                <li className="list-group-item schedule">{props.days}</li>
                <li className="list-group-item schedule">{props.startTime} - {props.endTime}</li>
            </ul>

        </div>


    )
}

export default Times;