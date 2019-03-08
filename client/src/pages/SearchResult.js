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
        zip: ""
    };

    componentDidMount() {
        this.loadMarkets();
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
                        <MapContainer/>
                    </div>
                </div>
            </div >
        )
    }
}

export default SearchResult;