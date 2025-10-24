import React from "react";
import HeadingH2 from "@/components/ui/HeadingH2";
import aboutImage from "../assets/Images/image 69.png";
import bgImage from '../assets/Images/image 71.png'
const AboutUs: React.FC = () => {
  return (
    <div  className=" bg-contain bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}>
   
    <div className="gap-[68px] flex flex-row md:flex-row items-center justify-between gap-8 max-w-[1370px] mx-auto px-1 md:px-1 py-1 md:py-[100px]">
      {/* Left Side: Image */}
      <div className="relative w-full md:max-w-[486px] after:content-[''] after:absolute after:top-[0px] after:right-[0px] after:w-full after:h-full after:bg-[#210226] after:from-transparent after:to-black after:rounded-2xl after:-z-0">
        <img
          src={aboutImage}
          alt="About Cosmic Chemistry"
          className="w-full h-auto rounded-2xl relative z-[1] top-[-45px] right-[-45px]"
        />
      </div>
      {/* Right Side: Text */}
      <div className="w-full md:max-w-[750px]">
        <HeadingH2
          title="About Us"
          subTitle="Bringing cosmic alignment into modern dating."
          subLine={
            <div className="max-w-[648px]">
              <p className="text-lg text-[#424242]">
                At Cosmic Chemistry, we believe love is more than chance — it’s destiny written in the stars. Unlike ordinary dating apps
              </p>
              <p className="text-lg mt-6 text-[#424242]">
               We use the full cosmic blueprint of your birth chart to create smarter matches, deeper connections, and relationships aligned with your heart and soul purpose.
              </p>
            </div>
          }
          button="Seek Your Partner"
        />
      </div>
    </div>
     </div>
  );
};

export default AboutUs;