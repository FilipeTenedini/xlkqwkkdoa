import Banner from "@/components/CursePage/curso-page/Banner";
import { Button } from "@/components/CursePage/curso-page/ui/Button";

const FirstSession: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center pt-6 md:pt-10 px-4 pb-5">
        <Banner />
        <h1 className="font-bold mb-3 text-center w-full px-4 text-2xl md:text-4xl md:mb-5">
          Transforme sua carreira e seus resultados com Lentes de Resina.
        </h1>
        <div className="lg:w-[80%] flex flex-col gap-y-2 lg:text-lg text-center">
          <div>
            Você está um passo revolucionário em sua prática odontológica!
          </div>
          <div>
            Se você deseja dominar as técnicas mais modernas e eficientes,{" "}
            <strong>gerar resultados impecáveis</strong> ​​e alavancar seu
            consultório, esse é o momento.
          </div>
        </div>
        <Button
          className="px-2 w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
          variant={"inverted"}
          onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}

        >
          Quero me inscrever agora!
        </Button>
      </div>
      <div className="text-black block w-full py-4 px-4">
        <h1 className="font-bold mb-3 text-center w-full px-4 text-2xl md:text-4xl md:mb-5">
          Transforme sua carreira e seus resultados com Lentes de Resina.
        </h1>
        <div className="lg:w-[80%] flex flex-col gap-y-2 lg:text-lg text-center">
          <div>
            Você está um passo revolucionário em sua prática odontológica!
          </div>
          <div>
            Se você deseja dominar as técnicas mais modernas e eficientes,{" "}
            <strong>gerar resultados impecáveis</strong> ​​e alavancar seu
            consultório, esse é o momento.
          </div>
        </div>
        <Button
          className="px-2 w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
          variant={"inverted"}
          onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}

        >
          Quero me inscrever agora!
        </Button>
      </div>
    </>
  );
};

export default FirstSession;
