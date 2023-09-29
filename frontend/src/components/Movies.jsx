import React from "react";
import { Link } from "react-router-dom";

const Movies = ({movie}) => {
  return (
    <div className="container">
    <Link to={`MovieDetail/${movie._id}`}>
      <div className="w-full mt-2">
         <img
       src={movie.poster}
       className="w-[85%] h-[350px] z-10 hover:scale-105 transition duration-300 cursor-pointer object-cover"
       alt={movie.name}
     />
      <div className=" text-[15px] md:text-[18px] lg:text-[20px] py-2">
        {movie.title}
       </div>
    </div>
  </Link>
  </div>
  );
};

export default Movies;
