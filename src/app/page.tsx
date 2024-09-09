import Banner from "@/components/sections/banner/Banner";
import WhoAmI from "@/components/sections/whoami/WhoAmi";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <WhoAmI />
    </div>
  );
}
