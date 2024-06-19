import React from "react";
import './button.css'

const Button = (props) => (
  <button
    className={`button ${props.className}`}
    onClick={props.onClick}
    type={props.type}
  >
    <span className="bttn"> {props.children}</span>
  </button>
);

export default Button;
