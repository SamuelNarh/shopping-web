import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import Cart from "../Components/Cart/Cart";
import { AuthContextProvider } from "../store/auth-context";

const User = () => {
  return (
    <AuthContextProvider>
      <Navigation></Navigation>
      <Cart />
    </AuthContextProvider>
  );
};

export default User;
