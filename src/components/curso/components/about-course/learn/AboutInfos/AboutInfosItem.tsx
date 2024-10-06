import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface Props {
  text: string;
  icon: ReactElement;
}

const AboutInfosItem: React.FC<Props> = ({ text, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Para não observar mais após aparecer
          }
        });
      },
      {
        threshold: 0.1, // Quando 10% do item estiver visível
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
      className="text-black mb-3 bg-primary-t-4 rounded-full min-h-20 flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full px-4">
        <div className="flex md:text-lg">
          <div className="flex items-center justify-center w-[28px] mt-0.5 md:mt-1">{icon}</div>
          {text}
        </div>
      </div>
    </motion.li>
  );
};

export default AboutInfosItem;
