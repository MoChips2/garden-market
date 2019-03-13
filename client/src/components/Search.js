import React from "react";
import "../components/Search.css";
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
            // this.props.history.push("/searchresult");
        }
    }
    render() {
        return (
            <div className="col-md-12 mx-auto searchDiv">
                <label className="searchMessage">FIND A MARKET NEAR YOU</label>
                <div class="input-group">
                    <input type="text" class="form-control" name="address" placeholder="Roseville MN" value={this.state.address} onChange={this.handleInputChange} />
                    <span class="input-group-btn">
                        <button class="btn btn-danger addressSearchBtn" type="button" onClick={this.handleFormSubmit}>
                        SEARCH</button>
                    </span>
                </div>
            </div >
        )
    }
}

export default Search;