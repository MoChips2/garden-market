import React, { Component } from "react";
import API from "../utils/API";
import ResultContainer from "../components/ResultContainer";
import MapContainer from "../components/Map";

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
        API.geocodeAddress()
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
                <br />
                <br />
                <h1 className="searchHeader">SEARCH RESULTS</h1>
                <hr />
                <div className="row">
                    <div className="col-md-6">

                        <div className="container">
                            <div className="col-md-12">
                                {this.state.markets.map(market => (
                                    <div className="row" key={market._id}>
                                        <ResultContainer
                                            id={market._id}
                                            marketName={market.marketName}
                                            address={market.address}
                                            city={market.city}
                                            state={market.state}
                                            zip={market.zip}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-md-6 mapDiv">
                        <MapContainer
                            lat={this.state.lat}
                            lng={this.state.lng}
                        />
                    </div>
                </div>
            </div >
        )
    }
}

export default SearchResult;