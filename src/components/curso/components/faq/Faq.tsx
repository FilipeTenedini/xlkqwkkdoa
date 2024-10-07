import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/Accordion";

const Faq: React.FC = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center text-black">
      <div className="w-full flex flex-col items-center p-10 gap-y-4">
        <h1 className="font-bold mb-3 text-center w-full px-4 text-2xl md:text-4xl md:mb-5 text-black">
          Dúvidas Frequentes
        </h1>
        <Accordion
          type="single"
          collapsible={true}
          className="bg-primary rounded-2xl px-2 w-full max-w-[700px] text-white"
        >
          <AccordionItem value="anyways" className="shadow-none px-0">
            <AccordionTrigger className="pl-2 font-semibold relative shadow-none">
              Nunca trabalhei com lentes de resina. Esse curso é para mim?
            </AccordionTrigger>
            <AccordionContent className="pl-2 shadow-none flex flex-col gap-y-4">
              Sim! O curso é estruturado para todos os níveis de experiência ,
              desde iniciantes até quem já tem alguma prática com lentes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible={true}
          className="bg-primary rounded-2xl px-2 w-full max-w-[700px] text-white"
        >
          <AccordionItem value="anyways" className="shadow-none px-0">
            <AccordionTrigger className="pl-2 font-semibold relative shadow-none">
              Quanto tempo você levará para ver os resultados?
            </AccordionTrigger>
            <AccordionContent className="pl-2 shadow-none flex flex-col gap-y-4">
              Dependendo do seu nível de prática, muitos alunos já começam a ver
              resultados após o primeiro módulo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible={true}
          className="bg-primary rounded-2xl px-2 w-full max-w-[700px] text-white"
        >
          <AccordionItem value="anyways" className="shadow-none px-0">
            <AccordionTrigger className="pl-2 font-semibold relative shadow-none">
              O curso é teórico ou prático?
            </AccordionTrigger>

            <AccordionContent className="pl-2 shadow-none flex flex-col gap-y-4">
              O curso é focado em aplicações clínicas , com muitos exemplos
              práticos para você aplicar no dia a dia do seu consultório.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
