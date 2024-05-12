import React from "react";
import "./Deals.css";
import { Link } from "react-router-dom";

export const Deals = () => {
  return (
    <ul className=" deals flex gap-20">
      <Link to="/">
        <li className="deals-li"> Daily Deals</li>
      </Link>
      <li className="deals-li">Free Gifts</li>
      <li className="deals-li">Products</li>
      <li className="deals-li">Support</li>
    </ul>
  );
};
