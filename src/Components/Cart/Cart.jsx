import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [isAddingToCart, setIsAddingToCart] = useState([]);

  // // Fetch data from server when the component is mounted
  useEffect(() => {
    const user_id = Number(localStorage.getItem("user-id"));
    const token_type = localStorage.getItem("token-type");
    const auth_token = localStorage.getItem("auth-token");
  
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: token_type + " " + auth_token,
      },
    };

    fetch(`http://127.0.0.1:8000/cart/user/${user_id}`, requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setIsAddingToCart(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Handle pay fnx
  const payHandler = () => {};

  return (
    <>
      <div className="master-container flex justify-center pt-6">
        <label className="title">Your cart</label>
        {isAddingToCart.map((item) => (
          <CartItem
            key={item.cartlist.id}
            item={item.cartlist}
            cartid={item.id}
          />
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
            <button className="checkout-btn" onClick={payHandler}>
              Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
