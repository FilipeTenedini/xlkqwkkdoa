import { Button } from "@/components/ui/Button";

const Curiousity: React.FC = () => {
  return (
    <div className="w-full bg-primary-t-1 flex flex-col items-center xl:flex-row justify-center p-10 mb-5 text-primary">
      <div className="w-full flex flex-col items-center text-center max-w-[600px] md:text-lg">
        <span className="mb-2">
          Você sabia que as lentes de resina são uma das técnicas mais procuradas na odontologia estética?
        </span>
        <span className="mb-2">
          E agora, você tem a chance de aprender como aplicá-las com perfeição e <span className="text-yellow-950">transformar a sua carreira!</span>
        </span>
        <span>
          Na <span className="font-bold text-yellow-950">live exclusiva de lançamento</span> do meu curso <span className="text-yellow-950">DESCOMPLICANDO LENTES DE RESINA</span>, vou te mostrar os segredos por trás dos resultados impecáveis e naturais que eu tenho alcançado ao longo dos anos – sem desgastar os dentes dos seus pacientes!
        </span>
        <Button
          className="w-full mt-4 font-bold md:text-lg md:mb-1 shadow-sm shadow-primary-t-8 md:h-11 bg-yellow-950"
          variant={"inverted"}
        >
          INSCREVA-SE AGORA
        </Button>
      </div>
    </div>
  );
};

export default Curiousity;
