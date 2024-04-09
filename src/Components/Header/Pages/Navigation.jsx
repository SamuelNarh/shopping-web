import React from "react";
import "./Navigation.css";
import NavLinks from "../Components/NavLinks";
import Search from "../Components/Search";
import Logo from "../Components/Logo";

const Navigation = () => {
  return (
    <>
      <div className="Navigation">
        <div className="main">
          <Logo />
          <Search />
          <NavLinks />
        </div>
      </div>
    </>
  );
};

export default Navigation;
