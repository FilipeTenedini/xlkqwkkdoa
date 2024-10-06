import { Button } from "@/components/old/ui/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AboutStudents: React.FC = () => {
  return (
    <div className="bg-primary w-full pt-1 flex items-center flex-col">
      <div className="w-full text-center text-xl mt-4">
        Depoimentos e <span>histórias de sucesso</span>
      </div>
      <Button
        className="w-full mt-4 mb-2 rounded-full max-w-[95%] font-bold md:text-lg md:mb-1 shadow-sm shadow-black/30 md:h-[55px] bg-primary-t-8 text-white"
        variant={"inverted"}
      >
        <div className="flex items-center w-full h-full justify-center relative">
          Quero fazer sucesso!
          <div className="w-[30px] h-[30px] flex items-center justify-center absolute bg-white rounded-full text-primary right-0">
            <MdKeyboardDoubleArrowRight className="w-[35px] h-[25px]" />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default AboutStudents;
