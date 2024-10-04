import { Button } from "@/components/CursePage/curso-page/ui/Button";

const SixSession: React.FC = () => {
  return (
    <div className="bg-primary-t-1 w-full justify-center flex flex-col gap-6 items-center pt-6 md:pt-7 md:pb-7 px-4 pb-5">
      <div className="px-3 bg-primary w-full xl:max-w-[50%] text-white rounded-2xl flex flex-col items-center justify-between py-2">
        <h1 className="font-bold mb-3 text-left md:text-center w-full px-4 text-2xl md:text-4xl md:mb-5">
          Aproveite agora!
        </h1>
        <div className="lg:w-[80%] flex flex-col gap-y-2 lg:text-lg text-left md:text-center">
          <div className="text-left md:text-center">
            &nbsp; Eu confio tanto no conteúdo desse curso que ofereço uma garantia
            incondicional de <strong>7 dias</strong>.
          </div>
          <div>
          &nbsp; Isso mesmo! Você terá uma semana para experimentar o curso e, se por
            qualquer motivo não estiver satisfeito(a),
            <br />
            pode pedir seu dinheiro de volta,{" "}
            <strong>sem questionamentos</strong>.
          </div>
        </div>
        <h3 className="font-bold text-left md:text-center w-full px-4 text-xl md:text-2xl mt-8">
          Ou você <strong>transforma sua carreira</strong>, ou você não paga
          nada!
        </h3>
        <h3 className="font-bold text-left md:text-center w-full px-4 text-xl md:text-2xl">
          Clique abaixo e garanta sua vaga sem riscos!
        </h3>
        <Button
          className="px-2 w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[300px] shadow-sm shadow-black/30 md:h-11 text-primary bg-white"
          variant={"inverted"}
          onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}
        >
          Quero garantir minha vaga!
        </Button>
      </div>
      <div className="px-3 bg-white md:min-h-[420px] gap-y-3 w-full justify-between xl:max-w-[50%] text-primary rounded-2xl xl:min-h-[383px] flex flex-col items-center py-2">
        <h1 className="font-bold mb-3 text-left md:text-center w-full px-4 text-2xl md:text-4xl md:mb-5">
          Valores e Oferta Limitada
        </h1>
        <div className="lg:w-[80%] flex flex-col gap-y-2 lg:text-lg text-left md:text-center">
          <div>
            &nbsp; O curso Descomplicando Lentes de Resina tem o valor de R$ 2.399, mas
            por <strong>tempo limitado</strong> você pode garantir sua vaga por <strong>apenas
            R$ 1.799.</strong>
          </div>
          <div>
          &nbsp; Essa é uma oferta exclusiva e válida apenas para os primeiros
            inscritos. Aproveite essa oportunidade única de se qualificar, lotar
            sua agenda e <strong>transformar seus resultados!</strong>
          </div>
        </div>
        <h3 className="font-bold text-left md:text-center w-full px-4 text-2xl md:text-2xl">
          Garanta sua vaga com desconto agora mesmo!
        </h3>
        <Button
          className="px-2 w-full mt-4 mb-2 font-bold text-sm sm:text-lg md:text-xl  md:mb-1 max-w-[380px] md:max-w-[425px] shadow-sm shadow-black/30 md:h-11 text-white bg-primary"
          variant={"inverted"}
          onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}
        >
          Quero garantir minha vaga por R$ 1.799!
        </Button>
      </div>
    </div>
  );
};

export default SixSession;
