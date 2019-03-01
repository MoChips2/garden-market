import React from "react";
import "./MarketContainer.css";

function MarketContainer(props) {



    return (
        <div>
            <div className="row">
                <div className="col-md-12 titleDiv" key={props.id}>
                    <h1 className="market-name">{props.marketName}</h1>
                    <h3 className="organizer">organized by {props.organizer}</h3>

                </div>
            </div>
            <div className="row marketInfo">
                <div className="col-md-6">
                    <h6 className="font-weight-lighter addressHead">Market Address:</h6>
                    <h5 className="font-weight-lighter address">{props.address + ", " + props.city + ", " + props.state + " " + props.zip}</h5>

                    <p className="about">{props.about}</p>
                    <div className="form">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Write a public review (but be cool):</label>
                                <textarea className="form-control" name="about" rows="3"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </div>
                <div className="col-md-6 image">
                    <img src={props.img} alt="garden" />
                    <div>
                        <button type="button" class="btn btn-primary">Join</button>
                        <button type="button" class="btn btn-primary">Donate</button>

                    </div>
                </div>
            </div>
        </div>




    )
}

export default MarketContainer;

