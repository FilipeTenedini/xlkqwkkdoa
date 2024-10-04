import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/CursePage/curso-page/ui/Accordion";
import { Button } from "@/components/CursePage/curso-page/ui/Button";

const Faq: React.FC = () => {
  return (
    <div className="w-full bg-primary flex flex-col items-center pb-6">
      <div className="w-full flex flex-col items-center p-10 gap-y-4">
        <h1 className="font-bold mb-3 text-center w-full px-4 text-2xl md:text-4xl md:mb-5 text-white">
          Dúvidas Frequentes
        </h1>
        <Accordion
          type="single"
          collapsible={true}
          className="bg-white rounded-2xl px-2 w-full max-w-[700px]"
        >
          <AccordionItem value="anyways" className="shadow-none px-0">
            <AccordionTrigger className="font-semibold relative shadow-none">
              Nunca trabalhei com lentes de resina. Esse curso é para mim?
            </AccordionTrigger>
            <AccordionContent className="shadow-none flex flex-col gap-y-4">
              Sim! O curso é estruturado para todos os níveis de experiência ,
              desde iniciantes até quem já tem alguma prática com lentes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible={true}
          className="bg-white rounded-2xl px-2 w-full max-w-[700px]"
        >
          <AccordionItem value="anyways" className="shadow-none px-0">
            <AccordionTrigger className="font-semibold relative shadow-none">
              Quanto tempo você levará para ver os resultados?
            </AccordionTrigger>
            <AccordionContent className="shadow-none flex flex-col gap-y-4">
              Dependendo do seu nível de prática, muitos alunos já começam a ver
              resultados após o primeiro módulo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible={true}
          className="bg-white rounded-2xl px-2 w-full max-w-[700px]"
        >
          <AccordionItem value="anyways" className="shadow-none px-0">
            <AccordionTrigger className="font-semibold relative shadow-none">
              O curso é teórico ou prático?
            </AccordionTrigger>

            <AccordionContent className="shadow-none flex flex-col gap-y-4">
              O curso é focado em aplicações clínicas , com muitos exemplos
              práticos para você aplicar no dia a dia do seu consultório.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <h2 className="font-bold mb-3 text-center w-full px-4 text-2xl md:text-4xl md:mb-5 text-white sm:mt-6">
        Clique no botão abaixo e transforme sua carreira agora mesmo!
      </h2>
      <Button
        className="w-full mt-4 mb-2 font-bold text-xl md:mb-1 max-w-[380px] md:max-w-[450px] shadow-sm shadow-black/30 md:h-14 bg-white text-black"
        variant={"inverted"}
        onClick={() => window.location.href = 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-descomplicando-lentes-de-resina-pdon1/W95844791D'}

      >
        Quero me inscrever no curso!
      </Button>
    </div>
  );
};

export default Faq;
