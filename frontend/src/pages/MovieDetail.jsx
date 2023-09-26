import { Hidden } from '@mui/material';
import React from 'react';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

const MovieDetail = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center relative mt-[-64px]">
      <img
        src="/images/endgame_banner.png"
        alt="Avengers Endgame"
        className="w-full h-screen blur-sm"
      />

      <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80" />

      <div className="absolute inset-0 flex flex-col lg:flex-row lg:justify-center lg:items-center text-white">
        <img src="/images/endgame.jpg" className="w-[300px]" />
        <div className="max-w-screen-md p-8">
          <h1 className="text-5xl font-bold mb-4">Avengers: Endgame</h1>

          <div className="text-lg mb-4">
            <p className="flex items-center">
              <AiOutlinePlus className="mr-2 text-xl" />
              Year of Release: 2019
            </p>
            <p className="flex items-center">
              <AiOutlineCheck className="mr-2 text-xl" />
              Ratings: ★★★★☆
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins. With the help of remaining allies, the Avengers assemble
            once more in order to reverse Thanos' actions and restore balance to the universe.
          </p>

          <div className="text-lg mb-4">
            <p>Cast: Robert Downey Jr., Chris Evans, Scarlett Johansson, ...</p>
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
  );
};

export default MovieDetail;
