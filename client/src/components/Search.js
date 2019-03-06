import React from "react";
import "../components/Search.css";
function Search() {

    return (
        <div className="col-md-4">
            <div className="form searchDiv">
                <div className="form-group">
                    <label>FIND A MARKET CLOSE TO YOU</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>

                <button type="submit" className="btn btn-danger addressSearchBtn">Search</button>
            </div >
        </div>
    )
}

export default Search;