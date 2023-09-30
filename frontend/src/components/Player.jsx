import React from 'react'
import "../App.css";
import ReactPlayer from "react-player";
import { Container } from "@mui/material";



const Player = () => {

    
  return (
    <div className="video_container">
    <div>
      <h2>React player</h2>
    </div>
    <Container maxWidth="md" justify="center">
      <div className="player__wrapper">
      <ReactPlayer
          className="player"
          url="https://bucket-viewer.s3.amazonaws.com/viewer1664370329252.mp4"
          width="100%"
          height="100%"
          playing={true}
          muted={true}
        />
      <Control />
    </div>
  </Container>
</div>  )
}

export default Player