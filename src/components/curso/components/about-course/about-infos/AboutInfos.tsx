"use client";

import { Button } from "@/components/old/ui/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AboutInfosItem from "./AboutInfosItem";
import { FaCheck } from "react-icons/fa6";

const results: {
  text: string;
  icon: JSX.Element;
}[] = [
  {
    text: "Como planejar e executar casos de lentes de resina desde a consulta inicial até a finalização",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "As melhores técnicas para obter resultados naturais sem desgaste prematuro.",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "O passo a passo para atender seus pacientes com excelência e aumentar o valor percebido",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Como corrigir erros comuns e evitar complicações",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Estratégias para alavancar seu consultório e aumentar seu faturamento com lentes de resina",
    icon: <FaCheck className="text-xl mr-2" />,
  },
];
const AboutInfos: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row text-black px-4">
      <div className="flex-1 flex flex-col justify-center items-center md:justify-start px-2 md:px-14">
        <span className="font-cinzelSb text-3xl lg:text-5xl mt-4 mb-2 md:mb-8 font-semibold">
          Lentes de Resina
        </span>
        <div className="text-left">
          <div className="md:text-2xl lg:text-3xl md:mb-3">
            Você está a um passo revolucionário em sua prática odontológica!
          </div>
          <br />
          <div className="md:text-1xl lg:text-2xl md:mb-3">
            Se você deseja dominar as técnicas mais modernas e eficientes, gerar
            resultados impecáveis ​​e alavancar seu consultório, esse é o
            momento.
          </div>
        </div>
      </div>

      <div className="py-3 w-full mb-4 flex-1 flex flex-col items-center">
        <h1 className="font-bold mb-4 text-left md:text-center w-full text-2xl px-2 md:text-4xl md:mb-5">
          Neste curso você vai aprender:
        </h1>

        <ul className="px-4">
          {results.map((item, idx) => (
            <AboutInfosItem
              key={`${item.text}-${idx}`}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </ul>

        <Button
          className="w-full mt-4 mb-2 rounded-full max-w-[95%] font-bold md:text-lg md:mb-1 shadow-sm shadow-black/30 md:h-[55px] bg-primary-t-8 text-white"
          variant={"inverted"}
        >
          <div className="flex items-center w-full h-full justify-center relative">
            Eu quero aprender!
            <div className="w-[30px] h-[30px] flex items-center justify-center absolute bg-white rounded-full text-primary right-0">
              <MdKeyboardDoubleArrowRight className="w-[35px] h-[25px]" />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default AboutInfos;
