import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/slices/movie";

const Demo = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  if (state.movie.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <button onClick={(e) => dispatch(fetchMovie())}>Fetch Movie</button>
      {state.movie.data && state.movie.data.length > 0 ? (
        <ul>
          {state.movie.data.map((e) => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Demo;
