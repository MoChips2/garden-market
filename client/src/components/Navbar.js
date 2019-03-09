import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Search from "../components/Search";


function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-default bg-default">

            <Link className="navbar-brand" to="/">Green Street</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className={window.location.pathname === "/" ? "active" : ""}>
                        <Link className="nav-link" to="/">Home </Link>

                    </li> */}
                    <li className={window.location.pathname === "/login" ? "active" : ""}>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className={window.location.pathname === "/register" ? "active" : ""}>
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className={window.location.pathname === "/newmarket" ? "active" : ""}>
                        <Link className="nav-link" to="/newmarket">NewMarket</Link>
                    </li>
                    <li className={window.location.pathname === "/searchresult" ? "active" : ""}>
                        <Link className="nav-link" to="/searchresult">Search Result</Link>
                    </li>
                    <li className={window.location.pathname === "/mymarket" ? "active" : ""}>
                        <Link className="nav-link" to="/mymarket/5c7c2bdf6489ba0000387807">My Market</Link>
                    </li>
                    {/* <li className={window.location.pathname === "/searchresult" ? "active" : ""}>
                        <Link className="nav-link" to="/searchresult"></Link>
                    </li> */}
                </ul>
                <ul class="nav navbar-nav navbar-right">
                        <li className={window.location.pathname === "/" ? "active" : ""}>
                            <Link className="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
            </div>
        </nav>

    )
}

export default Navbar;
