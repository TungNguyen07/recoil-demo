/* eslint-disable react/react-in-jsx-scope */
import { useRecoilValue } from "recoil";
import React from "react";
import { cartState, cartTotal } from "./cartState";

const CartComponent = () => {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div>
      <h2>Cart List</h2>
      {cart.map((product) => (
        <li key={product.id}>
          {product.title} - {product.quantity}
        </li>
      ))}
      <p>TOTAL: {total} VND</p>
    </div>
  );
};

export default CartComponent;
