import React, { Component } from "react";
import API from "../utils/API";
import MarketContainer from "../components/MarketContainer";

class Market extends Component {

    state = {
        markets: [],
        marketName: "",
        organizer: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        about: "",
        img: "",
        roles: []
    };

    componentDidMount() {
        this.loadOneMarket();
    }

    loadOneMarket = () => {
        API.getOneMarket(this.props.match.params.id)
            .then(res =>
                this.setState({
                    markets: res.data,
                    marketName: "",
                    name: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    about: "",
                    img: "",
                    roles: []
                }))
    }

    // componentDidMount() {
    //     this.loadMarkets();
    // };

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
                    img: "",
                    roles: []
                }))
                .catch(err => console.log(err));
    };

    render() {

        return (
            <div className="container-fluid">
                {this.state.markets.map(market => (
                    <div className="row" key={market._id}>
                        <div className="col-md-12 mx-auto">
                            <MarketContainer
                                marketName={market.marketName}
                                organizer={market.organizer}
                                address={market.address}
                                city={market.city}
                                state={market.state}
                                zip={market.zip}
                                about={market.about}
                                img={market.img}
                            />
                        </div>
                    </div>
                ))}

            </div>

        )
    }
}

export default Market;