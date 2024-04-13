import React from "react";
import NavLinks from "../Components/NavLinks";
import Search from "../Components/Search";
import Logo from "../Components/Logo";

const Navigation = () => {
  return (
    <div className="flex flex-wrap justify-around bg-violet-50 drop-shadow-lg  ">
      <Logo />
      <Search />
      <div>
        <NavLinks />
      </div>
    </div>
  );
};

export default Navigation;
