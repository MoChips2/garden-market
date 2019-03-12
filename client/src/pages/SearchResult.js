import React, { Component } from "react";
import API from "../utils/API";
import ResultContainer from "../components/ResultContainer";
import MapContainer from "../components/Map";
import "../components/auth/Login.css";
import "../components/ResultContainer.css";

class SearchResult extends Component {
    state = {
        markets: [],
        marketName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        lat: 0,
        lng: 0,
    };

    componentDidMount() {
        this.loadMarkets();
        this.getCoordinates();
    };


    loadMarkets = () => {
        API.getMarkets()
            .then(res =>
                this.setState({
                    markets: res.data,
                    marketName: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: ""
                }))
            .catch(err => console.log(err));
    };

    // converts address into coordinates -Simone

    getCoordinates = () => {
        API.geocodeAddress("1420 Eckles Ave, St Paul, MN 55108")
            .then(res => {
                console.log(res.data);
                let coords = res.data.results[0].geometry.location;
                let lat = coords.lat;
                let lng = coords.lng
                console.log(lat, lng);
                this.setState({
                    lat: lat,
                    lng: lng
                })
            })
            .catch(err => console.log(err));
    };

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
                                        <ul class="list-group list-group-flush">
                                            {this.state.markets.map(market => (
                                                <li class="list-group-item" key={market._id}>
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
                                            lat={this.state.lat}
                                            lng={this.state.lng}
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