import React from "react";
import Search from "../components/Search";
import "./Home.css";
import Carousel from "../components/Carousel";
import About from "../components/About";

function Home() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mainTitleDiv">
                <br />
                    <Carousel />
                </div>
            </div>
            <div className="row">
                <About />
                <Search />
            </div>
        </div>



    )
}

export default Home;