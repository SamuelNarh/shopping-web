import React, { useContext, useState } from "react";
import Button from "../../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const CartItem = (props) => {
  const ctx = useContext(AuthContext);
  const [quantity, setQuantity] = useState(props.qty);
  const [price, setPrice] = useState(props.item.price);

  const increaseCountHandler = () => {
    setQuantity(quantity + 1);
    setPrice(quantity * price);
    const IncreaseQty = JSON.stringify({
      No_items_in_cart: props.qty + 1,
      product_id: props.item.id,
      user_id: Number(ctx.user_id),
    });

    const requestOptions = {
      method: "PUT",
      headers: new Headers({
        Authorization: ctx.token_type + " " + ctx.accesstoken,
        "Content-Type": "application/json",
      }),
      body: IncreaseQty,
    };
    fetch(`http://127.0.0.1:8000/cart/update/${props.cartid}`, requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const decreaseCountHandler = () => {};

  const removeFromCartHandler = () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: ctx.token_type + " " + ctx.accesstoken,
      },
    };
    fetch(`http://127.0.0.1:8000/cart/${props.cartid}`, requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div className="card cart">
      <div className="products">
        <div className="product">
          <img src={"http://127.0.0.1:8000/" + props.item.image_url} alt="" />
          <div>
            <span>{props.item.title}</span>
            <p>{props.item.description}</p>
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
            <label>{quantity}</label>
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
          <label className="price small flex ">
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 7.36981C16.7435 5.91657 14.9052 5 12.8571 5C9.07005 5 6 8.13401 6 12C6 15.866 9.07005 19 12.8571 19C14.9052 19 16.7435 18.0834 18 16.6302M13 21V3"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {price}
          </label>
        </div>
      </div>
      <div className="flex justify-end">
        <span>
          <svg
            width="8000px"
            height="8000px"
            viewBox="0 0 28 28"
            fill="none"
            stroke="#ff1a1a"
            className="remove"
            onClick={removeFromCartHandler}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 12L17 12"
                stroke="#ff0000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
