import React, {Component} from "react";
import ReactDOM from "react-dom";
import products from "./data/products";

class Products extends React.Component {
  render () {
    return (
        <div>
          <h2>Produkty</h2>
          <ul>

          </ul>
        </div>
    )
  }
}

class Cart extends React.component {
  render () {
    return (
        <div>
          <h2>Koszyk</h2>
          <ul></ul>
        </div>
    )
  }
}

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  render() {
    return (
        <Products />
        <Cart />
    )
  }
}


/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  Shop,
  Products,
  Cart
};