import React from "react";
import "../pages/Home.css";

function Carousel() {
    return (

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="titleContent">
                <h1 className="green">Green</h1>
                <h1 className="street">STREET</h1>
                <h5 className="tagline">A FRONT YARD MARKET REVOLUTION</h5>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">

                    <img src="images/kale-growing-in-garden.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="images/radishes.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="images/apples-on-farmers-market-picjumbo-com.jpg" className="d-block w-100" alt="..." />
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




