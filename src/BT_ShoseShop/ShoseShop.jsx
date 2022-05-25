import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";

export default class ShoseShop extends Component {
  render() {
    return (
      <div className="container">
        <h1>Shoes Shop</h1>
        <ProductList products={data} />
        <div>
          <button
            style={{
              position: "fixed",
              width: "50px",
              display: "block",
              bottom: "20px",
              right: "20px",
              borderRadius: "50%",
              height: "45px",
              color: "red",
              border: "1px solid",
            }}
          >
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
