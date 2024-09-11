import { ReactElement } from "react";

interface Props {
  text: string;
  icon: ReactElement;
}

const LearnItem: React.FC<Props> = ({ text, icon }) => {
  return (
    <li className="flex justify-center text-black mb-2">
      <div className="w-full px-4">
        <div className="flex md:text-lg">
          <div className="w-[28px] mt-0.5 md:mt-1">{icon}</div>
          {text}
        </div>
      </div>
    </li>
  );
};

export default LearnItem;
