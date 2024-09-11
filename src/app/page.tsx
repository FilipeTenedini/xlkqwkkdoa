import Banner from "@/components/sections/banner/Banner";
import Curiousity from "@/components/sections/curiousity/Curiousity";
import LaunchBanner from "@/components/sections/launch-banner/LaunchBanner";
import Learn from "@/components/sections/learn/Learn";
import WhoAmI from "@/components/sections/whoami/WhoAmi";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <Curiousity />
      <Learn />
      <WhoAmI />
      <LaunchBanner />
    </div>
  );
}
