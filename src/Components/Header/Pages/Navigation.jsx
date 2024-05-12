import React from "react";

import Logo from "../Components/Logo";
import "./Navigation.css";
import { Toggler } from "../../Toggler/Toggler";
import { Deals } from "../Components/Deals";

const Navigation = () => {
  return (
    <div className="Navbar flex flex-wrap bg-violet-50 drop-shadow-lg ">
      <Logo />
      <Deals />
      <Toggler />
    </div>
  );
};

export default Navigation;
