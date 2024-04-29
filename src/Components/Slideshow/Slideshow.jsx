import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slideshow.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import sportscar1 from "../images/sportscar1.jpg";
import sportscar2 from "../images/sportscar2.jpg";
import Laptop1 from "../images/Laptop1.jpg";
import clothes1 from "../images/clothes1.jpg";
import Laptop2 from "../images/Laptop2.jpg";
import Laptop3 from "../images/Laptop3.jpg";


const Slideshow = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slideshow;
