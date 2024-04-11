import React from "react";
import "./Product.css";

const ProductItem = (props) => {
  return (
    // <div className="card">
    //   <div className="card-img">
    //     <img
    //       className="img"
    //       src={`http://127.0.0.1:8000/${props.item.image_url}`}
    //       alt={`product-img`}
    //     />
    //   </div>
    //   <div className="card-title">{props.item.title}</div>
    //   <div className="card-subtitle">{props.item.description}</div>
    //   <hr className="card-divider" />
    //   <div className="card-footer">
    //     <div className="card-price">
    //       <span>$</span> 123.45
    //     </div>
    //     <button className="card-btn">
    //       <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    //         <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
    //         <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
    //         <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
    //         <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </div>
    <div class="card">
      <div class="image_container">
        <img src={`http://127.0.0.1:8000/${props.item.image_url}`} alt="product-img" />
      </div>
      <div class="title">
        <span>New brand name</span>
      </div>
      <div class="action">
        <div class="price">
          <span>$299</span>
        </div>
        <button class="cart-button">
          <svg
            class="cart-icon"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
