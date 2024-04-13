import React, { useState } from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import Product from "../Components/Products/Components/Product";
import Footer from "../Components/Footer/Footer";
import CartContext from "../store/cart-context";

const Home = () => {
  const [count, setcount] = useState(0);
  const addtoCart = () => {
    setcount(count + 1);
  };
  return (
    <CartContext.Provider
      value={{
        count: count,
        addtoCart: addtoCart,
      }}
    >
      <Navigation />
      <Product />
      <Footer />
    </CartContext.Provider>
  );
};

export default Home;
