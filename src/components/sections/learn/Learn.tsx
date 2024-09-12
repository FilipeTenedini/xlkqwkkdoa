import { Button } from "@/components/ui/Button";
import LearnInfos from "./LearnInfos/LearnInfos";
import { useFormContext } from "@/context/FormContext";
import scrollToTop from "@/app/utils/scroll-to-top";

const Learn: React.FC = () => {
  const { formContainerRef } = useFormContext(); 

  return (
    <div className="bg-primary-t-1 py-3 w-full mb-4 flex flex-col items-center text-black">
      <h1 className="font-bold mb-2 text-center w-full px-4 text-2xl md:text-4xl md:mb-5">
        O que você vai aprender na live?
      </h1>
      <LearnInfos />
      <Button
        className="w-[80%] max-w-[400px] font-bold md:text-lg md:mb-2 shadow-sm shadow-black/30 md:mt-5 md:h-11 bg-primary"
        variant={"inverted"}
        onClick={() => scrollToTop(formContainerRef)}
      >
        GARANTA SEU LUGAR NA LIVE
      </Button>
    </div>
  );
};

export default Learn;
