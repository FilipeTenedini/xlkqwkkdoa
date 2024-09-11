import { CiStopwatch } from "react-icons/ci";
import LaunchItem from "./LearnItem";
import { AiOutlineProfile } from "react-icons/ai";
import { FaSortAmountUp } from "react-icons/fa";
import { HiOutlineHandThumbDown } from "react-icons/hi2";

const results: {
  text: string;
  icon: JSX.Element;
}[] = [
  {
    text: "Dicas práticas para otimizar seu tempo de consultório e aumentar o número de pacientes",
    icon: <CiStopwatch className="text-xl mr-2" />
  },
  {
    text: "Os materiais e técnicas mais modernos no mercado odontológico",
    icon: <AiOutlineProfile className="text-xl mr-2" />
  },
  {
    text: "Como evitar erros comuns e garantir resultados de alta qualidade",
    icon: <HiOutlineHandThumbDown className="text-xl mr-2" />
  },
  {
    text: "Como essa técnica TRANSFORMOU a minha carreira e pode transformar a sua também!",
    icon: <FaSortAmountUp className="text-xl mr-2" />,
  }
]
const LearnInfos: React.FC = () => {
  return (
    <ul>
      {results.map((item) => (<LaunchItem key={item.text} text={item.text} icon={item.icon} />))}
    </ul>
  );
};

export default LearnInfos;
