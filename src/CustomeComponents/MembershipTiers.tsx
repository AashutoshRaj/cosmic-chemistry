import HeadingH2 from "@/components/ui/HeadingH2";
import bgImageMember from "../assets/Images/image 84.png";
import image2 from "../assets/Images/game-icons_psychic-waves.png";
import image3 from "../assets/Images/arcticons_tarot-stars.png";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import numerologyBg from "../assets/Images/numerology-concept-composition (2) 1.png";
import bgImageCard from "../assets/Images/numerology-concept-composition (2) 1.png";
interface MembershipTierProps {
  icon: string;
  title: string;
  description: string;
  buttonTitle: string;
  points: { point: string }[];
}

const tiersCard: MembershipTierProps[] = [
  {
    icon: image3,
    title: "Tier 1: Essential Alignment ($)",
    description: "Match based on full natal charts, not just sun signs.",
    buttonTitle: "Call to Action",
    points: [
      { point: "Downloadable personal chart" },
      { point: "Sign-based compatibility explanations" },
      { point: "View your personal chart" },
    ],
  },
  {
    icon: image2,
    title: "Tier 2: Cosmic Depths ($$)",
    description: "Tier-based interpretations of your chart and compatibility.",
    buttonTitle: "Call to Action",
    points: [
      { point: "All Tier 1 features" },
      { point: "Advanced aspects, overlays, and angles" },
      { point: "Synastry chart (non-downloadable)" },
       { point: "Matchmaking priority" },
        { point: "Deeper compatibility reports" },
    ],
  },
];

const MembershipTiers: React.FC = () => {
  return (
    <div
      className="text-center py-[76px] mx-auto bg-black"
      style={{
        backgroundImage: `url(${bgImageMember})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeadingH2
        title=""
        subTitle={<div className="text-white">💎 Membership Tiers</div>}
        subLine={
          <div className="w-full max-w-[1040px] mx-auto">
            <p className="text-lg text-white">
              Try free for 7 days. Unlock Tier 1 or Tier 2 for deeper
              connections
            </p>
          </div>
        }
        button=""
      />
      <div className="flex flex-row md:flex-row gap-8 justify-center items-stretch mt-12 max-w-[860px] mx-auto">
        {tiersCard.map((item, index) => (
          <Card
            key={index}
            className="bg-transparent border-dotted border-white rounded-[10px] border-[3px] text-white flex-1 flex flex-col justify-between mx-auto p-[30px]"
            style={{
              backgroundImage: `url(${bgImageCard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center mb-4">
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[80px] h-[80px] object-contain mb-4"
                />
              )}
              <CardTitle className="font-semibold text-[22px] leading-[30px] text-center mb-5">
                {item.title}
              </CardTitle>
              <CardContent className="p-0">
                <ul className="min-h-[195px]">
                  {item.points.map((pointObj, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="font-medium text-[16px] leading-[25px] mb-[9px] text-left relative ps-8 after:content-['✔'] after:absolute after:left-0 after:top-1/2 after:transform after:-translate-y-1/2 after:w-[20px] after:h-[20px] after:bg-white after:rounded-full after:text-black after:flex after:items-center after:justify-center after:text-base"
                    >
                      {pointObj.point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <Button className="border-[#ffffff] border-solid border-[1px] bg-[#191970] w-full mx-auto h-[52px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0] mt-[20px]">
              {item.buttonTitle}
            </Button>
            <p className="text-base italic opacity-80">
              ✨ Discover your compatibility blueprint. Join the stars at Cosmic
              Chemistry
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MembershipTiers;
