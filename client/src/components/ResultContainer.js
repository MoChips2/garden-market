import React from "react";
import "./ResultContainer.css";

function ResultContainer(props) {

    return(
        
    <div className="card" key={props.id}>
        <div className="card-body">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="resultName">{props.marketName}</h1>
                    <h3 className="card-subtitle mb-2 text-muted">Organizer: {props.organizer}</h3>
                    <hr />
                    <div className="row">
                        <ul>
                            <li>{props.address}</li>
                            <li>{props.city}</li>
                            <li>{props.state}</li>
                            <li>{props.zip}</li>
                        </ul>
                        <p>{props.about}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ResultContainer;

