import BannerForm from "./BannerForm";
import BannerImage from "./BannerImage";
import BannerText from "./BannerText";

const Banner: React.FC = () => {
  return (
    <>
    <div className="bg-primary-t-6 w-full h-full flex flex-row items-center justify-center text-white">
      <BannerImage />
      <div className="hidden xl:flex md:w-[45%] flex-col w-full h-full p-1">
        <div className="w-full h-full flex flex-col mt-3">
          <div className="w-full h-full lg:mb-2 flex flex-col items-center">
            <div className="text-2xl mb-1">Live de Lançamento Curso:</div>
            <span className="font-cinzelSb text-center text-3xl font-semibold">
              DESCOMPLICANDO LENTES <br /> DE RESINA
            </span>
            <div className="text-xl mb-2">03/10 às 20:00</div>
          </div>
          <BannerText />
          <BannerForm buttonColor="bg-yellow-950"/>
        </div>
      </div>
    </div>
    <div className="xl:hidden text-black block w-full bg-gray-100 py-4 px-4">
      <BannerText />
      <BannerForm buttonColor="bg-gray-900" />
    </div>
    </>
  );
};

export default Banner;
