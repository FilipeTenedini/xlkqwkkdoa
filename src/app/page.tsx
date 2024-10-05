"use client";
import Banner from "@/components/old/sections/banner/Banner";
import Curiousity from "@/components/old/sections/curiousity/Curiousity";
import LaunchBanner from "@/components/old/sections/launch-banner/LaunchBanner";
import Learn from "@/components/old/sections/learn/Learn";
import Testimonials from "@/components/old/sections/testimonials/Testimonials";
import WhoAmI from "@/components/old/sections/whoami/WhoAmi";
import FormContextProvider from "@/context/FormContext";

export default function Home() {
  return (
    <FormContextProvider>
      <div className="w-full flex flex-col items-center justify-center">
        <Banner />
        <Curiousity />
        <Learn />
        <WhoAmI />
        <Testimonials />
        <LaunchBanner />
      </div>
    </FormContextProvider>
  );
}
