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
            <br />
            <br />
            <div className="row marketInfo">
                <div className="col-md-5">
                    <h2 className="aboutHeader">ABOUT THE MARKET</h2>
                    
                                <h6 className="font-weight-lighter address"><span className="addressHead">ADDRESS: </span>{props.address + props.city + "," + props.state + " " + props.zip}</h6>
                           
                                <h6 className="font-weight-lighter hours"><span className="hoursHead">HOURS: </span>April 2019 - Aug 2019: SAT & SUN 7am - 1pm</h6>
                           
                    <h4 className="products">{props.roles}</h4>
                    <p className="about">{props.about}</p>
                    <div className="mx-auto">
                        <button type="button" class="btn btn-dark joinBtn">Join</button>
                        <button type="button" class="btn btn-dark donateBtn">Donate</button>
                    </div>
                    <br />
                    <div className="form">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Write on the chalkboard (but be cool):</label>
                                <textarea className="form-control" name="about" rows="3"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </div>
                <div className="col-md-7">
                
                    <div className="image">
                        <img src={props.img} alt="garden" />
                    </div>
                    <br />
                    <div className="chalkboard">
                        <p className="messages">My family and I had a great time at your market. We'll see you next week! -George</p>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default MarketContainer;

