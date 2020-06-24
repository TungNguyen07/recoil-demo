import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cart",
  default: [],
});

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  },
});

export const addToCart = (cart, product) => {
  const newCart = [...cart];
  const foundIndex = newCart.findIndex((x) => x.id === product.id);

  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    return newCart;
  }

  newCart.push({
    id: product.id,
    title: product.title,
    product,
    quantity: 1,
  });
  return newCart;
};
