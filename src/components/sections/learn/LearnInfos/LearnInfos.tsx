import LaunchItem from "./LearnItem";

const results = [
  "Dicas práticas para otimizar seu tempo de consultório e aumentar o número de pacientes",
  "Os materiais e técnicas mais modernos no mercado odontológico",
  "Como evitar erros comuns e garantir resultados de alta qualidade",
  "Como essa técnica TRANSFORMOU  a minha carreira e pode transformar a sua também!"
]

const LearnInfos: React.FC = () => {
  return (
    <ul>
      {results.map((item) => (<LaunchItem key={item} text={item} />))}
    </ul>
  );
};

export default LearnInfos;
