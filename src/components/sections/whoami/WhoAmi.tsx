import { Button } from "@/components/ui/Button";
import Image from "next/image";

const WhoAmI: React.FC = () => {
  return (
    <div className="w-full bg-primary-t-1 flex flex-col sm:flex-row justify-center p-10 mb-5">
      <div className="mr-3 flex justify-center mb-2 sm:mb-0 sm:block">
        <div className="p-1 border rounded-lg w-[250px] border-primary">
          <Image
              src={"/images/image.webp"}
              width={250}
              height={500}
              alt="Clinic Dr Banner Image"
          />
        </div>
      </div>
      <div className="w-full text-center sm:text-left sm:w-[40%] p-0 flex flex-col justfiy-center sm:justify-between">
        <div>
          <h2 className="text-primary-t-6 text-2xl mb-1">
            <strong>Lorem Ipsum, Lorem Ipsum</strong>
          </h2>
          <div className="text-primary mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Enim natus quis laudantium, <strong>porro unde voluptate</strong> asperiores velit repellat minima.
            Debitis mollitia laboriosam error repudiandae vero, deserunt quaerat inventore eos earum?
          </div>
          <div className="text-primary mb-3">
            Lorem ipsum <strong>dolor sit amet, consectetur</strong> adipisicing elit.
            Debitis mollitia laboriosam eos earum?
          </div>
        </div>
        <div className="w-full">
          <Button variant={"inverted"} size="default">
            Lorem Ipsum Ipsum Lorem
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
