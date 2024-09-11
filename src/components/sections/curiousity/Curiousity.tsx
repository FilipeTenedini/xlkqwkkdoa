import { Button } from "@/components/ui/Button";
import Carousel from "../carousel/Carousel";

const Curiousity: React.FC = () => {
  return (
    <div className="w-full flex items-center flex-col mb-4 p-4">
      <div className="font-bold text-primary text-md md:text-xl lg:text-2xl text-center mb-3">
        Por que Lentes de resina?
      </div>
      <div className="w-[80%] flex flex-col items-center gap-6 sm:flex-row">
        <div className="w-full sm:w-[50%] lg:w-[30%]">
          <Carousel />
        </div>
        <div className="text-primary flex flex-col items-center text-center w-full sm:w-[50%] lg:w-[75%]">
          <div className="lg:w-[80%] flex flex-col gap-y-2">
            <div>
              Você sabia que as lentes de resina são uma das técnicas mais
              procuradas na odontologia estética? E agora, você tem a chance de
              aprender como aplicá-las com perfeição e transformar a sua
              carreira!
            </div>
            <div>
              As <span className="text-yellow-950">lentes de resina</span> são
              extremamente versáteis, oferecendo alta durabilidade e resultados
              estéticos impecáveis. Além disso, uma grande vantagem dessa
              técnica é que ela{" "}
              <span className="text-yellow-950">
                não desgasta os dentes naturais
              </span>
              , sendo uma solução reversível a qualquer momento, garantindo
              segurança e tranquilidade para o paciente.
            </div>
            <div>
              Na{" "}
              <span className="text-yellow-950">
                live exclusiva de lançamento
              </span>{" "}
              do DESCOMPLICANDO LENTES DE RESINA, vou te mostrar os segredos por
              trás dos resultados naturais e duradouros que tenho alcançado ao
              longo dos anos!
            </div>
          </div>
        </div>
      </div>

      <Button
        className="w-full mt-4 mb-2 font-bold md:text-lg md:mb-1 max-w-[300px] shadow-sm shadow-primary-t-8 md:h-11 bg-yellow-950"
        variant={"inverted"}
      >
        INSCREVA-SE AGORA
      </Button>
    </div>
  );
};

export default Curiousity;
