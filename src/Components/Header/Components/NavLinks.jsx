import React from "react";
import { Link } from "react-router-dom";
import "./NavList.css";

const NavLinks = () => {
  return (
    <div className="nav-links">
      <ul className="ul">
        <Link to="/">Home</Link>
        <li>About Us</li>
        <li>Contact Us</li>
        <Link to="/signin">
          <div className="flex items-center justify-center ">
            <svg
              className="w-10 h-9"
              stroke="currentColor"
              strokeWidth="1.0"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <label>Account</label>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default NavLinks;
