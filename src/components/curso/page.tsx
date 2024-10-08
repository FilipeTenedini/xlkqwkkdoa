"use client";
import Header from "./components/header/Header";

import AboutCourse from "./components/about-course/AboutCourse";
import Faq from "./components/faq/Faq";
import CourseNameSlider from "./components/course-name-slider/CourseNameSlider";
import AboutTeacher from "./components/about-teacher/AboutTeacher";
import Footer from "./components/footer/Footer";
import CourseCard from "./components/course-card/CourseCard";
import { lazy } from "react";


const VideoPlayer = lazy(() => import("./components/video-player/VideoPlayer"));
const AboutStudents = lazy(() => import("./components/about-students/AboutStudents"));

const CursoMain: React.FC = () => {
  return (
    <>
      <Header />
      <CourseNameSlider />
      <VideoPlayer />
      <AboutCourse />
      <CourseCard />
      <AboutStudents />
      <div className="w-full border border-bottom border-top border-black">
        <CourseNameSlider />
      </div>
      <Faq />
      <AboutTeacher />
      <Footer />
    </>
  );
};

export default CursoMain;
