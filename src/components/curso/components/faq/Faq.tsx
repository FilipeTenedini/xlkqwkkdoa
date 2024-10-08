"use client";

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
        {faqItems.map((item, idx) => (
          <Accordion
            type="single"
            collapsible={true}
            key={idx}
            className="bg-primary rounded-2xl px-2 w-full max-w-[700px] text-white"
          >
            <AccordionItem
              key={idx}
              value={item.value}
              className="shadow-none px-0"
            >
              <AccordionTrigger className="pl-2 font-semibold relative shadow-none">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pl-2 shadow-none flex flex-col gap-y-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

const faqItems = [
  {
    value: "never-worked-with-resin-lenses",
    question: "Nunca trabalhei com lentes de resina. Esse curso é para mim?",
    answer:
      "Sim! O curso é estruturado para todos os níveis de experiência, desde iniciantes até quem já tem alguma prática com lentes.",
  },
  {
    value: "how-long-results",
    question: "Quanto tempo você levará para ver os resultados?",
    answer:
      "Dependendo do seu nível de prática, muitos alunos já começam a ver resultados após o primeiro módulo.",
  },
  {
    value: "theoretical-or-practical",
    question: "O curso é teórico ou prático?",
    answer:
      "O curso é focado em aplicações clínicas, com muitos exemplos práticos para você aplicar no dia a dia do seu consultório.",
  },
];

export default Faq;
