const CourseNameSlider: React.FC = () => {
  return (
    <div className="h-[30px] text-black flex items-center overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {Array.from({ length: 10000 }).map((i, idx) => (
          <div key={`one-${i}-${idx}`}>
            <span className="mx-2">lentes de resina</span>
            <span className="mx-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseNameSlider;
