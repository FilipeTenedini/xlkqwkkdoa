import BannerForm from "./BannerForm";
import BannerImage from "./BannerImage";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary-t-6 w-full h-full flex flex-row items-center justify-center text-white">
      <BannerImage />
      <div className="hidden xl:flex md:w-[45%] flex-col  w-full h-full p-1">
        <div className="w-full h-full flex flex-col mt-3">
          <div className="w-full h-full lg:mb-2 flex flex-col items-center">
            <div className="text-2xl mb-1">Live de Lançamento Curso:</div>
            <span className="font-cinzelSb text-center text-3xl font-semibold">
              DESCOMPLICANDO LENTES <br /> DE RESINA
            </span>
            <div className="text-xl mb-2">03/10 às 20:00</div>
          </div>
          <div className="text-center text-lg gap-y-2 flex flex-col mb-3">
            <div className="font-bold">
              Descubra o segredo para Transformar Sorrisos e Sua Carreira com
              Lentes de Resina!
            </div>
            <div>
              Participe da live exclusiva de lançamento do meu curso online:
            </div>
            <div>
              Descomplicando Lentes de Resina e veja como você vai aprender a
              dominar as técicas que estão revolucionando o mercado
              odontológico!
            </div>
          </div>
          <BannerForm />
        </div>
      </div>
    </div>
  );
};

export default Banner;
