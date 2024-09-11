import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const BannerForm: React.FC = () => {
  return (
    <form className="w-full h-full flex justify-center px-4">
      <div className="w-full md:w-[100%] max-w-[700px] flex flex-col items-center gap-3">
      <Input
        placeholder="Seu primeiro nome"
        className="hidden 2xl:block bg-primary-t-4 border-none rounded-xl mb-2 lg:mb-2 shadow-md shadow-primary-t-8 text-center h-9"
      />

        <Input
          placeholder="Seu melhor e-mail"
          type="email"
          className="hidden 2xl:block bg-primary-t-4 border-none rounded-xl mb-2 lg:mb-2 shadow-md shadow-primary-t-8 text-center h-9"
        />
        <Button className="w-full font-bold md:text-lg shadow-sm shadow-primary-t-8 h-11 bg-yellow-950" variant={"inverted"}>
          INSCREVA-SE AGORA
        </Button>
      </div>
    </form>
  );
};

export default BannerForm;
