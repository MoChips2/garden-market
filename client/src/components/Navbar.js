import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/map">Garden App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={window.location.pathname === "/home" ? "active" : ""}>
                        <Link className="nav-link" to="/home">Home </Link>
                    </li>
                    <li className={window.location.pathname === "/newmarket" ? "active" : ""}>
                        <Link className="nav-link" to="/newmarket">NewMarket</Link>
                    </li>
                    <li className={window.location.pathname === "/login" ? "active" : ""}>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className={window.location.pathname === "/market" ? "active" : ""}>
                        <Link className="nav-link" to="/market">Market</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

export default Navbar;
