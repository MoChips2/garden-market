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
                    <div className="row" key={this.state.markets._id}>
                        <div className="col-md-12 mx-auto">
                            <MarketContainer
                                marketName={this.state.markets.marketName}
                                organizer={this.state.markets.organizer}
                                address={this.state.markets.address}
                                city={this.state.markets.city}
                                state={this.state.markets.state}
                                zip={this.state.markets.zip}
                                about={this.state.markets.about}
                                img={this.state.markets.img}
                                roles={this.state.markets.roles}
                            />
                            
                        </div>
                    </div>
            </div>

        )
    }
}

export default Market;