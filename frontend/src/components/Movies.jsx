import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  return (
    <Link to={`MovieDetail/${movie._id}`} key={movie._id}>
      <div className="w-full mt-2">
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
  );
};

export default Movies;
