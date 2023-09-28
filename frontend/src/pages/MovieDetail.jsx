import React, { useEffect } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { fetchMovie } from "../redux/slices/movie";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../components";

const MovieDetail = () => {
  const id = useParams().id;
  console.log(id)
  
    const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movie.data); // Access movie data from the Redux store
  console.log(movieData)

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch,id]);

  return (
    <>
      {movieData ? (
        <div className="bg-cover bg-no-repeat bg-center relative mt-[-64px]">
          <img
            src={movieData.poster}
            alt="Avengers Endgame"
            className="w-full h-screen blur-sm"
          />

          <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80" />

          <div className="absolute inset-0 flex flex-col lg:flex-row lg:justify-center lg:items-center text-white">
            <img src={movieData.poster} className="w-[300px]" />
            <div className="max-w-screen-md p-8">
              <h1 className="text-5xl font-bold mb-4">{movieData.title}</h1>

              <div className="text-lg mb-4">
                <p className="flex items-center">
                  <AiOutlinePlus className="mr-2 text-xl" />
                  {movieData.releaseDate}
                </p>
                <p className="flex items-center">
                  <AiOutlineCheck className="mr-2 text-xl" />
                  Ratings: ★★★★☆
                </p>
              </div>

              <p className="text-gray-300 mb-4">{movieData.description}</p>

              <div className="text-lg mb-4">
                {/* <p>Cast: {movieData.cast.join(', ')}</p>  */}
                // cause of the error
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Watch Trailer
                </a>
                <a
                  href="#"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Watch Movie
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading/>
      )}
    </>
  );
};

export default MovieDetail;
