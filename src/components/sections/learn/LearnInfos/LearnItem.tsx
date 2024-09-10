import { FaCheck } from "react-icons/fa";

interface Props {
  text: string
}

const LearnItem: React.FC<Props> = ({text}) => {
  return (
    <li className="flex justify-center text-primary mb-2">
      <div className="w-full px-4">
        <div className="flex">
          <div className="w-[12px] mr-2 mt-0.5">
            <FaCheck className="text-primary text-xs" />
          </div>
          {text}
        </div>
      </div>
    </li>
  );
};

export default LearnItem;
