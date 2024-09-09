import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary-t-6 w-[80%] max-w-5xl rounded-tr-2xl rounded-bl-2xl mt-10 p-4 md:p-0 flex flex-row text-white mb-4">
      <div className="w-full md:w-[70%] flex flex-col justify-center items-center px-2">
        <span className="text-center font-cinzel border-white border-y text-3xl py-2 px-4 mb-2 sm:mb-5 md:mb-5 md:mt-2 lg:mb-10 md:text-4xl lg:text-5xl">
          Taís Aurich
        </span>

        <div className="mb-2 sm:mb-5 md:mb-5 lg:mb-10">
          <h2 className="text-center md:text-left md:pl-4 lg:text-xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
          <h3 className="text-center md:text-left md:pl-4 lg:text-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.
          </h3>
        </div>
        <form className="w-full md:pl-4 flex justify-center md:justify-start">
          <div className="w-full md:w-[50%] gap-2">
            <Input placeholder="Seu primeiro nome" className="bg-primary-t-8 border-none rounded-xl mb-2 lg:mb-2"/>
            <Input placeholder="Seu melhor e-mail" className="bg-primary-t-8 border-none rounded-xl mb-2 lg:mb-2" />
            <Button className="w-full md:mb-2">
              Lorem Ipsum
            </Button>
          </div>
        </form>
      </div>

      <div className="hidden md:flex w-[30%] justify-end">
        <Image
          src={"/images/image.webp"}
          width={375}
          height={500}
          className="rounded-tr-2xl"
          alt="Clinic Dr Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
