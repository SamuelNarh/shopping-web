import React from "react";
import Navigation from "../Components/Header/Pages/Navigation";
import SignIn from "../Components/Form/SignIn";
import { AuthContextProvider } from "../store/auth-context";
import Footer from '../Components/Footer/Footer'

const SignInPage = () => {
  return (
    <AuthContextProvider>
      <Navigation />
      <SignIn />
      <Footer/>
    </AuthContextProvider>
  );
};

export default SignInPage;
