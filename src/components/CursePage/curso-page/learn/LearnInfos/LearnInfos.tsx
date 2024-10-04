import { CiStopwatch } from "react-icons/ci";
import LaunchItem from "./LearnItem";
import { AiOutlineProfile } from "react-icons/ai";
import { GrSteps } from "react-icons/gr";
import { BiBrain } from "react-icons/bi";
import { BiCollapse } from "react-icons/bi";

const results: {
  text: string;
  icon: JSX.Element;
}[] = [
  {
    text: "Como planejar e executar casos de lentes de resina desde a consulta inicial até a finalização",
    icon: <CiStopwatch className="text-xl mr-2" />,
  },
  {
    text: "As melhores técnicas para obter resultados naturais sem desgaste prematuro.",
    icon: <AiOutlineProfile className="text-xl mr-2" />,
  },
  {
    text: "O passo a passo para atender seus pacientes com excelência e aumentar o valor percebido",
    icon: <GrSteps className="text-xl mr-2" />,
  },
  {
    text: "Como corrigir erros comuns e evitar complicações",
    icon: <BiCollapse className="text-xl mr-2" />,
  },
  {
    text: "Estratégias para alavancar seu consultório e aumentar seu faturamento com lentes de resina",
    icon: <BiBrain className="text-xl mr-2" />,
  },

];
const LearnInfos: React.FC = () => {
  return (
    <ul>
      {results.map((item) => (
        <LaunchItem key={item.text} text={item.text} icon={item.icon} />
      ))}
    </ul>
  );
};

export default LearnInfos;
