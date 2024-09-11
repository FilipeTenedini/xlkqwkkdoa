"use client";
import { useEffect, useRef, useState } from "react";
import { GrCaretNext } from "react-icons/gr";

const videos = [
  {
    src: "/videos/one.mp4",
    poster: "",
    type: "video/mp4"
  },
  {
    src: "/videos/two.mp4",
    poster: "",
    type: "video/mp4"
  },
  {
    src: "/videos/four.mp4",
    poster: "",
    type: "video/mp4"
  },
];

export default function VideoSlider() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const handlePrev = () => {
    setCurrentVideo((prev) => {
      const newIndex = prev === 0 ? videos.length - 1 : prev - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentVideo((prev) => {
      const newIndex = prev === videos.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
  };

  const handleVideoChange = () => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  useEffect(() => {
    handleVideoChange();
  }, [currentVideo]);

  return (
    <div className="relative w-full max-w-[568px] h-96 mx-auto">
      <div className="relative overflow-hidden h-full pb-[56.25%]"> {/* Proporção 16:9 */}
        <div className="absolute inset-0 h-full">
          <video
            ref={videoRef}
            key={videos[currentVideo].src}
            controls
            playsInline
            autoPlay
            poster={videos[currentVideo].poster}
            className="w-full h-full object-fit"
            onEnded={handleNext}
          >
            <source src={videos[currentVideo].src} type={videos[currentVideo].type} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full bg-opacity-50 text-white p-2 z-10"
      >
        <GrCaretNext className="rotate-180"/>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full bg-opacity-50 text-white p-2 z-10"
      >
        <GrCaretNext />
      </button>
    </div>
  );
}
