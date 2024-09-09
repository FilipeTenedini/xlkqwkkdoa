import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const BannerForm: React.FC = () => {
  return (
    <form className="w-full md:pl-4 flex justify-center md:justify-start">
      <div className="w-full md:w-[50%] gap-2">
        <Input placeholder="Seu primeiro nome" className="bg-primary-t-8 border-none rounded-xl mb-2 lg:mb-2"/>
        <Input placeholder="Seu melhor e-mail" type="email" className="bg-primary-t-8 border-none rounded-xl mb-2 lg:mb-2" />
        <Button className="w-full md:mb-2">
          Lorem Ipsum
        </Button>
      </div>
    </form>
  );
};

export default BannerForm;
