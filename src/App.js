import React from "react";
import "./App.css";
import ProductComponent from "./components/Product/ProductComponent";
import CartComponent from "./components/Product/CartComponent";

function App() {
  return (
    <div className="App">
      <ProductComponent />
      <CartComponent />
    </div>
  );
}

export default App;
