import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { fetchMovie } from "../../redux/slices/movie";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading,Player } from "../../components";
import { BiSolidMoviePlay, BiSolidCameraMovie } from "react-icons/bi";
import api from "../../config/Api";

const MovieDetail = () => {
  const id = useParams().id;

  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movie.data);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  return (
    <>
      {movieData ? (
        <div className="bg-cover bg-no-repeat bg-center relative mt-[-64px]">
          <img
            src={`${api.defaults.baseURL}/${movieData.poster}`}
            alt={movieData.title}
            className="w-full h-screen object-cover blur-sm"
          />

          <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80" />

          <div className="absolute inset-0 flex flex-col lg:flex-row lg:justify-center lg:items-center text-white">
            <img
              src={`${api.defaults.baseURL}/${movieData.poster}`}
              className="w-[300px] h-[600px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]"
              alt={movieData.title}
            />
            <div className="max-w-screen-md p-4 lg:p-8 xl:p-12 2xl:p-16">
              <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 xl:mb-6 2xl:mb-8">
                {movieData.title}
              </h1>

              <div className="text-base lg:text-lg mb-2 lg:mb-4 xl:mb-6 2xl:mb-8">
                <p className="flex items-center">
                  <AiOutlinePlus className="mr-2 text-xl" />
                  {movieData.releaseDate}
                </p>
                <p className="flex items-center">
                  <AiOutlineCheck className="mr-2 text-xl" />
                  Ratings: ★★★★☆
                </p>
              </div>

              <p className="text-gray-300 text-sm lg:text-base mb-2 lg:mb-4 xl:mb-6 2xl:mb-8">
                {movieData.description}
              </p>

              <div className="text-base lg:text-lg mb-2 lg:mb-4 xl:mb-6 2xl:mb-8">
                <p>
                  <strong>Genre:</strong>{" "}
                  {Array.isArray(movieData.genres)
                    ? movieData.genres.join(", ")
                    : movieData.genres}
                </p>
              </div>

              <div className="text-base lg:text-lg mb-2 lg:mb-4 xl:mb-6 2xl:mb-8">
                <p>
                  <strong>Cast:</strong>{" "}
                  {Array.isArray(movieData.cast)
                    ? movieData.cast.join(", ")
                    : movieData.cast}
                </p>
              </div>

              <div className="text-base lg:text-lg mb-2 lg:mb-4 xl:mb-6 2xl:mb-8">
                <p>
                  <strong>Directors:</strong>{" "}
                  {Array.isArray(movieData.directors)
                    ? movieData.directors.join(", ")
                    : movieData.directors}
                </p>
              </div>

              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                <Link
                  to={`/player/${movieData._id}`}
                  className="bg-blue-500 text-white px-4 py-2 flex rounded-lg hover:bg-blue-600"
                >
                  <BiSolidMoviePlay className="text-2xl mr-2" /> Watch Trailer
                </Link>
                <Link
                  to={`/player/${movieData._id}`}
                  className="bg-red-500 text-white flex px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  <BiSolidCameraMovie className="text-2xl mr-2" /> Watch Movie
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MovieDetail;
