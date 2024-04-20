import React from "react";
import "./slideshow.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import sportscar1 from "../images/sportscar1.jpg";
import sportscar2 from "../images/sportscar2.jpg";
import Laptop1 from "../images/Laptop1.jpg";
import clothes1 from "../images/clothes1.jpg";
import Laptop2 from "../images/Laptop2.jpg";
import Laptop3 from "../images/Laptop3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slideshow = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={sportscar1} />
    <div data-src={sportscar2} />
    <div data-src={Laptop1} />
    <div data-src={clothes1} />
    <div data-src={Laptop2} />
    <div data-src={Laptop3} />
  </AutoplaySlider>
);

export default Slideshow;
