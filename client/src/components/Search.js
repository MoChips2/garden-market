import React from "react";
import "../components/Search.css";
import { withRouter } from "react-router-dom";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        address: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Search address :" + this.state.address);
        if (this.state.address !== null) {
            API.geocodeAddress(this.state.address).then(res => {
                console.log(res.data.results[0].geometry.location);
                this.props.history.push(
                    '/searchresult',{address:res.data.results[0]}
                                      )
            });
        }
    }
    render() {
        return (
            <div className="col-md-12 mx-auto searchDiv">
                <label className="searchMessage">FIND A MARKET NEAR YOU</label>
                <form className="input-group">
                    <input type="text" className="form-control" name="address" placeholder="Roseville MN" value={this.state.address} onChange={this.handleInputChange} />
                    <div className="input-group-btn">
                        <button type="submit" className="btn addressSearchBtn" onClick={this.handleFormSubmit}>
                        SEARCH</button>
                    </div>
                </form>
            </div >
        )
    }
}

export default withRouter(Search);