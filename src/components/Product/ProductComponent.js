/* eslint-disable react/react-in-jsx-scope */
import { useRecoilValue, useRecoilState } from "recoil";
import { productListState } from "./productState";
import React from "react";
import { cartState, addToCart } from "./cartState";

const ProductComponent = () => {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);

  const handleClick = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };

  return (
    <div>
      <h2>Product List</h2>
      {productList.map((product) => (
        <li key={product.id}>
          {product.title} - {product.price}
          <button
            style={{ marginLeft: "1rem" }}
            onClick={() => handleClick(product)}
          >
            Add to cart
          </button>
        </li>
      ))}
    </div>
  );
};

export default ProductComponent;
