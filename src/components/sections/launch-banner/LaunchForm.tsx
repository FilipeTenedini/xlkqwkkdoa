import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const LaunchForm: React.FC = () => {
  return (
    <form className="w-full flex justify-center  md:flex md:flex-col md:justify-center md:items-center">
      <div className="w-full md:w-[80%]">
        <Input
          placeholder="Seu nome"
          className="bg-primary-t-8 h-10 border-none rounded-xl mb-2 lg:mb-4 w-full"
        />
        <Input
          type="email"
          placeholder="Seu melhor e-mail"
          className="bg-primary-t-8 h-10 border-none rounded-xl mb-2 lg:mb-4"
        />
        <Button className="w-full md:mb-4 text-lg">
          Inscreva-se Agora e Não Perca a Oportunidade
        </Button>
      </div>
    </form>
  );
};

export default LaunchForm;
