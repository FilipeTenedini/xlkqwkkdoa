import Header from "./components/header/Header";
import VideoPlayer from "./components/video-player/VideoPlayer";
import AboutCourse from "./components/about-course/AboutCourse";

const CursoMain: React.FC = () => {
  return (
    <>
      <Header />
      <div className="h-[30px] text-black flex items-center justify-around">
        lentes de resina!
      </div>
      <VideoPlayer />
      <AboutCourse />
    </>
  );
};

export default CursoMain;
