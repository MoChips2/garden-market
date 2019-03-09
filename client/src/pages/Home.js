import React from "react";
import Search from "../components/Search";
import "./Home.css";
import Carousel from "../components/Carousel";

function Home() {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 mainTitleDiv">
                    <Carousel />
                </div>
            </div>
            
        </div>



    )
}

export default Home;