import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";
import Market from "./pages/Market";
import MyMarket from "./pages/MyMarket";
import NewMarket from "./pages/NewMarket";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import mHome from "./components/Map/mHome"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container.fluid">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={mHome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/searchresult" component={SearchResult} />
            <Route exact path="/mymarket/:id" component={MyMarket} />
            <Route exact path="/newmarket" component={NewMarket} />
            {/* The following line won't exist in final version. Just for testing purposes using a generic market. */}
            <Route exact path="/market" component={Market} />
            {/* The following line will take user to a specific market by id */}
            <Route exact path="/markets/:id" component={Market} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
