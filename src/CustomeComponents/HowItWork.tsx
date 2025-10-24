import { Card, CardContent, CardTitle } from "@/components/ui/card";
import image1 from "../assets/Images/schedule 1.png"
import image2 from "../assets/Images/astrology (1) 1.png"
import image3 from "../assets/Images/chat 1.png"


// WorkCard props interfaceP
interface WorkCardProps {
  imgSrc: string;
  title: string;
  content: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ imgSrc, title, content }) => {
  return (
    <Card className="text-center bg-[#03142A] p-6 rounded-[10px] shadow-lg border border-[#f2f2f2] text-white">
      <div className="flex justify-center items-center mt-6 w-[100px] h-[100px] mx-auto border border-dotted border-white rounded-full">
        <img src={imgSrc} alt={title} className="w-full max-w-[50px] "/>
      </div>      
        <CardTitle className="font-semibold text-[22px] leading-[30px] text-center mb-0 min-h-[60px]">{title}</CardTitle>
      
      <CardContent className="p-0">
        <p className="font-medium text-[16px] leading-[25px] text-center">{content}</p>
      </CardContent>
    </Card>
  );
};

// HowItWork component
const HowItWork: React.FC = () => {
  const cardDetails: WorkCardProps[] = [
    {
      imgSrc: image1,
      title: "Enter your birth info",
      content: "Date, time, and place — your personal cosmic blueprint.",
    },
    {
      imgSrc: image2,
      title: "Get matched through your astrology chart",
      content: "Our astrology engine calculates compatibility beyond sun signs.",
    },
    {
      imgSrc:image3,
      title: "Connect with cosmic compatibility",
      content: "Start conversations aligned with your destiny.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-[#03142A] to-[#000000]">
      <h3 className="text-5xl text-center font-extrabold bg-gradient-to-r from-[#FFFFFF] to-[#ffffff] bg-clip-text text-transparent">
        How It Works
      </h3>
      <div className="grid gap-8 mt-12 md:grid-cols-3 sm:grid-cols-1 max-w-[1086px] mx-auto px-4">
        {cardDetails.map((item, index) => (
          <WorkCard key={index} imgSrc={item.imgSrc} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
