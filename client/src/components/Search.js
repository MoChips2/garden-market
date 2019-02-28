import React from "react";

function Search() {

    return (
        <div className="form">
            <div className="form-group">
                <label>Enter your address to find a market close to you.</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>

            <button type="submit" className="btn btn-primary">Search</button>
        </div >
    )
}

export default Search;