import Banner from "./curso-page/Banner";
import Learn from "./curso-page/learn/Learn";
import Faq from "./curso-page/sections/faq/Faq";
import FiveSession from "./curso-page/sections/FiveSession";
import FourthSession from "./curso-page/sections/FourthSession";
import SecondSession from "./curso-page/sections/SecondSession";
import SixSession from "./curso-page/sections/SixSession";
import ThirdSession from "./curso-page/sections/ThirdSession";
import WhoAmI from "./curso-page/sections/whoami/WhoAmi";

const CursoMain: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center font-poppins text-black">
      <div className="flex flex-col items-center justify-center">
        <Banner />
        <SecondSession />
        <ThirdSession />
        <FourthSession />
        <Learn />
        <WhoAmI />
        <FiveSession />
        <SixSession />
        <Faq />
      </div>
    </div>
  );
};

export default CursoMain;
