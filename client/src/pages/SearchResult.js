import React, { Component } from "react";
import API from "../utils/API";
import ResultContainer from "../components/ResultContainer";
import MapContainer from "../components/Map/index";
import "../components/auth/Login.css";
import "../components/ResultContainer.css";

class SearchResult extends Component {
    state = {
        markets: [],
        marketName: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        coords: {}
    };

    componentDidMount() {
        this.loadMarkets();
        this.getCenter();
    };

    loadMarkets = () => {
        API.getMarkets()
            .then(res => {
                console.log(res.data)
                this.setState({
                    markets: res.data,
                    marketName: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: ""
                })
            })
            .catch(err => console.log(err));
    };

    getCenter = () => {
        //Shilpa results redirected from Search.js
     //   console.log("Search Routes :" + this.props.location.state.address.place_id); //coords from User Search box)
        console.log("Search Routes :" + this.props.location.state.address.geometry.location.lat); //coords from User Search box)
        if (this.props.location.state.address != null) {
            let id = this.props.location.state.address.place_id;
            let searchedCoord = this.props.location.state.address.geometry.location;
            Object.assign(searchedCoord, { id: id });
            console.log(searchedCoord);
            this.setState({
                coords: searchedCoord
            })
        } else {
            this.setState({
                coords: {
                    lat: 44.977753,
                    lng: -93.2650108
                }
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card gardenCard resultCard">
                            <div className="card-header gardenCardHeader">
                                <h2 className="gardenHeader">SEARCH RESULTS</h2>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul className="list-group list-group-flush">
                                            {this.state.markets.map(market => (
                                                <li className="list-group-item" key={market._id}>
                                                    <ResultContainer
                                                        id={market._id}
                                                        marketName={market.marketName}
                                                        address={market.address}
                                                        city={market.city}
                                                        state={market.state}
                                                        zip={market.zip}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-md-8 mapDiv">
                                        <MapContainer
                                            lat={this.state.coords.lat}
                                            lng={this.state.coords.lng}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResult;