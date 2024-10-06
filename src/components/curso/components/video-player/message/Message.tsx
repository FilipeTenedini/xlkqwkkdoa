import { Button } from "@/components/old/ui/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Message: React.FC = () => {
  return (
    <div className="w-full bg-primary flex flex-col items-center text-white font-bold text-center px-4 py-4 md:py-8">
      <h3 className="w-full md:text-2xl md:max-w-[65%]">
        <span className="text-black">
          Transforme sua carreira e seus resultados
        </span>{" "}
        com <span className="text-black">Lentes De Resina.</span> <br />
        Você está um passo revolucionário em sua prática odontológica!
        <br />
        Se você deseja dominar as técnicas mais modernas e eficientes,{" "}
        <span className="text-black">
          gerar resultados impecáveis ​​e alavancar seu consultório,{" "}
        </span>
        esse é o momento.
        <br />
        <span className="text-black">Clique abaixo e garanta sua vaga!</span>
      </h3>
      <Button
        className="w-full mt-6 mb-2 rounded-full font-bold md:text-lg md:mb-1 max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary-t-8 text-white"
        variant={"inverted"}
      >
        <div className="flex items-center w-full h-full justify-center relative">
          Inscreva-se agora!
          <div className="w-[30px] h-[30px] flex items-center justify-center absolute bg-white rounded-full text-primary right-0">
            <MdKeyboardDoubleArrowRight className="w-[35px] h-[25px]" />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default Message;
