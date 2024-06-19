import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import Cart from "../Components/Cart/Cart";
import { AuthContextProvider } from "../store/auth-context";
import { CartContextProvider } from "../store/cart-context";
import { AlertProvider } from "../store/alert-context";

const User = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <AlertProvider>
          <Navigation></Navigation>
          <Cart />
        </AlertProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default User;
