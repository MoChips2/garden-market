import React, { Component } from "react";
import API from "../utils/API";
import ResultContainer from "../components/ResultContainer";

class SearchResult extends Component {
    state = {
        markets: [],
        marketName: "",
        organizer: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        about: "",
        roles: []
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
                    organizer: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    about: "",
                    roles: []
                }))
                .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <h1>Search Results</h1>
                    {this.state.markets.map(market => (
                        <div className="row" key={market._id}>
                            <div className="col-md-12 mx-auto">
                                <ResultContainer
                                    marketName={market.marketName}
                                    organizer={market.organizer}
                                    address={market.address}
                                    city={market.city}
                                    state={market.state}
                                    zip={market.zip}
                                    about={market.about}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div >

        )
    }
}

export default SearchResult;