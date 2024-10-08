"use client";

/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/old/ui/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CourseCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Desativa o observador após a primeira animação
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Debounce function
  const debounce = useMemo(() => {
    let timeout: NodeJS.Timeout;
    return (func: Function, delay: number) => {
      return (...args: unknown[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
      };
    };
  }, []);

  const handleEnroll = useCallback(
    debounce((() => {
      // Código para inscrever-se
      console.log("Inscrição realizada!");
    }), 300),
    [debounce]
  );

  return (
    <motion.div
      ref={cardRef}
      className="w-full px-4 mb-7 flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="border min-w-[450px] max-w-[800px] border-primary bg-primary-t-1 rounded-xl p-4 flex flex-col items-center justify-center">
        <div className="bg-black text-white text-center rounded-xl px-4 mb-4">
          Descomplicando Lentes de Resina
        </div>
        <div className="text-black">
          <div className="w-full text-center">
            <span className="text-lg">8x</span>{" "}
            <span className="text-2xl font-poppinsSb">R$ 340,17</span>
          </div>
        </div>
        <Button
          onClick={handleEnroll}
          className="w-full mt-6 mb-2 rounded-full font-bold md:text-lg md:mb-1 max-w-[300px] shadow-sm shadow-black/30 md:h-11 bg-primary-t-8 text-white"
          variant={"inverted"}
        >
          <div className="flex items-center w-full h-full justify-center relative">
            Inscreva-se agora!
            <div className="w-[30px] h-[30px] flex items-center justify-center absolute bg-white rounded-full text-primary right-0">
              <MdKeyboardDoubleArrowRight className="w-[35px] h-[25px]" />
            </div>
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
