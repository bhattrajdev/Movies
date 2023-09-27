import React, { useEffect } from 'react';
import { Carousel, Movies } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/slices/movie';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.data);
  const loading = useSelector((state) =>state.movie.isLoading)
 

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Carousel />
      {movies &&
        movies.map((movie) => (
          <Movies key={movie._id} movie={movie} loading={loading} /> // Provide a unique key
        ))}
    </>
  );
};

export default Home;
