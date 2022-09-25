import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const json = data ? JSON.parse(data) : [];
  if (json.length) {
    return {
      totalPrice: calcTotalPrice(json),
      items: data ? json : [],
    };
  }
  return {
    totalPrice: 0,
    items: [],
  };
};
