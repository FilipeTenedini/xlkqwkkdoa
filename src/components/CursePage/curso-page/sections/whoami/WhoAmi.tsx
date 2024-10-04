import Image from "next/image";

const WhoAmI: React.FC = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-center p-10 mb-5 text-black">
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
          <h2 className="text-2xl mb-1 lg:mb-4">
            <strong>Quem é a Dra. Taís?</strong>
          </h2>
          <div className="mb-3 w-full max-w-[700px]">
            <div className="lg:mb-1">
              Sou a Dra. Taís Aurich , dentista formada pela UFRGS, especialista
              em prótese dentária e com mais de 20 anos de experiência. Ao longo
              da minha carreira, me especializei nas melhores técnicas
              odontológicas e, nos últimos anos, me destaquei no mercado com a
              aplicação das lentes de resina.
            </div>
            <div className="lg:mb-1">
              Essa técnica transformou não apenas os sorrisos dos meus
              pacientes, mas também o meu consultório e minha vida financeira .
              Hoje, compartilho meu conhecimento com outros profissionais para
              que eles também possam alcançar resultados profissionais.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
