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
    text: "Sistemas de Resinas, caracteristicas óticas, propriedades e indicações das resinas compostas",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Contrução das lentes sem preparo dentário",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Como selecionar a resina correta",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Como não errar cor",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Morfologia, princípios biológicos, acabamento e polimento",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Treinamento de olhar para harmonização do sorriso",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Como fazer desse procedimento uma virada de chaves no seu consultório",
    icon: <FaCheck className="text-xl mr-2" />,
  },
];

const AboutInfos: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-white bg-primary w-full pt-4 pb-6 md:justify-center">
        <div className="flex-1 flex flex-col justify-center items-center md:justify-start md:max-w-[1300px] px-4 md:px-14">
          <div className="text-xl lg:text-5xl mb-2 mt-4 md:mb-8">
            <span className="font-semibold">Transforme</span> sua carreira e
            seus resultados com{" "}
            <span className="font-cinzelSb font-semibold">
              {" "}
              Lentes de Resina.
            </span>
          </div>
          <div className="text-left text-md md:text-2xl lg:text-3xl ">
            <div className="md:mb-3 mb-2">
              Você está a um passo revolucionário em sua prática odontológica!
            </div>
            <div className="md:mb-3 mb-2">
              Se você deseja dominar as técnicas mais modernas e eficientes,
              gerar resultados impecáveis ​​e alavancar seu consultório, esse é
              o momento.
            </div>
          </div>
          <Button onClick={() => window.open("https://go.hotmart.com/W95844791D", "_blank")} className="mt-6 mb-2 rounded-full w-[95%] max-w-[350px] text-lg md:mb-1 shadow-sm shadow-black/30 md:h-[55px] bg-white text-primary">
              INSCREVA-SE AGORA
          </Button>
        </div>
      </div>
      <CourseContent />
    </>
  );
};

function CourseContent() {
  return (
    <div className="relative py-3 w-full mb-4 flex-1 flex flex-col items-center pt-40">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/course_content.jpg')" }}
      />

      <img
        src="/images/content_logo.png"
        alt="Logo do Conteúdo do Curso"
        className="mb-4 w-[320px] md:w-[600px] z-20 absolute left-0 top-[-50px] md:top-[-120px]"
      />

      <ul className="px-4 z-20 relative">
        {results.map((item, idx) => (
          <AboutInfosItem
            key={`${item.text}-${idx}`}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </ul>

      <Button
        className="w-full md:max-w-[350px] mt-4 mb-2 rounded-full max-w-[95%] font-bold text-lg md:mb-1 shadow-sm shadow-black/30 h-[55px] bg-primary text-white z-20 relative"
        variant={"inverted"}
        onClick={() => window.open("https://go.hotmart.com/W95844791D", "_blank")}
      >
        <div className="flex items-center w-full h-full justify-center relative">
          Eu quero aprender!
          <div className="w-[30px] h-[30px] flex items-center justify-center absolute bg-white rounded-full text-primary right-0">
            <MdKeyboardDoubleArrowRight className="w-[35px] h-[25px]" />
          </div>
        </div>
      </Button>
    </div>
  );
}

export default AboutInfos;
