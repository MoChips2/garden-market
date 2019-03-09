import React, { Component } from "react";
import API from "../utils/API";
import MarketContainer from "../components/MarketContainer";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

// import ProductList from "../components/ProductList";
import JoinMessage from "../components/JoinMessage";

class Market extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    state = {
        markets: {}
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

            .catch(err => console.log(err));
    };

    render() {
        const { user } = this.props.auth;
        
       console.log(this.state.products);
      
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
                            products={this.state.markets.products}
                            startMonth={this.state.markets.startMonth}
                            endMonth={this.state.markets.endMonth}
                            days={this.state.markets.days}
                            startTime={this.state.markets.startTime}
                            endTime={this.state.markets.endTime}
                        />
                        <JoinMessage 
                        marketName={this.state.markets.marketName}
                        organizer={this.state.markets.organizer}
                        />
                    </div>
        )
    }
}

// export default Market;
Market.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Market);
