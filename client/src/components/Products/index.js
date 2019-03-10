import React from "react";
import "./style.css";

function Products(props) {

    return (

        <div className="card">
            <div className="card-header">
                <h5 className="productHeader">WHAT WE HAVE TO OFFER</h5>
            </div>
            <div className="card-body">
                <h5 className="products">{props.products}</h5>
            </div>
        </div>
    )
}

export default Products;