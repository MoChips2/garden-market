import React from "react";
import { Link } from "react-router-dom";
import "./ResultContainer.css";

function ResultContainer(props) {

    return (

        <div className="card" key={props.id}>
            <div className="card-body">
                <Link to={"/markets/" + props.id}><h1 className="resultName">{props.marketName}</h1></Link>
                <hr />
                <h4>{props.address}</h4>
                <h4>{props.city}, {props.state} &nbsp;{props.zip}</h4>
                <Link to={"/mymarket/" + props.id}><h6 className="myMarket">edit market</h6></Link>
            </div>
        </div>

    )
}

export default ResultContainer;

