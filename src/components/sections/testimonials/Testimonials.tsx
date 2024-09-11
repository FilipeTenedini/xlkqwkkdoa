import VideoSlider from "@/components/video-slider/VideoSlider";

const Testimonials: React.FC = () => {
  return (
    <div className="w-full bg-primary-t-1 mb-4 flex flex-col items-center justify-center text-black py-4 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4 md:mb-6 text-center w-full">
        Depoimentos e Histórias de Sucesso
      </h2>
      <h3 className="text-xl mb-4 md:mb-6 text-center w-full">
        Dentistas que já transformaram suas carreiras com lentes de resina!
      </h3>
      <div className="mb-2">
        Depois de ministrar <span className="font-semibold">15 edições</span> do
        curso presencialmente, resolvemos trazer essa experiência para o formato
        digital e alcançar ainda mais dentistas!
      </div>
      <div className="mb-5">
        Confira alguns depoimentos de quem já participou e está colhendo os
        frutos dessa transformação:
      </div>
      <VideoSlider />
    </div>
  );
};

export default Testimonials;
