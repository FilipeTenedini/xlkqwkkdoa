import Image from "next/image";
import LaunchInfos from "../learn/LearnInfos/LearnInfos";
import LaunchForm from "./LaunchForm";

const LaunchBanner: React.FC = () => {
  return (
    <div className="relative w-full flex">
      <Image
        src="/images/clareamento2.jpg"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-20"
        alt="Banner Image"
      />
      <div className="relative w-full flex items-center justify-center py-4 px-6">
        <div className="text-center w-full">
          <h2 className="text-2xl font-bold mb-4 md:mb-6 text-primary">
            O que você vai aprender na live?
          </h2>
          <div className="flex flex-col-reverse md:flex-row md:gap-20 w-full">
            <LaunchForm />
            <LaunchInfos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchBanner;
