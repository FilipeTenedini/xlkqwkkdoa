import { Button } from "@/components/ui/Button";
import Carousel from "../carousel/Carousel";

const Curiousity: React.FC = () => {
  return (
    <div className="w-full flex items-center flex-col mb-4 p-4">
      <div className="font-bold text-primary text-md md:text-xl text-center">
        Por que Lentes de resina?
      </div>
      <div className="w-full h-48">
        <Carousel />
      </div>

      <Button
        className="w-full mt-4 mb-2 font-bold md:text-lg md:mb-1 max-w-[300px] shadow-sm shadow-primary-t-8 md:h-11 bg-yellow-950"
        variant={"inverted"}
      >
        INSCREVA-SE AGORA
      </Button>
    </div>
  );
};

export default Curiousity;
