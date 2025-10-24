import HeadingH2 from "@/components/ui/HeadingH2";
import bgFeat from '../assets/Images/featBg.png';
import featuresImg from "../assets/Images/image 82.png";
import { Button } from "@/components/ui/button";
import image1 from "../assets/Images/couple 1.png"
import image2 from "../assets/Images/astrology (1) 2.png"
import image3 from "../assets/Images/subscription 1.png"




interface AmazingFeaturesProps {
  image: string;
  title: string;
  description: string;
}

const features: AmazingFeaturesProps[] = [
  {
    image: image1,
    title: "Compatibility Matching",
    description: "Match based on full natal charts, not just sun signs.",
  },
   {
    image: image2,
    title: "Personal Insights ",
    description: "Tier-based interpretations of your chart and compatibility",
  },
   {
    image: image3,
    title: "Subscription Options",
    description: "Free trial to explore, then choose Tier 1 or Tier 2 for deeper insights.",
  }
];

const AmazingFeatures: React.FC = () => {
  return (
    <div
      className="text-center py-[76px]  mx-auto bg-black"
      style={{ backgroundImage: `url(${bgFeat})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <HeadingH2
        title=""
        subTitle={<div className="text-white">Amazing Features</div>}
        subLine={
          <div className="w-full max-w-[1040px] mx-auto">
            <p className="text-lg text-white">
              To find meaningful connections, dates, and life partners.
            </p>
          </div>
        }
        button=""
      />

      <div className="flex flex-row md:flex-row items-center justify-center gap-8 max-w-[1370px] w-full mx-auto px-4 mt-16">       
        <div className="flex-1 md:flex-1">
          <img src={featuresImg} alt="Feature Image" className="mx-auto w-full" />
        </div>      
        <div className="flex flex-col gap-6 w-full max-w-[577px] gap-[50px]">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-8 max-w-full px-4">
              <div className="w-full  bg-white border border rounded-full  min-w-[100px] max-w-[100px] min-h-[100px] flex justify-center items-center border border-dotted border-white  border-[5px] border-solid border-[#9d9898]">
                <img src={item.image} alt={item.title} className="mx-auto w-full max-w-[40px]" />
              </div>
              <div className="text-white text-left">
                <h4 className="font-semibold text-xl">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
         <Button className='ms-[40px] bg-[#191970] max-w-[243px] h-[52px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0] mt-[30px]'>Start Your Journey</Button>
        </div>
      </div>
    </div>
  );
};

export default AmazingFeatures;
