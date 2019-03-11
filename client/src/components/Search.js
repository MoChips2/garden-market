import React from "react";
import "../components/Search.css";
function Search() {

    return (
        <div className="col-md-12 mx-auto searchDiv">
            <label className="searchMessage">FIND A MARKET NEAR YOU</label>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Address" />
                <span class="input-group-btn">
                    <button class="btn btn-danger addressSearchBtn" type="button">SEARCH</button>
                </span>
            </div>
        </div >
    )
}

export default Search;