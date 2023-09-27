import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "../dummy/movies";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/slices/movie";
import { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";

const Movies = ({ name}) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

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
        <div className="flex justify-between my-4 ">
          <div className="text-[17px] md:text-[19px] lg:text-[21px]">
            {name}
          </div>
          <button className="text-[14px] md:text-[16px] px-[40px] lg:text-[19px]  hover:text-indigo-500">
            View More
          </button>
        </div>
        {state.movie.data && (
          <Slider {...settings}>
            {state.movie.isLoading ? (
             Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="w-full px-4">
                <Skeleton animation="wave" height={350} />
                <Skeleton animation="wave" height={10} width="80%" />
              </div>
            ))) : (
              // Render movie content when data is loaded
              state.movie.data.slice(0,20).map((movie, index) => (
                <Link to={`MovieDetail/${movie._id}`} key={index}>
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
              ))
            )}
          </Slider>
        )}
      </div>
    );
  
};

export default Movies;
