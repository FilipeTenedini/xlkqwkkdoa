import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
interface Props {
  buttonColor: string;
}
const BannerForm: React.FC<Props> = ({buttonColor}) => {
  return (
    <form className="w-full h-full flex justify-center px-4">
      <div className="w-full md:w-[100%] max-w-[700px] flex flex-col items-center gap-2 xl:gap-3">
      <Input
        placeholder="Seu primeiro nome"
        className="hidden 2xl:block bg-primary-t-4 border-none rounded-xl shadow-md shadow-primary-t-8 text-center h-9"
      />

        <Input
          placeholder="Seu melhor e-mail"
          type="email"
          className="hidden 2xl:block bg-primary-t-4 border-none rounded-xl shadow-md shadow-primary-t-8 text-center h-9"
        />
        
        <Button className={`w-full font-bold md:text-lg shadow-sm shadow-primary-t-8 h-9 ${buttonColor}`} variant={"inverted"}>
          INSCREVA-SE AGORA
        </Button>
      </div>
    </form>
  );
};

export default BannerForm;
