import React, { useEffect } from "react";
import { Carousel, Loading, Movies } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slices/movie";
import Slider from "react-slick";
import carouselSettings from "../utils/carouselSettings";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.data);
  const loading = useSelector((state) => state.movie.isLoading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Carousel />
          <div className="px-[40px]">
            {/* for trending movies */}
            <div className="flex justify-between mt-4 mb-4 ">
              <div className="text-[17px] md:text-[19px] lg:text-[21px]">
                Trending
              </div>
              <button className="text-[14px] md:text-[16px] px-[40px] lg:text-[19px]  hover:text-indigo-500">
                View More
              </button>
            </div>
            <Slider {...carouselSettings}>
              {movies &&
                movies
                  .slice(0, 10)
                  .map((movie) => <Movies key={movie._id} movie={movie} />)}
            </Slider>

            {/* for comedy movies */}
            <div className="flex justify-between mt-4 mb-4 ">
              <div className="text-[17px] md:text-[19px] lg:text-[21px]">
                Comedy
              </div>
              <button className="text-[14px] md:text-[16px] px-[40px] lg:text-[19px]  hover:text-indigo-500">
                View More
              </button>
            </div>
            <Slider {...carouselSettings}>
              {movies &&
                movies
                  .slice(0, 10)
                  .map((movie) => <Movies key={movie._id} movie={movie} />)}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
