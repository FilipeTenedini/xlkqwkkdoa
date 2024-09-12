import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const BannerForm: React.FC = () => {
  return (
    <form className="w-full h-full flex justify-center px-4">
      <div className="w-full md:w-[100%] max-w-[700px] flex flex-col items-center gap-2 xl:gap-3">
        <Input
          placeholder="Seu primeiro nome"
          className="2xl:block bg-gray-300 border-none rounded-xl shadow-md shadow-black/30 text-center h-9"
        />

        <Input
          placeholder="Seu melhor e-mail"
          type="email"
          className="2xl:block bg-gray-300 border-none rounded-xl shadow-md shadow-black/30 text-center h-9"
        />

        <Button
          className={`w-full font-bold md:text-lg shadow-sm shadow-black/30 h-9 bg-primary`}
          variant={"inverted"}
        >
          INSCREVA-SE AGORA
        </Button>
      </div>
    </form>
  );
};

export default BannerForm;
