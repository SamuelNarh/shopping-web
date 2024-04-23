import React from "react";
import "./Logo.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <img id="logo" src={logo} alt="logo" />
  </Link>
); ;
export default Logo;
