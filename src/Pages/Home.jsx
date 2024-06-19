import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import Product from "../Components/Products/Components/Product";
import Footer from "../Components/Footer/Footer";
import Slideshow from "../Components/Slideshow/Slideshow";
import { AuthContextProvider } from "../store/auth-context";
import { CartContextProvider } from "../store/cart-context";
import { AlertProvider } from "../store/alert-context";

const Home = () => {
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <AlertProvider>
            <Navigation />
            <Slideshow />
            <Product />
            <Footer />
          </AlertProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default Home;
