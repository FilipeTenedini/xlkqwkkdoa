import { Button } from "@/components/CursePage/curso-page/ui/Button";
import Carousel from "../carousel/Carousel";

const ThirdSession: React.FC = () => {
  return (
    <div className="bg-primary-t-1 w-full flex flex-col items-center pt-6 md:pt-10 px-4 pb-5">
      <h1 className="font-bold mb-3 text-left md:text-center w-full px-4 text-2xl md:text-4xl md:mb-5">
        Por que aprender lentes de resina?
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-[90%] lg:w-[80%] flex flex-col justify-center gap-6 sm:flex-row">
          <div className="max-w-[30%] hidden lg:flex w-full sm:w-[50%] lg:w-[30%]">
            <Carousel />
          </div>
          <div className="flex flex-col w-full md:w-[100%] lg:w-[75%]">
            <div className="flex flex-col gap-y-2 lg:text-lg text-left">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="bg-primary text-white p-4 rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none">
                  <strong>
                    &nbsp; As lentes de resina são o futuro da odontologia estética.
                    Elas permitem que você transforme o sorriso de seus
                    pacientes de maneira rápida, econômica, reversível e sem
                    desgaste danificado . E o melhor: com resultados impecáveis
                    ​​e extremamente naturais!
                  </strong>
                </div>
                <div className="bg-primary text-white p-4 lg:rounded-tr-3xl">
                  <strong>
                  &nbsp; Além disso, você terá a oportunidade de aumentar seu
                    faturamento, lotar sua agenda e se diferenciar no mercado
                    com uma técnica que está em alta demanda.
                  </strong>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="bg-primary text-white p-4  rounded-bl-3xl rounded-br-3xl">
                  <strong>
                  &nbsp; Este curso vai te mostrar passo a passo como aplicar essas
                    técnicas de forma eficaz e dominar o que está evoluindo o
                    mercado odontológico.
                  </strong>
                </div>
              </div>
            </div>
            <div className="hidden w-full xl:flex flex-col items-center">
        <h3 className="font-bold text-left sm:text-center w-full px-4 text-2xl md:text-2xl mt-8">
          Quer aprender e se destacar? Garanta sua vaga agora!
        </h3>
        <Button
          className="px-2 w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
          variant={"inverted"}
          onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}

        >
          Eu quero me inscrever!
        </Button>
      </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center xl:hidden">
        <h3 className="font-bold text-left sm:text-center w-full px-4 text-2xl md:text-2xl mt-8">
          Quer aprender e se destacar? Garanta sua vaga agora!
        </h3>
        <Button
          className="px-2 w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
          variant={"inverted"}
          onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}

        >
          Eu quero me inscrever!
        </Button>
      </div>
    </div>
  );
};

export default ThirdSession;
