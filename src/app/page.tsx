import Banner from "@/components/sections/banner/Banner";
import LaunchBanner from "@/components/sections/launch-banner/LaunchBanner";
import Learn from "@/components/sections/learn/Learn";
import WhoAmI from "@/components/sections/whoami/WhoAmi";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <Learn />
      <WhoAmI />
      <LaunchBanner />
    </div>
  );
}
