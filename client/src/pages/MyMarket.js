import React, { Component } from "react";
import API from "../utils/API";
import EditContainer from "../components/EditContainer";

// import ProductList from "../components/ProductList";

class MyMarket extends Component {

    state = {
        markets: {},
        joinMessages: []
        
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
                }))
    }

    // loadMessages = () => {
    //     API.getPublicMessages(this.props.match.params.id)
    //     .then(res =>
    //         this.setState({
    //             joinMessages: res.data
    //         }))
    // }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" key={this.state.markets._id}>
                    <div className="col-md-12 mx-auto">
                        <EditContainer
                            id={this.state.markets._id}
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
                            // joinMessages={this.state.markets.joinMessages}
                        />
                        {/* <JoinMessages 
                        
                        /> */}
                    </div>
                </div>
            </div>

        )
    }
    
}

export default MyMarket;
