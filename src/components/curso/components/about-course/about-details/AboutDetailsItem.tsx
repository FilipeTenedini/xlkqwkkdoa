import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  info: string;
}

const AboutDetailsItem: React.FC<Props> = ({ text, info }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);

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
    <motion.li
      ref={itemRef}
      className="text-black mb-3 bg-primary-t-4 min-w-[180px] w-[80%] h-[120px] rounded-xl min-h-20 flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full px-4">
        <div className="flex flex-col md:text-lg">
          <div className="flex items-center justify-center text-3xl text-primary w-full font-bold mt-0.5 md:mt-1">
            {info}
          </div>
          <div className="text-center w-full">{text}</div>
        </div>
      </div>
    </motion.li>
  );
};

export default AboutDetailsItem;
