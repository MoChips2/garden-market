import React from "react";
import "../pages/Home.css";
import Search from "../components/Search";
import "./Carousel.css";

function Carousel() {
    return (

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-pause="false">
            <div className="titleContent col-md-8">
                <h1 className="green">Green</h1>
                <h1 className="street">STREET</h1>
                <h5 className="tagline">A FRONT YARD MARKET REVOLUTION</h5>
                <Search />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/vegetables-752153_1920.jpg" className="d-flex align-items-center justify-content-center min-vh-100 carouselImg" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="images/grapes-690230_1920.jpg" className="d-flex align-items-center justify-content-center min-vh-100 carouselImg" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="images/plant-690051_1920.jpg" className="d-flex align-items-center justify-content-center min-vh-100 carouselImg" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}

export default Carousel;




