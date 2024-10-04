import { Button } from "@/components/CursePage/curso-page/ui/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";

const FourthSession: React.FC = () => {
  return (
    <div className="bg-primary-t-1 w-full flex flex-col items-center pt-6 md:pt-10 px-4 pb-5">
      <h1 className="font-bold mb-3 text-left md:text-center w-full px-4 text-2xl md:text-4xl md:mb-5">
        O que os outros cursos não oferecem?
      </h1>
      <div className="lg:w-[80%] flex flex-col gap-y-2 lg:text-lg text-left">
        <div className="flex justify-center">
          <div className="w-full px-4">
            <div className="flex md:text-lg flex-col justify-center items-center">
              <div className="w-[36px] mt-0.5 md:mt-1 mb-3 text-primary h-[36px] flex items-center justify-center">
                <IoMdCloseCircleOutline className="text-2xl w-full h-full" />
              </div>
              &nbsp; A maioria dos cursos de lentes de resina ensinam de forma teórica
              ou focada em técnicas que não podem ser aplicadas na prática
              clínica diária. Meu curso é diferente. Ele foi desenvolvido
              especificamente para a área clínica com foco total em aplicações
              reais no seu consultório.
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full px-4">
          <div className="flex md:text-lg flex-col justify-center items-center">
              <div className="w-[30px] mt-0.5 md:mt-1 mb-3 text-primary h-[30px] flex items-center justify-center">
                <FaRegCircleCheck className="text-xl w-full h-full" />
              </div>
              &nbsp; Aqui, você aprenderá técnicas comprovadas que eu uso diariamente,
              com o objetivo de gerar resultados incríveis para seus pacientes .
              Não é apenas mais um curso teórico; é um curso que vai transformar
              a forma como você trabalha.
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-left  md:text-center  w-full px-4 text-2xl md:text-2xl mt-8">
        Quer aprender e se destacar? Garanta sua vaga agora!
      </h3>
      <Button
        className="w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
        variant={"inverted"}
        onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}
      >
        Quero fazer parte!
      </Button>
    </div>
  );
};

export default FourthSession;
