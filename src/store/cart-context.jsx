import React, { useState } from "react";
import { useEffect } from "react";

const CartContext = React.createContext({
  count: 0,
  price: 0,
  // quatityHandler:()=>{},
  countHandler: () => {},
  priceHandler: () => {},
});

export const CartContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [price, setprice] = useState(0);

  useEffect(()=>{
    const count = localStorage.getItem("count");
    setCount(count)
  },[])

  // const quatityHandler=(event)=>{
  // }

  const priceHandler = (event) => setprice();
  const countHandler = () =>{
    localStorage.setItem("count",count +1)
     setCount(count + 1)};
  return (
    <CartContext.Provider
      value={{
        count: count,
        price: price,
        // quatityHandler:quatityHandler,
        countHandler: countHandler,
        priceHandler: priceHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
