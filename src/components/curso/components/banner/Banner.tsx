import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-primary-t-1 relative w-full aspect-[16/9] sm:aspect-auto h-auto sm:h-[35vh] md:h-[58vh] lg:h-[75vh] xl:h-[80vh] md:max-h-screen flex items-center justify-center text-black">
        <Image
          src="/images/launch-ban.jpg"
          layout="fill"
          className="object-contain sm:object-cover"
          alt="Clinic Dr Banner Image"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
