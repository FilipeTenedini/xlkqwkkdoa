import { Button } from "@/components/ui/Button";
import Image from "next/image";

const WhoAmI: React.FC = () => {
  return (
    <div className="w-full bg-primary-t-1 flex justify-center p-10">
      <div className="mr-3">
        <div className="p-1 border rounded-lg border-primary">
          <Image
              src={"/images/image.webp"}
              width={250}
              height={500}
              alt="Clinic Dr Banner Image"
          />
        </div>
      </div>
      <div className="w-[40%] p-0 flex flex-col justify-between">
        <div>
          <h2 className="text-primary-t-6 text-2xl mb-1">
            Olá, eu sou a Taís Aurich
          </h2>
          <div className="text-primary mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Enim natus quis laudantium, porro unde voluptate asperiores velit repellat minima.
            Debitis mollitia laboriosam error repudiandae vero, deserunt quaerat inventore eos earum?
          </div>
          <div className="text-primary mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Enim natus quis laudantium, porro unde voluptate asperiores velit repellat minima.
            Debitis mollitia laboriosam error repudiandae vero, deserunt quaerat inventore eos earum?
          </div>
          <div className="text-primary mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Enim natus quis laudantium, porro unde voluptate asperiores velit repellat minima.
          </div>
        </div>
        <Button variant={"inverted"} size="default" className="max-w-60">
            Lorem Ipsum
        </Button>
      </div>
    </div>
  );
};

export default WhoAmI;
