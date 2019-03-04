import React, { Component } from "react";
import API from "../utils/API";
import MarketContainer from "../components/MarketContainer";
// import ProductList from "../components/ProductList";

class Market extends Component {

    state = {
        markets: {}
        // marketName: "",
        // name: "",
        // address: "",
        // city: "",
        // state: "",
        // zip: "",
        // about: "",
        // img: "",
        // products: [],
        // startMonth: "",
        // endMonth: "",
        // days: [],
        // startTime: "",
        // endTime: ""
    };

    componentDidMount() {
        this.loadOneMarket();
    }

    loadOneMarket = () => {
        API.getOneMarket(this.props.match.params.id)

            .then(res =>
                this.setState({
                    markets: res.data,
                    products: res.data.products
                    // marketName: "",
                    // name: "",
                    // address: "",
                    // city: "",
                    // state: "",
                    // zip: "",
                    // about: "",
                    // img: "",
                    // products: [],
                    // startMonth: "",
                    // endMonth: "",
                    // days: [],
                    // startTime: "",
                    // endTime: ""
                }))
                // console.log(this.state.markets)
               
    }
    

    render() {
        
        // let output = this.state.markets.products.map(e => e.split(' '));

       console.log(this.state.products)

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
                            products={this.state.markets.products}
                            startMonth={this.state.markets.startMonth}
                            endMonth={this.state.markets.endMonth}
                            days={this.state.markets.days}
                            startTime={this.state.markets.startTime}
                            endTime={this.state.markets.endTime}
                        >
                       
                                <ul>
                                    <li>
                                        {this.state.products}
                                    </li>

                                </ul>
                           
                            </MarketContainer>
                    </div>
                    <h1>Here's the products!</h1>

                    {/* {output} */}
                </div>
            </div>

        )
    }
    
}

export default Market;
