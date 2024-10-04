import Carousel from "@/components/CursePage/curso-page/carousel/Carousel";
import { Button } from "@/components/CursePage/curso-page/ui/Button";

const SecondSession: React.FC = () => {
  return (
    <div className="w-full flex items-center flex-col mb-4 p-4 pt-6 md:pt-10 px-4">
      <div className="w-full sm:hidden">
        <Carousel />
      </div>
      <h1 className="flex lg:hidden font-bold mb-3 text-left w-full text-xl lg:text-2xl md:text-4xl md:mb-5 mt-5 justify-center">
        A virada de chave na minha carreira odontológica
      </h1>
      <div className="w-[95%] flex flex-col items-center gap-6 sm:flex-row justify-center">
        <div className="flex flex-col items-center text-center w-full md:w-[90%] lg:w-[75%]">
          <div className="lg:w-[80%] items-center flex flex-col gap-y-2 lg:text-lg w-full">
            <h1 className="hidden lg:flex font-bold mb-3 justify-center text-center w-full px-4 text-2xl md:text-4xl md:mb-5 mt-5">
              A virada de chave na minha carreira odontológica
            </h1>
            <div className="flex flex-col gap-y-2 lg:text-lg text-left w-full">
              <div>
                &nbsp; Durante anos, minha prática odontológica foi baseada em
                atendimentos tradicionais, até que, durante a pandemia, tudo
                mudou. Foi então que mergulhei no estudo das{" "}
                <strong>lentes de resina</strong>, uma técnica que revolucionou
                meu consultório e transformou meus resultados de forma
                impressionantes.
              </div>
              <div>
              &nbsp; Com as <strong>lentes de resina</strong>, consegui entregar
                sorrisos naturais sem desgastes lesionados e, além disso, vi meu
                faturamento subir para <strong>6 dígitos por mês</strong>.
                Agora, quero mostrar que essa mudança também é possível para
                você .
              </div>
            </div>
          </div>
          <Button
            className="w-full mt-4 mb-2 font-bold md:text-lg md:mb-1 max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
            variant={"inverted"}
            onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}
          >
            Eu quero aprender!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondSession;
