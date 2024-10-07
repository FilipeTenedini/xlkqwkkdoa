import Header from "./components/header/Header";
import VideoPlayer from "./components/video-player/VideoPlayer";
import AboutCourse from "./components/about-course/AboutCourse";
import AboutStudents from "./components/about-students/AboutStudents";
import Faq from "./components/faq/Faq";
import CourseNameSlider from "./components/course-name-slider/CourseNameSlider";
import AboutTeacher from "./components/about-teacher/AboutTeacher";
import Footer from "./components/footer/Footer";

const CursoMain: React.FC = () => {
  return (
    <>
      <Header />
      <CourseNameSlider />
      <VideoPlayer />
      <AboutCourse />
      <AboutStudents />
      <CourseNameSlider />
      <AboutTeacher />
      <Faq />
      <Footer />
    </>
  );
};

export default CursoMain;
