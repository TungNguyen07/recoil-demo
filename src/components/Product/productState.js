import { atom } from "recoil";

export const productListState = atom({
  key: "productList",
  default: [
    { id: 1, title: "T-shirt", price: 90000 },
    { id: 2, title: "Shirt", price: 135000 },
    { id: 3, title: "Coat", price: 165000 },
  ],
});
