import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./Cart.css";

const Cart = () => {
  const [count, setCount] = useState(1);
  const increaseCountHandler = () => {
    setCount(count + 1);
  };

  const decreaseCountHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }

  };
  return (
    <>
      <div className="master-container flex justify-center pt-6">
        <div className="card cart">
          <label className="title">Your cart</label>
          <div className="products">
            <div className="product">
              <img src="/images/shoes1.jpg" alt="" />
              <div>
                <span>Cheese Burger</span>
                <p>Extra Spicy</p>
                <p>No mayo</p>
              </div>
              <div className="quantity">
                <Button onClick={decreaseCountHandler}>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      stroke="#47484b"
                      d="M20 12L4 12"
                    ></path>
                  </svg>
                </Button>
                <label>{count}</label>
                <Button onClick={increaseCountHandler}>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      stroke="#47484b"
                      d="M12 4V20M20 12H4"
                    ></path>
                  </svg>
                </Button>
              </div>
              <label className="price small">$23.99</label>
            </div>
          </div>
        </div>

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
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
