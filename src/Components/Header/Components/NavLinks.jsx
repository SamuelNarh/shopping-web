import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavList.css";
import AuthContext from "../../../store/auth-context";
import Button from "../../../UI/Button/Button";
import CartContext from "../../../store/cart-context";

const NavLinks = () => {
  const ctx = useContext(AuthContext);
  const cart = useContext(CartContext);
  return (
    <div className="nav-links ">
      <ul className="ul">
        {!ctx.token_type ? (
          <>
            <Link to="/">
              <div className="flex items-center justify-center ">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-10 h-9"
                >
                  <path
                    d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 18H9"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <label style={{ cursor: "pointer" }}>Home</label>
              </div>
            </Link>
            <Link to="/aboutus">
              <div className="flex items-center justify-center ">
                <svg
                  fill="#fffff"
                  height="80px"
                  width="800px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 502.643 502.643"
                  className="w-10 h-9"
                >
                  <g>
                    <path
                      d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999
			c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"
                    />
                    <path
                      d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823
			c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"
                    />
                    <path
                      d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711
			c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"
                    />
                    <path
                      d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03
			c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"
                    />
                    <path
                      d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711
			S41.373,269.559,71.011,269.559L71.011,269.559z"
                    />
                    <path
                      d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03
			c0.065-1.014,0.475-1.898,0.475-2.826v-86.413C142.087,292.424,129.489,278.317,114.109,278.317z"
                    />
                  </g>
                </svg>
                <label style={{ cursor: "pointer" }}> About Us</label>
              </div>
            </Link>
            <Link to="/accounts/login">
              <div className="flex items-center justify-center ">
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
                <label style={{ cursor: "pointer" }}>Account</label>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/">
              <div className="flex items-center justify-center ">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-10 h-9"
                >
                  <path
                    d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 18H9"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <label style={{ cursor: "pointer" }}>Home</label>
              </div>
            </Link>
            <div className="flex items-center justify-center ">
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
              <label style={{ cursor: "pointer" }}>{ctx.username}</label>
            </div>
            <Link to="/user">
              <div className="flex items-center justify-center ">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-9"
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
                <label style={{ cursor: "pointer" }}>Cart</label>
                <sup>{cart.count}</sup>
              </div>
            </Link>
            <Button onClick={ctx.onLogout}>Logout</Button>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
