import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {

    render() {
        return (
            <ul>
                {this.props.products.map((product)=> {
                    return <Product product={product}/>
                })}
                
            </ul>
        )
    }
}

export default ProductList;