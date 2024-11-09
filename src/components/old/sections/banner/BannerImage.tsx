import Image from "next/image";

const BannerImage: React.FC = () => {
  return (
    <div className="relative w-full 2xl:w-[55%] h-full">
      <div className="relative w-full h-full">
        <Image
          src={"/images/launch-ban.jpg"}
          width={855}
          height={500}
          className="h-full w-full object-cover"
          alt="Clinic Dr Banner Image"
        />
        <div className="absolute bottom-10 left-6 right-6">
          <div className="absolute left-[30%] translate-x-[-50%] -bottom-7 sm:bottom-1 md:bottom-5 lg:bottom-13 xl:bottom-4">
            <h2 className="text-md text-xl sm:text-2xl lg:text-4xl text-white font-bold font-cinzel p-4">
              12/12 às 20:00
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
