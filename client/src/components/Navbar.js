import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">Garden App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={window.location.pathname === "/" ? "active" : ""}>
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
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
                    <li className={window.location.pathname === "/market" ? "active" : ""}>
                        <Link className="nav-link" to="/market">Market</Link>
                    </li>
                    <li className={window.location.pathname === "/map" ? "active" : ""}>
                        <Link className="nav-link" to="/map">Map</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;
