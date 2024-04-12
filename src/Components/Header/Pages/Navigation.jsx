import React from "react";
import "./Navigation.css";
import NavLinks from "../Components/NavLinks";
import Search from "../Components/Search";
import Logo from "../Components/Logo";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Logo />
      <Search />
      <NavLinks />
    </div>
  );
};

export default Navigation;
