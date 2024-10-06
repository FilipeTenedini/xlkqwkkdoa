import AboutInfosItem from "./AboutInfosItem";
import { FaCheck } from "react-icons/fa6";

const results: {
  text: string;
  icon: JSX.Element;
}[] = [
  {
    text: "Como planejar e executar casos de lentes de resina desde a consulta inicial até a finalização",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "As melhores técnicas para obter resultados naturais sem desgaste prematuro.",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "O passo a passo para atender seus pacientes com excelência e aumentar o valor percebido",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Como corrigir erros comuns e evitar complicações",
    icon: <FaCheck className="text-xl mr-2" />,
  },
  {
    text: "Estratégias para alavancar seu consultório e aumentar seu faturamento com lentes de resina",
    icon: <FaCheck className="text-xl mr-2" />,
  },

];
const AboutInfos: React.FC = () => {
  return (
    <ul className="px-4">
      {results.map((item) => (
        <AboutInfosItem key={item.text} text={item.text} icon={item.icon} />
      ))}
    </ul>
  );
};

export default AboutInfos;
