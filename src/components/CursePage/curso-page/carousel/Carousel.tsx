"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  // "/images/slider/one.JPG",
  "/images/slider/two.JPG",
  "/images/slider/three.JPG",
  "/images/slider/four.JPG",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Muda de slide a cada 3 segundos

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image
              alt={`Slide ${index + 1}`}
              src={src}
              layout="fill"
              objectFit="cover"
              quality={100} // Define a qualidade da imagem
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
