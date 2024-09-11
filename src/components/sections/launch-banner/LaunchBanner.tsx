import { Button } from "@/components/ui/Button";

const LaunchBanner: React.FC = () => {
  return (
    <div className="relative w-full flex py-4">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 md:mb-6 text-primary text-center px-4 lg:max-w-[65%]">
          A LIVE DE LANÇAMENTO do curso DESCOMPLICANDO LENTES DE RESINA vai mudar o seu mindset e Transformar Seu Consultório -
          <span className="text-yellow-900"> E é 100% Gratuita!</span>
        </h2>
        <div className="px-8 lg:max-w-[50%] flex flex-col items-start text-yellow-900">
          <span className="mb-2 md:mb-3 md:text-lg">
          <span className="text-yellow-900">A live de lançamento do curso </span>
             foi pensada para trazer valor real e prático para a sua rotina como dentista. Durante a transmissão, você vai descobrir como as lentes de resina podem transformar sorrisos de forma simples e eficaz, gerando resultados incríveis para seus pacientes e aumentando significativamente seu faturamento.
          </span>
          <span className="mb-2 md:mb-3 md:text-lg">
            Além de aprender técnicas que eu apliquei para alcançar um negócio de 6 dígitos mensais, você terá acesso a insights que pode     colocar em prática imediatamente no seu consultório. E o melhor: <span className="text-yellow-900 font-bold">a live é completamente gratuita!</span>
          </span>
          <span className="mb-2 md:mb-3 md:text-lg">
            Essa é uma oportunidade única de estar à frente no mercado odontológico, dominando uma técnica em alta demanda.
          </span>
        </div>
        <div className="px-4 w-full flex justify-center mt-4 z-20">
          <Button className="w-full mb-6 max-w-[550px] font-bold text-xs md:text-md md:text-lg md:mb-2 shadow-sm shadow-primary-t-8 md:h-11 bg-yellow-950" variant={"inverted"}>
              INSCREVA-SE AGORA E NÃO PERCA A OPORTUNIDADE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LaunchBanner;
