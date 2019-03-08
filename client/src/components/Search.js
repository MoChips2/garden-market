import React from "react";
import "../components/Search.css";
function Search() {

    return (
        <div className="col-md-6 mx-auto searchDiv float-right">
            {/* <form> */}
            {/* <div className="form-row">
                    <div className="col-md-12">
                        <label className="searchMessage">FIND A MARKET NEAR YOU</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Address" required />
                        <div className="btnDiv">
                            <button class="btn btn-danger addressSearchBtn mx-auto" type="submit">SEARCH</button>
                        </div>
                    </div>
                </div> */}

            <label className="searchMessage">FIND A MARKET NEAR YOU:</label>

            <div class="input-group">

                <input type="text" class="form-control" placeholder="Address" />
                <span class="input-group-btn">
                    <button class="btn btn-danger addressSearchBtn" type="button">SEARCH</button>
                </span>
            </div>


            {/* </form > */}
        </div >
    )
}

export default Search;