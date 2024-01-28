import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import movie, { fetchMovie } from "../redux/slices/movie";
import api from "../config/Api";

const Player = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movie.data);
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);
  const player = useRef(null);
  const config = {
    file: {
      attributes: {
        controlsList: "nodownload", // Disable download button
      },
    },
  };

  return (
    <div className="flex items-center mt-[-64px] justify-center h-screen">
      <div className="player-wrapper">
        <ReactPlayer
          ref={player}
          width="100%"
          height="500px"
          url={`${api.defaults.baseURL}/${movieData.trailer}`}
          controls={true}
          playing={true}
          config={config}
        />
      </div>
    </div>
  );
};

export default Player;
