import React from "react";
import Heading from "@/components/ui/Heading";
import wheele from '../../../assets/Images/Vector (1).png';
import bgImage from '../../../assets/Images/image 66.png';  

const BannerHero: React.FC = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="w-full  sm:max-h-[620px]  sm:flex-row flex flex-row items-center justify-between max-w-[1370px] mx-auto px-4 md:px-1 py-12 md:py-24"
      >
        <div className="w-full md:max-w-[700px] mb-10 md:mb-0">
          <Heading
            title="Welcome to Cosmic Chemistry"
            subTitle="Where Destiny Meets Compatibility"
            subLine="Discover love aligned with the stars. At Cosmic Chemistry, your full birth chart is the blueprint for finding a true partner who resonates with your soul."
            button="Start Your Journey"
          />
        </div>
        <div className="w-full max-w-[470px]">
          <img src={wheele} alt="wheele" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default BannerHero;
