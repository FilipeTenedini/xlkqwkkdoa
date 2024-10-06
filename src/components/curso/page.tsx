import Header from "./components/header/Header";
import VideoPlayer from "./components/video-player/VideoPlayer";
import AboutCourse from "./components/about-course/AboutCourse";
import AboutStudents from "./components/about-students/AboutStudents";
import Faq from "./components/faq/Faq";

const CursoMain: React.FC = () => {
  return (
    <>
      <Header />
      <div className="h-[30px] text-black flex items-center overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
          {Array.from({ length: 10000 }).map((i, idx) => (
            <div key={`one-${i}-${idx}`}>
              <span className="mx-2">lentes de resina</span>
              <span className="mx-2">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
      <VideoPlayer />
      <AboutCourse />
      <AboutStudents />
      <Faq />
    </>
  );
};

export default CursoMain;
