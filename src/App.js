import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import SignInPage from "./Pages/SignInPage";
import SignupPage from "./Pages/SignupPage";
import User from "./Pages/User";

import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/signin/user" element={<User />}></Route>
        {/* default redirect to home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
