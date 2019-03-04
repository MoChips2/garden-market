import React, { Component } from "react";

class Product extends Component {

    render() {
        return (
            <li>
                {this.props.product}
            </li>
        )
    }
}

export default Product;