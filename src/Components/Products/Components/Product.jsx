import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Product.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../../Loader/Loader";
import Button from "../../../UI/Button/Button";

const Product = () => {
  const [Items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [seemore, setSeeMore] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/product/all")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        if (data.length <= 15) {
          setItems(data);
        } else {
          // This is to handle the case when there are more than 10 products in the database.
          setItems(data.slice(0, 4));
          setSeeMore(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {
    if (Items.length > 15 && Items.length <= 30) {
      fetch("http://127.0.0.1:8000/product/all")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          // setTimeout(() => {
          //   setItems(Items.concat(data.slice(8, 20)));
          // }, 800);
        })
        .catch((err) => console.log(err));
    } else {
      setHasMore(false);
    }
  };

  const seemoreHandler = () => {
    console.log("clicked");
  };

  return (
    <>
      <div id="Scrolldiv" style={{ height: 400, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={Items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<p>Everything is Finish Adogo</p>}
          scrollableTarget={"Scrolldiv"}
        >
          <div className=" box flex justify-center gap-3 pt-12 flex-wrap">
            {Items.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
      {seemore && <Button onClick={seemoreHandler}>See more</Button>}
    </>
  );
};

export default Product;
