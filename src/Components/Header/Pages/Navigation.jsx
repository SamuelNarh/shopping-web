import React from "react";
import NavLinks from "../Components/NavLinks";
import Logo from "../Components/Logo";
import './Navigation.css'


const Navigation = () => {
  return (
    <div className="Navbar flex flex-wrap bg-violet-50 drop-shadow-lg ">
      <Logo />
      <div>
        <NavLinks />
      </div>
    </div>
  );
};

export default Navigation;
