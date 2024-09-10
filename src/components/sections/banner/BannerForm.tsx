import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const BannerForm: React.FC = () => {
  return (
    <form className="w-full md:p-4 flex justify-center">
      <div className="w-full md:w-[100%] max-w-[700px] gap-2">
      <Input
        placeholder="Seu primeiro nome"
        className="bg-primary-t-4 border-none rounded-xl mb-2 lg:mb-2 shadow-md shadow-primary-t-8 text-center md:h-11"
      />

        <Input
          placeholder="Seu melhor e-mail"
          type="email"
          className="bg-primary-t-4 border-none rounded-xl mb-2 lg:mb-2 shadow-md shadow-primary-t-8 text-center md:h-11"
        />
        <Button className="w-full font-bold md:text-lg md:mb-2 shadow-sm shadow-primary-t-8 md:h-11 bg-yellow-950" variant={"inverted"}>
          INSCREVA-SE AGORA
        </Button>
      </div>
    </form>
  );
};

export default BannerForm;
