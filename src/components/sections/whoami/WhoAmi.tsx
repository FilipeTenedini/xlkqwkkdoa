import Image from "next/image";

const WhoAmI: React.FC = () => {
  return (
    <div className="w-full bg-primary-t-1 flex flex-col xl:flex-row justify-center p-10 mb-5">
      <div className="mr-3 flex justify-center mb-2 xl:mb-0 xl:block lg:mr-12">
        <div className="p-1 border rounded-lg w-[250px] lg:w-[350px] border-primary">
          <Image
            src="/images/image.webp"
            width={250}
            height={500}
            alt="Clinic Dr Banner Image"
            className="lg:w-[350px] lg:h-[500px]"
          />
        </div>
      </div>
      <div className="w-full text-center xl:text-left xl:w-[40%] p-0 flex flex-col justfiy-center xl:justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-primary-t-6 text-2xl mb-1 lg:mb-4">
            <strong>Quem é TAÍS AURICH?</strong>
          </h2>
          <div className="text-primary mb-3 w-full max-w-[700px]">
            <div className="lg:mb-1">
              Sou dentista, formada pela —------- , especialista em prótese dental,  com mais de 20 anos de experiência, e minha trajetória na odontologia passou por grandes transformações. Durante muitos anos, realizei atendimentos tradicionais, focada em consultas de rotina. Mas, foi durante a pandemia que decidi dar um novo rumo à minha carreira e mergulhei de cabeça no estudo das lentes de resina. Já tinha experiência com lentes de porcelana, mas foi com as de resina que a minha prática realmente se destacou.
            </div>
            <div className="lg:mb-1">
              Essa técnica revolucionou meu consultório e, em pouco tempo, comecei a ver resultados incríveis. Hoje, transformo sorrisos com naturalidade e sem desgastar os dentes dos meus pacientes, e meu faturamento mensal alcança 6 dígitos.
            </div>
            <div className="lg:mb-1">
              Meu objetivo agora é compartilhar todo o conhecimento e experiência que adquiri para ajudar outros dentistas a darem um salto na carreira e alavancarem seus resultados. Se você também quer dominar as lentes de resina e transformar a vida dos seus pacientes e a sua própria, te convido a participar dessa jornada.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
