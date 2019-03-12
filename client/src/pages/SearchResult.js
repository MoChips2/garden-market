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
        zip: 0,
        lat: 0,
        lng: 0,
        isLoaded: false
    };

    componentDidMount() {
        this.loadMarkets();
        // this.getCoordinates();
    };


    // to center map, homepage search should center the map


    loadMarkets = () => {
        API.getMarkets()
            .then(res => {
                    console.log(res.data)
                    this.setState({
                        markets: res.data,
                        marketName: res.data[1].marketName,
                        address: res.data[1].address,
                        city: res.data[1].city,
                        state: res.data[1].state,
                        zip: res.data[1].zip,
                        isLoaded: true
                    })
                    let promiseArray = []
                    this.state.markets.forEach((market) => {
                        let address = `${market.address} ${market.city}, ${market.state} ${market.zip}`
                        promiseArray.push(API.geocodeAddress(address))
                    })
                    return Promise.all(promiseArray)
            })
            .then(res => {
                console.log("---geocode results---")
                console.log(res);
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

    // converts address into coordinates -Simone
    // getCoordinates = () => {
    //     API.geocodeAddress(this.address)
    //         .then(res => {
    //             console.log("---geocode results---")
    //             console.log(res.data);
    //             let coords = res.data.results[0].geometry.location;
    //             let lat = coords.lat;
    //             let lng = coords.lng
    //             console.log(lat, lng);
    //             this.setState({
    //                 lat: lat,
    //                 lng: lng
    //             })
    //         })
    //         .catch(err => console.log(err))
    // };

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