"use client";

import { useEffect, useRef, useState } from "react";
import { GrCaretNext } from "react-icons/gr";

const videos = [
  {
    src: "/videos/one.mp4",
    poster: "",
    type: "video/mp4",
  },
  {
    src: "/videos/two.mp4",
    poster: "",
    type: "video/mp4",
  },
  {
    src: "/videos/four.mp4",
    poster: "",
    type: "video/mp4",
  },
];

export default function VideoSlider() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const handleVideoChange = () => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  useEffect(() => {
    handleVideoChange();
  }, [currentVideo]);

  return (
    <div className="relative w-full mx-auto md:max-w[90%] max-w-[75%] flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row lg:overflow-hidden justify-center items-center">
        {videos.map((video, index) => (
          <div
            key={video.src}
            className={`w-full items-center justify-center flex h-full lg:w-1/3 lg:h-auto mx-6 transition-transform duration-500 ease-in-out ${
              currentVideo === index ? "block" : "hidden lg:block"
            }`}
          >
            <div className="relative flex items-center justify-center">
              <video
                ref={videoRef}
                controls
                playsInline
                autoPlay={false}
                muted
                poster={video.poster}
                className="h-[60vh] max-h-[60vh] object-cover rounded-lg border-2 border-gray-300"
                onEnded={handleNext}
              >
                <source src={video.src} type={video.type} />
                Your browser does not support the video tag.
              </video>

              {/* Botões de navegação */}
              <button
                onClick={handlePrev}
                className="absolute lg:hidden left-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full bg-opacity-50 text-white p-2 z-10"
              >
                <GrCaretNext className="rotate-180" />
              </button>

              <button
                onClick={handleNext}
                className="absolute lg:hidden right-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full bg-opacity-50 text-white p-2 z-10"
              >
                <GrCaretNext />
              </button>

              {/* Bolinhas de navegação visíveis apenas em telas pequenas */}
              <div className="flex justify-center rounded-full space-x-2 mt-2 lg:hidden absolute bottom-[-9px] left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-white bg-opacity-30 p-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentVideo === index ? "bg-primary" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
