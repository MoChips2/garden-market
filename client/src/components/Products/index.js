import React from "react";
import "./style.css";

function Products(props) {

    return (

        <div className="card market-card">
            <div className="card-header market-card-header">
                <h5 className="productHeader">WHAT WE HAVE TO OFFER</h5>
            </div>
            <div className="card-body market-card-body">
                <h5 className="products">{props.products}</h5>
            </div>
        </div>
    )
}

export default Products;