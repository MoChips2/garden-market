import React from "react";
import "../components/Search.css";
function Search() {

    return (
        <div className="col-md-12 mx-auto searchDiv">
            <label className="searchMessage">FIND A MARKET NEAR YOU</label>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Address" />
                <span className="input-group-btn">
                    <button className="btn btn-danger addressSearchBtn" type="button">SEARCH</button>
                </span>
            </div>
        </div >
    )
}

export default Search;