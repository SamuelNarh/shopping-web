import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [isAddingToCart, setIsAddingToCart] = useState([]);
  // Fetch data from server when the component is mounted
  useEffect(() => {
    fetch("http://127.0.0.1:8000/cart/user/1")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        console.log(data);
        setIsAddingToCart(data);
      });
  },[]);

  return (
    <>
      <div className="master-container flex justify-center pt-6">
        <label className="title">Your cart</label>
        {isAddingToCart.map((item) => (
          <CartItem key={item.cartlist.id} item={item.cartlist} />
        ))}
        <div className="card checkout">
          <label className="title">Checkout</label>
          <div className="details">
            <span>Your cart subtotal:</span>
            <span>47.99$</span>
            <span>Discount through applied coupons:</span>
            <span>3.99$</span>
            <span>Shipping fees:</span>
            <span>4.99$</span>
          </div>
          <div className="checkout--footer">
            <label className="price">
              <sup>$</sup>57.99
            </label>
            <button className="checkout-btn">Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
