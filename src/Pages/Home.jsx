import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import Product from "../Components/Products/Components/Product";
import Footer from "../Components/Footer/Footer";
import { AuthContextProvider } from "../store/auth-context";
import Slideshow from "../Components/Slideshow/Slideshow";

const Home = () => {
  return (
    <AuthContextProvider>
      <Navigation />
      <Slideshow />
      <Product />
      <Footer />
    </AuthContextProvider>
  );
};

export default Home;
