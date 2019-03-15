import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";
import Market from "./pages/Market";
import MyMarket from "./pages/MyMarket";
import NewMarket from "./pages/NewMarket";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import mHome from "./components/Map/mHome";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Join from "./pages/Join";
import PrivateRoute from "./components/private-route/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/map" component={mHome} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/searchresult" component={SearchResult} />
              <Route exact path="/mymarket/:id" component={MyMarket} />
              <Route exact path="/newmarket" component={NewMarket} />
              {/* <Route exact path="/joinmarket/:id" component={Join} /> */}
              {/* The following line won't exist in final version. Just for testing purposes using a generic market. */}
              <Route exact path="/market" component={Market} />
              {/* The following line will take user to a specific market by id */}
              <Route exact path="/markets/:id" component={Market} />
              <Route exact path="/register" component={Register} />

              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;