import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slideshow.css";
import { Autoplay, Pagination } from "swiper/modules";
import sportscar1 from "../images/sportscar1.jpg";
import sportscar2 from "../images/sportscar2.jpg";
import Laptop1 from "../images/Laptop1.jpg";
import clothes1 from "../images/clothes1.jpg";
import Laptop2 from "../images/Laptop2.jpg";
import Laptop3 from "../images/Laptop3.jpg";

const Slideshow = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sportscar1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sportscar2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Laptop1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={clothes1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Laptop2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Laptop3} alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slideshow;
