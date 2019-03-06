import React, { Component } from "react";
import API from "../utils/API";
import MarketContainer from "../components/MarketContainer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

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
        const { user } = this.props.auth;

        return (
            //Shilpa Temp changes
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
                {/* //Shilpa
                <div style={{ height: "75vh" }} className="container valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                <b>Hey there,</b> {user.name.split(" ")[0]}
                            </h4>
                        </div>
                    </div>
                </div> */}
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
