import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const LaunchForm: React.FC = () => {
  return (
    <form className="w-full flex justify-center md:justify-start">
      <div className="w-full">
        <Input

          placeholder="Seu nome"
          className="bg-primary-t-8 h-12 border-none rounded-xl mb-2 lg:mb-4 w-full"
        />
        <Input

          placeholder="Seu melhor e-mail"
          className="bg-primary-t-8 border-none rounded-xl mb-2 lg:mb-4"
        />
        <Button className="w-full md:mb-4">
          Lorem Ipsum
        </Button>
      </div>
    </form>
  );
};

export default LaunchForm;
