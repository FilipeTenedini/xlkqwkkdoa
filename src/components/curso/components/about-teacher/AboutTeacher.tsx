"use client";

const Header: React.FC = () => {
  return (
    <div className="w-full bg-primary flex flex-col items-center justify-center px-3 pt-3 md:px-12 pb-8">
      <div className="w-[230px] lg:mb-4 flex justify-center items-center">
        <img
          src="/images/new-logo-redonda.png"
          className="mb-8 w-[180px] h-[150px] lg:h-[200px] lg:w-[320px] ml-[-10px] rounded-full"
        />
        <img
          src="/images/image.webp"
          className="rounded-3xl h-[120px] lg:h-[250px]"
        />
      </div>
      <div className="text-2xl text-white font-semibold mb-6">CONHEÇA A TAIS AURICH</div>
      <span className="text-lg text-white lg:max-w-[750px] px-2">
        &nbsp;&nbsp;Formada pela UFRGS, especialista em prótese dentária e com
        mais de 20 anos de experiência.
        <br />
        &nbsp;&nbsp;Ao longo da minha carreira, me especializei nas melhores
        técnicas odontológicas e, nos últimos anos, me destaquei no mercado com
        a aplicação das lentes de resina. Essa técnica transformou não apenas os
        sorrisos dos meus pacientes, mas também o meu consultório e minha vida
        financeira. Hoje, compartilho meu conhecimento com outros profissionais
        para que eles também possam alcançar resultados profissionais.
      </span>
    </div>
  );
};

export default Header;
