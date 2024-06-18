import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

export const CartTotal = (props) => {
  const cart = useContext(CartContext);
  return (
    <div className="card checkout">
      <label className="title">Checkout</label>
      <div className="details">
        <span>Your cart subtotal:</span>
        <span>{cart.price}</span>
        <span>Discount through applied coupons:</span>
        <span>3.99$</span>
        <span>Shipping fees:</span>
        <span>4.99$</span>
      </div>
      <div className="checkout--footer">
        <label className="price">
          <sup>$</sup>57.99
        </label>
        <button className="checkout-btn" onClick={props.payHandler}>
          Pay
        </button>
      </div>
    </div>
  );
};
