"use client";

import AboutDetailsItem from "./AboutDetailsItem";

const results: {
  text: string;
  info: string;
}[] = [
  {
    text: "módulos",
    info: "3"
  },
  {
    text: "técnica exclusiva e descomplicada",
    info: "1"
  },
  {
    text: "aulas",
    info: "4"
  },
  {
    text: "demonstração de caso clínico",
    info: "1"
  },
];

const AboutDetails: React.FC = () => {
  return (
    <ul className="px-4 w-full grid grid-cols-2 gap-4 items-center justify-items-center md:flex md:justify-center md:max-w-[75%]">
      {results.map((item, idx) => (
        <AboutDetailsItem key={`${item.text}-${idx}`} text={item.text} info={item.info} />
      ))}
    </ul>
  );
};

export default AboutDetails;
