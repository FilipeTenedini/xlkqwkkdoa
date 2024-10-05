
import { Button } from "@/components/CursePage/curso-page/ui/Button";
import LearnInfos from "./LearnInfos/LearnInfos";

const Learn: React.FC = () => {
  return (
    <div className="py-3 w-full mb-4 flex flex-col items-center text-black">
      <h1 className="font-bold mb-2 text-center w-full px-4 text-2xl md:text-4xl">
        O que você vai aprender no curso?
      </h1>
      <h3 className="font-bold text-center w-full px-4 text-xl md:text-2xl mb-4">
        Neste curso você vai aprender:
      </h3>
      <LearnInfos />
      <h3 className="font-bold text-left md:text-center w-full px-4 text-xl md:text-2xl mt-8">
        Clique abaixo e garanta sua vaga para aprender tudo isso e muito mais!
      </h3>
      <Button
        className="w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary"
        variant={"inverted"}
        onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}

      >
        Eu quero aprender!
      </Button>
    </div>
  );
};

export default Learn;
