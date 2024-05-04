import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import SignIn from "../Components/Form/SignIn";
import { AuthContextProvider } from "../store/auth-context";

const SignInPage = () => {
  return (
    <AuthContextProvider>
      <Navigation />
      <SignIn />
    </AuthContextProvider>
  );
};

export default SignInPage;
