import React from "react";
import Slider from "react-slick";
import MacBookPro from "../../assets/images/macbook-pro.png";
import "slick-carousel/slick/slick.css";
import "./LoginDetailSlider.scss";

var sliders = [
  {
    sliderImg: MacBookPro,
    sliderText: "Lorem ipsum dolor sit amet 1",
    sliderDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi id pellentesque at placerat egestas faucibus ",
  },
  {
    sliderImg: MacBookPro,
    sliderText: "Lorem ipsum dolor sit amet 2",
    sliderDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi id pellentesque at placerat egestas faucibus ",
  },
  {
    sliderImg: MacBookPro,
    sliderText: "Lorem ipsum dolor sit amet 3",
    sliderDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi id pellentesque at placerat egestas faucibus ",
  },
];

export default function LoginDetailSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {sliders.map((item) => (
          <div className="slider-item">
            <img src={item.sliderImg} alt="" />
            <h2>{item.sliderText}</h2>
            <p>{item.sliderDetail}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
