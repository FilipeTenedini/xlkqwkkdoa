import AboutDetails from "./about-details/AboutDetails";
import AboutInfos from "./about-infos/AboutInfos";

const AboutCourse: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col mb-20">
      <AboutInfos />
      <div className="rounded-full border border-black w-[140px] p-2 text-center text-black mb-5 mt-6">
        Curso
      </div>
      <AboutDetails />
    </div>
  );
};

export default AboutCourse;
