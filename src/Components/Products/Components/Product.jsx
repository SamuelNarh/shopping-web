import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import './Product.css'


const Product = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/product/all")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className=" box flex justify-center gap-3 pt-12 flex-wrap">
        {Items.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Product;
