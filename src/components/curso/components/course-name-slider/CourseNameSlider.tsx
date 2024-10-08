"use client";

const CourseNameSlider: React.FC = () => {
  return (
    <div className="h-[30px] text-black flex items-center overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {Array.from({ length: 50 }).map((_, idx) => (
          <div key={idx}>
            <span className="mx-2">lentes de resina</span>
            <span className="mx-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseNameSlider;
