import BannerForm from "./BannerForm";
import BannerImage from "./BannerImage";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary-t-6 w-full flex flex-row text-white">
      <div className="hidden lg:flex md:w-[45%] flex-col items-center p-6">
        <div className="text-2xl mb-1">Live de Lançamento Curso:</div>
        <span className="font-cinzelSb text-center text-3xl font-semibold">
          DESCOMPLICANDO LENTES <br/> DE RESINA
        </span>
        <div className="text-xl mb-4">03/10 às 20:00</div>
        <div className="text-center text-lg gap-y-2 flex flex-col mb-4">
          <div className="">Descubra o segredo para Transformar Sorrisos e Sua Carreira com Lentes de Resina!</div>
          <div className="">Participe da live exclusiva de lançamento do meu curso online:</div>
          <div className="">
            Descomplicando Lentes de Resina e veja como você vai aprender a dominar as técicas que estão revolucionando o mercado odontológico!
          </div>
        </div>
        <BannerForm />
      </div>
      <BannerImage />
    </div>
  );
};

export default Banner;
