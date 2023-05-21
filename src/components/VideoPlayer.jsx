import React from "react";
import { useRef } from 'react';
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
const VIDEO_PATH = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

function VideoPlayer() {
    console.log("Hello World");
    const playerRef = useRef(null);
    return (
        <div className="container">
            <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
    )
};

export default VideoPlayer;