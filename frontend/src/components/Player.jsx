import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
  const player = useRef(null);
  
  const config = {
    file: {
      attributes: {
        controlsList: 'nodownload', // Disable download button
      },
    },
  };

  return (
    <div className='flex items-center mt-[-64px] justify-center h-screen'>
      <div className='player-wrapper'>
        <ReactPlayer
          ref={player}
          width='100%'
          height='500px'
          url={`http://localhost:5173/public/trailers/trailer.mp4`}
          controls={true}
          playing={true}
          config={config}
        />
      </div>
    </div>
  );
};

export default Player;
