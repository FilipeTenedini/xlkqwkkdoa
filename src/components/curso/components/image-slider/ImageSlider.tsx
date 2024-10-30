"use client";

const images = [
  "/images/results/eight.jpeg",
  "/images/results/eleven.jpeg",
  "/images/results/five.jpeg",
  "/images/results/four.jpeg",
  "/images/results/nine.jpeg",
  "/images/results/one.jpeg",
  "/images/results/seven.jpeg",
  "/images/results/six.jpeg",
  "/images/results/ten.jpeg",
  "/images/results/three.jpeg",
  "/images/results/twelve.jpeg",
  "/images/results/two.jpeg",
];

const ImageSlider: React.FC = () => {
  return (
    <>
      <h1 className="font-bold mb-3 text-center w-full px-4 text-2xl md:text-4xl md:mb-5 text-black mt-4">
        Mais de 500 sorrisos transformados
      </h1>
      <div className="h-[250px] text-black flex items-center overflow-hidden whitespace-nowrap mb-4">
        <div className="flex animate-marquee h-full">
          {images.map((src, idx) => (
            <div key={idx} className="flex items-center mx-2">
              <img
                src={src}
                alt={`image-${idx}`}
                className="h-full max-w-[230px] rounded-xl object-cover" // Aumentando a largura máxima e garantindo bordas arredondadas
              />
            </div>
          ))}
          {images.map((src, idx) => (
            <div key={idx} className="flex items-center mx-2">
              <img
                src={src}
                alt={`image-${idx}`}
                className="h-full max-w-[230px] rounded-xl object-cover" // Aumentando a largura máxima e garantindo bordas arredondadas
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
