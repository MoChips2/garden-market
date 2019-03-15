import React from "react";
import "../components/Search.css";
import { withRouter } from "react-router-dom";
import SearchResult from "../pages/SearchResult";

// function Search() {
class Search extends React.Component {
    state = {
        address: "",
        value: ""
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
        if(this.state.address != null){
            this.props.history.push("/searchresult");
            // window.open(
            //     "searchresult",
            //   )
        }
    }
    render() {
        return (
            <div className="col-md-12 mx-auto searchDiv">
                <label className="searchMessage">FIND A MARKET NEAR YOU</label>
                <div className="input-group">
                    <input type="text" className="form-control" name="address" placeholder="Roseville MN" value={this.state.address} onChange={this.handleInputChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-danger addressSearchBtn" type="button" onClick={this.handleFormSubmit}>
                        SEARCH</button>
                    </span>
                </div>
            </div >
        )
    }
}

export default withRouter(Search);