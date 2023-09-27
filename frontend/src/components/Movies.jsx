import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";


const Movies = ({ movie }) => {

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 
    return (
      
      <div className=" px-[40px]">
          <Slider {...settings}>

                <Link to={`MovieDetail/${movie._id}`} key={movie._id}>
                  <div className="w-full px-4">
                    <img
                      src={movie.poster}
                      className="w-[85%] h-[350px] z-10"
                      alt={movie.name}
                    />
                    <div className="text-center text-[15px] md:text-[18px] lg:text-[20px] py-2">
                      {movie.title}
                    </div>
                  </div>
                </Link>
          </Slider>
 
      </div>
    );
  
};

export default Movies;
