import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Product.css";
import { Loader } from "../../Loader/Loader";
import Button from "../../../UI/Button/Button";

const Product = () => {
  const [Items, setItems] = useState([]);
  const [seemore, setSeeMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/product/all")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        const dataLength = data.length;
        setLoading(false);
        if (dataLength <= 10) {
          setItems(data);
        } else {
          // This is to handle the case when there are more than 10 products in the database.
          setItems(data.slice(0, 8));
          setSeeMore(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {
    console.log(Items.length);
    if (Items.length <= 8) {
      fetch("http://127.0.0.1:8000/product/all")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          setLoading(false);
          setItems(Items.concat(data.slice(8, 16)));
        })
        .catch((err) => console.log(err));
    } else if (Items.length <= 16) {
      fetch("http://127.0.0.1:8000/product/all")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          setLoading(false);
          setItems(Items.concat(data.slice(16, 25)));
        })
        .catch((err) => console.log(err));
    }
  };

  const seemoreHandler = () => {
    fetchMoreData();
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="flex justify-center gap-3 pt-12 flex-wrap">
        {Items.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      {seemore && (
        <div className="seemore flex justify-center">
          <Button onClick={seemoreHandler}>See more</Button>
        </div>
      )}
    </>
  );
};

export default Product;
