import React from "react";
import Button from "../../UI/Button/Button";

const ProductInput = () => {
  const productsubmitHandler = () => {};
  const imageHandler = () => {};
  const titleHandler = () => {};
  const descriptHandler = () => {};
  return (
    <>
      <form className="form" onSubmit={productsubmitHandler}>
        <div className="flex-column">
          <label>Image </label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Enter your Username"
            className="input"
            type="file"
            onChange={imageHandler}
          />
        </div>
        <div className="flex-column">
          <label> Product title </label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Enter your Email"
            className="input"
            type="text"
            onChange={titleHandler}
          />
        </div>
        <div className="flex-column">
          <label>Description </label>
        </div>
        <div className="inputForm">
          <textarea
            rows="4"
            placeholder="Enter your Phone Number"
            className="input"
            onChange={descriptHandler}
            type="text"
          />
        </div>
        <Button className="button-submit" onClick="submit">Add Product</Button>
      </form>
    </>
  );
};

export default ProductInput;
