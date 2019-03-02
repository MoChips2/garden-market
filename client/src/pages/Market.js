import React, { Component } from "react";
import API from "../utils/API";
import MarketContainer from "../components/MarketContainer";

class Market extends Component {

    state = {
        markets: {}
    };
    componentDidMount() {
        this.loadOneMarket();
    }

    loadOneMarket = () => {
        console.log("eta aayo")
        API.getOneMarket(this.props.match.params.id)
            .then(res =>
                this.setState({
                    markets: res.data
                }))
    }

    // componentDidMount() {
    //     this.loadMarkets();
    // };

    // loadMarkets = () => {
    //     API.getMarkets()
    //         .then(res =>
    //             this.setState({
    //                 markets: res.data,
    //                 marketName: "",
    //                 organizer: "",
    //                 address: "",
    //                 city: "",
    //                 state: "",
    //                 zip: "",
    //                 about: "",
    //                 img: "",
    //                 roles: []
    //             }))
    //             .catch(err => console.log(err));
    // };

    render() {

        return (
            <div className="container-fluid">
                    <div className="row" >
                        <div className="col-md-12 mx-auto">
                    
                          <p>  
                              {this.state.markets.marketName}
                              </p>
                              
                        </div>
                    </div>

            </div>

        )
    }
}

export default Market;