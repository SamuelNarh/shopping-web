import React from "react";
import "./Toggler.css";

export const Toggler = () => {
  return (
    <div className="toggler">
      <input id="checkbox" type="checkbox" />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </div>
  );
};
