import React, { useState } from "react";
import { useEffect } from "react";

const CartContext = React.createContext({
  count: 0,
  price: 0,
  countHandler: () => {},
  priceHandler: (event) => {},
});

export const CartContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [price, setprice] = useState(0);

  useEffect(()=>{
    const count = localStorage.getItem("count");
    setCount(count)
  },[])

  const priceHandler = (event) => setprice();
  const countHandler = () =>{
    localStorage.setItem("count",count +1)
     setCount(count + 1)};
  return (
    <CartContext.Provider
      value={{
        count: count,
        price: price,
        countHandler: countHandler,
        priceHandler: priceHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
