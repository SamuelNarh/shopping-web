import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import SignInPage from "./Pages/SignInPage";
import SignupPage from "./Pages/SignupPage";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import AboutUs from "./Pages/AboutsUs";
import Support from "./Pages/Support";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accounts/login" element={<SignInPage />}></Route>
        <Route path="/accounts/signup" element={<SignupPage />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/support" element={<Support />}></Route>
        {/* default redirect to home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
