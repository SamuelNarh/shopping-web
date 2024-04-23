import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import Cart from "../Components/Cart/Cart";
import { AuthContextProvider } from "../store/auth-context";
import { CartContextProvider } from "../store/cart-context";

const User = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Navigation></Navigation>
        <Cart />
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default User;
