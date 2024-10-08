"use client";

import { useState, useCallback } from "react";
import Message from "./message/Message";

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <>
      <div className="relative w-full max-w-full h-[200px] md:h-[300px] lg:h-[700px] border-y-black border-y-2">
        <video
          controls
          playsInline
          autoPlay={false}
          muted={false}
          poster={"/images/launch-ban.jpg"}
          className={`w-full h-full ${
            isPlaying ? "object-contain" : "object-cover"
          }`}
          onPlay={handlePlay}
        >
          <source src={"/videos/four.mp4"} type={"video/mp4"} />
          Your browser does not support the video tag.
        </video>
      </div>
      <Message />
    </>
  );
};

export default VideoPlayer;
