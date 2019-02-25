import React, { Component } from "react";
// import API from "../utils/API";
import MarketContainer from "../components/MarketContainer";

class Market extends Component {

    state = {
        markets: [],
        marketName: "",
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        about: "",
        roles: []
    };
    // componentDidMount() {
    //     this.loadOneMarket();
    // }

    // loadOneMarket = () => {
    //     API.getOneMarket()
    //         .then(res =>
    //             this.setState({
    //                 markets: res.data,
    //                 marketName: "",
    //                 name: "",
    //                 address: "",
    //                 city: "",
    //                 state: "",
    //                 zip: "",
    //                 about: "",
    //                 roles: []
    //             }))
    // }
    render() {

        return (
            <div>
                <h1>Market </h1>
                <p>This will contain an existing market page found by searching by address/zip code.</p>
                <br />
                {this.state.markets.map(market => (
                    <div className="row" key={market._id}>
                        <div className="col-md-12 mx-auto">
                            <MarketContainer
                                marketName={market.marketName}
                                name={market.name}
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

        )
    }
}

export default Market;