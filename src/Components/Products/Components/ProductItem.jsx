import React, { useContext, useState } from "react";
import "./Product.css";
import AuthContext from "../../../store/auth-context";
import CartContext from "../../../store/cart-context";
import { Alert } from "../../Alert/Alert";
import AlertContext from "../../../store/alert-context";

const ProductItem = (props) => {
  const [added, setAdded] = useState("");
  const [qty, setQty] = useState(1);

  const cart = useContext(CartContext);
  const ctx = useContext(AuthContext);
  const alert_context = useContext(AlertContext);
  const addtoCartHandler = () => {
    const addtoCart = JSON.stringify({
      product_id: props.item.id,
      user_id: Number(ctx.user_id),
      No_items_in_cart: qty,
    });
    const requestOptions = {
      method: "POST",
      body: addtoCart,
      headers: new Headers({
        Authorization: ctx.token_type + " " + ctx.accesstoken,
        "Content-Type": "application/json",
      }),
    };
    fetch("http://127.0.0.1:8000/cart", requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setAdded("added");
        setQty("qty");
        cart.countHandler();
        cart.priceHandler(data.cartlist.price);
        alert_context.activitateAlertHandler();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cardx">
        <div className="card-img">
          <img
            src={`http://127.0.0.1:8000/${props.item.image_url}`}
            alt="product-img"
            className="image"
          />
        </div>
        <div className="card-info">
          <p className="text-title">{props.item.title}</p>
          <p className="text-body">{props.item.description}</p>
        </div>
        <div className="card-footer">
          <span className="amount flex">
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 7.36981C16.7435 5.91657 14.9052 5 12.8571 5C9.07005 5 6 8.13401 6 12C6 15.866 9.07005 19 12.8571 19C14.9052 19 16.7435 18.0834 18 16.6302M13 21V3"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {props.item.price}
          </span>
          <div className={`card-button ${added}`} onClick={addtoCartHandler}>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
              <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
              <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
            </svg>
          </div>
        </div>
      </div>
      {alert_context.alert && (
        <Alert
          message={`${props.item.title} added !!!`}
          close={alert_context.alertCloseHandler}
          alert={alert}
        />
      )}
    </>
  );
};

export default ProductItem;
