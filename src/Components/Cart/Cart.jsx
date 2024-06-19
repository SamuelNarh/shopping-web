import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { CartTotal } from "./CartTotal";
import { Loader } from "../Loader/Loader";

const Cart = () => {
  const [isAddingToCart, setIsAddingToCart] = useState([]);
  const [Load, setLoad] = useState(false);

  // // Fetch data from server when the component is mounted
  useEffect(() => {
    setLoad(true);
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
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const cartupdate = (event) => {
    setIsAddingToCart(event);
  };

  return (
    <>
      <div className="master-container flex justify-center pt-6">
        <div>
          <label className="title">Your cart</label>
          {Load && <Loader />}
          {isAddingToCart.map((item) => (
            <CartItem
              key={item.cartlist.id}
              item={item.cartlist}
              cartid={item.id}
              qty={item.No_items_in_cart}
              cartupdate={cartupdate}
            />
          ))}
        </div>
        {isAddingToCart && <CartTotal></CartTotal>}
      </div>
    </>
  );
};

export default Cart;
