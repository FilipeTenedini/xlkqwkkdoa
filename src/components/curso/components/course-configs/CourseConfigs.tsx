"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { CiUnlock } from "react-icons/ci";
import { motion } from "framer-motion";

const CourseConfigs: React.FC = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center text-black">
      <div className="w-full flex flex-col items-center sm:flex-row md:gap-x-10 justify-center p-10 gap-y-4">
        {results.map((item, index) => (
          <CourseConfigItem key={index} text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

const results: {
  text: string;
  icon: JSX.Element;
}[] = [
  {
    text: "Acesso imediato",
    icon: <CiUnlock className="text-3xl h-8 mr-2" />, // Aumentado para text-3xl e h-8
  },
  {
    text: "7 dias de garantia",
    icon: <FaCheck className="text-3xl h-8 mr-2" />, // Aumentado para text-3xl e h-8
  },
  {
    text: "12 meses de acesso",
    icon: <IoKeyOutline className="text-3xl h-8 mr-2" />, // Aumentado para text-3xl e h-8
  },
];

interface CourseConfigItemProps {
  text: string;
  icon: JSX.Element;
}

const CourseConfigItem: React.FC<CourseConfigItemProps> = ({ text, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={itemRef}
      className="flex items-center mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className=" text-primary">{icon}</div>
        <div>
          <span className="text-lg">{text}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseConfigs;
