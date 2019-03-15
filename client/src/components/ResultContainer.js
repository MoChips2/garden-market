import React from "react";
import { Link } from "react-router-dom";
import "../components/auth/Login.css";

function ResultContainer(props) {

    return (

        <div key={props.id}>
            <Link className="resultName" to={"/markets/" + props.id}><h1 className="resultName">{props.marketName}</h1></Link>
            <h2 className="resultAddress">{props.address}</h2>
            <h2 className="resultAddress">{props.city}, {props.state} &nbsp;{props.zip}</h2>
        </div>

    )
}

export default ResultContainer;

