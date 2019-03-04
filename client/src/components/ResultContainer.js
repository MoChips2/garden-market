import React from "react";
import { Link } from "react-router-dom";
import "./ResultContainer.css";

function ResultContainer(props) {

    return(
        
    <div className="card" key={props.id}>
        <div className="card-body">
            <div className="row">
                <div className="col-md-9">
                    <Link to={"/markets/" + props.id}><h1 className="resultName">{props.marketName}</h1></Link>
                    <Link to={"/mymarket/" + props.id}><h3 className="myMarket">Edit: {props.marketName}</h3></Link>
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

