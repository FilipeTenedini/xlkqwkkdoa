"use client";

import { Button } from "@/components/old/ui/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import VideoSlider from "./video-slider/VideoSlider";
import { lazy } from "react";
const VideoSlider = lazy(() => import("./video-slider/VideoSlider"));

const AboutStudents: React.FC = () => {
  return (
    <div className="bg-primary w-full pt-1 flex items-center flex-col pb-4">
      <div className="w-full text-center text-xl md:text-3xl mt-2 mb-4">
        Depoimentos e <span>histórias de sucesso</span>
      </div>
      <VideoSlider />
      <Button
        className="mt-6 mb-2 rounded-full w-[95%] max-w-[650px] font-bold md:text-lg md:mb-1 shadow-sm shadow-black/30 md:h-[55px] bg-primary-t-8 text-white"
        variant={"inverted"}
      >
        <div className="flex items-center w-full h-full justify-center relative">
          Quero fazer sucesso!
          <div className="w-[30px] h-[30px] flex items-center justify-center absolute bg-white rounded-full text-primary right-0">
            <MdKeyboardDoubleArrowRight className="w-[35px] h-[25px]" />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default AboutStudents;
