import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./NavList.css";
import AuthContext from "../../../store/auth-context";
import CartContext from "../../../store/cart-context";
import { Search } from "./Search";
import { Dropdown } from "../../Dropdown/Dropdown";

const NavLinks = () => {
  const ctx = useContext(AuthContext);
  const cart = useContext(CartContext);
  const [dropdown, setDropdown] = useState(false);

  const DropdownHandler = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };
  const DropdownClose = () => {
    setDropdown(false);
  };
  return (
    <>
      <div className="nav-links ">
        <ul className="ul">
          {!ctx.token_type ? (
            <>
              <Search />
              <Link to="/accounts/login">
                <div className="flex items-center justify-center ">
                  <svg
                    className="w-10 h-9 svg"
                    stroke="currentColor"
                    strokeWidth="1.0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Search />
              <Link to="/user">
                <div className="flex items-center justify-center ">
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-9 svg"
                  >
                    <path
                      d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      opacity="0.5"
                      d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                    />
                    <path
                      opacity="0.5"
                      d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <sup>{cart.count}</sup>
                </div>
              </Link>
              <div
                className="flex items-center justify-center select"
                onClick={DropdownHandler}
              >
                <svg
                  className="w-10 h-9"
                  stroke="currentColor"
                  strokeWidth="1.0"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <label className="username select">{ctx.username}</label>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </>
          )}
        </ul>
      </div>
      <div>
        {dropdown && (
          <Dropdown onLogout={ctx.onLogout} closedropDown={DropdownClose} />
        )}
      </div>
    </>
  );
};

export default NavLinks;
