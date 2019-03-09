import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
// import Search from "../components/Search";

class Navbar extends Component {
onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");

}

 render() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Green Street</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className={window.location.pathname === "/" ? "active" : ""}>
                        <Link className="nav-link" to="/">Home </Link>

                    </li> */}
                    {/* <li className={window.location.pathname === "/login" ? "active" : ""}>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className={window.location.pathname === "/register" ? "active" : ""}>
                        <Link className="nav-link" to="/register">Register</Link>
                    </li> */}
                    <li className={window.location.pathname === "/newmarket" ? "active" : ""}>
                        <Link className="nav-link" to="/newmarket">NewMarket</Link>
                    </li>
                    <li className={window.location.pathname === "/searchresult" ? "active" : ""}>
                        <Link className="nav-link" to="/searchresult">Search Result</Link>
                    </li>
                    <li className={window.location.pathname === "/mymarket" ? "active" : ""}>
                        <Link className="nav-link" to="/mymarket/">My Market</Link>
                    </li>
                    {/* <li className={window.location.pathname === "/searchresult" ? "active" : ""}>
                        <Link className="nav-link" to="/searchresult"></Link>
                    </li> */}
                </ul>
                <ul className="navbar-nav">
                   
                    <li className={window.location.pathname === "/login" ? "active" : ""}>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className={window.location.pathname === "/register" ? "active" : ""}>
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className={window.location.pathname === "/" ? "active" : ""}>
                        <Link className="nav-link" to="/" onClick={this.onLogoutClick}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
}


Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar);


// export default Navbar;
