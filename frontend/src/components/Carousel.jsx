import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchBanners } from "../redux/slices/banner";
import api from "../config/Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// ... (previous imports)

const Carousel = () => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.banner.data);
  const loading = useSelector((state) => state.banner.isLoading);

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  console.log(banner);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const renderSlider = () => {
    if (banner && banner.length > 0) {
      // Get the current date
      const currentDate = new Date();

      // Filter banners based on startDate and endDate
      const filteredBanners = banner.filter((image) => {
        const startDate = new Date(image.startDate);
        const endDate = new Date(image.endDate);

        // Check if the current date is between startDate and endDate
        return startDate <= currentDate && currentDate <= endDate;
      });

      if (filteredBanners.length > 0) {
        return (
          <div className="slick_container">
            <Slider {...settings}>
              {filteredBanners.map((image, index) => (
                <Link to={image.link} key={index}>
                  <div>
                    <img
                      src={`${api.defaults.baseURL}/${image.image}`}
                      className="w-full h-[500px]"
                      alt={`Slide ${index}`}
                    />
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        );
      } 
    } else {
      return null;
    }
  };

  return renderSlider();
};

export default Carousel;
