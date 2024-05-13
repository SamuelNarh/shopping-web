import React from "react";
import NavLinks from "../Components/NavLinks";

import Logo from "../Components/Logo";
import "./Navigation.css";
import { Toggler } from "../../Toggler/Toggler";
import { Deals } from "../Components/Deals";

const Navigation = () => {
  return (
    <div className="Navbar flex flex-wrap bg-violet-50 drop-shadow-lg ">
      <Logo />
      <Deals />
      <div className="flex gap-5">
        <NavLinks />
        <Toggler />
      </div>
    </div>
  );
};

export default Navigation;
