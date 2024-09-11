import Image from "next/image";

const BannerImage: React.FC = () => {
  return (
    <div className="w-full xl:w-[55%] relative h-full">
      <div className="w-full h-full relative">
        <Image
          src={"/images/launch-ban.jpg"}
          width={855}
          height={500}
          className="h-full w-full object-cover"
          alt="Clinic Dr Banner Image"
        />
        <div className="absolute bottom-3 left-6 p-4">
          <h2 className="text-xl text-white md:text-4xl xl:text-3xl font-bold font-cinzel">
            03/10 às 20:00
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
