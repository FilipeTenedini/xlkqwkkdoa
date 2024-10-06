import AboutDetailsItem from "./AboutDetailsItem";

const results: {
  text: string;
  info: string;
}[] = [
  {
    text: "técnicas ensinadas",
    info: "25"
  },
  {
    text: "aulas",
    info: "4"
  },
  {
    text: "de curso",
    info: "19h"
  },
  {
    text: "demonstrações práticas",
    info: "31"
  },
];

const AboutDetails: React.FC = () => {
  return (
    <ul className="px-4 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-items-center md:flex md:justify-center md:max-w-[75%]">
      {results.map((item, idx) => (
        <AboutDetailsItem key={`${item.text}-${idx}`} text={item.text} info={item.info} />
      ))}
    </ul>
  );
};

export default AboutDetails;
