import React from "react";

const Button = (props) => (
  <button
    className={`button ${props.className}`}
    onClick={props.onClick}
    type={props.type}
  >
    {props.children}
  </button>
);

export default Button;
