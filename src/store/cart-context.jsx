import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  count: 0,
  price: 0,
  total: 0,
  countHandler: () => {},
  decreaseCountHaandler: () => {},
  priceHandler: () => {},
});

export const CartContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem("count");
    const price = localStorage.getItem("price");
    setPrice(Number(price));
    setCount(Number(count));
  }, []);

  const priceHandler = (event) => {
    setPrice(price + event);
    localStorage.setItem("price", price);
    console.log("straight from event:", event);
    console.log("price:", price);
    return price;
  };
  const countHandler = () => {
    localStorage.setItem("count", count + 1);
    setCount(count + 1);
  };

  const decreaseCountHaandler = () => {
    localStorage.setItem("count", count - 1);
    setCount(count - 1);
  };

  const TotalHandler = () => {
    setTotal(price * count);
  };
  return (
    <CartContext.Provider
      value={{
        count: count,
        price: price,
        countHandler: countHandler,
        priceHandler: priceHandler,
        decreaseCountHaandler: decreaseCountHaandler,
        total: total,
        TotalHandler: TotalHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
