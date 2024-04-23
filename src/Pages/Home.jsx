import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import Product from "../Components/Products/Components/Product";
import Footer from "../Components/Footer/Footer";
import { AuthContextProvider } from "../store/auth-context";
import { CartContextProvider } from "../store/cart-context";
import Slideshow from "../Components/Slideshow/Slideshow";

const Home = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Navigation />
        <Slideshow />
        <Product />
        <Footer />
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default Home;
