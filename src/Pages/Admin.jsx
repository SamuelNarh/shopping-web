import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import ProductInput from "../Components/Form/ProductInput";
import Footer from "../Components/Footer/Footer";
import { AuthContextProvider } from "../store/auth-context";

const Admin = () => {
  return (
    <AuthContextProvider>
      <Navigation />
      <ProductInput />
      <Footer />
    </AuthContextProvider>
  );
};

export default Admin;
