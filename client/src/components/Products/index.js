import React from "react";
import "./style.css";

function Products(props) {

    return (
        <div className="productsDiv">
            <h2 className="products">{props.products}</h2>
        </div>
    )
}

export default Products;