import { FaCheck } from "react-icons/fa";

interface Props {
  text: string
}

const LaunchItem: React.FC<Props> = ({text}) => {
  return (
    <li className="flex items-start text-left">
      <FaCheck className="text-primary mr-2 mt-0.5" />
      <span className="text-primary w-full">
        {text}
        Acesso ao curso por 1 ano
      </span>
    </li>
  );
};

export default LaunchItem;
