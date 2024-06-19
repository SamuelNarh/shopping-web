import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

export const CartTotal = () => {
  const cart = useContext(CartContext);

  return (
    <div className="card cart">
      <div className="price small flex ">
        <label>Total: </label>
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 7.36981C16.7435 5.91657 14.9052 5 12.8571 5C9.07005 5 6 8.13401 6 12C6 15.866 9.07005 19 12.8571 19C14.9052 19 16.7435 18.0834 18 16.6302M13 21V3"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {cart.total}
      </div>
    </div>
  );
};
