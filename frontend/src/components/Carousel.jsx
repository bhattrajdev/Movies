import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from '../dummy/images'

const Carousel = () => {
  var settings = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slick_container">
    <Slider {...settings}>
      {images.map((images, index) => (
        <div key={index} >
          <img src={images.src} className="w-full h-full" />
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default Carousel
