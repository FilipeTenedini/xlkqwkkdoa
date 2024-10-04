import Carousel from "@/components/CursePage/curso-page/carousel/Carousel";
import { Button } from "@/components/CursePage/curso-page/ui/Button";

const FiveSession: React.FC = () => {
  return (
    <div className="w-full flex items-center flex-col mb-4 p-4 pt-6 md:pt-10 px-4">
      <div className="w-full sm:hidden">
        <Carousel />
      </div>
      <h1 className="bg-primary-t-6 rounded-full items-center p-2 text-white flex lg:hidden font-bold mb-3 text-center w-full px-4 text-2xl md:text-2xl md:mb-5 mt-5 justify-center animate-grow-fade-in">
        Quer ter um acompanhamento mais próximo e exclusivo?
      </h1>
      <div className="w-[80%] flex flex-col items-center gap-6 sm:flex-row justify-center">
        <div className="flex flex-col items-center text-center w-full md:w-[50%] lg:w-[75%]">
          <div className="lg:w-[80%] items-center flex flex-col gap-y-2 lg:text-lg w-full">
            <h1 className="bg-primary-t-6 rounded-full items-center p-2 text-white hidden lg:flex font-bold mb-3 justify-center text-center w-full px-4 text-2xl md:text-3xl md:mb-5 mt-5 animate-grow-fade-in">
              Quer ter um acompanhamento mais próximo e exclusivo?
            </h1>
            <div className="flex flex-col gap-y-2 lg:text-lg text-center w-full">
              <div>
                Além do curso online, você pode optar por adquirir uma mentoria
                individual com a Dra. Taís. Nessa mentoria, você terá a
                oportunidade única de acompanhar de perto a execução de um caso
                real, diretamente no consultório em Porto Alegre.
              </div>
              <div>
                Essa é uma chance de colocar em prática tudo o que aprendeu e
                tirar dúvidas em tempo real, vendo como tudo acontece de fato no
                dia a dia clínico.
              </div>
            </div>
          </div>
          <h3 className="font-bold text-center w-full px-4 text-2xl md:text-2xl mt-8">
            Garanta sua vaga no curso e na mentoria agora mesmo por apenas R$ 4.999!
          </h3>
          <Button
            className="px-2 w-full mt-4 mb-2 font-bold md:text-lg md:mb-1 max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
            variant={"inverted"}
            onClick={() => window.location.href = 'https://pay.hotmart.com/W95844791D?off=4zpqnpd8'}

          >
            Quero participar da mentoria!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FiveSession;
