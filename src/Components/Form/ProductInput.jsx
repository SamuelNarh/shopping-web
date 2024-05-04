import React, { useState, useContext } from "react";
import Button from "../../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const ProductInput = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const ctx = useContext(AuthContext);

  const productsubmitHandler = (event) => {
    event.preventDefault();
    const imageBody = new FormData();
    imageBody.append("image", image);
    const requestOptions = {
      method: "POST",
      headers: new Headers({
        Authorization: ctx.token_type + " " + ctx.accesstoken,
      }),
      body: imageBody,
    };
    // send image and data to the backend for saving in database
    fetch("http://127.0.0.1:8000/product/images", requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        sendProduct(data.filename);
      })
      .catch((err) => console.log(err));

    const sendProduct = (filename) => {
      const Product = JSON.stringify({
        image_url: filename,
        title: title,
        description: description,
        price: price,
      });
      const requestOption = {
        method: "POST",
        headers: new Headers({
          Authorization: ctx.token_type + " " + ctx.accesstoken,
          "Content-Type": "application/json",
        }),
        body: Product,
      };
      fetch("http://127.0.0.1:8000/product", requestOption)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    };
  };
  const imageHandler = (event) => {
    // const file = event.target.files[0];
    setImage(event.target.files[0]);

    // setImage(URL.createObjectURL(file));
    // console.log(URL.createObjectURL(file));
    console.log(event.target.files[0].name);
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptHandler = (event) => {
    setDescription(event.target.value);
  };
  const PriceHandler = (event) => {
    setPrice(event.target.value);
  };
  return (
    <>
      <form className="form" onSubmit={productsubmitHandler}>
        <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Picture
        </label>
        <input
          className="flex w-full rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
          type="file"
          capture="environment"
          id="picture"
          onChange={imageHandler}
        />
        {image && <img src={image} alt="product-img" className="product-img" />}
        <div className="flex-column">
          <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Title
          </label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Enter Product Name"
            className="input"
            type="text"
            onChange={titleHandler}
          />
        </div>
        <div>
          <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Description
          </label>
        </div>
        <div>
          <textarea
            rows="5"
            placeholder="Description Here !!!"
            className="textarea"
            onChange={descriptHandler}
            type="text"
          />
        </div>
        <div className="flex-column">
          <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Price
          </label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Enter Price"
            className="input"
            type="number"
            onChange={PriceHandler}
          />
        </div>
        <Button className="button-submit" type="submit">
          Add Product
        </Button>
      </form>
    </>
  );
};

export default ProductInput;
