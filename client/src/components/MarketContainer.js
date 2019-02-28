import React from "react";
import "./MarketContainer.css";

function MarketContainer(props) {



    return (
        <div>
            <div className="row">
                <div className="col-md-12 titleDiv" key={props.id}>
                    <h1 className="market-name">{props.marketName}</h1>
                </div>
            </div>
            <div className="row marketInfo">
                <div className="col-md-6">
                    <h3 className="organizer">{props.organizer}</h3>
                    <hr />
                    
                        <h5 className="font-weight-lighter">{props.address}</h5>
                        <h5 className="font-weight-lighter">{props.city + ", " + props.state + " " + props.zip}</h5>
                    
                    <p>{props.about}</p>
                </div>
                <div className="col-md-6 image">
                    <img src={props.img} alt="garden" />
                </div>
            </div>
        </div>




    )
}

export default MarketContainer;

