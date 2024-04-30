import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Product.css";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const fetchMoreData=()=>{
    
  }

  return (
    <>
      <InfiniteScroll dataLength={Items.length} next={fetchMoreData} >
        <div className=" box flex justify-center gap-3 pt-12 flex-wrap">
          {Items.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Product;
