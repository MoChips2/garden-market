import React, { Component } from "react";
import API from "../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

// import ProductList from "../components/ProductList";
import JoinBtn from "../components/JoinBtn";
import EditMarket from "../components/EditMarket";
import AboutMarket from "../components/AboutMarket";
import Times from "../components/Times/index";
import Products from "../components/Products";
import MarketTitle from "../components/MarketTitle";
import Address from "../components/Address/index";
import MessageBoard from "../components/MessageBoard";
import Image from "../components/Image";
import MembersList from "../components/MembersList";
import "../components/Market.css";

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

    isOwner =() =>{
        const { userName } = this.props.auth.user.name;
        const { email } = this.props.auth.user.email;
        console.log(email)
        return true;
    }


    render() {
     // const isOwners = isOwner("a")
        return (

            <div className="container-fluid">
                <div className="row titleRow" key={this.state.markets._id}>
                    <div className="col-md-12 mx-auto">
                        <MarketTitle
                            marketName={this.state.markets.marketName}
                            organizer={this.state.markets.organizer}
                        />
                    </div>
                </div>
                <div className="row marketRow">
                    <div className="col-md-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <Image
                                        img={this.state.markets.img}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <AboutMarket
                                        about={this.state.markets.about}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <JoinBtn />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12" >
                                    <EditMarket
                                    id ={this.state.markets._id}
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="container">
                            <div className="row productRow">
                                <div className="col-md-12">
                                    <Products
                                        products={this.state.markets.products}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Times
                                        startMonth={this.state.markets.startMonth}
                                        endMonth={this.state.markets.endMonth}
                                        days={this.state.markets.days}
                                        startTime={this.state.markets.startTime}
                                        endTime={this.state.markets.endTime}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Address
                                        address={this.state.markets.address}
                                        city={this.state.markets.city}
                                        state={this.state.markets.state}
                                        zip={this.state.markets.zip}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <MembersList 
                                    members={this.state.markets.members}
                                    organizer={this.state.markets.organizer}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <MessageBoard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
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
