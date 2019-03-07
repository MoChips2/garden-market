import React from "react";
import Search from "../components/Search";
import "./Home.css";
import Carousel from "../components/Carousel";
import About from "../components/About";

function Home() {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 mainTitleDiv">
                    <Carousel />
                </div>
            </div>
            <br />
            <div className="row">
                <About />
                <Search />
            </div>
            <br />
            <br />
        </div>




    )
}

export default Home;