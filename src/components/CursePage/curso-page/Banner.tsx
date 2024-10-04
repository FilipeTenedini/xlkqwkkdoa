"use client";

import Image from "next/image";
import { Button } from "./ui/Button";

const Banner: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 w-full h-full flex flex-row items-center justify-center text-black relative">
        <div className="relative w-full 2xl:w-[55%] h-full">
          <div className="relative w-full h-full">
            <Image
              src={"/images/launch-ban.jpg"}
              width={855}
              height={500}
              className="h-full w-full object-cover"
              alt="Clinic Dr Banner Image"
            />
          </div>
        </div>

        <div className="hidden 2xl:flex md:w-[45%] flex-col w-full h-full p-1 text-left">
          <div className="w-full h-full flex flex-col mt-3">
            <div className="w-full h-full lg:mb-2 flex flex-col gap-y-4 items-center px-6 text-center">
              <div className="text-2xl mb-1">
              &nbsp;&nbsp;Transforme sua carreira e seus resultados com
              </div>
              <span className="font-cinzelSb text-center text-3xl font-semibold">
                LENTES DE RESINA
              </span>
              <div className="text-2xl mb-1">
              &nbsp;&nbsp;Você está um passo revolucionário em sua prática odontológica!
              </div>
              <div className="text-2xl mb-1">
              &nbsp;&nbsp;Se você deseja dominar as técnicas mais modernas e eficientes,{" "}
                <strong>gerar resultados impecáveis</strong> ​​e alavancar seu
                consultório, esse é o momento.
              </div>
              <h3 className="font-bold text-center w-full px-4 text-lg md:text-2xl mt-8">
                Clique abaixo e garanta sua vaga!
              </h3>
              <Button
                className="px-2 w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
                variant={"inverted"}
              onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}
              >
                Quero me inscrever agora!
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:hidden text-black block w-full bg-gray-100 py-4 px-4 text-left">
        <div className="w-full h-full flex flex-col mt-3">
          <div className="w-full h-full lg:mb-2 flex flex-col gap-y-4 items-center px-6 text-left">
            <div className="text-xl">
            &nbsp;&nbsp;Transforme sua carreira e seus resultados com {" "}
            <span className="font-cinzelSb text-center text-xl font-semibold">
              LENTES DE RESINA
            </span>
            </div>
            <div className="text-xl">
            &nbsp;&nbsp;Você está um passo revolucionário em sua prática odontológica!
            </div>
            <div className="text-xl">
            &nbsp;&nbsp;Se você deseja dominar as técnicas mais modernas e eficientes,{" "}
              <strong>gerar resultados impecáveis</strong> ​​e alavancar seu
              consultório, esse é o momento.
            </div>
            <h3 className="font-bold text-center w-full text-xl md:text-2xl mt-8">
              Clique abaixo e garanta sua vaga!
            </h3>
            <Button
              className="w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
              variant={"inverted"}
              onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}

            >
              Quero me inscrever agora!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
