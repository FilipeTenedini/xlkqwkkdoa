import { Button } from "@/components/old/ui/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AboutInfos from "./learn/AboutInfos/AboutInfos";

const AboutCourse: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row text-black px-4">
      <div className="flex-1 flex flex-col justify-center items-center md:justify-start px-2 md:px-14">
        <span className="font-cinzelSb text-3xl mt-4 mb-2 font-semibold">
          Lentes de Resina
        </span>
        <div className="text-left">
          Você está um passo revolucionário em sua prática odontológica!
          <br />
          Se você deseja dominar as técnicas mais modernas e eficientes, gerar
          resultados impecáveis ​​e alavancar seu consultório, esse é o momento.
        </div>
      </div>
      <div className="py-3 w-full mb-4 flex-1 flex flex-col items-center">
        <h1 className="font-bold mb-4 text-left md:text-center w-full text-2xl px-2 md:text-4xl md:mb-5">
          Neste curso você vai aprender:
        </h1>
        <AboutInfos />
        <Button
          className="w-full mt-6 mb-2 rounded-full font-bold md:text-lg md:mb-1 max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary-t-8 text-white"
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

export default AboutCourse;
